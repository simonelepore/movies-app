import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Celebrity } from '../interfaces/celebrities.interface';
import { CelebritiesService} from '../services/celebrities.service';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})

export class DetailPage {

  selectedCelebrityId: string | undefined;
  celebrity: Celebrity | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _celebritiesService: CelebritiesService) {
      this._route.params.subscribe(params =>{
        this.selectedCelebrityId = params['id'];
        if (this.selectedCelebrityId) {
          this._celebritiesService.getById(this.selectedCelebrityId).subscribe((result: Celebrity) => this.celebrity = result);
        }
      });
    }

}