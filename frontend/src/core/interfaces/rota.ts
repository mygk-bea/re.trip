export interface Rota {
    compartilahada: boolean;
    nome: string;
    privada: boolean;
    imagem: string;
    distancia_total: string;
    avaliacao: number;
    status: string;
    id_autor: number;
    favoritada: boolean;
    guiado: boolean;
    valor: number;
    comentario: string;
    id_locais: number[];
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