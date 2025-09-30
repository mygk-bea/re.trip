import type { Place } from "../types/place";
import { sitioCarrocaoBase, museuPauloSetubalBase, parqueMariaTucaBase } from "./base";
import { rotaParques, rotaSitioMuseu } from "./infosRoutes";
import { anoNovoCarrocao, acampamentoFeriasCarrocao } from "./infosEvents";

export const sitioCarrocao: Place = {
  ...sitioCarrocaoBase,
  routes: [rotaSitioMuseu, rotaParques],
  events: [anoNovoCarrocao, acampamentoFeriasCarrocao],
};

export const museuPauloSetubal: Place = {
  ...museuPauloSetubalBase,
  routes: [rotaSitioMuseu],
  events: [],
};

export const parqueMariaTuca: Place = {
  ...parqueMariaTucaBase,
  routes: [rotaParques],
  events: [],
};

export const allPlaces: Place[] = [museuPauloSetubal, sitioCarrocao, parqueMariaTuca];