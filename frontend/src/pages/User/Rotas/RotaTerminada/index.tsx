import React from 'react';
import styled from './RotaTerminada.module.scss';
import IconVerify from '../../../../assets/icons/icon-verify';
import StarRating from '../../../../components/StarRating';
import Button from '../../../../components/Button';
import { useLocation, useNavigate } from 'react-router-dom';

interface RotaTerminadaProps {
    name?: string;
}

const RotaTerminada: React.FC<RotaTerminadaProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name } = (location.state || {}) as RotaTerminadaProps;

    if (!name) {
        return <p>⚠️ Nenhuma rota finalizada.</p>;
    }

    return (
        <div className={`${styled.container} h-full w-screen text-center flex flex-col justify-center items-center gap-[50px]`}>
            <div className={`flex flex-col relative pb-[30px]`}>
                <IconVerify class={`${styled.icon}`} />
                <h1 className={`${styled.title} absolute bottom-0`}>PARABÉNS!</h1>
            </div>

            <div className={`${styled.content} flex flex-col`}>
                <p>Você concluiu a rota:</p>
                <h3>{name}</h3>
            </div>

            <div className={`${styled.rating} flex flex-col items-center gap-[15px]`}>
                <StarRating rating={0} editable showNumber={false} />
                <span className={`${styled.text}`}>Avalie a rota para compartilhar<br/> com outras pessoas</span>
            </div>

            <Button 
                colorText="#FFFFFF"
                backgroundColor='#ff7022'
                colorShadow='#dd3603'
                height="50px"
                width="220px"
                title="Voltar para o Início"
                fontFamily="'Rubik', sans-serif"
                positionItems="center"
                isAdm={false}
                onClick={() => { navigate("/user/home") }}
            />
        </div>
    );
}

export default RotaTerminada;