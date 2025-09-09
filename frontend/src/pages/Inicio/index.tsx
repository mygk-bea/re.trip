import React from "react";
import styled from './Inicio.module.scss';
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

interface InicioProps {

}

const Inicio: React.FC<InicioProps> = () => {
    const navigate = useNavigate();

    return (
        <div className={`${styled.container}`}>
            <h1 className={styled.title}>Re.Trip</h1>
            <div className={`${styled.content}`}>
                <Button
                    colorIcon="#ee8047"
                    colorText="#363837"
                    backgroundColor="#FFFFFF"
                    colorShadow="#ee8047"
                    height="50px"
                    width="100%"
                    isAdm={false}
                    title="Cadastre-se"
                    positionItems="start"
                    onClick={() => navigate("/user/meu-perfil/minhas-rotas")}
                />
                <Button
                    colorIcon="#ee8047"
                    colorText="#363837"
                    backgroundColor="#FFFFFF"
                    colorShadow="#ee8047"
                    height="50px"
                    width="100%"
                    isAdm={false}
                    title="Entrar"
                    positionItems="start"
                    onClick={() => navigate("/user/meu-perfil/minhas-rotas")}
                />
            </div>
        </div>
    );
};

export default Inicio;