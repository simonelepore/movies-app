import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../interfaces/movies.interface';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})

export class DetailPage {

  selectedMovieId: string | undefined;
  movie: Movie | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _moviesService: MoviesService) {
      this._route.params.subscribe(params =>{
        this.selectedMovieId = params['id'];
        if (this.selectedMovieId) {
          this._moviesService.getById(this.selectedMovieId).subscribe((result: Movie) => this.movie = result);
        }
      });
    }

}