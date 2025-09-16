import type { Place } from "./place";

export type RouteInfo = {
  name: string;
  author: string;
  favorited: boolean;
  starRating: number;
  tags: string[];
  comment: string;
  routeLength: string;
  locals: Place[];
  images: string[];
};