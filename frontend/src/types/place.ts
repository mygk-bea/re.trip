import type { Tag } from "./tag";

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
  routes: string[];
  events: string[];
};