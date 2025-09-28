import React from "react";
import styled from './Inicio.module.scss';
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import bgUser from '../../../assets/images/city/img_bg_tatui.png';
import bgAdmin from '../../../assets/images/city/img_bg_boituva_1.png';

interface InicioProps {
    isAdmin?: boolean;
}

const Inicio: React.FC<InicioProps> = ({ isAdmin = false }) => {
    const navigate = useNavigate();

    const handleCadastro = () => {
        navigate(isAdmin ? "/admin/criar-conta" : "/criar-conta");
    };

    const handleLogin = () => {
        navigate(isAdmin ? "/admin/login" : "/login");
    };

    const shadowColorClass = isAdmin
        ? 'lg:shadow-[-10px_20px_0_20px_rgba(34,156,255,1)]'
        : 'lg:shadow-[-10px_20px_0_20px_rgba(255,112,34,1)]';

    const backgroundImage = isAdmin ? bgAdmin : bgUser;

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
                ${shadowColorClass}`}
                
                    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
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
                    className={`${styled.title} font-[Madimi_One] hidden lg:block ${isAdmin ? 'text-[#229CFF]' : 'text-[#ff7022ff]'
                        }`}
                >
                    Re.Trip
                </h1>

                <Button
                    colorText={isAdmin ? "#fff" : "#fff9f6"}
                    backgroundColor={isAdmin ? undefined : "#ff7022ff"}
                    colorShadow={isAdmin ? undefined : "#dd3603"}
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
                    colorText={isAdmin ? "#229CFF" : "#ff7022"}
                    backgroundColor="#FFFFFF"
                    colorShadow={isAdmin ? "#229CFF" : "#ee8047"}
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
