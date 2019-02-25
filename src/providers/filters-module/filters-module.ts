import {  HttpClient,  HttpHeaders,  HttpParams} from '@angular/common/http';
import {  Injectable} from '@angular/core';
import {  Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {  Angular2TokenService} from 'angular2-token'
import { routes } from '../routes';
@Injectable()
export class FiltersModuleProvider {

  constructor(
    public http: HttpClient,
    private _tokenService: Angular2TokenService
  ) {

    console.log('Hello BigwaveProvider Provider');
  }

  pymes(currentHeaders: {
    'access-token': string,
    'uid': string,
    'client': string
  }): Observable < any > {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
      'access-token': currentHeaders['access-token'],
      'uid': currentHeaders.uid,
      'client': currentHeaders.client
    });

    console.log(currentHeaders)
    return this.http.get(routes.pymes(), {
      headers: headers,
      observe: 'response'
    });
  }

  sellers(currentHeaders: {
    'access-token': string,
    'uid': string,
    'client': string
  }): Observable < any > {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
      'access-token': currentHeaders['access-token'],
      'uid': currentHeaders.uid,
      'client': currentHeaders.client
    });

    console.log(currentHeaders)
    return this.http.get(routes.sellers(), {
      headers: headers,
      observe: 'response'
    });
  }

  independents(currentHeaders: {
    'access-token': string,
    'uid': string,
    'client': string
  }): Observable < any > {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
      'access-token': currentHeaders['access-token'],
      'uid': currentHeaders.uid,
      'client': currentHeaders.client
    });


    console.log(currentHeaders)
    return this.http.get(routes.independents(), {
      headers: headers,
      observe: 'response'
    });
  }

  allcategories(currentHeaders: {
    'access-token': string,
    'uid': string,
    'client': string
  }): Observable < any > {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
      'access-token': currentHeaders['access-token'],
      'uid': currentHeaders.uid,
      'client': currentHeaders.client
    });


    console.log(currentHeaders)
    return this.http.get(routes.categories(), {
      headers: headers,
      observe: 'response'
    });
  }

  geololization(lat: string, lng: string, newCategories, q, radio): Observable < any > {
    let params = {
      q: q,
      radio: radio,
      user: [
        lat,
        lng
      ],
      categories: newCategories
    }
    console.log(params)
    return this._tokenService.post(routes.geolocation(), params).map(res => res);
  }
  
  createWish(parameters): Observable < any > {
    let wish: {
      name: "Mi segudno deseo",
      description: "description",
      budget: 12000,
      wisheable_id: 1,
      wisheable_type: "product"
     }
    console.log(wish)
    return this._tokenService.post(routes.createWish(), wish).map(res => res);
  }
  listWish(parameters): Observable < any > {
    let params = parameters
    console.log(params)
    return this._tokenService.post(routes.listWish(), params).map(res => res);
  }
  direccion(data: {title: string}): Observable<any>{
    
    let headers2 = {
      'Content-Type': 'application/json'
    };

    let headers =new HttpHeaders();
    console.log(headers)
    var url='https://maps.googleapis.com/maps/api/geocode/json?address='+data.title+'&key=AIzaSyC6bA0tzMkWviWEpFnjQxEF0U5I_Kd2il0'
              
    return this.http.get(url, { headers: headers, observe: 'response' });
  }
}
