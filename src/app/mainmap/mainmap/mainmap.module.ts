import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MapviewComponent } from '../../dashboard/mapview/mapview.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
     // { path: 'map', component: MapviewComponent }
      ]),
    CommonModule,
    
  ]
})
export class MainmapModule { }
