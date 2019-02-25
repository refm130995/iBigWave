import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GpsProvider } from '../../providers/gps/gps';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
  country?:any = 'Venezuela';
  constructor(public navCtrl: NavController, public navParams: NavParams, public gps: GpsProvider, private platform: Platform) {
  }

  ionViewDidLoad() {  
    this.getCountry();
  }

  getCountry(){
    if(this.platform.is('cordova')){
      this.country = this.gps.get_address();
    }
  }
}
