import { z } from "zod";

export const TagEnumOPC = z.enum([
    "CAMISA",
    "CALCA",
    "SHORT",
    "ACESSORIOS",
    "TENIS",
    "BRINQUEDO",
    "ELETRONICOS",
    "SALTO",
    "JEANS",
    "INFANTIL",
    "BOLSA",
    "NATUREZA",
    "UTENSILIOS",
    "COMIDA"
]);

export const UsuarioSchema = z.object({
    email: z.string().email({ message: "E-mail inválido" }),
    senha: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
    tipo: z.enum(["CLIENTE", "FEIRANTE"], { required_error: "Tipo de usuário é obrigatório" }),
});

export const ClienteSchema = z.object({
    nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
    cpf: z.string().min(11, "O CPF deve ter pelo menos 11 dígitos.").max(14, "O CPF deve ter no máximo 14 dígitos."),
    dataNascimento: z
        .string()
        .refine((val) => !isNaN(Date.parse(val)), {
        message: "Data de nascimento inválida",
        })
        .transform((val) => new Date(val)),
    genero: z.string().min(1, "Gênero é obrigatório."),
    telefone: z.string().optional(),
    interesses: z.array(TagEnumOPC).min(1, "Pelo menos um interesse deve ser selecionado."),
    usuarioId: z.string().uuid('ID de usuário inválido'),
});

export const EnderecoBancoSchema = z.object({
    rua: z.string().min(1, "Rua é obrigatória"),
    setor: z.string().min(1, "Setor é obrigatório"),
    numero: z.string().min(1, "Número é obrigatório"),
    latitude: z.number().refine((n) => Math.abs(n) <= 90, {
        message: 'Latitude inválida',
    }),
    longitude: z.number().refine((n) => Math.abs(n) <= 180, {
        message: 'Longitude inválida',
    })
});

export const BancoSchema = z.object({
    nomeMarca: z.string().min(1, 'Nome da marca é obrigatório'),
    endereco: EnderecoBancoSchema,
    foto: z.string().url('A foto precisa ser uma URL válida').optional(),
    horario: z.string().min(1, 'Horário é obrigatório'),
    descricao: z.string().min(1, 'Descrição é obrigatória'),
    tipoProdutos: z.array(TagEnumOPC).min(1, "Pelo menos um tipo de produto deve ser selecionado."),
});

export const FeiranteSchema = z.object({
    nomeProprietario: z.string().min(1, 'Nome do proprietário é obrigatório'),
    cadastroAssosiacao: z.string().min(1, 'Cadastro da associação é obrigatório'),
    cpfCnpj: z
      .string()
      .min(11, 'CPF ou CNPJ deve ter no mínimo 11 caracteres')
      .max(14, 'CPF ou CNPJ deve ter no máximo 14 caracteres'),
    telefone: z.string().max(15).optional(),
    linkWhatsapp: z.string().url('URL do WhatsApp inválida').optional(),
    linkInstagram: z.string().url('URL do Instagram inválida').optional(),
    linkFacebook: z.string().url('URL do Facebook inválida').optional(),
    usuarioId: z.string().uuid('ID de usuário inválido'),
    bancos: z.array(BancoSchema).min(1, 'É necessário pelo menos um banco'),
});

export const FavoritoSchema = z.object({
    clienteId: z.string().uuid(),
    bancoId: z.string().uuid(),
});

export const AvaliacaoSchema = z.object({
    clienteId: z.string().uuid(),
    bancoId: z.string().uuid(),
    nota: z.number().min(1).max(5, { message: "A nota deve ser entre 1 e 5" }),
    comentario: z.string().max(500).optional(),
});

export type FeiranteDTO = z.infer<typeof FeiranteSchema>;
export type UsuarioDTO = z.infer<typeof UsuarioSchema>;
export type ClienteDTO = z.infer<typeof ClienteSchema>;
export type BancoDTO = z.infer<typeof BancoSchema>;
export type TagDTO = z.infer<typeof TagEnumOPC>;
export type FavoritoDTO = z.infer<typeof FavoritoSchema>;
export type AvaliacaoDTO = z.infer<typeof AvaliacaoSchema>;
export type EnderecoBancoDTO = z.infer<typeof EnderecoBancoSchema>;
