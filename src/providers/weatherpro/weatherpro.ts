import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the WeatherproProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherproProvider {
  constructor(public http: HttpClient) {
    console.log('Hello WeatherproProvider Provider');
  }
  getWeather(city:String): Observable<any>{
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=8f43db8e13aa8c74c3ab22f60f5efb76");

  }

}
