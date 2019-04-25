import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the GpsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gps',
  templateUrl: 'gps.html',
})
export class GpsPage {
 //gps variables
 longitudeOut : Number;
 latitudeOut: Number;
 longitudeCurrent: Number;
 latitudeCurrent: Number;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
   //get GPS location
   this.geolocation.getCurrentPosition().then((resp) => {

    //variables for location
    this.longitudeCurrent = resp.coords.longitude;
    this.latitudeCurrent = resp.coords.latitude;
    this.longitudeOut = Number(this.longitudeCurrent.toFixed(3));
    this.latitudeOut = Number(this.latitudeCurrent.toFixed(3));
    }).catch((error) => {
      
      console.log('You are lost', error);
    });
  }

}
