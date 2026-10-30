/**
 * VEREDA — Microtorrefação & Objetos de Extração
 * Lógica de Simulação de Compra, Validações e Interações de Interface
 * Desenvolvido com JavaScript Puro (ES6+)
 */

/* ==========================================================================
   1. CADASTRO DOS PRODUTOS E REGRAS COMERCIAIS
   Os nomes e preços abaixo são exatamente iguais aos exibidos no HTML.
   ========================================================================== */
const PRODUTOS = [
  {
    id: 1,
    nome: "Lote 01 · Geisha da Neblina (250g)",
    categoria: "Microlote · Serra do Caparaó",
    preco: 68.00
  },
  {
    id: 2,
    nome: "Lote 02 · Catuaí Vermelho Natural (250g)",
    categoria: "Terroir · Mantiqueira de Minas",
    preco: 54.00
  },
  {
    id: 3,
    nome: "Lote 03 · Bourbon Amarelo Lavado (250g)",
    categoria: "Clássico · Chapada Diamantina",
    preco: 48.00
  },
  {
    id: 4,
    nome: "Lote 04 · Arara Mel de Engenho (250g)",
    categoria: "Experimental · Alta Mogiana",
    preco: 62.00
  },
  {
    id: 5,
    nome: "Objeto 05 · Coador Vértice em Cerâmica",
    categoria: "Artefato · Grés 1.280 °C",
    preco: 135.00
  },
  {
    id: 6,
    nome: "Objeto 06 · Chaleira Bico de Ganso Âmbar (600ml)",
    categoria: "Instrumento · Aço Inox 304",
    preco: 210.00
  }
];

const REGRA_DESCONTO = {
  valorMinimo: 180.00,
  percentual: 10,
  taxa: 0.10
};

/* ==========================================================================
   2. FUNÇÕES UTILITÁRIAS DE FORMATAÇÃO E VALIDAÇÃO
   ========================================================================== */

/**
 * Formata um valor numérico para o padrão monetário brasileiro (R$).
 * @param {number} valor - Valor numérico a ser formatado.
 * @returns {string} Valor formatado em BRL.
 */
function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

/**
 * Solicita e valida a quantidade desejada de um produto via prompt().
 * Regra explícita para campo vazio: considerado inválido (o usuário deve digitar 0
 * caso não deseje o produto).
 *
 * @param {Object} produto - Objeto do produto cadastrado.
 * @param {number} indiceAtual - Posição do produto (1 a N).
 * @param {number} totalProdutos - Total de produtos no catálogo.
 * @returns {number|null} Quantidade inteira >= 0 ou null se o usuário cancelar.
 */
function solicitarQuantidadeProduto(produto, indiceAtual, totalProdutos) {
  const precoFormatado = formatarMoeda(produto.preco);

  while (true) {
    const mensagemPrompt =
      `VEREDA TORREFAÇÃO — Etapa ${indiceAtual} de ${totalProdutos}\n\n` +
      `Produto: ${produto.nome}\n` +
      `Preço unitário: ${precoFormatado}\n\n` +
      `Digite a quantidade desejada (ou 0 para não incluir este item):`;

    const respostaBruta = prompt(mensagemPrompt);

    // Se o usuário clicou em "Cancelar" (retorna null), interrompe imediatamente
    if (respostaBruta === null) {
      return null;
    }

    const textoLimpo = respostaBruta.trim();

    // Tratamento explícito para campo em branco
    if (textoLimpo === "") {
      alert(
        "Entrada inválida: o campo foi deixado em branco.\n" +
        "Por favor, digite 0 caso não deseje o produto ou informe um número inteiro positivo."
      );
      continue;
    }

    // Conversão obrigatória utilizando Number()
    const quantidade = Number(textoLimpo);

    // Validação: precisa ser um número finito, inteiro e maior ou igual a zero
    if (!Number.isFinite(quantidade) || !Number.isInteger(quantidade) || quantidade < 0) {
      alert(
        `Quantidade inválida ("${respostaBruta}").\n` +
        `Informe apenas números inteiros iguais ou maiores que zero (ex.: 0, 1, 2, 3). ` +
        `Não são permitidos valores negativos, decimais ou letras.`
      );
      continue;
    }

    return quantidade;
  }
}

/* ==========================================================================
   3. FUNÇÃO PRINCIPAL DE SIMULAÇÃO DE COMPRA
   ========================================================================== */

/**
 * Atualiza o painel de registro na página com o status da última simulação.
 * Complementa a exibição obrigatória em alert().
 *
 * @param {string} statusTexto - Rótulo curto de status.
 * @param {string} conteudoTexto - Resumo textual detalhado.
 */
function atualizarRegistroBancada(statusTexto, conteudoTexto) {
  const elementoStatus = document.getElementById("status-simulacao");
  const elementoVazio = document.getElementById("texto-resumo-vazio");
  const containerConteudo = document.getElementById("conteudo-ultimo-resumo");

  if (!elementoStatus || !elementoVazio || !containerConteudo) {
    return;
  }

  elementoStatus.textContent = statusTexto;
  elementoVazio.hidden = true;
  containerConteudo.hidden = false;

  const blocoPre = document.createElement("pre");
  blocoPre.textContent = conteudoTexto;
  containerConteudo.replaceChildren(blocoPre);
}

/**
 * Executa a simulação completa de compra para todos os produtos cadastrados.
 */
function simularCompra() {
  const itensPedido = [];
  let somaSubtotais = 0;

  // 1. Solicita a quantidade de cada produto cadastrado em sequência
  for (let i = 0; i < PRODUTOS.length; i++) {
    const produtoAtual = PRODUTOS[i];
    const quantidade = solicitarQuantidadeProduto(produtoAtual, i + 1, PRODUTOS.length);

    // Verifica se o usuário cancelou o prompt()
    if (quantidade === null) {
      const mensagemCancelamento = "Simulação de compra cancelada pelo usuário.";
      alert(mensagemCancelamento);
      atualizarRegistroBancada("Simulação cancelada", mensagemCancelamento);
      return;
    }

    // Fórmula obrigatória: subtotal = preço × quantidade
    const subtotalProduto = produtoAtual.preco * quantidade;
    somaSubtotais += subtotalProduto;

    if (quantidade > 0) {
      itensPedido.push({
        nome: produtoAtual.nome,
        quantidade: quantidade,
        precoUnitario: produtoAtual.preco,
        subtotal: subtotalProduto
      });
    }
  }

  // 2. Regra obrigatória quando todas as quantidades forem iguais a zero
  if (itensPedido.length === 0) {
    const mensagemSemProdutos = "Nenhum produto foi selecionado.";
    alert(mensagemSemProdutos);
    atualizarRegistroBancada("Sem itens (0)", mensagemSemProdutos);
    return;
  }

  // 3. Verificação automática da regra de desconto
  const temDireitoDesconto = somaSubtotais >= REGRA_DESCONTO.valorMinimo;
  const valorDesconto = temDireitoDesconto ? somaSubtotais * REGRA_DESCONTO.taxa : 0;
  const totalFinal = somaSubtotais - valorDesconto;

  // 4. Montagem do resumo da compra conforme o modelo exigido
  const blocosProdutos = itensPedido.map((item) => {
    return (
      `Produto: ${item.nome}\n` +
      `Quantidade: ${item.quantidade}\n` +
      `Preço unitário: ${formatarMoeda(item.precoUnitario)}\n` +
      `Subtotal: ${formatarMoeda(item.subtotal)}`
    );
  });

  let blocoFinanceiro = "";

  if (temDireitoDesconto) {
    blocoFinanceiro =
      `----------------------------------------\n` +
      `Subtotal dos produtos: ${formatarMoeda(somaSubtotais)}\n` +
      `Desconto Clube de Torra (${REGRA_DESCONTO.percentual}%): - ${formatarMoeda(valorDesconto)}\n` +
      `TOTAL DA COMPRA: ${formatarMoeda(totalFinal)}`;
  } else {
    const valorFaltante = REGRA_DESCONTO.valorMinimo - somaSubtotais;
    blocoFinanceiro =
      `----------------------------------------\n` +
      `Subtotal dos produtos: ${formatarMoeda(somaSubtotais)}\n` +
      `Desconto: Não aplicável (compras abaixo de ${formatarMoeda(REGRA_DESCONTO.valorMinimo)} não recebem desconto; faltaram ${formatarMoeda(valorFaltante)} para 10% OFF)\n` +
      `TOTAL DA COMPRA: ${formatarMoeda(totalFinal)}`;
  }

  const resumoFinal =
    `RESUMO DA COMPRA\n\n` +
    `${blocosProdutos.join("\n\n")}\n\n` +
    `${blocoFinanceiro}`;

  // 5. Exibição obrigatória do resultado utilizando alert()
  alert(resumoFinal);

  // Atualiza também o registro visual de apoio na página
  const statusResumo = temDireitoDesconto ? "Concluída (10% OFF)" : "Concluída (Sem desconto)";
  atualizarRegistroBancada(statusResumo, resumoFinal);
}

/* ==========================================================================
   4. INTERAÇÕES DE INTERFACE (MENU MOBILE, FILTROS E DESTAQUE DE ITEM)
   ========================================================================== */

/**
 * Configura o menu responsivo para dispositivos móveis.
 */
function inicializarMenuMobile() {
  const botaoMenu = document.getElementById("btn-menu-mobile");
  const navegacao = document.getElementById("navegacao-principal");

  if (!botaoMenu || !navegacao) {
    return;
  }

  botaoMenu.addEventListener("click", () => {
    const estaAberto = botaoMenu.getAttribute("aria-expanded") === "true";
    botaoMenu.setAttribute("aria-expanded", String(!estaAberto));
    navegacao.classList.toggle("is-open", !estaAberto);
  });

  // Fecha o menu ao clicar em qualquer link de âncora
  const linksNavegacao = navegacao.querySelectorAll("a");
  linksNavegacao.forEach((link) => {
    link.addEventListener("click", () => {
      botaoMenu.setAttribute("aria-expanded", "false");
      navegacao.classList.remove("is-open");
    });
  });
}

/**
 * Configura a filtragem dinâmica dos produtos no catálogo por categoria.
 */
function inicializarFiltrosCatalogo() {
  const botoesFiltro = document.querySelectorAll(".filter-chip");
  const cardsProduto = document.querySelectorAll(".product-card");

  if (botoesFiltro.length === 0 || cardsProduto.length === 0) {
    return;
  }

  botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
      const categoriaSelecionada = botao.getAttribute("data-filter");

      botoesFiltro.forEach((b) => b.classList.remove("is-active"));
      botao.classList.add("is-active");

      cardsProduto.forEach((card) => {
        const categoriaCard = card.getAttribute("data-category");
        const deveMostrar =
          categoriaSelecionada === "todos" || categoriaCard === categoriaSelecionada;
        card.hidden = !deveMostrar;
      });
    });
  });
}

/**
 * Destaca na tabela de referência o produto cujo botão "Incluir na Simulação" foi clicado.
 */
function inicializarDestaqueReferencia() {
  const botoesCard = document.querySelectorAll("[data-highlight-product]");
  const linhasReferencia = document.querySelectorAll(".price-sheet__item");

  botoesCard.forEach((botao) => {
    botao.addEventListener("click", () => {
      const idProduto = botao.getAttribute("data-highlight-product");

      linhasReferencia.forEach((linha) => {
        const corresponde = linha.getAttribute("data-ref-id") === idProduto;
        linha.classList.toggle("is-highlighted", corresponde);
      });
    });
  });
}

/* ==========================================================================
   5. INICIALIZAÇÃO DOS EVENTOS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const botaoSimular = document.getElementById("btn-simular-compra");

  if (botaoSimular) {
    botaoSimular.addEventListener("click", simularCompra);
  }

  inicializarMenuMobile();
  inicializarFiltrosCatalogo();
  inicializarDestaqueReferencia();
});
