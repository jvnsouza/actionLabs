import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
    {path: 'search', component: ListComponent},
    {path: 'details/:id', component: CityComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class RoutingModule {}
