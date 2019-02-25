import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { CartModuleProvider } from '../../providers/cart-module/cart-module';

@Component({
  selector: 'page-cart ',
  templateUrl: 'cart.html'
})
export class CartPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private cartProvider: CartModuleProvider) {

  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
  getListCart() {
    this.cartProvider.getCart();
  }
}
