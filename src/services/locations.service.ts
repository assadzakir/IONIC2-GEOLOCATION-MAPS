/**
 * Created by Anonmous on 3/20/2017.
 */
export class LocationsService {
  private places:{title:string}[] = [];

  addPlace(place:{title:string}){
    this.places.push(place)
  }

  getPlaces(){
    return this.places.slice();
  }
}
