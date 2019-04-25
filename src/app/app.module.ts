import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import{GpsPage} from '../pages/gps/gps';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import{WeatherPage} from '../pages/weather/weather';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherproProvider } from '../providers/weatherpro/weatherpro';
import {HttpClientModule} from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    WeatherPage,
    GpsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    WeatherPage,
    GpsPage
  ],
  // Native
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherproProvider,
    Geolocation
  ]
})
export class AppModule {}
