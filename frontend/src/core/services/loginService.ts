import type { Login, Autenticacao } from "../interfaces/login";
import axios from 'axios';

const url = '/api';

const api = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

class AuthService {
  async autenticarLogin(login: Login): Promise<Autenticacao> {
    try {
      const response = await api.post<Autenticacao>('/login', {
        email: login.email,
        senha: login.senha
      });

      const data = response.data;

      if (data.validado) {
        sessionStorage.setItem('userId', data.id.toString());
        sessionStorage.setItem('userType', data.tipo);
        sessionStorage.setItem('userName', data.nome);
      }

      return data;
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const errorMessage = error.response.data.mensagem || 'Erro na autenticação';
          throw new Error(errorMessage);
        } else if (error.request) {
          throw new Error('Sem resposta do servidor. Verifique sua conexão.');
        }
      }
      
      throw new Error('Erro na autenticação. Tente novamente.');
    }
  }

  logout(): void {
    sessionStorage.clear();
  }

  getUserId(): string | null {
    return sessionStorage.getItem('userId');
  }

  getUserData(): { id: string, type: string, name: string } | null {
    const id = sessionStorage.getItem('userId');
    const type = sessionStorage.getItem('userType');
    const name = sessionStorage.getItem('userName');

    return id && type && name ? { id, type, name } : null;
  }

  isUserAuthenticated(): boolean {
    return !!sessionStorage.getItem('userId');
  }

  getUserName(): string | null {
    return sessionStorage.getItem('userName');
  }
}

export const authService = new AuthService();