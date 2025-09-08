import React from "react";
import styled from './Inicio.module.scss';
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

interface InicioProps {}

const Inicio: React.FC<InicioProps> = () => {
    const navigate = useNavigate();

    return (
        <div className={`${styled.container}`}>
            <div className={`${styled.backgroundTitle}`}>
                <div className={`${styled.overlay}`}>
                    <h1 className={styled.title}>Re.Trip</h1>
                </div>
            </div>
            <div className={`${styled.content}`}>
                <Button
                    colorText="#fff9f6"
                    backgrandColor="#ff7022"
                    colorSombra="#dd3603"
                    height="60px"
                    width="100%"
                    isAdm={false}
                    tittle="Cadastre-se"
                    positionItens="center"
                    onClick={() => navigate("/cadastro")}
                />
                <Button
                    colorText="#ff7022"
                    backgrandColor="#FFFFFF"
                    colorSombra="#ee8047"
                    height="60px"
                    width="100%"
                    isAdm={false}
                    tittle="Entrar"
                    positionItens="center"
                    onClick={() => navigate("/login")}
                />
            </div>
        </div>
    );
};

export default Inicio;