import { Component } from '@angular/core';
import { NavController, MenuController, Events } from 'ionic-angular';

import { VerificationPage } from '../verification/verification';
import { UsersModuleProvider } from '../../providers/users-module/users-module';
import { AlertsModuleProvider } from '../../providers/alerts-module/alerts-module';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecoveryPage } from '../recovery/recovery';


@Component({
  selector: 'page-password ',
  templateUrl: 'password.html'
})
export class PasswordPage {
  types:string = 'password';
  user: any = [];
  form: FormGroup;
  constructor(public navCtrl: NavController,
              public userProvider: UsersModuleProvider,
              private alerts: AlertsModuleProvider,
              public fb: FormBuilder,
              public menuCtrl: MenuController,
              private events: Events) 
              {
               this.initForm();
              }

  verificationPage(){
    this.navCtrl.push(VerificationPage);
    }

    login(){
    let load = this.alerts.loading('Iniciando sesion...')
    load.present();
      this.userProvider.SignIn(this.user).subscribe(
        data =>{
          console.log('hola',data);
          load.dismiss();
          this.userProvider.refresh_Headers(data);
          this.menuCtrl.enable(false, 'unauthenticated');
          this.menuCtrl.enable(true, 'authenticated');
          this.events.publish("userLogin");
          console.log(this.user)
         /*  this.user = JSON.parse(data['_body']).data.attributes;; */
          this.navCtrl.setRoot(HomePage);
        },
        error =>   {
          load.dismiss();
          this.alerts.toast("Credenciales invalidas. Por favor intente de nuevo.", 3000, 'top');
        }
      );
    }

    type(){
      if(this.types == 'password'){
        this.types = 'text';
      }else {
        this.types = 'password';
      }
    }
    recoveryPass(){
      this.navCtrl.push(RecoveryPage);
    }

 initForm(){
  this.form = this.fb.group({
    email:  ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.minLength(6)])],
    password: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/), Validators.minLength(6), Validators.required]]
  });
}

removeSpaces(email){
 this.user.password = email.replace(/\s/g,'');
} 

}
