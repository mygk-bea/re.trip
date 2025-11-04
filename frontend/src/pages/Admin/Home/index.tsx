import React  from "react";
import Menu from "../../../components/Menu";
import Geolocation from "../../../components/Geolocation";
import Card from "../../../components/Card";
import Carousel from './Carousel';
import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { events, kpis, sharedRoutes } from '../../../constants/infos';
import { rotaParques, rotaSitioMuseu } from "../../../constants/infosRoutes";
import { allPlaces } from "../../../constants/infosPlaces";
// import { authService } from "../../../core/services/LoginService";

interface HomeAdminProps {
    username: string;
}

const HomeAdmin: React.FC<HomeAdminProps> = ({ username }) => {
    const navigate = useNavigate();

    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    const verRota = (id: number) => {
        const route = id == 1 ? rotaSitioMuseu : rotaParques;
        if (route) {
            navigate("/admin/rota/info", {
                state: {
                    type: "admin",
                    route: route,
                },
            });
        }
    };

    // Map locais com Card
    const localPlaceItems = allPlaces.map(place => (
        <Card
            key={place.id}
            className="h-[100px] w-[150px] lg:w-[13vw] lg:h-[13vh] cursor-pointer"
            nameBackground={place.images[0]}
            title={place.name}
            isOpacity
            positionText="center"
            widthText="70px"
            onClick={() => {
                navigate("/admin/local/info", {
                    state: {
                        place: place,
                        isAdmin: true,
                    },
                });
            }}
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

     // Dados do usuário
    // useEffect(() => {
    //     const userData = authService.getUserData();
        
    //     console.log("User Data:", userData);
        
    //     if (userData) {
    //         console.log("Dados do usuário:", {
    //             id: userData.id,
    //             name: userData.name,
    //             role: userData.role,
    //             token: userData.token
    //         });
    //     }
    // }, []);
    

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
                            <span className="text-2xl lg:text-3xl font-bold">{kpi.quantidade.toLocaleString("pt-BR")}</span>

                            <span className="text-sm lg:text-base mt-1">Visitas nas últimas horas em</span>

                            <span className="text-lg lg:text-xl font-semibold mt-2">{kpi.nome}</span>
                        </div>
                    ))}
                    visibleCount={isLg ? 3 : 2}
                    autoplay autoplayInterval={4000}
                />
            </div>

            <div>
                <div className="font-bold text-[20px] text-left mx-9 mt-8 mb-2">
                    <span>Rota <span className="text-[#229CFF]">Mais Acessada</span> com Meu</span>
                    <span className="text-[#229CFF]"> Local</span>:
                </div>
                {sharedRoutes.length > 0 && (
                    <Card
                        key={sharedRoutes[0].id}
                        nameBackground={sharedRoutes[0].image}
                        title={sharedRoutes[0].title}
                        isOpacity
                        isRating
                        fontSize="30px"
                        numberRating={sharedRoutes[0].rating}
                        positionText="center"
                        className="ml-10 w-[80vw] h-[15vh] lg:w-[40vw] lg:h-[20vh] cursor-pointer"
                        onClick={() => verRota(sharedRoutes[0].id)}
                    />
                )}
                <div>
                    <p
                        className="underline text-right mr-9 mt-3 text-[#229CFF] cursor-pointer"
                        onClick={() => navigate("/admin/home/listagem")}
                    >
                        Ver todas as Rotas com Meus Locais
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
                        onClick={() => navigate("/admin/cad-local")}
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
                    onClick={() => navigate("/admin/cad-evento")}
                >
                    Cadastrar Evento
                </p>
            </div>

            {/* Menu */}
            <div className="mt-6">
                <Menu isAdmin/>
            </div>
        </div>
    );
};

export default HomeAdmin;
