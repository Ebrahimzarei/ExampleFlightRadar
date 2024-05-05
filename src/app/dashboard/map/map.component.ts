import { AfterViewInit, Component, OnInit } from '@angular/core';
import  * as Leaflet from 'leaflet';
import * as L from 'leaflet';
import { RouterOutlet } from '@angular/router';
import {AngularOpenlayersModule} from "ng-openlayers";
 
@Component({
  selector: 'app-map',
   
  templateUrl: './map.component.html',
  
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  map:any;

  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 5,
    center: new Leaflet.LatLng(43.530147, 16.488932),
    keyboard:true,
    boxZoom:true,
    dragging:true,
    keyboardPanDelta:4,


  };
  ngOnInit(): void {
  
 
  }
  
}



export const getLayers = (): Leaflet.Layer[] => {
  return [
    // Basic style
    new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    } as Leaflet.TileLayerOptions),
  //  Pastel style, remove if you want basic style. Uncomment if you want pastel style.

    // new Leaflet.TileLayer('https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key={your_key}', {
    //   attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
    // } as Leaflet.TileLayerOptions),
    ...getMarkers(),
    ...getRoutes(),
    ...getPolygons()
     
  ] as Leaflet.Layer[];
};
 
export const getPolygons = (): Leaflet.Polygon[] => {
  return [
    new Leaflet.Polygon([
      new Leaflet.LatLng(43.5181349, 16.4537963),
      new Leaflet.LatLng(43.517890, 16.439939),
      new Leaflet.LatLng(43.515599, 16.446556),
      new Leaflet.LatLng(43.518025, 16.463492)
    ] as Leaflet.LatLng[],
      {
        fillColor: '#eb530d',
        color: '#eb780d'
      } as Leaflet.PolylineOptions)
  ] as Leaflet.Polygon[];
};
 
export const getMarkers = (): Leaflet.Marker[] => {
  return [
    new Leaflet.Marker(new Leaflet.LatLng(43.5121264, 16.4700729), {
      icon: new Leaflet.Icon({
        iconSize: [50, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/flight.png',
      }),
      title: 'Workspace'
    } as Leaflet.MarkerOptions).on('mouseover',function(e) {
      alert("هواپیمایی اروپا");
    }),
    new Leaflet.Marker(new Leaflet.LatLng(57.5074826, 18.4390046), {
      icon: new Leaflet.Icon({
        iconSize: [50, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/flight.png',
      }),
      title: 'Riva'
    } as Leaflet.MarkerOptions),
  ] as Leaflet.Marker[];
}; 
export const getRoutes = (): Leaflet.Polyline[] => {
  return [
    new Leaflet.Polyline([
      new Leaflet.LatLng(43.5121264, 16.4700729),
      new Leaflet.LatLng(57.5074826, 18.4390046),
    ] as Leaflet.LatLng[], {
      color: '#0d9148'
    } as Leaflet.PolylineOptions)
  ] as Leaflet.Polyline[];
};
 