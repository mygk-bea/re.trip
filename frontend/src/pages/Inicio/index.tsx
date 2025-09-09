import React from "react";
import styled from './Inicio.module.scss';
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

interface InicioProps {}

const Inicio: React.FC<InicioProps> = () => {
    const navigate = useNavigate();

    return (
        <div className={`${styled.container} 
            h-screen w-screen 
            overflow-hidden 
            flex flex-col lg:flex-row items-center`}
        >
            <div className="lg:w-1/2 flex justify-center">
                <div className={`${styled.backgroundTitle} 
                    h-[63vh] w-[900px] lg:w-[50vw] lg:h-[100vh] 
                    overflow-hidden 
                    rounded-b-[500px] lg:rounded-b-[0] lg:rounded-br-[500px]
                    bg-center bg-no-repeat bg-[auto_115%]
                    lg:shadow-[-10px_20px_0_20px_rgba(255,112,34,1)]`}
                >
                    <div className={`${styled.overlay} h-full w-full flex justify-center`}>
                        <h1 className={`${styled.title} font-[Madimi_One] lg:hidden text-[#FFF] z-[2]`}>Re.Trip</h1>
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
                    onClick={() => navigate("/criar-conta")}
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

export default Inicio;