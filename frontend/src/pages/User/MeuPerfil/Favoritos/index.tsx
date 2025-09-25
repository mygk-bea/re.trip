import React from "react";
import Menu from "../../../../components/Menu";
import IconArrowChevron from "../../../../assets/icons/icon-arrow-chevron";
import { useNavigate } from "react-router-dom";
import IconFilter from "../../../../assets/icons/icon-filter";


const Favoritos: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-full p-6 flex items-center">
                <div className="cursor-pointer" onClick={() => navigate(-1)}>
                    <IconArrowChevron class="w-10 h-10 stroke-[#FF7022] transform rotate-90" />
                </div>

                <div className="flex-1 flex justify-center">
                    <div className={`text-[#FF7022] font-bold text-[32px] `} style={{ fontFamily: "'Madimi One', sans-serif" }}>
                        Favoritos
                    </div>
                </div> 

                <div>
                    <IconFilter class="w-8 h-10 fill-[#FF7022] cursor-pointer" />
                </div>
            </div>


            <div>
                <Menu />
            </div>

        </div>

    );
};

export default Favoritos;
