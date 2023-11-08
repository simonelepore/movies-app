import { Component, Output } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from './interfaces/movies.interface';
import { Item } from '../shared/interfaces/itemlist.interface';
import { BehaviorSubject, debounceTime, map, startWith, switchMap } from 'rxjs';
import { RangeCustomEvent } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss'],
})
export class MoviesPage {
  // @Output() movieList:Movie[] = [];
  provaS$ = new BehaviorSubject<number>(0);
  movies: Item[] = [];
  unfilteredMovies: Item[] = [];
  ratingRange$ = new BehaviorSubject<number>(0);
  title = new FormControl<string>("");
  selectedMovie: Item | undefined;
  selectedId$ = new BehaviorSubject<string>('');
  //TODO penso si faccia così
  selectedRatingFromRange = 0;

  constructor(
    private readonly _moviesService: MoviesService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {

    // this.provaS$.next(1)
    // this.provaS$.next(2)
    // this.provaS$.subscribe((value) => console.log("questa è una prova " + value));
    // this.provaS$.next(5)

    console.log(this._moviesService.checkTitleExists("ciao"));


    this.title.valueChanges
    .pipe(
      startWith(''),
      debounceTime(500),
      switchMap((title) => {
        return this._moviesService.getObsMoviesByTitle(title);
      }),
      switchMap((movies) => {
        this.unfilteredMovies = movies.map((movie: Movie) => {
          return {
            id: movie.id,
            name: movie.title,
            rating: movie.rating.averageRating / 10,
            cast: movie.cast,
            year: movie.year
          };
        });
        return this.ratingRange$;
      })
    )
    .subscribe((value) => {
      this._getMoviesByRating(value);
      //TODO penso si faccia così
      this.selectedRatingFromRange = value;
    });

    this.selectedId$.subscribe((id) => {
      let movie = this.unfilteredMovies.find((movie) => movie.id === id);
      if (movie) this.selectedMovie = movie;
    });
    // this._moviesService.getListSubject().subscribe((result: movies[]) => {this.movies = result;});
  }

  // moviesList : movies[] = this._movies.getList();

  //movie => movie.rating != undefined && POSSO anche toglierlo perché a me non dà problema dell'undefined

  ionViewWillEnter() {
    // this._moviesService.getObservable().subscribe((result: movies[]) => {this.movies = result;});
  }

  onIonChange(ev: Event) {
    // const rangeNumber = (ev as RangeCustomEvent).detail.value;
    // this._getList(rangeNumber as number);
    this.ratingRange$.next(Number((ev as RangeCustomEvent).detail.value));
  }

  private _getMoviesByRating(rating: number) {
    this.movies = this.unfilteredMovies.filter(
      (movie) => (movie.rating || 0) > rating / 10
    );
  }

  private _getList(rangeNumber = 0) {
    this._moviesService
      .getObservable()
      .pipe(
        //rimuovo i film con averageRating minore di 5
        map((movies) =>
          movies.filter(
            (movie) =>
              movie.rating != undefined &&
              movie.rating.averageRating > rangeNumber
          )
        ),
        // trasformo il valore di average rating da intero a decimale
        map((movies) => {
          return movies.map(({ id, title, rating }) => {
            return {
              id,
              name: title,
              rating: rating.averageRating / 10,
            };
          });
        })
      )
      .subscribe((result: Item[]) => {
        this.movies = result;
      });
  }

  loadMovie(id: string): void {
    this.selectedId$.next(id);
  }

  getMovieId(id: string) {
    console.log('movieId is: ' + id);
  }

  showMovieDetail(id: string) {
    this._router.navigate(['detail', id], { relativeTo: this._route });
    // this._router.navigate(['tabs', 'movies', 'detail', id]);
  }

  editMovie(id: string) {
    this._router.navigate(['edit', id], { relativeTo: this._route });
  }

  createMovie() {
    this._router.navigate(['create'], { relativeTo: this._route });
  }

  deleteMovie(id: string) {
    this._moviesService.delete(id).subscribe(() => this._getList());
    // this._moviesService.delete(id).subscribe((movies) => {this.movies = movies});
  }
}
