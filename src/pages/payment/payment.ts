import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { PlacedPage } from '../placed/placed';
@Component({
  selector: 'page-payment ',
  templateUrl: 'payment.html'
})
export class PaymentPage {
  constructor(public navCtrl: NavController) {
  }  


  placedPage() {
    this.navCtrl.push(PlacedPage);
  }
}
