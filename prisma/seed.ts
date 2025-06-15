import { PrismaClient, TipoUsuario, Opcs } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

async function main() {

    const usuarios = [
        { email: "cliente1@email.com", senha: "senha123", tipo: TipoUsuario.CLIENTE },
        { email: "cliente2@email.com", senha: "senha123", tipo: TipoUsuario.CLIENTE },
        { email: "cliente3@email.com", senha: "senha123", tipo: TipoUsuario.CLIENTE },
        { email: "cliente4@email.com", senha: "senha123", tipo: TipoUsuario.CLIENTE },
        { email: "cliente5@email.com", senha: "senha123", tipo: TipoUsuario.CLIENTE },
        { email: "feirante1@email.com", senha: "senha123", tipo: TipoUsuario.FEIRANTE },
        { email: "feirante2@email.com", senha: "senha123", tipo: TipoUsuario.FEIRANTE },
        { email: "feirante3@email.com", senha: "senha123", tipo: TipoUsuario.FEIRANTE },
        { email: "feirante4@email.com", senha: "senha123", tipo: TipoUsuario.FEIRANTE },
        { email: "feirante5@email.com", senha: "senha123", tipo: TipoUsuario.FEIRANTE }
    ];

    const usuariosCriado = await Promise.all(
        usuarios.map(async (u) => {
            const senhaHashed = await bcrypt.hash(u.senha, 10)
            return prisma.usuario.create({
                data: {
                    ...u,
                    senha: senhaHashed
                }
            })
        } )
    );

    const clientes = [
        {
            nome: "Lucas Silva",
            cpf: "12345678901",
            dataNascimento: new Date("2000-05-12"),
            genero: "Masculino",
            telefone: "(81) 99999-1111",
            interesses: [Opcs.CAMISA, Opcs.CALCA,]
        },
        {
            nome: "Mariana Costa",
            cpf: "98765432100",
            dataNascimento: new Date("1998-11-30"),
            genero: "Feminino",
            telefone: "(81) 98888-2222",
            interesses: [Opcs.BOLSA, Opcs.SALTO, Opcs.TENIS],
        },
        {
            nome: "Pedro Henrique",
            cpf: "45612378909",
            dataNascimento: new Date("2002-03-20"),
            genero: "Masculino",
            telefone: "(81) 97777-3333",
            interesses: [Opcs.ELETRONICOS, Opcs.UTENSILIOS],
        },
        {
            nome: "Ana Beatriz",
            cpf: "32165498700",
            dataNascimento: new Date("1995-07-15"),
            genero: "Feminino",
            telefone: "(81) 96666-4444",
            interesses: [Opcs.INFANTIL, Opcs.BRINQUEDO],
        },
        {
            nome: "Ricardo Lima",
            cpf: "15975346820",
            dataNascimento: new Date("1988-01-08"),
            genero: "Masculino",
            telefone: "(81) 95555-5555",
            interesses: [Opcs.JEANS, Opcs.CALCA, Opcs.SHORT],
        },
    ];

    await Promise.all(
        clientes.map( (c, i) => {
            return prisma.cliente.create({
                data: {
                    ...c,
                    usuarioId: usuariosCriado[i].id
                }
            })
        } )
    );

    const feirantes = [
        {
            nomeProprietario: "João da Feira",
            cadastroAssosiacao: "ASSOC123",
            cpfCnpj: "12345678901",
            telefone: "(81) 99999-1111",
            linkWhatsapp: "https://wa.me/5581999991111",
            linkInstagram: "https://instagram.com/joaodafeira",
            linkFacebook: "https://facebook.com/joaodafeira",
            banco: {
            nomeMarca: "Banca do João",
            foto: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            horario: "08:00 às 17:00",
            descricao: "Vende frutas frescas e regionais.",
            tipoProdutos: [Opcs.COMIDA, Opcs.NATUREZA,],
            endereco: {
                rua: "Rua Central",
                setor: "Setor A",
                numero: "10",
                latitude: -8.289711375239802,
                longitude: -35.972275906541135,
            },
            },
        },
        {
            nomeProprietario: "Maria Artesã",
            cadastroAssosiacao: "ASSOC234",
            cpfCnpj: "98765432100",
            telefone: "(81) 98888-2222",
            linkWhatsapp: "https://wa.me/5581988882222",
            linkInstagram: "https://instagram.com/mariaartesa",
            linkFacebook: "https://facebook.com/mariaartesa",
            banco: {
            nomeMarca: "Artes da Maria",
            foto: "https://images.unsplash.com/photo-1474444417714-f5d07c4d6a38?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            horario: "09:00 às 18:00",
            descricao: "Produtos artesanais e decorativos.",
            tipoProdutos: [Opcs.ACESSORIOS, Opcs.UTENSILIOS,],
            endereco: {
                rua: "Rua do Artesanato",
                setor: "Setor B",
                numero: "15",
                latitude: -8.290400195111818,
                longitude: -35.97214490858234,
            },
            },
        },
        {
            nomeProprietario: "Carlos Calçados",
            cadastroAssosiacao: "ASSOC345",
            cpfCnpj: "45612378909",
            telefone: "(81) 97777-3333",
            linkWhatsapp: "https://wa.me/5581977773333",
            linkInstagram: "https://instagram.com/carloscalcados",
            linkFacebook: "https://facebook.com/carloscalcados",
            banco: {
            nomeMarca: "Pé Quente",
            foto: "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            horario: "07:30 às 16:00",
            descricao: "Venda de tênis e sapatos variados.",
            tipoProdutos: [Opcs.TENIS, Opcs.SALTO,],
            endereco: {
                rua: "Rua dos Calçados",
                setor: "Setor C",
                numero: "25",
                latitude: -8.290409394278173,
                longitude: -35.97151273333766,
            },
            },
        },
        {
            nomeProprietario: "Ana Brinquedos",
            cadastroAssosiacao: "ASSOC456",
            cpfCnpj: "32165498700",
            telefone: "(81) 96666-4444",
            linkWhatsapp: "https://wa.me/5581966664444",
            linkInstagram: "https://instagram.com/anabrinquedos",
            linkFacebook: "https://facebook.com/anabrinquedos",
            banco: {
            nomeMarca: "Mundo dos Brinquedos",
            foto: "https://images.unsplash.com/photo-1619768470847-f7db55f5d72e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            horario: "10:00 às 19:00",
            descricao: "Brinquedos educativos e divertidos.",
            tipoProdutos: [Opcs.BRINQUEDO, Opcs.INFANTIL,],
            endereco: {
                rua: "Rua das Crianças",
                setor: "Setor D",
                numero: "30",
                latitude: -8.289765494869847,
                longitude: -35.97206340294843,
            },
            },
        },
        {
            nomeProprietario: "Pedro Eletrônicos",
            cadastroAssosiacao: "ASSOC567",
            cpfCnpj: "15975346820",
            telefone: "(81) 95555-5555",
            linkWhatsapp: "https://wa.me/5581955555555",
            linkInstagram: "https://instagram.com/pedroeletronicos",
            linkFacebook: "https://facebook.com/pedroeletronicos",
            banco: {
            nomeMarca: "Tech Feira",
            foto: "https://plus.unsplash.com/premium_photo-1723921242867-42dbc213fbd1?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            horario: "08:00 às 18:00",
            descricao: "Eletrônicos e acessórios variados.",
            tipoProdutos: [Opcs.ELETRONICOS, Opcs.ACESSORIOS,],
            endereco: {
                rua: "Rua da Tecnologia",
                setor: "Setor E",
                numero: "45",
                latitude: -8.289815389817708,
                longitude: -35.972307827682656,
            },
            },
        },
    ];

    await Promise.all(
        feirantes.map( async (f, i) => {

            const { banco, ...feirante } = f;

            return prisma.feirante.create({
                data: {
                    ...feirante,
                    usuarioId: usuariosCriado[i + 5].id,
                    bancos: {
                        create: {
                            ...banco,
                            endereco: {
                                create: {
                                    ...banco.endereco
                                }
                            }
                        }
                    }
                }
            })
        })
    );

}
main()
  .then(() => {
    console.log("Seed executado com sucesso.");
  })
  .catch((e) => {
    console.error("Erro ao executar seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });