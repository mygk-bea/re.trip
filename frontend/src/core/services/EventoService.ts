import type {  Evento, EventoResponse } from '../interfaces/evento';
import axios from 'axios';

const url = '/api';

const api = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});


class EventoService{
  async cadastrarEvento(evento: Evento): Promise<EventoResponse> {
    try {
      const response = await api.post<EventoResponse>('/cadastro-evento', {
        nome: evento.nome,
        data: evento.data,
        hora: evento.hora,
        credencial_autor: evento.credencial_autor,
        descricao: evento.descricao,
        locais: evento.locais,
        tags: evento.tags,
        imagensNomes: evento.imagensNomes
      });

      const data = response.data;

      return data;
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const errorMessage = error.response.data.mensagem || 'Erro no cadastro';
          throw new Error(errorMessage);
        } else if (error.request) {
          throw new Error('Sem resposta do servidor. Verifique sua conexão.');
        }
      }
    
      throw new Error('Erro no cadastro. Tente novamente.');
    }
  }

  async uploadImagens(imagens: File[]): Promise<string[]> {
    const formData = new FormData();
    imagens.forEach(file => {
      formData.append('imagem[]', file);
    });

    const response = await api.post('/cadastro-imagem-evento', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.imagem;
  }

  async getDadosEventos(userCredencial: number): Promise<any>{
    try{
      const response = await api.get(`/dados-eventos/${userCredencial}`);
      return response.data;
    } catch(error){
      console.error('Erro ao buscar eventos do usuário:', error);
      return { success: false, message: 'Erro ao buscar eventos' };
    }
  }  
}

export const eventoService = new EventoService();