import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashhboardComponent } from '../dashhboard/dashhboard.component';
import { MapviewComponent } from '../mapview/mapview.component';
import { MapComponent } from 'ng-openlayers';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'dashboard', component: DashhboardComponent,  children: [ ]}

    
      ]),
    CommonModule
  ]
})
export class DashboardModule { }
