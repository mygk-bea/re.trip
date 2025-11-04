import React from "react";
import styled from './Inicio.module.scss';
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import bgUser from '../../../assets/images/city/img_bg_tatui.png';
import bgAdmin from '../../../assets/images/city/img_bg_boituva_1.png';
import bgGuia from '../../../assets/images/city/img_bg_torre-de-pedra-1.jpg';
import { dictDataRoutes } from "../../../constants/typeUser";

interface InicioProps {
    isAdmin?: boolean;
    isGuia?: boolean;
}

const Inicio: React.FC<InicioProps> = ({ isAdmin = false, isGuia = false }) => {
    const navigate = useNavigate();
    const type = isAdmin ? 'admin' : isGuia ? 'guia' : 'user';

    const handleCadastro = () => {
        navigate(dictDataRoutes(type).cadastro);
    };

    const handleLogin = () => {
        navigate(dictDataRoutes(type).login);
    };

    const backgroundImage = isAdmin 
        ? bgAdmin : isGuia 
        ? bgGuia : bgUser;

    return (
        <div className={`${styled.container} 
            h-screen w-screen 
            overflow-hidden 
            flex flex-col lg:flex-row items-center`}
        >
            <div className="lg:w-1/2 flex justify-center">
                <div
                    className={`${styled.backgroundTitle} 
                        h-[63vh] w-[900px] lg:w-[50vw] lg:h-[100vh] 
                        overflow-hidden 
                        rounded-b-[500px] lg:rounded-b-[0] lg:rounded-br-[500px]
                        bg-center bg-no-repeat bg-[auto_115%]`}
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "cover",
                        "--shadow-color": dictDataRoutes(type).color,
                    } as React.CSSProperties}
                >
                    <div className={`${styled.overlay} h-full w-full flex justify-center`}>
                        <h1 className={`${styled.title} font-[Madimi_One] lg:hidden text-[#FFF] z-[2]`}>
                            Re.Trip
                        </h1>
                    </div>
                </div>
            </div>

            <div className={`${styled.content} w-[90.1vw] lg:w-[35vw] flex flex-col items-center gap-[4.2vh]`}>
                <h1
                    className={`${styled.title} font-[Madimi_One] hidden lg:block`}
                    style={{ color: dictDataRoutes(type).color }}
                >
                    Re.Trip
                </h1>

                <Button
                    colorText={isAdmin ? "#fff" : "#fff9f6"}
                    backgroundColor={dictDataRoutes(type).color}
                    outlineColor={dictDataRoutes(type).color}
                    colorShadow={dictDataRoutes(type).secondaryColor}
                    height="60px"
                    width="100%"
                    isAdm={isAdmin}
                    title="Cadastre-se"
                    positionItems="center"
                    fontSize="1.75rem"
                    fontFamily="'Madimi One', sans-serif"
                    onClick={handleCadastro}
                />

                <Button
                    colorText={dictDataRoutes(type).color}
                    backgroundColor="#FFFFFF"
                    outlineColor={dictDataRoutes(type).color}
                    colorShadow={dictDataRoutes(type).color}
                    height="60px"
                    width="100%"
                    isAdm={isAdmin}
                    title="Entrar"
                    positionItems="center"
                    fontSize="1.75rem"
                    fontFamily="'Madimi One', sans-serif"
                    onClick={handleLogin}
                />
            </div>
        </div>
    );
};

export default Inicio;