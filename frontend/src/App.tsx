import { Routes, Route } from 'react-router-dom';
import './App.css'

import MeuPerfil from './pages/User/MeuPerfil'
import MinhasRotas from './pages/User/MeuPerfil/MinhasRotas'
import RotasFavoritas from './pages/User/MeuPerfil/RotasFavoritas'
import Inicio from './pages/User/Inicio';
import Cadastro from './pages/User/Inicio/Cadastro';
import Login from './pages/User/Inicio/Login';
import Filtros from './pages/User/Filtros';
import InfoLocal from './pages/User/InfoLocal';
import RotaTerminada from './pages/User/Rotas/RotaTerminada';
import RotaCadastro from './pages/User/Rotas/RotaCadastro';
import RotaInfo from './pages/User/Rotas/RotaInfo';
import RotaEmAndamento from './pages/User/Rotas/RotaEmAndamento';

import Home from './pages/User/Home';
import Pesquisar from './pages/User/Pesquisar';

import { sitioCarrocao } from './constants/infosPlaces';
import { rotaSitioMuseu } from './constants/infosRoutes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/criar-conta" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/meu-perfil" element={<MeuPerfil type='Usuário Comum' username='Username' call='Aventureira' />} />
        <Route path="/user/meu-perfil/minhas-rotas" element={<MinhasRotas />} />
        <Route path="/user/meu-perfil/rotas-favoritas" element={<RotasFavoritas />} />
        <Route path="/user/pesquisar/filtros" element={<Filtros />} />
        <Route path="/user/local/info" element={<InfoLocal place={sitioCarrocao} />} />
        <Route path="/user/rota/final" element={<RotaTerminada name='Sítio - Museu' />} />
        <Route path="/user/rota/cadastro" element={<RotaCadastro />} />
        <Route path="/user/rota/info" element={<RotaInfo route={rotaSitioMuseu} />} />
        <Route path="/user/rota/em-andamento" element={<RotaEmAndamento />} />
        <Route path="/user/home" element={<Home username='Username' call='aventureiro(a)'/>} />
        <Route path="/user/pesquisar" element={<Pesquisar />} />
      </Routes>
    </>
  )
}

export default App