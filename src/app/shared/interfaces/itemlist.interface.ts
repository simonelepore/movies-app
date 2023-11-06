export interface Item {
    id: string;
    name: string;
    rating?: number;
    cast?: Cast[];
    year?: number;
}

export interface Cast {
    celebrityName: string;
    celebrityId: string;
    movieTitle: string;
    movieId: string;
    category: string;
    characters: string;
}