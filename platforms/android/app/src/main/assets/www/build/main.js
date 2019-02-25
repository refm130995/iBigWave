webpackJsonp([9],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routes; });
var ROOT = 'https://bigwave-api.herokuapp.com/v1';
//export const ROOT = 'https://bigwave.herokuapp.com/v1';
var routes = {
    login: function (email, pass) {
        return "auth/sign_in?email=" + email + "&password=" + pass;
    },
    sing_out: function () {
        return "auth/sign_out";
    },
    registerUser: function () {
        return "auth";
    },
    recover: function () {
        return "auth/password";
    },
    registerUser2: function () {
        return ROOT + "/auth";
    },
    perfil: function () {
        return "users/current";
    },
    pymes: function () {
        return "pymes";
    },
    pymesCreate: function () {
        return "pymes/create";
    },
    sellers: function () {
        return "sellers";
    },
    sellersCreate: function () {
        return "sellers/create";
    },
    sellersShow: function () {
        return "sellers/own";
    },
    independents: function () {
        return "independents";
    },
    independentsCreate: function () {
        return "independents/create";
    },
    categoriesFilter: function () {
        return "profiles/categories";
    },
    categories: function () {
        return "profiles/categories";
    },
    productsAll: function () {
        return 'products/all';
    },
    geolocation: function () {
        return "geolocation/look_for";
    },
    follow: function (type, profile) {
        return "current_user/follow/" + type + "/" + profile;
    },
    unfollow: function (type, profile) {
        return "current_user/unfollow/" + type + "/" + profile;
    },
    following: function (type) {
        return "current_user/following/" + type;
    },
    productsProfile: function (type, profile) {
        return type + "/" + profile + "/products";
    },
    getProducts: function (type, profile, product) {
        return type + "/" + profile + "/products/" + product;
    },
    createWish: function () {
        return "wishes/create";
    },
    deleteWish: function (id) {
        return "wishes/" + id + "/destroy";
    },
    listWish: function () {
        return "wishes/my_wishes";
    },
    searchs: function (q, category) {
        return "searchs?q=" + q + "&categories=" + category;
        //return `searchs`
    },
    addCart: function (product) {
        return "shopping_carts/add_product/" + product;
    },
    getCart: function () {
        return "shopping_carts/current_user";
    },
    deleteCart: function (product) {
        return "shopping_carts/multiple_remove?items=" + product;
    },
    quote_items: function () {
        return "shopping_carts/quote_items";
    },
    createConversations: function () {
        return "conversations/create";
    },
    createConversations2: function (type) {
        return "conversations/create?type_messages=" + type;
    },
    newMessages: function (messages) {
        return "messages/" + messages + "/create";
    },
    myConversations: function () {
        return "conversations/my_conversations";
    },
    make_read: function (conversation, messages) {
        return "messages/" + conversation + "/make_read?messages=" + messages;
    },
    users: function () {
        return "users";
    }
};
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shirts_shirts__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryPage = (function () {
    function CategoryPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    CategoryPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    CategoryPage.prototype.shirtsPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__shirts_shirts__["a" /* ShirtsPage */]);
        modal.present();
    };
    CategoryPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-category ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\category\category.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png" style="width: 100%"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"fashion" | translate}}\n\n            <span float-right> \n\n              <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>     \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="man-fashion">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <img src="assets/imgs/man-fashion.png">\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <h6 class="text-white">MEN\'S FASHION</h6>\n\n                <p class="text-white" (click)="shirtsPage()">Shirts\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Tshirts\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Jens\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Trousers\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n\n\n    <div class="girl-fashion">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <img src="assets/imgs/girl-fashion.png">\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <h6 class="text-white">WOMEN\'S FASHION</h6>\n\n                <p class="text-white">Western Wear\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Sarees\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Kurtis\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Lingerie\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n\n\n    <div class="kids-fashion">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <img src="assets/imgs/kid-fashion.png">\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <h6 class="text-white">KIDS\'S FASHION</h6>\n\n                <p class="text-white">Boy\'s Wear\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Girl\'s Wear\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Baby Wear\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Baby Girl\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\category\category.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_module_users_module__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alerts_module_alerts_module__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__password_password__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateaccountPage = (function () {
    function CreateaccountPage(navCtrl, userProvider, alerts, formBuilder) {
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.alerts = alerts;
        this.formBuilder = formBuilder;
        this.types = 'password';
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* UserModel */];
        this.user.email = 'refm12@gmail.com';
        this.user.nickname = 'asdasdasd';
        this.user.name = 'Ramon Figuera';
        this.user.password = '8934554123a';
        this.register();
    }
    CreateaccountPage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CreateaccountPage.prototype.type = function () {
        if (this.types == 'password') {
            this.types = 'text';
        }
        else {
            this.types = 'password';
        }
    };
    CreateaccountPage.prototype.register = function () {
        var _this = this;
        this.userProvider.SignUp(this.user).subscribe(function (data) {
            _this.alerts.alert('Enhorabuena', 'Registro exitoso');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__password_password__["a" /* PasswordPage */]);
        }, function (error) {
            console.log(error);
            if (error['status'] == 422) {
                _this.alerts.alert('Alerta', 'El correo ya está tomado');
            }
            else {
                _this.alerts.alert('Alerta', 'Ha ocurrido un error');
            }
        });
    };
    CreateaccountPage.prototype.initForm = function () {
        this.form = this.formBuilder.group({});
    };
    CreateaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-createaccount',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\createaccount\createaccount.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n    <ion-title>{{"create_account" | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="form" padding-left padding-right>\n\n    <p text-center padding-bottom margin-bottom>{{"sign_up_label" | translate}}</p>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{"phone" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="+91 903 335 6708"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"full_name" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="Jhon Smith"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"email" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="jhonsmith8994@gmail.com"></ion-input>\n\n      </ion-item>\n\n      <div class="d-flex">\n\n          <ion-item>\n\n            <ion-label>{{"login_box2" | translate}}</ion-label>\n\n            <ion-input type={{types}} text-right ></ion-input>\n\n          </ion-item>\n\n          <ion-icon name="ios-eye-outline" class="text-light eye-icon" [class.active]="types == \'text\'" (click)="type()"></ion-icon>\n\n        </div>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="homePage()">{{"continue" | translate}}</button>\n\n    <p text-center>\n\n      <small>\n\n        {{"tnc_prelabel" | translate}} \n\n        <span class="text-sky"> {{"tnc" | translate}} </span>\n\n      </small>\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\createaccount\createaccount.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_users_module_users_module__["a" /* UsersModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]])
    ], CreateaccountPage);
    return CreateaccountPage;
}());

//# sourceMappingURL=createaccount.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_messages__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_gps_gps__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, modalCtrl, gps, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.gps = gps;
        this.platform = platform;
        this.country = 'Venezuela';
        this.segment = 'message';
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        this.getCountry();
    };
    ChatPage.prototype.messagesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__messages_messages__["a" /* MessagesPage */]);
    };
    ChatPage.prototype.getCountry = function () {
        if (this.platform.is('cordova')) {
            this.country = this.gps.get_address();
        }
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\chat\chat.html"*/'<ion-header class="bg-thime">\n    <ion-navbar>\n      <button ion-button menuToggle style="display: block !important;">\n        <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png">\n          <ion-badge id="notifications-badge" color="danger">4</ion-badge>\n        </ion-icon>\n      </button>\n  \n      <ion-title text-uppercase text-center>{{"app_title" | translate}} <br>\n         <div (click)="selectCountry()" class="country"> <small> {{country}}</small> <ion-icon name="arrow-dropdown"></ion-icon></div>\n        <span float-right>\n          <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n          <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;">\n            <ion-badge id="notifications-badge" color="danger">2</ion-badge>\n          </ion-icon>\n        </span>\n      </ion-title>\n    </ion-navbar>\n  <!--   <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'search_box\' | translate}}" (click)="searchPage()"></ion-searchbar> -->\n\n    <div padding>\n        <ion-segment [(ngModel)]="segment">\n          <ion-segment-button value="message">\n            Mensajes\n          </ion-segment-button>\n          <ion-segment-button value="peoples">\n            Cotizaciones\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n  </ion-header>\n<ion-content >\n\n    \n    <div [ngSwitch]="segment">\n      <ion-list *ngSwitchCase="\'message\'">\n        <ion-item no-lines (click)="messagesPage()">\n          <ion-thumbnail item-start>\n            <ion-item>\n              <ion-avatar item-start>\n                  <img src="assets/imgs/suit_PNG8132.png">\n              </ion-avatar>\n              <h2 class="description">Unique For Men Black Formal Slim Fit Shirt</h2> \n               <p>Si amigo, compre con confianza.</p>\n            </ion-item>\n          </ion-thumbnail>\n        </ion-item>\n    \n     \n    \n      </ion-list>\n    \n      <ion-list *ngSwitchCase="\'peoples\'" padding>\n        <div class="boxChat">\n          <div class="itemL">\n              <ion-row justify-content-center>\n        \n                <ion-col col-10 class="padN">\n                  <div class="boxChatType">\n                      <img src="assets/imgs/suit_PNG8132.png">\n                    <p>Nombre de usuario</p>\n                  </div>\n                </ion-col>\n                <ion-col col-2 class="padN" text-right>\n                  <small>12:56</small> <br>\n      \n                    <small class="bg-blue btn-round text-white"> Status</small>\n              \n                </ion-col>\n        <ion-note>Ultimo mensaje</ion-note>\n              </ion-row>\n            </div>\n            <div class="itemL">\n                <ion-row justify-content-center>\n          \n                  <ion-col col-10 class="padN">\n                    <div class="boxChatType">\n                        <img src="assets/imgs/suit_PNG8132.png">\n                      <p>Nombre de usuario</p>\n                    </div>\n                  </ion-col>\n                  <ion-col col-2 class="padN" text-right>\n                    <small>12:56</small>\n                    \n                        <small class="bg-blue btn-round text-white"> Status</small>\n                    \n                  </ion-col>\n                  <ion-note>Ultimo mensaje</ion-note>\n                </ion-row>\n              </div>\n        </div>\n      </ion-list>\n    </div>\n  </ion-content>'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_gps_gps__["a" /* GpsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_gps_gps__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagesPage = (function () {
    function MessagesPage(navCtrl, navParams, gps, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gps = gps;
        this.platform = platform;
        this.country = 'Venezuela';
    }
    MessagesPage.prototype.ionViewDidLoad = function () {
        this.getCountry();
    };
    MessagesPage.prototype.getCountry = function () {
        if (this.platform.is('cordova')) {
            this.country = this.gps.get_address();
        }
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\messages\messages.html"*/'<ion-header class="bg-thime">\n    <ion-navbar>\n  \n      <ion-title text-uppercase text-center>{{"app_title" | translate}} <br>\n         <div (click)="selectCountry()" class="country"> <small> {{country}}</small> <ion-icon name="arrow-dropdown"></ion-icon></div>\n        <span float-right>\n          <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n          <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n        </span>\n      </ion-title>\n    </ion-navbar>\n  <!--   <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'search_box\' | translate}}" (click)="searchPage()"></ion-searchbar> -->\n\n  </ion-header>\n\n\n  <ion-content padding>\n    <div class="boxChat">\n      <ion-grid>\n        <div class="itemR">\n          <ion-row justify-content-center>\n            <ion-col col-2 class="padN" text-right>\n              <small>12:56</small>\n            </ion-col>\n            <ion-col col-10 class="padN">\n              <div class="boxChatType">\n                  <img src="assets/imgs/profile_pix.png">\n                <p>Buen dia, ¿aun disponible?</p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div class="itemL">\n          <ion-row justify-content-center>\n    \n            <ion-col col-10 class="padN">\n              <div class="boxChatType">\n                  <img src="assets/imgs/suit_PNG8132.png">\n                <p>Si amigo, compre con confianza.</p>\n              </div>\n            </ion-col>\n            <ion-col col-2 class="padN" text-right>\n              <small>12:56</small>\n            </ion-col>\n    \n          </ion-row>\n        </div>\n         </ion-grid>\n    </div>\n    </ion-content>\n    <ion-footer>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-10>\n                <ion-item>\n                    <ion-label></ion-label>\n                    <ion-input type="email" text-left placeholder="Escribe un mensaje aqui "></ion-input>\n                  </ion-item>\n            </ion-col>\n            <ion-col col-2>\n              <ion-icon name="paper-plane"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-footer>\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\messages\messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_gps_gps__["a" /* GpsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryPage = (function () {
    function CountryPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.newCountry = this.navParams.get('country');
        this.country = this.navParams.get('country');
    }
    CountryPage.prototype.ionViewDidLoad = function () {
    };
    CountryPage.prototype.select = function () {
        console.log(this.newCountry);
    };
    CountryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ country: this.newCountry });
    };
    CountryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-country',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\country\country.html"*/'\n  \n  <ion-content class="bg-light">\n      <div class="your-cart bg-thime">\n          <ion-card>\n              <ion-card-content>\n                  <ion-row>\n                      <ion-col col-12>\n                          <ion-item>\n                        <!--       <ion-label>{{"country" | translate}}</ion-label> -->\n                              <ion-select [(ngModel)]="newCountry" interface="popover"  class="selector">\n                                <ion-option [hidden] = "newCountry == value" value="Chile">Chile</ion-option>\n                                <ion-option  [hidden] = "newCountry == value" value="Peru">Peru</ion-option>\n                                <ion-option  [hidden] = "newCountry == value" value="Venezuela">Venezuela</ion-option>\n                              </ion-select>\n                            </ion-item>\n                      </ion-col>\n                  </ion-row>\n              </ion-card-content>\n          </ion-card>\n\n  \n  \n          <ion-row class="checkout">\n              <ion-col col-6 class="btn_save">\n                  <button ion-button full class="bg-green btn-round btn-text btn-shadow" text-center (click)="dismiss()">{{"select_location" | translate}}</button>\n              </ion-col>\n          </ion-row>\n      </div>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\country\country.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], CountryPage);
    return CountryPage;
}());

//# sourceMappingURL=country.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndependientsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IndependientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IndependientsPage = (function () {
    function IndependientsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IndependientsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IndependientsPage');
    };
    IndependientsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-independients',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\independients\independients.html"*/'<!--\n  Generated template for the IndependientsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>independients</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\independients\independients.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], IndependientsPage);
    return IndependientsPage;
}());

//# sourceMappingURL=independients.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
    };
    NotificationsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\notifications\notifications.html"*/'<ion-header>\n    <ion-navbar>\n      <!--\n        <button ion-button menuToggle>\n              <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n            </button>\n        -->\n      <ion-title>Notificaciones\n        <span float-right>\n          <ion-icon class="icon" (click)="dismiss()"><img src="assets/imgs/ic_cross.png" width="100%;"></ion-icon>           \n        </span>\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="bg-light">\n      <div class="your-cart bg-thime">\n          <ion-card>\n              <ion-card-content>\n                  <ion-row>\n                      <ion-col col-3>\n                          <div class="img-box">\n                              <img src="assets/imgs/suit_PNG8132.png">\n                          </div>\n                      </ion-col>\n                      <ion-col col-9>\n                          <h4>Unique For Men Black Formal Slim Fit Shirt\n                              <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n                          </h4>\n                          <div class="rate">\n                              <div style="display: flex;" class="price-box">\n                                  <div class="price text-sky">\n                                      <img src="assets/imgs/rupee-sky.png" class="rupee-icon">Su paquete ha llegado\n                                  </div>\n                      <!--             <div class="price text-sky">\n                                      <img src="assets/imgs/rupee-sky.png" class="rupee-icon">500\n                                  </div> -->\n                              </div>\n                        <!--       <p text-right>{{"quantity" | translate}}\n                                  <span class="text-light">1\n                                   <ion-icon name="ios-arrow-back-outline"></ion-icon>\n                                  </span>\n                              </p> -->\n                          </div>\n                      </ion-col>\n                  </ion-row>\n              </ion-card-content>\n          </ion-card>\n  \n          <ion-card>\n              <ion-card-content>\n                  <ion-row>\n                      <ion-col col-3>\n                          <div class="img-box">\n                              <img src="assets/imgs/bag.jpg">\n                          </div>\n                      </ion-col>\n                      <ion-col col-9>\n                          <h4>Unique For Men Black Formal Slim Fit Shirt\n                              <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n                          </h4>\n                          <div class="rate">\n                              <div style="display: flex;" class="price-box">\n                                  <div class="price text-sky">\n                                      <img src="assets/imgs/rupee-sky.png" class="rupee-icon">Su paquete ha llegado\n                                  </div>\n                              <!--     <div class="price text-sky">\n                                      <img src="assets/imgs/rupee-sky.png" class="rupee-icon">Su paquete ha llegado\n                                  </div> -->\n                              </div>\n               <!--                <p text-right>{{"quantity" | translate}}\n                                  <span class="text-light">1\n                                      <ion-icon name="ios-arrow-back-outline"></ion-icon>\n                                  </span>\n                              </p> -->\n                          </div>\n                      </ion-col>\n                  </ion-row>\n              </ion-card-content>\n          </ion-card>\n  \n  \n          <ion-row class="checkout">\n              <ion-col col-6>\n         <!--          <h6 class="text-white">\n                      {{"total" | translate}} <span>\n                      <img src="assets/imgs/rupee-white.png" class="rupee-icon">\n                      1260.00</span>\n                  </h6> -->\n              </ion-col>\n              <ion-col col-6>\n                 <!--  <button ion-button full class="bg-green btn-round btn-text btn-shadow">{{"proceed_checkout" | translate}}</button> -->\n              </ion-col>\n          </ion-row>\n      </div>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductsPage = (function () {
    function ProductsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsPage');
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\products\products.html"*/'<!--\n  Generated template for the ProductsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>products</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PymesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pymes_module_pymes_module__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alerts_module_alerts_module__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PymesPage = (function () {
    function PymesPage(navCtrl, navParams, pymesProvider, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pymesProvider = pymesProvider;
        this.alert = alert;
        this.slides = [
            {
                title: "Zona de Tiendas",
                description: "Descubre iBigWave",
                smalltext: "Consigue los mejores precios",
                image: "assets/imgs/slider1.jpg"
            }
        ];
    }
    PymesPage.prototype.ionViewDidLoad = function () {
        this.getPymes();
    };
    PymesPage.prototype.getPymes = function () {
        var _this = this;
        var load = this.alert.loading('Cargando informacion...');
        load.present();
        this.pymesProvider.getPymes().subscribe(function (data) {
            load.dismiss();
            data = JSON.parse(data['_body']);
            _this.pymes = data['data'];
            console.log(_this.pymes);
        }, function (error) {
            console.log(error);
            _this.alert.alert("Alerta!", "Ha ocurrido un error al cargar la información.");
        });
    };
    PymesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pymes',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\pymes\pymes.html"*/'<ion-header class="bg-thime">\n    <ion-navbar>\n      <button ion-button menuToggle style="display: block !important;">\n        <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n      </button>\n  \n      <ion-title text-uppercase text-center>{{"app_title" | translate}} <br>\n         <div (click)="selectCountry()" class="country"> <small> Venezuela</small> <ion-icon name="arrow-dropdown"></ion-icon></div>\n        <span float-right>\n          <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n          <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n        </span>\n      </ion-title>\n    </ion-navbar>\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'search_box\' | translate}}" (click)="searchPage()"></ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let item of items"> </ion-item>\n    </ion-list>\n    <div class="tab-row">\n      <ion-row>\n        <ion-col (click)="categoryPage()">\n          <div class="img-box" text-center>\n            <img src="assets/imgs/electronics.png">\n            <small class="text-white">Electronicos</small>\n          </div>\n        </ion-col>\n        <ion-col (click)="categoryPage()">\n          <div class="img-box" text-center>\n            <img src="assets/imgs/fashion.png">\n            <small class="text-white">Fashion</small>\n          </div>\n        </ion-col>\n        <ion-col (click)="categoryPage()">\n          <div class="img-box" text-center>\n            <img src="assets/imgs/home.png">\n            <small class="text-white">Hogar</small>\n          </div>\n        </ion-col>\n        <ion-col (click)="categoryPage()">\n          <div class="img-box" text-center>\n            <img src="assets/imgs/mobaile.png">\n            <small class="text-white">Mobile</small>\n          </div>\n        </ion-col>\n        <ion-col (click)="categoryPage()">\n          <div class="img-box" text-center>\n            <img src="assets/imgs/more.png">\n            <small class="text-white">Mas</small>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-header>\n  <ion-content class="bg-light">\n      <ion-slides pager autoplay=2000 parallax=true>\n        <ion-slide *ngFor="let slide of slides">\n          <img [src]="slide.image" class="slide-image" />\n          <div class="banner-text">\n            <p [innerHTML]="slide.description"></p>\n            <small [innerHTML]="slide.smalltext"></small>\n            <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    \n\n    \n    <ion-row *ngFor="let pyme of pymes;let last = last;let i = index">\n        <ion-col>\n          <ion-card>\n            <ion-card-header>\n              <div class="img-box" (click)="itemdetailPage()">\n                  <img [src]="pyme.attributes.photo">\n              </div>\n              <ion-icon name="thumbs-up" class="text-light icon"></ion-icon>\n            </ion-card-header>\n            <ion-card-content (click)="itemdetailPage()">\n              <h5>{{pyme.attributes.name}}</h5>\n              <div class="rateing">\n                <div class="card-btn">\n                  <p class="" float-left>\n                    <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                    <span class="text-light bold"> (125)</span>\n                  </p>\n                  <div style="display: flex;" float-right>\n                    <div class="price text-light mr-5">\n                      <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                    </div>\n                    <div class="price text-sky">\n                      <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ng-container *ngIf="pyme[i+1]">\n          <ion-col>\n            <ion-card>\n              <ion-card-header>\n                  <div class="img-box" (click)="itemdetailPage()">\n                      <img [src]="pyme[i+1].attributes.photo">\n                  </div>\n                  <ion-icon name="thumbs-up" class="text-light icon"></ion-icon>\n              </ion-card-header>\n              <ion-card-content (click)="itemdetailPage()">\n                  <h5>{{pyme[i+1].attributes.name}}</h5>\n                  <div class="rateing">\n                      <div class="card-btn">\n                          <p class="" float-left>\n                              <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                              <span class="text-light bold"> (125)</span>\n                          </p>\n                          <div style="display: flex;" float-right>\n                              <div class="price text-light mr-5">\n                                  <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                              </div>\n                              <div class="price text-sky">\n                                  <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ng-container>\n      </ion-row>\n    </ion-content>'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\pymes\pymes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pymes_module_pymes_module__["a" /* PymesModuleProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */]])
    ], PymesPage);
    return PymesPage;
}());

//# sourceMappingURL=pymes.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SellersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellersPage = (function () {
    function SellersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SellersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SellersPage');
    };
    SellersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sellers',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\sellers\sellers.html"*/'<!--\n  Generated template for the SellersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sellers</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\sellers\sellers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SellersPage);
    return SellersPage;
}());

//# sourceMappingURL=sellers.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabPage = (function () {
    function TabPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.Root1 = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
    }
    TabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tab',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\tab\tab.html"*/'<ion-tabs>\n    <ion-tab [root]="Root1" tabTitle="" tabIcon="Home"></ion-tab>\n    <ion-tab [root]="Root2" tabTitle="" tabIcon="Pin"></ion-tab>\n    <ion-tab [root]="Root3" tabTitle="" tabIcon="Setting"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\tab\tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], TabPage);
    return TabPage;
}());

//# sourceMappingURL=tab.js.map

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		725,
		8
	],
	"../pages/country/country.module": [
		726,
		7
	],
	"../pages/independients/independients.module": [
		727,
		6
	],
	"../pages/messages/messages.module": [
		728,
		5
	],
	"../pages/notifications/notifications.module": [
		729,
		4
	],
	"../pages/products/products.module": [
		730,
		3
	],
	"../pages/pymes/pymes.module": [
		731,
		2
	],
	"../pages/sellers/sellers.module": [
		732,
		1
	],
	"../pages/tab/tab.module": [
		733,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PymesModuleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the PymesModuleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PymesModuleProvider = (function () {
    function PymesModuleProvider(http, _tokenService) {
        this.http = http;
        this._tokenService = _tokenService;
    }
    PymesModuleProvider.prototype.getPymes = function () {
        return this._tokenService.get(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].pymes());
    };
    PymesModuleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angular2_token__["b" /* Angular2TokenService */]])
    ], PymesModuleProvider);
    return PymesModuleProvider;
}());

//# sourceMappingURL=pymes-module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartPage = (function () {
    function CartPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    CartPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cart ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\cart\cart.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <!--\n\n      <button ion-button menuToggle>\n\n            <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n          </button>\n\n      -->\n\n    <ion-title>{{"cart" | translate}}\n\n      <span float-right>\n\n        <ion-icon class="icon" (click)="dismiss()"><img src="assets/imgs/ic_cross.png" width="100%;"></ion-icon>           \n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div class="your-cart bg-thime">\n\n        <ion-card>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <img src="assets/imgs/suit_PNG8132.png">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt\n\n                            <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                        </h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-light" padding-right>\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">300\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">500\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>{{"quantity" | translate}}\n\n                                <span class="text-light">1\n\n                                 <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n\n\n        <ion-card>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <img src="assets/imgs/bag.jpg">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt\n\n                            <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                        </h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-light" padding-right>\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">1000\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">800\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>{{"quantity" | translate}}\n\n                                <span class="text-light">1\n\n                                    <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n\n\n\n\n        <ion-row class="checkout">\n\n            <ion-col col-6>\n\n                <h6 class="text-white">\n\n                    {{"total" | translate}} <span>\n\n                    <img src="assets/imgs/rupee-white.png" class="rupee-icon">\n\n                    1260.00</span>\n\n                </h6>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <button ion-button full class="bg-green btn-round btn-text btn-shadow">{{"proceed_checkout" | translate}}</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShirtsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__short_short__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_filter__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ShirtsPage = (function () {
    function ShirtsPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    ShirtsPage.prototype.shortPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__short_short__["a" /* ShortPage */]);
        modal.present();
    };
    ShirtsPage.prototype.filterPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__filter_filter__["a" /* FilterPage */]);
        modal.present();
    };
    ShirtsPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ShirtsPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    ShirtsPage.prototype.itemdetailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__["a" /* ItemdetailPage */]);
    };
    ShirtsPage.prototype.wishlistPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__["a" /* WishlistPage */]);
    };
    ShirtsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-shirts ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\shirts\shirts.html"*/'<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n        <ion-title>Men\'s Shirts\n\n            <span float-right>\n\n            <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <div class="d-flex icon-box">\n\n        <ion-searchbar (ionInput)="getItems($event)" placeholder="Search Shirts" (click)="searchPage()"></ion-searchbar>\n\n        <ion-icon class="icon" (click)="shortPage()"><img src="assets/imgs/ic_short.png" width="100%;"></ion-icon>\n\n        <ion-icon class="icon" (click)="filterPage()" style="margin-right: 7px;"><img src="assets/imgs/ic_filter.png" width="100%;"></ion-icon>\n\n    </div>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-light">\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-card (click)="itemdetailPage()">\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-3.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-2.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-4.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-2.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\shirts\shirts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ShirtsPage);
    return ShirtsPage;
}());

//# sourceMappingURL=shirts.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShortPage = (function () {
    function ShortPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    ShortPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ShortPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-short',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\short\short.html"*/'<ion-content (click)="dismiss()">\n\n  <div class="group">\n\n    <ion-list radio-group>\n\n      <ion-list-header class="d-flex" text-uppercase>\n\n        {{"sort_by" | translate}}\n\n        <ion-icon name="ios-arrow-down"></ion-icon>\n\n      </ion-list-header>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by1" | translate}}</ion-label>\n\n        <ion-radio checked="true" value="popularity"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by2" | translate}}</ion-label>\n\n        <ion-radio value="price_h_l"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by3" | translate}}</ion-label>\n\n        <ion-radio value="price_l_h"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by4" | translate}}</ion-label>\n\n        <ion-radio value="newest"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\short\short.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ShortPage);
    return ShortPage;
}());

//# sourceMappingURL=short.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPage = (function () {
    function SearchPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    SearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\search\search.html"*/'<ion-content class="bg-light">\n\n  <div class="d-flex searchbar-section">\n\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Search Brand of product"></ion-searchbar>\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of items">\n\n        {{ item }}\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-icon name="md-close" class="close-icon" (click)="dismiss()"></ion-icon>\n\n  </div>\n\n\n\n  <div class="recent-search">\n\n    <ion-card>\n\n      <ion-card-header>\n\n        {{"recent_search" | translate}}\n\n        <span text-right class="right">{{"clear_history" | translate}}</span>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <p>\n\n          <ion-icon name="ios-time-outline"></ion-icon>Iphone7 in <strong class="text-sky">Mobile</strong>\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-time-outline"></ion-icon>Shirt in <strong class="text-sky">Me,s Wear</strong>\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n  <div class="trending-search">\n\n    <ion-card>\n\n      <ion-card-header>\n\n        {{"search_trend" | translate}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Sleevless kurti\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Shoes\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Watches\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Tshirt\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Headphones\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Pendrive\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPage = (function () {
    function FilterPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    FilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-filter ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\filter\filter.html"*/'<ion-content>\n\n  <div class="group">\n\n    <div class="size-filter">\n\n      <div class="slid-container">\n\n        <span>2XS</span>\n\n        <span>XS</span>\n\n        <span class="active">S</span>\n\n        <span>M</span>\n\n        <span class="active">L</span>\n\n        <span>XL</span>\n\n        <span>XX</span>\n\n        <span>XXX</span>\n\n      </div>\n\n    </div>\n\n    <div class="type-filter">\n\n      <div class="slid-container">\n\n        <span>{{"brand" | translate}}</span>\n\n        <span class="active">{{"size" | translate}}</span>\n\n        <span>{{"color" | translate}}</span>\n\n        <span>{{"wear" | translate}}</span>\n\n        <span>{{"outfit" | translate}}</span>\n\n      </div>\n\n    </div>\n\n    <ion-row text-center class="action">\n\n      <ion-col col-5>\n\n        <p>{{"reset" | translate}}</p>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <p><ion-icon name="ios-close-outline" (click)="dismiss()"></ion-icon></p>\n\n      </ion-col>\n\n      <ion-col col-5>\n\n        <p class="active">{{"apply" | translate}}</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\filter\filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shippining_shippining__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemdetailPage = (function () {
    function ItemdetailPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    ItemdetailPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ItemdetailPage.prototype.shippiningPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__shippining_shippining__["a" /* ShippiningPage */]);
    };
    ItemdetailPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    ItemdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-itemdetail ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\itemdetail\itemdetail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>Men\'s Shirts\n\n            <span float-right> \n\n              <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>            \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<!--<select size & color>-->\n\n<ion-content class="bg-light">\n\n    <div class="img-section shadow-bottom" text-center>\n\n        <img src="assets/imgs/item-img.png">\n\n        <div class="tab-btn-box">\n\n            <div class="tab-btn">\n\n                <img src="assets/imgs/item-img.png">\n\n            </div>\n\n            <div class="tab-btn">\n\n                <img src="assets/imgs/item-img.png">\n\n            </div>\n\n            <div class="tab-btn">\n\n                <img src="assets/imgs/item-img.png">\n\n            </div>\n\n        </div>\n\n        <div class="d-flex" style="align-items: start;">\n\n            <span>Unique For Men Black Formal Slim Fit Shirt by Mark Tayler</span>\n\n            <span class="icon"> <ion-icon name="share-alt"></ion-icon><ion-icon name="md-heart"></ion-icon></span>\n\n        </div>\n\n        <div class="card-btn">\n\n            <div class="d-flex" style="padding: 1rem">\n\n                <div class="review-box">\n\n                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                    <span class="text-sky small-text ">{{"read_all" | translate}} 125 {{"review" | translate}}</span>\n\n                </div>\n\n                <div class="price-box">\n\n                    <div class="price text-light" style="margin-right: 1rem;">\n\n                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                    </div>\n\n                    <div class="price text-sky">\n\n                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="select-section shadow-bottom">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <div class="size">\n\n                    <ion-item>\n\n                        <ion-label>{{"size" | translate}}</ion-label>\n\n                        <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                            <ion-option value="enable">Small</ion-option>\n\n                            <ion-option selected value="mute">Medium</ion-option>\n\n                            <ion-option value="mute_week"> large</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <div class="color">\n\n                    <ion-item>\n\n                        <ion-label>{{"color" | translate}}</ion-label>\n\n                        <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                            <ion-option selected value="enable">Black</ion-option>\n\n                            <ion-option value="mute">White</ion-option>\n\n                            <ion-option value="mute_week">Red</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n    <!--<select size & color end>-->\n\n\n\n    <!--    <Key features>-->\n\n    <div class="features bg-white shadow-bottom" padding>\n\n        <h6 class="heading">{{"key_feature" | translate}}</h6>\n\n        <p><span class="circle"></span>Unique For Men</p>\n\n        <p><span class="circle"></span>Febri: Cotton Blend</p>\n\n        <p><span class="circle"></span>Color: Black</p>\n\n        <p><span class="circle"></span>Fit: Slim Fit</p>\n\n        <p><span class="circle"></span>Sleeves: Full\n\n            <span text-right class="text-sky">{{"view_more" | translate}}\n\n              <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n            </span>\n\n        </p>\n\n    </div>\n\n    <!--  <Key features end>-->\n\n\n\n    <!--    <{{"check_delivery" | translate}}>-->\n\n    <div class="pincod bg-white shadow-bottom" padding>\n\n      <h6 class="heading">{{"check_delivery" | translate}}</h6>\n\n      <ion-row>\n\n        <ion-col col-8>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Username"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <button ion-button full class="bg-sky btn-round btn-text">{{"submit" | translate}}</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <p>\n\n        <span>{{"cod" | translate}}</span>\n\n        <span text-center>{{"free_sheeping" | translate}}</span>\n\n        <span text-right>{{"delivery" | translate}} in 3-6 {{"days" | translate}}</span>\n\n      </p>\n\n    </div>\n\n    <!--    <{{"check_delivery" | translate}} end>-->\n\n\n\n    <!--    <reating & {{"review" | translate}}>-->\n\n    <div class="reating-review bg-white" padding>\n\n      <div class="reating">\n\n        <div class="rated">\n\n          <ion-badge class="badges bg-green text-white">\n\n            4.2\n\n            <ion-icon name="md-star"></ion-icon>\n\n          </ion-badge>\n\n          <p class="text-light">\n\n            <span text-center>\n\n              {{"rated_by" | translate}}<br>125 {{"poeple" | translate}}\n\n            </span>\n\n          </p>\n\n        </div>\n\n\n\n        <div class="reating-box">\n\n          <div class="rating">\n\n            <div class="text-1">5\n\n              <ion-icon name="md-star"></ion-icon>\n\n            </div>\n\n            <div class="progres-bar rate-5"><span style="width: 90%"></span></div>\n\n            <div class="text-2">88\n\n              <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n            </div>\n\n          </div>\n\n          <div class="rating">\n\n            <div class="text-1">4\n\n              <ion-icon name="md-star"></ion-icon>\n\n            </div>\n\n            <div class="progres-bar rate-4"><span style="width: 70%"></span></div>\n\n            <div class="text-2">88\n\n              <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n            </div>\n\n          </div>\n\n          <div class="rating">\n\n            <div class="text-1">3\n\n              <ion-icon name="md-star"></ion-icon>\n\n            </div>\n\n            <div class="progres-bar rate-3"><span style="width: 50%"></span></div>\n\n            <div class="text-2">88\n\n              <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n            </div>\n\n          </div>\n\n          <div class="rating">\n\n            <div class="text-1">2\n\n              <ion-icon name="md-star"></ion-icon>\n\n            </div>\n\n            <div class="progres-bar rate-2"><span style="width: 35%"></span></div>\n\n            <div class="text-2">88\n\n              <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n            </div>\n\n          </div>\n\n          <div class="rating">\n\n            <div class="text-1">1\n\n              <ion-icon name="md-star"></ion-icon>\n\n            </div>\n\n            <div class="progres-bar rate-1"><span style="width: 20%"></span></div>\n\n            <div class="text-2">88\n\n              <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class="btn review">{{"write_review" | translate}}</div>\n\n\n\n      <div class="lick">\n\n        <p padding-top>\n\n          <span class="left-side">\n\n            <ion-badge class="badges bg-green text-white">4<ion-icon name="md-star"></ion-icon></ion-badge>  \n\n            <span class="bold">{{"great_product" | translate}}</span>\n\n          </span>\n\n          <span class="right-side">\n\n             <span class="text-light">16 May, 2017</span>\n\n          </span>\n\n        </p>\n\n\n\n        <h5> Lorem Ipsum is simply dummy text of the printing and typesetting industry\n\n        </h5>\n\n        <p class="border-bottom  name-like" padding-bottom>\n\n          <span class="left-side">\n\n             Davis Williamson.\n\n          </span>\n\n          <span class="right-side icon-box">     \n\n            <ion-icon name="md-thumbs-up" text-right class="icon-lick"></ion-icon><small>2</small>\n\n            <ion-icon name="md-thumbs-down" text-right class="icon-lick"></ion-icon><small>2</small>             \n\n          </span>\n\n        </p>\n\n\n\n\n\n        <p padding-top>\n\n          <span class="left-side">\n\n            <ion-badge class="badges bg-yellow text-white">4<ion-icon name="md-star"></ion-icon></ion-badge>  \n\n            <span class="bold">Not satisfid with quality</span>\n\n          </span>\n\n          <span class="right-side">\n\n             <span class="text-light">10 apr, 2017</span>\n\n          </span>\n\n        </p>\n\n        <h5>  Lorem Ipsum is simply dummy text of the printing and typesetting industry </h5>\n\n        <p class="border-bottom name-like" padding-bottom>\n\n          <span class="left-side">\n\n            Rahul Oberoy.\n\n          </span>\n\n          <span class="right-side icon-box">\n\n            <ion-icon name="md-thumbs-up" text-right class="icon-lick"></ion-icon><small>2</small>\n\n            <ion-icon name="md-thumbs-down" text-right class="icon-lick"></ion-icon><small>2</small>             \n\n          </span>\n\n        </p>\n\n        <h4 class="text-sky" text-right>\n\n          {{"read_all" | translate}} {{"reviews" | translate}}s\n\n          <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n        </h4>\n\n      </div>\n\n    </div>\n\n    <!--    <reating & review end>-->\n\n\n\n    <!--    <similar Products>-->\n\n    <div class="products" padding-top>\n\n      <h6 class="heading">{{"similar_products" | translate}}\n\n        <span text-right class="text-sky">{{"view_more" | translate}}\n\n          <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n        </span>\n\n      </h6>\n\n      <div class="products-scroll">\n\n        <div class="products-container" style="width:479px;">\n\n          <div class="products-item">\n\n            <ion-card>\n\n              <ion-card-header>\n\n                <div class="img-box">\n\n                  <img src="assets/imgs/shirt-3.jpg">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n              </ion-card-header>\n\n              <ion-card-content>\n\n                <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                <div class="rateing">\n\n                  <div class="card-bottom">\n\n                    <p class="" float-left>\n\n                      <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                      <span class="text-light bold"> (125)</span>\n\n                    </p>\n\n                    <div class="d-flex" float-right>\n\n                      <div class="price text-light mr-5">\n\n                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                      </div>\n\n                      <div class="price text-sky">\n\n                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </ion-card-content>\n\n            </ion-card>\n\n          </div>\n\n\n\n          <div class="products-item">\n\n            <ion-card>\n\n              <ion-card-header>\n\n                <div class="img-box">\n\n                  <img src="assets/imgs/shirt-4.jpg">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n              </ion-card-header>\n\n              <ion-card-content>\n\n                <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                <div class="rateing">\n\n                  <div class="card-bottom">\n\n                    <p class="" float-left>\n\n                      <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                      <span class="text-light bold"> (125)</span>\n\n                    </p>\n\n                    <div class="d-flex" float-right>\n\n                      <div class="price text-light mr-5">\n\n                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                      </div>\n\n                      <div class="price text-sky">\n\n                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </ion-card-content>\n\n            </ion-card>\n\n          </div>\n\n\n\n          <div class="products-item">\n\n            <ion-card>\n\n              <ion-card-header>\n\n                <div class="img-box">\n\n                  <img src="assets/imgs/shirt-2.jpg">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n              </ion-card-header>\n\n              <ion-card-content>\n\n                <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                <div class="rateing">\n\n                  <div class="card-bottom">\n\n                    <p class="">\n\n                      <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                      <span class="text-light bold"> (125)</span>\n\n                    </p>\n\n\n\n                    <div class="d-flex">\n\n                      <div class="price text-light mr-5">\n\n                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                      </div>\n\n                      <div class="price text-sky">\n\n                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </ion-card-content>\n\n            </ion-card>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <!--    <similar Products end>-->\n\n    <div style="height: 65px;"></div>\n\n    <div class="receipt btn-fisx-bottom">\n\n      <ion-row>\n\n        <ion-col><button ion-button full class="btn-round green-shadow btn-text" style="background: $white-color;color: #4dd711;">{{"add_cart" | translate}}</button> </ion-col>\n\n        <ion-col><button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="shippiningPage()"> {{"buy" | translate}}</button></ion-col>\n\n      </ion-row>\n\n    </div>\n\n\n\n    <!--    <reating & {{"review" | translate}} end>-->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\itemdetail\itemdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ItemdetailPage);
    return ItemdetailPage;
}());

//# sourceMappingURL=itemdetail.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippiningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShippiningPage = (function () {
    function ShippiningPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ShippiningPage.prototype.paymentPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
    };
    ShippiningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-shippining ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\shippining\shippining.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"confirm_order" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div class="address-section">\n\n        <ion-row text-center class="status">\n\n          <ion-col class="complate">\n\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>{{"login" | translate}}</span></ion-col>\n\n          <ion-col class="processing">\n\n            <ion-icon name="md-radio-button-off"></ion-icon><span>{{"shipping" | translate}}</span></ion-col>\n\n          <ion-col class="panding">\n\n            <ion-icon name="ion-record"></ion-icon><span>{{"payment" | translate}}</span></ion-col>\n\n        </ion-row>\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>\n\n                    {{"your_dlvr_address" | translate}}<span class="text-sky">{{"change" | translate}}<ion-icon name="ios-arrow-forward" class="icon"></ion-icon></span></p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <div class="addres-detail">\n\n                    <h3>\n\n                        <ion-icon name="ios-pin-outline" class="icon-position"></ion-icon>Jhon Smith\n\n                    </h3>\n\n                    <p>DE234 Mapleridge Drive Plano,<br> Texas 743A US.</p>\n\n                    <p>+91 908765432</p>\n\n                </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div class="your-items">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>{{"ur_item" | translate}}</p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <img src="assets/imgs/suit_PNG8132.png">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-sky  mr-5">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                                <div class="price text-light">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>{{"quantity" | translate}}\n\n                                <span class="">1\n\n                                 <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                        <p class="card-bottom" padding-top>\n\n                            {{"delivery_by" | translate}} Fri,Jun 9: 40\n\n                            <span class="text-sky small" text-right> {{"remove" | translate}}</span>\n\n                        </p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div class="your-items">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>{{"ur_item" | translate}}</p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <img src="assets/imgs/suit_PNG8132.png">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-sky  mr-5">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                                <div class="price text-light">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>{{"quantity" | translate}}\n\n                                <span class="">1\n\n                                    <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                        <p class="card-bottom" padding-top>\n\n                            {{"delivery_by" | translate}} Fri,Jun 9: 40\n\n                            <span class="text-sky small" text-right> {{"remove" | translate}}</span>\n\n                        </p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div class="spacebar-bottom"></div>\n\n    <div class="receipt btn-fisx-bottom">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>Item(s) price\n\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n\n                    380\n\n                    </span>\n\n                </p>\n\n                <p>Delivery Payable\n\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n\n                   40\n\n                    </span>\n\n                </p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <p>Amount Payable\n\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n\n                   420\n\n                    </span>\n\n                </p>\n\n                <button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="paymentPage()">{{"continue" | translate}}</button>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\shippining\shippining.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ShippiningPage);
    return ShippiningPage;
}());

//# sourceMappingURL=shippining.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__placed_placed__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentPage = (function () {
    function PaymentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PaymentPage.prototype.placedPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__placed_placed__["a" /* PlacedPage */]);
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-payment ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\payment\payment.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"pay_now" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content radio-group class="bg-light">\n\n    <ion-row text-center class="status">\n\n        <ion-col class="complate">\n\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>{{"login" | translate}}</span></ion-col>\n\n        <ion-col class="processing">\n\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>{{"shipping" | translate}}</span></ion-col>\n\n        <ion-col class="panding">\n\n            <ion-icon name="md-radio-button-off"></ion-icon><span>{{"payment" | translate}}</span></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card>\n\n        <p class="heading">{{"pmt_methd" | translate}}</p>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label>{{"cr_dr_card" | translate}}</ion-label>\n\n                <ion-radio checked="true" value="card"></ion-radio>\n\n            </ion-item>\n\n            <div class="form">\n\n                <ion-list>\n\n                    <ion-item>\n\n                        <ion-label>{{"card_type" | translate}}</ion-label>\n\n                        <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                            <ion-option selected value="visa">{{"visa_exp" | translate}}</ion-option>\n\n                            <ion-option value="debit">{{"debit" | translate}}</ion-option>\n\n                            <ion-option value="master">{{"master" | translate}}</ion-option>\n\n                            <ion-option value="credit">{{"credit" | translate}} </ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>{{"card_number" | translate}}</ion-label>\n\n                        <ion-input type="text" text-right value="1234-1234-1234-5678"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>{{"card_name" | translate}}</ion-label>\n\n                        <ion-input type="text" text-right value="Jhon Smith"></ion-input>\n\n                    </ion-item>\n\n                    <ion-row>\n\n                        <ion-col col-8 class="">\n\n                          <div class="d-flex mr-5">\n\n                            <ion-item>\n\n                              <ion-label>{{"exp_date" | translate}}</ion-label>\n\n                              <ion-input type="text" text-right value="11/20"></ion-input>\n\n                            </ion-item>\n\n                            <ion-icon name="md-calendar" class="text-light calendar-icon"></ion-icon>\n\n                          </div>\n\n                        </ion-col>\n\n                        <ion-col col-4>\n\n                          <ion-item>\n\n                            <ion-label>cvv</ion-label>\n\n                            <ion-input type="text" text-right value="244"></ion-input>\n\n                          </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-item>\n\n                        <ion-label text-right>{{"save_card_details" | translate}}</ion-label>\n\n                        <ion-toggle color="secondary" checked="true"></ion-toggle>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label>{{"cod" | translate}}</ion-label>\n\n                <ion-radio value="cod"></ion-radio>\n\n            </ion-item>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label>{{"net_banking" | translate}}</ion-label>\n\n                <ion-radio value="net_banking"></ion-radio>\n\n            </ion-item>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <div class="spacebar"></div>\n\n    <div class="btn-padding btn-fisx-bottom">\n\n        <button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="placedPage()">{{"pay" | translate}} <img src="assets/imgs/rupee-white.png">420 \n\n        </button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\payment\payment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlacedPage = (function () {
    function PlacedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PlacedPage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PlacedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-placed ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\placed\placed.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"ordered" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="img-box">\n\n        <img src="assets/imgs/order-placed.jpg">\n\n    </div>\n\n    <h3 class="text-sky" text-center>{{"ordered_text" | translate}}</h3>\n\n    <h4 class="" text-center>{{"ordered_text1" | translate}}<br>{{"ordered_text3" | translate}} <strong>{{"my_order" | translate}}</strong> {{"ordered_text2" | translate}}<br>{{"ordered_text4" | translate}}</h4>\n\n    <div class="btn-padding btn-fisx-bottom ">\n\n        <button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="homePage()">{{"continue_shop" | translate}}</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\placed\placed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], PlacedPage);
    return PlacedPage;
}());

//# sourceMappingURL=placed.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonenumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__password_password__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhonenumberPage = (function () {
    function PhonenumberPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PhonenumberPage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PhonenumberPage.prototype.passwordPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__password_password__["a" /* PasswordPage */]);
    };
    PhonenumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-phonenumber ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\phonenumber\phonenumber.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-uppercase>{{"app_title" | translate}}\n\n      <span float-end (click)="homePage()" text-capitalize>{{"skip" | translate}}</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <p>Heart</p> -->\n\n  <div class="form" padding-left padding-right>\n\n    <p text-center>{{"phone_text" | translate}}<br>{{"phone_text1" | translate}}</p>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{"phone" | translate}}</ion-label>\n\n        <ion-input type="text" text-end value="+91 9876543210"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="passwordPage()">{{"continue" | translate}}"</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\phonenumber\phonenumber.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], PhonenumberPage);
    return PhonenumberPage;
}());

//# sourceMappingURL=phonenumber.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createaccount_createaccount__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerificationPage = (function () {
    function VerificationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VerificationPage.prototype.createaccountPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__createaccount_createaccount__["a" /* CreateaccountPage */]);
    };
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-verification ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\verification\verification.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n    <ion-title>{{"verify_code" | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="form" padding-left padding-right>\n\n    <p text-center>{{"verify_label" | translate}} <br>{{"verify_label1" | translate}} +91 903 335 6708</p>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{"verify_code" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="______"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="createaccountPage()">{{"verify" | translate}}</button>\n\n    <p text-center>\n\n      <span float-left class="text-sky">{{"resend" | translate}}</span>\n\n      <span float-right>1:32 {{"min_left" | translate}}</span>\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\verification\verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_accountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var My_accountPage = (function () {
    function My_accountPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.account = "profile";
    }
    My_accountPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    My_accountPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    My_accountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my_account ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\my_account\my_account.html"*/'<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n    <ion-icon class="menu-icon">\n\n      <img src="assets/imgs/ic_menu.png">\n\n    </ion-icon>\n\n  </button>\n\n    <ion-title>{{"my_acount" | translate}}\n\n      <span float-right> \n\n        <ion-icon padding-right name="ios-search-outline" class="icon"></ion-icon>\n\n        <ion-icon name="ios-cart-outline" class="icon"></ion-icon>              \n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-list padding-left>\n\n    <ion-item padding-left padding-right>\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/profile_pix.png">\n\n      </ion-avatar>\n\n      <h2 class="">Jhon Smith\n\n        <small class=""> {{"edit_profile" | translate}}</small>\n\n      </h2>\n\n      <p class="text-dark">+91 908 765 4321\n\n      </p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-toolbar no-border-top class="tab-bar">\n\n    <ion-segment [(ngModel)]="account">\n\n      <ion-segment-button value="profile">\n\n        {{"profile" | translate}}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="card">\n\n        {{"my_cards" | translate}}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="address">\n\n        {{"my_address" | translate}}\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div [ngSwitch]="account">\n\n    <div *ngSwitchCase="\'profile\'" class="profile-section">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>{{"name" | translate}}</ion-label>\n\n          <ion-input type="text" value="Jhon Smith"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"email1" | translate}}</ion-label>\n\n          <ion-input type="email" value="Jhonsmith9448@gmail.com"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"phone" | translate}}</ion-label>\n\n          <ion-input type="text" value="+91 908 765 4321"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating>{{"Gender" | translate}}</ion-label>\n\n          <ion-input type="text" value="Mail"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"bday" | translate}}</ion-label>\n\n          <ion-input type="text" value="23 Dec, 1990"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'card\'" class="card-section bg-light">\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <div class="card-row">XXXX XXXX XXXX 5887\n\n            <img src="assets/imgs/visa.png">\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <div class="card-row">XXXX XXXX XXXX 5887\n\n            <img src="assets/imgs/master-card.png">\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <div class="form" padding-left padding-right>\n\n          <p padding-bottom margin-bottom>\n\n            <ion-icon name="ios-add-circle-outline"></ion-icon>{{"add_n_card" | translate}} <span>{{"save" | translate}}</span></p>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>{{"card_type" | translate}}</ion-label>\n\n              <ion-input type="text" text-right value="Visa Express"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{"card_number" | translate}}</ion-label>\n\n              <ion-input type="text" text-right value="1234-1234-1234-1234"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{"card_name" | translate}}</ion-label>\n\n              <ion-input type="text" text-right value="Jhon Smith"></ion-input>\n\n            </ion-item>\n\n            <div class="date-cvc-row">\n\n              <div class="date">\n\n                <ion-item>\n\n                  <ion-label>Expiry Date</ion-label>\n\n                  <ion-input type="text" text-right value="10/23"></ion-input>\n\n                </ion-item>\n\n              </div>\n\n              <div class="cvc">\n\n                <ion-item>\n\n                  <ion-label>CVV</ion-label>\n\n                  <ion-input type="text" text-right value="234"></ion-input>\n\n                </ion-item>\n\n              </div>\n\n            </div>\n\n            <ion-item class="border-none">\n\n              <ion-label text-right> {{"save_card_details" | translate}}</ion-label>\n\n              <ion-toggle checked="false"></ion-toggle>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </ion-card>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'address\'" class="address-section bg-light">\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <div class="addres-detail">\n\n            <h3> \n\n              <ion-icon name="ios-pin-outline" class="icon-position"> </ion-icon>\n\n              Jhon Smith \n\n              <span>{{"change" | translate}}\n\n                <ion-icon name="ios-arrow-forward"></ion-icon>\n\n              </span>\n\n            </h3>\n\n            <p>DE234 Mapleridge Drive Plano,<br> Texas 743A US.</p>\n\n            <p>+91 908765432</p>\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <div class="form" padding-left padding-right>\n\n          <p padding-bottom margin-bottom>\n\n            <ion-icon name="ios-add-circle-outline"></ion-icon>{{"add_n_card" | translate}}<span>{{"save" | translate}}</span>\n\n          </p>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>{{"pin" | translate}}</ion-label>\n\n              <ion-input type="text" text-right value="110092"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{"address" | translate}}</ion-label>\n\n              <ion-input type="text" text-right value="DE234 Mapleridge Drive Plano,"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{"phone" | translate}}</ion-label>\n\n              <ion-input type="text" text-right value="+91 908 765 4321"></ion-input>\n\n            </ion-item>\n\n            <div class="date-cvc-row">\n\n              <div class="city">\n\n                <ion-item>\n\n                  <ion-label>{{"city" | translate}}</ion-label>\n\n                  <ion-input type="text" text-right value="Delhi"></ion-input>\n\n                </ion-item>\n\n              </div>\n\n              <div class="State">\n\n                <ion-item>\n\n                  <ion-label>{{"state" | translate}}</ion-label>\n\n                  <ion-input type="text" text-right value="Delhi"></ion-input>\n\n                </ion-item>\n\n              </div>\n\n            </div>\n\n            <ion-item class="border-none">\n\n              <ion-label text-right>{{"set_default_address" | translate}}</ion-label>\n\n              <ion-toggle checked="true"></ion-toggle>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </ion-card>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\my_account\my_account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], My_accountPage);
    return My_accountPage;
}());

//# sourceMappingURL=my_account.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myorder_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Myorder_1Page = (function () {
    function Myorder_1Page(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    Myorder_1Page.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    Myorder_1Page.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    Myorder_1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-myorder_1 ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\myorder_1\myorder_1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"my_order" | translate}}\n\n            <span float-right> \n\n               <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>            \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card class="border-bottom-none border" style="position: relative;">\n\n        <ion-card-header>\n\n            <p class="left-side">\n\n                <span class="text-light">{{"order_id" | translate}}</span> 2513254112\n\n                <br>\n\n                <span class="text-light">{{"placed_on" | translate}}</span> 17-march-17\n\n            </p>\n\n            <p class="right-side text-sky">\n\n                {{"cancel_order" | translate}}\n\n            </p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-7>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <small><span class="text-light">{{"quantity" | translate}}:</span> 1</small>\n\n                    <p>\n\n                        <img src="assets/imgs/rupee-black.png"> 380\n\n                        <small class="text-light">{{"by_cod" | translate}}</small>\n\n                    </p>\n\n                    <small><span class="text-light">{{"track_status" | translate}}</span> 15-March\'17</small>\n\n                    <button ion-button full class="bg-green btn-round  btn-text">{{"reached" | translate}} Hub,US  <ion-icon name="ios-arrow-down-outline"></ion-icon></button>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-2.jpg">\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <div class="order-info border-top-none border">\n\n        <div class="order-container">\n\n            <div class="status active">\n\n                <p padding-left padding-right>{{"order" | translate}}<br>{{"placed" | translate}}</p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status active">\n\n                <p>\n\n                    {{"dispatched" | translate}}<br>{{"4m" | translate}} Bangalore\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status active">\n\n                <p>\n\n                    {{"reached" | translate}} Hub <br>New Delhi\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p>12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status">\n\n                <p>\n\n                    {{"out4" | translate}}<br>{{"delivery" | translate}}\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status">\n\n                <p>\n\n                    {{"item" | translate}}<br>{{"delivery" | translate}}\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <p class="left-side">\n\n                <span class="text-light">{{"order_id" | translate}}</span> 2513254112\n\n                <br>\n\n                <span class="text-light">{{"placed_on" | translate}}</span> 17-march-17\n\n            </p>\n\n            <p class="right-side text-sky">\n\n                {{"return_item" | translate}}\n\n            </p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-7>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <small><span class="text-light">{{"quantity" | translate}}:</span> 1</small>\n\n                    <p>\n\n                        <img src="assets/imgs/rupee-black.png"> 880\n\n                        <small class="text-light">{{"by_crd" | translate}}</small>\n\n                    </p>\n\n                    <small><span class="text-light">{{"deliver_on" | translate}} </span> 05-May\'17</small>\n\n                    <button ion-button full class="bg-thime btn-round  btn-text">{{"rate_now" | translate}}<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/bag.jpg">\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\myorder_1\myorder_1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], Myorder_1Page);
    return Myorder_1Page;
}());

//# sourceMappingURL=myorder_1.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myorder_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Myorder_2Page = (function () {
    function Myorder_2Page(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    Myorder_2Page.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    Myorder_2Page.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    Myorder_2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-myorder_2 ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\myorder_2\myorder_2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"my_order" | translate}}\n\n            <span float-right> \n\n              <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>             \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <div class="rate">\n\n                        <p class=text-light>{{"order_on" | translate}} 12-March-017</p>\n\n                        <div style="display: flex;">\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="card-btn" float-right padding-top>\n\n                        <small class="text-sky ">{{"cancel_order" | translate}}</small>\n\n                        <small class="text-white bg-green green-shadow">{{"track_order" | translate}}</small>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/bag.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skybags Leo 26 ltrs Red Casual Backpack</h4>\n\n                    <div class="rate">\n\n                        <p class=text-light>{{"deliver_on" | translate}} 12-March-017</p> <div style="display: flex;">\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="card-btn" float-right padding-top>\n\n                        <small class="text-sky ">{{"return_item" | translate}}</small>\n\n                        <small class="text-white bg-thime sky-shadow">{{"rate_now" | translate}}</small>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/wach.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skmei Analog-Digital Multicolor Dil Men\'s Watch</h4>\n\n                    <div class="rate">\n\n                        <p class=text-light>{{"deliver_on" | translate}} 12-March-017</p>\n\n                        <div style="display: flex;">\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="card-btn" float-right padding-top>\n\n                        <small class="text-sky ">{{"share_product" | translate}}</small>\n\n                        <small class="text-white bg-gray gray-shadow">{{"rated" | translate}} 4\n\n                         <ion-icon name="md-star"></ion-icon>\n\n                        </small>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\myorder_2\myorder_2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], Myorder_2Page);
    return Myorder_2Page;
}());

//# sourceMappingURL=myorder_2.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HelpPage = (function () {
    function HelpPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    HelpPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    HelpPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    HelpPage.prototype.wishlistPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__["a" /* WishlistPage */]);
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-help ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\help\help.html"*/'<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n        </button>\n\n        <ion-title>{{\'help_center\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <h6 padding-left padding-right>{{\'faq\' | translate}}</h6>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            {{\'order_track\' | translate}}\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            {{"order_track_help_text" | translate}}\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            {{\'refund\' | translate}}\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            {{"refund_help_text" | translate}}\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            {{\'cancel_help\' | translate}}\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            {{"cancel_help_text" | translate}}\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            {{\'seller_help\' | translate}}\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            {{\'seller_help_text\' | translate}}\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            {{\'payments\' | translate}}\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            {{\'payments_help_text\' | translate}}\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewPage = (function () {
    function ReviewPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-review ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\review\review.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"add_review" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-card-header style="padding-bottom: 0;">\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <div class="rateing">\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-header>\n\n\n\n        <ion-card-content>\n\n            <div class="form">\n\n                <ion-list>\n\n                    <ion-item class="write-reveiw">\n\n                        <ion-textarea type="text" placeholder="{{\'write_review\' | translate}}"></ion-textarea>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-input type="text" placeholder="{{\'heading_review\' | translate}}"></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n            <button ion-button full class="bg-green btn-round btn-text">{{"submit_now" | translate}}</button>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <h5>{{"previous_orders" | translate}}</h5>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/bag.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skybags Leo 26 ltrs Red Casual Backpack</h4>\n\n                    <div class="rateing">\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-header>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/wach.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skmei Analog-Digital Multicolor Dil Men\'s Watch</h4>\n\n                    <div class="rateing">\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-header>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\review\review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BaseAppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]("app.config");
var BaseAppConfig = {
    apiBase: "http://opuslabs.in:9067/wp-json/",
    perPage: "5",
    consumerKey: "ck_bd34fc373c15b8092269895d9f24fdafd75901bc",
    consumerSecret: "cs_a3424b5ca1754293e4c8668b614f1768c0e859ab",
    adminUsername: "prashant",
    adminPassword: "prashant243",
    oneSignalAppiId: "c26a7c6d-25a1-451d-9eea-f790790b11b9",
    oneSignalGpId: "968366107124",
    homeSliderPostsTagId: "95",
    availableLanguages: [{
            code: 'en',
            name: 'English'
        }, {
            code: 'ar',
            name: 'Arabic'
        }, {
            code: 'es',
            name: 'Spanish'
        }, {
            code: 'pt',
            name: 'Portuguese'
        }, {
            code: 'ru',
            name: 'Russian'
        }, {
            code: 'fr',
            name: 'French'
        }],
    firebaseConfig: {
        webApplicationId: "511052243603-tti40jbrr3ukb2t3abebcesl510ql099.apps.googleusercontent.com",
        apiKey: "AIzaSyBg3aFpqNbi0kp3maAanCXeWXXF_PGEXuI",
        authDomain: "mobimall-f924b.firebaseapp.com",
        databaseURL: "https://mobimall-f924b.firebaseio.com",
        projectId: "mobimall-f924b",
        storageBucket: "mobimall-f924b.appspot.com",
        messagingSenderId: "511052243603"
    }
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(402);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_phonenumber_phonenumber__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_password_password__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_verification_verification__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_createaccount_createaccount__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_category_category__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_shirts_shirts__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_itemdetail_itemdetail__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_shippining_shippining__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_placed_placed__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_wishlist_wishlist__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_my_account_my_account__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_myorder_1_myorder_1__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_myorder_2_myorder_2__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_help_help__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cart_cart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_review_review__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_short_short__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_filter_filter__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_globalization__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ngx_translate_core__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ngx_translate_http_loader__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_config__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_users_module_users_module__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_country_country__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_alerts_module_alerts_module__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angular2_token__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_http__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_tab_tab__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_pymes_pymes__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_sellers_sellers__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_independients_independients__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_pymes_module_pymes_module__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_sellers_module_sellers_module__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_products_products__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_products_products__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_diagnostic__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_gps_gps__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_native_geocoder__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_geolocation__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_chat_chat__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_messages_messages__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_notifications_notifications__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_30__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_phonenumber_phonenumber__["a" /* PhonenumberPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_shirts_shirts__["a" /* ShirtsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_itemdetail_itemdetail__["a" /* ItemdetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_shippining_shippining__["a" /* ShippiningPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_placed_placed__["a" /* PlacedPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_account_my_account__["a" /* My_accountPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_myorder_1_myorder_1__["a" /* Myorder_1Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_myorder_2_myorder_2__["a" /* Myorder_2Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_short_short__["a" /* ShortPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_country_country__["a" /* CountryPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_tab_tab__["a" /* TabPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_pymes_pymes__["a" /* PymesPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_sellers_sellers__["a" /* SellersPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_independients_independients__["a" /* IndependientsPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_notifications_notifications__["a" /* NotificationsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/country/country.module#CountryPageModule', name: 'CountryPage', segment: 'country', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/independients/independients.module#IndependientsPageModule', name: 'IndependientsPage', segment: 'independients', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pymes/pymes.module#PymesPageModule', name: 'PymesPage', segment: 'pymes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sellers/sellers.module#SellersPageModule', name: 'SellersPage', segment: 'sellers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab/tab.module#TabPageModule', name: 'TabPage', segment: 'tab', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_37__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_36_angular2_token__["a" /* A2tUiModule */],
                __WEBPACK_IMPORTED_MODULE_29__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_29__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_28__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_34__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: 'iBigWave',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_phonenumber_phonenumber__["a" /* PhonenumberPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_shirts_shirts__["a" /* ShirtsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_itemdetail_itemdetail__["a" /* ItemdetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_shippining_shippining__["a" /* ShippiningPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_placed_placed__["a" /* PlacedPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_account_my_account__["a" /* My_accountPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_myorder_1_myorder_1__["a" /* Myorder_1Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_myorder_2_myorder_2__["a" /* Myorder_2Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_short_short__["a" /* ShortPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_country_country__["a" /* CountryPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_tab_tab__["a" /* TabPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_pymes_pymes__["a" /* PymesPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_sellers_sellers__["a" /* SellersPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_independients_independients__["a" /* IndependientsPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_notifications_notifications__["a" /* NotificationsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_globalization__["a" /* Globalization */],
                { provide: __WEBPACK_IMPORTED_MODULE_31__app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_31__app_config__["b" /* BaseAppConfig */] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_32__providers_users_module_users_module__["a" /* UsersModuleProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */],
                __WEBPACK_IMPORTED_MODULE_36_angular2_token__["b" /* Angular2TokenService */],
                __WEBPACK_IMPORTED_MODULE_42__providers_pymes_module_pymes_module__["a" /* PymesModuleProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_sellers_module_sellers_module__["a" /* SellersModuleProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_products_products__["a" /* ProductsProvider */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_47__providers_gps_gps__["a" /* GpsProvider */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wishlist_wishlist__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__country_country__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alerts_module_alerts_module__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pymes_pymes__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__independients_independients__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sellers_sellers__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_products__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_users_module_users_module__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_gps_gps__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, alert, userProvider, gps) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alert = alert;
        this.userProvider = userProvider;
        this.gps = gps;
        this.country = 'Chile';
        this.slides = [
            {
                title: "Zona de Tiendas",
                description: "Descubre iBigWave",
                smalltext: "Consigue los mejores precios",
                image: "assets/imgs/slider1.jpg",
                button: "Crear Tienda",
                color: "primary"
            },
            {
                title: "Zona de Profesionales",
                description: "Descubre iBigWave",
                smalltext: "Consigue los mejores precios",
                image: "assets/imgs/slider2.jpg",
                button: "Crear Profesional",
                color: "secondary"
            },
            {
                title: "Zona de Seller",
                description: "Descubre iBigWave",
                smalltext: "Consigue los mejores precios",
                image: "assets/imgs/slider3.jpg",
                button: "Deseo Vender",
                color: "danger"
            }
        ];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.checkUser();
    };
    HomePage.prototype.categoryPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */]);
    };
    HomePage.prototype.wishlistPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__wishlist_wishlist__["a" /* WishlistPage */]);
    };
    HomePage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    HomePage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    HomePage.prototype.goListPymes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pymes_pymes__["a" /* PymesPage */]);
    };
    HomePage.prototype.goListIndependients = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__independients_independients__["a" /* IndependientsPage */]);
    };
    HomePage.prototype.goListSellers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__sellers_sellers__["a" /* SellersPage */]);
    };
    HomePage.prototype.selectCountry = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__country_country__["a" /* CountryPage */], {
            country: this.country
        });
        modal.onDidDismiss(function (data) {
            _this.country = data.country;
        });
        modal.present();
    };
    HomePage.prototype.goListProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__products_products__["a" /* ProductsPage */]);
    };
    HomePage.prototype.checkUser = function () {
        var _this = this;
        this.userProvider.check_User().then(function (user) {
            if (user) {
                _this.alert.menu('authenticated');
            }
            else {
                _this.alert.menu('unauthenticated');
            }
        });
    };
    HomePage.prototype.getCountry = function () {
        this.country = this.gps.get_address();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\home\home.html"*/'<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important;">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png">\n\n        <ion-badge id="notifications-badge" color="danger">4</ion-badge>\n\n      </ion-icon>\n\n    </button>\n\n\n\n    <ion-title text-uppercase text-center>{{"app_title" | translate}} <br>\n\n       <div (click)="selectCountry()" class="country"> <small> {{country}}</small> <ion-icon name="arrow-dropdown"></ion-icon></div>\n\n      <span float-right>\n\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n\n        <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;">\n\n          <ion-badge id="notifications-badge" color="danger">2</ion-badge>\n\n        </ion-icon>\n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'search_box\' | translate}}" (click)="searchPage()"></ion-searchbar>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of items"> </ion-item>\n\n  </ion-list>\n\n<!--   <div class="tab-row">\n\n    <ion-row>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/electronics.png">\n\n          <small class="text-white">Tiendas</small>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/fashion.png">\n\n          <small class="text-white">Independientes</small>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/home.png">\n\n          <small class="text-white">Personas</small>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/mobaile.png">\n\n          <small class="text-white">Mobaile</small>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div> -->\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-light">\n\n  <ion-slides pager autoplay=2000 parallax=true>\n\n    <ion-slide *ngFor="let slide of slides">\n\n        <button ion-button class="btn_slide" color="{{slide.color}}">{{slide.button}}</button>\n\n      <img [src]="slide.image" class="slide-image" />\n\n      <div class="banner-text">\n\n        <p [innerHTML]="slide.description"></p>\n\n        <small [innerHTML]="slide.smalltext"></small>\n\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n\n\n  <ion-slides pager autoplay=2000 parallax=true>\n\n      <ion-slide>\n\n  <p><!-- {{"feature_item" | translate}} -->Visita nuestras tiendas\n\n    <small class="bg-red btn-round text-white" float-right (click)="goListPymes()">{{"view_all" | translate}}<!--  Ver todas nuestras tiendas --></small>\n\n  </p>\n\n\n\n  <ion-row>\n\n      <ion-col>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            <div class="img-box" (click)="itemdetailPage()">\n\n                <img src="assets/imgs/suit_PNG8132.png">\n\n            </div>\n\n            <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n          </ion-card-header>\n\n          <ion-card-content (click)="itemdetailPage()">\n\n            <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n            <div class="rateing">\n\n              <div class="card-btn">\n\n                <p class="" float-left>\n\n                  <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                  <span class="text-light bold"> (125)</span>\n\n                </p>\n\n                <div style="display: flex;" float-right>\n\n                  <div class="price text-light mr-5">\n\n                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                  </div>\n\n                  <div class="price text-sky">\n\n                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card>\n\n          <ion-card-header>\n\n              <div class="img-box" (click)="itemdetailPage()">\n\n                  <img src="assets/imgs/shirt-2.jpg">\n\n              </div>\n\n              <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n          </ion-card-header>\n\n          <ion-card-content (click)="itemdetailPage()">\n\n              <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n              <div class="rateing">\n\n                  <div class="card-btn">\n\n                      <p class="" float-left>\n\n                          <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                          <span class="text-light bold"> (125)</span>\n\n                      </p>\n\n                      <div style="display: flex;" float-right>\n\n                          <div class="price text-light mr-5">\n\n                              <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                          </div>\n\n                          <div class="price text-sky">\n\n                              <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                          </div>\n\n                      </div>\n\n                  </div>\n\n              </div>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <div class="img-box" (click)="itemdetailPage()">\n\n                    <img src="assets/imgs/shirt-3.jpg">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n            </ion-card-header>\n\n            <ion-card-content (click)="itemdetailPage()">\n\n                <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                <div class="rateing">\n\n                    <div class="card-btn">\n\n                        <p class="" float-left>\n\n                            <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                            <span class="text-light bold"> (125)</span>\n\n                        </p>\n\n                        <div style="display: flex;" float-right>\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <div class="img-box" (click)="itemdetailPage()">\n\n                    <img src="assets/imgs/shirt-4.jpg">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n            </ion-card-header>\n\n            <ion-card-content (click)="itemdetailPage()">\n\n                <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                <div class="rateing">\n\n                    <div class="card-btn">\n\n                        <p class="" float-left>\n\n                            <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                            <span class="text-light bold"> (125)</span>\n\n                        </p>\n\n                        <div style="display: flex;" float-right>\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n</ion-slide>\n\n<ion-slide>\n\n    <p><!-- {{"feature_item" | translate}} -->Independientes\n\n      <small class="bg-purple btn-round text-white" float-right (click)="goListPymes()">{{"view_all" | translate}}<!--  Ver todas nuestras tiendas --></small>\n\n    </p>\n\n  \n\n    <ion-row>\n\n        <ion-col>\n\n          <ion-card>\n\n            <ion-card-header>\n\n              <div class="img-box" (click)="itemdetailPage()">\n\n                  <img src="assets/imgs/suit_PNG8132.png">\n\n              </div>\n\n              <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n            </ion-card-header>\n\n            <ion-card-content (click)="itemdetailPage()">\n\n              <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n              <div class="rateing">\n\n                <div class="card-btn">\n\n                  <p class="" float-left>\n\n                    <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                    <span class="text-light bold"> (125)</span>\n\n                  </p>\n\n                  <div style="display: flex;" float-right>\n\n                    <div class="price text-light mr-5">\n\n                      <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                    </div>\n\n                    <div class="price text-sky">\n\n                      <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-card>\n\n            <ion-card-header>\n\n                <div class="img-box" (click)="itemdetailPage()">\n\n                    <img src="assets/imgs/shirt-2.jpg">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n            </ion-card-header>\n\n            <ion-card-content (click)="itemdetailPage()">\n\n                <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                <div class="rateing">\n\n                    <div class="card-btn">\n\n                        <p class="" float-left>\n\n                            <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                            <span class="text-light bold"> (125)</span>\n\n                        </p>\n\n                        <div style="display: flex;" float-right>\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    \n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-card>\n\n              <ion-card-header>\n\n                  <div class="img-box" (click)="itemdetailPage()">\n\n                      <img src="assets/imgs/shirt-3.jpg">\n\n                  </div>\n\n                  <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n              </ion-card-header>\n\n              <ion-card-content (click)="itemdetailPage()">\n\n                  <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                  <div class="rateing">\n\n                      <div class="card-btn">\n\n                          <p class="" float-left>\n\n                              <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                              <span class="text-light bold"> (125)</span>\n\n                          </p>\n\n                          <div style="display: flex;" float-right>\n\n                              <div class="price text-light mr-5">\n\n                                  <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                              </div>\n\n                              <div class="price text-sky">\n\n                                  <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                              </div>\n\n                          </div>\n\n                      </div>\n\n                  </div>\n\n              </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-card>\n\n              <ion-card-header>\n\n                  <div class="img-box" (click)="itemdetailPage()">\n\n                      <img src="assets/imgs/shirt-4.jpg">\n\n                  </div>\n\n                  <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n              </ion-card-header>\n\n              <ion-card-content (click)="itemdetailPage()">\n\n                  <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                  <div class="rateing">\n\n                      <div class="card-btn">\n\n                          <p class="" float-left>\n\n                              <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                              <span class="text-light bold"> (125)</span>\n\n                          </p>\n\n                          <div style="display: flex;" float-right>\n\n                              <div class="price text-light mr-5">\n\n                                  <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                              </div>\n\n                              <div class="price text-sky">\n\n                                  <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                              </div>\n\n                          </div>\n\n                      </div>\n\n                  </div>\n\n              </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n  </ion-slide>\n\n  <ion-slide>\n\n      <p><!-- {{"feature_item" | translate}} -->Da un vistazo a nuestros productos\n\n        <small class="bg-blue btn-round text-white" float-right (click)="goListPymes()">{{"view_all" | translate}}<!--  Ver todas nuestras tiendas --></small>\n\n      </p>\n\n    \n\n      <ion-row>\n\n          <ion-col>\n\n            <ion-card>\n\n              <ion-card-header>\n\n                <div class="img-box" (click)="itemdetailPage()">\n\n                    <img src="assets/imgs/suit_PNG8132.png">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n              </ion-card-header>\n\n              <ion-card-content (click)="itemdetailPage()">\n\n                <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                <div class="rateing">\n\n                  <div class="card-btn">\n\n                    <p class="" float-left>\n\n                      <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                      <span class="text-light bold"> (125)</span>\n\n                    </p>\n\n                    <div style="display: flex;" float-right>\n\n                      <div class="price text-light mr-5">\n\n                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                      </div>\n\n                      <div class="price text-sky">\n\n                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </ion-card-content>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-card>\n\n              <ion-card-header>\n\n                  <div class="img-box" (click)="itemdetailPage()">\n\n                      <img src="assets/imgs/shirt-2.jpg">\n\n                  </div>\n\n                  <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n              </ion-card-header>\n\n              <ion-card-content (click)="itemdetailPage()">\n\n                  <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                  <div class="rateing">\n\n                      <div class="card-btn">\n\n                          <p class="" float-left>\n\n                              <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                              <span class="text-light bold"> (125)</span>\n\n                          </p>\n\n                          <div style="display: flex;" float-right>\n\n                              <div class="price text-light mr-5">\n\n                                  <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                              </div>\n\n                              <div class="price text-sky">\n\n                                  <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                              </div>\n\n                          </div>\n\n                      </div>\n\n                  </div>\n\n              </ion-card-content>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n      \n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box" (click)="itemdetailPage()">\n\n                        <img src="assets/imgs/shirt-3.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content (click)="itemdetailPage()">\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div style="display: flex;" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box" (click)="itemdetailPage()">\n\n                        <img src="assets/imgs/shirt-4.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content (click)="itemdetailPage()">\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div style="display: flex;" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n    </ion-slide>\n\n    <ion-slide>\n\n        <p><!-- {{"feature_item" | translate}} -->Productos de personas\n\n          <small class="bg-sky btn-round text-white" float-right (click)="goListPymes()">{{"view_all" | translate}}<!--  Ver todas nuestras tiendas --></small>\n\n        </p>\n\n        <ion-row>\n\n            <ion-col>\n\n              <ion-card>\n\n                <ion-card-header>\n\n                  <div class="img-box" (click)="itemdetailPage()">\n\n                      <img src="assets/imgs/suit_PNG8132.png">\n\n                  </div>\n\n                  <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content (click)="itemdetailPage()">\n\n                  <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                  <div class="rateing">\n\n                    <div class="card-btn">\n\n                      <p class="" float-left>\n\n                        <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="text-light bold"> (125)</span>\n\n                      </p>\n\n                      <div style="display: flex;" float-right>\n\n                        <div class="price text-light mr-5">\n\n                          <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                        </div>\n\n                        <div class="price text-sky">\n\n                          <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </ion-card-content>\n\n              </ion-card>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box" (click)="itemdetailPage()">\n\n                        <img src="assets/imgs/shirt-2.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content (click)="itemdetailPage()">\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div style="display: flex;" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n              </ion-card>\n\n            </ion-col>\n\n          </ion-row>\n\n        \n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-card>\n\n                  <ion-card-header>\n\n                      <div class="img-box" (click)="itemdetailPage()">\n\n                          <img src="assets/imgs/shirt-3.jpg">\n\n                      </div>\n\n                      <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                  </ion-card-header>\n\n                  <ion-card-content (click)="itemdetailPage()">\n\n                      <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                      <div class="rateing">\n\n                          <div class="card-btn">\n\n                              <p class="" float-left>\n\n                                  <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                  <span class="text-light bold"> (125)</span>\n\n                              </p>\n\n                              <div style="display: flex;" float-right>\n\n                                  <div class="price text-light mr-5">\n\n                                      <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                  </div>\n\n                                  <div class="price text-sky">\n\n                                      <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                  </div>\n\n                              </div>\n\n                          </div>\n\n                      </div>\n\n                  </ion-card-content>\n\n              </ion-card>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-card>\n\n                  <ion-card-header>\n\n                      <div class="img-box" (click)="itemdetailPage()">\n\n                          <img src="assets/imgs/shirt-4.jpg">\n\n                      </div>\n\n                      <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                  </ion-card-header>\n\n                  <ion-card-content (click)="itemdetailPage()">\n\n                      <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                      <div class="rateing">\n\n                          <div class="card-btn">\n\n                              <p class="" float-left>\n\n                                  <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                  <span class="text-light bold"> (125)</span>\n\n                              </p>\n\n                              <div style="display: flex;" float-right>\n\n                                  <div class="price text-light mr-5">\n\n                                      <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                  </div>\n\n                                  <div class="price text-sky">\n\n                                      <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                  </div>\n\n                              </div>\n\n                          </div>\n\n                      </div>\n\n                  </ion-card-content>\n\n              </ion-card>\n\n            </ion-col>\n\n          </ion-row>\n\n      </ion-slide>\n\n      <ion-slide>\n\n          <p><!-- {{"feature_item" | translate}} -->Categorías\n\n            <small class="bg-green btn-round text-white" float-right (click)="goListPymes()">{{"view_all" | translate}}<!--  Ver todas nuestras tiendas --></small>\n\n          </p>\n\n        \n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-card>\n\n                    <ion-card-header>\n\n                        <div class="img-box" (click)="itemdetailPage()">\n\n                            <img src="assets/imgs/slider1.jpg">\n\n                        </div>\n\n                     <!--    <ion-icon name="md-heart" class="text-light icon"></ion-icon> -->\n\n                    </ion-card-header>\n\n                    <ion-card-content (click)="itemdetailPage()">\n\n                        <h1 text-center>Zona de Ofertas</h1>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n              </ion-col>\n\n          <ion-col>\n\n              <ion-card>\n\n                  <ion-card-header>\n\n                      <div class="img-box" (click)="goListIndependients()">\n\n                          <img src="assets/imgs/slider2.jpg">\n\n                      </div>\n\n                   <!--    <ion-icon name="md-heart" class="text-light icon"></ion-icon> -->\n\n                  </ion-card-header>\n\n                  <ion-card-content (click)="goListIndependients()">\n\n                      <h1 text-center>Zona de Profesionales</h1>\n\n                  </ion-card-content>\n\n              </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n        \n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-card>\n\n                    <ion-card-header>\n\n                        <div class="img-box" (click)="goListSellers()">\n\n                            <img src="assets/imgs/slider3.jpg">\n\n                        </div>\n\n                     <!--    <ion-icon name="md-heart" class="text-light icon"></ion-icon> -->\n\n                    </ion-card-header>\n\n                    <ion-card-content (click)="goListSellers()">\n\n                        <h1 text-center>Zona de Seller</h1>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n              </ion-col>\n\n          <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box" (click)="goListProducts()">\n\n                        <img src="assets/imgs/slider1.jpg">\n\n                    </div>\n\n                 <!--    <ion-icon name="md-heart" class="text-light icon"></ion-icon> -->\n\n                </ion-card-header>\n\n                <ion-card-content (click)="goListProducts()">\n\n                    <h1 text-center>Zona de Productos</h1>\n\n                </ion-card-content>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n        </ion-slide>\n\n</ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_users_module_users_module__["a" /* UsersModuleProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_gps_gps__["a" /* GpsProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsModuleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertsModuleProvider = (function () {
    function AlertsModuleProvider(alertCtrl, toastCtrl, loadingCtrl, menuCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
    }
    AlertsModuleProvider.prototype.alert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    AlertsModuleProvider.prototype.toast = function (message, duration, position) {
        if (duration === void 0) { duration = 3000; }
        if (position === void 0) { position = 'top'; }
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.present();
    };
    AlertsModuleProvider.prototype.menu = function (id) {
        this.menuCtrl.enable(true, id);
    };
    AlertsModuleProvider.prototype.loading = function (content) {
        return this.loadingCtrl.create({ content: content });
    };
    AlertsModuleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], AlertsModuleProvider);
    return AlertsModuleProvider;
}());

//# sourceMappingURL=alerts-module.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistPage = (function () {
    function WishlistPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    WishlistPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    WishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-wishlist ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\wishlist\wishlist.html"*/'<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"wishlist" | translate}} (3)\n\n            <span float-right>                  \n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt\n\n                        <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                    </h4>\n\n                    <div class="rateing">\n\n                        <p class=text-light>Man\'s shirt </p>\n\n                        <div class="card-btn" padding-top>\n\n                            <div class="">\n\n                                <div float-left>\n\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                                    <span class="text-light small-text">(125 {{"review" | translate}})</span>\n\n                                </div>\n\n                                <div style="display: flex;" float-right>\n\n                                    <div class="price text-light mr-5">\n\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                    </div>\n\n                                    <div class="price text-sky">\n\n                                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/bag.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skybags Leo 26 ltrs Red Casual Backpack\n\n                        <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                    </h4>\n\n                    <div class="rateing">\n\n                        <p class=text-light>bags & Backpack</p>\n\n                        <div class="card-btn" padding-top>\n\n                            <div class="">\n\n                                <div float-left>\n\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                                    <span class="text-light small-text">(125 {{"review" | translate}})</span>\n\n                                </div>\n\n                                <div style="display: flex;" float-right>\n\n                                    <div class="price text-light mr-5">\n\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                    </div>\n\n                                    <div class="price text-sky">\n\n                                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/wach.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skmei Analog-Digital Mul- ticolor Dil Men\'s Watch\n\n                        <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                    </h4>\n\n                    <div class="rateing">\n\n                        <p class=text-light>Wrist watch</p>\n\n                        <div class="card-btn" padding-top>\n\n                            <div class="rateing">\n\n                                <div float-left>\n\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                                    <span class="text-light small-text">(125 {{"review" | translate}})</span>\n\n                                </div>\n\n                                <div style="display: flex;" float-right>\n\n                                    <div class="price text-light mr-5">\n\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                    </div>\n\n                                    <div class="price text-sky">\n\n                                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\wishlist\wishlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return headersModel; });
var headersModel = (function () {
    function headersModel(token, client, uid) {
        this.token = token;
        this.client = client;
        this.uid = uid;
    }
    return headersModel;
}());

//# sourceMappingURL=headers.model.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_phonenumber_phonenumber__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_category_category__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_wishlist_wishlist__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_account_my_account__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_myorder_1_myorder_1__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_myorder_2_myorder_2__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_help_help__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_review_review__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_config__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__node_modules_ngx_translate_core__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_globalization__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_password_password__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_createaccount_createaccount__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tab_tab__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_alerts_module_alerts_module__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_token__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_routes__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_chat_chat__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_notifications_notifications__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


























var MyApp = (function () {
    function MyApp(config, globalization, platform, statusBar, splashScreen, translate, storage, alertCtrl, alert, _tokenService, modalCtrl) {
        this.config = config;
        this.globalization = globalization;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.alert = alert;
        this._tokenService = _tokenService;
        this.modalCtrl = modalCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.translate.setDefaultLang('en');
        this.platform.ready().then(function () {
            _this._tokenService.init({
                apiBase: __WEBPACK_IMPORTED_MODULE_23__providers_routes__["a" /* ROOT */]
            });
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.platform.is('cordova')) {
                _this.globalization.getPreferredLanguage().then(function (result) {
                    console.log(result);
                    var suitableLang = _this.getSuitableLanguage(result.value);
                    console.log(suitableLang);
                    _this.translate.use(suitableLang);
                    _this.setDirectionAccordingly(suitableLang);
                }).catch(function (e) {
                    console.log(e);
                    _this.translate.use('es');
                    _this.platform.setDir('ltr', true);
                });
            }
            else {
                _this.translate.use('es');
                _this.setDirectionAccordingly('es');
                // this.setDirectionAccordingly('ar');
            }
            _this.storage.get('user').then(function (user) {
                if (user) {
                    _this.user = JSON.parse(user);
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_19__pages_tab_tab__["a" /* TabPage */]);
                }
            });
        });
    };
    MyApp.prototype.setDirectionAccordingly = function (lang) {
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
    };
    MyApp.prototype.setDirection = function () {
        console.log('plat rtl: ' + this.platform.isRTL);
        if (this.platform.isRTL) {
            this.platform.setDir('rtl', true);
        }
        else {
            this.platform.setDir('ltr', true);
        }
    };
    MyApp.prototype.getSideOfCurLang = function () {
        return this.platform.dir() === 'rtl' ? "right" : "left";
    };
    MyApp.prototype.getSuitableLanguage = function (language) {
        language = language.substring(0, 2).toLowerCase();
        console.log('check for: ' + language);
        return this.config.availableLanguages.some(function (x) { return x.code == language; }) ? language : 'en';
    };
    MyApp.prototype.myorder_1Page = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_myorder_1_myorder_1__["a" /* Myorder_1Page */]);
    };
    MyApp.prototype.myorder_2Page = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_myorder_2_myorder_2__["a" /* Myorder_2Page */]);
    };
    MyApp.prototype.my_accountPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_my_account_my_account__["a" /* My_accountPage */]);
    };
    MyApp.prototype.categoryPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_category_category__["a" /* CategoryPage */]);
    };
    MyApp.prototype.homePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.reviewPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_review_review__["a" /* ReviewPage */]);
    };
    MyApp.prototype.loginPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_17__pages_password_password__["a" /* PasswordPage */]);
    };
    MyApp.prototype.wishlistPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_wishlist_wishlist__["a" /* WishlistPage */]);
    };
    MyApp.prototype.cartPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.helpPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_help_help__["a" /* HelpPage */]);
    };
    MyApp.prototype.registerPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_18__pages_createaccount_createaccount__["a" /* CreateaccountPage */]);
    };
    MyApp.prototype.phonenumberPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_phonenumber_phonenumber__["a" /* PhonenumberPage */]);
    };
    MyApp.prototype.chatPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_24__pages_chat_chat__["a" /* ChatPage */]);
    };
    MyApp.prototype.notificationPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_25__pages_notifications_notifications__["a" /* NotificationsPage */]);
        modal.present();
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            message: '¿Estas seguro que quieres cerrar sesión?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        var loading = _this.alert.loading('Cerrando sesión...');
                        _this.storage.remove('user');
                        loading.present().then(function () {
                            _this.alert.alert('Alerta!', "Cierre de sesión exitoso");
                            _this.alert.menu('unauthenticated');
                            loading.dismiss();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\app\app.html"*/'<ion-menu [content]="content" [side]="ltr" id="unauthenticated">\n\n    <ion-header>\n\n<!--         <ion-toolbar>\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/profile_pix.png">\n\n                    </ion-avatar>\n\n                    <h2>{{"hey" | translate}} Tarun\n\n                        <ion-icon name="ios-arrow-forward"></ion-icon>\n\n                    </h2>\n\n                    <p>+91 9087654321</p>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-toolbar> -->\n\n <!--        <div class="menu-tabs" padding text-center>\n\n            <ion-row>\n\n                <ion-col col-4 menuClose (click)="myorder_1Page()">\n\n                    <img src="assets/imgs/my_order.png">\n\n                    <p>{{"my_order" | translate}}</p>\n\n                </ion-col>\n\n                <ion-col col-4 menuClose (click)="my_accountPage()">\n\n                    <img src="assets/imgs/my-card.png">\n\n                    <p>{{"my_cards" | translate}}</p>\n\n                </ion-col>\n\n                <ion-col col-4 menuClose (click)="my_accountPage()">\n\n                    <img src="assets/imgs/my_location.png">\n\n                    <p>{{"my_address" | translate}}</p>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div> -->\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n        <div class="menu-title">\n\n            <ion-list>\n\n                <button ion-item menuClose (click)="homePage()">\n\n                    <img src="assets/imgs/ic_home.png ">\n\n                        {{"home" | translate}}\n\n                </button>\n\n                <button ion-item menuClose (click)="loginPage()">\n\n                    <img src="assets/imgs/ic_home.png ">\n\n                        {{"login" | translate}}\n\n                </button>\n\n                <button ion-item menuClose (click)="registerPage()">\n\n                    <img src="assets/imgs/ic_home.png ">\n\n                        {{"sign_up" | translate}}\n\n                </button>\n\n                <button ion-item menuClose (click)="reviewPage()">\n\n                    <img src="assets/imgs/ic_more.png ">\n\n                        {{"add_reviews" | translate}}\n\n                </button>\n\n            </ion-list>\n\n        </div>\n\n    </ion-content>\n\n\n\n</ion-menu>\n\n<ion-menu [content]="content" [side]="ltr" id="authenticated">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/profile_pix.png">\n\n                    </ion-avatar>\n\n                    <h2>{{"hey" | translate}} Ramon Figuera\n\n                        <ion-icon name="ios-arrow-forward"></ion-icon>\n\n                    </h2>\n\n                    <p>+58 4249543868</p>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-toolbar>\n\n        <div class="menu-tabs" padding text-center>\n\n            <ion-row>\n\n                <ion-col col-4 menuClose (click)="myorder_1Page()">\n\n                    <img src="assets/imgs/my_order.png">\n\n                    <p>{{"my_order" | translate}}</p>\n\n                </ion-col>\n\n                <ion-col col-4 menuClose (click)="my_accountPage()">\n\n                    <img src="assets/imgs/my-card.png">\n\n                    <p>{{"my_cards" | translate}}</p>\n\n                </ion-col>\n\n                <ion-col col-4 menuClose (click)="my_accountPage()">\n\n                    <img src="assets/imgs/my_location.png">\n\n                    <p>{{"my_address" | translate}}</p>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n        <div class="menu-title">\n\n            <ion-list>\n\n                <button ion-item menuClose (click)="homePage()">\n\n                    <img src="assets/imgs/ic_home.png ">\n\n                        {{"home" | translate}}\n\n                </button>\n\n                <button ion-item menuClose (click)="chatPage()">\n\n                    <img src="assets/imgs/ic_categories.png ">\n\n                      <!--   {{"categories" | translate}} -->Mensajes\n\n                      <ion-badge id="notifications-badge" color="danger">1</ion-badge>\n\n                </button>\n\n               <!--  <div class="drop-down ">\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_electronics.png ">\n\n                        Electronics\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_fashion.png ">\n\n                        Fashion\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_home_decor.png ">\n\n                        Home Decor\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_mobile.png ">\n\n                        Mobile\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_more.png ">\n\n                        More\n\n                </button>\n\n                </div> -->\n\n                <button ion-item menuClose (click)="notificationPage()">\n\n                        <ion-icon name="notifications-outline" class="notifications-icon"></ion-icon>\n\n                       Notificaciones <ion-badge id="notifications-badge" color="danger">3</ion-badge>\n\n                </button>\n\n                <button ion-item menuClose (click)="wishlistPage()">\n\n                    <img src="assets/imgs/ic_my_wishlist.png ">\n\n                        {{"wishlist" | translate}} (3)\n\n                </button>\n\n                <button ion-item menuClose (click)="my_accountPage()">\n\n                    <img src="assets/imgs/ic_my_account.png ">\n\n                        {{"my_account" | translate}}\n\n                </button>\n\n        <!--         <button ion-item menuClose (click)="helpPage()">\n\n                    <img src="assets/imgs/ic_help.png ">\n\n                        {{"help_center" | translate}}\n\n                </button> -->\n\n                <button ion-item menuClose (click)="logout()">\n\n                    <img src="assets/imgs/ic_logout.png ">\n\n                        {{"logout" | translate}}\n\n                </button>\n\n                <button ion-item menuClose (click)="reviewPage()">\n\n                    <img src="assets/imgs/ic_more.png ">\n\n                        {{"add_reviews" | translate}}\n\n                </button>\n\n            </ion-list>\n\n        </div>\n\n    </ion-content>\n\n\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" [class]="deviceModel" #content swipeBackEnabled="false " type="overlay"></ion-nav>'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\app\app.html"*/
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_14__app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_16__ionic_native_globalization__["a" /* Globalization */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__node_modules_ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_21__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_22_angular2_token__["b" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellersModuleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SellersModuleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SellersModuleProvider = (function () {
    function SellersModuleProvider(http) {
        this.http = http;
        console.log('Hello SellersModuleProvider Provider');
    }
    SellersModuleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SellersModuleProvider);
    return SellersModuleProvider;
}());

//# sourceMappingURL=sellers-module.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductsProvider = (function () {
    function ProductsProvider(http) {
        this.http = http;
        console.log('Hello ProductsProvider Provider');
    }
    ProductsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProductsProvider);
    return ProductsProvider;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var GpsProvider = (function () {
    function GpsProvider(diagnostic, nativeGeocoder, geolocation, storage) {
        this.diagnostic = diagnostic;
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation = geolocation;
        this.storage = storage;
    }
    GpsProvider.prototype.isLocationAuthorized = function () {
        return __awaiter(this, void 0, void 0, function () {
            var GpsLocationEnabled;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diagnostic.isLocationAuthorized()];
                    case 1:
                        GpsLocationEnabled = _a.sent();
                        if (GpsLocationEnabled) {
                            return [2 /*return*/, GpsLocationEnabled];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GpsProvider.prototype.isLocationEnabled = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isAvailable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diagnostic.isLocationEnabled()];
                    case 1:
                        isAvailable = _a.sent();
                        if (isAvailable) {
                            return [2 /*return*/, isAvailable];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GpsProvider.prototype.isGpsLocationAvailable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isGpsLocationAvailable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diagnostic.isGpsLocationAvailable()];
                    case 1:
                        isGpsLocationAvailable = _a.sent();
                        if (isGpsLocationAvailable) {
                            return [2 /*return*/, isGpsLocationAvailable];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GpsProvider.prototype.get_address = function () {
        var _this = this;
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
                .then(function (result) {
                var address = result[0];
                _this.storage.set('country', address.countryName);
                return address.countryName;
            })
                .catch(function (error) { return console.log(error); });
        });
    };
    GpsProvider.prototype.getExistentCountry = function () {
        return this.storage.get('country');
    };
    GpsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], GpsProvider);
    return GpsProvider;
}());

//# sourceMappingURL=gps.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModuleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_headers_model__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersModuleProvider = (function () {
    function UsersModuleProvider(http, _tokenService, storage) {
        this.http = http;
        this._tokenService = _tokenService;
        this.storage = storage;
    }
    UsersModuleProvider.prototype.SignIn = function (user) {
        return this._tokenService.signIn({
            email: user.email,
            password: user.password
        });
    };
    UsersModuleProvider.prototype.SignUp = function (user) {
        return this._tokenService.post(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].registerUser(), user);
    };
    UsersModuleProvider.prototype.refresh_Headers = function (data) {
        var token, uid, client;
        client = data['headers'].get('client');
        uid = data['headers'].get('uid');
        data = JSON.parse(data['_body']);
        var user = JSON.stringify(data['data']);
        var header = new __WEBPACK_IMPORTED_MODULE_5__models_headers_model__["a" /* headersModel */](token, client, uid);
        this.storage.set('headers', header);
        this.storage.set('user', user);
    };
    UsersModuleProvider.prototype.check_User = function () {
        return this.storage.get('user');
    };
    UsersModuleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_token__["b" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], UsersModuleProvider);
    return UsersModuleProvider;
}());

//# sourceMappingURL=users-module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_verification__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_module_users_module__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alerts_module_alerts_module__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PasswordPage = (function () {
    function PasswordPage(navCtrl, userProvider, alerts, fb) {
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.alerts = alerts;
        this.fb = fb;
        this.types = 'password';
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* UserModel */];
        this.initForm();
    }
    PasswordPage.prototype.verificationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__verification_verification__["a" /* VerificationPage */]);
    };
    PasswordPage.prototype.login = function () {
        var _this = this;
        var load = this.alerts.loading('Iniciando sesion...');
        load.present();
        this.userProvider.SignIn(this.user).subscribe(function (data) {
            console.log(data);
            load.dismiss();
            _this.userProvider.refresh_Headers(data);
            _this.alerts.menu('authenticated');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }, function (error) {
            load.dismiss();
            _this.alerts.toast("Credenciales invalidas. Por favor intente de nuevo.", 3000, 'top');
        });
    };
    PasswordPage.prototype.type = function () {
        if (this.types == 'password') {
            this.types = 'text';
        }
        else {
            this.types = 'password';
        }
    };
    PasswordPage.prototype.initForm = function () {
        this.form = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].minLength(6)])],
            password: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].pattern(/^[a-z0-9_-]{6,18}$/), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required]]
        });
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-password ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\password\password.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n    <ion-title>{{"login_box2" | translate}} </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="form" padding-left padding-right>\n\n    <!-- <p text-center>{{"forgot_password_text" | translate}}</p> -->\n\n    <form padding [formGroup]="form" novalidate>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label float>{{"login_box1" | translate}}</ion-label>\n\n            <ion-input type="email" text-right formControlName="email" [(ngModel)]="user.email"></ion-input>\n\n          </ion-item>\n\n          <ion-item no-lines *ngIf="form.get(\'email\').errors && form.get(\'email\').dirty">\n\n            <p color="danger" ion-text *ngIf="form.get(\'email\').hasError(\'required\')">Campo requerido</p>\n\n            <p color="danger" ion-text *ngIf="form.get(\'email\').hasError(\'email\')">Email invalido</p>\n\n          </ion-item> \n\n          <div class="d-flex">\n\n              <ion-item>\n\n                <ion-label>{{"login_box2" | translate}}</ion-label>\n\n                <ion-input type={{types}} text-right formControlName="password" type="password" [(ngModel)]="user.password" ></ion-input>\n\n              </ion-item>\n\n              <ion-icon name="ios-eye-outline" class="text-light eye-icon" [class.active]="types == \'text\'" (click)="type()"></ion-icon>\n\n            </div>\n\n            <ion-item no-lines *ngIf="form.get(\'password\').errors && form.get(\'password\').dirty">\n\n              <p color="danger" ion-text *ngIf="form.get(\'password\').hasError(\'required\')">Campo requeriod</p>\n\n              <p color="danger" ion-text *ngIf="form.get(\'password\').hasError(\'minlength\' || form.get(\'password\').hasError(\'pattern\'))">Requiere minimo 6 digitos</p>\n\n            </ion-item>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="login()" [disabled]="form.invalid">{{"continue" | translate}}</button>\n\n    <p text-center class="text-sky">{{"forgot_password" | translate}}</p>\n\n  </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\Projects Ionic\BigWave\src\pages\password\password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_users_module_users_module__["a" /* UsersModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ })

},[397]);
//# sourceMappingURL=main.js.map