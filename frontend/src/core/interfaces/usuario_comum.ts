export interface UsuarioComum {
    nome: string;
    genero: string;
    dataNascimento: string;
    email: string;
    senha: string;
}

export interface UsuarioResponse {
    validado: boolean;
    mensagem: string;
    id: number;
    error?: {
        nome: string[];
        email: string[];
        senha: string[];
        genero: string[];
        dataNascimento: string[];
    };
}