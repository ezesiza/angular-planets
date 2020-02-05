import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PlanetDataService } from "src/app/services/planet-data.service";

@Component({
  selector: "app-planet-view",
  templateUrl: "./planet-view.component.html",
  styleUrls: ["./planet-view.component.css"]
})
export class PlanetViewComponent implements OnInit {
  planet: any = {};

  planetLoading = false;
  totalPlanets = 10;
  planetsPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];

  constructor(
    private planetService: PlanetDataService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let url = this.activeRoute.snapshot.paramMap.get("url");
    this.planetService.getPlanetByUrl(url).subscribe(planetData => {
      this.planet = {
        name: planetData.name,
        orbital_period: planetData.orbital_period,
        rotation_period: planetData.rotation_period,
        diameter: planetData.diameter,
        climate: planetData.climate,
        gravity: planetData.gravity,
        terrain: planetData.terrain,
        surface_water: planetData.surface_water,
        population: planetData.population,
        residents: planetData.residents.slice(0, 3).join(" "),
        films: planetData.films.slice(0, 3).join(" "),
        created: planetData.created,
        edited: planetData.edited,
        url: planetData.url
      };
    });
  }
}
