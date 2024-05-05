import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashhboardComponent } from './dashboard/dashhboard/dashhboard.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './dashboard/map/map.component';
import { AngularOpenlayersModule } from "ngx-openlayers";
import { MapviewComponent } from './dashboard/mapview/mapview.component';
@NgModule({
  declarations: [
    AppComponent,
    DashhboardComponent,
    MapComponent,
    MapviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
