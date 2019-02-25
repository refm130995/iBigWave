import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';
import { GpsProvider } from '../../providers/gps/gps';


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  country?:any = 'Venezuela';
  segment?:string = 'message';
  constructor(public navCtrl: NavController, public navParams: NavParams,  public modalCtrl: ModalController, public gps: GpsProvider, private platform: Platform) {
  }

  ionViewDidLoad() {  
    this.getCountry();
  }
  messagesPage(){
    this.navCtrl.push(MessagesPage);
  }
  getCountry(){
    if(this.platform.is('cordova')){
      this.country = this.gps.get_address();
    }
  }
}
