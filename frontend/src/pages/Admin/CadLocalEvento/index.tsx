import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Componentes customizados
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Menu from "../../../components/Menu";

// Ícones e Imagens
import logoAdmin from '../../../assets/images/logo/logo_admin.png';
import IconArrowChevron from "../../../assets/icons/icon-arrow-chevron";
import IconUpload from "../../../assets/icons/icon-upload";

// Constantes
import { categories, localPlaces } from "../../../constants/infos";

interface CadastroProps {
  isAdmin?: boolean;
  tipo: "local" | "evento";
}

type FormData = {
  nome: string;
  descricao: string;
  cnpj: string;
  telefone: string;
  data: string;
  hora: string;
  localId: string;
  categoriaId: string;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  imagens: File[];
};

// Função para aplicar máscaras de input
const applyMask = (name: string, value: string): string => {
  if (name === 'cnpj') {
    return value
      .replace(/\D/g, '') // Remove tudo que não é dígito
      .replace(/(\d{2})(\d)/, '$1.$2') // Coloca ponto após o segundo dígito
      .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após o quinto dígito
      .replace(/(\d{3})(\d)/, '$1/$2') // Coloca barra após o oitavo dígito
      .replace(/(\d{4})(\d)/, '$1-$2') // Coloca hífen após o décimo segundo dígito
      .slice(0, 18); // Limita o tamanho
  }
  if (name === 'telefone') {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2') // Coloca parênteses nos dois primeiros dígitos
      .replace(/(\d{5})(\d)/, '$1-$2') // Coloca hífen para celular
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3') // Ajusta o hífen para telefone fixo
      .slice(0, 15);
  }
  if (name === 'cep') {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2') // Coloca hífen após o quinto dígito
      .slice(0, 9);
  }
  return value;
};


const CadastroLocalEvento: React.FC<CadastroProps> = ({ isAdmin = true, tipo }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Partial<FormData>>({
    nome: "",
    descricao: "",
    cnpj: "",
    telefone: "",
    data: "",
    hora: "",
    localId: "",
    categoriaId: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    imagens: [],
  });

  // Função genérica para atualizar o estado do formulário com máscaras
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const maskedValue = applyMask(name, value);
    setFormData(prev => ({ ...prev, [name]: maskedValue }));
  };

  // Função para lidar com o upload de arquivos
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, imagens: Array.from(e.target.files!) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    // Aqui você faria a chamada para a API
    navigate(isAdmin ? "/admin/home" : "/");
  };

  const handleBack = () => navigate(-1);
  const pageTitle = tipo === "local" ? "Novo Local" : "Novo Evento";

  return (
    <div className="flex flex-col min-h-screen bg-white pb-24">
      <header className="relative flex flex-col items-center pt-8 pb-4">
        <button onClick={handleBack} className="absolute top-8 left-4 text-gray-800">
          <IconArrowChevron class="w-6 h-6" />
        </button>
        <img src={logoAdmin} alt="Re.Trip Logo" className="h-20 w-auto" />
        <h1 className="text-2xl font-bold text-blue-500 mt-2">{pageTitle}</h1>
      </header>

      <main className="flex-grow px-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-blue-500 mb-2">Informações Gerais</h2>

          <Input label="Nome" type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Insira o nome..." isAdmin={isAdmin} />

          {tipo === "local" && (
            <>
              <Input label="CNPJ" type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} placeholder="XX.XXX.XXX/0001-XX" isAdmin={isAdmin} />
              <Input label="Telefone" type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="(00) 00000-0000" isAdmin={isAdmin} />
            </>
          )}

          {tipo === "evento" && (
            <div className="flex gap-4">
              <Input
                label="Data"
                type="date"
                name="data"
                value={formData.data || ""}
                onChange={handleChange}
                placeholder="dd/mm/aaaa"
                isAdmin={isAdmin}
              />
              <Input
                label="Hora"
                type="time"
                name="hora"
                value={formData.hora || ""}
                onChange={handleChange}
                placeholder="hh:mm"
                isAdmin={isAdmin}
              />
            </div>
          )}

          <Input label="Descrição" type="text" name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Fale sobre a rota" isAdmin={isAdmin} />

          {tipo === "evento" && (
            <div className="w-full">
              <label className="block font-semibold mb-1 text-black text-left">Local</label>
              <select name="localId" value={formData.localId} onChange={handleChange} className="w-full border-b border-gray-400 focus:outline-none pb-2 pl-3 text-gray-500 bg-white">
                <option value="">Selecione...</option>
                {localPlaces.map(local => <option key={local.id} value={local.id}>{local.title}</option>)}
              </select>
            </div>
          )}

          <div className="w-full">
            <label className="block font-semibold mb-1 text-black text-left">Categorias</label>
            <select name="categoriaId" value={formData.categoriaId} onChange={handleChange} className="w-full border-b border-gray-400 focus:outline-none pb-2 pl-3 text-gray-500 bg-white">
              <option value="">Selecione...</option>
              {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.title}</option>)}
            </select>
          </div>

          {tipo === "local" && (
            <>
              <h2 className="text-xl font-bold text-blue-500 mt-4 mb-2">Endereço</h2>
              <Input label="CEP" type="text" name="cep" value={formData.cep} onChange={handleChange} placeholder="00000-000" isAdmin={isAdmin} />
              <Input label="Logradouro" type="text" name="logradouro" value={formData.logradouro} onChange={handleChange} placeholder="Rua, Av, Al..." isAdmin={isAdmin} />
              <Input label="Número" type="text" name="numero" value={formData.numero} onChange={handleChange} placeholder="000" isAdmin={isAdmin} />
              <Input label="Bairro" type="text" name="bairro" value={formData.bairro} onChange={handleChange} placeholder="Vila, Grupo..." isAdmin={isAdmin} />
            </>
          )}

          <div className="mt-4">
            <label htmlFor="file-upload" className="flex items-center justify-between w-full cursor-pointer text-lg font-semibold text-black">
              {tipo === 'local' ? 'Anexar imagens do local' : 'Anexar imagens promocionais'}
              <IconUpload class="w-6 h-6 fill-[--color-primary-admin]" />
            </label>
            <input id="file-upload" name="imagens" type="file" multiple onChange={handleFileChange} className="sr-only" />
            {formData.imagens && formData.imagens.length > 0 && <p className="text-sm text-gray-600 mt-1">{formData.imagens.length} arquivo(s) selecionado(s)</p>}
          </div>

          <div className="flex justify-center mt-6">
            <Button title="Salvar" buttonType="submit" isAdm={isAdmin} width="100%" height="50px" backgroundColor="#229CFF" colorText="#FFFFFF" colorShadow="#0073D2" fontSize="18px" fontWeight="bold" />
          </div>
        </form>
      </main>

      <Menu isAdmin={isAdmin} />
    </div>
  );
};

export default CadastroLocalEvento;
