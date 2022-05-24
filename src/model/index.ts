export enum Language {
    english = 'english',
    latin = "latin",
    icelandic = 'icelandic'
}

export interface Herb {
    id: number;
    names: {[name in Language]: string};
    imageHerb?: string;
    imageVegetation?: string;
    medicalUses: string[];
    sideEffects: string[];
    precautions: string[];
    description?: string;
    vegetation?: string;
    vegetationPhoto?: string;
}

export interface Workshop {
    id: number;
    title: string;
    photo: string;
    email: string;
    description?: string;
    event?: string;
}