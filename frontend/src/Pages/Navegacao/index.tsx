import React, { useState } from "react";
import Menu from "../../components/Menu";
import Geolocation from "../../components/Geolocation";
import IconArrowChevron from "../../assets/icons/icon-arrow-chevron";

import imgAdventure from "../../assets/images/category/img_bg_adventure.png";
import imgGastronomy from "../../assets/images/category/img_bg_gastronomy.png";
import imgNature from "../../assets/images/category/img_bg_nature.png";
import imgHotel from "../../assets/images/category/img_bg_hotel.png";

import imagemMuseu from "../../assets/images/category/img_bg_adventure.png";
import Card from "../../components/Card";
import { Box, Button } from "@mui/material";

// npm install @mui/material @emotion/react @emotion/styled

interface NavegacaoProps {
    call: string;
    username: string;
}

// --- Arrays de cards ---
const cardsArray1 = [
    <Card
        height="100px"
        width="150px"
        nameBackground={imagemMuseu}
        title="Sítio Museu"
        isOpacity
        positionText="center"
        widthText="70px"
    />,
    <Card
        height="100px"
        width="150px"
        nameBackground={imagemMuseu}
        title="Museu Histórico"
        isOpacity
        positionText="center"
        widthText="70px"
    />,
];

const cardsArray2 = [
    <Card
        height="100px"
        width="150px"
        nameBackground={imagemMuseu}
        title="Sítio - Museu"
        isOpacity
        isRating
        numberRating={4.1}
        positionText="center"
    />,
    <Card
        height="100px"
        width="150px"
        nameBackground={imagemMuseu}
        title="Outro Museu"
        isOpacity
        isRating
        numberRating={3.8}
        positionText="center"
    />,
];

// --- Carousel de imagens ---
interface ImageItem {
    src: string;
    name: string;
}

const images: ImageItem[] = [
    { src: imgGastronomy, name: "Gastronomia" },
    { src: imgNature, name: "Natureza e Ecoturismo" },
    { src: imgHotel, name: "Hospedagem" },
    { src: imgAdventure, name: "Aventura e Diversão" },
];

interface CarouselProps {
    items: React.ReactNode[];
    visibleCount?: number;
    widthContainer?: string;
}

const Carousel: React.FC<CarouselProps> = ({
    items,
    visibleCount = 1,
}) => {
    const [startIndex, setStartIndex] = useState(0);
    const total = items.length;

    const next = () => setStartIndex((prev) => (prev + visibleCount) % total);
    const prev = () =>
        setStartIndex((prev) => (prev - visibleCount + total) % total);

    const visibleItems = [];
    for (let i = 0; i < visibleCount; i++) {
        visibleItems.push(items[(startIndex + i) % total]);
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

const Navegacao: React.FC<NavegacaoProps> = ({ call, username }) => {
    return (
        <div className="relative pt-20 pb-25 w-full ">
            <div className="-mt-12 mb-5 mx-auto w-60 lg:w-[70%]">
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

            {/* Carousel de imagens */}
            <Carousel
                items={images.map((img, idx) => (
                    <div
                        key={idx}
                        className=" overflow-hidden flex flex-col items-center"
                    >
                        <img
                            src={img.src}
                            alt={img.name}
                            className="w-30 h-25 rounded-3xl object-cover"
                        />
                        <p
                            className="text-center mt-2 text-[13px]"
                            style={{ fontFamily: "'Rubrik', sans-serif" }}
                        >
                            {img.name}
                        </p>
                    </div>
                ))}
                visibleCount={3}
                widthContainer="80%"
            />

            {/* Carousel de cards */}
            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-9 mt-3 mb-2">
                    <span>Locais para</span>
                    <span className="text-[#FF7022]"> Explorar</span> perto de você:
                </div>
                <Carousel items={cardsArray1} visibleCount={2} widthContainer="80%" />
            </div>

            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-9 mt-3 mb-2">
                    <span>Cidades da</span>
                    <span className="text-[#FF7022]"> Região</span>:
                </div>
                <Carousel items={cardsArray2} visibleCount={2} widthContainer="80%" />
            </div>

            <div className="mt-6">
                <Menu />
            </div>
        </div>
    );
};

export default Navegacao;
