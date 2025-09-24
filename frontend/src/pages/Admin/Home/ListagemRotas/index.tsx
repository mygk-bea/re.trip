import React from "react";
import Menu from "../../../../components/Menu";
import IconArrowChevron from "../../../../assets/icons/icon-arrow-chevron";
import { useNavigate } from "react-router-dom";
import Card from "../../../../components/Card";
import { sharedRoutes } from "../../../../constants/infos";

const ListagemRotas: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full px-4 sm:px-6 py-6">
      {/* Header com divs separadas */}
      <div className="relative w-full mb-6 flex items-center justify-center">
        {/* Div do ícone */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -mt-5 lg:-mt-8 ">
          <div
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IconArrowChevron class="w-10 h-10 stroke-[#229CFF] transform rotate-90" />
          </div>
        </div>

        {/* Div do título */}
        <div className="text-center mt-15" >
          <h1
            className="text-[#229CFF] font-bold text-[28px] sm:text-[32px] "
            style={{ fontFamily: "'Madimi One', sans-serif" }}
          >
            Rotas com Meus Locais
          </h1>
        </div>
      </div>

      {/* Cards em coluna, centralizados e responsivos */}
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
        {sharedRoutes.map((rota) => (
          <Card
            key={rota.id}
            nameBackground={rota.image}
            title={rota.title}
            isOpacity
            positionText="center"
            widthText="70px"
            isRating
            numberRating={4.1}
            className="w-[80vw] h-[15vh] lg:w-[40vw] lg:h-[20vh]"
          />
        ))}
      </div>

      {/* Menu */}
      <Menu isAdmin />
    </div>
  );
};

export default ListagemRotas;
