import type { Tag } from "./tag";
import type { RouteInfo } from "./route";
import type { EventInfo } from "./event";

export type Place = {
  id: string;
  name: string;
  favorited: boolean;
  verified: boolean;
  starRating: number;
  tags: Tag[];
  description: string;
  contactInfo: string;
  address: string;
  images: string[];
  routes: RouteInfo[];
  events: EventInfo[];
};