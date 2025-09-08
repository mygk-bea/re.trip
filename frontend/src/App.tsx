
import { Routes, Route } from 'react-router-dom';
import './App.css'
import MeuPerfil from './pages/MeuPerfil'
import MinhasRotas from './pages/MeuPerfil/MinhasRotas'
import RotasFavoritas from './pages/MeuPerfil/RotasFavoritas'
import Inicio from './pages/Inicio';
import Cadastro from './pages/Inicio/Cadastro';

function App() {

  return (
    <>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/criar-conta" element={<Cadastro />} />
          <Route path="/user/meu-perfil" element={<MeuPerfil type='Usuário Comum' username='Username' call='Aventureira' />} />
          <Route path="/user/meu-perfil/minhas-rotas" element={<MinhasRotas />} />
          <Route path="/user/meu-perfil/rotas-favoritas" element={<RotasFavoritas />} />
        </Routes>
    </>
  )
}

export default App