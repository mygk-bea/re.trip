import React from "react";
import styled from './Inicio.module.scss';
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

interface InicioProps {}

const Inicio: React.FC<InicioProps> = () => {
    const navigate = useNavigate();

    return (
        <div className={`${styled.container} h-screen w-screen overflow-hidden flex flex-col items-center`}>
            <div className={`${styled.backgroundTitle} h-[63vh] w-[900px] overflow-hidden rounded-b-[500px] bg-center bg-no-repeat`}>
                <div className={`${styled.overlay} h-full w-full flex justify-center`}>
                    <h1 className={`${styled.title} font-[Madimi_One]`}>Re.Trip</h1>
                </div>
            </div>
            <div className={`${styled.content} w-[90.1vw] flex flex-col items-center gap-[4.2vh]`}>
                <Button
                    colorText="#fff9f6"
                    backgroundColor="#ff7022"
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

export default Inicio;