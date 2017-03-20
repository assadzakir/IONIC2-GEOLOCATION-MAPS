import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocationsService } from "../../services/locations.service";
import { Geolocation } from 'ionic-native';

/*
  Generated class for the NewLocation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-location',
  templateUrl: 'new-location.html'
})
export class NewLocationPage {

  location: { lng: number, lat: number } = { lng: 0, lat: 0 }

  constructor(public navCtrl: NavController, public navParams: NavParams, public locationsService: LocationsService) { }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad NewLocationPage');
  // }

  onAddPlace(value: { title: string }) {
    this.locationsService.addPlace({ title: value.title, location: this.location })
    this.navCtrl.pop()
  }

  findUserLocation() {
    Geolocation.getCurrentPosition().then((loc) => {
      this.location.lat = loc.coords.latitude
      this.location.lng = loc.coords.longitude
      console.log(loc)
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
