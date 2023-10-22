import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { celebrities } from 'src/app/celebrities/interfaces/celebrities.interface';
import { movies } from 'src/app/movies/interfaces/movies.interface';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})

export class ListComponent implements OnInit {

  @Input() moviesInput:movies[]= [];

  @Input() celebritiesInput:celebrities[]= [];

  @Output() selectIdClicked = new EventEmitter<string>();

  @Output() editIdClicked = new EventEmitter<string>();

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  selectClick(id: string) {
    this.selectIdClicked.emit(id);
  }

  
  editClick(id: string) {
    this.editIdClicked.emit(id);
  }

  // showMovieDetail(id: string) {
  //   this._router.navigate(['detail', id]), {relativeTo:this._route};
  //   // this._router.navigate(['tabs', 'movies', 'detail', id]);
  // }

}