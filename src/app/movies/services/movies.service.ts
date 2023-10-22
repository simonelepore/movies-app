import { Injectable } from "@angular/core";
import { movies } from "../interfaces/movies.interface";

@Injectable({
    providedIn: 'root'
})

export class MoviesService {
    movies: movies[] = [
        {
            id: "1",
            title: "Il Signore degli Anelli: La Compagnia dell'Anello",
            year: 2001,
            runningTime: 178,
            genres: "Fantasy, Avventura",
            rating: {
                averageRating: 8.8,
                numVotes: 1505465
            }
        },
        {
            id: "2",
            title: "Forrest Gump",
            year: 1994,
            runningTime: 142,
            genres: "Drammatico, Romantico",
            rating: {
                averageRating: 8.8,
                numVotes: 1694050
            }
        },
        {
            id: "3",
            title: "Pulp Fiction",
            year: 1994,
            runningTime: 154,
            genres: "Crime, Drammatico",
            rating: {
                averageRating: 8.9,
                numVotes: 1894518
            }
        },
        {
            id: "4",
            title: "Schindler's List",
            year: 1993,
            runningTime: 195,
            genres: "Biografico, Drammatico",
            rating: {
                averageRating: 8.9,
                numVotes: 1234578
            }
        },
        {
            id: "5",
            title: "Il Padrino",
            year: 1972,
            runningTime: 175,
            genres: "Crime, Drammatico",
            rating: {
                averageRating: 9.2,
                numVotes: 1587456
            }
        },
        {
            id: "6",
            title: "Fight Club",
            year: 1999,
            runningTime: 139,
            genres: "Drammatico",
            rating: {
                averageRating: 8.8,
                numVotes: 1790345
            }
        },
        {
            id: "7",
            title: "Matrix",
            year: 1999,
            runningTime: 136,
            genres: "Azione, Fantascienza",
            rating: {
                averageRating: 8.7,
                numVotes: 1678901
            }
        },
        {
            id: "8",
            title: "Forrest Gump",
            year: 1994,
            runningTime: 142,
            genres: "Drammatico, Romantico",
            rating: {
                averageRating: 8.8,
                numVotes: 1694050
            }
        },
        {
            id: "9",
            title: "The Shawshank Redemption",
            year: 1994,
            runningTime: 142,
            genres: "Drammatico",
            rating: {
                averageRating: 9.3,
                numVotes: 2186754
            }
        },
        {
            id: "10",
            title: "Inception",
            year: 2010,
            runningTime: 148,
            genres: "Azione, Avventura, Fantascienza",
            rating: {
                averageRating: 8.8,
                numVotes: 2098745
            }
        }
    ];
    
    getList(){
        return this.movies; 
    }
    
    
    getById(id: string): movies | undefined {
        return this.movies.find((movies: movies) => movies.id === id);

        // se voglio usare questo metodo posso togliere l'undefined

        // const movie: movies | undefined = this.movies.find(movies => movies.id === id);
        // if (movie) {
        //     return movie;
        // } else {
        //     return {
        //         id: "0",
        //         title: "",
        //         year: 0,
        //         runningTime: 0,
        //         genres: "",
        //         rating: {
        //             averageRating: 0,
        //             numVotes: 0,
        //         }
        //     }
        // }
    }

    update(movieSelected: movies) {
        const index = this.movies.findIndex((movie: movies) => movie.id === movieSelected.id);
        if (index !== -1) {
            this.movies[index] = movieSelected;
        }

    }
    
}