import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { CartModuleProvider } from '../../providers/cart-module/cart-module';

@Component({
  selector: 'page-wishlist ',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private cartProvider: CartModuleProvider, private modalCtrl: ModalController) {

  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
  getListCart() {
    this.cartProvider.getCart();
  }

  
    cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }
  

}
