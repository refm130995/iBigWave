import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-country',
  templateUrl: 'country.html',
})
export class CountryPage {
  newCountry:string = this.navParams.get('country');
  country:string = this.navParams.get('country');
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
  }

  select(){
    console.log(this.newCountry)
  }
  dismiss(){
    this.viewCtrl.dismiss({country : this.newCountry});
  }
}
