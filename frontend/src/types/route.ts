import type { Place } from "./place";

export type RouteInfo = {
  id: string;
  name: string;
  author: string;
  favorited: boolean;
  starRating: number;
  comment: string;
  routeLength: string;
  locals: Place[];
  images: string[];
  guiaAvailable: boolean;
};