import React from "react";
import Menu from "../../../components/Menu";
import Geolocation from "../../../components/Geolocation";
import Card from "../../../components/Card";
import Carousel from './Carousel';
import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { events, localPlaces, kpis, sharedRoutes } from '../../../constants/infos';

interface HomeAdminProps {
    username: string;
}

const HomeAdmin: React.FC<HomeAdminProps> = ({ username }) => {
    const navigate = useNavigate();

    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    // Map locais com Card
    const localPlaceItems = localPlaces.map(place => (
        <Card
            key={place.id}
            className="h-[100px] w-[150px] lg:w-[13vw] lg:h-[13vh]"
            nameBackground={place.image}
            title={place.title}
            isOpacity
            positionText="center"
            widthText="70px"
        />
    ));

    // Map eventos com Card
    const eventItems = events.map(event => (
        <Card
            key={event.id}
            className="h-[100px] w-[150px] lg:w-[13vw] lg:h-[13vh]"
            nameBackground={event.image}
            title={event.title}
            isOpacity
            positionText="center"
        />
    ));

    return (
        <div className="relative pt-20 pb-25 w-full">
            {/* Geolocation */}
            <div className="-mt-15 mb-5 mx-auto w-60 lg:w-[100%]">
                <Geolocation
                    cities={[
                        { city: "Tatuí", uf: "SP" },
                        { city: "Boituva", uf: "SP" },
                        { city: "Bofete", uf: "SP" },
                        { city: "Laranjal Paulista", uf: "SP" },
                    ]}
                    admin={true}
                />
            </div>

            {/* Saudação */}
            <div className="font-bold text-[32px] text-left mx-10 mb-6">
                Olá, Host<span className="text-[#229CFF]"> {username}</span>!
            </div>

            <div className="mt-6">
                <Carousel
                    items={kpis.map((kpi) => (
                        <div
                            key={kpi.id}
                            className="h-[120px] w-[200px] lg:w-[15vw] lg:h-[15vh] flex flex-col items-center justify-center text-center rounded-2xl p-4"
                            style={{
                                background: "linear-gradient(135deg, #229CFF 0%, #155D99 100%)",
                                color: "#fff",
                            }}
                        >
                            {/* Número em destaque */}
                            <span className="text-2xl lg:text-3xl font-bold">{kpi.quantidade.toLocaleString("pt-BR")}</span>

                            {/* Texto menor */}
                            <span className="text-sm lg:text-base mt-1">Visitas nas últimas horas em</span>

                            {/* Nome do local/evento em destaque */}
                            <span className="text-lg lg:text-xl font-semibold mt-2">{kpi.nome}</span>
                        </div>
                    ))}
                    visibleCount={isLg ? 3 : 2}
                    autoplay autoplayInterval={4000}
                />
            </div>

            <div>
                <div className="font-bold text-[20px] text-left mx-9 mt-5 mb-2">
                    <span>Rota com Meu</span>
                    <span className="text-[#229CFF]"> Local</span>:
                </div>
                {sharedRoutes.length > 0 && (
                    <Card
                        key={sharedRoutes[0].id}
                        nameBackground={sharedRoutes[0].image}
                        title={sharedRoutes[0].title}
                        isOpacity
                        isRating
                        numberRating={sharedRoutes[0].rating}
                        positionText="center"
                        className="ml-10 w-[80vw] h-[15vh] lg:w-[40vw] lg:h-[20vh]"
                    />
                )}
                <div>
                    <p
                        className="underline text-right mr-9 mt-3 text-[#229CFF] cursor-pointer"
                        onClick={() => navigate("/admin/home/listagem")}
                    >
                        Ver todas as Rotas
                    </p>
                </div>
            </div>

            {/* Locais */}
            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-9 mt-3 mb-2">
                    <span>Meus</span>
                    <span className="text-[#229CFF]"> Locais</span>:
                </div>
                <Carousel items={localPlaceItems} visibleCount={isLg ? 3 : 2} />
                <div>
                    <p
                        className="underline text-right mr-9 mt-3 text-[#229CFF] cursor-pointer"
                        onClick={() => navigate("/admin/cadLocal")}
                    >
                        Cadastrar Local
                    </p>
                </div>
            </div>

            {/* Eventos */}
            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-9 mt-3 mb-2">
                    <span>Meus</span>
                    <span className="text-[#229CFF]"> Eventos</span>:
                </div>
                <Carousel items={eventItems} visibleCount={isLg ? 3 : 2} />
                <p
                    className="underline text-right mr-9 mt-3 text-[#229CFF] cursor-pointer"
                    onClick={() => navigate("/admin/cadEvento")}
                >
                    Cadastrar Evento
                </p>
            </div>

            {/* Menu */}
            <div className="mt-6">
                <Menu />
            </div>
        </div>
    );
};

export default HomeAdmin;
