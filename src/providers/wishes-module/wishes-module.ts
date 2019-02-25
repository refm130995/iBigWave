import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { routes } from '../routes';


@Injectable()
export class WishesModuleProvider {

  constructor(public http: HttpClient,   private _tokenService: Angular2TokenService) {
    
  }

  getWishes() {
    this._tokenService.get(routes.listWish());
  }
}
