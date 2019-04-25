import { Component } from '@angular/core';

import { FlashlightPage } from '../flashlight/flashlight';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {WeatherPage} from '../weather/weather';
@Component({
  templateUrl: 'tabs.html'
})


export class TabsPage {
 /**
    *   calling pages via tabRoot
    */
  tab1Root = HomePage;
  tab2Root = WeatherPage;
  tab3Root = FlashlightPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
