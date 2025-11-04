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
  async cadastrarRota(rota: Rota): Promise<RotaResponse> {
    try {
      const response = await api.post<RotaResponse>('/cadastro-rota', {
        nome: rota.nome,
        privada: rota.privada,
        imagemNome: rota.imagemNome,
        locais: rota.locais,
        credencial_autor: rota.credencial_autor
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

  async uploadImagens(imagem: File[]): Promise<string[]> {
    const formData = new FormData();
    imagem.forEach(file => {
      formData.append('imagem[]', file);
    });

    const response = await api.post('/cadastro-imagem-rota', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.imagem;
  }

  async getDadosRotas(userCredencial: number): Promise<any>{
    try{
      const response = await api.get(`/dados-rotas/${userCredencial}`);
      return response.data;
    } catch(error){
      console.error('Erro ao buscar rotas do usuário:', error);
      return { success: false, message: 'Erro ao buscar rotas' };
    }
  }
}

export const rotaService = new RotaService();