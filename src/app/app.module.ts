import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PhonenumberPage } from '../pages/phonenumber/phonenumber';
import { PasswordPage } from '../pages/password/password';
import { VerificationPage } from '../pages/verification/verification';
import { CreateaccountPage } from '../pages/createaccount/createaccount';
import { CategoryPage } from '../pages/category/category';
import { ShirtsPage } from '../pages/shirts/shirts';
import { ItemdetailPage } from '../pages/itemdetail/itemdetail';
import { ShippiningPage } from '../pages/shippining/shippining';
import { PaymentPage } from '../pages/payment/payment';
import { PlacedPage } from '../pages/placed/placed';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { My_accountPage } from '../pages/my_account/my_account';
import { Myorder_1Page } from '../pages/myorder_1/myorder_1';
import { Myorder_2Page } from '../pages/myorder_2/myorder_2';
import { HelpPage } from '../pages/help/help';
import { CartPage } from '../pages/cart/cart';
import { ReviewPage } from '../pages/review/review';
import { ShortPage } from '../pages/short/short';
import { SearchPage } from '../pages/search/search';
import { FilterPage } from '../pages/filter/filter';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Globalization } from '@ionic-native/globalization';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { APP_CONFIG, BaseAppConfig } from "./app.config";
import { UsersModuleProvider } from '../providers/users-module/users-module';
import { CountryPage } from '../pages/country/country';
import { IonicStorageModule } from '@ionic/storage';
import { AlertsModuleProvider } from '../providers/alerts-module/alerts-module';
import { Angular2TokenService,A2tUiModule } from 'angular2-token';
import { HttpModule } from '@angular/http';
import { TabPage } from '../pages/tab/tab';
import { PymesPage } from '../pages/pymes/pymes';
import { SellersPage } from '../pages/sellers/sellers';
import { IndependientsPage } from '../pages/independients/independients';
import { PymesModuleProvider } from '../providers/pymes-module/pymes-module';
import { SellersModuleProvider } from '../providers/sellers-module/sellers-module';
import { ProductsPage } from '../pages/products/products';
import { ProductsProvider } from '../providers/products/products';
import { Diagnostic } from '@ionic-native/diagnostic';
import { GpsProvider } from '../providers/gps/gps';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
import { ChatPage } from '../pages/chat/chat';
import { MessagesPage } from '../pages/messages/messages';
import { NotificationsPage } from '../pages/notifications/notifications';
import { RecoveryPage } from '../pages/recovery/recovery';
import { SavePymesPage } from '../pages/save-pymes/save-pymes';
import { SaveIndependientsPage } from '../pages/save-independients/save-independients';
import { SaveSellersPage } from '../pages/save-sellers/save-sellers';
import { IndependientsModuleProvider } from '../providers/independients-module/independients-module';
import { FiltersModuleProvider } from '../providers/filters-module/filters-module';
import { WishesModuleProvider } from '../providers/wishes-module/wishes-module';
import { CartModuleProvider } from '../providers/cart-module/cart-module';
import { NotificationsModuleProvider } from '../providers/notifications-module/notifications-module';
import { FollowsModuleProvider } from '../providers/follows-module/follows-module';
import { MapPage } from '../pages/map/map';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PhonenumberPage,
    PasswordPage,
    VerificationPage,
    CreateaccountPage,
    CategoryPage,
    ShirtsPage,
    ItemdetailPage,
    ShippiningPage,
    PaymentPage,
    PlacedPage,
    WishlistPage,
    My_accountPage,
    Myorder_1Page,
    Myorder_2Page,
    HelpPage,
    CartPage,
    ReviewPage,
    ShortPage,
    SearchPage,
    FilterPage,
    CountryPage,
    TabPage,
    PymesPage,
    SellersPage,
    IndependientsPage,
    ProductsPage,
    ChatPage,
    MessagesPage,
    NotificationsPage,
    RecoveryPage,
    SavePymesPage,
    SaveIndependientsPage,
    SaveSellersPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonIcon: 'ios-arrow-back',
      iconMode: 'ios',
      pageTransition: 'ios-transition',
      menuType: 'reveal'
    }),
    HttpClientModule,
    HttpModule,
    A2tUiModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot({
      name: 'iBigWave',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PhonenumberPage,
    PasswordPage,
    VerificationPage,
    CreateaccountPage,
    CategoryPage,
    ShirtsPage,
    ItemdetailPage,
    ShippiningPage,
    PaymentPage,
    PlacedPage,
    WishlistPage,
    My_accountPage,
    Myorder_1Page,
    Myorder_2Page,
    HelpPage,
    CartPage,
    ReviewPage,
    ShortPage,
    SearchPage,
    FilterPage,
    CountryPage,
    TabPage,
    PymesPage,
    SellersPage,
    IndependientsPage,
    ProductsPage,
    ChatPage,
    MessagesPage,
    NotificationsPage,
    RecoveryPage,
    SavePymesPage,
    SaveIndependientsPage,
    SaveSellersPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Globalization,
    { provide: APP_CONFIG, useValue: BaseAppConfig },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersModuleProvider,
    AlertsModuleProvider,
    Angular2TokenService,
    PymesModuleProvider,
    SellersModuleProvider,
    ProductsProvider,
    Diagnostic,
    GpsProvider,
    NativeGeocoder,
    Geolocation,
    IndependientsModuleProvider,
    FiltersModuleProvider,
    WishesModuleProvider,
    CartModuleProvider,
    NotificationsModuleProvider,
    FollowsModuleProvider,
    ImagePicker,
    Camera
  ]
})
export class AppModule {}
