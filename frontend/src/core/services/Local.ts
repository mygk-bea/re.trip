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
        nome: local.nome,
        logradouro: local.logradouro,
        bairro: local.bairro,
        numero: local.numero,
        telefone: local.telefone,
        imagensNome: local.imagensNome,
        cidade: local.cidade,
        descricao: local.descricao,
        tags: local.tags,
        cnpj: local.cnpj,
        id_autor: local.id_autor,
        cep: local.cep
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

    const response = await api.post('/cadastro-imagem-local', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.imagem;
  }
}

export const localService = new LocalService();