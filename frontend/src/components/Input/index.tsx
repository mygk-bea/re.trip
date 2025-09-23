import React from 'react';

interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    name?: string;
    value?: any;
    key?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, name, value, onChange, key }) => {
    return (
        <div className='w-full'>
            <label className="block font-semibold mb-1 text-black text-left">{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                key={key}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-[100%] border-b border-gray-400 focus:outline-none focus:border-orange-500 pb-4 pl-3 mb-6 mt-4 text-black placeholder-gray-400"
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
// />

export default Input;
