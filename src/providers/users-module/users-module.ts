import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { routes } from './../routes';
import { UserModel } from '../../models/user.model';
import { Storage } from '@ionic/storage';
import { headersModel } from '../../models/headers.model';
import { Observable } from 'rxjs';
import { profileModel } from '../../models/profile.model';


@Injectable()
export class UsersModuleProvider {

  constructor(public http: HttpClient,
              private _tokenService: Angular2TokenService,
              private storage: Storage)
                {
                }


  SignIn(user: UserModel) {
    return this._tokenService.signIn({
      email: user.email,
      password: user.password
    });
  }
  
  SignUp(user: UserModel) {
    user.password_confirmation = user.password;
    console.log(user)
    return  this._tokenService.post(routes.registerUser(), user);
  }

  recoveryPass(user: UserModel) {
    return this._tokenService.post(routes.recover(), {email:user.email})
  }

  logOut(){
    return this._tokenService.delete(routes.sing_out());
  }

  refresh_Headers( data: any ) {
    let header = new headersModel();
    header.accessToken = data['headers'].get('access-token');
    header.client = data['headers'].get('client');
    header.uid = data['headers'].get('uid');
    data = JSON.parse(data['_body']);
    var user = JSON.stringify(data['data']);
    this.storage.set('headers', header);
    this.storage.set('user', user);
  }

  check_User(){
  return  this.storage.get('user');
  }
  check_storage( id:string ){
    return this.storage.get(id);
  }
  getCategories(){
    return this._tokenService.get(routes.categories());
  }
  getUser() : Observable<any> {
    return this._tokenService.get(routes.perfil());
  }
  saveProfile( profile: any ) : Observable <any> {
    return this._tokenService.put(routes.registerUser(), profile);
  }
}
