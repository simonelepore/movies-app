import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Celebrity } from '../interfaces/celebrities.interface';
import { CelebritiesService } from '../services/celebrities.service';

@Component({
  selector: 'app-create',
  templateUrl: 'create.page.html',
  styleUrls: ['create.page.scss'],
  host: {'prova' : 'prova2'},
})

export class CreatePage {

  celebrity: Celebrity | undefined;
  createForm: FormGroup | undefined;
  public alertButtons = ['OK'];

  constructor(
    private _route: ActivatedRoute,
    private _celebritiesService: CelebritiesService,
    private _location: Location) {
          this._setForm();
    }

    private _setForm() {
      // debugger
      this.createForm = new FormGroup({
        // id: new FormControl(this._celebritiesService.getArrayLength()),
        id: new FormControl("", Validators.required),
        name: new FormControl("", Validators.required),
        birthYear: new FormControl("", Validators.required),
        deathYear: new FormControl("")

      })
      
      this.createForm.valueChanges.subscribe((form: FormGroup) => console.log(form));
    }

    submitForm() {
      console.log(this.createForm?.value);
      if (this.createForm?.valid) {
        this._celebritiesService.create(this.createForm?.value).subscribe(() => {this._location.back();
        });  
        // this._router.navigate(['/tabs/celebrities']);
      }  
    }

}