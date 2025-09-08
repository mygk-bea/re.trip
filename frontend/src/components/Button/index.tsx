import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    icon?: React.ComponentType<any>;
    positionItens?: string;
    colorIcon?: string;
    colorText?: string;
    backgrandColor?: string;
    colorSombra?: string;
    height: string;
    width: string;
    isAdm: boolean;
    tittle: string;
    nameClass?: string; //para a manipulação dos svg caso necessário
    fontZise?: string;
    fontFamily?: string;
    fontWeight?: string | number;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({fontZise, fontWeight, fontFamily, nameClass, colorText, colorSombra, icon: IconComponent, isAdm, positionItens, colorIcon, backgrandColor, height, width, tittle, onClick }) => {
    const buttonStyle = {
        '--color-icon': colorIcon,
        '--color-text': colorText,
        '--bg-color': backgrandColor,
        '--height': height,
        '--width': width,
        '--position-text': positionItens,
        '--color-sombra': colorSombra,
        '--font-size': fontZise,
        '--font-weight': fontWeight, 
        '--font-family': fontFamily
    } as React.CSSProperties;
    
    return (
        <>
        <button style={buttonStyle} className={isAdm ? `${styles.button} ${styles.button__adm}` : `${styles.button} ${styles.button__user_comum}`} onClick={onClick}>
        {IconComponent ? (
            <div className={styles.button__icon}> 
                <IconComponent class={nameClass}/>
            </div>
        ) : null}
            <div className={styles.button__title}>{tittle}</div>
        </button>
        </>
    )
};

export default Button;

// exemplo de chamada:
//     <Button
//     // colorIcon="#229CFF"
//     colorText="#FFFFFF"
//     backgrandColor='#229CFF'
//     colorSombra='#0073D2'
//     height="40px"
//     width="400px"
//     isAdm={true}
//     tittle="Minhas rotas"
//     // positionItens="center"
//     // icon={IconRoute}
// />

// OBS: no positionItens coloque start caso houver um icon, senão não há necessidade de chamar esse atributo