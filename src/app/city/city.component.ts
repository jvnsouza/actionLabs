import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  result = {}

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this
          .weatherService
          .getForecast(params.id)
          .then(city => {
            console.log(city)
          });
      });
  }

}
