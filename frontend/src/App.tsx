import { Routes, Route } from 'react-router-dom';
import './App.css'

import MeuPerfil from './pages/User/MeuPerfil'
import MinhasRotas from './pages/User/MeuPerfil/MinhasRotas'
import Favoritos from './pages/User/MeuPerfil/Favoritos'
import Inicio from './pages/User/Inicio';
import Cadastro from './pages/User/Inicio/Cadastro';
import Login from './pages/User/Inicio/Login';
import Filtros from './pages/User/Pesquisar/Filtros';
import InfoLocal from './pages/User/InfoLocal';
import RotaTerminada from './pages/User/Rotas/RotaTerminada';
import RotaCadastro from './pages/User/Rotas/RotaCadastro';
import RotaInfo from './pages/User/Rotas/RotaInfo';
import RotaEmAndamento from './pages/User/Rotas/RotaEmAndamento';

import Home from './pages/User/Home';
import Pesquisar from './pages/User/Pesquisar';
import MeuPerfilAdmin from './pages/Admin/MeuPerfil';
import MeusLocais from './pages/Admin/MeuPerfil/MeusLocais';
import MeusEventos from './pages/Admin/MeuPerfil/MeusEventos';
import CadastroLocalEvento from './pages/Admin/CadLocalEvento';
import ListagemRotas from './pages/Admin/Home/ListagemRotas';
import HomeAdmin from './pages/Admin/Home';

import { sitioCarrocao } from './constants/infosPlaces';
import { rotaSitioMuseu } from './constants/infosRoutes';
import LoginSuperAdmin from './pages/SuperAdmin/Login';
import HomeSuperAdmin from './pages/SuperAdmin/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/criar-conta" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/home" element={<Home username='Username' call='aventureiro(a)' />} />
        <Route path="/user/meu-perfil" element={<MeuPerfil type='Usuário Comum' username='Username' call='Aventureira' />} />
        <Route path="/user/meu-perfil/minhas-rotas" element={<MinhasRotas />} />
        <Route path="/user/meu-perfil/favoritos" element={<Favoritos />} />
        <Route path="/user/pesquisar" element={<Pesquisar />} />
        <Route path="/user/pesquisar/filtros" element={<Filtros />} />

        <Route path="/user/local/info" element={<InfoLocal place={sitioCarrocao} />} />
        <Route path="/user/rota/cadastro" element={<RotaCadastro  />} />
        <Route path="/user/rota/info" element={<RotaInfo type='user' route={rotaSitioMuseu} />} />
        <Route path="/user/rota/em-andamento" element={<RotaEmAndamento route={rotaSitioMuseu} />} />
        <Route path="/user/rota/final" element={<RotaTerminada name='Sítio - Museu' />} />

        <Route path="/admin/inicio" element={<Inicio isAdmin={true} />} />
        <Route path="/admin/criar-conta" element={<Cadastro isAdmin={true} />} />
        <Route path="/admin/login" element={<Login isAdmin={true} />} />
        <Route path="/admin/home" element={<HomeAdmin username='Username'/>} />
        <Route path="/admin/home/listagem" element={<ListagemRotas/>} />
        <Route path="/admin/meu-perfil" element={<MeuPerfilAdmin type='Administrador' username='Username Admin' />} />
        <Route path="/admin/meu-perfil/meus-locais" element={<MeusLocais />} />
        <Route path="/admin/meu-perfil/meus-eventos" element={<MeusEventos />} />
        <Route path="/admin/cad-local" element={<CadastroLocalEvento tipo="local" isAdmin={true} />} />
        <Route path="/admin/cad-evento" element={<CadastroLocalEvento tipo="evento" isAdmin={true} />} />
        <Route path="/admin/local/info" element={<InfoLocal place={sitioCarrocao} isAdmin/>} />
        <Route path="/admin/rota/info" element={<RotaInfo type='admin' route={rotaSitioMuseu} />} />

        <Route path="/super-admin/login" element={<LoginSuperAdmin />} />
        <Route path="/super-admin/home" element={<HomeSuperAdmin />} />
      </Routes>
    </>
  )
}

export default App