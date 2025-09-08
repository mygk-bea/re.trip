import React from "react";
import styled from '../Inicio.module.scss';
import styled_page from './Cadastro.module.scss';
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

interface CadastroProps {}

const Cadastro: React.FC<CadastroProps> = () => {
    const navigate = useNavigate();

    return (
        <div className={`${styled.container} 
            h-screen w-screen 
            overflow-hidden 
            flex flex-col lg:flex-row items-center`}
        >
            <div className="lg:w-1/2 flex justify-center">
                <div className={`${styled.backgroundTitle} 
                    h-screen w-[900px] lg:w-[50vw]
                    overflow-hidden 
                    lg:rounded-b-[0] lg:rounded-br-[500px]
                    bg-center bg-no-repeat bg-[auto_115%]
                    lg:shadow-[-10px_20px_0_20px_rgba(255,112,34,1)]`}
                >
                    <div className={`${styled.overlay} h-full w-full flex flex-col justify-center align-center`}>
                        <h1 className={`${styled.title} font-[Madimi_One] lg:hidden text-[#FFF] z-[2]`}>Re.Trip</h1>

                        <div className={`${styled_page.modal} 
                            h-[60vh] w-[90vw] 
                            flex justify-center align-center 
                            bg-[#FFF] z-[2]
                            rounded-[50px]`}
                        >
                            <h1 className={`${styled_page.title} font-[Madimi_One] text-[#ff7022ff]`}>Cadastro</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`${styled.content} w-[90.1vw] lg:w-[35vw] flex flex-col items-center gap-[4.2vh]`}>
                <h1 className={`${styled.title} font-[Madimi_One] text-[#ff7022ff] hidden lg:block`}>Re.Trip</h1>

                <Button
                    colorText="#fff9f6"
                    backgroundColor="#ff7022ff"
                    colorShadow="#dd3603"
                    height="60px"
                    width="100%"
                    isAdm={false}
                    title="Cadastre-se"
                    positionItems="center"
                    fontSize="1.75rem"
                    fontFamily="'Madimi One', sans-serif"
                    onClick={() => navigate("/cadastro")}
                />
                <Button
                    colorText="#ff7022"
                    backgroundColor="#FFFFFF"
                    colorShadow="#ee8047"
                    height="60px"
                    width="100%"
                    isAdm={false}
                    title="Entrar"
                    positionItems="center"
                    fontSize="1.75rem"
                    fontFamily="'Madimi One', sans-serif"
                    onClick={() => navigate("/login")}
                />
            </div>
        </div>
    );
};

export default Cadastro;