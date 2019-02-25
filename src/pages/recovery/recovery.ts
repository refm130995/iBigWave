import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersModuleProvider } from '../../providers/users-module/users-module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '../../models/user.model';
import { AlertsModuleProvider } from '../../providers/alerts-module/alerts-module';

@IonicPage()
@Component({
  selector: 'page-recovery',
  templateUrl: 'recovery.html',
})
export class RecoveryPage {
  user: UserModel = new UserModel;
  form: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UsersModuleProvider, public fb: FormBuilder, private alert: AlertsModuleProvider) {
    this.initForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoveryPage');
  }
  recovery(){
  let loading = this.alert.loading('Recuperando contraseña...');
  loading.present();
    this.userProvider.recoveryPass(this.user).subscribe(
      data =>{
        console.log(data);
        loading.dismiss();
        this.alert.alert('Enviado', 'Verifique su correo.')
      },
      error =>   {
        loading.dismiss();
        console.log(error)
        this.alert.toast("Credenciales invalidas. Por favor intente de nuevo.", 3000, 'top');
      }
    );
  }
  initForm(){
    this.form = this.fb.group({
      email:  ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.minLength(6)])]
    });
  }
}
