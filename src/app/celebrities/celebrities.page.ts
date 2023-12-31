import { Component, Output } from '@angular/core';
import { Celebrity } from './interfaces/celebrities.interface';
import { CelebritiesService } from './services/celebrities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, from } from 'rxjs';
import { Item } from '../shared/interfaces/itemlist.interface';

@Component({
  selector: 'app-celebrities',
  templateUrl: 'celebrities.page.html',
  styleUrls: ['celebrities.page.scss']
})
export class CelebritiesPage {

  // @Output() celebritiesList:Celebrity[] = [];
  celebrities: Item[] = [];

  constructor(
    private readonly _celebritiesService: CelebritiesService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {
    // this._celebritiesService.listObs$.subscribe((celebrities: celebrities[]) => {
    //   this.celebrities = celebrities;
    // });
    }

    // celebritiesList : celebrities[] = this._celebrities.getList();

    private _getList() {
      // una volta creato il list component qui dovrò fare il mapping di ciò che mi arriva in ascolto
      this._celebritiesService.getObservable().subscribe((result: Celebrity[]) => {this.celebrities = result.map((celebrity: Celebrity) =>{
        return {
          id: celebrity.id,
          name: celebrity.name
        }
      });
      });
    }

    ionViewWillEnter() {
      this._getList();
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

    createCelebrity() {
      this._router.navigate(['create'], {relativeTo:this._route});
    }

    deleteCelebrity(id: string) {
      this._celebritiesService.delete(id).subscribe(() => this._getList());
    }

    // tryObservable() {

    // PRIMO ESEMPIO OBSERVABLE
    // this.result.subscribe(x => console.log(x));
  
    // SECONDO ESEMPIO OBSERVABLE
    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //     subscriber.next(5); //subscriber.next(5) non funzionerà
    //   }, 1000);
    // });
  
    // console.log('just before subscribe');

    // observable.subscribe({
    //   next(x){
    //     console.log("got value " + x);
    //   },
    //   error(err) {
    //     console.error("something wrong occured: " + err);
    //   },
    //   complete() {
    //     console.log("done");
    //   },
    // });

    // TERZO ESEMPIO SUBJECT
    // const subject = new Subject<number>();

    // subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`),
    // });
    // subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`),
    // });
     
    // subject.next(1);
    // subject.next(2);
      
    // }

    // PRIMO ESEMPIO OBSERVABLE
    // array = [10, 20, 30];
    // result = from(this.array);

}
