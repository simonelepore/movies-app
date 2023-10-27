import { Injectable } from "@angular/core";
import { Celebrity } from "../interfaces/celebrities.interface";
import { Observable, Subject, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class CelebritiesService {

    private _baseUrl = '';
    private _celebrities: Celebrity[] = [];

    constructor(
        private readonly _http: HttpClient
    ) {
        this._baseUrl = environment.baseUrl;
    }

    //ricordati che l'observable si scrive col dollaro finale es.: celebritiesSubject$
    // private _listSubject$ = new Subject<Celebrity[]>();

    // listObs$ = this._listSubject$.asObservable();

        // getList(){
    //     return this.celebrities;
    // }

    // getListSubject(){
    //     this._next();
    // }

    getObservable(): Observable <Celebrity[]> {
        return this._http.get<Celebrity[]>(`${ this._baseUrl }/celebrities?order_by=id&page=0&size=25`).pipe(map((result: any) => {
            return result.celebrities;
        }));
    }
    

    getById(id: string): Observable <Celebrity> {
        return this._http.get<Celebrity>(`${ this._baseUrl }/celebrities/${id}`);
    }

    create(newCelebrity: Celebrity) {
        return this._http.post<Celebrity>(`${ this._baseUrl }/celebrities`, newCelebrity);
    }

    update(celebritySelected: Celebrity): Observable <Celebrity> {
        return this._http.put<Celebrity>(`${ this._baseUrl }/celebrities/${celebritySelected.id}`, celebritySelected);
    }

    delete(id: string): Observable <Celebrity> {
        return this._http.delete<Celebrity>(`${ this._baseUrl }/celebrities/${id}`);
    }

    getArrayLength():string {
        return (this._celebrities.length + 1).toString();
    }


    private _getIndex (id: string): number {
        return this._celebrities.findIndex((celebrity: Celebrity) => celebrity.id === id);
    }

    // private _next () {
    //     this._listSubject$.next(this._celebrities);
    // }

    // create(newCelebrity: celebrities) {
    //     // debugger
    //     this._celebrities.push(newCelebrity);
    //     this._next();
    //     console.log(this._celebrities);
    // }

    // update(celebritySelected: celebrities) {
    //     // debugger;
    //     const index : number = this._getIndex(celebritySelected.id);
    //     // uguale a:
    //     // const index = this._celebrities.findIndex((celebrity: celebrities) => celebrity.id === celebritySelected.id);
    //     if (index !== -1) {
    //         this._celebrities[index] = celebritySelected;
    //     }
    //     this._next();
        
    // }

    // delete(id: string) {
    //     const index : number = this._getIndex(id);
    //     // const index = this._celebrities.findIndex((celebrity: celebrities) => celebrity.id === id);
    //     if (index !== -1) {
    //         this._celebrities.splice(index, 1);
    //         // this.celebrities.filter((element) => element.id !== id);
    //     }
    //     this._next();

    // }

    // RENDILO PRIVATE, altrimenti qualcuno malintenzionato potrebbe manipolare l'oggetto
    // _celebrities: celebrities[] = [
    //     {
    //         id: "1",
    //         name: "Leonardo DiCaprio",
    //         birthYear: 1974,
    //         deathYear: null
    //     },
    //     {
    //         id: "2",
    //         name: "Meryl Streep",
    //         birthYear: 1949,
    //         deathYear: null
    //     },
    //     {
    //         id: "3",
    //         name: "Tom Hanks",
    //         birthYear: 1956,
    //         deathYear: null
    //     },
    //     {
    //         id: "4",
    //         name: "Jennifer Lawrence",
    //         birthYear: 1990,
    //         deathYear: null
    //     },
    //     {
    //         id: "5",
    //         name: "Johnny Depp",
    //         birthYear: 1963,
    //         deathYear: null
    //     },
    //     {
    //         id: "6",
    //         name: "Cate Blanchett",
    //         birthYear: 1969,
    //         deathYear: null
    //     },
    //     {
    //         id: "7",
    //         name: "Denzel Washington",
    //         birthYear: 1954,
    //         deathYear: null
    //     },
    //     {
    //         id: "8",
    //         name: "Nicole Kidman",
    //         birthYear: 1967,
    //         deathYear: null
    //     },
    //     {
    //         id: "9",
    //         name: "Robert Downey Jr.",
    //         birthYear: 1965,
    //         deathYear: null
    //     },
    //     {
    //         id: "10",
    //         name: "Julia Roberts",
    //         birthYear: 1967,
    //         deathYear: null
    //     }
    // ];

        // getById(id: string): celebrities | undefined {
    //     return this._celebrities.find((celebrities: celebrities) => celebrities.id === id);
        
    //     // se voglio usare questo metodo posso togliere l'undefined
        
    //     // const movie: movies | undefined = this.movies.find(movies => movies.id === id);
    //     // if (movie) {
    //     //     return movie;
    //     // } else {
    //     //     return {
    //     //         id: "0",
    //     //         title: "",
    //     //         year: 0,
    //     //         runningTime: 0,
    //     //         genres: "",
    //     //         rating: {
    //     //             averageRating: 0,
    //     //             numVotes: 0,
    //     //         }
    //     //     }
    //     // }
    // }
    
}