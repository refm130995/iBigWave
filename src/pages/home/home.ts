import { Component, ComponentDecorator } from '@angular/core';
import { NavController, ModalController, Events } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { WishlistPage } from '../wishlist/wishlist';
import { CountryPage } from '../country/country';
import { AlertsModuleProvider } from '../../providers/alerts-module/alerts-module';
import { PymesPage } from '../pymes/pymes';
import { IndependientsPage } from '../independients/independients';
import { SellersPage } from '../sellers/sellers';
import { ProductsPage } from '../products/products';
import { UsersModuleProvider } from '../../providers/users-module/users-module';
import { GpsProvider } from '../../providers/gps/gps';
import { SavePymesPage } from '../save-pymes/save-pymes';
import { SaveIndependientsPage } from '../save-independients/save-independients';
import { SaveSellersPage } from '../save-sellers/save-sellers';
import { ProductsProvider } from '../../providers/products/products';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;
  country?:any = 'Chile';
  sellers: any = [];
  products: any = [];
  independients: any = [];
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController, 
              private alert: AlertsModuleProvider, 
              public userProvider: UsersModuleProvider, 
              private gps: GpsProvider, 
              private product: ProductsProvider,
              private event: Events) {
    
  }
  ionViewDidLoad(){
    this.checkUser();
    this.getSuggest();
  }

   slides = [
    {
      title: "Zona de Tiendas",
      description: "Descubre iBigWave",
      smalltext: "Consigue los mejores precios",
      image: "assets/imgs/slider1.jpg",
      button: "Crear Tienda",
      component: SavePymesPage,
      color: "primary"
    },
    {
      title: "Zona de Profesionales",
      description: "Descubre iBigWave",
      smalltext: "Consigue los mejores precios",
      image: "assets/imgs/slider2.jpg",
      button: "Crear Profesional",
      component: SaveIndependientsPage,
      color: "secondary"
    },
    {
      title: "Zona de Seller",
      description: "Descubre iBigWave",
      smalltext: "Consigue los mejores precios",
      image: "assets/imgs/slider3.jpg",
      button: "Deseo Vender",
      component: SaveSellersPage,
      color: "danger"
    }
  ];
  
   categoryPage(){
    this.navCtrl.push(CategoryPage);
    }
    wishlistPage(){
    this.navCtrl.push(WishlistPage);
    }
    
    searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }
  
   cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }
  
  goListPymes(){
    this.navCtrl.push(PymesPage);
  }

  goListIndependients(){
    this.navCtrl.push(IndependientsPage);
  }

  goListSellers(){
    this.navCtrl.push(SellersPage);
  }

  selectCountry() {
    let modal = this.modalCtrl.create(CountryPage,{
      country : this.country
    });

    modal.onDidDismiss((data) => {
    this.country = data.country;
  })
    modal.present();
  }
  goListProducts(){
    this.navCtrl.push(ProductsPage);
  }

  checkUser(){
   this.event.publish('userLogin');
  }
/* 
  getCountry(){
    this.country = this.gps.get_address();
  } */

  goSave(component:ComponentDecorator) {
    this.navCtrl.push(component);
  }
  getSuggest() {
    this.product.homeSuggest().subscribe( (resp)=> {
      this.sellers = JSON.parse(resp['_body']).data.sellers_by_followers.slice(0, 6);
      console.log('Sellers::::', this.sellers)
      this.products = JSON.parse(resp['_body']).data.products_by_created_at.slice(0, 6);
      console.log('Products::::', this.products)
      this.independients = JSON.parse(resp['_body']).data.independents_by_created_at.slice(0, 6);
      console.log('independientes::::', this.independients)
    } )
  }
  chunks(array, size) {
    let results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  }

}
