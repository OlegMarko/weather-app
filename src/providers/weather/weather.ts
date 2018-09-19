import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {

  apiKey = 'dc0ddc226ec7679bea7d52625c085dc7';
  url;
  iconBaseUrl = 'http://openweathermap.org/img/w/';

  constructor(public http: HttpClient) {
    this.url = `https://api.openweathermap.org/data/2.5/weather?APPID=${this.apiKey}&units=metric&q=`;
  }

  getWeather(city, country) {
    return this.http.get(this.url + `${city},${country}`);
  }

}
