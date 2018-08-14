import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PromiseType } from 'protractor/built/plugins';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // https://api.openweathermap.org/data/2.5/find
  // https://api.openweathermap.org/data/2.5/weather
  // https://api.openweathermap.org/data/2.5/forecast?id={{location ID}

  url = 'https://api.openweathermap.org/data/2.5';
  appid = '76d1b43ba3695cfae59aa9f7dc9b4877';

  constructor(private http: HttpClient) { }

  searchCity(city) {
    return new Promise((resolve) => {
      this
        .http
        .get(`${this.url}/find?q=${city}&appid=${this.appid}&units=metric`)
        .subscribe((data) => {
          resolve(data);
        });
    });
  }

  getCityById(cityId) {
    return new Promise((resolve) => {
      this
        .http
        .get(`${this.url}/weather?id=${cityId}&appid=${this.appid}&units=metric`)
        .subscribe((data) => {
          resolve(data);
        });
    });
  }

  getForecast(cityId) {
    return new Promise((resolve) => {
      this
        .http
        .get(`${this.url}/forecast?id=${cityId}&appid=${this.appid}&units=metric`)
        .subscribe((data) => {
          resolve(data);
        });
    });
  }
}
