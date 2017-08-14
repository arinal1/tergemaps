import { Component } from '@angular/core';

import { ModalController, NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';
import { TempatPage } from '../tempat/tempat';
import { PlacesService } from '../../services/places.service';
import { Place } from '../../model/place.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: {title: String}[] = [];

  constructor(
   public navCtrl: NavController,
   private placesService: PlacesService,
   private modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
  	this.placesService.getPlaces()
  		.then(
  			(places) => this.places = places 
  		);
  }

  onLoadFirstPage() {
  	this.navCtrl.push(FirstPage)
  }

  onOpenPlace(place: Place) {
  	this.modalCtrl.create(TempatPage, place).present();
  }
}
