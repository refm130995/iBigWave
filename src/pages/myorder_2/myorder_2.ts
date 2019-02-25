import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';


import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
@Component({
  selector: 'page-myorder_2 ',
  templateUrl: 'myorder_2.html'
})
export class Myorder_2Page {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  
     cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }
  
     searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }

}
