/**
 * Created by Anonmous on 3/20/2017.
 */
import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";
import { LocationModel } from "../model/location.model";

@Injectable()
export class LocationsService {
  constructor(public Storage: Storage) { };
  private places: LocationModel[] = [];

  addPlace(place: LocationModel) {
    this.places.push(place);
    this.Storage.set('locations', this.places)
  }

  getPlaces() {
    return this.Storage.get('locations').then(
      (locations) => {
        this.places = locations == null ? [] : locations;
        return this.places.slice();
      }
    );

  }
}
