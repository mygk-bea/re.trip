import type { RouteInfo } from "../types/route";
import { museuPauloSetubalBase, sitioCarrocaoBase } from "./base";

export const rotaSitioMuseu: RouteInfo = {
  id: "1",
  name: "Sítio - Museu",
  author: "Mey Bea",
  favorited: true,
  starRating: 5,
  comment: "Uma rota perfeita...",
  routeLength: "10,7 km",
  locals: [sitioCarrocaoBase, museuPauloSetubalBase],
  images: ["/images/printscreen/img_bg_maps-rota-1.png"],
};