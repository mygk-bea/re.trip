
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
import type { Place } from './types/place';
import Home from './pages/User/Home';
import Pesquisar from './pages/User/Pesquisar';

import MeuPerfilAdmin from './pages/Admin/MeuPerfil';
import MeusLocais from './pages/Admin/MeuPerfil/MeusLocais';
import MeusEventos from './pages/Admin/MeuPerfil/MeusEventos';
import CadastroLocalEvento from './pages/Admin/CadLocalEvento';

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
        <Route path="/user/meu-perfil/favoritos" element={<Favoritos />} />
        <Route path="/user/pesquisar/filtros" element={<Filtros />} />
        <Route path="/user/local/info" element={<InfoLocal place={meuLugar} />} />
        <Route path="/user/home" element={<Home username='Username' call='aventureiro(a)' />} />
        <Route path="/user/pesquisar" element={<Pesquisar />} />

        <Route path="/admin/inicio" element={<Inicio isAdmin={true} />} />
        <Route path="/admin/criar-conta" element={<Cadastro isAdmin={true} />} />
        <Route path="/admin/login" element={<Login isAdmin={true} />} />
        <Route path="/admin/meu-perfil" element={<MeuPerfilAdmin type='Administrador' username='Username Admin' />} />
        <Route path="/admin/meu-perfil/meus-locais" element={<MeusLocais />} />
        <Route path="/admin/meu-perfil/meus-eventos" element={<MeusEventos />} />
        <Route path="/admin/cad-local" element={<CadastroLocalEvento tipo="local" isAdmin={true} />} />
        <Route path="/admin/cad-evento" element={<CadastroLocalEvento tipo="evento" isAdmin={true} />} />
        <Route path="/admin/local/info" element={<InfoLocal place={meuLugar} isAdmin/>} />

      </Routes>
    </>
  )
}

export default App