import imgBgMuseu1 from "../assets/images/places/img_bg_museu-paulo-setubal-1.png";
import imgBgSitioCarrocao from "../assets/images/places/img_bg_sitio-carrocao.png";
import imgBgParqueMariaTuca from "../assets/images/places/img_bg_parque-maria-tuca.png";

export const localPlaces = [
    { id: 1, title: "Sítio do Carroção", image: imgBgSitioCarrocao },
    { id: 2, title: "Parque Maria Tuca", image: imgBgParqueMariaTuca },
    { id: 3, title: "Museu Paulo Setúbal", image: imgBgMuseu1 },
];

import imgBoituva from "../assets/images/city/img_bg_boituva.png";
import imgTatui from "../assets/images/city/img_bg_tatui.png";
import imgLaranjal from "../assets/images/city/img_bg_laranjal-paulista.png";
import imgBofete from "../assets/images/city/img_bg_bofete.png";

export const regionCities = [
    { id: 1, title: "Boituva", image: imgBoituva },
    { id: 2, title: "Tatuí", image: imgTatui },
    { id: 3, title: "Bofete", image: imgBofete },
    { id: 4, title: "Laranjal Paulista", image: imgLaranjal },
];

import imgRota from '../assets/images/printscreen/img_bg_maps-rota-1.png';
import imgRota2 from '../assets/images/printscreen/img_bg_maps-rota-2.png';

export const sharedRoutes = [
    { id: 1, title: "Sítio - Museu", image: imgRota, rating: 4.1 },
    { id: 2, title: "Parques Tatuí", image: imgRota2, rating: 4.8 },
];

import imgGastronomy from "../assets/images/category/img_bg_gastronomy.png";
import imgNature from "../assets/images/category/img_bg_nature.png";
import imgHotel from "../assets/images/category/img_bg_hotel.png";
import imgAdventure from "../assets/images/category/img_bg_adventure.png";

export const categories = [
    { id: 1, title: "Gastronomia", image: imgGastronomy },
    { id: 2, title: "Natureza e Ecoturismo", image: imgNature },
    { id: 3, title: "Hospedagem", image: imgHotel },
    { id: 4, title: "Aventura e Diversão", image: imgAdventure },
];

import imgRodeio from "../assets/images/events/img_bg_rodeio.png";
import imgFestaJunina from "../assets/images/events/img_bg_festa_junina.png";
import imgFeiraDoDoce from "../assets/images/events/img_bg_feira_do_doce.jpg";

export const events = [
    { id: 1, title: "Feira do Doce", image: imgFeiraDoDoce },
    { id: 2, title: "Rodeio", image: imgRodeio },
    { id: 3, title: "Festa Junina", image: imgFestaJunina },
];

export const kpis = [
    { id: 1, nome: "Sítio do Carroção", quantidade: 1200, tipo: "local" },
    { id: 2, nome: "Museu Paulo Setúbal", quantidade: 800, tipo: "local" },
    { id: 3, nome: "Feira do Doce", quantidade: 500, tipo: "evento" },
    { id: 4, nome: "Festa Junina", quantidade: 300, tipo: "evento" },
];