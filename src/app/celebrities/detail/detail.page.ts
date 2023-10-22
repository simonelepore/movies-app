import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { celebrities } from '../interfaces/celebrities.interface';
import { CelebritiesService} from '../services/celebrities.service';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})

export class DetailPage {

  selectedCelebrityId: string | undefined;
  celebrity: celebrities | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _celebritiesService: CelebritiesService) {
      this._route.params.subscribe(params =>{
        this.selectedCelebrityId = params['id'];
        if (this.selectedCelebrityId) {
          this.celebrity = this._celebritiesService.getById(this.selectedCelebrityId)
        }
      });
    }

}