import React from 'react';

interface InputProps {
    label: string;
    type: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder }) => {
    return (
        <div className='w-full'>
            <label className="block font-semibold mb-1 text-black text-left">{label}</label>
            <input
                id={label}
                name={label}
                type={type}
                placeholder={placeholder}
                className="border-b border-gray-400 focus:outline-none focus:border-orange-500 pb-4 pl-3 mb-6 mt-4 text-black placeholder-gray-400"
            />
        </div>
    );
};

    //   <Input
    //     label="Digite seu nome"
    //     type="text"
    //     placeholder="Seu nome..."
    //   />

export default Input;
