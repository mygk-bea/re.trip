export interface Evento {
    nome: string;
    data: string;
    hora: string;
    credencial_autor: Number;
    descricao: String;
    locais: number[];
    tags: number[];
    imagensNomes: string[];
    cidade?: String;
    numero?: String;
    bairro?: String;
    logradouro?: String;
}

export interface EventoResponse{
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