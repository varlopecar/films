import { Component, OnInit, Input } from '@angular/core';
import { FilmItem } from '../interfaces/filmItem';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss'],
})
export class FilmsListComponent implements OnInit {
  @Input() films: Array<any> = [];

  constructor() { }

  ngOnInit() {}
}
