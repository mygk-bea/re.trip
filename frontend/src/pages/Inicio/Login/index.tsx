import React from "react";
import styled from '../Inicio.module.scss';
import styled_page from '../Forms/Form.module.scss';
import type { Field } from "../../../types/field";
import ModalForm from "../Forms/modalForm";

interface LoginProps {}

const fields: Field[] = [
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

const Login: React.FC<LoginProps> = () => {
    const modalForm = (
        <div className={`${styled_page.modal} 
            p-[3.2vh_25px]
            w-[90vw] lg:w-[40vw] 
            flex flex-col justify-center align-center gap-[2vh]
            mx-auto
            `}
        >
            <h1 className={`${styled_page.title} font-[Madimi_One] text-[#ff7022ff]`}>Bem-vindo!</h1>
            <ModalForm fields={fields} />
        </div>
    )

    return (
        <div className={`${styled.container} 
            h-screen w-screen 
            overflow-hidden 
            flex flex-col lg:flex-row items-center`}
        >
            <div className="lg:w-1/2 flex justify-center">
                <div className={`${styled.backgroundTitle} 
                    h-screen w-screen lg:w-[50vw]
                    overflow-hidden 
                    lg:rounded-b-[0] lg:rounded-br-[500px]
                    bg-center bg-no-repeat bg-[auto_115%]
                    lg:shadow-[-10px_20px_0_20px_rgba(255,112,34,1)]`}
                >
                    <div className={`${styled.overlay} h-full w-full flex flex-col justify-center align-center lg:justify-start relative`}>
                        <h1 className={`${styled.title} ${styled_page.logo} 
                            font-[Madimi_One] text-[#FFF] 
                            z-[2] absolute left-1/2 -translate-x-1/2 top-[5vh] 
                            lg:pt-[10vh]`}>Re.Trip</h1>
                        <div className="block lg:hidden z-[2] max-h-[80vh] mt-[5vh] lg:mt-0 overflow-y-auto bg-[#FFF] rounded-[50px] mx-auto">{modalForm}</div>
                    </div>

                </div>
            </div>
            <div className={`${styled.content} w-[90.1vw] lg:w-[35vw] flex flex-col items-center gap-[4.2vh]`}>
                <div className="hidden lg:block z-[2]">{modalForm}</div>
            </div>
        </div>
    );
};

export default Login;