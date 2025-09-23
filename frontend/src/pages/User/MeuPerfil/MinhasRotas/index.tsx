import React from "react";
import Menu from "../../../../components/Menu";
import IconArrowChevron from "../../../../assets/icons/icon-arrow-chevron";
import { useNavigate } from "react-router-dom";


const MinhasRotas: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-full p-6 flex items-center">
                <div className="cursor-pointer" onClick={() => navigate(-1)}>
                    <IconArrowChevron class="w-10 h-10 stroke-[var(--color-primary-user)] transform rotate-90" />
                </div>

                <div className="flex-1 flex justify-center">
                    <div className={`text-[var(--color-primary-user)] font-bold text-[32px]`} style={{ fontFamily: "'Madimi One', sans-serif" }}>
                        Minhas Rotas
                    </div>
                </div>

                <div className="w-6"></div>
            </div>

            <div>
                <Menu />
            </div>

        </div>

    );
};

export default MinhasRotas;
