import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movies } from '../interfaces/movies.interface';
import { MoviesService } from '../services/movies.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss'],
})

export class EditPage {

  selectedMovieId: string | undefined;
  movie: movies | undefined;
  editForm: FormGroup | undefined;
  id: string = "";
  public alertButtons = ['OK'];

  constructor(
    private _route: ActivatedRoute,
    private _moviesService: MoviesService,
    private _location: Location) {
      this._route.params.subscribe(params =>{
        this.selectedMovieId = params['id'];
        if (this.selectedMovieId) {
          
          this._moviesService.getById(this.selectedMovieId).subscribe((result: movies) => {
            this.movie = result;
            this._setForm();
          });
          // this.movie = this._moviesService.getById(this.selectedMovieId);
        }
      });
    }

    private _setForm() {
      this.editForm = new FormGroup({
        id: new FormControl(this.movie?.id),
        title: new FormControl(this.movie?.title, Validators.required),
        year: new FormControl(this.movie?.year, Validators.required),
        runningTime: new FormControl(this.movie?.runningTime, Validators.required),
        genres: new FormControl(this.movie?.genres, Validators.required)

      })
    }

    submitForm() {
      // debugger
      // console.log(this.editForm?.value);
      if (this.editForm?.valid) {
        this._moviesService.update(this.editForm?.value).subscribe(() => {
          this._location.back();
        });
        // this._router.navigate(['/tabs/movies']);
        
      }
    }

}