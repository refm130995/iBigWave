import { Component, ViewChild,Inject } from '@angular/core';
import { Nav, Platform, AlertController, ModalController, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PhonenumberPage } from '../pages/phonenumber/phonenumber';
import { CategoryPage } from '../pages/category/category';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { My_accountPage } from '../pages/my_account/my_account';
import { Myorder_1Page } from '../pages/myorder_1/myorder_1';
import { Myorder_2Page } from '../pages/myorder_2/myorder_2';
import { HelpPage } from '../pages/help/help';
import { CartPage } from '../pages/cart/cart';
import { ReviewPage } from '../pages/review/review'; 
import { APP_CONFIG, AppConfig } from './app.config';
import { TranslateService } from '../../node_modules/@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';
import { PasswordPage } from '../pages/password/password';
import { CreateaccountPage } from '../pages/createaccount/createaccount';
import { TabPage } from '../pages/tab/tab';
import { Storage } from '@ionic/storage';
import { AlertsModuleProvider } from '../providers/alerts-module/alerts-module';
import { Angular2TokenService } from 'angular2-token';
import { ROOT } from '../providers/routes';
import { ChatPage } from '../pages/chat/chat';
import { NotificationsPage } from '../pages/notifications/notifications';
import { UsersModuleProvider } from '../providers/users-module/users-module';
import { UserModel } from '../models/user.model';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabPage;
  pages: Array<{title: string, component: any}>;
  user:any = [];
  constructor(@Inject(APP_CONFIG) private config: AppConfig, private globalization: Globalization,
    public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public translate:TranslateService,
    public storage: Storage,
    private alertCtrl: AlertController,
    public alert: AlertsModuleProvider,
    public _tokenService: Angular2TokenService,
    public modalCtrl: ModalController,
    public userProvider: UsersModuleProvider,
    private menuCtrl: MenuController,
    public events: Events) {
      this.user.avatar = 'false';
      this.events.subscribe("userLogin", () => {
        this.checkLogin();
        console.log("events in component app", this.user)
      });
    this.initializeApp();
  }

  initializeApp() {
    this.translate.setDefaultLang('en');
    this.platform.ready().then(() => {
      this.checkLogin();
      this.statusBar.styleDefault();
      this.splashScreen.hide();

/*       if (this.platform.is('cordova')) {
        this.globalization.getPreferredLanguage().then(result => {
          console.log(result);
          let suitableLang = this.getSuitableLanguage(result.value);
          console.log(suitableLang);
          this.translate.use(suitableLang);
          this.setDirectionAccordingly(suitableLang);
        }).catch(e => {
          console.log(e);
          this.translate.use('es');
          this.platform.setDir('ltr', true);
        });


      } else { */
        this.translate.use('es');
        this.setDirectionAccordingly('es');
        // this.setDirectionAccordingly('ar');
/*       } */

    });
  }

  checkLogin() {
    this._tokenService.init({
      apiBase: ROOT
    });
    this.userProvider.getUser().subscribe( (resp)=> {
      this.user = JSON.parse(resp['_body']).data.attributes;
      if(!this.user.phone) {
        this.user.phone = 'N/A';
      }
      if(!this.user.avatar['url']){
        this.user.avatar = false;
      }else{
        this.user.avatar = this.user.avatar['url'];
      }
      this.menuCtrl.enable(true, 'authenticated');
      this.menuCtrl.enable(false, 'unauthenticated');
     },
     error => {
      if(error.status == 401){
        console.log(error);
        this.storage.remove('user');
        this.alert.alert('Alerta!',"Su sesión ha expirado.");
        this.menuCtrl.enable(false, 'authenticated');
        this.menuCtrl.enable(true, 'unauthenticated');
        this.user = null;
     }
     }
    )
  }
  setDirectionAccordingly(lang: string) {
    switch (lang) {
      case 'ar': {
        this.platform.setDir('ltr', false);
        this.platform.setDir('rtl', true);
        break;
      }
      default: {
        this.platform.setDir('rtl', false);
        this.platform.setDir('ltr', true);
        break;
      }
    }
  }

  setDirection() {
    console.log('plat rtl: ' + this.platform.isRTL);
    if (this.platform.isRTL) {
      this.platform.setDir('rtl', true);
    } else {
      this.platform.setDir('ltr', true);
    }
  }

  getSideOfCurLang() {
    return this.platform.dir() === 'rtl' ? "right" : "left";
  }

  getSuitableLanguage(language) {
    language = language.substring(0, 2).toLowerCase();
    console.log('check for: ' + language);
    return this.config.availableLanguages.some(x => x.code == language) ? language : 'en';
  }
  
  myorder_1Page() {
    this.nav.setRoot(Myorder_1Page);
  }
  myorder_2Page() {
    this.nav.setRoot(Myorder_2Page);
  }
  
  my_accountPage() {
    this.nav.setRoot(My_accountPage);
  }
  
   categoryPage() {
    this.nav.setRoot(CategoryPage);
  }
  
   homePage() {
    this.nav.setRoot(TabPage);
  }
  
  reviewPage() {
    this.nav.setRoot(ReviewPage);
  }
  loginPage() {
    this.nav.push(PasswordPage);
  }

  wishlistPage() {
    this.nav.setRoot(WishlistPage);
  }
  
  cartPage() {
    this.nav.setRoot(CartPage);
  }
  
  helpPage() {
    this.nav.setRoot(HelpPage);
  }

  registerPage() {
    this.nav.push(CreateaccountPage);
  }
  
  phonenumberPage() {
    this.nav.setRoot(PhonenumberPage);
  }

  chatPage() {
    this.nav.setRoot(ChatPage);
  }

  notificationPage(){
    let modal = this.modalCtrl.create(NotificationsPage);
    modal.present();
  }

  logout() {
    let confirm = this.alertCtrl.create({
      message: '¿Estas seguro que quieres cerrar sesión?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            let loading = this.alert.loading('Cerrando sesión...');
            this.storage.remove('user');
            this.userProvider.logOut().subscribe(() => {
              loading.present().then(() => {
                this.alert.alert('Alerta!',"Cierre de sesión exitoso");
                this.menuCtrl.enable(false, 'authenticated');
                this.menuCtrl.enable(true, 'unauthenticated');
                this.user = null;
                loading.dismiss();
              });
            });
          }
        }
      ]
    });
    confirm.present();    
  }
}
