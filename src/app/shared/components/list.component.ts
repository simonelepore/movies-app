import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Celebrity } from 'src/app/celebrities/interfaces/celebrities.interface';
import { CelebritiesService } from 'src/app/celebrities/services/celebrities.service';
import { Movie } from 'src/app/movies/interfaces/movies.interface';
import { Item } from '../interfaces/itemlist.interface';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})

export class ListComponent implements OnInit {

  @Input() items:Item[] = [];
  
  // @Input() moviesInput:Movie[]= [];

  // @Input() celebritiesInput:Celebrity[]= [];

  @Output() selectIdClicked = new EventEmitter<string>();

  @Output() editIdClicked = new EventEmitter<string>();

  @Output() deleteIdClicked = new EventEmitter<string>();

  // @Output() createClicked = new EventEmitter<string>();

  public alertButtons = ['OK'];

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _location: Location,
    private readonly _celebritiesService: CelebritiesService
  ) {}

  ngOnInit(): void {}

  selectClick(id: string) {
    this.selectIdClicked.emit(id);
  }

  
  editClick(id: string) {
    this.editIdClicked.emit(id);
  }

  
  deleteClick(id: string) {
    this.deleteIdClicked.emit(id);
  }


  // deleteClick(id: string) {
  //   this._celebritiesService.delete(id);
  // }

  // createClick() {
  //   this.createClicked.emit();
  // }

  // showMovieDetail(id: string) {
  //   this._router.navigate(['detail', id]), {relativeTo:this._route};
  //   // this._router.navigate(['tabs', 'movies', 'detail', id]);
  // }


}