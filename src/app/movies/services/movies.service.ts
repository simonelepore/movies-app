import { Injectable } from "@angular/core";
import { MovieForm, movies } from "../interfaces/movies.interface";
import { Observable, Subject, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class MoviesService {
    private _baseUrl = '';
    private _movies: movies[] = [];

    constructor(
        private readonly _http: HttpClient
    ) {
        this._baseUrl = environment.baseUrl;
    }

    // private _movies: movies[] = [
    //     {
    //         id: "1",
    //         title: "Il Signore degli Anelli: La Compagnia dell'Anello",
    //         year: 2001,
    //         runningTime: 178,
    //         genres: "Fantasy, Avventura",
    //         rating: {
    //             averageRating: 8.8,
    //             numVotes: 1505465
    //         }
    //     },
    //     {
    //         id: "2",
    //         title: "Forrest Gump",
    //         year: 1994,
    //         runningTime: 142,
    //         genres: "Drammatico, Romantico",
    //         rating: {
    //             averageRating: 8.8,
    //             numVotes: 1694050
    //         }
    //     },
    //     {
    //         id: "3",
    //         title: "Pulp Fiction",
    //         year: 1994,
    //         runningTime: 154,
    //         genres: "Crime, Drammatico",
    //         rating: {
    //             averageRating: 8.9,
    //             numVotes: 1894518
    //         }
    //     },
    //     {
    //         id: "4",
    //         title: "Schindler's List",
    //         year: 1993,
    //         runningTime: 195,
    //         genres: "Biografico, Drammatico",
    //         rating: {
    //             averageRating: 8.9,
    //             numVotes: 1234578
    //         }
    //     },
    //     {
    //         id: "5",
    //         title: "Il Padrino",
    //         year: 1972,
    //         runningTime: 175,
    //         genres: "Crime, Drammatico",
    //         rating: {
    //             averageRating: 9.2,
    //             numVotes: 1587456
    //         }
    //     },
    //     {
    //         id: "6",
    //         title: "Fight Club",
    //         year: 1999,
    //         runningTime: 139,
    //         genres: "Drammatico",
    //         rating: {
    //             averageRating: 8.8,
    //             numVotes: 1790345
    //         }
    //     },
    //     {
    //         id: "7",
    //         title: "Matrix",
    //         year: 1999,
    //         runningTime: 136,
    //         genres: "Azione, Fantascienza",
    //         rating: {
    //             averageRating: 8.7,
    //             numVotes: 1678901
    //         }
    //     },
    //     {
    //         id: "8",
    //         title: "Forrest Gump",
    //         year: 1994,
    //         runningTime: 142,
    //         genres: "Drammatico, Romantico",
    //         rating: {
    //             averageRating: 8.8,
    //             numVotes: 1694050
    //         }
    //     },
    //     {
    //         id: "9",
    //         title: "The Shawshank Redemption",
    //         year: 1994,
    //         runningTime: 142,
    //         genres: "Drammatico",
    //         rating: {
    //             averageRating: 9.3,
    //             numVotes: 2186754
    //         }
    //     },
    //     {
    //         id: "10",
    //         title: "Inception",
    //         year: 2010,
    //         runningTime: 148,
    //         genres: "Azione, Avventura, Fantascienza",
    //         rating: {
    //             averageRating: 8.8,
    //             numVotes: 2098745
    //         }
    //     }
    // ];

    private _listSubject$ = new Subject<movies[]>();

    listObs$ = this._listSubject$.asObservable();
    
    // getList(){
    //     return this._movies; 
    // }
    
    getObservable(): Observable <movies[]> {
        // l'any, tipo di result, deve diventare poi un'interfaccia!
        return this._http.get<movies[]>(`${ this._baseUrl }/movies?order_by=id&page=0&size=25`).pipe(map((result: any) => {
            return result.movies;
        }));
    }

    // mi sa che va fatto nel movies.page.ts
    getList() {
        this.getObservable().subscribe((result: movies[]) => {this._movies = result;});
    }
    
    
    getById(id: string): Observable <movies> {
        return this._http.get<movies>(`${ this._baseUrl }/movies/${id}`);
    }

    formToDto(newMovie: MovieForm): movies {
        return {
            id: newMovie.id,
            title: newMovie.title,
            year: newMovie.year,
            runningTime: newMovie.runningTime,
            genres: newMovie.genres,
            rating: {
                averageRating: newMovie.averageRating,
                numVotes: newMovie.numVotes
            }
        };
    }

    dtoToForm() {
        // fare la cosa di sopra però al contrario per l'edit
    }

    create(newMovie: MovieForm) {
        const movieDto : movies = this.formToDto(newMovie);
        return this._http.post<movies>(`${ this._baseUrl }/movies`, movieDto);

        // this._movies.push(newMovie);
        // this._next();
        // console.log(this._movies);
    }
    
    update(movieSelected: movies): Observable <movies> {
        return this._http.put<movies>(`${ this._baseUrl }/movies/${movieSelected.id}`, movieSelected);
        
        // const index : number = this._getIndex(movieSelected.id);
        // if (index !== -1) {
        //     this._movies[index] = movieSelected;
        // }
        // this._next();
    }

    delete(id: string): Observable <movies> {
        return this._http.delete<movies>(`${ this._baseUrl }/movies/${id}`);

        // const index : number = this._getIndex(id);
        // if (index !== -1) {
        //     this._movies.splice(index, 1);
        // }
        // this._next();
    }

    getArrayLength():number {
        return this._movies.length;
    }

    private _getIndex (id: string): number {
        return this._movies.findIndex((movie: movies) => movie.id === id);
    }

    private _next () {
        this._listSubject$.next(this._movies);
    }
    
}