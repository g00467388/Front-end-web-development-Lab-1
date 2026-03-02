import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // Use DI to inject HttpClient
  constructor(private httpclient : HttpClient){}
  // Define weather url
  WeatherApiUrl = "http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303"
  // Send HTTP GET request to url and return response
  GetWeather() :Observable<any> {
    return this.httpclient.get(this.WeatherApiUrl)
  }
}
