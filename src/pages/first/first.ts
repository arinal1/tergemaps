import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacesService } from '../../services/places.service';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-first',
  templateUrl: 'first.html'
})
export class FirstPage {
  location: {lat: Number, lng: Number} = {lat: 0, lng: 0};

  constructor(
    private placesService: PlacesService,
    public navCtrl: NavController,
    private geolocation: Geolocation
  ) {}
  
  onAddPlace(value: {title: String}){
	this.placesService.addPlace({title: value.title, location: this.location});
	this.navCtrl.pop();
  }

  onLocateUser() {
  	this.geolocation.getCurrentPosition()
  		.then(
  			(location) => {
  				console.log('Location fetched successfully');
  				this.location.lat = location.coords.latitude;
  				this.location.lng = location.coords.longitude;
          console.log(this.location.lat,this.location.lng);
  			}
  		)
  		.catch(
  			(error) => console.log('An error occured')
  		);
  }
}
