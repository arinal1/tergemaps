import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-tempat',
  templateUrl: 'tempat.html',
})
export class TempatPage {
  lat: Number;
  lng: Number;

  constructor( private viewCtrl: ViewController, private navParams: NavParams) {
  	this.lat = this.navParams.data.location.lat;
  	this.lng = this.navParams.data.location.lng;
  }

  onDismiss() {
  	this.viewCtrl.dismiss();
  }

}
