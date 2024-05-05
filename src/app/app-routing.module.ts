import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MapComponent } from './dashboard/map/map.component';
import { MapviewComponent } from './dashboard/mapview/mapview.component';

const routes: Routes = [
  { path: '', redirectTo: '/header/dashboard', pathMatch: 'full'},

  {
    path: 'header',
  
     loadChildren: () => import('../app/dashboard/dashboard/dashboard.module') .then(mod => mod.DashboardModule)
   },
  //  {
  //   path: 'map',
  
  //    loadChildren: () => import('../app/mainmap/mainmap/mainmap.module') .then(mod => mod.MainmapModule)
  //  },
   {path: 'header/dashboard/map', component: MapComponent,pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
