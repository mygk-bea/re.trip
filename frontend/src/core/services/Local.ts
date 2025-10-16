import type {  Local, LocalResponse } from '../interfaces/local';
import axios from 'axios';

const url = '/api';

const api = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

class LocalService {
  async cadastrarLocal(local: Local): Promise<LocalResponse> {
    try {
      const response = await api.post<LocalResponse>('/cadastro-local', {

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
}

export const localService = new LocalService();