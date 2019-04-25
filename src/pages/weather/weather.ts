import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{WeatherproProvider} from '../../providers/weatherpro/weatherpro';
/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})

/**
    *   Show weather and then enter city name 
    */
export class WeatherPage {
weather:any=[];
city:String;
  constructor(public navCtrl: NavController, public navParams: NavParams, private weath:WeatherproProvider) {
  }

  search() {
    this.weath.getWeather(this.city).subscribe(data =>{this.weather = data.weather;});
  }

}
