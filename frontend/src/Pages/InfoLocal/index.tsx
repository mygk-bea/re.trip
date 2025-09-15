import IconArrowChevron from '../../assets/icons/icon-arrow-chevron';
import IconExpand from '../../assets/icons/icon-expand';
import IconHeart from '../../assets/icons/icon-heart';
import Menu from '../../components/Menu';
import styled from './InfoLocal.module.scss';

interface InfoLocalProps {
  name: string;
}

const InfoLocal: React.FC<InfoLocalProps> = (props) => {
  return (
    <div className={`${styled.container} h-screen w-screen`}>
      <div className={`${styled.header}`}>
        <div className={`${styled.overlay}`}>
          <div className={`${styled.top}`}>
            <IconArrowChevron class={`${styled.icon}`}/>
            <IconExpand class={`${styled.icon}`}/>
          </div>
          <div className={`${styled.bottom}`}>
            <div className={`${styled.warningVerification}`}></div>
            <h1 className={`${styled.title}`}>{props.name}</h1>
            <IconHeart class={`${styled.icon}`}/>
          </div>
        </div>
      </div>

      <Menu />
    </div>
  );
}

export default InfoLocal;