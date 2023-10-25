export interface Celebrity {
    id: string;
    name: string;
    birthYear: number;
    deathYear: number | null;
    movies?: Movies[];
}

export interface Movies {
    celebrityName: string;
    celebrityId: string;
    movieTitle: string;
    movieId: string;
    category: string;
    characters: string;
}