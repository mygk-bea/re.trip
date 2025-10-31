import React from "react";
import styled from "../Inicio.module.scss";
import styled_page from "../Forms/Form.module.scss";
import type { Field } from "../../../../types/field";
import ModalForm from "../Forms/modalForm";
import bgUser from '../../../../assets/images/city/img_bg_tatui.png';
import bgAdmin from '../../../../assets/images/city/img_bg_boituva_1.png';
import bgGuia from '../../../../assets/images/city/img_bg_torre-de-pedra-1.jpg';
import { authService } from "../../../../core/services/LoginService";
import { useNavigate } from "react-router-dom";
import { dictDataRoutes } from "../../../../constants/typeUser";

interface LoginProps {
    isAdmin?: boolean;
    isGuia?: boolean;
}

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

const Login: React.FC<LoginProps> = ({ isAdmin = false, isGuia = false }) => {
    const navigate = useNavigate();
    const type = isAdmin ? "admin" : isGuia ? "guia" : "user";

    React.useEffect(() => {
        if (authService.isUserAuthenticated()) {
            navigate(dictDataRoutes(type).home);
        }
    }, [navigate, isAdmin, isGuia]);

    const handleLoginSuccess = () => {
        navigate(dictDataRoutes(type).home);
    };

    const backgroundImage = isAdmin
        ? bgAdmin
        : isGuia
        ? bgGuia
        : bgUser;

    const color = dictDataRoutes(type).color;
    // const secondaryColor = dictDataRoutes(type).secondaryColor;

    return (
        <div
            className={`${styled.container} 
                h-screen w-screen 
                overflow-hidden 
                flex flex-col lg:flex-row items-center`}
        >
            <div className="lg:w-1/2 flex justify-center">
                <div
                    className={`${styled.backgroundTitle} 
                        h-[100vh] w-[900px] lg:w-[50vw] lg:h-[100vh] 
                        overflow-hidden 
                        rounded-b-[0] lg:rounded-br-[500px]
                        bg-center bg-no-repeat bg-[auto_115%]`}
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "cover",
                        "--shadow-color": color,
                    } as React.CSSProperties}
                >
                    <div
                        className={`${styled.overlay} 
                            h-full w-full flex flex-col justify-center align-center lg:justify-start relative`}
                    >
                        <h1
                            className={`${styled.title} ${styled_page.logo} 
                                font-[Madimi_One] text-[#FFF] 
                                z-[2] absolute left-1/2 -translate-x-1/2 top-[5vh] 
                                lg:pt-[10vh]`}
                        >
                            Re.Trip
                        </h1>

                        <div className="block lg:hidden z-[2] max-h-[80vh] mt-[5vh] lg:mt-0 overflow-y-auto bg-[#FFF] rounded-[50px] mx-auto">
                            <div
                                className={`${styled_page.modal} 
                                    p-[3.2vh_25px]
                                    w-[90vw] lg:w-[40vw] 
                                    flex flex-col justify-center align-center gap-[2vh]
                                    mx-auto`}
                            >
                                <h1
                                    className={`${styled_page.title} 
                                        font-[Madimi_One]`}
                                    style={{ color }}
                                >
                                    Bem-vindo!
                                </h1>
                                <ModalForm
                                    type="login"
                                    onLoginSuccess={handleLoginSuccess}
                                    fields={fields}
                                    isAdmin={isAdmin}
                                    isGuia={isGuia}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`${styled.content} 
                    w-[90.1vw] lg:w-[35vw] 
                    flex flex-col items-center gap-[4.2vh]`}
            >
                <div className="hidden lg:block z-[2]">
                    <div
                        className={`${styled_page.modal} 
                            p-[3.2vh_25px]
                            w-[90vw] lg:w-[40vw] 
                            flex flex-col justify-center align-center gap-[2vh]
                            mx-auto`}
                    >
                        <h1
                            className={`${styled_page.title} 
                                font-[Madimi_One]`}
                            style={{ color }}
                        >
                            Bem-vindo!
                        </h1>
                        <ModalForm
                            type="login"
                            onLoginSuccess={handleLoginSuccess}
                            fields={fields}
                            isAdmin={isAdmin}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;