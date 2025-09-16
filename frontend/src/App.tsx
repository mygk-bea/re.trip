
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
import type { Place } from './types/place';
import RotaTerminada from './pages/Rotas/RotaTerminada';

function App() {

  const meuLugar: Place = {
    name: "Sítio do Carroção",
    favorited: true,
    verified: true,
    starRating: 4.8,
    tags: ["Natureza e Ecoturismo", "Pet Friendly", "Aventura e Diversão"],
    description: "Acampamento de vivências únicas, amizades e muita diversão. Acampamento de Férias do Sítio do Carroção - O Único Resort Pedagógico do Brasil.",
    contactInfo: "(15) 3305-2000",
    address: "Rod. SP-129, Km 12,5 - Bairro dos Mirandas, Tatuí - SP, 18270-000",
    images: ["/images/places/img_bg_sitio-carrocao.png"],
    routes: ["Trilha da Cachoeira", "Passeio a cavalo"],
    events: ["Festa Junina (Junho)", "Acampamento de Férias (Julho)"],
  };

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
        <Route path="/user/local/info" element={<InfoLocal place={meuLugar} />} />
        <Route path="/user/rota/final" element={<RotaTerminada name='Sítio - Museu' />} />
      </Routes>
    </>
  )
}

export default App