import type { Place } from "../types/place";
import type { RouteInfo } from "../types/route";
import { TAG_COLORS } from "./tagColors";

// LOCAIS
export const sitioCarrocao: Place = {
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
  description: "Acampamento de vivências únicas, amizades e muita diversão. Acampamento de Férias do Sítio do Carroção - O Único Resort Pedagógico do Brasil.",
  contactInfo: "(15) 3305-2000",
  address: "Rod. SP-129, Km 12,5 - Bairro dos Mirandas, Tatuí - SP, 18270-000",
  images: ["/images/places/img_bg_sitio-carrocao.png"],
  routes: ["Trilha da Cachoeira", "Passeio a cavalo"],
  events: ["Festa Junina (Junho)", "Acampamento de Férias (Julho)"],
};

export const museuPauloSetubal: Place = {
  id: "2",
  name: "Museu Paulo Setúbal",
  favorited: false,
  verified: true,
  starRating: 4.5,
  tags: [
    { text: "Histórico", style: TAG_COLORS.atracoes.historico },
    { text: "Cultural", style: TAG_COLORS.atracoes.cultural },
  ],
  description: "Museu dedicado à preservação da história e cultura local.",
  contactInfo: "(15) 3305-2000",
  address: "Rod. SP-129, Km 12,5 - Bairro dos Mirandas, Tatuí - SP, 18270-000",
  images: [
    "/images/places/img_bg_museu-paulo-setubal-1.png", 
    "/images/places/img_bg_museu-paulo-setubal-2.png"
  ],
  routes: ["Trilha da Cachoeira", "Passeio a cavalo"],
  events: ["Festa Junina (Junho)", "Acampamento de Férias (Julho)"],
};

// ROTAS
export const rotaSitioMuseu: RouteInfo = {
  name: "Sítio - Museu",
  author: "Mey Bea",
  favorited: true,
  starRating: 5,
  comment: "Uma rota perfeita para aproveitar o Sítio do Carroção em todas as suas atividades.",
  routeLength: "10,7 km",
  locals: [sitioCarrocao, museuPauloSetubal],
  images: ["/images/printscreen/img_bg_maps-rota-1.png"],
};