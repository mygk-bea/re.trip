import React from 'react';

interface ButtonProps {
    icon?: string;
    positionText?: string;
    color: string;
    tittle: string;
}

const Button: React.FC<ButtonProps> = ({ icon, color, tittle }) => {
    return (
        <button>
            <div className="conteudo">{icon} {tittle}</div>
        </button>
    );
};

export default Button;
