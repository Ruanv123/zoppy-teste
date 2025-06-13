# Documentação da Aplicação Zoppy

Este documento fornece instruções sobre como configurar e executar a aplicação Zoppy, que consiste em uma API back-end construída com NestJS e um painel front-end desenvolvido com Angular.

## Estrutura do Repositório

O repositório está organizado em dois diretórios principais:

- **back-end**: API NestJS para gerenciamento de clientes e produtos
- **front-end**: Aplicação Angular que fornece a interface do usuário

## Pré-requisitos

- Node.js (versão 16 ou superior)
- Gerenciador de pacotes npm ou yarn
- Banco de dados PostgreSQL (já configurado no aplicativo)

## Configuração do Back-End

O back-end é uma aplicação NestJS que se conecta a um banco de dados PostgreSQL hospedado no Supabase.

### Instalação

```bash
cd back-end
npm install
```

### clone o arquivo .env.example

Clone o arquivo `.env.example` e retire o `.example`

### Executando a API

Para modo de desenvolvimento com recarregamento automático:

```bash
npm run start:dev
```

Para modo de produção:

```bash
npm run build
npm run start:prod
```

A API estará disponível em `http://localhost:3000/api`.

### Documentação da API

A documentação Swagger estará disponível em `http://localhost:3000/docs` quando o servidor estiver em execução.

## Configuração do Front-End

O front-end é uma aplicação Angular que fornece a interface para o gerenciamento de clientes e produtos.

### Instalação

```bash
cd front-end
npm install
```

### Executando a Aplicação

```bash
npm start
```

ou

```bash
ng serve
```

A aplicação estará disponível em `http://localhost:4200`.

### Build para Produção

```bash
npm run build
```

Isso criará os arquivos otimizados de produção no diretório `dist/`.

## Funcionalidades

### Gerenciamento de Clientes

- Listar todos os clientes
- Filtrar clientes por nome
- Criar novos clientes
- Editar clientes existentes
- Excluir clientes

### Gerenciamento de Produtos

- Listar todos os produtos
- Filtrar produtos por nome
- Criar novos produtos
- Editar produtos existentes
- Excluir produtos

## Banco de Dados

A aplicação utiliza um banco de dados PostgreSQL hospedado no Supabase. Os detalhes de conexão já estão configurados em `back-end/src/app.module.ts`.

## Estrutura do Projeto

### Back-End

- **src/modules/clientes**: Endpoints da API e lógica para gerenciamento de clientes
- **src/modules/produtos**: Endpoints da API e lógica para gerenciamento de produtos

### Front-End

- **src/app/features/clientes**: Componentes e serviços para gerenciamento de clientes
- **src/app/features/produtos**: Componentes e serviços para gerenciamento de produtos
