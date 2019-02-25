import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { UsersModuleProvider } from '../../providers/users-module/users-module';
import { UserModel } from '../../models/user.model';
import { AlertsModuleProvider } from '../../providers/alerts-module/alerts-module';
import { PasswordPage } from '../password/password';



@Component({
  selector: 'page-createaccount',
  templateUrl: 'createaccount.html'
})
export class CreateaccountPage {
  types:string = 'password';
  user: UserModel = new UserModel;
  public form: FormGroup;
  constructor(public navCtrl: NavController,
              public userProvider: UsersModuleProvider,
              private alerts: AlertsModuleProvider,
              private fb: FormBuilder) {
 this.initForm();
              
  }
  
  homePage(){
    this.navCtrl.push(HomePage);
    }

    type(){
      if(this.types == 'password'){
        this.types = 'text';
      }else {
        this.types = 'password';
      }
    }
    register() {
      this.userProvider.SignUp(this.user).subscribe(
        data =>      {
         this.alerts.alert('Enhorabuena', 'Registro exitoso');
         this.navCtrl.push(PasswordPage)
        },
        error =>   {
          console.log(error);
          if(error['status'] == 422){
            this.alerts.alert('Alerta', 'El correo ya está tomado');
          }else{
            this.alerts.alert('Alerta', 'Ha ocurrido un error');
          }
        }
      );
    }
    

    initForm(){
      this.form = this.fb.group({
        email:  ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.minLength(6)])],
        password: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/), Validators.minLength(6), Validators.required]]
      });
    }
    
    removeSpaces(email:string){
     this.user.password = email.replace(/\s/g,'');
    } 
    
}
