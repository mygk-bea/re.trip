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
  favorited: true,
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

export const parqueMariaTucaBase: Place = {
  id: "3",
  name: "Parque Maria Tuca",
  favorited: false,
  verified: true,
  starRating: 4.5,
  tags: [
    { text: "Próximo à Natureza", style: TAG_COLORS.localizacao.proximoANatureza },
    { text: "Tatuí", style: TAG_COLORS.localizacao.tatui },
  ],
  description: "No Parque o público poderá ter momentos de lazer e diversão, com pesca esportiva; quadras de areia; campo de futebol; um novo espaço para bicicletas; três piscinas naturais com toboágua; prainha às margens do lago; quiosques; sanitários e vestiários masculino e feminino; e trilha ecológica.",
  contactInfo: "(15) 3205-1199",
  address: "VIA MUNICIPAL JOAO BATISTA LISBOA, SN Com acesso pelo Km 117,8 da Rodovia Antônio Romano Schincariol (SP-127 - BAIRRO DOS FRAGAS, Tatuí - SP, 18270-001",
  images: [
    "/images/places/img_bg_parque-maria-tuca.png",
  ],
  routes: [],
  events: [],
};