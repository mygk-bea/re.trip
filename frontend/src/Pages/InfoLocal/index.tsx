import IconArrowChevron from '../../assets/icons/icon-arrow-chevron';
import IconExpand from '../../assets/icons/icon-expand';
import IconHeart from '../../assets/icons/icon-heart';
import IconVerify from '../../assets/icons/icon-verify';
import Menu from '../../components/Menu';
import StarRating from '../../components/StarRating';
import Tag from '../../components/Tag';
import styled from './InfoLocal.module.scss';

interface InfoLocalProps {
  name: string;
}

const InfoLocal: React.FC<InfoLocalProps> = (props) => {
  return (
    <>
      <div className={`${styled.container} h-full w-screen text-start pb-[10vh]`}>
        <div className={`${styled.header}
        bg-center bg-no-repeat bg-[auto_115%] rounded-b-[50px]
        `}>
          <div className={`${styled.overlay} 
          flex flex-col justify-between h-[52vh] w-full p-[40px]`}>
            <div className={`${styled.top} flex justify-between items-center z-[2]`}>
              <button onClick={() => window.history.back()}>
                <IconArrowChevron class={`${styled.icon} ${styled.arrow}`}/>
              </button>
              <button onClick={() => {}}>
                <IconExpand class={`${styled.icon} ${styled.expand}`}/>
              </button>
            </div>
            <div className={`${styled.bottom} flex justify-between items-center z-[2]`}>
              <div>
                <p className={`${styled.warningVerification} flex text-[#47E417]`}>
                  <IconVerify/>
                  aaaaaaaaaaaaa
                </p>
                <h1 className={`${styled.title} text-[#FFFFFF] `}>{props.name}</h1>
              </div>
              <button onClick={() => {}}>
                <IconHeart class={`${styled.icon}`}/>
              </button>
            </div>
          </div>
        </div>

        <div className={`${styled.content} p-[4.5vw]`}>
          <StarRating rating={4.8} showNumber={true}/>
          <div className={`${styled.tags} flex flex-wrap gap-2 mt-4`}>
            <Tag text="Natureza e Ecoturismo" bgColor="rgba(52, 181, 5, .1)" textColor="#34B505" borderColor="#34B505"/>
            <Tag text="Pet Friendly" bgColor="rgba(52, 181, 5, .1)" textColor="#34B505" borderColor="#34B505"/>
            <Tag text="Aventura e Diversão" bgColor="rgba(52, 181, 5, .1)" textColor="#34B505" borderColor="#34B505"/>
          </div>

          <div className={`${styled.description} mt-4 p-[10px] bg-[#FFFFCD] border border-[#FFEE71] rounded-[15px]`}>
            <p><span>Descrição: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className={`${styled.contact} mt-4`}>
            <p><span>Contato: </span>contato@exemplo.com</p>
          </div>

          <div className={`${styled.adress} mt-4`}>
            <p><span>Endereço: </span>Rua Exemplo, 123 - Bairro - Cidade - Estado</p>
          </div>

          <div className={`${styled.map} mt-4`}>
            <p><span>Ver no mapa: </span></p>
          </div>

          <div className={`${styled.rotas} mt-4`}>
            <p><span>Rotas: </span></p>
          </div>

          <div className={`${styled.eventos} mt-4`}>
            <p><span>Eventos: </span></p>
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
}

export default InfoLocal;