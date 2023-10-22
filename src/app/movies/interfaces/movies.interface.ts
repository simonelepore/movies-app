export interface movies {
    id: string;
    title: string;
    year: number;
    runningTime: number;
    genres: string;
    cast?: [];
    rating?: {
        averageRating: number;
        numVotes: number;
    };
    country?: [];
}