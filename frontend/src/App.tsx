import { Routes, Route } from "react-router-dom"; 
import MeuPerfil from "./pages/MeuPerfil";

function App() {
  return (
    <>
      <Routes>
        <Route path="/meu-perfil" element={<MeuPerfil />} />
      </Routes>
    </>
  );
}

export default App;
