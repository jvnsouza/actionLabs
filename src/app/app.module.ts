import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CityComponent } from './city/city.component';

import { WeatherService } from './weather.service';

import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
