
import React from "react";
import Menu from "../../../../components/Menu";
import IconArrowChevron from "../../../../assets/icons/icon-arrow-chevron";
import { useNavigate } from "react-router-dom";
import { events } from "../../../../constants/infos";
import Card from "../../../../components/Card";


const MeusEventos: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-full p-6 flex items-center">
                <div className="cursor-pointer" onClick={() => navigate(-1)}>
                    <IconArrowChevron class="w-10 h-10 stroke-[#229CFF] transform rotate-90" />
                </div>

                <div className="flex-1 flex justify-center">
                    <div className={`text-[#229CFF] font-bold text-[32px] `} style={{ fontFamily: "'Madimi One', sans-serif" }}>
                        Meus Eventos
                    </div>
                </div> 

                <div className="w-6"></div>
            </div>

            <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
                {events.map((event) => (
                    <Card
                        key={event.id}
                        nameBackground={event.image}
                        title={event.title}
                        isOpacity
                        positionText="center"
                        fontSize="30px"
                        className="w-[80vw] h-[15vh] lg:w-[40vw] lg:h-[20vh] mb-4"
                    />
                ))}
            </div>

            <div>
                <Menu isAdmin />
            </div>

        </div>

    );
};

export default MeusEventos;