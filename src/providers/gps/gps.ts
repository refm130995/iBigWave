import { Injectable } from '@angular/core';
import { Diagnostic } from '@ionic-native/diagnostic';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { routes } from '../routes';
@Injectable()
export class GpsProvider {

  constructor(private diagnostic: Diagnostic,
    private nativeGeocoder: NativeGeocoder,
    private geolocation: Geolocation,
    private storage: Storage,
    private http: HttpClient) {

  }

  async isLocationAuthorized() {
    let GpsLocationEnabled = await this.diagnostic.isLocationAuthorized();
    if (GpsLocationEnabled) {
      return GpsLocationEnabled;
    } else {
      return false
    }
  }
  async isLocationEnabled() {
    let isAvailable = await this.diagnostic.isLocationEnabled();
    if (isAvailable) {
      return isAvailable;
    } else {
      return false
    }
  }
  async isGpsLocationAvailable() {
    let isGpsLocationAvailable = await this.diagnostic.isGpsLocationAvailable()
    if (isGpsLocationAvailable) {
      return isGpsLocationAvailable;
    } else {
      return false
    }
  }

  get_address() {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.geolocation.getCurrentPosition().then((resp) => {
      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
        .then((result: NativeGeocoderReverseResult[]) => {

          let address = result[0];
          this.storage.set('country', address.countryName);
          return address.countryName;
        })
        .catch((error: any) => console.log(error));
    })
  }
  
  getExistentCountry() {
    return this.storage.get('country');
  }
  GetUbications(lat: string, lng: string, newCategories, q, radio): Observable < any > {
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
    return this.http.post(routes.geolocation(), params).map(res => res);
  }
  }
