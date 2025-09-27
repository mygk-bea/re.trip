import type { Place } from "../types/place";
import { TAG_COLORS } from "./tagColors";

export const sitioCarrocaoBase: Place = {
  id: "1",
  name: "Sítio do Carroção",
  favorited: true,
  verified: true,
  starRating: 4.8,
  tags: [
    { text: "Natureza e Ecoturismo", style: TAG_COLORS.atracoes.naturezaEcoturismo },
    { text: "Pet Friendly", style: TAG_COLORS.acessibilidadeInclusao.petFriendly },
    { text: "Aventura e Diversão", style: TAG_COLORS.atracoes.aventuraDiversao },
  ],
  description: "Acampamento de vivências únicas...",
  contactInfo: "(15) 3305-2000",
  address: "Rod. SP-129, Km 12,5 - Bairro dos Mirandas, Tatuí - SP, 18270-000",
  images: ["/images/places/img_bg_sitio-carrocao.png"],
  routes: [],
  events: [],
};

export const museuPauloSetubalBase: Place = {
  id: "2",
  name: "Museu Paulo Setúbal",
  favorited: false,
  verified: true,
  starRating: 4.5,
  tags: [
    { text: "Histórico", style: TAG_COLORS.atracoes.historico },
    { text: "Cultural", style: TAG_COLORS.atracoes.cultural },
  ],
  description: "Museu dedicado à preservação...",
  contactInfo: "(15) 3305-2000",
  address: "Praça Manoel Guedes, 98 - Centro, Tatuí - SP, 18270-300",
  images: [
    "/images/places/img_bg_museu-paulo-setubal-1.png",
    "/images/places/img_bg_museu-paulo-setubal-2.png",
  ],
  routes: [],
  events: [],
};
