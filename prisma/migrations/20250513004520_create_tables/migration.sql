-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('CLIENTE', 'FEIRANTE');

-- CreateEnum
CREATE TYPE "Opcs" AS ENUM ('CAMISA', 'CALCA', 'SHORT', 'ACESSORIOS', 'TENIS', 'BRINQUEDO', 'ELETRONICOS', 'SALTO', 'JEANS', 'INFANTIL', 'BOLSA', 'NATUREZA', 'UTENSILIOS', 'COMIDA');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" UUID NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "senha" VARCHAR(100) NOT NULL,
    "tipo" "TipoUsuario" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "dataNascimento" DATE NOT NULL,
    "genero" VARCHAR(20) NOT NULL,
    "telefone" VARCHAR(15),
    "interesses" "Opcs"[],
    "usuarioId" UUID NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feirante" (
    "id" UUID NOT NULL,
    "nomeProprietario" VARCHAR(100) NOT NULL,
    "cadastroAssosiacao" VARCHAR(20) NOT NULL,
    "cpfCnpj" VARCHAR(14) NOT NULL,
    "telefone" VARCHAR(15),
    "linkWhatsapp" VARCHAR(255),
    "linkInstagram" VARCHAR(255),
    "linkFacebook" VARCHAR(255),
    "usuarioId" UUID NOT NULL,

    CONSTRAINT "Feirante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Banco" (
    "id" UUID NOT NULL,
    "nomeMarca" VARCHAR(100) NOT NULL,
    "foto" VARCHAR(255),
    "horario" VARCHAR(100) NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipoProdutos" "Opcs"[],
    "enderecoId" TEXT,
    "feiranteId" UUID NOT NULL,

    CONSTRAINT "Banco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnderecoBanco" (
    "id" TEXT NOT NULL,
    "rua" VARCHAR(255) NOT NULL,
    "setor" VARCHAR(100) NOT NULL,
    "numero" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "EnderecoBanco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorito" (
    "id" TEXT NOT NULL,
    "clienteId" UUID NOT NULL,
    "bancoId" UUID NOT NULL,

    CONSTRAINT "Favorito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,
    "comentario" TEXT,
    "clienteId" UUID NOT NULL,
    "bancoId" UUID NOT NULL,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cpf_key" ON "Cliente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_usuarioId_key" ON "Cliente"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Feirante_usuarioId_key" ON "Feirante"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Banco_enderecoId_key" ON "Banco"("enderecoId");

-- CreateIndex
CREATE UNIQUE INDEX "Favorito_clienteId_bancoId_key" ON "Favorito"("clienteId", "bancoId");

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feirante" ADD CONSTRAINT "Feirante_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Banco" ADD CONSTRAINT "Banco_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "EnderecoBanco"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Banco" ADD CONSTRAINT "Banco_feiranteId_fkey" FOREIGN KEY ("feiranteId") REFERENCES "Feirante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorito" ADD CONSTRAINT "Favorito_bancoId_fkey" FOREIGN KEY ("bancoId") REFERENCES "Banco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorito" ADD CONSTRAINT "Favorito_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_bancoId_fkey" FOREIGN KEY ("bancoId") REFERENCES "Banco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
