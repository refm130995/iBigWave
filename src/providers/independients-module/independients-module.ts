import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { independientsModel } from '../../models/independients.model';
import { Angular2TokenService } from 'angular2-token';
import { routes } from '../routes';
import { UsersModuleProvider } from '../users-module/users-module';
import { Observable } from 'rxjs';


@Injectable()
export class IndependientsModuleProvider {
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(public http: HttpClient,
    private _tokenService: Angular2TokenService,
    private userProvider: UsersModuleProvider) {
      this.initHeaders();
  }

  createIndependient( independient: independientsModel ) {
    let params= {"profile": independient}
        return this._tokenService.post(routes.independentsCreate(), params).map(res => res)
}
getIndependients() : Observable<any> {
  return this._tokenService.get(routes.independents());
}

  initHeaders(){
    this.userProvider.check_storage('headers').then((data)=> {
      this._options.headers['access-token'];
      this._options.headers.append('uid', data.uid);
      this._options.headers.append('client', data.client);
    })
  }
  getFollowing() {
    return this._tokenService.get(routes.following("independents"));
  }
}
