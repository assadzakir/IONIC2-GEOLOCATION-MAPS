import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LocationsService} from "../../services/locations.service";

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

  constructor(public navCtrl: NavController, public navParams: NavParams , public locationsService:LocationsService) {}

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad NewLocationPage');
  // }

  onAddPlace(value:{title:string}){
    this.locationsService.addPlace(value)
    this.navCtrl.pop()
  }

}
