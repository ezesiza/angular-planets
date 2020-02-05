import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetTableComponent } from './planets/planet-table/planet-table.component';
import { PlanetViewComponent } from './planets/planets-view/planet-view.component';


const routes: Routes = [
  { path: "", component: PlanetTableComponent },
  { path: "list", component: PlanetListComponent },
  { path: "view/:url", component: PlanetViewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
