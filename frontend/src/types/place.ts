export type Place = {
  id: string;
  name: string;
  favorited: boolean;
  verified: boolean;
  starRating: number;
  tags: string[];
  description: string;
  contactInfo: string;
  address: string;
  images: string[];
  routes: string[];
  events: string[];
};