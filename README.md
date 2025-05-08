# ⚙️💻 API - Aqui na Feira

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

Após iniciar, a API estará disponível em `http://localhost:3000`. Use ferramentas como Postman ou Insomnia para testar os endpoints. Ou, utilize a extensão do VSCode, a REST Client

---

## 📡 Rotas da API

### 🔐 Autenticação

| Método | Rota          | Descrição                |
|--------|---------------|--------------------------|
| POST   | /registro     | Registro de novo usuário |
| POST   | /login        | Login e retorno de token |

### 👤 Usuários

| Método | Rota             | Descrição                     |
|--------|------------------|-------------------------------|
| GET    | /lista-usuarios  | Lista os usuários cadastrados |

### 🧑‍🌾 Feirantes

| Método | Rota                        | Descrição                          |
|--------|-----------------------------|------------------------------------|
| POST   | /cadastro                   | Cadastro de feirante               |
| GET    | /lista-feirantes            | Lista todos os feirantes           |
| GET    | /meu-perfil/:id             | Exibe perfil do feirante           |
| PATCH  | /atualizar-feirante/:id     | Atualiza dados do feirante         |
| DELETE | /deletar-feirante/:id       | Remove perfil do feirante          |

### 👥 Clientes

| Método | Rota                         | Descrição                          |
|--------|------------------------------|------------------------------------|
| POST   | /cadastro                    | Cadastro de cliente                |
| GET    | /lista-clientes              | Lista todos os clientes            |
| GET    | /meu-perfil/:id              | Exibe perfil do cliente            |
| PATCH  | /atualizar-cliente/:id       | Atualiza dados do cliente          |
| DELETE | /deletar-cliente/:id         | Remove perfil do cliente           |

### 🛍️ Bancos

| Método | Rota                | Descrição                          |
|--------|---------------------|------------------------------------|
| GET    | /localizacoes       | Lista localizações de bancos       |
| GET    | /info-banco/:id     | Exibe informações de um banco      |
| GET    | /filtro             | Filtra bancos com base em critérios|

### ⭐ Favoritos

| Método | Rota                        | Descrição                          |
|--------|-----------------------------|------------------------------------|
| POST   | /favoritar-banco            | Adiciona banco aos favoritos       |
| GET    | /listar-favoritos/:id       | Lista favoritos do usuário         |
| DELETE | /deletar-favorito           | Remove banco dos favoritos         |

### 🌟 Avaliações

| Método | Rota                        | Descrição                          |
|--------|-----------------------------|------------------------------------|
| POST   | /avaliar-banco              | Avalia um banco                    |
| GET    | /mostrar-avaliacoes/:id     | Mostra avaliações de um banco      |

---

## 🔐 Autenticação

As rotas protegidas exigem autenticação JWT. Após o login, inclua o token no cabeçalho das requisições:

```
Authorization: Bearer SEU_TOKEN
```

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
