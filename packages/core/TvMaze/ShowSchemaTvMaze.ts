import { Links, Country } from "..";
import { Image } from './CommonSchemaTvMaze'
export interface ShowDetails {
    score: number;
    show: Show;
  }
  export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres?: (string | null)[] | null;
    status: string;
    runtime: number;
    premiered: string;
    officialSite?: string | null;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network?: Network | null;
    webChannel?: WebChannel | null;
    externals: Externals;
    image: Image;
    summary: string;
    updated: number;
    _links: Links;
  }
  export interface Schedule {
    time: string;
    days?: (string)[] | null;
  }
  export interface Rating {
    average?: number | null;
  }
  export interface Network {
    id: number;
    name: string;
    country: Country;
  }
  export interface WebChannel {
    id: number;
    name: string;
    country?: null;
  }
  export interface Externals {
    tvrage?: null;
    thetvdb?: number | null;
    imdb: string;
  }
