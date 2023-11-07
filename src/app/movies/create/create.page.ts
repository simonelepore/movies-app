import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movies.interface';
import { TitleValidator } from './validators/title.validator';

@Component({
  selector: 'app-create',
  templateUrl: 'create.page.html',
  styleUrls: ['create.page.scss'],
  host: {'prova' : 'prova2'},
})

export class CreatePage {

  movie: Movie | undefined;
  createForm: FormGroup | undefined;
  public alertButtons = ['OK'];

  constructor(
    private _route: ActivatedRoute,
    private _moviesService: MoviesService,
    private _location: Location) {
          this._setForm();
    }

    private _setForm() {
      this.createForm = new FormGroup({
        // id: new FormControl((this._moviesService.getArrayLength() + 1).toString()),
        id: new FormControl("", Validators.required),
        title: new FormControl("", {
          validators: Validators.required,
          asyncValidators: TitleValidator.createValidator(this._moviesService),
          updateOn: "blur"
        }),
        year: new FormControl("", Validators.required),
        runningTime: new FormControl("", Validators.required),
        genres: new FormControl("", Validators.required),
        averageRating: new FormControl(0, Validators.required),
        numVotes: new FormControl(0, Validators.required)
        // rating: new FormGroup({
        //   averageRating: new FormControl(0, Validators.required),
        //   numVotes: new FormControl(0, Validators.required),
        // })
      })
      
      this.createForm.valueChanges.subscribe((form: FormGroup) => console.log(form));
    }

    submitForm() {
      console.log(this.createForm?.value);
      if (this.createForm?.valid) {
        this._moviesService.create(this.createForm?.value).subscribe(() => {this._location.back();
        });
        // this._router.navigate(['/tabs/movies']);
      }  
    }

}