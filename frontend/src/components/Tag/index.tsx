import React, { useState } from "react";

interface TagProps {
    text: string;
    bgColor?: string;      // Cor de fundo
    textColor?: string;    // Cor do texto
    borderColor?: string;  // Cor da borda
    dismissible?: boolean; // Se pode ser removido
    onDismiss?: () => void; // Callback ao remover
}

const Tag: React.FC<TagProps> = ({
    text,
    bgColor = "bg-orange-600",
    textColor = "text-white",
    borderColor = "border-orange-600",
    dismissible = false,
    onDismiss,
}) => {
    const [visible, setVisible] = useState(true);

    const handleDismiss = () => {
        setVisible(false);
        if (onDismiss) onDismiss();
    };

    const isTailwindClass =
        (bgColor.startsWith("bg-") || bgColor.startsWith("from-") || bgColor.startsWith("to-")) &&
        textColor.startsWith("text-") &&
        borderColor.startsWith("border-");

    if (!visible) return null;

    return (
        <span
            className={`inline-flex items-center px-4 py-1 rounded-full text-lg border ${isTailwindClass ? `${bgColor} ${textColor} ${borderColor}` : ""
                }`}
            style={
                !isTailwindClass
                    ? { backgroundColor: bgColor, color: textColor, borderColor: borderColor }
                    : {}
            }
        >
            {text}
            {dismissible && (
                <button
                    type="button"
                    onClick={handleDismiss}
                    className="rounded-full flex"
                    style={!isTailwindClass ? { backgroundColor: bgColor, color: textColor } : {}}
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
