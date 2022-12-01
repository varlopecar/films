import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmItem } from '../interfaces/filmItem';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  public URL = `http://www.omdbapi.com/?apikey=${environment.API_KEY}`;
  public films: Array<FilmItem> = [];

  constructor(private http: HttpClient) {}

  // Get top rated movies
  getDataMovies(query: string): Observable<any> {
    return this.http.get<FilmItem>(
      `http://www.omdbapi.com/?apikey=${environment.API_KEY}&s=${query}`
    );
  }

  getFilmDetail(query: string): Observable<any> {
    return this.http.get<FilmItem>(
      `http://www.omdbapi.com/?apikey=${environment.API_KEY}&i=${query}`
    );
  }
}
