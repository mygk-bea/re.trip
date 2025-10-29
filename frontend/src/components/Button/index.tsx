import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    icon?: React.ComponentType<any>;
    positionItems?: string;
    colorIcon?: string;
    colorText?: string;
    backgroundColor?: string;
    colorShadow?: string;
    outlineColor?: string;
    height: string;
    width: string;
    isAdm: boolean;
    title: string;
    svgClass?: string; // para manipulação de SVGs, se necessário
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: string | number;
    buttonType?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    buttonType = 'button',
    fontSize,
    fontWeight,
    fontFamily,
    svgClass,
    colorText,
    colorShadow,
    outlineColor,
    icon: IconComponent,
    isAdm,
    positionItems,
    colorIcon,
    backgroundColor,
    height,
    width,
    title,
    onClick,
}) => {
    const buttonStyle = {
        '--color-icon': colorIcon,
        '--color-text': colorText,
        '--bg-color': backgroundColor,
        '--height': height,
        '--width': width,
        '--position-text': positionItems,
        '--color-shadow': colorShadow,
        '--outline-color': outlineColor,
        '--font-size': fontSize,
        '--font-weight': fontWeight,
        '--font-family': fontFamily,
    } as React.CSSProperties;

    return (
        <button
            type={buttonType}
            style={buttonStyle}
            className={
                isAdm
                    ? `${styles.button} ${styles.button__adm}`
                    : `${styles.button} ${styles.button__user_comum}`
            }
            onClick={onClick}
        >
            {IconComponent ? (
                <div className={styles.button__icon}>
                    <IconComponent className={svgClass} />
                </div>
            ) : null}
            <div className={styles.button__title}>{title}</div>
        </button>
    );
};

export default Button;