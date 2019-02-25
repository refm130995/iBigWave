import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { ShippiningPage } from '../shippining/shippining';
@Component({
  selector: 'page-itemdetail ',
  templateUrl: 'itemdetail.html'
})
export class ItemdetailPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }
  
   shippiningPage() {
    this.navCtrl.push(ShippiningPage);
  }
  
    cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }
}
