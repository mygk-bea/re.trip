export interface Administrador {
    nome: String;
    cpf: String;
    dataNascimento: string;
    email: String;
    senha: String;
}

export interface AdminResponse{
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