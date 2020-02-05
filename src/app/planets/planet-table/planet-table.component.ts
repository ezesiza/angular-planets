import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { PlanetDataService } from "../../services/planet-data.service";
import { Subscription } from "rxjs";
import { PageEvent } from "@angular/material";
import { Planet } from "../../services/planet.model";

@Component({
  selector: "planet-table",
  styleUrls: ["planet-table.component.css"],
  templateUrl: "planet-table.component.html"
})
export class PlanetTableComponent implements OnInit {
  planets: Planet[] = [];
  planet: any;
  PLANET_DATA;
  planetLoading = false;
  totalPlanets = 7;
  planetsPerPage = 1;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10, 20];
  dataSource: any = [];
  

  private planetSub: Subscription;


  constructor(private planetService: PlanetDataService) {}

  ngOnInit() {
    this.planetLoading = true;
    this.planetService.getPlanets(this.planetsPerPage, this.currentPage);
    this.planetSub = this.planetService
      .getPlanetUpdateListener()
      .subscribe((planetData: { planets: Planet[] }) => {
        this.planetLoading = false;
        this.planets = this.PLANET_DATA = planetData.planets;
        
        this.dataSource = new MatTableDataSource(this.PLANET_DATA);
      });

  }

  displayedColumns: string[] = [
    "name",
    "url",
    "diameter",
    "climate",
    "terrain",
    "population"
  ];
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
