import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import Geolocation from "../../components/Geolocation";
import IconArrowChevron from "../../assets/icons/icon-arrow-chevron";

import imgAdventure from '../../assets/images/category/img_bg_adventure.png';
import imgGastronomy from '../../assets/images/category/img_bg_gastronomy.png';
import imgNature from '../../assets/images/category/img_bg_nature.png';
import imgHotel from '../../assets/images/category/img_bg_hotel.png';

import imagemMuseu from "../../assets/images/category/img_bg_adventure.png"; // substitua pelo seu caminho real
import Card from "../../components/Card";

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

const cardsArray2 = [
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

interface SimpleCarouselProps {
    items: React.ReactNode[];
    visibleCount?: number;
    widthContainer?: string;
    autoPlay?: boolean; // nova prop
}

const SimpleCarousel: React.FC<SimpleCarouselProps> = ({
    items,
    visibleCount = 3,
    widthContainer = "95%",
    autoPlay = false, // padrão false
}) => {
    const [startIndex, setStartIndex] = useState(0);
    const total = items.length;

    // autoplay só se autoPlay for true
    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % total);
        }, 3000);

        return () => clearInterval(interval);
    }, [total, autoPlay]);

    const next = () => setStartIndex((prev) => (prev + 1) % total);
    const prev = () => setStartIndex((prev) => (prev - 1 + total) % total);

    const visibleItems = [];
    for (let i = 0; i < visibleCount; i++) {
        visibleItems.push(items[(startIndex + i) % total]);
    }

    return (
        <div className={`mx-auto mt-6`} style={{ width: widthContainer }}>
            <div className="relative flex items-center w-full mx-auto">
                <button
                    onClick={prev}
                    className="bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100"
                    aria-label="Anterior"
                >
                    <IconArrowChevron class="w-5 h-5 stroke-[#333] transform rotate-90" />
                </button>

                <div className="flex flex-grow gap-4 mx-4 overflow-hidden">
                    {visibleItems.map((item, idx) => (
                        <div key={idx} className={`flex-shrink-0`} style={{ width: `${100 / visibleCount}%` }}>
                            {item}
                        </div>
                    ))}
                </div>

                <button
                    onClick={next}
                    className="bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100"
                    aria-label="Próximo"
                >
                    <IconArrowChevron class="w-5 h-5 stroke-[#333] transform -rotate-90" />
                </button>
            </div>
        </div>
    );
};

const Navegacao: React.FC<NavegacaoProps> = ({ call, username }) => {
    return (
        <div className="relative pt-20 pb-25">
            <div className="-mt-12 mb-10 mx-auto w-70 lg:w-[70%]">
                <Geolocation
                    cities={[
                        { city: "Tatuí", uf: "SP" },
                        { city: "Boituva", uf: "SP" },
                        { city: "Bofete", uf: "SP" },
                        { city: "Laranjal Paulista", uf: "SP" },
                    ]}
                />
            </div>

            <div className="font-bold text-[32px] text-left mx-10">
                <span>Olá, {call} </span>
                <br />
                <span className="text-[#FF7022]">{username}</span>!
            </div>

            {/* Carousel de imagens */}
            <div>
                <SimpleCarousel
                    items={images.map((img, idx) => (
                        <div key={idx} className="rounded-3xl overflow-hidden">
                            <img
                                src={img.src}
                                alt={img.name}
                                className="w-70 h-20 object-cover"
                            />
                            <p className="text-center mt-2 text-[13px]" style={{ fontFamily: "'Rubrik', sans-serif" }}>
                                {img.name}
                            </p>
                        </div>
                    ))}
                    visibleCount={3}
                    widthContainer="90%"
                    autoPlay={true}
                />
            </div>

            {/* Carousel de cards - dois por vez */}
            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-10 mt-3 -mb-4">
                    <span>Locais para</span>
                    <span className="text-[#FF7022]"> Explorar</span> perto de você:
                </div>
                <SimpleCarousel items={cardsArray1} visibleCount={2} widthContainer="80%" />
            </div>

            <div className="mt-6">
                <div className="font-bold text-[20px] text-left mx-10 mt-3 -mb-4">
                    <span>Cidades da</span>
                    <span className="text-[#FF7022]"> Região</span>:
                </div>
                <SimpleCarousel items={cardsArray2} visibleCount={2} widthContainer="80%" />
            </div>

            <div className="mt-6">
                <Menu />
            </div>
        </div>
    );
};

export default Navegacao;
