
import { Routes, Route } from 'react-router-dom';
import './App.css'
import MeuPerfil from './pages/MeuPerfil'
import MinhasRotas from './pages/MeuPerfil/MinhasRotas'
import RotasFavoritas from './pages/MeuPerfil/RotasFavoritas'
import Inicio from './pages/Inicio';
import Cadastro from './pages/Inicio/Cadastro';
import Login from './pages/Inicio/Login';
import Filtros from './pages/Filtros';
import InfoLocal from './pages/InfoLocal';

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
        <Route path="/user/local/info" element={<InfoLocal name="aaaaaa" />} />
      </Routes>
    </>
  )
}

export default App