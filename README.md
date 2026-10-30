# VEREDA — Microtorrefação de Altitude & Objetos de Extração

![Captura de tela da loja virtual Vereda](assets/screenshot-loja.svg)

---

## 1. Apresentação

- **Nome do projeto:** VEREDA — Microtorrefação de Altitude & Objetos de Extração
- **Nome do aluno:** João *(substitua pelo seu nome completo antes de publicar, se desejar)*
- **Trilha:** Desenvolvimento Mobile
- **Descrição geral do projeto:**  
  A **VEREDA** é uma loja virtual autoral fictícia desenvolvida com **HTML5 semântico**, **CSS3 responsivo** e **JavaScript puro (Vanilla JS)**. O projeto foi concebido com direção de arte **Editorial & Artesanal Contemporânea**, inspirada em cadernos de prova de torra, fichas catalográficas de microlotes brasileiros e publicações impressas independentes sobre a cultura do café especial. Além da curadoria visual e narrativa de marca, a aplicação implementa um simulador interativo de compras via caixas de diálogo nativas do navegador (`prompt()` e `alert()`), com validação rigorosa de dados, formatação monetária no padrão brasileiro (`BRL`) e cálculo automático de desconto progressivo.

---

## 2. Identidade da Loja

- **Nome da marca:** **VEREDA** — Microtorrefação & Ritual
- **Slogan:** *“Da neblina da serra ao compasso da sua xícara.”*
- **Segmento:** Cafés especiais brasileiros de microlote (pontuação 86+ na tabela da *Specialty Coffee Association — SCA*) e objetos autorais para filtragem manual.
- **Conceito e posicionamento:**  
  Inspirada nas veredas e encostas de altitude de Minas Gerais, Espírito Santo, Bahia e São Paulo, a marca posiciona o preparo do café como uma pausa consciente (*slow coffee*). Em vez de apelos comerciais genéricos, a comunicação valoriza a origem geográfica, a altitude da lavoura, o método de secagem em terreiro e a precisão térmica da extração.
- **Público-alvo:**  
  Apreciadores de cafés especiais, profissionais criativos, estudantes, leitores e consumidores que valorizam rastreabilidade de pequenos produtores, estética editorial e rituais matinais de preparo filtrado.
- **Proposta comercial e diferencial:**  
  Conectar diretamente sítios familiares de quatro regiões cafeeiras (Serra do Caparaó, Mantiqueira de Minas, Chapada Diamantina e Alta Mogiana) ao consumidor final, com microtorras semanais em lotes de 5 kg e instrumentos duráveis em cerâmica grés e aço inox.
- **Direção visual e Design System:**
  - **Paleta cromática (`:root`):**
    - `--cor-principal`: `#231A16` *(Espresso Profundo / Torra Escura)*
    - `--cor-secundaria`: `#5C4338` *(Casca de Cacau / Argila Tabaco)*
    - `--cor-destaque`: `#B85028` *(Terracota Cereja Madura)*
    - `--cor-fundo`: `#F6F1E7` *(Papel Algodão Cru / Pergaminho)*
    - `--cor-superficie`: `#EFE7D8` *(Areia de Terreiro / Kraft Claro)*
    - `--cor-texto-principal`: `#231A16` *(Espresso Profundo)*
    - `--cor-texto-secundario`: `#5E4E45` *(Cinza Umburana)*
  - **Tipografia:** Combinação de serifa editorial clássica para títulos (`Iowan Old Style`, `Palatino Linotype`, `Georgia`), sem-serifa humanista para leitura fluida (`Segoe UI`, `system-ui`) e monoespaçada técnica para códigos de lote, altitudes e recibos (`Cascadia Mono`, `Consolas`).

---

## 3. Catálogo de Produtos e Regra de Desconto

Todos os produtos exibidos no catálogo em `index.html` estão sincronizados com a constante `PRODUTOS` em `script.js`:

| Item | Produto | Categoria / Origem | Descrição Comercial | Preço Unitário |
| :---: | :--- | :--- | :--- | :---: |
| **01** | **Lote 01 · Geisha da Neblina (250g)** | Microlote · Serra do Caparaó (1.420m) | Fermentação lenta em cereja sob clima frio de montanha. Notas florais de jasmim, pêssego branco e mel de laranjeira. | **R$ 68,00** |
| **02** | **Lote 02 · Catuaí Vermelho Natural (250g)** | Terroir · Mantiqueira de Minas (1.280m) | Secagem lenta em terreiro suspenso. Corpo aveludado com notas de caramelo tostado, avelã e cacau 70%. | **R$ 54,00** |
| **03** | **Lote 03 · Bourbon Amarelo Lavado (250g)** | Clássico · Chapada Diamantina (1.350m) | Cereja descascado lavado em água de nascente. Doçura de caldo de cana, maçã vermelha assada e especiarias doces. | **R$ 48,00** |
| **04** | **Lote 04 · Arara Mel de Engenho (250g)** | Experimental · Alta Mogiana (1.190m) | Secagem *honey* com mucilagem preservada. Notas de rapadura, tangerina madura e amêndoas. | **R$ 62,00** |
| **05** | **Objeto 05 · Coador Vértice em Cerâmica** | Artefato · Grés Queimado a 1.280 °C | Modelado em torno com argila tabaco e 24 nervuras espirais internas que garantem estabilidade térmica e fluxo contínuo. | **R$ 135,00** |
| **06** | **Objeto 06 · Chaleira Bico de Ganso Âmbar (600ml)** | Instrumento · Aço Inox 304 Escovado | Bico de precisão para despejo laminar sem turbulência, termômetro analógico integrado na tampa e cabo em madeira. | **R$ 210,00** |

### Regra de Desconto (Clube de Torra Vereda)
- **Condição:** Compras cujo subtotal somado atinja **R$ 180,00 ou mais** recebem automaticamente **10% de desconto** sobre o valor total.
- **Compras abaixo de R$ 180,00:** Não recebem desconto, mantendo o valor integral e informando no resumo quanto faltou para atingir a faixa promocional.

---

## 4. Tecnologias Utilizadas

- **HTML5 Semântico:**  
  Estruturação com `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`, `<dl>` e `<footer>`. Uso de atributos de acessibilidade (`aria-label`, `aria-labelledby`, `aria-expanded`, `aria-controls`, `aria-live="polite"`), link de salto rápido (`.skip-link`) para navegação por teclado e textos alternativos (`alt`) detalhados em todas as ilustrações.
- **CSS3 Puro:**  
  Sistema de tokens centralizado em `:root`, layouts construídos com **CSS Grid** e **Flexbox**, tipografia fluida com `clamp()`, bordas e sombras em estilo editorial, estados de `:hover` e `:focus-visible`, adaptação completa para smartphones, tablets e desktops via `@media`, além de suporte à preferência de acessibilidade `@media (prefers-reduced-motion: reduce)`.
- **JavaScript Puro (ES6+):**  
  Implementação modular sem uso de bibliotecas ou frameworks externos. Gerencia o catálogo estruturado de produtos, o fluxo sequencial de `prompt()`, a conversão obrigatória com `Number()`, as validações com `Number.isFinite()` e `Number.isInteger()`, a formatação monetária com `toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })`, a apresentação obrigatória do resumo em `alert()`, os filtros de categoria do catálogo e o menu mobile responsivo.

---

## 5. Estrutura do Projeto

```text
Desafio_trilhas/
│
├── index.html                     # Estrutura semântica completa da loja virtual
├── style.css                      # Design system, layout responsivo e microinterações
├── script.js                      # Lógica de simulação de compra, validações e eventos de UI
├── README.md                      # Documentação técnica, conceitual e roteiro de testes
│
└── assets/                        # Ilustrações vetoriais autorais e captura da interface
    ├── logo-vereda.svg            # Símbolo topográfico e botânico da marca Vereda
    ├── hero-extracao.svg          # Gravura principal do ritual de extração na Hero Section
    ├── produto-01-geisha.svg      # Arte do Lote 01 · Geisha da Neblina
    ├── produto-02-catuai.svg      # Arte do Lote 02 · Catuaí Vermelho Natural
    ├── produto-03-bourbon.svg     # Arte do Lote 03 · Bourbon Amarelo Lavado
    ├── produto-04-arara.svg       # Arte do Lote 04 · Arara Mel de Engenho
    ├── produto-05-coador.svg      # Arte do Objeto 05 · Coador Vértice em Cerâmica
    ├── produto-06-chaleira.svg    # Arte do Objeto 06 · Chaleira Bico de Ganso Âmbar
    └── screenshot-loja.svg        # Captura visual da página desenvolvida
```

---

## 6. Como Executar o Projeto Localmente

O projeto não depende de servidor backend, banco de dados ou instalação de pacotes externos:

1. **Clone este repositório:**
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd Desafio_trilhas
   ```
3. **Abra o arquivo `index.html` no navegador:**
   - Dê um duplo clique diretamente sobre o arquivo `index.html` no explorador de arquivos do seu sistema operacional, **ou**
   - Utilize a extensão *Live Server* no VS Code / navegador de sua preferência.
4. **Execute a simulação de compra:**
   - Role até a seção **Simulador de Compra & Fechamento de Lote** (ou clique em **"Simular Compra"** no cabeçalho) e acione o botão **"Simular compra"**.

---

## 7. Testes Realizados

Todos os cenários obrigatórios foram executados e verificados sobre a lógica real de `script.js`:

| Nº | Cenário de Teste | Entradas Informadas nos `prompt()` | Resultado Obtido | Status |
| :---: | :--- | :--- | :--- | :---: |
| **1** | **Compra de um único produto** | `["1", "0", "0", "0", "0", "0"]` | Calcula 1x *Geisha da Neblina* (`R$ 68,00`), informa ausência de desconto e exibe `TOTAL DA COMPRA: R$ 68,00` via `alert()`. | Aprovado |
| **2** | **Compra de vários produtos** | `["1", "1", "0", "1", "0", "0"]` | Soma `R$ 68,00 + R$ 54,00 + R$ 62,00 = R$ 184,00`, aplica 10% OFF (`- R$ 18,40`) e exibe `TOTAL DA COMPRA: R$ 165,60`. | Aprovado |
| **3** | **Quantidade zero para um produto** | `["0", "2", "0", "1", "0", "0"]` | Ignora os produtos com quantidade `0` no resumo e lista apenas os produtos selecionados (2x *Catuaí* + 1x *Arara* = `R$ 170,00`). | Aprovado |
| **4** | **Todas as quantidades iguais a zero** | `["0", "0", "0", "0", "0", "0"]` | Não gera resumo de compra zerado; exibe exatamente o alerta `"Nenhum produto foi selecionado."`. | Aprovado |
| **5** | **Quantidade negativa** | `["-2", "1", "0", "0", "0", "0", "0"]` | Rejeita `-2` com alerta explicativo, solicita novamente a quantidade do 1º produto e prossegue após receber `1`. | Aprovado |
| **6** | **Entrada não numérica, vazia ou decimal** | `["abc", "", "1.5", "2", "0", "0", "0", "0", "0"]` | Rejeita `"abc"`, `""` (vazio) e `"1.5"` (decimal) individualmente e só avança quando recebe o inteiro válido `"2"`. | Aprovado |
| **7** | **Cancelamento de uma solicitação** | `["1", "1", null]` | Ao clicar em *Cancelar* no 3º produto (`null`), interrompe o laço imediatamente e exibe `"Simulação de compra cancelada pelo usuário."`. | Aprovado |
| **8** | **Compra com direito ao desconto** | `["0", "0", "0", "0", "0", "1"]` | 1x *Chaleira Bico de Ganso* (`R$ 210,00` >= `R$ 180,00`) recebe 10% de desconto (`- R$ 21,00`), totalizando `R$ 189,00`. | Aprovado |
| **9** | **Compra sem direito ao desconto** | `["0", "0", "0", "0", "1", "0"]` | 1x *Coador Vértice* (`R$ 135,00` < `R$ 180,00`) mantém valor integral de `R$ 135,00` e informa que faltaram `R$ 45,00` para o desconto. | Aprovado |

---

## 8. Dificuldades Encontradas e Aprendizados

Durante o desenvolvimento da função de validação das quantidades em `script.js`, surgiu uma situação importante envolvendo o comportamento nativo da função `Number()` no JavaScript:

- **O problema:** Quando o usuário deixa o campo do `prompt()` em branco (`""`) ou digita apenas espaços (`"   "`) e clica em *OK*, a chamada `Number("")` retorna silenciosamente o número `0` (zero), que passa nos testes `Number.isFinite(0)` e `Number.isInteger(0)`. Além disso, quando o usuário clica em *Cancelar*, o `prompt()` retorna `null`, e `Number(null)` também resulta em `0`. Se não distinguíssemos esses casos antes da conversão numérica, tanto o botão *Cancelar* quanto um campo em branco seriam confundidos com a quantidade `0`.
- **A solução implementada:**  
  1. Primeiro verificamos estritamente `if (respostaBruta === null)` logo após o `prompt()`, garantindo que o cancelamento interrompa imediatamente a simulação com segurança.  
  2. Em seguida, aplicamos `const textoLimpo = respostaBruta.trim()` e verificamos `if (textoLimpo === "")`, tratando o campo vazio explicitamente como entrada inválida e orientando o usuário a digitar `0` quando não quiser o produto.  
  3. Somente após essas duas garantias realizamos `const quantidade = Number(textoLimpo)` combinada com `Number.isFinite(quantidade)`, `Number.isInteger(quantidade)` e `quantidade >= 0`.

---

## 9. Utilização de Inteligência Artificial

Em conformidade com as diretrizes de transparência acadêmica:

- **Como a IA auxiliou no desenvolvimento:**  
  A ferramenta de IA foi utilizada como parceira de *pair programming* e direção de arte para estruturar o conceito da microtorrefação **VEREDA**, organizar as variáveis CSS do Design System em `:root` e desenhar as ilustrações vetoriais locais em SVG da pasta `assets/`.
- **Partes geradas e adaptadas:**  
  A estrutura base dos arquivos `index.html`, `style.css` e `script.js` foi construída sob supervisão das regras de negócio exigidas no desafio, garantindo que os preços e nomes do catálogo HTML estivessem sincronizados com a matriz `PRODUTOS` do JavaScript e que todas as imagens fossem locais.
- **Como o funcionamento foi verificado:**  
  Foi executado um conjunto de testes automatizados em ambiente Node.js simulando a máquina de estados dos diálogos `prompt()` e `alert()` para todos os 9 casos de uso (compras simples, múltiplas, quantidades zeradas, entradas negativas, decimais, alfanuméricas, campos vazios, cancelamento e faixas de desconto), além da inspeção de sincronia entre os atributos `data-price` do HTML e os valores numéricos do JavaScript.
- **Aprendizados consolidados:**  
  Compreensão prática de coerção de tipos em JavaScript com `Number()`, validação defensiva de entradas de usuário, formatação internacionalizada com `Intl` / `toLocaleString()`, semântica de acessibilidade web (`ARIA`) e criação de interfaces responsivas com identidade visual autoral usando CSS Grid e variáveis nativas.
