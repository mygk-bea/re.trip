import type {  UsuarioComum, UsuarioResponse } from '../interfaces/usuario_comum';
import type {  Administrador, AdminResponse } from '../interfaces/administrador';
import axios from 'axios';

const url = '/api';

const api = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

class CadastrosUsuarios {
  async cadastrarUsuario(cadastro: UsuarioComum): Promise<UsuarioResponse> {
    try {
      const response = await api.post<UsuarioResponse>('/cadastro-usuario-comum', {
        nome: cadastro.nome,
        email: cadastro.email,
        senha: cadastro.senha,
        genero: cadastro.genero,
        dataNascimento: cadastro.dataNascimento
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

    async cadastrarAdmin(cadastro: Administrador): Promise<AdminResponse> {
    try {
      const response = await api.post<AdminResponse>('/cadastro-administrador', {
        nome: cadastro.nome,
        email: cadastro.email,
        senha: cadastro.senha,
        cpf: cadastro.cpf,
        dataNascimento: cadastro.dataNascimento
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

export const cadastrosUsuarios = new CadastrosUsuarios();