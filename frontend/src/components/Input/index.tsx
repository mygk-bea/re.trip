import React from "react";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  name?: string;
  value?: any;
  key?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isAdmin?: boolean; // cor de foco
  disabled?: boolean; // ✅ nova prop
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  key,
  isAdmin,
  disabled = false,
}) => {
  const focusColorClass = isAdmin
    ? "focus:border-blue-500"
    : "focus:border-orange-500";

  // estilos quando desabilitado
  const disabledClass = disabled
    ? "opacity-60 cursor-not-allowed bg-gray-100"
    : "";

  return (
    <div className="w-full">
      <label className="block font-semibold mb-1 text-black text-left">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        key={key}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled} // ✅ aqui
        className={`w-full border-b border-gray-400 focus:outline-none pb-4 pl-3 mb-6 mt-4 text-black placeholder-gray-400 ${focusColorClass} ${disabledClass}`}
      />
    </div>
  );
};

// Exemplo de uso
// <Input
//   label="Digite seu nome"
//   type="text"
//   placeholder="Seu nome..."
//   name="nome"
//   value={form.nome}
//   onChange={handleChange}
//   isAdmin={true}
// />

export default Input;
