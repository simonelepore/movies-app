import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MoviesService } from '../services/movies.service';
import { movies } from '../interfaces/movies.interface';

@Component({
  selector: 'app-create',
  templateUrl: 'create.page.html',
  styleUrls: ['create.page.scss'],
  host: {'prova' : 'prova2'},
})

export class CreatePage {

  movie: movies | undefined;
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
        id: new FormControl((this._moviesService.getArrayLength() + 1).toString()),
        title: new FormControl("", Validators.required),
        year: new FormControl("", Validators.required),
        runningTime: new FormControl("", Validators.required),
        genres: new FormControl("", Validators.required)
      })
      
      this.createForm.valueChanges.subscribe((form: FormGroup) => console.log(form));
    }

    submitForm() {
      console.log(this.createForm?.value);
        this._moviesService.create(this.createForm?.value);
        this._location.back();
        // this._router.navigate(['/tabs/movies']);
    }

}