import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { WeatherService } from '../weather.service';

import { List } from '../list.interface';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  forecastResult: any;
  cityResult: List[];
  months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.weatherService.getCityById(params.id).then((city: List[]) => {
        this.cityResult = city;
      });
      this.weatherService.getForecast(params.id).then(forecast => {
        this.forecastResult = forecast;
      });
    });
  }

  goBack() {
    this.location.back();
  }

  searchCity(city) {
    this.router.navigate(['/search'], { queryParams: { q: city } });
  }

  getDate(val, timeParam) {
    let time;
    let hours;
    let minutes;
    switch (val) {
      case 1: // return current date
        time = new Date();
        hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
        minutes =
          time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
        return (
          hours +
          ':' +
          minutes +
          ' ' +
          this.months[time.getMonth()] +
          ' ' +
          time.getDate()
        );

      case 2: // return only hour(HH:mm)
        time = new Date(timeParam);
        hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
        minutes =
          time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
        return hours + ':' + minutes;

      case 3: // return cfg date
        time = new Date(timeParam);
        return (
          this.weeks[time.getDay()] +
          ' ' +
          time.getDate() +
          ' ' +
          this.months[time.getMonth()]
        );
    }
  }
}
