# 🛍️ API - Aqui na Feira

API desenvolvida para o aplicativo **Aqui na Feira**, que visa conectar consumidores e feirantes da Feira de Caruaru. O sistema facilita a localização dos bancos dos feirantes, o gerenciamento de usuários, favoritos e avaliações.

---

## 📋 Índice

- [📖 Sobre](#-sobre)
- [🚀 Tecnologias](#-tecnologias)
- [⚙️ Instalação](#-instalação)
- [▶️ Como usar](#-como-usar)
- [📡 Rotas da API](#-rotas-da-api)
- [🔐 Autenticação](#-autenticação)
- [📄 Licença](#-licença)

---

## 📖 Sobre

Este backend fornece uma estrutura robusta para cadastro de clientes e feirantes, manipulação de dados, gerenciamento de favoritos e avaliações, e exibição dos bancos dos feirantes com geolocalização.

---

## 🚀 Tecnologias

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL(Neon Tech)
- Zod (validação de dados)
- JWT (autenticação)

---

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/WyldSLA/API-AquiNaFeira.git

# Acesse o diretório
cd API-AquiNaFeira

# Instale as dependências
npm install

# Copie o arquivo de variáveis de ambiente
cp .env.example .env

# Edite o .env com suas configurações (ex: banco de dados, JWT_SECRET)

# Rode as migrações do banco de dados
npx prisma migrate dev

# Inicie a aplicação
npm run start
```

---

## ▶️ Como usar

Após iniciar, a API estará disponível em `http://localhost:3000`. Use ferramentas como Postman ou Insomnia para testar os endpoints.
Ou, utilize a extensão do VSCode, a REST Client

---

## 📡 Rotas da API

### 🔐 Autenticação

| Método | Rota           | Descrição               |
|--------|----------------|-------------------------|
| POST   | /auth/register | Registro de novo usuário|
| POST   | /auth/login    | Login e retorno de token|

### 👤 Usuários

| Método | Rota      | Descrição                  |
|--------|-----------|----------------------------|
| GET    | /usuarios | Lista os usuários cadastrados |

### 🧑‍🌾 Feirantes

| Método | Rota           | Descrição                   |
|--------|----------------|-----------------------------|
| POST   | /feirantes     | Cadastro de feirante        |
| GET    | /feirantes     | Lista todos os feirantes    |
| GET    | /feirantes/:id | Detalhes de um feirante     |

### 💳 Bancos

| Método | Rota       | Descrição                    |
|--------|------------|------------------------------|
| POST   | /bancos    | Cadastra dados bancários     |
| GET    | /bancos    | Lista dados bancários        |

### 📍 Geolocalização

| Método | Rota             | Descrição                             |
|--------|------------------|---------------------------------------|
| GET    | /feirantes/geo   | Lista feirantes com localização       |

### ⭐ Favoritos

| Método | Rota        | Descrição                        |
|--------|-------------|----------------------------------|
| POST   | /favoritos  | Adiciona feirante aos favoritos  |
| GET    | /favoritos  | Lista favoritos do usuário logado|

---

## 🔐 Autenticação

As rotas protegidas exigem autenticação JWT. Após o login, inclua o token no cabeçalho das requisições:

```
Authorization: Bearer SEU_TOKEN
```

---

## 📄 Licença

Este projeto está licenciado sob a [Apache-2.0](LICENSE).
