import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    icon?: React.ComponentType<any>;
    positionItems?: string;
    colorIcon?: string;
    colorText?: string;
    backgroundColor?: string;
    colorShadow?: string;
    height: string;
    width: string;
    isAdm: boolean;
    title: string;
    svgClass?: string; //para a manipulação dos svg caso necessário
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: string | number;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({fontSize, fontWeight, fontFamily, svgClass, colorText, colorShadow, icon: IconComponent, isAdm, positionItems, colorIcon, backgroundColor, height, width, title, onClick }) => {
    const buttonStyle = {
        '--color-icon': colorIcon,
        '--color-text': colorText,
        '--bg-color': backgroundColor,
        '--height': height,
        '--width': width,
        '--position-text': positionItems,
        '--color-shadow': colorShadow,
        '--font-size': fontSize,
        '--font-weight': fontWeight, 
        '--font-family': fontFamily
    } as React.CSSProperties;
    
    return (
        <>
        <button style={buttonStyle} className={isAdm ? `${styles.button} ${styles.button__adm}` : `${styles.button} ${styles.button__user_comum}`} onClick={onClick}>
        {IconComponent ? (
            <div className={styles.button__icon}> 
                <IconComponent class={svgClass}/>
            </div>
        ) : null}
            <div className={styles.button__title}>{title}</div>
        </button>
        </>
    )
};

export default Button;

// exemplo de chamada:
//     <Button
//     // colorIcon="#229CFF"
//     colorText="#FFFFFF"
//     backgroundColor='#229CFF'
//     colorShadow='#0073D2'
//     height="40px"
//     width="400px"
//     isAdm={true}
//     title="Minhas rotas"
//     // positionItems="center"
//     // icon={IconRoute}
// />

// OBS: no positionItens coloque start caso houver um icon, senão não há necessidade de chamar esse atributo