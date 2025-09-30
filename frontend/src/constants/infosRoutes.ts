import type { RouteInfo } from "../types/route";
import { museuPauloSetubalBase, parqueMariaTucaBase, sitioCarrocaoBase } from "./base";

export const rotaSitioMuseu: RouteInfo = {
  id: "1",
  name: "Sítio - Museu",
  author: "Usuário",
  favorited: false,
  starRating: 5,
  comment: "Uma rota perfeita...",
  routeLength: "10,7 km",
  locals: [sitioCarrocaoBase, museuPauloSetubalBase],
  images: ["/images/printscreen/img_bg_maps-rota-1.png"],
};

export const rotaParques: RouteInfo = {
  id: "2",
  name: "Parques Tatuí",
  author: "Usuário",
  favorited: true,
  starRating: 5,
  comment: "Adorei conhecer os parques de Tatuí!",
  routeLength: "10,7 km",
  locals: [parqueMariaTucaBase, sitioCarrocaoBase],
  images: ["/images/printscreen/img_bg_maps-rota-2.png"],
};

export const allRoutes: RouteInfo[] = [rotaSitioMuseu, rotaParques];