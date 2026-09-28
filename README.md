# ONG Esperança

Projeto acadêmico de desenvolvimento web para uma organização não governamental fictícia denominada **ONG Esperança**. O projeto foi desenvolvido com foco na aplicação prática de **HTML5 semântico, CSS3, JavaScript, acessibilidade, responsividade e organização de código front-end**.

A aplicação apresenta informações institucionais da ONG, seus projetos sociais e um formulário de cadastro, utilizando uma estrutura separada entre HTML, CSS, JavaScript e imagens.

## 📋 Índice

* [Sobre o projeto](#sobre-o-projeto)
* [Objetivos](#objetivos)
* [Funcionalidades](#funcionalidades)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Estrutura do projeto](#estrutura-do-projeto)
* [Pré-requisitos](#pré-requisitos)
* [Instalação e execução local](#instalação-e-execução-local)
* [Build e dependências](#build-e-dependências)
* [Testes e validação](#testes-e-validação)
* [Acessibilidade](#acessibilidade)
* [Versionamento](#versionamento)
* [Boas práticas adotadas](#boas-práticas-adotadas)
* [Contexto acadêmico](#contexto-acadêmico)

## 📖 Sobre o projeto

A **ONG Esperança** é uma aplicação web acadêmica desenvolvida para representar a presença digital de uma organização social fictícia.

O projeto disponibiliza informações sobre a instituição, apresenta seus projetos e iniciativas sociais e oferece uma página de cadastro para participação ou contato com a organização.

A aplicação foi desenvolvida utilizando tecnologias fundamentais do desenvolvimento front-end, sem dependência de frameworks para a estrutura, estilização ou lógica principal.

## 🎯 Objetivos

O projeto tem como principais objetivos:

* Aplicar os conceitos de **HTML5 semântico**;
* Desenvolver uma interface utilizando **CSS3**;
* Implementar interações utilizando **JavaScript**;
* Organizar o código em arquivos e diretórios específicos para cada responsabilidade;
* Aplicar conceitos básicos de **acessibilidade web**;
* Desenvolver uma interface responsiva para diferentes tamanhos de tela;
* Utilizar recursos nativos de validação de formulários;
* Praticar organização e versionamento de um projeto utilizando Git e GitHub.

## ✨ Funcionalidades

Entre as principais funcionalidades da aplicação estão:

* Página inicial com apresentação institucional da ONG;
* Área de informações sobre a organização;
* Apresentação dos projetos sociais;
* Informações relacionadas a doações e voluntariado;
* Página de cadastro;
* Validação de campos do formulário;
* Navegação entre as páginas;
* Interações implementadas com JavaScript;
* Layout estilizado com CSS3;
* Estrutura adaptada para diferentes dispositivos;
* Recursos básicos de acessibilidade.

## 🛠️ Tecnologias utilizadas

| Tecnologia          | Utilização                                                                                                 |
| ------------------- | ---------------------------------------------------------------------------------------------------------- |
| **HTML5**           | Estrutura e conteúdo das páginas                                                                           |
| **HTML5 Semântico** | Organização do conteúdo utilizando elementos como `header`, `nav`, `main`, `section`, `article` e `footer` |
| **CSS3**            | Estilização, layout, responsividade e apresentação visual                                                  |
| **JavaScript**      | Interações, manipulação do DOM e comportamentos dinâmicos                                                  |
| **Git**             | Controle de versão do projeto                                                                              |
| **GitHub**          | Hospedagem do código e gerenciamento do repositório                                                        |
| **W3C Validator**   | Validação da estrutura HTML                                                                                |

## 📁 Estrutura do projeto

```text
ong-esperanca-html5/
│
├── css/
│   └── arquivos de estilização
│
├── html/
│   ├── projetos.html
│   └── cadastro.html
│
├── imagens/
│   └── imagens utilizadas no projeto
│
├── js/
│   └── arquivos JavaScript
│
├── index.html
└── README.md
```

A separação dos arquivos procura manter responsabilidades distintas:

* `html/` — páginas adicionais da aplicação;
* `css/` — arquivos responsáveis pela apresentação visual;
* `js/` — scripts responsáveis pelas funcionalidades e interações;
* `imagens/` — recursos gráficos utilizados pela aplicação;
* `index.html` — página inicial da aplicação;
* `README.md` — documentação do projeto.

## 💻 Pré-requisitos

Para executar o projeto localmente, não é necessário instalar frameworks ou bibliotecas externas.

É necessário possuir:

* Um navegador web atualizado, como:

  * Google Chrome;
  * Mozilla Firefox;
  * Microsoft Edge;
  * Safari.
* Git, caso o projeto seja obtido por meio de clonagem do repositório.

Recomenda-se utilizar um editor de código como o **Visual Studio Code** para facilitar o desenvolvimento e a execução local.

## 🚀 Instalação e execução local

### 1. Clonar o repositório

No terminal, execute:

```bash
git clone https://github.com/RodrigoMA21/ong-esperanca-html5.git
```

### 2. Acessar o diretório

```bash
cd ong-esperanca-html5
```

### 3. Abrir o projeto

O projeto pode ser executado diretamente no navegador abrindo o arquivo:

```text
index.html
```

Como alternativa, recomenda-se utilizar um servidor local, como a extensão **Live Server** do Visual Studio Code.

### 4. Executar com servidor local

Após instalar a extensão Live Server:

1. Abra a pasta do projeto no Visual Studio Code;
2. Localize o arquivo `index.html`;
3. Clique com o botão direito sobre o arquivo;
4. Selecione **Open with Live Server**;
5. O projeto será aberto no navegador através de um servidor local.

## ⚙️ Build e dependências

O projeto é uma aplicação **front-end estática**, desenvolvida com HTML5, CSS3 e JavaScript.

Não há, na estrutura atual do projeto, um processo de build baseado em ferramentas como Webpack, Vite ou outro bundler, nem dependências de produção instaladas por meio do `npm`.

Consequentemente, não é necessário executar comandos como:

```bash
npm install
```

ou:

```bash
npm run build
```

Para utilizar a aplicação, basta abrir o `index.html` diretamente no navegador ou executá-lo por meio de um servidor local.

## 🧪 Testes e validação

A validação do projeto pode ser realizada em diferentes níveis.

### Validação HTML

A estrutura das páginas pode ser verificada utilizando o **W3C Markup Validation Service**, identificando possíveis erros de sintaxe e problemas estruturais no HTML.

### Testes funcionais

As funcionalidades implementadas em JavaScript devem ser verificadas manualmente no navegador, incluindo:

* funcionamento dos links de navegação;
* comportamento dos elementos interativos;
* preenchimento do formulário;
* validação dos campos;
* comportamento da interface em diferentes tamanhos de tela.

### Testes responsivos

A aplicação pode ser testada utilizando as ferramentas de desenvolvedor do navegador para simular:

* computadores;
* tablets;
* smartphones;
* diferentes larguras de viewport.

## ♿ Acessibilidade

O projeto considera princípios básicos de acessibilidade durante a construção das páginas.

Entre as práticas utilizadas estão:

* utilização de HTML5 semântico;
* definição do idioma da página;
* utilização de textos alternativos para imagens;
* associação adequada entre campos de formulário e seus respectivos `label`;
* utilização de atributos ARIA quando necessários;
* organização hierárquica dos títulos;
* preocupação com navegação e compreensão do conteúdo.

O objetivo é tornar a aplicação mais compreensível tanto para usuários convencionais quanto para tecnologias assistivas.

## 🔀 Versionamento

O projeto utiliza **Git** como sistema de controle de versão e **GitHub** como plataforma de hospedagem do código-fonte.

O desenvolvimento foi realizado de forma incremental, utilizando commits para registrar a evolução da aplicação e as alterações realizadas durante o desenvolvimento.

A organização por commits permite acompanhar a evolução do projeto, identificar alterações e retornar a versões anteriores quando necessário.

Recomenda-se manter os commits relacionados a alterações específicas e utilizar mensagens que descrevam de forma objetiva a mudança realizada.

## ✅ Boas práticas adotadas

Durante o desenvolvimento foram consideradas as seguintes práticas:

* Separação entre estrutura, apresentação e comportamento;
* Organização dos arquivos em diretórios;
* Utilização de HTML5 semântico;
* Validação de formulários;
* Preocupação com acessibilidade;
* Desenvolvimento responsivo;
* Reutilização de estilos CSS;
* Separação da lógica JavaScript;
* Controle de versão com Git;
* Documentação do projeto por meio deste README.

## 🎓 Contexto acadêmico

Este projeto foi desenvolvido com finalidade acadêmica, servindo como exercício prático de desenvolvimento web front-end.

A aplicação reúne conceitos de **HTML5, CSS3 e JavaScript**, permitindo aplicar conhecimentos relacionados à estruturação semântica, estilização, responsividade, acessibilidade, formulários, interação com o DOM e controle de versão.

## 👤 Autor

**RodrigoMA21**

Projeto disponível no GitHub:

**ONG Esperança — Projeto HTML5**
https://github.com/RodrigoMA21/ong-esperanca-html5
