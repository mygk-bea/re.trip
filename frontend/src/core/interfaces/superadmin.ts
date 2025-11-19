export interface SuperAdmin {
    nome?: String;
    email: String;
    senha: String;
}

export interface SuperAdminResponse{
    validado: boolean;
    mensagem: string;
    id: number;
    error?: {
        nome: string[];
        email: string[];
        senha: string[];
    };
}