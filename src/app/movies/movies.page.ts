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
  
  constructor(
    private readonly _movies: MoviesService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
    ) {}

  // moviesList : movies[] = this._movies.getList();

  ionViewWillEnter() {
    return this._movies.getList();
  }

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

}
