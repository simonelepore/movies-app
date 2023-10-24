import { Component, Output } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { movies } from './interfaces/movies.interface';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss']
})
export class MoviesPage {

  @Output() movieList:movies[] = [];
  movies: movies[] = [];
  
  constructor(
    private readonly _moviesService: MoviesService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
    ) {
      
      this._moviesService.listObs$.subscribe((movies: movies[]) => {
        this.movies = movies;
      });
      this._moviesService.getListSubject();

    }

  // moviesList : movies[] = this._movies.getList();

  getMovieId (id: string){
    console.log("movieId is: " + id);
  }

  showMovieDetail(id: string) {
    this._router.navigate(['detail', id], {relativeTo:this._route});
    // this._router.navigate(['tabs', 'movies', 'detail', id]);
  }

  editMovie(id: string) {
    this._router.navigate(['edit', id], {relativeTo:this._route});
  }

  createMovie() {
    this._router.navigate(['create'], {relativeTo:this._route});
  }

  deleteMovie(id: string) {
    this._moviesService.delete(id);
  }

}
