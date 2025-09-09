
import { Routes, Route } from 'react-router-dom';
import './App.css'
import MeuPerfil from './pages/MeuPerfil'
import MinhasRotas from './pages/MeuPerfil/MinhasRotas'
import RotasFavoritas from './pages/MeuPerfil/RotasFavoritas'
import Inicio from './pages/Inicio';
import Filtros from './pages/Filtros';

function App() {

  return (
    <>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/user/meu-perfil" element={<MeuPerfil type='Usuário Comum' username='Username' call='Aventureira' />} />
          <Route path="/user/meu-perfil/minhas-rotas" element={<MinhasRotas />} />
          <Route path="/user/meu-perfil/rotas-favoritas" element={<RotasFavoritas />} />
          <Route path="/user/pesquisar/filtros" element={<Filtros />} />
        </Routes>
    </>
  )
}

export default App