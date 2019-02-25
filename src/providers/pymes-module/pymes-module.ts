import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { routes } from '../routes';
import { shopModel } from '../../models/shop.model';
import { UsersModuleProvider } from '../users-module/users-module';
import { Observable } from 'rxjs';


@Injectable()
export class PymesModuleProvider {
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(public http: HttpClient,
              private _tokenService: Angular2TokenService,
              private userProvider: UsersModuleProvider) {
      this.initHeaders();
  }

  getPymes() : Observable<any> {
    return this._tokenService.get(routes.pymes());
  }

  createPyme( pyme: shopModel ){
    let params= {"profile": pyme}
    return this._tokenService.post(routes.pymesCreate(), params );
  }

  initHeaders(){
    this.userProvider.check_storage('headers').then((data)=> {
      this._options.headers['access-token'];
      this._options.headers.append('uid', data.uid);
      this._options.headers.append('client', data.client);
    })
  }
  getFollowing() {
    return this._tokenService.get(routes.following("pymes"));
  }
}
