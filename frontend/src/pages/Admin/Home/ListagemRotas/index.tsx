import React from "react";
import Menu from "../../../../components/Menu";
import IconArrowChevron from "../../../../assets/icons/icon-arrow-chevron";
import { useNavigate } from "react-router-dom";
import { sharedRoutes } from "../../../../constants/infos";
import Card from "../../../../components/Card/index";

const ListagemRotas: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-full p-6 flex items-center">
                <div className="cursor-pointer" onClick={() => navigate(-1)}>
                    <IconArrowChevron class="w-10 h-10 stroke-[#229CFF] transform rotate-90" />
                </div>

                <div className="flex-1 flex justify-center">
                    <div className={`text-[#229CFF] font-bold text-[32px]`} style={{ fontFamily: "'Madimi One', sans-serif" }}>
                        Rotas com Meus Locais
                    </div>
                </div>

                <div className="w-6"></div>
            </div>

            <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
                {sharedRoutes.map((route) => (
                    <Card
                        key={route.id}
                        nameBackground={route.image}
                        title={route.title}
                        isOpacity
                        positionText="center"
                        isRating
                        numberRating={4.1}
                        widthText="70px"
                        className="w-[80vw] h-[15vh] lg:w-[40vw] lg:h-[20vh] mb-4 -mt-50"
                    />
                ))}
            </div>

            <div>
                <Menu isAdmin />
            </div>

        </div>

    );
};

export default ListagemRotas;
