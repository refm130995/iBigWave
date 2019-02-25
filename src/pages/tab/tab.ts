import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  Root1 = HomePage;
  Root2 = MapPage;

  constructor(public navCtrl: NavController) {}

}
