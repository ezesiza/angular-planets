import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDividerModule,
  MatListModule
} from "@angular/material";
import { MatTableModule } from "@angular/material/table";

import { AppComponent } from "./app.component";
import { PlanetListComponent } from "./planets/planet-list/planet-list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PlanetViewComponent } from "./planets/planets-view/planet-view.component";
import { PlanetTableComponent } from "./planets/planet-table/planet-table.component";




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlanetTableComponent,
    PlanetListComponent,
    PlanetViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDividerModule,
    MatListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
