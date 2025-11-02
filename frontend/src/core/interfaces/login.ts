export interface Login {
    email: string;
    senha: string;
}

export interface Autenticacao {
    token: string;
    user: {
        name: string;
        id: string;
        role: string;
        idCredencial: string;
    }
    validado: boolean;
    mensagem?: string;
    error?: {
        email: string[];
        senha: string[];
    };
}