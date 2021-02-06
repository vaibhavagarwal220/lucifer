export interface Country {
    name: string;
    code: string;
    timezone: string;
}
export interface Image {
    medium: string;
    original: string;
}
export interface Links {
    self: Self;
    previousepisode?: Self;
}
export interface Self {
    href: string;
}
  