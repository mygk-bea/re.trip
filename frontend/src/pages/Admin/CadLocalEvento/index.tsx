import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";

import { categories, localPlaces } from "../../../constants/infos"; // use suas constantes

interface CadastroProps {
  isAdmin?: boolean;
  tipo: "local" | "evento";
}

const CadastroLocalEvento: React.FC<CadastroProps> = ({ isAdmin = false, tipo }) => {
  const navigate = useNavigate();

  const [selectedCategorias, setSelectedCategorias] = useState<number[]>([]);
  const [selectedLocais, setSelectedLocais] = useState<number[]>([]);

  const toggleCategoria = (id: number) => {
    setSelectedCategorias((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const toggleLocal = (id: number) => {
    setSelectedLocais((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Categorias selecionadas:", selectedCategorias);
    console.log("Locais selecionados:", selectedLocais);
    navigate(isAdmin ? "/admin" : "/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white">
      {/* Logo */}
      <h1 className="font-[Madimi_One] text-4xl text-blue-500 mt-8">Re.Trip</h1>
      <h2 className="text-xl text-blue-500 font-semibold mt-2 mb-6">
        {tipo === "local" ? "Novo Local" : "Novo Evento"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg px-6 flex flex-col gap-6"
      >
        {/* Campos básicos */}
        <Input label={tipo === "local" ? "Nome do Local" : "Nome do Evento"} type="text" name="nome" placeholder="Digite o nome..." />

        <Input label="Descrição" type="text" name="descricao" placeholder="Digite a descrição..."  />

        {/* Seleção de Locais (só para eventos) */}
        {tipo === "evento" && (
          <div>
            <h3 className="font-semibold text-lg text-blue-500 mb-2">Locais</h3>
            <div className="grid grid-cols-2 gap-3">
              {localPlaces.map((local) => (
                <div
                  key={local.id}
                  onClick={() => toggleLocal(local.id)}
                  className={`relative rounded-xl overflow-hidden cursor-pointer border-2 ${
                    selectedLocais.includes(local.id)
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  <img
                    src={local.image}
                    alt={local.title}
                    className="w-full h-24 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <p className="text-white font-medium">{local.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Seleção de Categorias */}
        <div>
          <h3 className="font-semibold text-lg text-blue-500 mb-2">Categorias</h3>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => toggleCategoria(cat.id)}
                className={`relative rounded-xl overflow-hidden cursor-pointer border-2 ${
                  selectedCategorias.includes(cat.id)
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white font-medium">{cat.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload de imagens */}
        <div>
          <label className="block font-semibold mb-2 text-black">
            Anexar imagens
          </label>
          <input type="file" multiple accept="image/*" />
        </div>

        {/* Botões */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            type="button"
            onClick={() => navigate(isAdmin ? "/admin" : "/")}
            className="px-6 py-2 rounded-full border-2 border-blue-500 text-blue-500 font-semibold hover:bg-blue-100"
          >
            Voltar
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-full font-semibold text-white bg-blue-500 hover:bg-blue-600"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

{/* <Route path="/admin/cad-local" element={<CadastroLocalEvento tipo="local" isAdmin={true}/>} />
<Route path="/admin/cad-evento" element={<CadastroLocalEvento tipo="evento" isAdmin={true}/>} /> */}

export default CadastroLocalEvento;
