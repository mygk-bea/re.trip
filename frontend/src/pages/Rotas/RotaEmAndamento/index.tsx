import React from 'react';

import styled from './RotaEmAndamento.module.scss';
import IconArrowChevron from '../../../assets/icons/icon-arrow-chevron';
import Menu from '../../../components/Menu';
import Stepper from '../../../components/Stepper';
import Button from '../../../components/Button';
import IconHome from '../../../assets/icons/icon-home';

interface RotaEmAndamentoProps {}

const RotaEmAndamento: React.FC<RotaEmAndamentoProps> = () => {

  return (
    <div className="w-screen flex flex-col items-center min-h-screen bg-white pt-[5vh] pb-[15vh]">
      <div className="w-full px-[4.5vw] flex items-center mb-6">
        <button onClick={() => window.history.back()}>
          <IconArrowChevron class={`${styled.icon} ${styled.arrow}`}/>
        </button>
        <h3 className={`${styled.title}`}>Rota em Andamento</h3>
      </div>

      <div></div>

      <div></div>
      <div></div>
      <div></div>

        <Stepper
          steps={3}
          currentStep={2}
          startIcon={<IconHome />}
        />

      <Button
        colorText="#FFF"
        backgroundColor="#FF7022"
        colorShadow="#DD3603"
        height="50px"
        width="200px"
        title="Visitar próximo local"
        positionItems="center"
        fontFamily="'Madimi One', sans-serif"
        isAdm={false}
        onClick={() => { }}
      />
      <Menu />
    </div>
  );
}

export default RotaEmAndamento;