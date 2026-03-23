import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // Inject HttpClient using DI
  constructor(private _httpclient : HttpClient){}
  // Method returns all movies beginning with shrek
  GetShrekMovieData() : Observable<any>
  {
    return this._httpclient.get("https://www.omdbapi.com/?apikey=a52c2718&s=%27shrek%27")
  }
}
