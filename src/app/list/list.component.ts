import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WeatherService } from '../weather.service';

import { List } from '../list.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  result = [];
  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.result = [];
      this.weatherService.searchCity(params.q).then((city: List[]) => {
        city.map(item => {
          this.weatherService
            .getCityById(item.id)
            .then(cityComplete => this.result.push(cityComplete));
        });
      });
    });
  }

  searchCity(city) {
    this.router.navigate(['/search'], { queryParams: { q: city } });
  }

  openDetails(id) {
    this.router.navigate(['/details', id]);
  }
}
