import React, { useEffect }  from "react";
import Menu from "../../../components/Menu";
import Geolocation from "../../../components/Geolocation";
import Card from "../../../components/Card";
import Carousel from './Carousel';
import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { events, localPlaces, kpis, sharedRoutes } from '../../../constants/infos';
import { rotaParques, rotaSitioMuseu } from "../../../constants/infosRoutes";
import { allPlaces } from "../../../constants/infosPlaces";
import { authService } from "../../../core/services/LoginService";

interface HomeGuiaProps {
    username: string;
}

const HomeGuia: React.FC<HomeGuiaProps> = ({ username }) => {
    const navigate = useNavigate();

    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    const verRota = (id: number) => {
        const route = id == 1 ? rotaSitioMuseu : rotaParques;
        if (route) {
            navigate("/guia/rota/info", {
                state: {
                    type: "guia",
                    route: route,
                },
            });
        }
    };

    // Map minhas rotas com Card
    const MyRoutesItems = sharedRoutes.map((route) => (
        <Card
            key={route.id}
            className="h-[100px] w-[150px] lg:w-[13vw] lg:h-[13vh]"
            nameBackground={route.image}
            title={route.title}
            isOpacity
            isRating
            numberRating={route.rating}
            positionText="center"
            onClick={() => verRota(route.id)}
        />
    ));

    // Map rotas compartilhadas com Card
    const SharedRoutesItems = sharedRoutes.map((route) => (
        <Card
            key={route.id}
            className="h-[100px] w-[150px] lg:w-[13vw] lg:h-[13vh]"
            nameBackground={route.image}
            title={route.title}
            isOpacity
            isRating
            numberRating={route.rating}
            positionText="center"
            onClick={() => verRota(route.id)}
        />
    ));

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
                navigate("/guia/local/info", {
                    state: {
                        place: place,
                        is: true,
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
    useEffect(() => {
        const userData = authService.getUserData();
        
        console.log("User Data:", userData);
        
        if (userData) {
            console.log("Dados do usuário:", {
                id: userData.id,
                name: userData.name,
                role: userData.role,
                token: userData.token
            });
        }
    }, []);
    

    return (
        <div className="relative pt-20 pb-25 w-full">
            {/* Geolocation */}
            <div className="-mt-15 mb-5 mx-auto w-60 lg:w-[100%]" style={{ fontFamily: "'Rubik', sans-serif" }}>
                <Geolocation
                    cities={[
                        { city: "Tatuí", uf: "SP" },
                        { city: "Boituva", uf: "SP" },
                        { city: "Bofete", uf: "SP" },
                        { city: "Laranjal Paulista", uf: "SP" },
                    ]}
                    guia
                />
            </div>

            {/* Saudação */}
            <div className="font-bold text-[32px] text-left mx-10 mb-6">
                Olá, guia<br/><span className="text-[#14c414]"> {username}</span>!
            </div>

            {/* Locais */}
            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-9 mt-3 mb-2">
                    <span>Suas</span>
                    <span className="text-[#14c414]"> Rotas</span>:
                </div>
                <Carousel items={MyRoutesItems} visibleCount={isLg ? 3 : 2} />
            </div>

            {/* Locais */}
            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-9 mt-3 mb-2">
                    <span>Outras Rotas</span>
                    <span className="text-[#14c414]"> Compartilhadas</span>:
                </div>
                <Carousel items={SharedRoutesItems} visibleCount={isLg ? 3 : 2} />
            </div>

            {/* Locais */}
            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-9 mt-3 mb-2">
                    <span>Locais que pode haver</span>
                    <span className="text-[#14c414]"> Interesse</span>:
                </div>
                <Carousel items={localPlaceItems} visibleCount={isLg ? 3 : 2} />
            </div>

            {/* Eventos */}
            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-9 mt-3 mb-2">
                    <span>Eventos da</span>
                    <span className="text-[#14c414]"> Região</span>:
                </div>
                <Carousel items={eventItems} visibleCount={isLg ? 3 : 2} />
                {/* <p
                    className="underline text-right mr-9 mt-3 text-[#14c414] cursor-pointer"
                    onClick={() => navigate("//cad-evento")}
                >
                    Cadastrar Evento
                </p> */}
            </div>

            {/* Menu */}
            <div className="mt-6">
                <Menu isGuia />
            </div>
        </div>
    );
};

export default HomeGuia;
