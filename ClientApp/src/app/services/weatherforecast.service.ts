import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherforecastService {

  constructor(private http: HttpClient) { }

  getWeatherForeCast(): Observable<any> {
    return this.http.get<any>("/weatherforecast");
  }
}
