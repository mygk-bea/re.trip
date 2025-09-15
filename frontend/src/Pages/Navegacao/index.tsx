import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import Geolocation from "../../components/Geolocation";
import IconArrowChevron from "../../assets/icons/icon-arrow-chevron";

import imgAdventure from '../../assets/images/category/img_bg_adventure.png';
import imgGastronomy from '../../assets/images/category/img_bg_gastronomy.png';
import imgNature from '../../assets/images/category/img_bg_nature.png';
import imgHotel from '../../assets/images/category/img_bg_hotel.png';

interface NavegacaoProps {
    call: string;
    username: string;
}

const images = [
    { src: imgGastronomy, name: "Gastronomia" },
    { src: imgNature, name: "Natureza e Ecoturismo" },
    { src: imgHotel, name: "Hospedagem" },
    { src: imgAdventure, name: "Aventura e Diversão" },
];

const SimpleCarousel: React.FC = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 3;
    const total = images.length;

    // Autoplay: avança automaticamente a cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % total);
        }, 3000);
        return () => clearInterval(interval);
    }, [total]);

    function next() {
        setStartIndex((prev) => (prev + 1) % total);
    }

    function prev() {
        setStartIndex((prev) => (prev - 1 + total) % total);
    }

    const visibleImages = [];
    for (let i = 0; i < visibleCount; i++) {
        visibleImages.push(images[(startIndex + i) % total]);
    }

    return (
        <div className="w-full max-w-4xl mx-auto mt-6">
            <div className="relative flex items-center w-[95%] mx-auto">
                <button
                    onClick={prev}
                    className="bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100"
                    aria-label="Anterior"
                >
                    <IconArrowChevron class="w-5 h-5 stroke-[#333] transform rotate-90" />
                </button>

                <div className="flex flex-grow gap-4 mx-4 overflow-hidden">
                    {visibleImages.map((img, idx) => (
                        <div key={idx} className="flex-shrink-0 w-1/3">
                            <img
                                src={img.src}
                                alt={img.name}
                                className="w-full lg:w-50 lg:h-40 h-25 rounded object-cover"
                            />
                            <p
                                className="text-center mt-2 text-[16px]"
                                style={{ fontFamily: "'Rubrik', sans-serif" }}
                            >
                                {img.name}
                            </p>
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

            <div>
                <SimpleCarousel />
            </div>


            <div>
                <div className="font-bold text-[20px] text-left mx-10 mt-3 -mb-4">
                    <span>Locais para</span>
                    <span className="text-[#FF7022]"> Explorar</span> perto de você:
                </div>
                <SimpleCarousel />
            </div>


            <div>
                <div className="font-bold text-[20px] text-left mx-10 mt-3 -mb-4">
                    <span>Cidades da</span>
                    <span className="text-[#FF7022]"> Região</span>:
                </div>
                <SimpleCarousel />
            </div>

            <div>
                <div className="font-bold text-[20px] text-left mx-10 mt-3 -mb-4">
                    <span>Rotas</span>
                    <span className="text-[#FF7022]"> Compartilhadas</span>:
                </div>
                <SimpleCarousel />
            </div>

            <div>
                <Menu />
            </div>
        </div>
    );
};

export default Navegacao;
