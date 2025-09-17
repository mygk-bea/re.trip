import React from "react";
import Menu from "../../../components/Menu";
import Geolocation from "../../../components/Geolocation";

import { categories, regionCities, localPlaces, sharedRoutes } from '../../../constants/infos'

import Card from "../../../components/Card";
import Carousel from './Carousel';
import { useMediaQuery, useTheme } from "@mui/material";

interface HomeProps {
    call: string;
    username: string;
}

const Home: React.FC<HomeProps> = ({ call, username }) => {
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    // Map categorias
    const categoryItems = categories.map((cat) => (
        <div key={cat.id} className="overflow-hidden flex flex-col items-center">
            <img src={cat.image} alt={cat.title} className="w-30 h-25 lg:w-[15vw] lg:h-[15vh] rounded-3xl object-cover" />
            <p className="text-center mt-2 text-[13px] lg:text-[16px]" style={{ fontFamily: "'Rubrik', sans-serif" }}>
                {cat.title}
            </p>
        </div>
    ));

    // Map locais
    const localPlaceItems = localPlaces.map((place) => (
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

    // Map cidades
    const regionCityItems = regionCities.map((city) => (
        <Card
            key={city.id}
            className="h-[100px] w-[150px] lg:w-[13vw] lg:h-[13vh]"
            nameBackground={city.image}
            title={city.title}
            isOpacity
            positionText="center"
        />
    ));

    // Map rotas
    const sharedRouteItems = sharedRoutes.map((route) => (
        <Card
            key={route.id}
            className="h-[100px] w-[150px] lg:w-[13vw] lg:h-[13vh]"
            nameBackground={route.image}
            title={route.title}
            isOpacity
            isRating
            numberRating={route.rating}
            positionText="center"
        />
    ));

    return (
        <div className="relative pt-20 pb-25 w-full ">
            <div className="-mt-15 mb-5 mx-auto w-60 lg:w-[100%]">
                <Geolocation
                    cities={[
                        { city: "Tatuí", uf: "SP" },
                        { city: "Boituva", uf: "SP" },
                        { city: "Bofete", uf: "SP" },
                        { city: "Laranjal Paulista", uf: "SP" },
                    ]}
                />
            </div>

            <div className="font-bold text-[32px] text-left mx-10 mb-6">
                <span>Olá, {call} </span>
                <br />
                <span className="text-[#FF7022]">{username}</span>!
            </div>

            {/* Categorias */}
            <Carousel items={categoryItems} visibleCount={3} autoplay autoplayInterval={4000} />

            {/* Locais */}
            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-9 mt-3 mb-2">
                    <span>Locais para</span>
                    <span className="text-[#FF7022]"> Explorar</span> perto de você:
                </div>
                <Carousel items={localPlaceItems} visibleCount={isLg ? 3 : 2} />
            </div>

            {/* Cidades */}
            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-9 mt-3 mb-2">
                    <span>Cidades da</span>
                    <span className="text-[#FF7022]"> Região</span>:
                </div>
                <Carousel items={regionCityItems} visibleCount={isLg ? 3 : 2} />
            </div>

            {/* Rotas */}
            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-9 mt-3 mb-2">
                    <span>Rotas</span>
                    <span className="text-[#FF7022]"> Compartilhadas</span>:
                </div>
                <Carousel items={sharedRouteItems} visibleCount={isLg ? 3 : 2} />
            </div>

            <div className="mt-6">
                <Menu />
            </div>
        </div>
    );
};

export default Home;
