export interface Local {
    nome: string;
    logradouro: string;
    bairro: string;
    numero: number;
    telefone: string;
    imagensNome: string[];
    cidade: string;
    descricao: string;
    disponibilidade?: string;
    tags: string[];
    avaliacao?: number;
    cnpj: string;
    credencial_autor: number;
    cep: string;
    status?: string;
    verificado?: boolean;
    id?: number;
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