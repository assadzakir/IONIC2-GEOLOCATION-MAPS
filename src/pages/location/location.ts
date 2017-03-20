import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Location page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {
  lng: number;
  lat: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.lat = this.navParams.data.location.lat;
    this.lng = this.navParams.data.location.lng

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

}
