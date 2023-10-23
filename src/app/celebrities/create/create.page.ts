import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { celebrities } from '../interfaces/celebrities.interface';
import { CelebritiesService } from '../services/celebrities.service';

@Component({
  selector: 'app-create',
  templateUrl: 'create.page.html',
  styleUrls: ['create.page.scss'],
  host: {'prova' : 'prova2'},
})

export class CreatePage {

  celebrity: celebrities | undefined;
  createForm: FormGroup | undefined;
  public alertButtons = ['OK'];

  constructor(
    private _route: ActivatedRoute,
    private _celebritiesService: CelebritiesService,
    private _location: Location) {
          this._setForm();
    }

    private _setForm() {
      this.createForm = new FormGroup({
        id: new FormControl((this._celebritiesService.celebrities.length + 1).toString()),
        name: new FormControl("", Validators.required),
        birthYear: new FormControl("", Validators.required),
        deathYear: new FormControl("")

      })
      
      this.createForm.valueChanges.subscribe((form: FormGroup) => console.log(form));
    }

    submitForm() {
      console.log(this.createForm?.value);
        this._celebritiesService.create(this.createForm?.value);
        this._location.back();
        // this._router.navigate(['/tabs/celebrities']);
    }

}