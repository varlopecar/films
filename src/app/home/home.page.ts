import { Component, OnInit } from '@angular/core';
import { FilmItem } from '../interfaces/filmItem';

import { APIService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public query: string = '';
  public filmItems: Array<any> = [];
  public segmentValue: string = '';

  // call the API service
  constructor(public apiService: APIService) {}

  // call apiservice based on the segment value
  public getDataBasedOnSegment(segment: string, query: string) {
    segment === 'series'
      ? this.apiService
          .getDataMovies(`${query}&type=${segment}`)
          .subscribe((data) => {
            this.filmItems = data.Search;
            console.log(this.filmItems);
          })
      : this.apiService.getDataMovies(`${query}`).subscribe((data) => {
          this.filmItems = data.Search;
          console.log(this.filmItems);
        });
  }

  segmentChanged(event: any) {
    console.log(event.detail.value);
    this.segmentValue = event.detail.value;
    this.getDataBasedOnSegment(this.segmentValue, this.query);
  }

  update(event: any) {
    this.query = event.target.value;
    this.query !== '' ? this.getDataBasedOnSegment(this.segmentValue, this.query) : this.filmItems = [];
    console.log(this.query);
    console.log(this.filmItems);
  }
}
