import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movies } from '../interfaces/movies.interface';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})

export class DetailPage {

  selectedMovieId: string | undefined;
  movie: movies | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _moviesService: MoviesService) {
      this._route.params.subscribe(params =>{
        this.selectedMovieId = params['id'];
        if (this.selectedMovieId) {
          this.movie = this._moviesService.getById(this.selectedMovieId)
        }
      });
    }

}