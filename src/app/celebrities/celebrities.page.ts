import { Component, Output } from '@angular/core';
import { celebrities } from './interfaces/celebrities.interface';
import { CelebritiesService } from './services/celebrities.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-celebrities',
  templateUrl: 'celebrities.page.html',
  styleUrls: ['celebrities.page.scss']
})
export class CelebritiesPage {

  @Output() celebritiesList:celebrities[] = [];

  constructor(
    private readonly _celebrities: CelebritiesService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {}

    // celebritiesList : celebrities[] = this._celebrities.getList();

    ionViewWillEnter() {
      return this._celebrities.getList();
    }
  
    getCelebrityId (id: string){
      console.log("celebrityId is: " + id);
    }
  
    showCelebrityDetail(id: string) {
      this._router.navigate(['detail', id], {relativeTo:this._route});
      // this._router.navigate(['tabs', 'celebrities', 'detail', id]);
    }
  
    editCelebrity(id: string) {
      this._router.navigate(['edit', id], {relativeTo:this._route});
    }

}
