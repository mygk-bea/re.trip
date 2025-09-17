import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import Geolocation from "../../components/Geolocation";
import IconArrowChevron from "../../assets/icons/icon-arrow-chevron";

import {categories, regionCities, localPlaces, sharedRoutes} from '../../constants/infos'

import Card from "../../components/Card";
import { Box, Button } from "@mui/material";

interface HomeProps {
    call: string;
    username: string;
}

// --- Carousel ---
interface CarouselProps {
    items: React.ReactNode[];
    visibleCount?: number;
    autoplay?: boolean;
    autoplayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
    items,
    visibleCount = 1,
    autoplay = false,
    autoplayInterval = 3000,
}) => {
    const [startIndex, setStartIndex] = useState(0);
    const total = items.length;

    const next = () => setStartIndex((prev) => (prev + visibleCount) % total);
    const prev = () => setStartIndex((prev) => (prev - visibleCount + total) % total);

    useEffect(() => {
        if (!autoplay) return;
        const interval = setInterval(next, autoplayInterval);
        return () => clearInterval(interval);
    }, [startIndex, autoplay, autoplayInterval]);

    const visibleItems = [];
    for (let i = 0; i < visibleCount; i++) {
        const index = startIndex + i;
        if (index < total) {
            visibleItems.push(items[index]);
        }
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
            {total > visibleCount && (
                <Button onClick={prev} sx={{ minWidth: '30px', height: '30px', zIndex: 1 }}>
                    <IconArrowChevron class="w-5 h-5 stroke-[#333] transform rotate-90" />
                </Button>
            )}
            <Box sx={{ display: 'flex', gap: 1, overflow: 'hidden', flexGrow: 1, justifyContent: 'center' }}>
                {visibleItems.map((item, idx) => (
                    <Box key={idx} sx={{ flexShrink: 0 }}>
                        {item}
                    </Box>
                ))}
            </Box>
            {total > visibleCount && (
                <Button onClick={next} sx={{ minWidth: '30px', height: '30px', zIndex: 1 }}>
                    <IconArrowChevron class="w-5 h-5 stroke-[#333] transform -rotate-90" />
                </Button>
            )}
        </Box>
    );
};

const Home: React.FC<HomeProps> = ({ call, username }) => {
    // Map categorias
    const categoryItems = categories.map((cat) => (
        <div key={cat.id} className="overflow-hidden flex flex-col items-center">
            <img src={cat.image} alt={cat.title} className="w-30 h-25 rounded-3xl object-cover" />
            <p className="text-center mt-2 text-[13px]" style={{ fontFamily: "'Rubrik', sans-serif" }}>
                {cat.title}
            </p>
        </div>
    ));

    // Map locais
    const localPlaceItems = localPlaces.map((place) => (
        <Card
            key={place.id}
            height="100px"
            width="150px"
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
            height="100px"
            width="150px"
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
            height="100px"
            width="150px"
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
            <Carousel items={categoryItems} visibleCount={2} autoplay autoplayInterval={4000} />

            {/* Locais */}
            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-9 mt-3 mb-2">
                    <span>Locais para</span>
                    <span className="text-[#FF7022]"> Explorar</span> perto de você:
                </div>
                <Carousel items={localPlaceItems} visibleCount={2} />
            </div>

            {/* Cidades */}
            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-9 mt-3 mb-2">
                    <span>Cidades da</span>
                    <span className="text-[#FF7022]"> Região</span>:
                </div>
                <Carousel items={regionCityItems} visibleCount={2} />
            </div>

            {/* Rotas */}
            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-9 mt-3 mb-2">
                    <span>Rotas</span>
                    <span className="text-[#FF7022]"> Compartilhadas</span>:
                </div>
                <Carousel items={sharedRouteItems} visibleCount={2} />
            </div>

            <div className="mt-6">
                <Menu />
            </div>
        </div>
    );
};

export default Home;
