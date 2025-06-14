# Documentação da Aplicação Zoppy

Este documento fornece instruções sobre como configurar e executar a aplicação Zoppy, composta por uma API back-end em NestJS e um painel front-end em Angular, **orquestrados via Docker Compose**.

---

## Estrutura do Repositório

O repositório está organizado em dois diretórios principais:

- **back-end**: API NestJS para gerenciamento de clientes e produtos
- **front-end**: Aplicação Angular que fornece a interface do usuário

---

## Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Como Executar

Execute a aplicação com o seguinte comando:

```bash
docker-compose up --build
```

Isso irá:

- Construir e iniciar o back-end (NestJS)
- Construir e iniciar o front-end (Angular)
- Subir o banco de dados PostgreSQL com persistência local

---

## Acessos Locais

- **API (NestJS)**: [http://localhost:3000/api](http://localhost:3000/api)
- **Swagger (Documentação da API)**: [http://localhost:3000/docs](http://localhost:3000/docs)
- **Front-End (Angular)**: [http://localhost:4200](http://localhost:4200)

---

## Configuração de Variáveis de Ambiente

Antes de executar o Docker Compose, copie os arquivos de exemplo de variáveis de ambiente:

```bash
cp back-end/.env.example back-end/.env
cp front-end/.env.example front-end/.env
```

---

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

---

## Banco de Dados

- A aplicação utiliza PostgreSQL, iniciado automaticamente via Docker
- Os dados são persistidos no volume `zoppy_pgdata`

---

## Estrutura do Projeto

### Back-End

- `src/modules/clientes`: Endpoints da API e lógica para gerenciamento de clientes
- `src/modules/produtos`: Endpoints da API e lógica para gerenciamento de produtos

### Front-End

- `src/app/features/clientes`: Componentes e serviços para gerenciamento de clientes
- `src/app/features/produtos`: Componentes e serviços para gerenciamento de produtos

---

## Parar a Aplicação

Para parar os contêineres:

```bash
docker-compose down
```

Para parar e remover volumes e redes:

```bash
docker-compose down -v
```

---
