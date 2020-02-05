import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Planet } from "./planet.model";
import { map ,shareReplay} from "rxjs/operators";
import { Subject } from "rxjs";


@Injectable({ providedIn: "root" })
export class PlanetDataService {
  private planets: Planet[] = [];
  private planetUpdated = new Subject<{ planets: Planet[] }>();

  BASE_URL: string = "https://swapi.co/api/planets/";

  constructor(private http: HttpClient) {}

  getPlanets(planetsPerPage: number, currentPage: number) {
    const queryData = `?pagesize=${planetsPerPage}&page=${currentPage}`;

    this.http
      .get<{ count: number; next: string; previous: string; results: any }>(
        this.BASE_URL + queryData
      )
      .pipe(shareReplay(7),
        map(planetData => {
          return {
            planets: planetData.results.map(planet => {
              return {
                name: planet.name,
                rotation_period: planet.rotation_period,
                orbital_period: planet.orbital_period,
                diameter: planet.diameter,
                climate: planet.climate,
                gravity: planet.gravity,
                terrain: planet.terrain,
                population: planet.population,
                url: planet.url
              };
            })
          };
        })
      )
      .subscribe(retrievedPlanetsData => {
        this.planets = retrievedPlanetsData.planets;
        this.planetUpdated.next({
          planets: [...this.planets]
        });
      });
  } // Get Planets

  getPlanetByUrl(name: string) {
    return this.http.get<{
      name: string;
      rotation_period: number;
      orbital_period: number;
      diameter: number;
      climate: string;
      gravity: string;
      terrain: string[];
      surface_water: number;
      population: number;
      residents: string[];
      films: string[];
      created: Date;
      edited: Date;
      url: string;
    }>(name);
  } // Get planet by Url

  getPlanetUpdateListener() {
    return this.planetUpdated.asObservable();
  }
}
