import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Componentes
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Menu from "../../../components/Menu";

// Ícones e Imagens
import logoAdmin from '../../../assets/images/logo/logo_admin.png';
import IconArrowChevron from "../../../assets/icons/icon-arrow-chevron";
import IconUpload from "../../../assets/icons/icon-upload";

// Constantes
import { categories, localPlaces } from "../../../constants/infos";
import MultiSelect from "./MultiSelect";

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
  localId: string[];
  categoriaId: string[];
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
    localId: [],
    categoriaId: [],
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    imagens: [],
  });

  // Função genérica para atualizar o estado do formulário com máscaras
  const handleChange = (e: { target: { name: string; value: any } }) => {
    const { name, value } = e.target;

    // Aplica máscara apenas se for um campo que tem máscara definida
    const maskedValue = applyMask(name, value);

    setFormData(prev => ({
      ...prev,
      [name]: maskedValue,
    }));
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
    // Aqui a chamada para a API
    navigate(isAdmin ? "/admin/home" : "/");
  };

  const handleBack = () => navigate(-1);
  const pageTitle = tipo === "local" ? "Novo Local" : "Novo Evento";

  return (
    <div className="flex flex-col min-h-screen bg-white pb-24 ">
      <header className="relative flex flex-col items-center pt-8 pb-4">
        <button onClick={handleBack} className="absolute top-8 left-4 cursor-pointer">
          <IconArrowChevron class="w-10 h-10 stroke-black transform rotate-90" />
        </button>
        <img src={logoAdmin} alt="Re.Trip Logo" className="h-20 w-auto mt-20" />
        <h1 className="text-3xl mt-5 font-bold text-[#229CFF]">{pageTitle}</h1>
      </header>

      <main className="flex-grow px-6">
        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-5xl p-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"
        >

          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-2xl text-left font-bold text-[#229CFF]">Informações Gerais</h2>
          </div>


          <div className="col-span-1 lg:col-span-2">
            <Input label="Nome" type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Insira o nome..." isAdmin={isAdmin} />
          </div>

          {tipo === "local" && (
            <>
              <Input label="CNPJ" type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} placeholder="XX.XXX.XXX/0001-XX" isAdmin={isAdmin} />
              <Input label="Telefone" type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="(00) 00000-0000" isAdmin={isAdmin} />
            </>
          )}

          {tipo === "evento" && (
            <div className="flex gap-4 col-span-1 lg:col-span-2">
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

          <div className="col-span-1 lg:col-span-2">

            <Input label="Descrição" type="text" name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Fale sobre..." isAdmin={isAdmin} />
          </div>

          {tipo === "evento" && (
            <div className="w-full">
              <label className="block font-semibold mb-1 text-black text-left">Local</label>
              <MultiSelect
                name="localId"
                options={localPlaces}
                selected={formData.localId ?? []}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="w-full">
            <label className="block font-semibold mb- text-black text-left">Categorias</label>
            <MultiSelect
              name="categoriaId"
              options={categories}
              selected={formData.categoriaId ?? []}
              onChange={handleChange}
            />
          </div>

          {tipo === "local" && (
            <>
              <div className="col-span-1 lg:col-span-2">
                <h2 className="text-2xl text-left font-bold text-[#229CFF] mb-8">Endereço</h2>
                <Input label="CEP" type="text" name="cep" value={formData.cep} onChange={handleChange} placeholder="00000-000" isAdmin={isAdmin} />
                <Input label="Logradouro" type="text" name="logradouro" value={formData.logradouro} onChange={handleChange} placeholder="Rua, Av, Al..." isAdmin={isAdmin} />
                <Input label="Número" type="text" name="numero" value={formData.numero} onChange={handleChange} placeholder="000" isAdmin={isAdmin} />
                <Input label="Bairro" type="text" name="bairro" value={formData.bairro} onChange={handleChange} placeholder="Vila, Grupo..." isAdmin={isAdmin} />
                <Input label="Cidade" type="text" name="cidade" value={formData.bairro} onChange={handleChange} placeholder="Tatuí, Bofete..." isAdmin={isAdmin} />
              </div>
            </>
          )}

          <div className="mt-2">
            <label htmlFor="file-upload" className="flex items-center gap-3 cursor-pointer text-lg font-semibold text-black">
              {tipo === 'local' ? 'Anexar imagens do local' : 'Anexar imagens promocionais'}
              <IconUpload class="w-6 h-6 fill-[#229CFF]" />
            </label>
            <input id="file-upload" name="imagens" type="file" multiple accept=".jpeg, .jpg, .png" onChange={handleFileChange} className="sr-only" />
            {formData.imagens && formData.imagens.length > 0 && <p className="text-sm text-gray-600 mt-1">{formData.imagens.length} arquivo(s) selecionado(s)</p>}
          </div>

          <div className="mt-3 col-span-full flex justify-center">
            <Button title="Salvar" buttonType="submit" isAdm={isAdmin} width="40%" height="50px" backgroundColor="#fff" colorText="#229CFF" colorShadow="#0073D2" fontSize="18px" fontWeight="bold" />
          </div>
        </form>
      </main>

      <Menu isAdmin={isAdmin} />
    </div>
  );
};

export default CadastroLocalEvento;
