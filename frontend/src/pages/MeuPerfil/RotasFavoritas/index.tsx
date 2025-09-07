import React from "react";
import Menu from "../../../components/Menu";

const RotasFavoritas: React.FC = () => {
    return (
        <>
            <div>
                <div className="flex flex-col items-center">
                    <div className="text-[#FF7022] text-center font-bold text-[32px] mb-6 fixed top-0 p-8">
                        Rotas Favoritas
                    </div>

                </div>

            </div>

            <div>
                <Menu />
            </div>

        </>

    );
};

export default RotasFavoritas;
