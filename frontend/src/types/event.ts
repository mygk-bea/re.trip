import type { Place } from "./place";

export type EventInfo = {
  id: string;
  locals: Place[];
  address: string;
  description: string;
  date: string;
  time: string;
  images: string[];
};