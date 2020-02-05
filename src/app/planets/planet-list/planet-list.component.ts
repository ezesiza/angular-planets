import { OnInit, Component, Input } from "@angular/core";
import { PlanetDataService } from "../../services/planet-data.service";
import { Planet } from "../../services/planet.model";
import { Subscription } from "rxjs";
import { PageEvent } from "@angular/material";

@Component({
  selector: "app-planet-list",
  templateUrl: "./planet-list.component.html",
  styleUrls: ["./planet-list.component.css"]
})
export class PlanetListComponent implements OnInit {
  planets: Planet[] = [];

  planetLoading = false;
  totalPlanets = 10;
  planetsPerPage = 1;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  dataSource: any = [];

  private planetSub: Subscription;
  constructor(public planetService: PlanetDataService) {}

  ngOnInit() {
    this.planetLoading = true;
    this.planetService.getPlanets(this.planetsPerPage, this.currentPage);
    this.planetSub = this.planetService
      .getPlanetUpdateListener()
      .subscribe((planetData: { planets: Planet[] }) => {
        this.planetLoading = false;
        this.planets = planetData.planets;
      });
  }

  onChangePage(planetData: PageEvent) {
    this.planetLoading = true;
    this.currentPage = planetData.pageIndex + 1;
    this.planetsPerPage = planetData.pageSize;
    this.planetService.getPlanets(this.planetsPerPage, this.currentPage);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.planetSub.unsubscribe();
  }
}
