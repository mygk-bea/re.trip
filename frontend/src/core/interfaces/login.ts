export interface Login {
    email: string;
    senha: string;
}

export interface Autenticacao {
    validado: boolean;
    nome: string;
    id: number;
    tipo: string;
    mensagem?: string;
    error?: {
        email: string[];
        senha: string[];
    };
}