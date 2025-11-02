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
        sessionStorage.setItem('userId', data.user.id);
        sessionStorage.setItem('userRole', data.user.role);
        sessionStorage.setItem('userName', data.user.name);
        sessionStorage.setItem('userToken', data.token);
        sessionStorage.setItem('userCredencial', data.user.idCredencial);
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

  getUserData(): { id: string, role: string, name: string, token: string, idCredencial: string } | null {
    const id = sessionStorage.getItem('userId');
    const role = sessionStorage.getItem('userRole');
    const name = sessionStorage.getItem('userName');
    const token = sessionStorage.getItem('userToken');
    const idCredencial = sessionStorage.getItem('userCredencial');

    return id && role && name && token && idCredencial ? { id, role, name, token, idCredencial } : null;
  }

  isUserAuthenticated(): boolean {
    return !!sessionStorage.getItem('userId');
  }
}

export const authService = new AuthService();