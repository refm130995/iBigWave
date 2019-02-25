import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { routes } from '../routes';
import { Angular2TokenService } from 'angular2-token';


@Injectable()
export class CartModuleProvider {

  constructor(public http: HttpClient,   private _tokenService: Angular2TokenService) {
    
  }

  getCart() {
    this._tokenService.get(routes.getCart());
  }

}
