import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  result = []
  constructor(private route: ActivatedRoute, private weatherService: WeatherService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this
          .weatherService
          .searchCity(params.q)
          .then(city => {
            city.list.map(item => {
              console.log(item.id)
              this
                .weatherService
                .getCityById(item.id)
                .then(cityComplete => this.result.push(cityComplete))
            })
          });
      });
  }

  openDetails(id){
    this.router.navigate(['/details', id]);
  }

}
