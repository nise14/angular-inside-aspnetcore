import { Component, OnInit } from '@angular/core';
import { WeatherforecastService } from './services/weatherforecast.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';

  forecasts: any[] = [];

  constructor(private _weatherService: WeatherforecastService) { }

  ngOnInit(): void {
    this._weatherService.getWeatherForeCast().subscribe((response) => {
      console.log(response);
      this.forecasts = response;
    });
  }
}
