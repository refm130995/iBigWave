import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController, MenuController } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';

@Injectable()
export class AlertsModuleProvider {

  constructor(
              public alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private menuCtrl: MenuController) {}

  alert( title:string, message:string){
      let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
          }
        }
      ]
    });
    alert.present(); 
  }
  
  toast( message:string, duration: number = 3000, position:string ='top' ){
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    });
    toast.present() 
  }

  menu(id:string){
    this.menuCtrl.enable(true, id);
  }

  loading(content?:string){
    return this.loadingCtrl.create({content: content});
   }
}
