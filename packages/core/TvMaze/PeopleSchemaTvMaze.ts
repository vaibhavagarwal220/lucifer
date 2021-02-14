import { Image, Country, Links } from "./CommonSchemaTvMaze";

export interface Person {
    id: number;
    url: string;
    name: string;
    country: Country;
    birthday: string;
    deathday?: any;
    gender: string;
    image: Image;
    _links: Links;
}

export interface PeopleDetails {
    score: number;
    person: Person;
}
