export interface Local {
    nome: string;
    logradouro: string;
    bairro: string;
    numero: number;
    telefone: string;
    imagem: string;
    cidade: string;
    descricao: string;
    disponibilidade?: string;
    tags: string[];
    avalicao?: number;
    cnpj: string;
    id_autor: number;
    cep: string;
}

export interface LocalResponse{
    validado: boolean;
    mensagem: string;
    error?: {
        nome: string[];
        email: string[];
        senha: string[];
        genero: string[];
        dataNascimento: string[];
    };
}