import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { ShirtsPage } from '../shirts/shirts';
import { CartPage } from '../cart/cart';
@Component({
  selector: 'page-category ',
  templateUrl: 'category.html'
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  
searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }
  
  shirtsPage() {
    let modal = this.modalCtrl.create(ShirtsPage);
    modal.present();
  }
  
  cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }

}
