
import { Routes, Route } from 'react-router-dom';
import './App.css'
import MeuPerfil from './pages/MeuPerfil'
import MinhasRotas from './pages/MeuPerfil/MinhasRotas'
import RotasFavoritas from './pages/MeuPerfil/RotasFavoritas'

function App() {

  return (
    <>
        <Routes>
          <Route path="/user/meu-perfil" element={<MeuPerfil type='Usuário Comum' username='Username' call='Aventureira' />} />
          <Route path="/user/meu-perfil/minhas-rotas" element={<MinhasRotas />} />
          <Route path="/user/meu-perfil/rotas-favoritas" element={<RotasFavoritas />} />
        </Routes>
    </>
  )
}

export default App