import React from "react";
import styled from '../Inicio.module.scss';
import styled_page from '../Forms/Form.module.scss';
import type { Field } from "../../../../types/field";
import ModalForm from "../Forms/modalForm";
import bgUser from '../../../../assets/images/city/img_bg_tatui.png';
import bgAdmin from '../../../../assets/images/city/img_bg_boituva_1.png';
import { cadastrosUsuarios } from "../../../../core/services/CadastrosUsuarios";
import { useNavigate } from "react-router-dom";

interface CadastroProps {
    isAdmin?: boolean;
}

const fields: Field[] = [
    {
        label: "Nome Completo",
        type: "text",
        placeholder: "Seu nome...",
        name: "nome",
    },
    {
        label: "Data de Nascimento",
        type: "date",
        placeholder: "dd/mm/aaaa",
        name: "dataNascimento",
    },
    {
        label: "Gênero",
        type: "select",
        placeholder: "Selecione...",
        name: "genero",
        options: [
            { value: "masculino", label: "Masculino" },
            { value: "feminino", label: "Feminino" },
            { value: "outro", label: "Outro" },
        ],
    },
    {
        label: "E-mail",
        type: "email",
        placeholder: "exemplo@dominio.com",
        name: "email",
    },
    {
        label: "Senha",
        type: "password",
        placeholder: "Insira uma senha forte...",
        name: "senha",
    },
];

const Cadastro: React.FC<CadastroProps> = ({ isAdmin = false }) => {
        const navigate = useNavigate();
    
        const handleCadastroSuccess = () => {
        if (isAdmin) {
            navigate('/admin/login');
        } else {
            navigate('/login');
        }
    };

    const modalForm = (
        <div
            className={`${styled_page.modal} 
                p-[3.2vh_25px]
                w-[90vw] lg:w-[40vw] 
                flex flex-col justify-center align-center gap-[2vh]
                mx-auto
            `}
        >
            <h1
                className={`
                    ${styled_page.title} 
                    font-[Madimi_One] 
                    ${isAdmin ? "text-[#229CFF]" : "text-[#ff7022ff]"}
                `}
            >
                Cadastre-se
            </h1>
            <ModalForm onCadastroSuccess={handleCadastroSuccess} fields={fields} type="cadastro" isAdmin={isAdmin} />
        </div>
    );

    const shadowColorClass = isAdmin
        ? 'lg:shadow-[-10px_20px_0_20px_rgba(34,156,255,1)]'
        : 'lg:shadow-[-10px_20px_0_20px_rgba(255,112,34,1)]';

    const backgroundImage = isAdmin ? bgAdmin : bgUser;

    return (
        <div
            className={`${styled.container} 
                h-screen w-screen 
                overflow-hidden 
                flex flex-col lg:flex-row items-center`}
        >
            <div className="lg:w-1/2 flex justify-center">
                <div className={`${styled.backgroundTitle} 
                h-[100vh] w-[900px] lg:w-[50vw] lg:h-[100vh] 
                overflow-hidden 
                rounded-b-[0] lg:rounded-br-[500px]
                bg-center bg-no-repeat bg-[auto_115%]
                ${shadowColorClass}`}
                    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
                >
                    <div
                        className={`${styled.overlay} 
                            h-full w-full 
                            flex flex-col justify-center align-center 
                            lg:justify-start`}
                    >
                        <h1
                            className={`${styled.title} ${styled_page.logo} 
                                font-[Madimi_One] 
                                text-[#FFF] 
                                z-[2] 
                                lg:pt-[10vh]`}
                        >
                            Re.Trip
                        </h1>
                        <div
                            className="block lg:hidden z-[2] max-h-[80vh] overflow-y-auto bg-[#FFF] rounded-[50px] mx-auto"
                        >
                            {modalForm}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`${styled.content} 
                    w-[90.1vw] lg:w-[35vw] 
                    flex flex-col items-center gap-[4.2vh]`}
            >
                <div className="hidden lg:block z-[2]">{modalForm}</div>
            </div>
        </div>
    );
};

export default Cadastro;
