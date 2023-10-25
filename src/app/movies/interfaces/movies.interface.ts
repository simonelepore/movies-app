export interface Movie {
    id: string;
    title: string;
    year: number;
    runningTime: number;
    genres: string;
    cast?: Cast[];
    rating: Rating;
    country?: Country[];
}

export interface MovieForm {
    id: string;
    title: string;
    year: number;
    runningTime: number;
    genres: string;
    averageRating: number;
    numVotes: number;
}

export interface Cast {
    celebrityName: string;
    celebrityId: string;
    movieTitle: string;
    movieId: string;
    category: string;
    characters: string;
}

export interface Rating {
    averageRating: number;
    numVotes: number;
}

export interface Country {
    title: string;
    region: string;
    language: string;
}

//l'enum farà sì che il mio oggetto corrisponderà al numero, nel caso delle Categories è lampante l'utilizzo, però l'enum ci dovrebbe essere anche nel database.

// export enum Category {
//     Writer,
//     Actor,
//     Director
// }

// export interface Base {
//     id: string;
//     title : string;
//in questo caso id e title non andrebbero messi in movies, e poi movies dovrebbe estendere Base
// }

// export interface Cars extends Base {
//     year?: number;
//     color: string;
// }