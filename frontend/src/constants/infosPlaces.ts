import type { Place } from "../types/place";
import { sitioCarrocaoBase, museuPauloSetubalBase } from "./base";
import { rotaSitioMuseu } from "./infosRoutes";
import { anoNovoCarrocao, acampamentoFeriasCarrocao } from "./infosEvents";

export const sitioCarrocao: Place = {
  ...sitioCarrocaoBase,
  routes: [rotaSitioMuseu],
  events: [anoNovoCarrocao, acampamentoFeriasCarrocao],
};

export const museuPauloSetubal: Place = {
  ...museuPauloSetubalBase,
  routes: [rotaSitioMuseu],
  events: [],
};

export const allPlaces: Place[] = [museuPauloSetubal, sitioCarrocao];