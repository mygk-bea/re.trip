import React, { useState } from "react";
import styles from './Tag.module.scss';

interface TagProps {
    key?: string;
    text: string;
    bgColor?: string;       // Cor de fundo
    textColor?: string;     // Cor do texto
    borderColor?: string;   // Cor da borda
    dismissible?: boolean;  // Se pode ser removido
    onDismiss?: () => void; // Callback ao remover
    onClick?: (selected: boolean) => void; // Callback ao selecionar
    initiallySelected?: boolean; // Estado inicial
    showDismiss?: boolean; // Se deve exibir o botão de dismiss (ex: em outra página)
}

// Converte HEX para HSL
const hexToHSL = (H: string) => {
    let r = 0, g = 0, b = 0;
    if (H.length === 4) {
        r = parseInt(H[1] + H[1], 16);
        g = parseInt(H[2] + H[2], 16);
        b = parseInt(H[3] + H[3], 16);
    } else if (H.length === 7) {
        r = parseInt(H[1] + H[2], 16);
        g = parseInt(H[3] + H[4], 16);
        b = parseInt(H[5] + H[6], 16);
    }

    r /= 255;
    g /= 255;
    b /= 255;

    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;

    let h = 0, s = 0, l = 0;

    l = (cmax + cmin) / 2;

    if (delta === 0) h = 0;
    else if (cmax === r) h = ((g - b) / delta) % 6;
    else if (cmax === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);
    if (h < 0) h += 360;

    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return { h, s, l };
};

// Converte HSL para HEX
const HSLToHex = (h: number, s: number, l: number) => {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c/2;
    let r = 0, g = 0, b = 0;

    if (0 <= h && h < 60) { r = c; g = x; b = 0; }
    else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
    else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
    else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
    else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
    else { r = c; g = 0; b = x; }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return "#" + ((1 << 24) + (r <<16) + (g <<8) + b).toString(16).slice(1);
};

// Escurece HEX dinamicamente
const darkenHex = (hex: string, amount: number = 20) => {
    const hsl = hexToHSL(hex);
    hsl.l = Math.max(0, hsl.l - amount); // diminui a luminosidade
    return HSLToHex(hsl.h, hsl.s, hsl.l);
};

const Tag: React.FC<TagProps> = ({
    text,
    bgColor = "#F59E0B", // cor laranja padrão
    textColor = "#fff",
    borderColor = "#D97706",
    dismissible = false,
    onDismiss,
    onClick,
    initiallySelected = false,
    showDismiss = false
}) => {
    const [visible, setVisible] = useState(true);
    const [selected, setSelected] = useState(initiallySelected);

    const handleDismiss = (e: React.MouseEvent) => {
        e.stopPropagation();
        setVisible(false);
        if (onDismiss) onDismiss();
    };

    const handleClick = () => {
        setSelected(!selected);
        if (onClick) onClick(!selected);
    };

    if (!visible) return null;

    return (
        <span
            onClick={handleClick}
            className={`inline-flex items-center px-4 py-1 rounded-full text-lg border cursor-pointer transition`}
            style={{
                backgroundColor: selected ? darkenHex(bgColor, 20) : bgColor,
                color: textColor,
                borderColor: borderColor
            }}
        >
            {text}
            {(dismissible && showDismiss ) && (
                <button
                    type="button"
                    onClick={handleDismiss}
                    className={`${styles.button__remove} rounded-full flex ml-2 cursor-pointer`}
                >
                    <svg
                        className="w-2.5 h-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                        />
                    </svg>
                </button>
            )}
        </span>
    );
};

export default Tag;
