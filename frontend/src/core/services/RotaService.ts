import type {  Rota, RotaResponse } from '../interfaces/rota';
import axios from 'axios';

const url = '/api';

const api = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

class RotaService {
  async cadastrarRota(cadastro: Rota): Promise<RotaResponse> {
    try {
      const response = await api.post<RotaResponse>('/cadastro-usuario-comum', {

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

export const rotaService = new RotaService();