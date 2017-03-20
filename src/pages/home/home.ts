import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {NewLocationPage} from "../new-location/new-location";
import {LocationsService} from "../../services/locations.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  locations:{title:string}[] = [];

  constructor(public navCtrl: NavController , public loationsServices:LocationsService) {
  }


  ionViewWillEnter(){
    this.locations = this.loationsServices.getPlaces()
  }


  onClickAddLocation(){
    this.navCtrl.push(NewLocationPage)
  }

}
