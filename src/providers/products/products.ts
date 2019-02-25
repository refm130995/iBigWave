import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { routes } from '../routes';
import { Angular2TokenService } from 'angular2-token';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  constructor(public http: HttpClient,
              private _tokenService: Angular2TokenService) {
    console.log('Hello ProductsProvider Provider');
  }

  homeSuggest() {
    return  this._tokenService.get(routes.home(30));
  }
  
}
