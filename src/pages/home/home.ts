import { Component } from '@angular/core';

import { NavController ,ModalController} from 'ionic-angular';
import { NewLocationPage } from "../new-location/new-location";
import { LocationPage } from "../location/location";
import { LocationsService } from "../../services/locations.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  locations: { title: string }[] = [];

  constructor(public navCtrl: NavController, public loationsServices: LocationsService,public modelCtrl:ModalController) {
  }


  ionViewWillEnter() {
    this.loationsServices.getPlaces().then(
       (locations) =>  this.locations = locations
    )
  }


  onClickAddLocation() {
    this.navCtrl.push(NewLocationPage)
  }

  onSeletedLocation(){
    this.modelCtrl.create(LocationPage).present();
  }

}
