import React, { useState } from 'react'; // Importar o useState
import { useLocation, useNavigate } from 'react-router-dom';

import styled from './RotaEmAndamento.module.scss';
import IconArrowChevron from '../../../../assets/icons/icon-arrow-chevron';
import Menu from '../../../../components/Menu';
import Stepper from '../../../../components/Stepper';
import Button from '../../../../components/Button';
import IconHome from '../../../../assets/icons/icon-home';
import type { RouteInfo } from '../../../../types/route';
import IconVerify from '../../../../assets/icons/icon-verify';
import Tag from '../../../../components/Tag';

interface RotaEmAndamentoProps {
  route?: RouteInfo
}

const RotaEmAndamento: React.FC<RotaEmAndamentoProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { route } = (location.state || {}) as RotaEmAndamentoProps;

  if (!route) {
    return <p>⚠️ Nenhuma rota em andamento.</p>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentLocal = route.locals[currentIndex];
  const isLastStep = currentIndex === route.locals.length - 1;

  const handleNextStep = () => {
    if (!isLastStep) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      console.log("Rota finalizada!");
      navigate('/user/rota/final', { state: { name: route.name } });
    }
  };

  const imageUrl = currentLocal.images[1] || currentLocal.images[0];

  return (
    <div className="w-screen flex flex-col items-center min-h-screen bg-white pt-[3vh] pb-[15vh]">
      <div className="w-[91vw] mx-[4.5vw] flex items-center border-b-3 border-[#FF7022] pb-2">
        <div className="cursor-pointer" onClick={() => navigate(-1)}>
            <IconArrowChevron class="w-10 h-10 stroke-[#FF7022] transform rotate-90" />
        </div>

        <div className="flex-1 flex justify-start ml-[20px]">
          <div className={`text-[#FF7022] font-bold text-[40px]`} style={{ fontFamily: "'Madimi One', sans-serif" }}>
            {route.name}
          </div>
        </div> 
      </div>

      {currentLocal && (
        <div className={`w-[81vw] m-[20px] flex flex-col lg:flex-row items-center ${styled.container}`} style={{ fontFamily: "'Rubik', sans-serif" }}>
          <div className={`${styled.content} w-full lg:w-1/2 flex flex-col`}>
            <div 
              className={`w-full h-[400px] rounded-[15px] mb-[20px] bg-center bg-no-repeat bg-cover overflow-hidden`} 
              style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div
                  className={`${styled.overlay} p-[25px] flex flex-col justify-end h-full w-full bg-[rgba(0,0,0,0.2)]`}
                >
                  {currentLocal.verified && (
                    <div className={`${styled.warningVerification} flex items-center mb-1`}>
                      <IconVerify class={`${styled.verify} w-[30px] h-[30px] md:w-5 md:h-5`} />
                      <p className={`${styled.text} text-[#47E417] text-xs md:text-sm`} style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 500, fontSize: '1rem' }}>
                        Verificado por moderadores
                      </p>
                    </div>
                  )}
                  <div className={`text-white text-[30px] text-start md:text-[40px] font-bold ${styled.title}`} style={{ fontFamily: "'Madimi One', sans-serif" }}>
                    {currentLocal.name}
                  </div>
                </div>
            </div>

            <div
              className={`w-full flex flex-wrap gap-[5px] mb-[20px]`}
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              {currentLocal.tags.map((tag, index) => (
                <Tag
                  key={`tag-${index}`}
                  text={tag.text}
                  bgColor={tag.style.bgColor}
                  textColor={tag.style.textColor}
                  borderColor={tag.style.borderColor}
                  dismissible={false}
                  onDismiss={() => {}}
                  onClick={() => {}}
                  initiallySelected={false}
                  showDismiss={false}
                />
              ))}
            </div>
            
            <div className="p-3 rounded-[15px] bg-[#FFFFCD] border border-[#FFEE71] text-start w-full">
              <p><span style={{ color: "#FF7022", fontWeight: 500 }}>Endereço: </span>{currentLocal.address}</p>
            </div>
            
            <div className={`mt-2 w-full flex items-center justify-start`}>
              <a href={`/local/${currentLocal.id}`} className='text-[#FF7022]' style={{fontWeight: 500, textDecoration: 'underline'}}>Ir para página do local</a>
              <IconArrowChevron class="w-[20px] stroke-[#FF7022] transform rotate-270" />
            </div>
          </div>

          <div className={`${styled.content} w-full lg:w-1/2 flex flex-col items-center lg:items-center mt-5 lg:mt-0`}>          
            <div className='my-5'>
              <Stepper
                steps={route.locals.length + 1}
                currentStep={currentIndex + 1} 
                startIcon={<IconHome class="scale-75" />}
              />
            </div>

            <Button
              colorText="#FFF"
              backgroundColor="#FF7022"
              colorShadow="#DD3603"
              height="50px"
              width="240px"
              title={isLastStep ? "Finalizar" : "Visitar próximo local"}
              positionItems="center"
              fontFamily="'Rubik', sans-serif"
              isAdm={false}
              onClick={handleNextStep}
            />
          </div>
        </div>
      )}

      <Menu />
    </div>
  );
}

export default RotaEmAndamento;