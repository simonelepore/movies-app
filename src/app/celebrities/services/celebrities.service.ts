import { Injectable } from "@angular/core";
import { celebrities } from "../interfaces/celebrities.interface";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CelebritiesService {

    // RENDILO PRIVATE, altrimenti qualcuno malintenzionato potrebbe manipolare l'oggetto
    celebrities: celebrities[] = [
        {
            id: "1",
            name: "Leonardo DiCaprio",
            birthYear: 1974,
            deathYear: null
        },
        {
            id: "2",
            name: "Meryl Streep",
            birthYear: 1949,
            deathYear: null
        },
        {
            id: "3",
            name: "Tom Hanks",
            birthYear: 1956,
            deathYear: null
        },
        {
            id: "4",
            name: "Jennifer Lawrence",
            birthYear: 1990,
            deathYear: null
        },
        {
            id: "5",
            name: "Johnny Depp",
            birthYear: 1963,
            deathYear: null
        },
        {
            id: "6",
            name: "Cate Blanchett",
            birthYear: 1969,
            deathYear: null
        },
        {
            id: "7",
            name: "Denzel Washington",
            birthYear: 1954,
            deathYear: null
        },
        {
            id: "8",
            name: "Nicole Kidman",
            birthYear: 1967,
            deathYear: null
        },
        {
            id: "9",
            name: "Robert Downey Jr.",
            birthYear: 1965,
            deathYear: null
        },
        {
            id: "10",
            name: "Julia Roberts",
            birthYear: 1967,
            deathYear: null
        }
    ];

    //ricordati che il subject si scrive col dollaro finale es.: celebritiesSubject$
    subject = new Subject<celebrities[]>();
    
    // getList(){
    //     return this.celebrities;
    // }

    getListSubject(){
        this.subject.next(this.celebrities);
    }
    
    
    getById(id: string): celebrities | undefined {
        return this.celebrities.find((celebrities: celebrities) => celebrities.id === id);
        
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
    
    update(celebritySelected: celebrities) {
        const index = this.celebrities.findIndex((celebrity: celebrities) => celebrity.id === celebritySelected.id);
        if (index !== -1) {
            this.celebrities[index] = celebritySelected;
        }
        // scommentalo quando implementi il subject
        this.subject.next(this.celebrities);
        
    }

    delete(id: string) {
        const index = this.celebrities.findIndex((celebrity: celebrities) => celebrity.id === id);
        if (index !== -1) {

            // meglio usare la filter perché può non trovare l'id corrispondente nel momento in cui aggiungo una nuova celebrity
            // e ne elimino un'altra
            this.celebrities.splice(index, 1);

            // this.celebrities.filter((element) => element.id !== id);

        }
        this.subject.next(this.celebrities);

    }

    create(newCelebrity: celebrities) {
        this.celebrities.push(newCelebrity);
        this.subject.next(this.celebrities);
        console.log(this.celebrities);
    }
    
}