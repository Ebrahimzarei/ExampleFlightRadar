import { AfterViewInit, Component } from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
 
  }
  title = 'Radar';
  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 5,
    center: new Leaflet.LatLng(35.744722, 51.375278)
  };
  
}
export const getLayers = (): Leaflet.Layer[] => {
  return [
    new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    } as Leaflet.TileLayerOptions),
  ] as Leaflet.Layer[];
}

