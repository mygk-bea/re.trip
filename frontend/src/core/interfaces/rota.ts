export interface Rota {
    nome: string;
    privada: boolean;
    locais: number[];
    imagemNome: string;
    credencial_autor: number;
    compartilahada?: boolean;
    distancia_total?: string;
    avaliacao?: number;
    status?: string;
    favoritada?: boolean;
    guiado?: boolean;
    valor?: number;
    comentario?: string;
}

export interface RotaResponse{
    validado: boolean;
    mensagem: string;
    error?: {
        compartilahada: string[];
        nome: string[];
        privada: string[];
        imagem: string[];
        distancia_total:string[];
        avaliacao: string[];
        status: string[];
        id_autor: string[];
        favoritada: string[];
        guiado: string[];
        valor: String[];
        comentario: string[];
        id_locais: string[];
    };
}