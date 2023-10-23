import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { celebrities } from '../interfaces/celebrities.interface';
import { CelebritiesService } from '../services/celebrities.service';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss'],
  host: {'prova' : 'prova2'},
})

export class EditPage {

  selectedCelebrityId: string | undefined;
  celebrity: celebrities | undefined;
  editForm: FormGroup | undefined;
  id: string = "";
  public alertButtons = ['OK'];

  constructor(
    private _route: ActivatedRoute,
    private _celebritiesService: CelebritiesService,
    private _location: Location) {
      this._route.params.subscribe(params =>{
        this.selectedCelebrityId = params['id'];
        if (this.selectedCelebrityId) {
          
          this.celebrity = this._celebritiesService.getById(this.selectedCelebrityId);
          this._setForm();
        }
      });
    }

    private _setForm() {
      this.editForm = new FormGroup({
        id: new FormControl(this.celebrity?.id),
        name: new FormControl(this.celebrity?.name, Validators.required),
        birthYear: new FormControl(this.celebrity?.birthYear, Validators.required),
        deathYear: new FormControl(this.celebrity?.deathYear)

      })
      
      // this.editForm.valueChanges.subscribe((form: FormGroup) => console.log(form));
    }

    submitForm() {
      console.log(this.editForm?.value);
      if (this.editForm?.valid) {
        this._celebritiesService.update(this.editForm?.value);
        this._location.back();
        // this._router.navigate(['/tabs/celebrities']);
        
      }
    }

}