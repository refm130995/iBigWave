webpackJsonp([15],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_verification__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_module_users_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alerts_module_alerts_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recovery_recovery__ = __webpack_require__(193);
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
    function PasswordPage(navCtrl, userProvider, alerts, fb, menuCtrl, events) {
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.alerts = alerts;
        this.fb = fb;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.types = 'password';
        this.user = [];
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
            console.log('hola', data);
            load.dismiss();
            _this.userProvider.refresh_Headers(data);
            _this.menuCtrl.enable(false, 'unauthenticated');
            _this.menuCtrl.enable(true, 'authenticated');
            _this.events.publish("userLogin");
            console.log(_this.user);
            /*  this.user = JSON.parse(data['_body']).data.attributes;; */
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
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
    PasswordPage.prototype.recoveryPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__recovery_recovery__["a" /* RecoveryPage */]);
    };
    PasswordPage.prototype.initForm = function () {
        this.form = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].minLength(6)])],
            password: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].pattern(/^[a-z0-9_-]{6,18}$/), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]]
        });
    };
    PasswordPage.prototype.removeSpaces = function (email) {
        this.user.password = email.replace(/\s/g, '');
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-password ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\password\password.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n    <ion-title>{{"login_box2" | translate}} </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="form" padding-left padding-right>\n\n    <!-- <p text-center>{{"forgot_password_text" | translate}}</p> -->\n\n    <form padding [formGroup]="form" novalidate>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label float><!-- {{"login_box1" | translate}} -->Email</ion-label>\n\n            <ion-input type="email" text-right formControlName="email" [(ngModel)]="user.email"></ion-input>\n\n          </ion-item>\n\n          <ng-container *ngIf="form.get(\'email\').errors && form.get(\'email\').dirty">\n\n            <p color="danger" ion-text *ngIf="form.get(\'email\').hasError(\'required\')">Campo requerido</p>\n\n            <p color="danger" ion-text *ngIf="form.get(\'email\').hasError(\'email\')">Email invalido</p>\n\n          </ng-container>\n\n         \n\n          <div class="d-flex">\n\n              <ion-item>\n\n                <ion-label>{{"login_box2" | translate}}</ion-label>\n\n                <ion-input type={{types}} text-right formControlName="password" type="password" [(ngModel)]="user.password" (ionBlur)="removeSpaces(user.password)"></ion-input>\n\n              </ion-item>\n\n              <ion-icon name="ios-eye-outline" class="text-light eye-icon" [class.active]="types == \'text\'" (click)="type()"></ion-icon>\n\n            </div>\n\n            <ng-container *ngIf="form.get(\'password\').errors && form.get(\'password\').dirty">\n\n              <p color="danger" ion-text *ngIf="form.get(\'password\').hasError(\'required\')">Campo requeriod</p>\n\n              <p color="danger" ion-text *ngIf="form.get(\'password\').hasError(\'minlength\' || form.get(\'password\').hasError(\'pattern\'))">Requiere minimo 6 digitos</p>\n\n            </ng-container>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="login()" [disabled]="form.invalid">{{"continue" | translate}}</button>\n\n    <p text-center class="text-sky" (click)="recoveryPass()">{{"forgot_password" | translate}}</p>\n\n  </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\password\password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_users_module_users_module__["a" /* UsersModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndependientsModuleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_module_users_module__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndependientsModuleProvider = (function () {
    function IndependientsModuleProvider(http, _tokenService, userProvider) {
        this.http = http;
        this._tokenService = _tokenService;
        this.userProvider = userProvider;
        this._options = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }) };
        this.initHeaders();
    }
    IndependientsModuleProvider.prototype.createIndependient = function (independient) {
        var params = { "profile": independient };
        return this._tokenService.post(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].independentsCreate(), params).map(function (res) { return res; });
    };
    IndependientsModuleProvider.prototype.getIndependients = function () {
        return this._tokenService.get(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].independents());
    };
    IndependientsModuleProvider.prototype.initHeaders = function () {
        var _this = this;
        this.userProvider.check_storage('headers').then(function (data) {
            _this._options.headers['access-token'];
            _this._options.headers.append('uid', data.uid);
            _this._options.headers.append('client', data.client);
        });
    };
    IndependientsModuleProvider.prototype.getFollowing = function () {
        return this._tokenService.get(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].following("independents"));
    };
    IndependientsModuleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_token__["b" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_4__users_module_users_module__["a" /* UsersModuleProvider */]])
    ], IndependientsModuleProvider);
    return IndependientsModuleProvider;
}());

//# sourceMappingURL=independients-module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartModuleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartModuleProvider = (function () {
    function CartModuleProvider(http, _tokenService) {
        this.http = http;
        this._tokenService = _tokenService;
    }
    CartModuleProvider.prototype.getCart = function () {
        this._tokenService.get(__WEBPACK_IMPORTED_MODULE_2__routes__["b" /* routes */].getCart());
    };
    CartModuleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_angular2_token__["b" /* Angular2TokenService */]])
    ], CartModuleProvider);
    return CartModuleProvider;
}());

//# sourceMappingURL=cart-module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shirts_shirts__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(28);
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
            selector: 'page-category ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\category\category.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png" style="width: 100%"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"fashion" | translate}}\n\n            <span float-right> \n\n              <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>     \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="man-fashion">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <img src="assets/imgs/man-fashion.png">\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <h6 class="text-white">MEN\'S FASHION</h6>\n\n                <p class="text-white" (click)="shirtsPage()">Shirts\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Tshirts\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Jens\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Trousers\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n\n\n    <div class="girl-fashion">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <img src="assets/imgs/girl-fashion.png">\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <h6 class="text-white">WOMEN\'S FASHION</h6>\n\n                <p class="text-white">Western Wear\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Sarees\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Kurtis\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Lingerie\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n\n\n    <div class="kids-fashion">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <img src="assets/imgs/kid-fashion.png">\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <h6 class="text-white">KIDS\'S FASHION</h6>\n\n                <p class="text-white">Boy\'s Wear\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Girl\'s Wear\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Baby Wear\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Baby Girl\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\category\category.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PymesModuleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_module_users_module__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PymesModuleProvider = (function () {
    function PymesModuleProvider(http, _tokenService, userProvider) {
        this.http = http;
        this._tokenService = _tokenService;
        this.userProvider = userProvider;
        this._options = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }) };
        this.initHeaders();
    }
    PymesModuleProvider.prototype.getPymes = function () {
        return this._tokenService.get(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].pymes());
    };
    PymesModuleProvider.prototype.createPyme = function (pyme) {
        var params = { "profile": pyme };
        return this._tokenService.post(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].pymesCreate(), params);
    };
    PymesModuleProvider.prototype.initHeaders = function () {
        var _this = this;
        this.userProvider.check_storage('headers').then(function (data) {
            _this._options.headers['access-token'];
            _this._options.headers.append('uid', data.uid);
            _this._options.headers.append('client', data.client);
        });
    };
    PymesModuleProvider.prototype.getFollowing = function () {
        return this._tokenService.get(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].following("pymes"));
    };
    PymesModuleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_token__["b" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_4__users_module_users_module__["a" /* UsersModuleProvider */]])
    ], PymesModuleProvider);
    return PymesModuleProvider;
}());

//# sourceMappingURL=pymes-module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellersModuleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_module_users_module__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SellersModuleProvider = (function () {
    function SellersModuleProvider(http, _tokenService, userProvider) {
        this.http = http;
        this._tokenService = _tokenService;
        this.userProvider = userProvider;
        this._options = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }) };
        this.initHeaders();
    }
    SellersModuleProvider.prototype.createSellers = function (seller) {
        var params = { "profile": seller };
        console.log(params);
        return this._tokenService.post(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].sellersCreate(), params);
    };
    SellersModuleProvider.prototype.getSellers = function () {
        return this._tokenService.get(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].sellers());
    };
    SellersModuleProvider.prototype.initHeaders = function () {
        var _this = this;
        this.userProvider.check_storage('headers').then(function (data) {
            _this._options.headers['access-token'];
            _this._options.headers.append('uid', data.uid);
            _this._options.headers.append('client', data.client);
        });
    };
    SellersModuleProvider.prototype.getFollowing = function () {
        return this._tokenService.get(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].following("sellers"));
    };
    SellersModuleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_token__["b" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_4__users_module_users_module__["a" /* UsersModuleProvider */]])
    ], SellersModuleProvider);
    return SellersModuleProvider;
}());

//# sourceMappingURL=sellers-module.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_module_users_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alerts_module_alerts_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__password_password__ = __webpack_require__(103);
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
    function CreateaccountPage(navCtrl, userProvider, alerts, fb) {
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.alerts = alerts;
        this.fb = fb;
        this.types = 'password';
        this.user = new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* UserModel */];
        this.initForm();
    }
    CreateaccountPage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
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
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__password_password__["a" /* PasswordPage */]);
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
        this.form = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6)])],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^[a-z0-9_-]{6,18}$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]]
        });
    };
    CreateaccountPage.prototype.removeSpaces = function (email) {
        this.user.password = email.replace(/\s/g, '');
    };
    CreateaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-createaccount',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\createaccount\createaccount.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n    <ion-title>{{"create_account" | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="form" padding-left padding-right>\n\n \n\n    <p text-center padding-bottom margin-bottom>{{"sign_up_label" | translate}}</p>\n\n    <ion-list>\n\n      <ion-item>  \n\n        <ion-label>{{"phone" | translate}}</ion-label>\n\n        <ion-input type="tel" text-right [(ngModel)]="user.phone"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label>Nombre</ion-label>\n\n          <ion-input type="text" text-right [(ngModel)]="user.name"></ion-input>\n\n        </ion-item>\n\n      <ion-item>\n\n        <ion-label>Nickname</ion-label>\n\n        <ion-input type="text" text-right [(ngModel)]="user.nickname"></ion-input>\n\n      </ion-item>\n\n      <form [formGroup]="form" novalidate>\n\n      <ion-item>\n\n          <ion-label float><!-- {{"login_box1" | translate}} -->Email</ion-label>\n\n          <ion-input type="email" text-right formControlName="email" [(ngModel)]="user.email"></ion-input>\n\n        </ion-item>\n\n        <ng-container *ngIf="form.get(\'email\').errors && form.get(\'email\').dirty">\n\n          <p color="danger" ion-text *ngIf="form.get(\'email\').hasError(\'required\')">Campo requerido</p>\n\n          <p color="danger" ion-text *ngIf="form.get(\'email\').hasError(\'email\')">Email invalido</p>\n\n        </ng-container>\n\n       \n\n        <div class="d-flex">\n\n            <ion-item>\n\n              <ion-label>{{"login_box2" | translate}}</ion-label>\n\n              <ion-input type={{types}} text-right formControlName="password" type="password" [(ngModel)]="user.password" (ionBlur)="removeSpaces(user.password)"></ion-input>\n\n            </ion-item>\n\n            <ion-icon name="ios-eye-outline" class="text-light eye-icon" [class.active]="types == \'text\'" (click)="type()"></ion-icon>\n\n          </div>\n\n          <ng-container *ngIf="form.get(\'password\').errors && form.get(\'password\').dirty">\n\n            <p color="danger" ion-text *ngIf="form.get(\'password\').hasError(\'required\')">Campo requeriod</p>\n\n            <p color="danger" ion-text *ngIf="form.get(\'password\').hasError(\'minlength\' || form.get(\'password\').hasError(\'pattern\'))">Requiere minimo 6 digitos</p>\n\n          </ng-container>\n\n          </form>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="register()">Registrar</button>\n\n    <p text-center>\n\n      <small>\n\n        {{"tnc_prelabel" | translate}} \n\n        <span class="text-sky"> {{"tnc" | translate}} </span>\n\n      </small>\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\createaccount\createaccount.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_users_module_users_module__["a" /* UsersModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CreateaccountPage);
    return CreateaccountPage;
}());

//# sourceMappingURL=createaccount.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_messages__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_gps_gps__ = __webpack_require__(52);
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
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\chat\chat.html"*/'<ion-header class="bg-thime">\n    <ion-navbar>\n      <button ion-button menuToggle style="display: block !important;">\n        <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png">\n          <ion-badge id="notifications-badge" color="danger">4</ion-badge>\n        </ion-icon>\n      </button>\n  \n      <ion-title text-uppercase text-center>{{"app_title" | translate}} <br>\n         <div (click)="selectCountry()" class="country"> <small> {{country}}</small> <ion-icon name="arrow-dropdown"></ion-icon></div>\n        <span float-right>\n          <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n          <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;">\n            <ion-badge id="notifications-badge" color="danger">2</ion-badge>\n          </ion-icon>\n        </span>\n      </ion-title>\n    </ion-navbar>\n  <!--   <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'search_box\' | translate}}" (click)="searchPage()"></ion-searchbar> -->\n\n    <div padding>\n        <ion-segment [(ngModel)]="segment">\n          <ion-segment-button value="message">\n            Mensajes\n          </ion-segment-button>\n          <ion-segment-button value="peoples">\n            Cotizaciones\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n  </ion-header>\n<ion-content >\n\n    \n    <div [ngSwitch]="segment">\n      <ion-list *ngSwitchCase="\'message\'">\n        <ion-item no-lines (click)="messagesPage()">\n          <ion-thumbnail item-start>\n            <ion-item>\n              <ion-avatar item-start>\n                  <img src="assets/imgs/suit_PNG8132.png">\n              </ion-avatar>\n              <h2 class="description">Unique For Men Black Formal Slim Fit Shirt</h2> \n               <p>Si amigo, compre con confianza.</p>\n            </ion-item>\n          </ion-thumbnail>\n        </ion-item>\n    \n     \n    \n      </ion-list>\n    \n      <ion-list *ngSwitchCase="\'peoples\'" padding>\n        <div class="boxChat">\n          <div class="itemL">\n              <ion-row justify-content-center>\n        \n                <ion-col col-10 class="padN">\n                  <div class="boxChatType">\n                      <img src="assets/imgs/suit_PNG8132.png">\n                    <p>Nombre de usuario</p>\n                  </div>\n                </ion-col>\n                <ion-col col-2 class="padN" text-right>\n                  <small>12:56</small> <br>\n      \n                    <small class="bg-blue btn-round text-white"> Status</small>\n              \n                </ion-col>\n        <ion-note>Ultimo mensaje</ion-note>\n              </ion-row>\n            </div>\n            <div class="itemL">\n                <ion-row justify-content-center>\n          \n                  <ion-col col-10 class="padN">\n                    <div class="boxChatType">\n                        <img src="assets/imgs/suit_PNG8132.png">\n                      <p>Nombre de usuario</p>\n                    </div>\n                  </ion-col>\n                  <ion-col col-2 class="padN" text-right>\n                    <small>12:56</small>\n                    \n                        <small class="bg-blue btn-round text-white"> Status</small>\n                    \n                  </ion-col>\n                  <ion-note>Ultimo mensaje</ion-note>\n                </ion-row>\n              </div>\n        </div>\n      </ion-list>\n    </div>\n  </ion-content>'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_gps_gps__["a" /* GpsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_gps_gps__ = __webpack_require__(52);
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
            selector: 'page-messages',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\messages\messages.html"*/'<ion-header class="bg-thime">\n    <ion-navbar>\n  \n      <ion-title text-uppercase text-center>{{"app_title" | translate}} <br>\n         <div (click)="selectCountry()" class="country"> <small> {{country}}</small> <ion-icon name="arrow-dropdown"></ion-icon></div>\n        <span float-right>\n          <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n          <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n        </span>\n      </ion-title>\n    </ion-navbar>\n  <!--   <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'search_box\' | translate}}" (click)="searchPage()"></ion-searchbar> -->\n\n  </ion-header>\n\n\n  <ion-content padding>\n    <div class="boxChat">\n      <ion-grid>\n        <div class="itemR">\n          <ion-row justify-content-center>\n            <ion-col col-2 class="padN" text-right>\n              <small>12:56</small>\n            </ion-col>\n            <ion-col col-10 class="padN">\n              <div class="boxChatType">\n                  <img src="assets/imgs/profile_pix.png">\n                <p>Buen dia, ¿aun disponible?</p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div class="itemL">\n          <ion-row justify-content-center>\n    \n            <ion-col col-10 class="padN">\n              <div class="boxChatType">\n                  <img src="assets/imgs/suit_PNG8132.png">\n                <p>Si amigo, compre con confianza.</p>\n              </div>\n            </ion-col>\n            <ion-col col-2 class="padN" text-right>\n              <small>12:56</small>\n            </ion-col>\n    \n          </ion-row>\n        </div>\n         </ion-grid>\n    </div>\n    </ion-content>\n    <ion-footer>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-10>\n                <ion-item>\n                    <ion-label></ion-label>\n                    <ion-input type="email" text-left placeholder="Escribe un mensaje aqui "></ion-input>\n                  </ion-item>\n            </ion-col>\n            <ion-col col-2>\n              <ion-icon name="paper-plane"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-footer>\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\messages\messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_gps_gps__["a" /* GpsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-country',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\country\country.html"*/'\n  \n  <ion-content class="bg-light">\n      <div class="your-cart bg-thime">\n          <ion-card>\n              <ion-card-content>\n                  <ion-row>\n                      <ion-col col-12>\n                          <ion-item>\n                              <ion-select [(ngModel)]="newCountry" interface="popover"  class="selector">\n                                <ion-option [hidden] = "newCountry == value" value="Chile">Chile</ion-option>\n                                <ion-option  [hidden] = "newCountry == value" value="Peru">Peru</ion-option>\n                                <ion-option  [hidden] = "newCountry == value" value="Venezuela">Venezuela</ion-option>\n                              </ion-select>\n                            </ion-item>\n                      </ion-col>\n                  </ion-row>\n              </ion-card-content>\n          </ion-card>\n\n  \n  \n          <ion-row class="checkout">\n              <ion-col col-6 class="btn_save">\n                  <button ion-button full class="bg-green btn-round btn-text btn-shadow" text-center (click)="dismiss()">{{"select_location" | translate}}</button>\n              </ion-col>\n          </ion-row>\n      </div>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\country\country.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], CountryPage);
    return CountryPage;
}());

//# sourceMappingURL=country.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndependientsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alerts_module_alerts_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_independients_module_independients_module__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__itemdetail_itemdetail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_token__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_users_module_users_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_routes__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var IndependientsPage = (function () {
    function IndependientsPage(navCtrl, navParams, loading, toastCtrl, alertCtrl, _tokenService, userProvider, alert, independientsProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this._tokenService = _tokenService;
        this.userProvider = userProvider;
        this.alert = alert;
        this.independientsProvider = independientsProvider;
        this.storage = storage;
        this.independients = [];
        this.independientsAll = [];
        this.categories = [];
        this.categoriesCheck = [];
        this.showSearch = false;
        this.titleFiltrar = "Filtrar";
        this.slides = [
            {
                title: "Zona de Tiendas",
                description: "Descubre iBigWave",
                smalltext: "Consigue los mejores precios",
                image: "assets/imgs/slider1.jpg"
            }
        ];
    }
    IndependientsPage.prototype.ionViewDidLoad = function () {
        this.checkUser();
        this.getListIndependients();
    };
    IndependientsPage.prototype.checkUser = function () {
        var _this = this;
        this.userProvider.getUser().subscribe(function (resp) {
            _this.user = JSON.parse(resp['_body']).data.attributes;
        }, function (error) {
            if (error.status == 401) {
                console.log(error);
                _this.storage.remove('user');
                _this.alert.alert('Alerta!', "Su sesión ha expirado.");
                _this.alert.menu('unauthenticated');
                _this.user = null;
            }
        });
    };
    IndependientsPage.prototype.getListIndependients = function () {
        var _this = this;
        var load = this.alert.loading('Cargando informacion...');
        load.present();
        this.independientsProvider.getIndependients().subscribe(function (data) {
            load.dismiss();
            data = JSON.parse(data['_body']);
            if (data['data'].length) {
                _this.independientsAll = data['data'];
                _this.independients = _this.independientsAll;
                console.log(_this.independients);
                if (!_this.user) {
                    _this.showFollowing2();
                }
                else {
                    console.log(_this.user);
                    _this.showFollow();
                }
            }
        }, function (error) {
            console.log(error);
            _this.alert.alert("Alerta!", "Ha ocurrido un error al cargar la información.");
        });
    };
    IndependientsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    IndependientsPage.prototype.showAll = function () {
        this.independients = this.independientsAll;
    };
    IndependientsPage.prototype.showFollowProfile = function () {
        var _this = this;
        if (!this.user) {
            var confirm_1 = this.alertCtrl.create({
                title: 'Seguir Tienda',
                message: 'Para seguir un perfil debes registrarte',
                buttons: [
                    {
                        text: 'ok',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Registrarse',
                        handler: function () {
                            _this.navCtrl.parent.select(2);
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            if (this.followAll.data.length > 0) {
                this.independients = this.followAll.data;
            }
            else {
                this.messagesDuration("Para seguir un perfil haz click en el icono de la mano", 5000);
            }
        }
    };
    IndependientsPage.prototype.showFollowing = function () {
        for (var i = 0; i < this.independientsAll.length; i++) {
            if (this.follow(this.independientsAll[i])) {
                this.independientsAll[i].followColor = "following";
            }
            else {
                this.independientsAll[i].followColor = "icon-seguir";
            }
        }
        this.independients = this.independientsAll;
    };
    IndependientsPage.prototype.follow = function (item) {
        for (var j = 0; j < this.followAll.data.length; j++) {
            if (item.id == this.followAll.data[j].id) {
                return true;
            }
        }
        return false;
    };
    IndependientsPage.prototype.showFollowing2 = function () {
        for (var i = 0; i < this.independientsAll.length; i++) {
            this.independientsAll[i].followColor = "icon-seguir";
        }
        this.independients = this.independientsAll;
    };
    IndependientsPage.prototype.showFollow = function () {
        var _this = this;
        var loading = this.loading.create({ content: 'Cargando...' });
        loading.present();
        this.independientsProvider.getFollowing().subscribe(function (data) {
            loading.dismiss();
            console.log(data);
            _this.followAll = JSON.parse(data['_body']);
            console.log(_this.followAll);
            for (var i = 0; i < _this.followAll.data.length; i++) {
                _this.followAll.data[i].followColor = "following";
            }
            _this.showFollowing();
        }, function (error) {
            console.log(error);
            loading.dismiss();
            _this.messages("Ha ocurrido un error al cargar la inforamción.");
        });
    };
    IndependientsPage.prototype.seguir = function (id, index, name) {
        var _this = this;
        if (!this.user) {
            var confirm_2 = this.alertCtrl.create({
                title: 'Seguir Tienda',
                message: 'Para seguir un perfil debes registrarte',
                buttons: [
                    {
                        text: 'ok',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Registrarse',
                        handler: function () {
                            _this.navCtrl.parent.select(2);
                        }
                    }
                ]
            });
            confirm_2.present();
        }
        else {
            var options_1;
            if (this.independients[index].followColor == "icon-seguir") {
                options_1 = {
                    url: __WEBPACK_IMPORTED_MODULE_7__providers_routes__["b" /* routes */].follow("independents", id),
                    icon: "following"
                };
                var loading_1 = this.loading.create({ content: 'Cargando...' });
                loading_1.present();
                this._tokenService.get(options_1.url).subscribe(function (data) {
                    loading_1.dismiss();
                    console.log(data);
                    data = JSON.parse(data['_body']);
                    console.log(data);
                    _this.independients[index].followColor = options_1.icon;
                    _this.changeFoller(id, options_1.icon);
                    _this.followAll.data.push(_this.independients[index]);
                }, function (error) {
                    console.log(error);
                    loading_1.dismiss();
                    _this.messages("Ha ocurrido un error al cargar la inforamción.");
                });
            }
            else {
                options_1 = {
                    pregunta: '¿Quieres dejar de seguir a ' + name + '?',
                    url: __WEBPACK_IMPORTED_MODULE_7__providers_routes__["b" /* routes */].unfollow("independents", id),
                    icon: "icon-seguir"
                };
                var confirm_3 = this.alertCtrl.create({
                    message: options_1.pregunta,
                    buttons: [
                        {
                            text: 'No',
                            handler: function () {
                                console.log('no');
                            }
                        },
                        {
                            text: 'Si',
                            handler: function () {
                                var loading = _this.loading.create({ content: 'Cargando...' });
                                loading.present();
                                var info = {
                                    unfollow: {
                                        profile_id: id
                                    }
                                };
                                _this._tokenService.post(options_1.url, info).subscribe(function (data) {
                                    loading.dismiss();
                                    console.log(data);
                                    data = JSON.parse(data['_body']);
                                    console.log(data);
                                    _this.independients[index].followColor = options_1.icon;
                                    _this.deleteFollew(id);
                                    _this.changeFoller(id, options_1.icon);
                                }, function (error) {
                                    console.log(error);
                                    loading.dismiss();
                                    _this.messages("Ha ocurrido un error al cargar la inforamción.");
                                });
                            }
                        }
                    ]
                });
                confirm_3.present();
            }
            console.log(id, index);
        }
    };
    IndependientsPage.prototype.deleteFollew = function (id) {
        console.log(id, this.followAll);
        for (var i = 0; i < this.followAll.data.length; i++) {
            if (this.followAll.data[i].id == id) {
                this.followAll.data.splice(i, 1);
                for (i = 0; i < this.independientsAll.length; i++) {
                    if (this.follow(this.independientsAll[i])) {
                        this.independientsAll[i].followColor = "following";
                    }
                    else {
                        this.independientsAll[i].followColor = "icon-seguir";
                    }
                }
                return;
            }
        }
    };
    IndependientsPage.prototype.changeFoller = function (id, icon) {
        for (var i = 0; i < this.independientsAll.length; i++) {
            if (this.independientsAll[i].id == id) {
                this.independientsAll[i].folloColor = icon;
                return;
            }
        }
    };
    IndependientsPage.prototype.getItems = function (searchbar) {
        this.independients = this.independientsAll;
        var q = this.buscar;
        if (!q) {
            return;
        }
        this.independients = this.independientsAll.filter(function (v) {
            if (v.attributes.name && q) {
                if (v.attributes.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    IndependientsPage.prototype.goShowSearch = function () {
        this.showSearch = true;
        this.titleFiltrar = "";
    };
    IndependientsPage.prototype.showCheckbox = function () {
        if (this.categories.length > 0) {
            this.configCheckbox();
        }
        else {
            this.getCategories();
        }
    };
    IndependientsPage.prototype.configCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Categorias');
        for (var i = 0; i < this.categories.length; i++) {
            this.categories[i].checked = this.verificarCheckbox(this.categories[i].id);
            alert.addInput({
                type: 'checkbox',
                label: this.categories[i].attributes.name,
                value: this.categories[i].id,
                checked: this.categories[i].checked
            });
        }
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'Listo',
            handler: function (data) {
                _this.categoriesCheck = data;
                if (_this.categoriesCheck.length > 0) {
                    _this.filtrarCategories();
                }
                else {
                    _this.messages("No selecciono ninguna categoria");
                    var item = [];
                    _this.independients = item;
                    _this.configCheckbox();
                    //this.filtrarCategories();
                }
                console.log('Checkbox data:', data);
            }
        });
        alert.present();
    };
    IndependientsPage.prototype.filtrarCategories = function () {
        var item = [];
        for (var i = 0; i < this.independientsAll.length; i++) {
            if (this.independientsAll[i].attributes.categories.length > 0) {
                if (this.incluirCategories(i)) {
                    item.push(this.independientsAll[i]);
                }
                else {
                    console.log("Categorias: " + this.independientsAll[i].attributes.categories);
                }
            }
            else {
                console.log("no");
            }
        }
        this.independients = item;
        if (this.independients.length < 1) {
            this.messages("No hay perfiles " + this.title + " para las categorias seleccionadas");
        }
    };
    IndependientsPage.prototype.incluirCategories = function (i) {
        var categories = this.independientsAll[i].attributes.categories;
        for (var j = 0; j < categories.length; j++) {
            for (var k = 0; k < this.categoriesCheck.length; k++) {
                if (categories[j].id == this.categoriesCheck[k]) {
                    return true;
                }
            }
        }
    };
    IndependientsPage.prototype.verificarCheckbox = function (id) {
        if (this.categoriesCheck.length > 0) {
            for (var i = 0; i < this.categoriesCheck.length; i++) {
                if (this.categoriesCheck[i] == id) {
                    return true;
                }
            }
        }
        return false;
    };
    IndependientsPage.prototype.getCategories = function () {
        var _this = this;
        var loading = this.loading.create({ content: 'Cargando...' });
        loading.present();
        var url = __WEBPACK_IMPORTED_MODULE_7__providers_routes__["b" /* routes */].categories();
        this._tokenService.get(url).subscribe(function (data) {
            loading.dismiss();
            console.log(data);
            data = JSON.parse(data['_body']);
            if (data['data'].length) {
                _this.categories = data['data'];
                console.log(_this.categories);
                _this.configCheckbox();
            }
        }, function (error) {
            console.log(error);
            loading.dismiss();
            _this.messages("Ha ocurrido un error al cargar la inforamción.");
        });
    };
    IndependientsPage.prototype.messages = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    IndependientsPage.prototype.messagesDuration = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: 'top'
        });
        toast.present();
    };
    IndependientsPage.prototype.goProfile = function (profile) {
        console.log(profile);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__itemdetail_itemdetail__["a" /* ItemdetailPage */], {
            profile: profile,
            type: "independients"
        });
    };
    IndependientsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-independients',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\independients\independients.html"*/'<ion-header class="bg-thime">\n  <ion-navbar>\n    <button ion-button icon-only style="display: block !important; background: transparent;z-index: 99;position: absolute;top: 0;" (click)="back()">\n      <ion-icon name="ios-arrow-back"><!-- <img src="assets/imgs/ic_menu.png"> --></ion-icon>\n    </button>\n\n    <ion-title text-uppercase text-center>{{"app_title" | translate}} <br>\n       <div (click)="selectCountry()" class="country"> <small> Venezuela</small> <ion-icon name="arrow-dropdown"></ion-icon></div>\n      <span float-right>\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n        <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n      </span>\n    </ion-title>\n  </ion-navbar>\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'search_box\' | translate}}" (click)="searchPage()"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items"> </ion-item>\n  </ion-list>\n  <div class="tab-row">\n    <ion-row>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/electronics.png">\n          <small class="text-white">Electronicos</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/fashion.png">\n          <small class="text-white">Fashion</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/home.png">\n          <small class="text-white">Hogar</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/mobaile.png">\n          <small class="text-white">Mobile</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/more.png">\n          <small class="text-white">Mas</small>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n<ion-content class="bg-light">\n    <ion-slides pager autoplay=2000 parallax=true>\n      <ion-slide *ngFor="let slide of slides">\n        <img [src]="slide.image" class="slide-image" />\n        <div class="banner-text">\n          <p [innerHTML]="slide.description"></p>\n          <small [innerHTML]="slide.smalltext"></small>\n          <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  \n\n  \n  <ion-row *ngFor="let independient of independients;let last = last;let i = index">\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <div class="img-box" (click)="itemdetailPage()">\n                <img [src]="independient.attributes.photo">\n            </div>\n            <ion-icon name="thumbs-up" class="text-light icon" [ngClass]="independient.followColor" (click)="seguir( independient.id, i, independient.attributes.title )"></ion-icon>\n          </ion-card-header>\n          <ion-card-content (click)="itemdetailPage()">\n            <h5>{{independient.attributes.title}}</h5>\n            <div class="rateing">\n              <div class="card-btn">\n                <p class="" float-left>\n                  <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                  <span class="text-light bold"> (125)</span>\n                </p>\n                <div style="display: flex;" float-right>\n                  <div class="price text-light mr-5">\n                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                  </div>\n                  <div class="price text-sky">\n                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ng-container *ngIf="independient[i+1]">\n        <ion-col>\n          <ion-card>\n            <ion-card-header>\n                <div class="img-box" (click)="itemdetailPage()">\n                    <img [src]="independient[i+1].attributes.photo">\n                </div>\n                <ion-icon name="thumbs-up" class="text-light icon"></ion-icon>\n            </ion-card-header>\n            <ion-card-content (click)="itemdetailPage()">\n                <h5>{{independient[i+1].attributes.name}}</h5>\n                <div class="rateing">\n                    <div class="card-btn">\n                        <p class="" float-left>\n                            <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                            <span class="text-light bold"> (125)</span>\n                        </p>\n                        <div style="display: flex;" float-right>\n                            <div class="price text-light mr-5">\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                            </div>\n                            <div class="price text-sky">\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n  </ion-content>'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\independients\independients.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_token__["b" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_users_module_users_module__["a" /* UsersModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_independients_module_independients_module__["a" /* IndependientsModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], IndependientsPage);
    return IndependientsPage;
}());

//# sourceMappingURL=independients.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PymesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pymes_module_pymes_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alerts_module_alerts_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_routes__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_token__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_users_module_users_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__itemdetail_itemdetail__ = __webpack_require__(58);
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
    function PymesPage(navCtrl, navParams, loading, toastCtrl, alertCtrl, _tokenService, userProvider, alert, pymesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this._tokenService = _tokenService;
        this.userProvider = userProvider;
        this.alert = alert;
        this.pymesProvider = pymesProvider;
        this.pymes = [];
        this.pymesAll = [];
        this.categories = [];
        this.categoriesCheck = [];
        this.showSearch = false;
        this.titleFiltrar = "Filtrar";
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
        var _this = this;
        this.userProvider.check_User().then(function (user) {
            if (user) {
                _this.user = user;
            }
            else {
                _this.user = false;
            }
        });
        this.getListPymes();
    };
    PymesPage.prototype.getListPymes = function () {
        var _this = this;
        var load = this.alert.loading('Cargando informacion...');
        load.present();
        this.pymesProvider.getPymes().subscribe(function (data) {
            load.dismiss();
            data = JSON.parse(data['_body']);
            if (data['data'].length) {
                _this.pymesAll = data['data'];
                _this.pymes = _this.pymesAll;
                console.log(_this.pymes);
                if (!_this.user) {
                    _this.showFollowing2();
                }
                else {
                    console.log(_this.user);
                    _this.showFollow();
                }
            }
        }, function (error) {
            console.log(error);
            _this.alert.alert("Alerta!", "Ha ocurrido un error al cargar la información.");
        });
    };
    PymesPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    PymesPage.prototype.showAll = function () {
        this.pymes = this.pymesAll;
    };
    PymesPage.prototype.showFollowProfile = function () {
        var _this = this;
        if (!this.user) {
            var confirm_1 = this.alertCtrl.create({
                title: 'Seguir Tienda',
                message: 'Para seguir un perfil debes registrarte',
                buttons: [
                    {
                        text: 'ok',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Registrarse',
                        handler: function () {
                            _this.navCtrl.parent.select(2);
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            if (this.followAll.data.length > 0) {
                this.pymes = this.followAll.data;
            }
            else {
                this.messagesDuration("Para seguir un perfil haz click en el icono de la mano", 5000);
            }
        }
    };
    PymesPage.prototype.showFollowing = function () {
        for (var i = 0; i < this.pymesAll.length; i++) {
            if (this.follow(this.pymesAll[i])) {
                this.pymesAll[i].followColor = "following";
            }
            else {
                this.pymesAll[i].followColor = "icon-seguir";
            }
        }
        this.pymes = this.pymesAll;
    };
    PymesPage.prototype.follow = function (item) {
        for (var j = 0; j < this.followAll.data.length; j++) {
            if (item.id == this.followAll.data[j].id) {
                return true;
            }
        }
        return false;
    };
    PymesPage.prototype.showFollowing2 = function () {
        for (var i = 0; i < this.pymesAll.length; i++) {
            this.pymesAll[i].followColor = "icon-seguir";
        }
        this.pymes = this.pymesAll;
    };
    PymesPage.prototype.showFollow = function () {
        var _this = this;
        var loading = this.loading.create({ content: 'Cargando...' });
        loading.present();
        this.pymesProvider.getFollowing().subscribe(function (data) {
            loading.dismiss();
            console.log(data);
            _this.followAll = JSON.parse(data['_body']);
            console.log(_this.followAll);
            for (var i = 0; i < _this.followAll.data.length; i++) {
                _this.followAll.data[i].followColor = "following";
            }
            _this.showFollowing();
        }, function (error) {
            console.log(error);
            loading.dismiss();
            _this.messages("Ha ocurrido un error al cargar la inforamción.");
        });
    };
    PymesPage.prototype.seguir = function (id, index, name) {
        var _this = this;
        if (!this.user) {
            var confirm_2 = this.alertCtrl.create({
                title: 'Seguir Tienda',
                message: 'Para seguir un perfil debes registrarte',
                buttons: [
                    {
                        text: 'ok',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Registrarse',
                        handler: function () {
                            _this.navCtrl.parent.select(2);
                        }
                    }
                ]
            });
            confirm_2.present();
        }
        else {
            var options_1;
            if (this.pymes[index].followColor == "icon-seguir") {
                options_1 = {
                    url: __WEBPACK_IMPORTED_MODULE_4__providers_routes__["b" /* routes */].follow("pymes", id),
                    icon: "following"
                };
                var loading_1 = this.loading.create({ content: 'Cargando...' });
                loading_1.present();
                this._tokenService.get(options_1.url).subscribe(function (data) {
                    loading_1.dismiss();
                    console.log(data);
                    data = JSON.parse(data['_body']);
                    console.log(data);
                    _this.pymes[index].followColor = options_1.icon;
                    _this.changeFoller(id, options_1.icon);
                    _this.followAll.data.push(_this.pymes[index]);
                }, function (error) {
                    console.log(error);
                    loading_1.dismiss();
                    _this.messages("Ha ocurrido un error al cargar la inforamción.");
                });
            }
            else {
                options_1 = {
                    pregunta: '¿Quieres dejar de seguir a ' + name + '?',
                    url: __WEBPACK_IMPORTED_MODULE_4__providers_routes__["b" /* routes */].unfollow("pymes", id),
                    icon: "icon-seguir"
                };
                var confirm_3 = this.alertCtrl.create({
                    message: options_1.pregunta,
                    buttons: [
                        {
                            text: 'No',
                            handler: function () {
                                console.log('no');
                            }
                        },
                        {
                            text: 'Si',
                            handler: function () {
                                var loading = _this.loading.create({ content: 'Cargando...' });
                                loading.present();
                                var info = {
                                    unfollow: {
                                        profile_id: id
                                    }
                                };
                                _this._tokenService.post(options_1.url, info).subscribe(function (data) {
                                    loading.dismiss();
                                    console.log(data);
                                    data = JSON.parse(data['_body']);
                                    console.log(data);
                                    _this.pymes[index].followColor = options_1.icon;
                                    _this.deleteFollew(id);
                                    _this.changeFoller(id, options_1.icon);
                                }, function (error) {
                                    console.log(error);
                                    loading.dismiss();
                                    _this.messages("Ha ocurrido un error al cargar la inforamción.");
                                });
                            }
                        }
                    ]
                });
                confirm_3.present();
            }
            console.log(id, index);
        }
    };
    PymesPage.prototype.deleteFollew = function (id) {
        for (var i = 0; i < this.followAll.data.length; i++) {
            if (this.followAll.data[i].id == id) {
                this.followAll.data.splice(i, 1);
                for (i = 0; i < this.pymesAll.length; i++) {
                    if (this.follow(this.pymesAll[i])) {
                        this.pymesAll[i].followColor = "following";
                    }
                    else {
                        this.pymesAll[i].followColor = "icon-seguir";
                    }
                }
                return;
            }
        }
    };
    PymesPage.prototype.changeFoller = function (id, icon) {
        for (var i = 0; i < this.pymesAll.length; i++) {
            if (this.pymesAll[i].id == id) {
                this.pymesAll[i].folloColor = icon;
                return;
            }
        }
    };
    PymesPage.prototype.getItems = function (searchbar) {
        this.pymes = this.pymesAll;
        var q = this.buscar;
        if (!q) {
            return;
        }
        this.pymes = this.pymesAll.filter(function (v) {
            if (v.attributes.name && q) {
                if (v.attributes.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    PymesPage.prototype.goShowSearch = function () {
        this.showSearch = true;
        this.titleFiltrar = "";
    };
    PymesPage.prototype.showCheckbox = function () {
        if (this.categories.length > 0) {
            this.configCheckbox();
        }
        else {
            this.getCategories();
        }
    };
    PymesPage.prototype.configCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Categorias');
        for (var i = 0; i < this.categories.length; i++) {
            this.categories[i].checked = this.verificarCheckbox(this.categories[i].id);
            alert.addInput({
                type: 'checkbox',
                label: this.categories[i].attributes.name,
                value: this.categories[i].id,
                checked: this.categories[i].checked
            });
        }
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'Listo',
            handler: function (data) {
                _this.categoriesCheck = data;
                if (_this.categoriesCheck.length > 0) {
                    _this.filtrarCategories();
                }
                else {
                    _this.messages("No selecciono ninguna categoria");
                    var item = [];
                    _this.pymes = item;
                    _this.configCheckbox();
                    //this.filtrarCategories();
                }
                console.log('Checkbox data:', data);
            }
        });
        alert.present();
    };
    PymesPage.prototype.filtrarCategories = function () {
        var item = [];
        for (var i = 0; i < this.pymesAll.length; i++) {
            if (this.pymesAll[i].attributes.categories.length > 0) {
                if (this.incluirCategories(i)) {
                    item.push(this.pymesAll[i]);
                }
                else {
                    console.log("Categorias: " + this.pymesAll[i].attributes.categories);
                }
            }
            else {
                console.log("no");
            }
        }
        this.pymes = item;
        if (this.pymes.length < 1) {
            this.messages("No hay perfiles " + this.title + " para las categorias seleccionadas");
        }
    };
    PymesPage.prototype.incluirCategories = function (i) {
        var categories = this.pymesAll[i].attributes.categories;
        for (var j = 0; j < categories.length; j++) {
            for (var k = 0; k < this.categoriesCheck.length; k++) {
                if (categories[j].id == this.categoriesCheck[k]) {
                    return true;
                }
            }
        }
    };
    PymesPage.prototype.verificarCheckbox = function (id) {
        if (this.categoriesCheck.length > 0) {
            for (var i = 0; i < this.categoriesCheck.length; i++) {
                if (this.categoriesCheck[i] == id) {
                    return true;
                }
            }
        }
        return false;
    };
    PymesPage.prototype.getCategories = function () {
        var _this = this;
        var loading = this.loading.create({ content: 'Cargando...' });
        loading.present();
        var url = __WEBPACK_IMPORTED_MODULE_4__providers_routes__["b" /* routes */].categories();
        this._tokenService.get(url).subscribe(function (data) {
            loading.dismiss();
            console.log(data);
            data = JSON.parse(data['_body']);
            if (data['data'].length) {
                _this.categories = data['data'];
                console.log(_this.categories);
                _this.configCheckbox();
            }
        }, function (error) {
            console.log(error);
            loading.dismiss();
            _this.messages("Ha ocurrido un error al cargar la inforamción.");
        });
    };
    PymesPage.prototype.messages = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    PymesPage.prototype.messagesDuration = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: 'top'
        });
        toast.present();
    };
    PymesPage.prototype.goProfile = function (profile) {
        console.log(profile);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__itemdetail_itemdetail__["a" /* ItemdetailPage */], {
            profile: profile,
            type: "pymes"
        });
    };
    PymesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pymes',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\pymes\pymes.html"*/'<ion-header class="bg-thime">\n    <ion-navbar>\n      <button ion-button style="display: block !important; background: transparent;position:absolute;z-index: 99;position: absolute;top: -5px;" (click)="back()">\n        <ion-icon name="ios-arrow-back"><!-- <img src="assets/imgs/ic_menu.png"> --></ion-icon>\n      </button>\n  \n      <ion-title text-uppercase text-center>{{"app_title" | translate}} <br>\n         <div (click)="selectCountry()" class="country"> <small> Venezuela</small> <ion-icon name="arrow-dropdown"></ion-icon></div>\n        <span float-right>\n          <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n          <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n        </span>\n      </ion-title>\n    </ion-navbar>\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'search_box\' | translate}}" (click)="searchPage()"></ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let item of items"> </ion-item>\n    </ion-list>\n    <div class="tab-row">\n      <ion-row>\n        <ion-col (click)="categoryPage()">\n          <div class="img-box" text-center>\n            <img src="assets/imgs/electronics.png">\n            <small class="text-white">Electronicos</small>\n          </div>\n        </ion-col>\n        <ion-col (click)="categoryPage()">\n          <div class="img-box" text-center>\n            <img src="assets/imgs/fashion.png">\n            <small class="text-white">Fashion</small>\n          </div>\n        </ion-col>\n        <ion-col (click)="categoryPage()">\n          <div class="img-box" text-center>\n            <img src="assets/imgs/home.png">\n            <small class="text-white">Hogar</small>\n          </div>\n        </ion-col>\n        <ion-col (click)="categoryPage()">\n          <div class="img-box" text-center>\n            <img src="assets/imgs/mobaile.png">\n            <small class="text-white">Mobile</small>\n          </div>\n        </ion-col>\n        <ion-col (click)="categoryPage()">\n          <div class="img-box" text-center>\n            <img src="assets/imgs/more.png">\n            <small class="text-white">Mas</small>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-header>\n  <ion-content class="bg-light">\n      <ion-slides pager autoplay=2000 parallax=true>\n        <ion-slide *ngFor="let slide of slides">\n          <img [src]="slide.image" class="slide-image" />\n          <div class="banner-text">\n            <p [innerHTML]="slide.description"></p>\n            <small [innerHTML]="slide.smalltext"></small>\n            <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    \n\n    \n    <ion-row *ngFor="let pyme of pymes;let last = last;let i = index">\n        <ion-col>\n          <ion-card>\n            <ion-card-header>\n              <div class="img-box" (click)="itemdetailPage()">\n                  <img style="padding:5%;" [src]="pyme.attributes.photo">\n              </div>\n              <ion-icon name="thumbs-up" class="text-light icon" [ngClass]="pyme.followColor" (click)="seguir( pyme.id, i, pyme.attributes.title )" ></ion-icon>\n            </ion-card-header>\n            <ion-card-content (click)="itemdetailPage()">\n              <h5>{{pyme.attributes.title}}</h5>\n              <div class="rateing">\n                <div class="card-btn">\n                  <p class="" float-left>\n                    <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                    <span class="text-light bold"> (125)</span>\n                  </p>\n                  <div style="display: flex;" float-right>\n                    <div class="price text-light mr-5">\n                      <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                    </div>\n                    <div class="price text-sky">\n                      <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-content>'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\pymes\pymes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_token__["b" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_users_module_users_module__["a" /* UsersModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_pymes_module_pymes_module__["a" /* PymesModuleProvider */]])
    ], PymesPage);
    return PymesPage;
}());

//# sourceMappingURL=pymes.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alerts_module_alerts_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sellers_module_sellers_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_routes__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_token__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_users_module_users_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__itemdetail_itemdetail__ = __webpack_require__(58);
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
    function SellersPage(navCtrl, navParams, loading, toastCtrl, alertCtrl, _tokenService, userProvider, alert, sellersProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this._tokenService = _tokenService;
        this.userProvider = userProvider;
        this.alert = alert;
        this.sellersProvider = sellersProvider;
        this.categories = [];
        this.categoriesCheck = [];
        this.showSearch = false;
        this.titleFiltrar = "Filtrar";
        this.slides = [
            {
                title: "Zona de Tiendas",
                description: "Descubre iBigWave",
                smalltext: "Consigue los mejores precios",
                image: "assets/imgs/slider1.jpg"
            }
        ];
    }
    SellersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userProvider.check_User().then(function (user) {
            if (user) {
                _this.user = user;
            }
            else {
                _this.user = false;
            }
        });
        this.getListSellers();
    };
    SellersPage.prototype.getListSellers = function () {
        var _this = this;
        var load = this.alert.loading('Cargando informacion...');
        load.present();
        this.sellersProvider.getSellers().subscribe(function (data) {
            load.dismiss();
            data = JSON.parse(data['_body']);
            if (data['data'].length) {
                _this.sellersAll = data['data'];
                _this.sellers = _this.sellersAll;
                console.log(_this.sellers);
                if (!_this.user) {
                    _this.showFollowing2();
                }
                else {
                    console.log(_this.user);
                    _this.showFollow();
                }
            }
        }, function (error) {
            console.log(error);
            _this.alert.alert("Alerta!", "Ha ocurrido un error al cargar la información.");
        });
    };
    SellersPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SellersPage.prototype.showAll = function () {
        this.sellers = this.sellersAll;
    };
    SellersPage.prototype.showFollowProfile = function () {
        var _this = this;
        if (!this.user) {
            var confirm_1 = this.alertCtrl.create({
                title: 'Seguir Tienda',
                message: 'Para seguir un perfil debes registrarte',
                buttons: [
                    {
                        text: 'ok',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Registrarse',
                        handler: function () {
                            _this.navCtrl.parent.select(2);
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            if (this.followAll.data.length > 0) {
                this.sellers = this.followAll.data;
            }
            else {
                this.messagesDuration("Para seguir un perfil haz click en el icono de la mano", 5000);
            }
        }
    };
    SellersPage.prototype.showFollowing = function () {
        for (var i = 0; i < this.sellersAll.length; i++) {
            if (this.follow(this.sellersAll[i])) {
                this.sellersAll[i].followColor = "following";
            }
            else {
                this.sellersAll[i].followColor = "icon-seguir";
            }
        }
        this.sellers = this.sellersAll;
    };
    SellersPage.prototype.follow = function (item) {
        for (var j = 0; j < this.followAll.data.length; j++) {
            if (item.id == this.followAll.data[j].id) {
                return true;
            }
        }
        return false;
    };
    SellersPage.prototype.showFollowing2 = function () {
        for (var i = 0; i < this.sellersAll.length; i++) {
            this.sellersAll[i].followColor = "icon-seguir";
        }
        this.sellers = this.sellersAll;
    };
    SellersPage.prototype.showFollow = function () {
        var _this = this;
        var loading = this.loading.create({ content: 'Cargando...' });
        loading.present();
        this.sellersProvider.getFollowing().subscribe(function (data) {
            loading.dismiss();
            console.log(data);
            _this.followAll = JSON.parse(data['_body']);
            console.log(_this.followAll);
            for (var i = 0; i < _this.followAll.data.length; i++) {
                _this.followAll.data[i].followColor = "following";
            }
            _this.showFollowing();
        }, function (error) {
            console.log(error);
            loading.dismiss();
            _this.messages("Ha ocurrido un error al cargar la inforamción.");
        });
    };
    SellersPage.prototype.seguir = function (id, index, name) {
        var _this = this;
        if (!this.user) {
            var confirm_2 = this.alertCtrl.create({
                title: 'Seguir Tienda',
                message: 'Para seguir un perfil debes registrarte',
                buttons: [
                    {
                        text: 'ok',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Registrarse',
                        handler: function () {
                            _this.navCtrl.parent.select(2);
                        }
                    }
                ]
            });
            confirm_2.present();
        }
        else {
            var options_1;
            if (this.sellers[index].followColor == "icon-seguir") {
                options_1 = {
                    url: __WEBPACK_IMPORTED_MODULE_4__providers_routes__["b" /* routes */].follow("sellers", id),
                    icon: "following"
                };
                var loading_1 = this.loading.create({ content: 'Cargando...' });
                loading_1.present();
                this._tokenService.get(options_1.url).subscribe(function (data) {
                    loading_1.dismiss();
                    console.log(data);
                    data = JSON.parse(data['_body']);
                    console.log(data);
                    _this.sellers[index].followColor = options_1.icon;
                    _this.changeFoller(id, options_1.icon);
                    _this.followAll.data.push(_this.sellers[index]);
                }, function (error) {
                    console.log(error);
                    loading_1.dismiss();
                    _this.messages("Ha ocurrido un error al cargar la inforamción.");
                });
            }
            else {
                options_1 = {
                    pregunta: '¿Quieres dejar de seguir a ' + name + '?',
                    url: __WEBPACK_IMPORTED_MODULE_4__providers_routes__["b" /* routes */].unfollow("sellers", id),
                    icon: "icon-seguir"
                };
                var confirm_3 = this.alertCtrl.create({
                    message: options_1.pregunta,
                    buttons: [
                        {
                            text: 'No',
                            handler: function () {
                                console.log('no');
                            }
                        },
                        {
                            text: 'Si',
                            handler: function () {
                                var loading = _this.loading.create({ content: 'Cargando...' });
                                loading.present();
                                var info = {
                                    unfollow: {
                                        profile_id: id
                                    }
                                };
                                _this._tokenService.post(options_1.url, info).subscribe(function (data) {
                                    loading.dismiss();
                                    console.log(data);
                                    data = JSON.parse(data['_body']);
                                    console.log(data);
                                    _this.sellers[index].followColor = options_1.icon;
                                    _this.deleteFollew(id);
                                    _this.changeFoller(id, options_1.icon);
                                }, function (error) {
                                    console.log(error);
                                    loading.dismiss();
                                    _this.messages("Ha ocurrido un error al cargar la inforamción.");
                                });
                            }
                        }
                    ]
                });
                confirm_3.present();
            }
            console.log(id, index);
        }
    };
    SellersPage.prototype.deleteFollew = function (id) {
        for (var i = 0; i < this.followAll.data.length; i++) {
            if (this.followAll.data[i].id == id) {
                this.followAll.data.splice(i, 1);
                for (i = 0; i < this.sellersAll.length; i++) {
                    if (this.follow(this.sellersAll[i])) {
                        this.sellersAll[i].followColor = "following";
                    }
                    else {
                        this.sellersAll[i].followColor = "icon-seguir";
                    }
                }
                return;
            }
        }
    };
    SellersPage.prototype.changeFoller = function (id, icon) {
        for (var i = 0; i < this.sellersAll.length; i++) {
            if (this.sellersAll[i].id == id) {
                this.sellersAll[i].folloColor = icon;
                return;
            }
        }
    };
    SellersPage.prototype.getItems = function (searchbar) {
        this.sellers = this.sellersAll;
        var q = this.buscar;
        if (!q) {
            return;
        }
        this.sellers = this.sellersAll.filter(function (v) {
            if (v.attributes.name && q) {
                if (v.attributes.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    SellersPage.prototype.goShowSearch = function () {
        this.showSearch = true;
        this.titleFiltrar = "";
    };
    SellersPage.prototype.showCheckbox = function () {
        if (this.categories.length > 0) {
            this.configCheckbox();
        }
        else {
            this.getCategories();
        }
    };
    SellersPage.prototype.configCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Categorias');
        for (var i = 0; i < this.categories.length; i++) {
            this.categories[i].checked = this.verificarCheckbox(this.categories[i].id);
            alert.addInput({
                type: 'checkbox',
                label: this.categories[i].attributes.name,
                value: this.categories[i].id,
                checked: this.categories[i].checked
            });
        }
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'Listo',
            handler: function (data) {
                _this.categoriesCheck = data;
                if (_this.categoriesCheck.length > 0) {
                    _this.filtrarCategories();
                }
                else {
                    _this.messages("No selecciono ninguna categoria");
                    var item = [];
                    _this.sellers = item;
                    _this.configCheckbox();
                    //this.filtrarCategories();
                }
                console.log('Checkbox data:', data);
            }
        });
        alert.present();
    };
    SellersPage.prototype.filtrarCategories = function () {
        var item = [];
        for (var i = 0; i < this.sellersAll.length; i++) {
            if (this.sellersAll[i].attributes.categories.length > 0) {
                if (this.incluirCategories(i)) {
                    item.push(this.sellersAll[i]);
                }
                else {
                    console.log("Categorias: " + this.sellersAll[i].attributes.categories);
                }
            }
            else {
                console.log("no");
            }
        }
        this.sellers = item;
        if (this.sellers.length < 1) {
            this.messages("No hay perfiles " + this.title + " para las categorias seleccionadas");
        }
    };
    SellersPage.prototype.incluirCategories = function (i) {
        var categories = this.sellersAll[i].attributes.categories;
        for (var j = 0; j < categories.length; j++) {
            for (var k = 0; k < this.categoriesCheck.length; k++) {
                if (categories[j].id == this.categoriesCheck[k]) {
                    return true;
                }
            }
        }
    };
    SellersPage.prototype.verificarCheckbox = function (id) {
        if (this.categoriesCheck.length > 0) {
            for (var i = 0; i < this.categoriesCheck.length; i++) {
                if (this.categoriesCheck[i] == id) {
                    return true;
                }
            }
        }
        return false;
    };
    SellersPage.prototype.getCategories = function () {
        var _this = this;
        var loading = this.loading.create({ content: 'Cargando...' });
        loading.present();
        var url = __WEBPACK_IMPORTED_MODULE_4__providers_routes__["b" /* routes */].categories();
        this._tokenService.get(url).subscribe(function (data) {
            loading.dismiss();
            console.log(data);
            data = JSON.parse(data['_body']);
            if (data['data'].length) {
                _this.categories = data['data'];
                console.log(_this.categories);
                _this.configCheckbox();
            }
        }, function (error) {
            console.log(error);
            loading.dismiss();
            _this.messages("Ha ocurrido un error al cargar la inforamción.");
        });
    };
    SellersPage.prototype.messages = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    SellersPage.prototype.messagesDuration = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: 'top'
        });
        toast.present();
    };
    SellersPage.prototype.goProfile = function (profile) {
        console.log(profile);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__itemdetail_itemdetail__["a" /* ItemdetailPage */], {
            profile: profile,
            type: "sellers"
        });
    };
    SellersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sellers',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\sellers\sellers.html"*/'<ion-header class="bg-thime">\n  <ion-navbar>\n    <button ion-button style="display: block !important; background: transparent;z-index: 99;position: absolute;top: 0;" (click)="back()">\n      <ion-icon name="ios-arrow-back"><!-- <img src="assets/imgs/ic_menu.png"> --></ion-icon>\n    </button>\n\n    <ion-title text-uppercase text-center>{{"app_title" | translate}} <br>\n       <div (click)="selectCountry()" class="country"> <small> Venezuela</small> <ion-icon name="arrow-dropdown"></ion-icon></div>\n      <span float-right>\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n        <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n      </span>\n    </ion-title>\n  </ion-navbar>\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'search_box\' | translate}}" (click)="searchPage()"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items"> </ion-item>\n  </ion-list>\n  <div class="tab-row">\n    <ion-row>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/electronics.png">\n          <small class="text-white">Electronicos</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/fashion.png">\n          <small class="text-white">Fashion</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/home.png">\n          <small class="text-white">Hogar</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/mobaile.png">\n          <small class="text-white">Mobile</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/more.png">\n          <small class="text-white">Mas</small>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n<ion-content class="bg-light">\n    <ion-slides pager autoplay=2000 parallax=true>\n      <ion-slide *ngFor="let slide of slides">\n        <img [src]="slide.image" class="slide-image" />\n        <div class="banner-text">\n          <p [innerHTML]="slide.description"></p>\n          <small [innerHTML]="slide.smalltext"></small>\n          <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  \n\n  \n  <ion-row *ngFor="let seller of sellers;let last = last;let i = index">\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <div class="img-box" (click)="itemdetailPage()">\n              <img style="padding:5%;" [src]="seller.attributes.photo">\n            </div>\n            <ion-icon name="thumbs-up" class="text-light icon" [ngClass]="seller.followColor" (click)="seguir( seller.id, i, seller.attributes.title )"></ion-icon>\n          </ion-card-header>\n          <ion-card-content (click)="itemdetailPage()">\n            <h5>{{seller.attributes.title}}</h5>\n            <div class="rateing">\n              <div class="card-btn">\n                <p class="" float-left>\n                  <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                  <span class="text-light bold"> (125)</span>\n                </p>\n                <div style="display: flex;" float-right>\n                  <div class="price text-light mr-5">\n                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                  </div>\n                  <div class="price text-sky">\n                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ng-container *ngIf="seller[i+1]">\n        <ion-col>\n          <ion-card>\n            <ion-card-header>\n                <div class="img-box" (click)="itemdetailPage()">\n                    <img [src]="seller[i+1].attributes.photo">\n                </div>\n                <ion-icon name="thumbs-up" class="text-light icon"></ion-icon>\n            </ion-card-header>\n            <ion-card-content (click)="itemdetailPage()">\n                <h5>{{seller[i+1].attributes.title}}</h5>\n                <div class="rateing">\n                    <div class="card-btn">\n                        <p class="" float-left>\n                            <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                            <span class="text-light bold"> (125)</span>\n                        </p>\n                        <div style="display: flex;" float-right>\n                            <div class="price text-light mr-5">\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                            </div>\n                            <div class="price text-sky">\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n  </ion-content>'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\sellers\sellers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_token__["b" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_users_module_users_module__["a" /* UsersModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sellers_module_sellers_module__["a" /* SellersModuleProvider */]])
    ], SellersPage);
    return SellersPage;
}());

//# sourceMappingURL=sellers.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-products',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\products\products.html"*/'<!--\n  Generated template for the ProductsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>products</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavePymesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_gps_gps__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_module_users_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alerts_module_alerts_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pymes_module_pymes_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_shop_model__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SavePymesPage = (function () {
    function SavePymesPage(navCtrl, navParams, gps, userProvider, alert, alertCtrl, pymeProvider, actionSheetCtrl, imagePicker, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gps = gps;
        this.userProvider = userProvider;
        this.alert = alert;
        this.alertCtrl = alertCtrl;
        this.pymeProvider = pymeProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.country = 'Chile';
        this.types = 'password';
        this.categories = [];
        this.categoriesCheck = [];
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* UserModel */];
        this.pyme = new __WEBPACK_IMPORTED_MODULE_7__models_shop_model__["a" /* shopModel */];
    }
    SavePymesPage.prototype.ionViewDidLoad = function () {
    };
    SavePymesPage.prototype.getCountry = function () {
        this.country = this.gps.get_address();
    };
    SavePymesPage.prototype.showCheckbox = function () {
        if (this.categories.length > 0) {
            this.openCheckbox();
        }
        else {
            this.getCategories();
        }
    };
    SavePymesPage.prototype.getCategories = function () {
        var _this = this;
        var loading = this.alert.loading('Cargando...');
        loading.present();
        this.userProvider.getCategories().subscribe(function (data) {
            data = JSON.parse(data['_body']);
            _this.categories = data['data'];
            loading.dismiss();
            _this.openCheckbox();
        }, function (error) {
            console.log(error);
            loading.dismiss();
            _this.alert.alert("Alerta!", "Ha ocurrido un error al cargar la inforamción.");
        });
    };
    SavePymesPage.prototype.openCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Categorias');
        for (var i = 0; i < this.categories.length; i++) {
            this.categories[i].checked = this.verificarCheckbox(this.categories[i].id);
            alert.addInput({
                type: 'checkbox',
                label: this.categories[i].attributes.name,
                value: this.categories[i].id,
                checked: this.categories[i].checked
            });
        }
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'Listo',
            handler: function (data) {
                _this.categoriesCheck = data;
                if (_this.categoriesCheck.length > 0) {
                    _this.textCategories();
                }
                else {
                    _this.alert.alert("Alerta!", "No selecciono ninguna categoria");
                    _this.textCategories();
                }
                console.log('Checkbox data:', data);
            }
        });
        alert.present();
    };
    SavePymesPage.prototype.verificarCheckbox = function (id) {
        if (this.categoriesCheck.length > 0) {
            for (var i = 0; i < this.categoriesCheck.length; i++) {
                if (this.categoriesCheck[i] == id) {
                    return true;
                }
            }
        }
        return false;
    };
    SavePymesPage.prototype.textCategories = function () {
        var _this = this;
        var text = "";
        for (var i = 0; i < this.categoriesCheck.length; i++) {
            for (var j = 0; j < this.categories.length; j++) {
                if (this.categoriesCheck[i] == this.categories[j].id) {
                    text = text + "- " + this.categories[j].attributes.name + ".\n";
                }
            }
        }
        console.log('Checkbox data:', text);
        //this.form.value.category_ids=text;
        this.userProvider.check_User().then(function (data) {
            _this.pyme.user_id = data;
            console.log('Checkbox data:', _this.pyme);
            _this.pyme.category_ids = text,
                console.log('Checkbox data:', _this.pyme.category_ids);
        });
    };
    SavePymesPage.prototype.createPyme = function () {
        var _this = this;
        var loading = this.alert.loading('Cargando...');
        loading.present();
        this.pyme.category_ids = this.categoriesCheck;
        this.pymeProvider.createPyme(this.pyme).subscribe(function (data) {
            data = JSON.parse(data['_body']);
            loading.dismiss();
            _this.alert.alert("Enhorabuena!", "Profesional Creado Exitosamente");
            _this.navCtrl.pop();
        }, function (error) {
            loading.dismiss();
            console.log(error);
            try {
                //this.messages(error.error.errors.full_messages[0]);
                _this.alert.alert("Alerta!", "Ha ocurrido un error");
            }
            catch (err) {
                _this.alert.alert("Alerta!", "Ha ocurrido un error");
            }
        });
    };
    SavePymesPage.prototype.openOptions = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Seleccionar imagen',
            buttons: [
                {
                    text: 'Cargar de galeria',
                    handler: function () {
                        _this.openImagePicker();
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.openCamera();
                        //this.getPicture()
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SavePymesPage.prototype.encodeImageUri = function (imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL("image/jpeg");
            callback(dataURL);
        };
        img.src = imageUri;
    };
    SavePymesPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission()
            .then(function (result) {
            if (result == false) {
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                })
                    .then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.setImgShop(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    SavePymesPage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.setImgShop(imageData);
        }, function (err) {
            // Handle error
        });
    };
    SavePymesPage.prototype.setImgShop = function (image) {
        var _this = this;
        image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* normalizeURL */])(image);
        //uploads img to firebase storage
        this.uploadImage(image)
            .then(function (photoURL) {
            _this.pyme.avatar = photoURL;
        });
    };
    SavePymesPage.prototype.uploadImage = function (imageURI) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.encodeImageUri(imageURI, function (image64) {
                resolve(image64);
            });
        });
    };
    SavePymesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-save-pymes',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\save-pymes\save-pymes.html"*/'<ion-header class="bg-thime">\n  <ion-navbar>\n      <button ion-button menuToggle style="display: block !important;">\n          <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png">\n            <ion-badge id="notifications-badge" color="danger">4</ion-badge>\n          </ion-icon>\n        </button>\n    <ion-title text-uppercase text-center>{{"app_title" | translate}} <br>\n       <div (click)="selectCountry()" class="country"> <small> {{country}}</small> <ion-icon name="arrow-dropdown"></ion-icon></div>\n      <span float-right>\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n        <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;">\n          <ion-badge id="notifications-badge" color="danger">2</ion-badge>\n        </ion-icon>\n      </span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="form" padding-left padding-right>\n    <p text-center padding-bottom margin-bottom>Crear Tienda</p>\n    <ion-list>\n      \n          <div class="container" >\n             <img class="avatar" *ngIf="!pyme.avatar" src="data:image/png;base64,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">\n              <img class="avatar" *ngIf="pyme.avatar" src="{{pyme.avatar}}">\n            </div>\n\n      <ion-item>\n        <ion-label>{{"full_name" | translate}}</ion-label>\n        <ion-input type="text" text-right ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Titulo</ion-label>\n        <ion-input type="text" text-right ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{"email" | translate}}</ion-label>\n        <ion-input type="text" text-right ></ion-input>\n      </ion-item>\n      <ion-item (click)="showCheckbox()">\n        <ion-label>Categorias</ion-label>\n        <ion-input type="text" text-right ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Descripcion</ion-label>\n        <ion-input type="text" text-right></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="createPyme()">Crear</button>\n<!--     <p text-center>\n      <small>\n        {{"tnc_prelabel" | translate}} \n        <span class="text-sky"> {{"tnc" | translate}} </span>\n      </small>\n    </p> -->\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\save-pymes\save-pymes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_gps_gps__["a" /* GpsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_users_module_users_module__["a" /* UsersModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_pymes_module_pymes_module__["a" /* PymesModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */]])
    ], SavePymesPage);
    return SavePymesPage;
}());

//# sourceMappingURL=save-pymes.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveIndependientsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_gps_gps__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_module_users_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alerts_module_alerts_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_independients_model__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_independients_module_independients_module__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SaveIndependientsPage = (function () {
    function SaveIndependientsPage(navCtrl, navParams, gps, userProvider, alert, alertCtrl, independientsProvider, actionSheetCtrl, imagePicker, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gps = gps;
        this.userProvider = userProvider;
        this.alert = alert;
        this.alertCtrl = alertCtrl;
        this.independientsProvider = independientsProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.country = 'Chile';
        this.types = 'password';
        this.categories = [];
        this.categoriesCheck = [];
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* UserModel */];
        this.independients = new __WEBPACK_IMPORTED_MODULE_6__models_independients_model__["a" /* independientsModel */];
    }
    SaveIndependientsPage.prototype.ionViewDidLoad = function () {
    };
    SaveIndependientsPage.prototype.getCountry = function () {
        this.country = this.gps.get_address();
    };
    SaveIndependientsPage.prototype.showCheckbox = function () {
        if (this.categories.length > 0) {
            this.openCheckbox();
        }
        else {
            this.getCategories();
        }
    };
    SaveIndependientsPage.prototype.getCategories = function () {
        var _this = this;
        var loading = this.alert.loading('Cargando...');
        loading.present();
        this.userProvider.getCategories().subscribe(function (data) {
            data = JSON.parse(data['_body']);
            _this.categories = data['data'];
            loading.dismiss();
            _this.openCheckbox();
        }, function (error) {
            console.log(error);
            loading.dismiss();
            _this.alert.alert("Alerta!", "Ha ocurrido un error al cargar la inforamción.");
        });
    };
    SaveIndependientsPage.prototype.openCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Categorias');
        for (var i = 0; i < this.categories.length; i++) {
            this.categories[i].checked = this.verificarCheckbox(this.categories[i].id);
            alert.addInput({
                type: 'checkbox',
                label: this.categories[i].attributes.name,
                value: this.categories[i].id,
                checked: this.categories[i].checked
            });
        }
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'Listo',
            handler: function (data) {
                _this.categoriesCheck = data;
                if (_this.categoriesCheck.length > 0) {
                    _this.textCategories();
                }
                else {
                    _this.alert.alert("Alerta!", "No selecciono ninguna categoria");
                    _this.textCategories();
                }
                console.log('Checkbox data:', data);
            }
        });
        alert.present();
    };
    SaveIndependientsPage.prototype.verificarCheckbox = function (id) {
        if (this.categoriesCheck.length > 0) {
            for (var i = 0; i < this.categoriesCheck.length; i++) {
                if (this.categoriesCheck[i] == id) {
                    return true;
                }
            }
        }
        return false;
    };
    SaveIndependientsPage.prototype.textCategories = function () {
        var _this = this;
        var text = "";
        for (var i = 0; i < this.categoriesCheck.length; i++) {
            for (var j = 0; j < this.categories.length; j++) {
                if (this.categoriesCheck[i] == this.categories[j].id) {
                    text = text + "- " + this.categories[j].attributes.name + ".\n";
                }
            }
        }
        console.log('Checkbox data:', text);
        //this.form.value.category_ids=text;
        this.userProvider.check_User().then(function (data) {
            _this.independients.user_id = data;
            console.log('Checkbox data:', _this.independients);
            _this.independients.category_ids = text,
                console.log('Checkbox data:', _this.independients.category_ids);
        });
    };
    SaveIndependientsPage.prototype.createIndependient = function () {
        var _this = this;
        var loading = this.alert.loading('Cargando...');
        loading.present();
        this.independients.category_ids = this.categoriesCheck;
        this.independientsProvider.createIndependient(this.independients).subscribe(function (data) {
            console.log(data);
            data = JSON.parse(data['_body']);
            loading.dismiss();
            _this.alert.alert("Enhorabuena!", "Profesional Creado Exitosamente");
            _this.navCtrl.pop();
        }, function (error) {
            loading.dismiss();
            console.log(error);
            try {
                //this.messages(error.error.errors.full_messages[0]);
                _this.alert.alert("Alerta!", "Ha ocurrido un error");
            }
            catch (err) {
                _this.alert.alert("Alerta!", "Ha ocurrido un error");
            }
        });
    };
    SaveIndependientsPage.prototype.openOptions = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Seleccionar imagen',
            buttons: [
                {
                    text: 'Cargar de galeria',
                    handler: function () {
                        _this.openImagePicker();
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.openCamera();
                        //this.getPicture()
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SaveIndependientsPage.prototype.encodeImageUri = function (imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL("image/jpeg");
            callback(dataURL);
        };
        img.src = imageUri;
    };
    SaveIndependientsPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission()
            .then(function (result) {
            if (result == false) {
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                })
                    .then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.setImgShop(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    SaveIndependientsPage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.setImgShop(imageData);
        }, function (err) {
            // Handle error
        });
    };
    SaveIndependientsPage.prototype.setImgShop = function (image) {
        var _this = this;
        image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* normalizeURL */])(image);
        //uploads img to firebase storage
        this.uploadImage(image)
            .then(function (photoURL) {
            _this.independients.avatar = photoURL;
        });
    };
    SaveIndependientsPage.prototype.uploadImage = function (imageURI) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.encodeImageUri(imageURI, function (image64) {
                resolve(image64);
            });
        });
    };
    SaveIndependientsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-save-independients',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\save-independients\save-independients.html"*/'<ion-header class="bg-thime">\n  <ion-navbar>\n    <button ion-button menuToggle style="display: block !important;">\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png">\n        <ion-badge id="notifications-badge" color="danger">4</ion-badge>\n      </ion-icon>\n    </button>\n\n    <ion-title text-uppercase text-center>{{"app_title" | translate}} <br>\n       <div (click)="selectCountry()" class="country"> <small> {{country}}</small> <ion-icon name="arrow-dropdown"></ion-icon></div>\n      <span float-right>\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n        <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;">\n          <ion-badge id="notifications-badge" color="danger">2</ion-badge>\n        </ion-icon>\n      </span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="form" padding-left padding-right>\n    <p text-center padding-bottom margin-bottom>Crear Profesional</p>\n    <ion-list>\n        <div class="container" >\n            <img class="avatar" *ngIf="!independients.avatar" src="data:image/png;base64,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">\n             <img class="avatar" *ngIf="independients.avatar" src="{{pyme.avatar}}">\n           </div>\n      <ion-item>\n        <ion-label>{{"full_name" | translate}}</ion-label>\n        <ion-input type="text" text-right [(ngModel)]="independients.name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Titulo</ion-label>\n        <ion-input type="text" text-right [(ngModel)]="independients.title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{"email" | translate}}</ion-label>\n        <ion-input type="text" text-right [(ngModel)]="independients.email"></ion-input>\n      </ion-item>\n      <ion-item (click)="showCheckbox()">\n        <ion-label>Categorias</ion-label>\n        <ion-input type="text" text-right></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Descripcion</ion-label>\n        <ion-input type="text" text-right></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="createIndependient()">Crear</button>\n<!--     <p text-center>\n      <small>\n        {{"tnc_prelabel" | translate}} \n        <span class="text-sky"> {{"tnc" | translate}} </span>\n      </small>\n    </p> -->\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\save-independients\save-independients.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_gps_gps__["a" /* GpsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_users_module_users_module__["a" /* UsersModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_independients_module_independients_module__["a" /* IndependientsModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */]])
    ], SaveIndependientsPage);
    return SaveIndependientsPage;
}());

//# sourceMappingURL=save-independients.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveSellersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_gps_gps__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_module_users_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alerts_module_alerts_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sellers_module_sellers_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_sellers_model__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SaveSellersPage = (function () {
    function SaveSellersPage(navCtrl, navParams, gps, userProvider, alert, alertCtrl, sellersProvider, actionSheetCtrl, imagePicker, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gps = gps;
        this.userProvider = userProvider;
        this.alert = alert;
        this.alertCtrl = alertCtrl;
        this.sellersProvider = sellersProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.country = 'Chile';
        this.types = 'password';
        this.categories = [];
        this.categoriesCheck = [];
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* UserModel */];
        this.sellers = new __WEBPACK_IMPORTED_MODULE_7__models_sellers_model__["a" /* sellersModel */];
    }
    SaveSellersPage.prototype.ionViewDidLoad = function () {
    };
    SaveSellersPage.prototype.getCountry = function () {
        this.country = this.gps.get_address();
    };
    SaveSellersPage.prototype.showCheckbox = function () {
        if (this.categories.length > 0) {
            this.openCheckbox();
        }
        else {
            this.getCategories();
        }
    };
    SaveSellersPage.prototype.getCategories = function () {
        var _this = this;
        var loading = this.alert.loading('Cargando...');
        loading.present();
        this.userProvider.getCategories().subscribe(function (data) {
            data = JSON.parse(data['_body']);
            _this.categories = data['data'];
            loading.dismiss();
            _this.openCheckbox();
        }, function (error) {
            console.log(error);
            loading.dismiss();
            _this.alert.alert("Alerta!", "Ha ocurrido un error al cargar la inforamción.");
        });
    };
    SaveSellersPage.prototype.openCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Categorias');
        for (var i = 0; i < this.categories.length; i++) {
            this.categories[i].checked = this.verificarCheckbox(this.categories[i].id);
            alert.addInput({
                type: 'checkbox',
                label: this.categories[i].attributes.name,
                value: this.categories[i].id,
                checked: this.categories[i].checked
            });
        }
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'Listo',
            handler: function (data) {
                _this.categoriesCheck = data;
                if (_this.categoriesCheck.length > 0) {
                    _this.textCategories();
                }
                else {
                    _this.alert.alert("Alerta!", "No selecciono ninguna categoria");
                    _this.textCategories();
                }
                console.log('Checkbox data:', data);
            }
        });
        alert.present();
    };
    SaveSellersPage.prototype.verificarCheckbox = function (id) {
        if (this.categoriesCheck.length > 0) {
            for (var i = 0; i < this.categoriesCheck.length; i++) {
                if (this.categoriesCheck[i] == id) {
                    return true;
                }
            }
        }
        return false;
    };
    SaveSellersPage.prototype.textCategories = function () {
        var _this = this;
        var text = "";
        for (var i = 0; i < this.categoriesCheck.length; i++) {
            for (var j = 0; j < this.categories.length; j++) {
                if (this.categoriesCheck[i] == this.categories[j].id) {
                    text = text + "- " + this.categories[j].attributes.name + ".\n";
                }
            }
        }
        console.log('Checkbox data:', text);
        //this.form.value.category_ids=text;
        this.userProvider.check_User().then(function (data) {
            _this.sellers.user_id = data;
            console.log('Checkbox data:', _this.sellers);
            _this.sellers.category_ids = text,
                console.log('Checkbox data:', _this.sellers.category_ids);
        });
    };
    SaveSellersPage.prototype.createSeller = function () {
        var _this = this;
        var loading = this.alert.loading('Cargando...');
        loading.present();
        this.sellers.category_ids = this.categoriesCheck;
        this.sellersProvider.createSellers(this.sellers).subscribe(function (data) {
            data = JSON.parse(data['_body']);
            loading.dismiss();
            _this.alert.alert("Enhorabuena!", "Profesional Creado Exitosamente");
            _this.navCtrl.pop();
        }, function (error) {
            loading.dismiss();
            console.log(error);
            try {
                //this.messages(error.error.errors.full_messages[0]);
                _this.alert.alert("Alerta!", "Ha ocurrido un error");
            }
            catch (err) {
                _this.alert.alert("Alerta!", "Ha ocurrido un error");
            }
        });
    };
    SaveSellersPage.prototype.openOptions = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Seleccionar imagen',
            buttons: [
                {
                    text: 'Cargar de galeria',
                    handler: function () {
                        _this.openImagePicker();
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.openCamera();
                        //this.getPicture()
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SaveSellersPage.prototype.encodeImageUri = function (imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL("image/jpeg");
            callback(dataURL);
        };
        img.src = imageUri;
    };
    SaveSellersPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission()
            .then(function (result) {
            if (result == false) {
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                })
                    .then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.setImgShop(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    SaveSellersPage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.setImgShop(imageData);
        }, function (err) {
            // Handle error
        });
    };
    SaveSellersPage.prototype.setImgShop = function (image) {
        var _this = this;
        image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* normalizeURL */])(image);
        //uploads img to firebase storage
        this.uploadImage(image)
            .then(function (photoURL) {
            _this.sellers.avatar = photoURL;
        });
    };
    SaveSellersPage.prototype.uploadImage = function (imageURI) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.encodeImageUri(imageURI, function (image64) {
                resolve(image64);
            });
        });
    };
    SaveSellersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-save-sellers',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\save-sellers\save-sellers.html"*/'<ion-header class="bg-thime">\n  <ion-navbar>\n    <button ion-button menuToggle style="display: block !important;">\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png">\n        <ion-badge id="notifications-badge" color="danger">4</ion-badge>\n      </ion-icon>\n    </button>\n\n    <ion-title text-uppercase text-center>{{"app_title" | translate}} <br>\n       <div (click)="selectCountry()" class="country"> <small> {{country}}</small> <ion-icon name="arrow-dropdown"></ion-icon></div>\n      <span float-right>\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n        <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;">\n          <ion-badge id="notifications-badge" color="danger">2</ion-badge>\n        </ion-icon>\n      </span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="form" padding-left padding-right>\n    <p text-center padding-bottom margin-bottom>Crear Vendedor</p>\n    <ion-list>\n        <div class="container" >\n            <img class="avatar" *ngIf="!sellers.avatar" src="data:image/png;base64,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">\n             <img class="avatar" *ngIf="sellers.avatar" src="{{sellers.avatar}}">\n           </div>\n      <ion-item>\n        <ion-label>{{"full_name" | translate}}</ion-label>\n        <ion-input type="text" text-right ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Titulo</ion-label>\n        <ion-input type="text" text-right ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{"email" | translate}}</ion-label>\n        <ion-input type="text" text-right ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Descripcion</ion-label>\n        <ion-input type="text" text-right></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="createSeller()">Crear</button>\n<!--     <p text-center>\n      <small>\n        {{"tnc_prelabel" | translate}} \n        <span class="text-sky"> {{"tnc" | translate}} </span>\n      </small>\n    </p> -->\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\save-sellers\save-sellers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_gps_gps__["a" /* GpsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_users_module_users_module__["a" /* UsersModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_sellers_module_sellers_module__["a" /* SellersModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */]])
    ], SaveSellersPage);
    return SaveSellersPage;
}());

//# sourceMappingURL=save-sellers.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_token__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_filters_module_filters_module__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_routes__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__itemdetail_itemdetail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__marks_icons__ = __webpack_require__(718);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var infowindow;
var MapPage = (function () {
    function MapPage(navCtrl, navParams, toastCtrl, platform, storage, geo, loading, _tokenService, events, alertCtrl, actionSheetCtrl, bigwaveProvider, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.storage = storage;
        this.geo = geo;
        this.loading = loading;
        this._tokenService = _tokenService;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.bigwaveProvider = bigwaveProvider;
        this.modalCtrl = modalCtrl;
        this.newcategories = [];
        this.lat = 0;
        this.lng = 0;
        this.window = false;
        this.window2 = false;
        this.window3 = true;
        this.showWindow = ['primary', '', ''];
        this.q = "";
        this.buscar = "";
        this.buscar2 = "";
        this.buscarActivo = "";
        this.productsAll = [];
        this.productsAll2 = [];
        this.productsAll3 = [];
        this.followAll = { pymes: [], sellers: [], independents: [] };
        this.wishList = [];
        this.profilesFilterAll = ["Pyme", "Independent", "Seller"];
        this.profilesFilter = ["Pyme", "Independent", "Seller"];
        this.radioZoom = 2;
        this.zoom = 14;
        this.zoomM = 14;
        this.filter = {
            show: false,
            icon: "funnel"
        };
        this.start = 'chicago, il';
        this.end = 'chicago, il';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.country = 'Chile';
        platform.ready().then(function () {
        });
        this.newcategories = [];
        this.sucursal = [];
        this.sucursalAll = [];
        this.window = false;
        this.events.subscribe("userLogin", function (user) {
            _this.user = user;
            if (_this.user != null) {
                _this.showFollow("pymes");
                _this.showFollow("sellers");
                _this.showFollow("independents");
                _this.listWish();
            }
            console.log("events in perfil", _this.user);
        });
        this.checkLogin();
        //this.loading2 = this.loading.create({ content: 'Cargando...' });
    }
    MapPage.prototype.ionViewDidLoad = function () {
        //this.loading2.present();
        this.miPosition();
        this.getCategories();
        console.log('ionViewDidLoad NearbyPage');
        //this.loading2.dismiss();
    };
    MapPage.prototype.presentModal = function (product) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */], { product: product });
        modal.onDidDismiss(function (data) {
            console.log(data);
        });
        modal.present();
    };
    MapPage.prototype.getIdProfile = function (product) {
        for (var i = 0; i < this.sucursalAll.length; i++) {
            for (var j = 0; j < this.sucursalAll[i].profiles.length; j++) {
                var id = this.sucursalAll[i].profiles[j].id;
                for (var k = 0; k < this.sucursalAll[i].profiles[j].products.length; k++) {
                    if (this.sucursalAll[i].profiles[j].products[k].id == product.id) {
                        return id;
                    }
                }
            }
        }
    };
    MapPage.prototype.addProduct = function (product) {
        var _this = this;
        console.log(product);
        if (this.user == null) {
            var confirm_1 = this.alertCtrl.create({
                title: 'Crear Tienda',
                message: 'Para agregar a Deseos un producto debes registrarte',
                buttons: [
                    {
                        text: 'ok',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Registrarse',
                        handler: function () {
                            _this.navCtrl.parent.select(2);
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            var loading_1 = this.loading.create({ content: 'Cargando...' });
            loading_1.present();
            console.log(product);
            product.attributes = product;
            var type = product.type_profile.toLowerCase() + "s";
            var id = this.getIdProfile(product);
            var url = __WEBPACK_IMPORTED_MODULE_7__providers_routes__["b" /* routes */].getProducts(type, id, product.id);
            this._tokenService.get(url).subscribe(function (data) {
                loading_1.dismiss();
                console.log(data);
                var pr;
                pr = JSON.parse(data['_body']);
                /*  console.log(data) */
                _this.presentModal(pr.data);
                console.log(pr.data);
                /* if()
           */ 
            }, function (error) {
                console.log(error);
                loading_1.dismiss();
                _this.messages("Ha ocurrido un error al cargar la inforamción.");
            });
        }
    };
    MapPage.prototype.goMapa = function () {
        console.log("ver");
    };
    MapPage.prototype.goProduct = function (product) {
        console.log(product);
        product.attributes = product;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__itemdetail_itemdetail__["a" /* ItemdetailPage */], {
            product: product
        });
    };
    MapPage.prototype.goProfile = function (profile, type) {
        console.log(profile);
        profile.attributes = profile;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__itemdetail_itemdetail__["a" /* ItemdetailPage */], {
            profile: profile,
            type: type
        });
    };
    MapPage.prototype.addWish = function (item) {
        var _this = this;
        console.log(item);
        //this.wishSelect = item;
        var params = {
            wish: {
                name: item.name,
                description: "description",
                budget: item.price,
                wisheable_id: item.id,
                wisheable_type: "products"
            }
        };
        //let wishId = params.wish;
        console.log(item);
        if (this.user == null) {
            var confirm_2 = this.alertCtrl.create({
                title: 'Crear Tienda',
                message: 'Para agregar a Deseos un producto debes registrarte',
                buttons: [
                    {
                        text: 'ok',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Registrarse',
                        handler: function () {
                            _this.navCtrl.parent.select(2);
                        }
                    }
                ]
            });
            confirm_2.present();
        }
        else {
            var idWish = this.deleteWish(item);
            var options_1;
            if (item.followColor == "icon-seguir") {
                options_1 = {
                    url: __WEBPACK_IMPORTED_MODULE_7__providers_routes__["b" /* routes */].createWish(),
                    wish: true,
                    icon: "icon-seguir2",
                    service: true
                };
                var loading_2 = this.loading.create({ content: 'Cargando...' });
                loading_2.present();
                console.log(params);
                this._tokenService.post(options_1.url, params).subscribe(function (data) {
                    console.log(data);
                    data = JSON.parse(data['_body']);
                    console.log(data);
                    item.followColor = options_1.icon;
                    _this.events.publish("updateWish", true);
                    _this.listWish();
                    loading_2.dismiss();
                }, function (error) {
                    console.log(error);
                    loading_2.dismiss();
                    _this.messages("Ha ocurrido un error al cargar la información.");
                });
            }
            else {
                options_1 = {
                    pregunta: '¿Quieres eliminar este articulo de tus Deseos?',
                    url: __WEBPACK_IMPORTED_MODULE_7__providers_routes__["b" /* routes */].deleteWish(idWish),
                    wish: false,
                    icon: "icon-seguir"
                };
                var confirm_3 = this.alertCtrl.create({
                    message: options_1.pregunta,
                    buttons: [
                        {
                            text: 'No',
                            handler: function () {
                                console.log('no');
                            }
                        },
                        {
                            text: 'Si',
                            handler: function () {
                                var loading = _this.loading.create({ content: 'Cargando...' });
                                loading.present();
                                console.log(params);
                                _this._tokenService.delete(options_1.url).subscribe(function (data) {
                                    console.log(data);
                                    data = JSON.parse(data['_body']);
                                    console.log(data);
                                    item.followColor = options_1.icon;
                                    _this.events.publish("updateWish", true);
                                    _this.listWish();
                                    loading.dismiss();
                                }, function (error) {
                                    console.log(error);
                                    loading.dismiss();
                                    _this.messages("Ha ocurrido un error al cargar la información.");
                                });
                            }
                        }
                    ]
                });
                confirm_3.present();
            }
        }
    };
    MapPage.prototype.deleteWish = function (item) {
        for (var i = 0; i < this.wishList.length; i++) {
            if (item.id == this.wishList[i].attributes.wisheable.id) {
                return this.wishList[i].id;
            }
        }
    };
    MapPage.prototype.listWish = function () {
        var _this = this;
        //console.log(this.products)
        this._tokenService.get(__WEBPACK_IMPORTED_MODULE_7__providers_routes__["b" /* routes */].listWish()).subscribe(function (data) {
            /*    loading.dismiss(); */
            /*     console.log(data) */
            data = JSON.parse(data['_body']);
            /*  console.log(data) */
            _this.wishList = data;
            _this.wishList = _this.wishList.data;
            /*for(var i=0; i<this.wishList.length; i++){
              this.wishListAll[i]=this.wishList[i].attributes
            }
            this.wishList = this.wishListAll;
      
            for(i=0; i<this.products.length;i++){
              let list = this.products[i];
              for(var j=0;j<this.wishListAll.length;j++){
                if(list.name == this.wishListAll[j].name){
                   this.products[i].wish = true;
                }
              }
            }*/
            console.log(_this.wishList);
            /* if()
       */ 
        }, function (error) {
            console.log(error);
            /*   loading.dismiss(); */
            _this.messages("Ha ocurrido un error al cargar la inforamción.");
        });
    };
    MapPage.prototype.wish = function (item) {
        for (var j = 0; j < this.wishList.length; j++) {
            if (item.id == this.wishList[j].attributes.wisheable.id) {
                return true;
            }
        }
        return false;
    };
    MapPage.prototype.checkLogin = function () {
        var _this = this;
        this.storage.get('user').then(function (user) {
            if (user) {
                _this.user = JSON.parse(user);
                _this.showFollow("pymes");
                _this.showFollow("sellers");
                _this.showFollow("independents");
                _this.listWish();
            }
            else {
                _this.user = null;
            }
        }); //storage user
    };
    MapPage.prototype.follow = function (item) {
        var type = item.type_profile.toLowerCase() + "s";
        console.log(type);
        for (var j = 0; j < this.followAll[type].length; j++) {
            if (item.id == this.followAll[type][j].id) {
                return true;
            }
        }
        return false;
    };
    MapPage.prototype.showFollow = function (profile) {
        var _this = this;
        /*let loading = this.loading.create({ content: 'Cargando...' });
        loading.present();*/
        var url = __WEBPACK_IMPORTED_MODULE_7__providers_routes__["b" /* routes */].following(profile);
        this._tokenService.get(url).subscribe(function (data) {
            //loading.dismiss();
            console.log(data);
            _this.followAll[profile] = JSON.parse(data['_body']).data;
            console.log(_this.followAll[profile]);
            for (var i = 0; i < _this.followAll[profile].length; i++) {
                _this.followAll[profile][i].followColor = "icon-seguir2";
            }
            //this.showFollowing();
        }, function (error) {
            console.log(error);
            //loading.dismiss();
            _this.messages("Ha ocurrido un error al cargar la información.");
        });
    };
    MapPage.prototype.deleteFollew = function (id, type) {
        for (var i = 0; i < this.followAll[type].length; i++) {
            if (this.followAll[type][i].id == id) {
                this.followAll[type].splice(i, 1);
                return;
            }
        }
    };
    MapPage.prototype.seguir = function (profile) {
        var _this = this;
        console.log(profile);
        if (this.user == null) {
            var confirm_4 = this.alertCtrl.create({
                title: 'Crear Tienda',
                message: 'Para seguir un perfil debes registrarte',
                buttons: [
                    {
                        text: 'ok',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Registrarse',
                        handler: function () {
                            _this.navCtrl.parent.select(2);
                        }
                    }
                ]
            });
            confirm_4.present();
        }
        else {
            var options_2;
            var type = profile.type_profile.toLowerCase() + "s";
            if (profile.followColor == "icon-seguir") {
                options_2 = {
                    url: __WEBPACK_IMPORTED_MODULE_7__providers_routes__["b" /* routes */].follow(type, profile.id),
                    icon: "icon-seguir2"
                };
                var loading_3 = this.loading.create({ content: 'Cargando...' });
                loading_3.present();
                this._tokenService.get(options_2.url).subscribe(function (data) {
                    loading_3.dismiss();
                    console.log(data);
                    data = JSON.parse(data['_body']);
                    console.log(data);
                    profile.followColor = options_2.icon;
                    _this.followAll[type].push(profile);
                    //this.changeFoller(profile.id,options.icon);
                }, function (error) {
                    console.log(error);
                    loading_3.dismiss();
                    _this.messages("Ha ocurrido un error al cargar la inforamción.");
                });
            }
            else {
                options_2 = {
                    pregunta: '¿Quieres dejar de seguir a ' + profile.title + '?',
                    url: __WEBPACK_IMPORTED_MODULE_7__providers_routes__["b" /* routes */].unfollow(type, profile.id),
                    icon: "icon-seguir"
                };
                var confirm_5 = this.alertCtrl.create({
                    message: options_2.pregunta,
                    buttons: [
                        {
                            text: 'No',
                            handler: function () {
                                console.log('no');
                            }
                        },
                        {
                            text: 'Si',
                            handler: function () {
                                var loading = _this.loading.create({ content: 'Cargando...' });
                                loading.present();
                                var info = {
                                    unfollow: {
                                        profile_id: profile.id
                                    }
                                };
                                _this._tokenService.post(options_2.url, info).subscribe(function (data) {
                                    loading.dismiss();
                                    console.log(data);
                                    data = JSON.parse(data['_body']);
                                    console.log(data);
                                    profile.followColor = options_2.icon;
                                    _this.deleteFollew(profile.id, type);
                                    //this.changeFoller(profile.id,options.icon);
                                }, function (error) {
                                    console.log(error);
                                    loading.dismiss();
                                    _this.messages("Ha ocurrido un error al cargar la inforamción.");
                                });
                            }
                        }
                    ]
                });
                confirm_5.present();
            }
        }
    };
    MapPage.prototype.ordenar = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Ordenar productos',
            buttons: [
                {
                    text: 'Menor a mayor precio',
                    handler: function () {
                        _this.productsAll3 = _this.menorMayor(_this.productsAll3);
                        _this.getItems(_this.buscar2);
                    }
                },
                {
                    text: 'Mayor a menor precio',
                    handler: function () {
                        _this.productsAll3 = _this.mayorMenor(_this.productsAll3);
                        _this.getItems(_this.buscar2);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    MapPage.prototype.menorMayor = function (poductos3) {
        var productos = [];
        while (poductos3.length > 1) {
            var prod = {
                precio: poductos3[0].price,
                position: 0
            };
            for (var i = 1; i < poductos3.length; i++) {
                if (prod.precio > poductos3[i].price) {
                    prod = {
                        precio: poductos3[i].price,
                        position: i
                    };
                }
            }
            console.log(prod);
            productos.push(poductos3[prod.position]);
            poductos3.splice(prod.position, 1);
        }
        productos.push(poductos3[0]);
        return productos;
    };
    MapPage.prototype.mayorMenor = function (poductos3) {
        var productos = [];
        while (poductos3.length > 1) {
            var prod = {
                precio: poductos3[0].price,
                position: 0
            };
            for (var i = 1; i < poductos3.length; i++) {
                if (prod.precio < poductos3[i].price) {
                    prod = {
                        precio: poductos3[i].price,
                        position: i
                    };
                }
            }
            console.log(prod);
            productos.push(poductos3[prod.position]);
            poductos3.splice(prod.position, 1);
        }
        productos.push(poductos3[0]);
        return productos;
    };
    MapPage.prototype.getItems = function (searchbar) {
        this.detail2 = this.detail3;
        this.productsAll2 = this.productsAll3;
        var q = this.buscar2;
        if (!q) {
            return;
        }
        this.detail2 = this.detail3.filter(function (v) {
            if (v.title && q) {
                if (v.title.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        this.productsAll2 = this.productsAll3.filter(function (v) {
            if (v.name && q) {
                if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    MapPage.prototype.address = function () {
        var autocomplete = new google.maps.places.Autocomplete(this.inputElement.nativeElement, { type: ["address"] });
        autocomplete.bindTo('bounds', this.map);
        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        var marker = new google.maps.Marker({
            map: this.map,
            anchorPoint: new google.maps.Point(0, -29)
        });
        var th = this;
        autocomplete.addListener('place_changed', function () {
            infowindow.close();
            //marker.setVisible(false);
            console.log(autocomplete.getPlace().formatted_address);
            var place = autocomplete.getPlace().formatted_address;
            var loading = th.loading.create({ content: 'Cargando...' });
            loading.present();
            var data = {
                title: place
            };
            th.bigwaveProvider.direccion(data).subscribe(function (response) {
                loading.dismiss();
                console.log(response.body.results[0].geometry.location);
                th.lat = response.body.results[0].geometry.location.lat;
                th.lng = response.body.results[0].geometry.location.lng;
                th.filtrarCategories();
            }, function (error) {
                loading.dismiss();
                th.messages("Dirección no encontrada");
                console.log(error);
            });
        });
    };
    MapPage.prototype.showSpandir = function () {
        this.window2 = true;
    };
    MapPage.prototype.changeShowWindow = function (item) {
        this.showWindow = ['', '', ''];
        this.showWindow[item] = 'primary';
    };
    MapPage.prototype.getCategories = function () {
        var _this = this;
        this.storage.get('user').then(function (user) {
            _this.user = user;
            /*     if (this.user) { */
            _this.storage.get('headers').then(function (data) {
                var url = __WEBPACK_IMPORTED_MODULE_7__providers_routes__["b" /* routes */].categoriesFilter();
                _this._tokenService.get(url, data).subscribe(function (response) {
                    /*  let id = response['data'].id; */
                    /*  this.user.id = id; */
                    var token, uid, client;
                    client = response['headers'].get('client');
                    uid = response['headers'].get('uid');
                    token = response['headers'].get('access-token');
                    _this.categories = JSON.parse(response['_body']);
                    console.log(_this.categories);
                    /*        this.categories = this.categories; */
                    for (var i in _this.categories.data) {
                        _this.newcategories[i] = _this.categories.data[i].id;
                    }
                    _this.categories = _this.categories.data;
                    var header = {
                        token: token,
                        client: client,
                        uid: uid
                    };
                    _this.storage.set('headers', header);
                }, function (error) {
                    console.log(error);
                });
            });
        });
    };
    MapPage.prototype.onInput = function () {
        for (var i in this.categories) {
            this.newcategories[i] = this.categories[i].id;
        }
        this.profilesFilter = this.profilesFilterAll;
        console.log(this.buscar);
        this.buscarActivo = this.buscar;
        this.filtrarCategories();
    };
    MapPage.prototype.onClose = function () {
        this.buscar = "";
        this.onInput();
    };
    MapPage.prototype.showFilter1 = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Perfiles');
        alert.addInput({
            type: 'checkbox',
            label: "Ver Pymes",
            value: "Pyme",
            checked: this.showFilterProfile("Pyme")
        });
        alert.addInput({
            type: 'checkbox',
            label: "Ver Independents",
            value: "Independent",
            checked: this.showFilterProfile("Independent")
        });
        alert.addInput({
            type: 'checkbox',
            label: "Ver Sellers",
            value: "Seller",
            checked: this.showFilterProfile("Seller")
        });
        alert.addButton({
            text: 'Listo',
            handler: function (data) {
                _this.profilesFilter = data;
                if (_this.profilesFilter.length > 0) {
                    _this.filtrarProfiles();
                    _this.initMap();
                    _this.createmarkers();
                }
                else {
                    _this.filtrarProfiles();
                    _this.initMap();
                    _this.createmarkers();
                    _this.messages("No selecciono ninguna categoria");
                    //this.filtrarCategories();
                }
                console.log('Checkbox data:', data);
            }
        });
        alert.addButton({
            text: 'Desmarcar Todo',
            handler: function (data) {
                _this.profilesFilter = [];
                _this.showFilter1();
                console.log('Checkbox data:', data);
            }
        });
        alert.addButton({
            text: 'Marcar Todo',
            handler: function (data) {
                _this.profilesFilter = _this.profilesFilterAll;
                _this.showFilter1();
                console.log('Checkbox data:', _this.newcategories);
            }
        });
        alert.addButton('Cancelar');
        alert.present();
    };
    MapPage.prototype.showFilterProfile = function (item) {
        for (var j = 0; j < this.profilesFilter.length; j++) {
            if (item == this.profilesFilter[j]) {
                return true;
            }
        }
        return false;
    };
    MapPage.prototype.filtrarProfiles = function () {
        var profile = [];
        for (var i = 0; i < this.sucursal.length; i++) {
            var suc = {
                latitude: this.sucursal[i].latitude,
                longitude: this.sucursal[i].longitude,
                profiles: []
            };
            var tiene = false;
            for (var k = 0; k < this.sucursal[i].profiles.length; k++) {
                for (var j = 0; j < this.profilesFilter.length; j++) {
                    if (this.sucursal[i].profiles[k].type_profile == this.profilesFilter[j]) {
                        tiene = true;
                        suc.profiles.push(this.sucursal[i].profiles[k]);
                    }
                }
            }
            if (tiene) {
                profile.push(suc);
            }
        }
        this.sucursalAll = [];
        if (profile.length > 0) {
            for (var i = 0; i < profile.length; i++) {
                this.sucursalAll.push(profile[i]);
            }
        }
        else {
            this.messages("No hay perfiles con las caracteristicas especificadas");
        }
    };
    MapPage.prototype.showFilter2 = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Categorias');
        console.log(this.categories);
        for (var i = 0; i < this.categories.length; i++) {
            this.categories[i].checked = this.verificarCheckbox(this.categories[i].id);
            alert.addInput({
                type: 'checkbox',
                label: this.categories[i].attributes.name,
                value: this.categories[i].id,
                checked: this.categories[i].checked
            });
        }
        alert.addButton({
            text: 'Listo',
            handler: function (data) {
                _this.newcategories = data;
                if (_this.newcategories.length > 0) {
                    _this.filtrarCategories();
                }
                else {
                    _this.messages("No selecciono ninguna categoria");
                    //this.filtrarCategories();
                }
                console.log('Checkbox data:', data);
            }
        });
        alert.addButton({
            text: 'Desmarcar Todo',
            handler: function (data) {
                _this.newcategories = [];
                _this.showFilter2();
                console.log('Checkbox data:', data);
            }
        });
        alert.addButton({
            text: 'Marcar Todo',
            handler: function (data) {
                for (var i in _this.categories) {
                    _this.newcategories[i] = _this.categories[i].id;
                }
                _this.showFilter2();
                console.log('Checkbox data:', _this.newcategories);
            }
        });
        alert.addButton('Cancelar');
        alert.present();
    };
    MapPage.prototype.filtrarCategories = function () {
        var _this = this;
        var loading = this.loading.create({ content: 'Cargando...' });
        loading.present();
        this.bigwaveProvider.geololization(this.lat, this.lng, this.newcategories, this.buscarActivo, this.radioZoom).subscribe(function (response) {
            console.log(response);
            _this.sucursal = JSON.parse(response['_body']);
            _this.zoomM = _this.zoom;
            console.log(_this.sucursal);
            if (_this.sucursal.length > 0) {
                for (var i = 0; i < _this.sucursal.length; i++) {
                    var profiles = _this.sucursal[i].profiles;
                    for (var j = 0; j < profiles.length; j++) {
                        profiles[j] = profiles[j];
                        profiles[j] = profiles[j][0];
                    }
                    var sucursal = {
                        latitude: _this.sucursal[i].latitude,
                        longitude: _this.sucursal[i].longitude,
                        profiles: profiles
                    };
                    _this.sucursal[i] = sucursal;
                }
                _this.filtrarProfiles();
                console.log(_this.sucursal);
                _this.initMap();
                _this.createmarkers();
                loading.dismiss();
            }
            else {
                loading.dismiss();
                _this.initMap();
                _this.messages("No hay perfiles con las caracteristicas especificadas");
            }
        }, function (error) {
            loading.dismiss();
            _this.messages("Ha ocurrido un error al cargar la información");
            console.log(error);
        });
    };
    MapPage.prototype.verificarCheckbox = function (id) {
        if (this.newcategories.length > 0) {
            for (var i = 0; i < this.newcategories.length; i++) {
                if (this.newcategories[i] == id) {
                    return true;
                }
            }
        }
        return false;
    };
    MapPage.prototype.miPosition = function () {
        var _this = this;
        this.geo.getCurrentPosition().then(function (pos) {
            _this.lat = 11.68501858908447;
            _this.lng = -70.17362594604492;
            _this.filtrarCategories();
        }).catch(function (err) {
            _this.initMap();
            _this.messages("GPS no activado");
        });
    };
    MapPage.prototype.initMap = function () {
        var _this = this;
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: this.zoomM,
            center: { lat: this.lat, lng: this.lng },
            disableDefaultUI: true
        });
        this.window = false;
        this.directionsDisplay.setMap(this.map);
        this.createMarkerUser();
        /*  this.createmarkers(); */
        infowindow = new google.maps.InfoWindow();
        var prueba = this;
        this.map.addListener('click', function (e) {
            var coor = e.latLng + "";
            coor = coor.substring(1, coor.length - 1);
            var lat = coor.split(", ", 2);
            console.log("coordenadas: " + e.latLng);
            console.log("coordenadas: " + coor);
            console.log(+lat[0]);
            console.log(+lat[1]);
            prueba.lat = +lat[0];
            prueba.lng = +lat[1];
            _this.filtrarCategories();
        });
        this.map.addListener('zoom_changed', function (e) {
            console.log(e);
            _this.zoom = _this.map.getZoom();
            console.log(_this.zoom);
            _this.zoomMap(_this.zoom);
        });
        this.address();
        var circle = new google.maps.Circle({
            map: this.map,
            radius: (this.radioZoom * 1100),
            fillColor: '#3f51b5',
            center: { lat: this.lat, lng: this.lng },
            clickeable: true,
            strokeColor: '#000000',
            strokeOpacity: 0.5,
            strokeWeight: 1,
            fillOpacity: 0.1
        });
        google.maps.event.addListener(circle, 'click', function (ev) {
            console.log(ev);
            circle.setMap(null);
        });
    };
    MapPage.prototype.cargarZoom = function (item) {
        if (item < this.zoomM) {
            this.zoomM = item;
            this.filtrarCategories();
        }
    };
    MapPage.prototype.zoomMap = function (item) {
        if (item == 16) {
            this.radioZoom = 1;
            this.cargarZoom(item);
        }
        else if (item == 15) {
            this.radioZoom = 2;
            this.cargarZoom(item);
        }
        else if (item == 14) {
            this.radioZoom = 2;
            this.cargarZoom(item);
        }
        else if (item == 13) {
            this.radioZoom = 4;
            this.cargarZoom(item);
        }
        else if (item == 12) {
            this.radioZoom = 7;
            this.cargarZoom(item);
        }
        else if (item == 11) {
            this.radioZoom = 13;
            this.cargarZoom(item);
        }
        else if (item == 10) {
            this.radioZoom = 25;
            this.cargarZoom(item);
        }
        else if (item == 9) {
            this.radioZoom = 40;
            this.cargarZoom(item);
        }
        else if (item == 8) {
            this.radioZoom = 76;
            this.cargarZoom(item);
        }
        else if (item == 7) {
            this.radioZoom = 150;
            this.cargarZoom(item);
        }
        else if (item == 6) {
            this.radioZoom = 300;
            this.cargarZoom(item);
            ;
        }
        else if (item == 5) {
            this.radioZoom = 600;
            this.cargarZoom(item);
            ;
        }
        else if (item == 4) {
            this.radioZoom = 1200;
            this.cargarZoom(item);
            ;
        }
        else if (item == 3) {
            this.radioZoom = 2400;
            this.cargarZoom(item);
            ;
        }
        else if (item == 2) {
            this.radioZoom = 4800;
            this.cargarZoom(item);
            ;
        }
        else if (item == 1) {
            this.radioZoom = 9600;
            this.cargarZoom(item);
            ;
        }
    };
    MapPage.prototype.createMarkerUser = function () {
        if (this.lat == 0 && this.lng == 0) {
            //this.message("No se pudo establecer la ubicacion");
        }
        else {
            var place = { lat: this.lat, lng: this.lng };
            var image = {
                url: __WEBPACK_IMPORTED_MODULE_9__marks_icons__["a" /* icons */].kenny.icon,
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 32),
                scaledSize: new google.maps.Size(32, 32)
            };
            var marker = new google.maps.Marker({
                map: this.map,
                position: place,
                icon: image,
            });
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent("Estas Aqui");
                infowindow.open(this.map, this);
            });
        }
    };
    MapPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        this.directionsService.route({
            origin: this.start,
            destination: this.end,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    MapPage.prototype.createmarkers = function () {
        var _this = this;
        this.sucursalAll.forEach(function (sucursal) {
            var profiles = sucursal.profiles;
            profiles.forEach(function (profile) {
                var image = {
                    url: __WEBPACK_IMPORTED_MODULE_9__marks_icons__["b" /* iconsMaps */][profile.type_profile].icon,
                    size: new google.maps.Size(32, 32),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(16, 32),
                    scaledSize: new google.maps.Size(32, 32)
                };
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(sucursal.latitude, sucursal.longitude),
                    icon: image,
                    draggable: false,
                    animation: google.maps.Animation.DROP,
                    map: _this.map
                });
                google.maps.event.addListener(marker, 'click', function () {
                    _this.info(profiles);
                });
            });
        });
    };
    MapPage.prototype.info = function (sucursal) {
        console.log(sucursal);
        var prod = [];
        for (var i = 0; i < sucursal.length; i++) {
            var type = sucursal[i].type_profile;
            var title = sucursal[i].title;
            if (this.follow(sucursal[i])) {
                sucursal[i].followColor = "icon-seguir2";
            }
            else {
                sucursal[i].followColor = "icon-seguir";
            }
            console.log(sucursal);
            for (var j = 0; j < sucursal[i].products.length; j++) {
                var product = sucursal[i].products[j];
                if (this.wish(product)) {
                    product.followColor = "icon-seguir2";
                }
                else {
                    product.followColor = "icon-seguir";
                }
                product.type_profile = type;
                product.title = title;
                prod.push(product);
            }
        }
        var sucu = [];
        if (sucursal.length > 3) {
            for (var i = 0; i < 3; i++) {
                sucu.push(sucursal[i]);
            }
        }
        else {
            sucu = sucursal;
        }
        var pro = [];
        if (prod.length > 5) {
            for (var i = 0; i < 5; i++) {
                pro.push(prod[i]);
            }
        }
        else {
            pro = prod;
        }
        this.productsAll3 = prod;
        this.productsAll2 = prod;
        this.productsAll = pro;
        this.window = true;
        console.log(this.window);
        this.detail3 = sucursal;
        this.detail2 = sucursal;
        this.detail = sucu;
        console.log(this.productsAll3, this.detail3);
    };
    MapPage.prototype.closeinfo = function () {
        this.window = false;
    };
    MapPage.prototype.closeinfo2 = function () {
        this.window2 = false;
    };
    MapPage.prototype.messages = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('pac'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], MapPage.prototype, "inputElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\map\map.html"*/'<ion-header class="bg-thime">\n  <ion-navbar>\n    <button ion-button menuToggle style="display: block !important;">\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png">\n        <ion-badge id="notifications-badge" color="danger">4</ion-badge>\n      </ion-icon>\n    </button>\n\n    <ion-title text-uppercase text-center>{{"app_title" | translate}} <br>\n       <div (click)="selectCountry()" class="country"> <small> {{country}}</small> <ion-icon name="arrow-dropdown"></ion-icon></div>\n      <span float-right>\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n        <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;">\n          <ion-badge id="notifications-badge" color="danger">2</ion-badge>\n        </ion-icon>\n      </span>\n    </ion-title>\n  </ion-navbar>\n  <ion-searchbar  #pac (ionInput)="getItems($event)" placeholder="Buscar direccion..."></ion-searchbar>\n</ion-header>\n<ion-content style="position: relative;">\n  <!--<div id="map_canvas"></div>-->\n  <div #map id="map" style="width: 100%;height: 100%" (click)="goMapa()"></div>\n\n\n  <div style="position: absolute;left: 0;top: 0;width: 100%;height: 100%" *ngIf="window2">\n    \n     <div class="espandir" *ngIf="window2&&showWindow[0]!=\'\'">\n        <div class="item-scroll"  *ngFor="let profile of detail2" text-center >\n          <div class="item-item" *ngIf="profile.type_profile == \'Pyme\'">\n            <img *ngIf="profile.banner!=null&&profile.banner!=\'\'" (click)="goProfile(profile,\'Pyme\')" class="banner" src="{{profile.banner}}">\n            <img *ngIf="profile.banner==null||profile.banner==\'\'" (click)="goProfile(profile,\'Pyme\')" class="banner" src="https://about.canva.com/es_es/wp-content/uploads/sites/3/2015/02/Etsy-Banners.png">\n              <div class="imagenes" (click)="goProfile(profile,\'Pyme\')">\n                <div class="imagen">\n                    <img *ngIf="profile.photo!=null" class="logo" src="{{profile.photo}}">\n                    <img *ngIf="profile.photo==null" class="logo" src="http://fundaciondiversidad.org/images/stories/imagen_no_disponible.jpg">\n                </div>                  \n              </div>\n            <button icon-only class="boton-seguir" (click)="seguir(profile)">\n              <ion-icon [ngClass]="profile.followColor" name="ios-thumbs-up"></ion-icon>\n            </button>\n          </div>\n          <div class="item-item3" *ngIf="profile.type_profile == \'Seller\'">        \n            <img *ngIf="profile.banner!=null&&profile.banner!=\'\'" (click)="goProfile(profile,\'Seller\')" class="banner" src="{{profile.banner}}">\n            <img *ngIf="profile.banner==null||profile.banner==\'\'" (click)="goProfile(profile,\'Seller\')" class="banner" src="https://about.canva.com/es_es/wp-content/uploads/sites/3/2015/02/Etsy-Banners.png">\n              <div class="imagenes" (click)="goProfile(profile,\'Seller\')">\n                <div class="imagen">\n                    <img *ngIf="profile.photo!=null" class="logo" src="{{profile.photo}}">\n                    <img *ngIf="profile.photo==null" class="logo" src="http://fundaciondiversidad.org/images/stories/imagen_no_disponible.jpg">\n                </div>                  \n              </div>\n            <button icon-only class="boton-seguir" (click)="seguir(profile)">\n              <ion-icon [ngClass]="profile.followColor" name="ios-thumbs-up"></ion-icon>\n            </button>\n          </div>\n          <div class="item-item2" *ngIf="profile.type_profile == \'Independent\'" >        \n            <img *ngIf="profile.banner!=null&&profile.banner!=\'\'" (click)="goProfile(profile,\'Independent\')" class="banner" src="{{profile.banner}}">\n            <img *ngIf="profile.banner==null||profile.banner==\'\'" (click)="goProfile(profile,\'Independent\')" class="banner" src="https://about.canva.com/es_es/wp-content/uploads/sites/3/2015/02/Etsy-Banners.png">\n              <div class="imagenes" (click)="goProfile(profile,\'Independent\')">\n                <div class="imagen">\n                    <img *ngIf="profile.photo!=null" class="logo" src="{{profile.photo}}">\n                    <img *ngIf="profile.photo==null" class="logo" src="http://fundaciondiversidad.org/images/stories/imagen_no_disponible.jpg">\n                </div>                  \n              </div>\n            <button icon-only class="boton-seguir" (click)="seguir(profile)">\n              <ion-icon [ngClass]="profile.followColor" name="ios-thumbs-up"></ion-icon>\n            </button>\n          </div>\n          <div class="title-item2" *ngIf="profile.type_profile == \'Pyme\'">{{profile.title}}</div>\n          <div class="title-item" *ngIf="profile.type_profile != \'Pyme\'">{{profile.title}}</div>\n        </div>\n      </div>\n\n      <div class="espandir" *ngIf="window2&&showWindow[1]!=\'\'">\n        <div class="item-scroll2" *ngFor="let product of productsAll2" >      \n          <ion-grid >\n            <ion-row >\n              <ion-col col-5 class="img">\n                <div class="imagen">\n                  <img class="image-fondo" src="assets/imgs/fondo.jpg">\n                  <img *ngIf="product.images!=null" (click)="goProduct(product)" class="image-ver" src="{{product.images}}">\n                  <img *ngIf="product.images==null" (click)="goProduct(product)" class="image-ver" src="http://fundaciondiversidad.org/images/stories/imagen_no_disponible.jpg">\n                  <button icon-only class="boton-seguir" (click)="addWish(product)">\n                    <ion-icon [ngClass]="product.followColor" name="md-heart"></ion-icon>\n                  </button> \n                  <button icon-only class="boton-seguir2" (click)="addProduct(product)">\n                    <ion-icon class="icon-cart" name="cart"></ion-icon>\n                  </button> \n                </div>            \n              </ion-col>\n              <ion-col col-7 >\n                <div class="content-uno">\n                  <div class="name" (click)="goProduct(product)"> <b>{{product.name}}</b></div>\n                  <div class="perfil" >{{product.title}}\n                    <img *ngIf="product.type_profile == \'Pyme\'" src="https://cdn1.iconfinder.com/data/icons/social-media-vol-3-2/24/_p-32.png"/>\n                    <img *ngIf="product.type_profile == \'Seller\'" src="https://cdn1.iconfinder.com/data/icons/social-media-vol-3-2/24/_s_copy-32.png"/>\n                    <img *ngIf="product.type_profile == \'Independent\'" src="https://cdn1.iconfinder.com/data/icons/social-media-vol-3-2/24/_heart-32.png"/>\n                  </div>\n                  <h3>CLP {{product.price}}</h3>\n                </div>\n                <div class="content-dos">\n                  <div class="row iconos">\n                    <div class="col val">4.5</div>\n                    <ion-icon class="col star" name="ios-star" ></ion-icon>\n                    <ion-icon class="col star" name="ios-star" ></ion-icon>\n                    <ion-icon class="col star" name="ios-star" ></ion-icon>\n                    <ion-icon class="col star" name="ios-star" ></ion-icon>\n                    <ion-icon class="col star" name="ios-star-half-outline" ></ion-icon>\n                  </div>              \n                </div>            \n\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n      <div class="espandir" *ngIf="window2&&showWindow[2]!=\'\'">\n        \n      </div>\n  </div>\n\n  <button class="boton-icon" ion-fab color="primary" (click)="showFilter2()">\n    <ion-icon name="{{filter.icon}}" style="color:WHITE;font-size: 15px;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);"></ion-icon>\n  </button>\n  <button class="boton-icon2" ion-fab color="accent" (click)="showFilter1()">\n    <ion-icon name="{{filter.icon}}" style="color:WHITE;font-size: 15px;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);"></ion-icon>\n  </button>\n  <!--<button class="boton-icon3" ion-fab color="warn" (click)="address()">\n    <ion-icon name="md-map" style="color:WHITE;font-size: 15px;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);"></ion-icon>\n  </button>-->\n  <div style="width: 29px;height: 29px;position: absolute;right: 9px;bottom: 90px; background: white;border-radius: 1px;box-shadow: 0 0 1px rgba(0,0,0,.3);padding: 8px"\n    (click)="miPosition()">\n    <ion-icon name="locate" style="color:#666;font-size: 15px"></ion-icon>\n  </div>\n\n  <div *ngIf="filter.show" class="list" style="width: 232px;position: absolute;right: 48px;bottom: 23px; background: white;border-radius: 4px;box-shadow: 0 0 1px rgba(0,0,0,.3);padding: 8px">\n    <ion-item>\n      <ion-label >Solo ver</ion-label>\n    </ion-item>\n    <div>\n      <ion-scroll scrollY="true" class="scrollX">\n        <ion-item *ngFor="let c of categories  ; let i = index;trackBy:trackByIndex;">\n          <ion-label>{{c.attributes.name}}</ion-label>\n          <ion-checkbox color="dark" checked="true" (click)="getFilter(c.id)"></ion-checkbox>\n          <!-- -->\n        </ion-item>\n      </ion-scroll>\n    </div>\n  </div>\n\n\n<!--   <div *ngIf="window3" style="position: absolute;top: 10px; left: 124px;right: 10px">\n    <input #pac id="pac"  type="text" placeholder="Buscar dirección" name="" style="width: 100%;border:none;box-shadow: 0 0 1px rgba(0,0,0,.6); padding: 9px; border-radius: 1px;padding-right: 32px">\n    <ion-icon name="search" style="color:#666;font-size: 18px;position: absolute;right: 8px; top: 9px;cursor: pointer;z-index: 10;"></ion-icon>\n  </div> -->\n\n<!--   <div *ngIf="window3" style="position: absolute;top: 56px; left: 10px;right: 10px;">\n    <ion-grid style="box-shadow: 0 0 1px rgba(0,0,0,.6);padding: 0">\n        <ion-row > -->\n          <!--<ion-col col-3 style="display: flex; background-color:#fff"> \n            <img style="width: 24px;height: 24px" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzM2LjY0MyAzMzYuNjQzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMzYuNjQzIDMzNi42NDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTU3LjYxOCwzMjcuNDc4YzUuOTA4LDEyLjIyNiwxNS41MDEsMTIuMjIsMjEuMzk3LTAuMDEyYzI1LjI5OS01Mi40ODEsODYuODk2LTE4MC40Miw4OC44MTItMTg1Ljc0M2wwLjMyNC0wLjg4NiAgIGMzLjgzNy0xMC45NTksNi4wMjgtMjIuNjg5LDYuMDI4LTM0Ljk2OUMyNzQuMTgsNDcuNDExLDIyNi43OSwwLDE2OC4zMzEsMEMxMDkuODU5LDAsNjIuNDYzLDQ3LjQwMiw2Mi40NjMsMTA1Ljg2OCAgIGMwLDguNjU2LDEuMTU2LDE3LjAyMSwzLjExMywyNS4wNzZsMC4xMDgsMC40NDdDNjguMzkzLDE0Mi4yNjksMTMxLjg2LDI3NC4xNjcsMTU3LjYxOCwzMjcuNDc4eiBNMTY4LjMzNiw0Ni4xNjIgICBjMzIuOTY5LDAsNTkuNjkxLDI2Ljc1MSw1OS42OTEsNTkuNzEyYzAsMzIuOTgxLTI2LjcyOCw1OS43MDUtNTkuNjkxLDU5LjcwNWMtMzIuOTg0LDAtNTkuNzExLTI2LjczLTU5LjcxMS01OS43MDUgICBDMTA4LjYzMSw3Mi45MTMsMTM1LjM1Miw0Ni4xNjIsMTY4LjMzNiw0Ni4xNjJ6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==">\n            <div style="margin-top: 4px">Ubicación</div>\n          </ion-col>-->\n<!--           <ion-col col-4 style="display: flex; background-color:#fff"> \n            <img style="width: 24px;height: 24px" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzM2LjY0MyAzMzYuNjQzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMzYuNjQzIDMzNi42NDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTU3LjYxOCwzMjcuNDc4YzUuOTA4LDEyLjIyNiwxNS41MDEsMTIuMjIsMjEuMzk3LTAuMDEyYzI1LjI5OS01Mi40ODEsODYuODk2LTE4MC40Miw4OC44MTItMTg1Ljc0M2wwLjMyNC0wLjg4NiAgIGMzLjgzNy0xMC45NTksNi4wMjgtMjIuNjg5LDYuMDI4LTM0Ljk2OUMyNzQuMTgsNDcuNDExLDIyNi43OSwwLDE2OC4zMzEsMEMxMDkuODU5LDAsNjIuNDYzLDQ3LjQwMiw2Mi40NjMsMTA1Ljg2OCAgIGMwLDguNjU2LDEuMTU2LDE3LjAyMSwzLjExMywyNS4wNzZsMC4xMDgsMC40NDdDNjguMzkzLDE0Mi4yNjksMTMxLjg2LDI3NC4xNjcsMTU3LjYxOCwzMjcuNDc4eiBNMTY4LjMzNiw0Ni4xNjIgICBjMzIuOTY5LDAsNTkuNjkxLDI2Ljc1MSw1OS42OTEsNTkuNzEyYzAsMzIuOTgxLTI2LjcyOCw1OS43MDUtNTkuNjkxLDU5LjcwNWMtMzIuOTg0LDAtNTkuNzExLTI2LjczLTU5LjcxMS01OS43MDUgICBDMTA4LjYzMSw3Mi45MTMsMTM1LjM1Miw0Ni4xNjIsMTY4LjMzNiw0Ni4xNjJ6IiBmaWxsPSIjZmY0MDgxIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==">\n            <div style="margin-top: 4px">Pyme</div>\n          </ion-col>\n          <ion-col col-4 style="display: flex; background-color:#fff"> \n            <img style="width: 24px;height: 24px" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzM2LjY0MyAzMzYuNjQzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMzYuNjQzIDMzNi42NDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTU3LjYxOCwzMjcuNDc4YzUuOTA4LDEyLjIyNiwxNS41MDEsMTIuMjIsMjEuMzk3LTAuMDEyYzI1LjI5OS01Mi40ODEsODYuODk2LTE4MC40Miw4OC44MTItMTg1Ljc0M2wwLjMyNC0wLjg4NiAgIGMzLjgzNy0xMC45NTksNi4wMjgtMjIuNjg5LDYuMDI4LTM0Ljk2OUMyNzQuMTgsNDcuNDExLDIyNi43OSwwLDE2OC4zMzEsMEMxMDkuODU5LDAsNjIuNDYzLDQ3LjQwMiw2Mi40NjMsMTA1Ljg2OCAgIGMwLDguNjU2LDEuMTU2LDE3LjAyMSwzLjExMywyNS4wNzZsMC4xMDgsMC40NDdDNjguMzkzLDE0Mi4yNjksMTMxLjg2LDI3NC4xNjcsMTU3LjYxOCwzMjcuNDc4eiBNMTY4LjMzNiw0Ni4xNjIgICBjMzIuOTY5LDAsNTkuNjkxLDI2Ljc1MSw1OS42OTEsNTkuNzEyYzAsMzIuOTgxLTI2LjcyOCw1OS43MDUtNTkuNjkxLDU5LjcwNWMtMzIuOTg0LDAtNTkuNzExLTI2LjczLTU5LjcxMS01OS43MDUgICBDMTA4LjYzMSw3Mi45MTMsMTM1LjM1Miw0Ni4xNjIsMTY4LjMzNiw0Ni4xNjJ6IiBmaWxsPSIjZjUzZDNkIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==">\n            <div style="margin-top: 4px">Independents</div>\n          </ion-col>\n          <ion-col col-4 style="display: flex; background-color:#fff"> \n            <img style="width: 24px;height: 24px" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzM2LjY0MyAzMzYuNjQzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMzYuNjQzIDMzNi42NDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTU3LjYxOCwzMjcuNDc4YzUuOTA4LDEyLjIyNiwxNS41MDEsMTIuMjIsMjEuMzk3LTAuMDEyYzI1LjI5OS01Mi40ODEsODYuODk2LTE4MC40Miw4OC44MTItMTg1Ljc0M2wwLjMyNC0wLjg4NiAgIGMzLjgzNy0xMC45NTksNi4wMjgtMjIuNjg5LDYuMDI4LTM0Ljk2OUMyNzQuMTgsNDcuNDExLDIyNi43OSwwLDE2OC4zMzEsMEMxMDkuODU5LDAsNjIuNDYzLDQ3LjQwMiw2Mi40NjMsMTA1Ljg2OCAgIGMwLDguNjU2LDEuMTU2LDE3LjAyMSwzLjExMywyNS4wNzZsMC4xMDgsMC40NDdDNjguMzkzLDE0Mi4yNjksMTMxLjg2LDI3NC4xNjcsMTU3LjYxOCwzMjcuNDc4eiBNMTY4LjMzNiw0Ni4xNjIgICBjMzIuOTY5LDAsNTkuNjkxLDI2Ljc1MSw1OS42OTEsNTkuNzEyYzAsMzIuOTgxLTI2LjcyOCw1OS43MDUtNTkuNjkxLDU5LjcwNWMtMzIuOTg0LDAtNTkuNzExLTI2LjczLTU5LjcxMS01OS43MDUgICBDMTA4LjYzMSw3Mi45MTMsMTM1LjM1Miw0Ni4xNjIsMTY4LjMzNiw0Ni4xNjJ6IiBmaWxsPSIjM2Y1MWI1Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==">\n            <div style="margin-top: 4px">Seller</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </div> -->\n  \n  <div *ngIf="window" class="button-row button-scroll">\n    <button ion-button color="{{showWindow[0]}}" (click)="changeShowWindow(0)">Perfiles</button>\n    <button ion-button color="{{showWindow[1]}}" (click)="changeShowWindow(1)">Productos</button>\n    <button ion-button color="{{showWindow[2]}}" (click)="changeShowWindow(2)">ofertas</button>\n  </div>\n\n  <button *ngIf="window" icon-only class="boton-cerrar" (click)="closeinfo()">\n      <ion-icon class="icon-seguir" name="close"></ion-icon>\n    </button>\n  <ion-scroll  scrollX="true" *ngIf="window&&showWindow[0]!=\'\'" class="scroll-x">\n    \n    <div class="item-scroll"  *ngFor="let profile of detail" text-center>\n      <div class="item-item" *ngIf="profile.type_profile == \'Pyme\'" >\n        <img *ngIf="profile.banner!=null&&profile.banner!=\'\'" (click)="goProfile(profile,\'Pyme\')" class="banner" src="{{profile.banner}}">\n        <img *ngIf="profile.banner==null||profile.banner==\'\'" (click)="goProfile(profile,\'Pyme\')" class="banner" src="https://about.canva.com/es_es/wp-content/uploads/sites/3/2015/02/Etsy-Banners.png">\n          <div class="imagenes" (click)="goProfile(profile,\'Pyme\')">\n            <div class="imagen">\n                <img *ngIf="profile.photo!=null" class="logo" src="{{profile.photo}}">\n                <img *ngIf="profile.photo==null" class="logo" src="http://fundaciondiversidad.org/images/stories/imagen_no_disponible.jpg">\n            </div>                  \n          </div>\n        <button icon-only class="boton-seguir" (click)="seguir(profile)">\n          <ion-icon [ngClass]="profile.followColor" name="ios-thumbs-up"></ion-icon>\n        </button>\n      </div>\n      <div class="item-item3" *ngIf="profile.type_profile == \'Seller\'" >        \n        <img *ngIf="profile.banner!=null&&profile.banner!=\'\'" (click)="goProfile(profile,\'Seller\')" class="banner" src="{{profile.banner}}">\n        <img *ngIf="profile.banner==null||profile.banner==\'\'" (click)="goProfile(profile,\'Seller\')" class="banner" src="https://about.canva.com/es_es/wp-content/uploads/sites/3/2015/02/Etsy-Banners.png">\n          <div class="imagenes" (click)="goProfile(profile,\'Seller\')">\n            <div class="imagen">\n                <img *ngIf="profile.photo!=null" class="logo" src="{{profile.photo}}">\n                <img *ngIf="profile.photo==null" class="logo" src="http://fundaciondiversidad.org/images/stories/imagen_no_disponible.jpg">\n            </div>                  \n          </div>\n        <button icon-only class="boton-seguir" (click)="seguir(profile)">\n          <ion-icon [ngClass]="profile.followColor" name="ios-thumbs-up"></ion-icon>\n        </button>\n      </div>\n      <div class="item-item2" *ngIf="profile.type_profile == \'Independent\'" >        \n        <img *ngIf="profile.banner!=null&&profile.banner!=\'\'" (click)="goProfile(profile,\'Independent\')" class="banner" src="{{profile.banner}}">\n        <img *ngIf="profile.banner==null||profile.banner==\'\'" (click)="goProfile(profile,\'Independent\')" class="banner" src="https://about.canva.com/es_es/wp-content/uploads/sites/3/2015/02/Etsy-Banners.png">\n          <div class="imagenes" (click)="goProfile(profile,\'Independent\')">\n            <div class="imagen">\n                <img *ngIf="profile.photo!=null" class="logo" src="{{profile.photo}}">\n                <img *ngIf="profile.photo==null" class="logo" src="http://fundaciondiversidad.org/images/stories/imagen_no_disponible.jpg">\n            </div>                  \n          </div>\n        <button icon-only class="boton-seguir" (click)="seguir(profile)">\n          <ion-icon [ngClass]="profile.followColor" name="ios-thumbs-up"></ion-icon>\n        </button>\n      </div>\n      <div class="title-item2">{{profile.title}}</div>\n    </div>\n\n    <div class="item-scroll3" text-center>      \n      <ion-icon class="icon-ver" name="add"></ion-icon>\n      <button ion-button color="primary" (click)="showSpandir()">Ver todo</button>\n    </div>\n\n  </ion-scroll>\n  <ion-scroll  scrollX="true" *ngIf="window&&showWindow[1]!=\'\'" class="scroll-x">\n    \n    <div class="item-scroll2" *ngFor="let product of productsAll" >      \n      <ion-grid >\n        <ion-row >\n          <ion-col col-5 class="img">\n            <div class="imagen">\n              <img class="image-fondo" src="assets/imgs/fondo.jpg">\n              <img *ngIf="product.images!=null" (click)="goProduct(product)" class="image-ver" src="{{product.images}}">\n              <img *ngIf="product.images==null" (click)="goProduct(product)" class="image-ver" src="http://fundaciondiversidad.org/images/stories/imagen_no_disponible.jpg">              \n            </div> \n            <button icon-only class="boton-seguir" (click)="addWish(product)">\n                <ion-icon [ngClass]="product.followColor" name="md-heart"></ion-icon>\n              </button>\n              <button icon-only class="boton-seguir2"  (click)="addProduct(product)">\n                    <ion-icon class="icon-cart" name="cart"></ion-icon>\n                  </button> \n          </ion-col>\n          <ion-col col-7 >\n            <div class="content-uno">\n              <div class="name" (click)="goProduct(product)"> <b>{{product.name}}</b></div>\n              <div class="perfil" >{{product.title}}\n                <img *ngIf="product.type_profile == \'Pyme\'" src="https://cdn1.iconfinder.com/data/icons/social-media-vol-3-2/24/_p-32.png"/>\n                <img *ngIf="product.type_profile == \'Seller\'" src="https://cdn1.iconfinder.com/data/icons/social-media-vol-3-2/24/_s_copy-32.png"/>\n                <img *ngIf="product.type_profile == \'Independent\'" src="https://cdn1.iconfinder.com/data/icons/social-media-vol-3-2/24/_heart-32.png"/>\n              </div>\n              <h4>CLP {{product.price}}</h4>\n            </div>\n            <div class="content-dos">\n              <div class="row iconos">\n                <div class="col val">4.5</div>\n                <ion-icon class="col star" name="ios-star" ></ion-icon>\n                <ion-icon class="col star" name="ios-star" ></ion-icon>\n                <ion-icon class="col star" name="ios-star" ></ion-icon>\n                <ion-icon class="col star" name="ios-star" ></ion-icon>\n                <ion-icon class="col star" name="ios-star-half-outline" ></ion-icon>\n              </div>              \n            </div>            \n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class="item-scroll3" text-center>      \n      <ion-icon class="icon-ver" name="add"></ion-icon>\n      <button ion-button color="primary" (click)="showSpandir()">Ver todo</button>\n    </div>\n  </ion-scroll>\n  <ion-scroll  scrollX="true" *ngIf="window&&showWindow[2]!=\'\'" class="scroll-x">\n    \n    \n  </ion-scroll>\n</ion-content> -->'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_token__["b" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_filters_module_filters_module__["a" /* FiltersModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\notifications\notifications.html"*/'<ion-header>\n    <ion-navbar>\n      <!--\n        <button ion-button menuToggle>\n              <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n            </button>\n        -->\n      <ion-title>Notificaciones\n        <span float-right>\n          <ion-icon class="icon" (click)="dismiss()"><img src="assets/imgs/ic_cross.png" width="100%;"></ion-icon>           \n        </span>\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="bg-light">\n      <div class="your-cart bg-thime">\n          <ion-card>\n              <ion-card-content>\n                  <ion-row>\n                      <ion-col col-3>\n                          <div class="img-box">\n                              <img src="assets/imgs/suit_PNG8132.png">\n                          </div>\n                      </ion-col>\n                      <ion-col col-9>\n                          <h4>Unique For Men Black Formal Slim Fit Shirt\n                              <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n                          </h4>\n                          <div class="rate">\n                              <div style="display: flex;" class="price-box">\n                                  <div class="price text-sky">\n                                      <img src="assets/imgs/rupee-sky.png" class="rupee-icon">Su paquete ha llegado\n                                  </div>\n                      <!--             <div class="price text-sky">\n                                      <img src="assets/imgs/rupee-sky.png" class="rupee-icon">500\n                                  </div> -->\n                              </div>\n                        <!--       <p text-right>{{"quantity" | translate}}\n                                  <span class="text-light">1\n                                   <ion-icon name="ios-arrow-back-outline"></ion-icon>\n                                  </span>\n                              </p> -->\n                          </div>\n                      </ion-col>\n                  </ion-row>\n              </ion-card-content>\n          </ion-card>\n  \n          <ion-card>\n              <ion-card-content>\n                  <ion-row>\n                      <ion-col col-3>\n                          <div class="img-box">\n                              <img src="assets/imgs/bag.jpg">\n                          </div>\n                      </ion-col>\n                      <ion-col col-9>\n                          <h4>Unique For Men Black Formal Slim Fit Shirt\n                              <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n                          </h4>\n                          <div class="rate">\n                              <div style="display: flex;" class="price-box">\n                                  <div class="price text-sky">\n                                      <img src="assets/imgs/rupee-sky.png" class="rupee-icon">Su paquete ha llegado\n                                  </div>\n                              <!--     <div class="price text-sky">\n                                      <img src="assets/imgs/rupee-sky.png" class="rupee-icon">Su paquete ha llegado\n                                  </div> -->\n                              </div>\n               <!--                <p text-right>{{"quantity" | translate}}\n                                  <span class="text-light">1\n                                      <ion-icon name="ios-arrow-back-outline"></ion-icon>\n                                  </span>\n                              </p> -->\n                          </div>\n                      </ion-col>\n                  </ion-row>\n              </ion-card-content>\n          </ion-card>\n  \n  \n          <ion-row class="checkout">\n              <ion-col col-6>\n         <!--          <h6 class="text-white">\n                      {{"total" | translate}} <span>\n                      <img src="assets/imgs/rupee-white.png" class="rupee-icon">\n                      1260.00</span>\n                  </h6> -->\n              </ion-col>\n              <ion-col col-6>\n                 <!--  <button ion-button full class="bg-green btn-round btn-text btn-shadow">{{"proceed_checkout" | translate}}</button> -->\n              </ion-col>\n          </ion-row>\n      </div>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_module_users_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alerts_module_alerts_module__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecoveryPage = (function () {
    function RecoveryPage(navCtrl, navParams, userProvider, fb, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.fb = fb;
        this.alert = alert;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* UserModel */];
        this.initForm();
    }
    RecoveryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecoveryPage');
    };
    RecoveryPage.prototype.recovery = function () {
        var _this = this;
        var loading = this.alert.loading('Recuperando contraseña...');
        loading.present();
        this.userProvider.recoveryPass(this.user).subscribe(function (data) {
            console.log(data);
            loading.dismiss();
            _this.alert.alert('Enviado', 'Verifique su correo.');
        }, function (error) {
            loading.dismiss();
            console.log(error);
            _this.alert.toast("Credenciales invalidas. Por favor intente de nuevo.", 3000, 'top');
        });
    };
    RecoveryPage.prototype.initForm = function () {
        this.form = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(6)])]
        });
    };
    RecoveryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recovery',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\recovery\recovery.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n      </button>\n      <ion-title>{{"login_box2" | translate}} </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class="form" padding-left padding-right>\n      <!-- <p text-center>{{"forgot_password_text" | translate}}</p> -->\n      <form padding [formGroup]="form" novalidate>\n      <ion-list>\n          <ion-item>\n              <ion-label float><!-- {{"login_box1" | translate}} -->Email</ion-label>\n              <ion-input type="email" text-right formControlName="email" [(ngModel)]="user.email"></ion-input>\n            </ion-item>\n            <ng-container *ngIf="form.get(\'email\').errors && form.get(\'email\').dirty">\n              <p color="danger" ion-text *ngIf="form.get(\'email\').hasError(\'required\')">Campo requerido</p>\n              <p color="danger" ion-text *ngIf="form.get(\'email\').hasError(\'email\')">Email invalido</p>\n            </ng-container>\n      </ion-list>\n      <button ion-button full class="bg-thime btn-round btn-text" (click)="recovery()" [disabled]="form.invalid">Enviar</button>\n    </form>\n    </div>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\recovery\recovery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_users_module_users_module__["a" /* UsersModuleProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */]])
    ], RecoveryPage);
    return RecoveryPage;
}());

//# sourceMappingURL=recovery.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(191);
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
        this.Root2 = __WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */];
    }
    TabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tab',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\tab\tab.html"*/'<ion-tabs>\n    <ion-tab [root]="Root1" tabTitle="" tabIcon="home"></ion-tab>\n    <ion-tab [root]="Root2" tabTitle="" tabIcon="pin"></ion-tab>\n    <ion-tab [root]="Root3" tabTitle="" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\tab\tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], TabPage);
    return TabPage;
}());

//# sourceMappingURL=tab.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModuleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_headers_model__ = __webpack_require__(714);
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
        user.password_confirmation = user.password;
        console.log(user);
        return this._tokenService.post(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].registerUser(), user);
    };
    UsersModuleProvider.prototype.recoveryPass = function (user) {
        return this._tokenService.post(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].recover(), { email: user.email });
    };
    UsersModuleProvider.prototype.logOut = function () {
        return this._tokenService.delete(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].sing_out());
    };
    UsersModuleProvider.prototype.refresh_Headers = function (data) {
        var header = new __WEBPACK_IMPORTED_MODULE_5__models_headers_model__["a" /* headersModel */]();
        header.accessToken = data['headers'].get('access-token');
        header.client = data['headers'].get('client');
        header.uid = data['headers'].get('uid');
        data = JSON.parse(data['_body']);
        var user = JSON.stringify(data['data']);
        this.storage.set('headers', header);
        this.storage.set('user', user);
    };
    UsersModuleProvider.prototype.check_User = function () {
        return this.storage.get('user');
    };
    UsersModuleProvider.prototype.check_storage = function (id) {
        return this.storage.get(id);
    };
    UsersModuleProvider.prototype.getCategories = function () {
        return this._tokenService.get(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].categories());
    };
    UsersModuleProvider.prototype.getUser = function () {
        return this._tokenService.get(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].perfil());
    };
    UsersModuleProvider.prototype.saveProfile = function (profile) {
        return this._tokenService.put(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].registerUser(), profile);
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

/***/ 206:
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
webpackEmptyAsyncContext.id = 206;

/***/ }),

/***/ 23:
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
    },
    home: function (quantity) {
        return "/services/home?quantity=" + quantity;
    }
};
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		742,
		14
	],
	"../pages/country/country.module": [
		743,
		13
	],
	"../pages/independients/independients.module": [
		744,
		12
	],
	"../pages/map/map.module": [
		745,
		11
	],
	"../pages/messages/messages.module": [
		746,
		10
	],
	"../pages/notifications/notifications.module": [
		747,
		9
	],
	"../pages/products/products.module": [
		748,
		8
	],
	"../pages/pymes/pymes.module": [
		750,
		7
	],
	"../pages/recovery/recovery.module": [
		749,
		6
	],
	"../pages/save-independients/save-independients.module": [
		752,
		5
	],
	"../pages/save-pymes/save-pymes.module": [
		753,
		4
	],
	"../pages/save-sellers/save-sellers.module": [
		751,
		3
	],
	"../pages/sellers/sellers.module": [
		754,
		2
	],
	"../pages/settings/settings.module": [
		755,
		0
	],
	"../pages/tab/tab.module": [
		756,
		1
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
webpackAsyncContext.id = 249;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsModuleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], AlertsModuleProvider);
    return AlertsModuleProvider;
}());

//# sourceMappingURL=alerts-module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_module_cart_module__ = __webpack_require__(155);
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
    function CartPage(navCtrl, viewCtrl, cartProvider) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.cartProvider = cartProvider;
    }
    CartPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CartPage.prototype.getListCart = function () {
        this.cartProvider.getCart();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cart ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\cart\cart.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <!--\n\n      <button ion-button menuToggle>\n\n            <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n          </button>\n\n      -->\n\n    <ion-title>{{"cart" | translate}}\n\n      <span float-right>\n\n        <ion-icon class="icon" (click)="dismiss()"><img src="assets/imgs/ic_cross.png" width="100%;"></ion-icon>           \n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div class="your-cart bg-thime">\n\n        <ion-card>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <img src="assets/imgs/suit_PNG8132.png">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt\n\n                            <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                        </h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-light" padding-right>\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">300\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">500\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>{{"quantity" | translate}}\n\n                                <span class="text-light">1\n\n                                 <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n\n\n        <ion-card>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <img src="assets/imgs/bag.jpg">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt\n\n                            <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                        </h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-light" padding-right>\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">1000\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">800\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>{{"quantity" | translate}}\n\n                                <span class="text-light">1\n\n                                    <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n\n\n\n\n        <ion-row class="checkout">\n\n            <ion-col col-6>\n\n                <h6 class="text-white">\n\n                    {{"total" | translate}} <span>\n\n                    <img src="assets/imgs/rupee-white.png" class="rupee-icon">\n\n                    1260.00</span>\n\n                </h6>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <button ion-button full class="bg-green btn-round btn-text btn-shadow">{{"proceed_checkout" | translate}}</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_cart_module_cart_module__["a" /* CartModuleProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippiningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(352);
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
            selector: 'page-shippining ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\shippining\shippining.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"confirm_order" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div class="address-section">\n\n        <ion-row text-center class="status">\n\n          <ion-col class="complate">\n\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>{{"login" | translate}}</span></ion-col>\n\n          <ion-col class="processing">\n\n            <ion-icon name="md-radio-button-off"></ion-icon><span>{{"shipping" | translate}}</span></ion-col>\n\n          <ion-col class="panding">\n\n            <ion-icon name="ion-record"></ion-icon><span>{{"payment" | translate}}</span></ion-col>\n\n        </ion-row>\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>\n\n                    {{"your_dlvr_address" | translate}}<span class="text-sky">{{"change" | translate}}<ion-icon name="ios-arrow-forward" class="icon"></ion-icon></span></p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <div class="addres-detail">\n\n                    <h3>\n\n                        <ion-icon name="ios-pin-outline" class="icon-position"></ion-icon>Jhon Smith\n\n                    </h3>\n\n                    <p>DE234 Mapleridge Drive Plano,<br> Texas 743A US.</p>\n\n                    <p>+91 908765432</p>\n\n                </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div class="your-items">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>{{"ur_item" | translate}}</p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <img src="assets/imgs/suit_PNG8132.png">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-sky  mr-5">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                                <div class="price text-light">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>{{"quantity" | translate}}\n\n                                <span class="">1\n\n                                 <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                        <p class="card-bottom" padding-top>\n\n                            {{"delivery_by" | translate}} Fri,Jun 9: 40\n\n                            <span class="text-sky small" text-right> {{"remove" | translate}}</span>\n\n                        </p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div class="your-items">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>{{"ur_item" | translate}}</p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <img src="assets/imgs/suit_PNG8132.png">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-sky  mr-5">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                                <div class="price text-light">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>{{"quantity" | translate}}\n\n                                <span class="">1\n\n                                    <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                        <p class="card-bottom" padding-top>\n\n                            {{"delivery_by" | translate}} Fri,Jun 9: 40\n\n                            <span class="text-sky small" text-right> {{"remove" | translate}}</span>\n\n                        </p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div class="spacebar-bottom"></div>\n\n    <div class="receipt btn-fisx-bottom">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>Item(s) price\n\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n\n                    380\n\n                    </span>\n\n                </p>\n\n                <p>Delivery Payable\n\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n\n                   40\n\n                    </span>\n\n                </p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <p>Amount Payable\n\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n\n                   420\n\n                    </span>\n\n                </p>\n\n                <button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="paymentPage()">{{"continue" | translate}}</button>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\shippining\shippining.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ShippiningPage);
    return ShippiningPage;
}());

//# sourceMappingURL=shippining.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__placed_placed__ = __webpack_require__(353);
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
            selector: 'page-payment ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\payment\payment.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"pay_now" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content radio-group class="bg-light">\n\n    <ion-row text-center class="status">\n\n        <ion-col class="complate">\n\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>{{"login" | translate}}</span></ion-col>\n\n        <ion-col class="processing">\n\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>{{"shipping" | translate}}</span></ion-col>\n\n        <ion-col class="panding">\n\n            <ion-icon name="md-radio-button-off"></ion-icon><span>{{"payment" | translate}}</span></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card>\n\n        <p class="heading">{{"pmt_methd" | translate}}</p>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label>{{"cr_dr_card" | translate}}</ion-label>\n\n                <ion-radio checked="true" value="card"></ion-radio>\n\n            </ion-item>\n\n            <div class="form">\n\n                <ion-list>\n\n                    <ion-item>\n\n                        <ion-label>{{"card_type" | translate}}</ion-label>\n\n                        <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                            <ion-option selected value="visa">{{"visa_exp" | translate}}</ion-option>\n\n                            <ion-option value="debit">{{"debit" | translate}}</ion-option>\n\n                            <ion-option value="master">{{"master" | translate}}</ion-option>\n\n                            <ion-option value="credit">{{"credit" | translate}} </ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>{{"card_number" | translate}}</ion-label>\n\n                        <ion-input type="text" text-right value="1234-1234-1234-5678"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>{{"card_name" | translate}}</ion-label>\n\n                        <ion-input type="text" text-right value="Jhon Smith"></ion-input>\n\n                    </ion-item>\n\n                    <ion-row>\n\n                        <ion-col col-8 class="">\n\n                          <div class="d-flex mr-5">\n\n                            <ion-item>\n\n                              <ion-label>{{"exp_date" | translate}}</ion-label>\n\n                              <ion-input type="text" text-right value="11/20"></ion-input>\n\n                            </ion-item>\n\n                            <ion-icon name="md-calendar" class="text-light calendar-icon"></ion-icon>\n\n                          </div>\n\n                        </ion-col>\n\n                        <ion-col col-4>\n\n                          <ion-item>\n\n                            <ion-label>cvv</ion-label>\n\n                            <ion-input type="text" text-right value="244"></ion-input>\n\n                          </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-item>\n\n                        <ion-label text-right>{{"save_card_details" | translate}}</ion-label>\n\n                        <ion-toggle color="secondary" checked="true"></ion-toggle>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label>{{"cod" | translate}}</ion-label>\n\n                <ion-radio value="cod"></ion-radio>\n\n            </ion-item>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label>{{"net_banking" | translate}}</ion-label>\n\n                <ion-radio value="net_banking"></ion-radio>\n\n            </ion-item>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <div class="spacebar"></div>\n\n    <div class="btn-padding btn-fisx-bottom">\n\n        <button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="placedPage()">{{"pay" | translate}} <img src="assets/imgs/rupee-white.png">420 \n\n        </button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\payment\payment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
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
            selector: 'page-placed ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\placed\placed.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"ordered" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="img-box">\n\n        <img src="assets/imgs/order-placed.jpg">\n\n    </div>\n\n    <h3 class="text-sky" text-center>{{"ordered_text" | translate}}</h3>\n\n    <h4 class="" text-center>{{"ordered_text1" | translate}}<br>{{"ordered_text3" | translate}} <strong>{{"my_order" | translate}}</strong> {{"ordered_text2" | translate}}<br>{{"ordered_text4" | translate}}</h4>\n\n    <div class="btn-padding btn-fisx-bottom ">\n\n        <button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="homePage()">{{"continue_shop" | translate}}</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\placed\placed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], PlacedPage);
    return PlacedPage;
}());

//# sourceMappingURL=placed.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShirtsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__short_short__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_filter__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__ = __webpack_require__(75);
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
            selector: 'page-shirts ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\shirts\shirts.html"*/'<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n        <ion-title>Men\'s Shirts\n\n            <span float-right>\n\n            <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <div class="d-flex icon-box">\n\n        <ion-searchbar (ionInput)="getItems($event)" placeholder="Search Shirts" (click)="searchPage()"></ion-searchbar>\n\n        <ion-icon class="icon" (click)="shortPage()"><img src="assets/imgs/ic_short.png" width="100%;"></ion-icon>\n\n        <ion-icon class="icon" (click)="filterPage()" style="margin-right: 7px;"><img src="assets/imgs/ic_filter.png" width="100%;"></ion-icon>\n\n    </div>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-light">\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-card (click)="itemdetailPage()">\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-3.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-2.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-4.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-2.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\shirts\shirts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], ShirtsPage);
    return ShirtsPage;
}());

//# sourceMappingURL=shirts.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-short',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\short\short.html"*/'<ion-content (click)="dismiss()">\n\n  <div class="group">\n\n    <ion-list radio-group>\n\n      <ion-list-header class="d-flex" text-uppercase>\n\n        {{"sort_by" | translate}}\n\n        <ion-icon name="ios-arrow-down"></ion-icon>\n\n      </ion-list-header>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by1" | translate}}</ion-label>\n\n        <ion-radio checked="true" value="popularity"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by2" | translate}}</ion-label>\n\n        <ion-radio value="price_h_l"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by3" | translate}}</ion-label>\n\n        <ion-radio value="price_l_h"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by4" | translate}}</ion-label>\n\n        <ion-radio value="newest"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\short\short.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ShortPage);
    return ShortPage;
}());

//# sourceMappingURL=short.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-filter ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\filter\filter.html"*/'<ion-content>\n\n  <div class="group">\n\n    <div class="size-filter">\n\n      <div class="slid-container">\n\n        <span>2XS</span>\n\n        <span>XS</span>\n\n        <span class="active">S</span>\n\n        <span>M</span>\n\n        <span class="active">L</span>\n\n        <span>XL</span>\n\n        <span>XX</span>\n\n        <span>XXX</span>\n\n      </div>\n\n    </div>\n\n    <div class="type-filter">\n\n      <div class="slid-container">\n\n        <span>{{"brand" | translate}}</span>\n\n        <span class="active">{{"size" | translate}}</span>\n\n        <span>{{"color" | translate}}</span>\n\n        <span>{{"wear" | translate}}</span>\n\n        <span>{{"outfit" | translate}}</span>\n\n      </div>\n\n    </div>\n\n    <ion-row text-center class="action">\n\n      <ion-col col-5>\n\n        <p>{{"reset" | translate}}</p>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <p><ion-icon name="ios-close-outline" (click)="dismiss()"></ion-icon></p>\n\n      </ion-col>\n\n      <ion-col col-5>\n\n        <p class="active">{{"apply" | translate}}</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\filter\filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(24);
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
    function ProductsProvider(http, _tokenService) {
        this.http = http;
        this._tokenService = _tokenService;
        console.log('Hello ProductsProvider Provider');
    }
    ProductsProvider.prototype.homeSuggest = function () {
        return this._tokenService.get(__WEBPACK_IMPORTED_MODULE_2__routes__["b" /* routes */].home(30));
    };
    ProductsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_token__["b" /* Angular2TokenService */]])
    ], ProductsProvider);
    return ProductsProvider;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersModuleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FiltersModuleProvider = (function () {
    function FiltersModuleProvider(http, _tokenService) {
        this.http = http;
        this._tokenService = _tokenService;
        console.log('Hello BigwaveProvider Provider');
    }
    FiltersModuleProvider.prototype.pymes = function (currentHeaders) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json;charset=utf-8',
            'access-token': currentHeaders['access-token'],
            'uid': currentHeaders.uid,
            'client': currentHeaders.client
        });
        console.log(currentHeaders);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__routes__["b" /* routes */].pymes(), {
            headers: headers,
            observe: 'response'
        });
    };
    FiltersModuleProvider.prototype.sellers = function (currentHeaders) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json;charset=utf-8',
            'access-token': currentHeaders['access-token'],
            'uid': currentHeaders.uid,
            'client': currentHeaders.client
        });
        console.log(currentHeaders);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__routes__["b" /* routes */].sellers(), {
            headers: headers,
            observe: 'response'
        });
    };
    FiltersModuleProvider.prototype.independents = function (currentHeaders) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json;charset=utf-8',
            'access-token': currentHeaders['access-token'],
            'uid': currentHeaders.uid,
            'client': currentHeaders.client
        });
        console.log(currentHeaders);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__routes__["b" /* routes */].independents(), {
            headers: headers,
            observe: 'response'
        });
    };
    FiltersModuleProvider.prototype.allcategories = function (currentHeaders) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json;charset=utf-8',
            'access-token': currentHeaders['access-token'],
            'uid': currentHeaders.uid,
            'client': currentHeaders.client
        });
        console.log(currentHeaders);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__routes__["b" /* routes */].categories(), {
            headers: headers,
            observe: 'response'
        });
    };
    FiltersModuleProvider.prototype.geololization = function (lat, lng, newCategories, q, radio) {
        var params = {
            q: q,
            radio: radio,
            user: [
                lat,
                lng
            ],
            categories: newCategories
        };
        console.log(params);
        return this._tokenService.post(__WEBPACK_IMPORTED_MODULE_4__routes__["b" /* routes */].geolocation(), params).map(function (res) { return res; });
    };
    FiltersModuleProvider.prototype.createWish = function (parameters) {
        var wish;
        console.log(wish);
        return this._tokenService.post(__WEBPACK_IMPORTED_MODULE_4__routes__["b" /* routes */].createWish(), wish).map(function (res) { return res; });
    };
    FiltersModuleProvider.prototype.listWish = function (parameters) {
        var params = parameters;
        console.log(params);
        return this._tokenService.post(__WEBPACK_IMPORTED_MODULE_4__routes__["b" /* routes */].listWish(), params).map(function (res) { return res; });
    };
    FiltersModuleProvider.prototype.direccion = function (data) {
        var headers2 = {
            'Content-Type': 'application/json'
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        console.log(headers);
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + data.title + '&key=AIzaSyC6bA0tzMkWviWEpFnjQxEF0U5I_Kd2il0';
        return this.http.get(url, { headers: headers, observe: 'response' });
    };
    FiltersModuleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_token__["b" /* Angular2TokenService */]])
    ], FiltersModuleProvider);
    return FiltersModuleProvider;
}());

//# sourceMappingURL=filters-module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-search ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\search\search.html"*/'<ion-content class="bg-light">\n\n  <div class="d-flex searchbar-section">\n\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Search Brand of product"></ion-searchbar>\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of items">\n\n        {{ item }}\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-icon name="md-close" class="close-icon" (click)="dismiss()"></ion-icon>\n\n  </div>\n\n\n\n  <div class="recent-search">\n\n    <ion-card>\n\n      <ion-card-header>\n\n        {{"recent_search" | translate}}\n\n        <span text-right class="right">{{"clear_history" | translate}}</span>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <p>\n\n          <ion-icon name="ios-time-outline"></ion-icon>Iphone7 in <strong class="text-sky">Mobile</strong>\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-time-outline"></ion-icon>Shirt in <strong class="text-sky">Me,s Wear</strong>\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n  <div class="trending-search">\n\n    <ion-card>\n\n      <ion-card-header>\n\n        {{"search_trend" | translate}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Sleevless kurti\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Shoes\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Watches\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Tshirt\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Headphones\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Pendrive\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonenumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__password_password__ = __webpack_require__(103);
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
            selector: 'page-phonenumber ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\phonenumber\phonenumber.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-uppercase>{{"app_title" | translate}}\n\n      <span float-end (click)="homePage()" text-capitalize>{{"skip" | translate}}</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <p>Heart</p> -->\n\n  <div class="form" padding-left padding-right>\n\n    <p text-center>{{"phone_text" | translate}}<br>{{"phone_text1" | translate}}</p>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{"phone" | translate}}</ion-label>\n\n        <ion-input type="text" text-end value="+91 9876543210"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="passwordPage()">{{"continue" | translate}}"</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\phonenumber\phonenumber.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], PhonenumberPage);
    return PhonenumberPage;
}());

//# sourceMappingURL=phonenumber.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createaccount_createaccount__ = __webpack_require__(180);
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
            selector: 'page-verification ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\verification\verification.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n    <ion-title>{{"verify_code" | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="form" padding-left padding-right>\n\n    <p text-center>{{"verify_label" | translate}} <br>{{"verify_label1" | translate}} +91 903 335 6708</p>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{"verify_code" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="______"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="createaccountPage()">{{"verify" | translate}}</button>\n\n    <p text-center>\n\n      <span float-left class="text-sky">{{"resend" | translate}}</span>\n\n      <span float-right>1:32 {{"min_left" | translate}}</span>\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\verification\verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_accountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_module_users_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alerts_module_alerts_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(22);
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
    function My_accountPage(navCtrl, modalCtrl, userProvider, alert, storage, imagePicker, actionSheetCtrl, camera, fb) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.userProvider = userProvider;
        this.alert = alert;
        this.storage = storage;
        this.imagePicker = imagePicker;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.fb = fb;
        this.account = "profile";
        this.user = [];
        this.initForm();
    }
    My_accountPage.prototype.ionViewDidLoad = function () {
        this.getUser();
    };
    My_accountPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    My_accountPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    My_accountPage.prototype.getUser = function () {
        var _this = this;
        var loading = this.alert.loading('Consultando informacion...');
        loading.present();
        this.userProvider.getUser().subscribe(function (resp) {
            loading.dismiss();
            _this.user = JSON.parse(resp['_body']).data.attributes;
            console.log(_this.user);
            if (!_this.user.birth_date) {
                _this.user.birth_date = 'N/A';
            }
            if (!_this.user.gender) {
                _this.user.gender = 'Sin especificar';
            }
            if (!_this.user.phone) {
                _this.user.phone = 'N/A';
                _this.actPhone = 'N/A';
            }
            if (!_this.user.avatar['url']) {
                _this.user.avatar = false;
            }
            else {
                _this.user.avatar = _this.user.avatar['url'];
            }
        }, function (error) {
            loading.dismiss();
            if (error.status == 401) {
                _this.storage.remove('user');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                _this.alert.alert('Alerta!', "Su sesión ha expirado.");
                _this.alert.menu('unauthenticated');
                loading.dismiss();
            }
        });
    };
    My_accountPage.prototype.openOptions = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Seleccionar imagen',
            buttons: [
                {
                    text: 'Cargar de galeria',
                    handler: function () {
                        _this.openImagePicker();
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.openCamera();
                        //this.getPicture()
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    My_accountPage.prototype.saveProfile = function () {
        var _this = this;
        var loading = this.alert.loading('Guardando...');
        loading.present();
        var user = {
            avatar: this.user.avatar,
            gender: 'Male',
            birth_date: this.user.birth_date,
            current_password: this.user.password,
            email: this.user.email,
            name: this.user.name,
            nickname: this.user.nickname,
            password: this.user.password,
            password_confirm: this.user.password,
        };
        this.userProvider.saveProfile(user).subscribe(function (data) {
            loading.dismiss();
            _this.alert.alert('Alerta!', 'Perfil Actualizado');
            _this.user.password = '';
            _this.getUser();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    My_accountPage.prototype.savePassword = function () {
        var _this = this;
        var loading = this.alert.loading('Guardando...');
        loading.present();
        var user = {
            current_password: this.user.password,
            password: this.user.newPassword,
            password_confirm: this.user.newPasswordConfirm,
        };
        this.userProvider.saveProfile(user).subscribe(function () {
            loading.dismiss();
            _this.user.password = '';
            _this.user.newPassword = '';
            _this.user.newPasswordConfirm = '';
            _this.alert.alert('Alerta!', 'Contraseña Actualizada');
            _this.getUser();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    My_accountPage.prototype.encodeImageUri = function (imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL("image/jpeg");
            callback(dataURL);
        };
        img.src = imageUri;
    };
    My_accountPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission()
            .then(function (result) {
            if (result == false) {
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                })
                    .then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.setImgProfile(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    My_accountPage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.setImgProfile(imageData);
        }, function (err) {
            // Handle error
        });
    };
    My_accountPage.prototype.setImgProfile = function (image) {
        var _this = this;
        image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* normalizeURL */])(image);
        //uploads img to firebase storage
        this.uploadImage(image)
            .then(function (photoURL) {
            _this.user.avatar = {
                url: photoURL
            };
        });
    };
    My_accountPage.prototype.uploadImage = function (imageURI) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.encodeImageUri(imageURI, function (image64) {
                resolve(image64);
            });
        });
    };
    My_accountPage.prototype.initForm = function () {
        this.form = this.fb.group({
            email: [this.user.email, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].email,
                ])],
            name: [this.user.name, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required],
            nickname: [this.user.nickname, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].maxLength(15),
                    __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].minLength(8),
                ])],
            password_confirm: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].maxLength(15),
                    __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].minLength(8),
                ])],
            current_password: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].maxLength(15),
                    __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].minLength(8),
                ])],
        });
    };
    My_accountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my_account ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\my_account\my_account.html"*/'<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n    <ion-icon class="menu-icon">\n\n      <img src="assets/imgs/ic_menu.png">\n\n    </ion-icon>\n\n  </button>\n\n    <ion-title>{{"my_acount" | translate}}\n\n      <span float-right> \n\n        <ion-icon padding-right name="ios-search-outline" class="icon"></ion-icon>\n\n        <ion-icon name="ios-cart-outline" class="icon"></ion-icon>              \n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-list padding-left>\n\n    <ion-item padding-left padding-right>\n\n      <ion-avatar item-start (click)="openOptions()">\n\n        <img *ngIf="!user.avatar" src="data:image/png;base64,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">\n\n        <img *ngIf="user.avatar" src="{{user.avatar}}">\n\n      </ion-avatar>\n\n      <h2 class="">{{user.name}}\n\n        <small class=""> {{"edit_profile" | translate}}</small>\n\n      </h2>\n\n      <p class="text-dark">{{actPhone}}\n\n      </p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-toolbar no-border-top class="tab-bar">\n\n    <ion-segment [(ngModel)]="account">\n\n      <ion-segment-button value="profile">\n\n        {{"profile" | translate}}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="card">\n\n       Contraseña\n\n      </ion-segment-button>\n\n      <ion-segment-button value="address">\n\n        {{"my_address" | translate}}\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div [ngSwitch]="account">\n\n    <div *ngSwitchCase="\'profile\'" class="profile-section">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>{{"name" | translate}}</ion-label>\n\n          <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Nickname</ion-label>\n\n          <ion-input type="text" [(ngModel)]="user.nickname"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"email1" | translate}}</ion-label>\n\n          <ion-input type="email" [(ngModel)]="user.email" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating>{{"Gender" | translate}}</ion-label>\n\n          <ion-select [(ngModel)]="user.gender" interface="popover"  class="selector">\n\n            <ion-option value="Male">Hombre</ion-option>\n\n            <ion-option value="Women">Mujer</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"bday" | translate}}</ion-label>\n\n          <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" doneText="Listo" cancelText="Cancelar" [(ngModel)]="user.birth_date"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Contraseña actual</ion-label>\n\n          <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n    <button ion-button color="primary" full round padding (click)="saveProfile()" [disabled]="!user.password"> Guardar</button>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'card\'" class="profile-section">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label floating>Contraseña actual</ion-label>\n\n              <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>Nueva contraseña</ion-label>\n\n                  <ion-input type="password" [(ngModel)]="user.newPassword"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>Confirme nueva contrasñea</ion-label>\n\n                      <ion-input type="password" [(ngModel)]="user.newPasswordConfirm"></ion-input>\n\n                    </ion-item>\n\n          </ion-list>\n\n        <button ion-button color="primary" full round padding (click)="savePassword()" [disabled]="!user.password"> Guardar</button>\n\n<!--       <ion-card>\n\n        <ion-card-content>\n\n          <div class="card-row">XXXX XXXX XXXX 5887\n\n            <img src="assets/imgs/visa.png">\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <div class="card-row">XXXX XXXX XXXX 5887\n\n            <img src="assets/imgs/master-card.png">\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <div class="form" padding-left padding-right>\n\n          <p padding-bottom margin-bottom>\n\n            <ion-icon name="ios-add-circle-outline"></ion-icon>{{"add_n_card" | translate}} <span>{{"save" | translate}}</span></p>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>{{"card_type" | translate}}</ion-label>\n\n              <ion-input type="text" text-right value="Visa Express"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{"card_number" | translate}}</ion-label>\n\n              <ion-input type="text" text-right value="1234-1234-1234-1234"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{"card_name" | translate}}</ion-label>\n\n              <ion-input type="text" text-right value="Jhon Smith"></ion-input>\n\n            </ion-item>\n\n            <div class="date-cvc-row">\n\n              <div class="date">\n\n                <ion-item>\n\n                  <ion-label>Expiry Date</ion-label>\n\n                  <ion-input type="text" text-right value="10/23"></ion-input>\n\n                </ion-item>\n\n              </div>\n\n              <div class="cvc">\n\n                <ion-item>\n\n                  <ion-label>CVV</ion-label>\n\n                  <ion-input type="text" text-right value="234"></ion-input>\n\n                </ion-item>\n\n              </div>\n\n            </div>\n\n            <ion-item class="border-none">\n\n              <ion-label text-right> {{"save_card_details" | translate}}</ion-label>\n\n              <ion-toggle checked="false"></ion-toggle>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </ion-card> -->\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'address\'" class="address-section bg-light">\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <div class="addres-detail">\n\n            <h3> \n\n              <ion-icon name="ios-pin-outline" class="icon-position"> </ion-icon>\n\n              Jhon Smith \n\n              <span>{{"change" | translate}}\n\n                <ion-icon name="ios-arrow-forward"></ion-icon>\n\n              </span>\n\n            </h3>\n\n            <p>DE234 Mapleridge Drive Plano,<br> Texas 743A US.</p>\n\n            <p>+91 908765432</p>\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <div class="form" padding-left padding-right>\n\n          <p padding-bottom margin-bottom>\n\n            <ion-icon name="ios-add-circle-outline"></ion-icon>{{"add_n_card" | translate}}<span>{{"save" | translate}}</span>\n\n          </p>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>{{"pin" | translate}}</ion-label>\n\n              <ion-input type="text" text-right value="110092"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{"address" | translate}}</ion-label>\n\n              <ion-input type="text" text-right value="DE234 Mapleridge Drive Plano,"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{"phone" | translate}}</ion-label>\n\n              <ion-input type="text" text-right value="+91 908 765 4321"></ion-input>\n\n            </ion-item>\n\n            <div class="date-cvc-row">\n\n              <div class="city">\n\n                <ion-item>\n\n                  <ion-label>{{"city" | translate}}</ion-label>\n\n                  <ion-input type="text" text-right value="Delhi"></ion-input>\n\n                </ion-item>\n\n              </div>\n\n              <div class="State">\n\n                <ion-item>\n\n                  <ion-label>{{"state" | translate}}</ion-label>\n\n                  <ion-input type="text" text-right value="Delhi"></ion-input>\n\n                </ion-item>\n\n              </div>\n\n            </div>\n\n            <ion-item class="border-none">\n\n              <ion-label text-right>{{"set_default_address" | translate}}</ion-label>\n\n              <ion-toggle checked="true"></ion-toggle>\n\n            </ion-item>\n\n\n\n          </ion-list>\n\n        </div>\n\n      </ion-card>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\my_account\my_account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_users_module_users_module__["a" /* UsersModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormBuilder */]])
    ], My_accountPage);
    return My_accountPage;
}());

//# sourceMappingURL=my_account.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myorder_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(28);
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
            selector: 'page-myorder_1 ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\myorder_1\myorder_1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"my_order" | translate}}\n\n            <span float-right> \n\n               <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>            \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card class="border-bottom-none border" style="position: relative;">\n\n        <ion-card-header>\n\n            <p class="left-side">\n\n                <span class="text-light">{{"order_id" | translate}}</span> 2513254112\n\n                <br>\n\n                <span class="text-light">{{"placed_on" | translate}}</span> 17-march-17\n\n            </p>\n\n            <p class="right-side text-sky">\n\n                {{"cancel_order" | translate}}\n\n            </p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-7>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <small><span class="text-light">{{"quantity" | translate}}:</span> 1</small>\n\n                    <p>\n\n                        <img src="assets/imgs/rupee-black.png"> 380\n\n                        <small class="text-light">{{"by_cod" | translate}}</small>\n\n                    </p>\n\n                    <small><span class="text-light">{{"track_status" | translate}}</span> 15-March\'17</small>\n\n                    <button ion-button full class="bg-green btn-round  btn-text">{{"reached" | translate}} Hub,US  <ion-icon name="ios-arrow-down-outline"></ion-icon></button>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-2.jpg">\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <div class="order-info border-top-none border">\n\n        <div class="order-container">\n\n            <div class="status active">\n\n                <p padding-left padding-right>{{"order" | translate}}<br>{{"placed" | translate}}</p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status active">\n\n                <p>\n\n                    {{"dispatched" | translate}}<br>{{"4m" | translate}} Bangalore\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status active">\n\n                <p>\n\n                    {{"reached" | translate}} Hub <br>New Delhi\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p>12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status">\n\n                <p>\n\n                    {{"out4" | translate}}<br>{{"delivery" | translate}}\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status">\n\n                <p>\n\n                    {{"item" | translate}}<br>{{"delivery" | translate}}\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <p class="left-side">\n\n                <span class="text-light">{{"order_id" | translate}}</span> 2513254112\n\n                <br>\n\n                <span class="text-light">{{"placed_on" | translate}}</span> 17-march-17\n\n            </p>\n\n            <p class="right-side text-sky">\n\n                {{"return_item" | translate}}\n\n            </p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-7>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <small><span class="text-light">{{"quantity" | translate}}:</span> 1</small>\n\n                    <p>\n\n                        <img src="assets/imgs/rupee-black.png"> 880\n\n                        <small class="text-light">{{"by_crd" | translate}}</small>\n\n                    </p>\n\n                    <small><span class="text-light">{{"deliver_on" | translate}} </span> 05-May\'17</small>\n\n                    <button ion-button full class="bg-thime btn-round  btn-text">{{"rate_now" | translate}}<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/bag.jpg">\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\myorder_1\myorder_1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], Myorder_1Page);
    return Myorder_1Page;
}());

//# sourceMappingURL=myorder_1.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myorder_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(28);
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
            selector: 'page-myorder_2 ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\myorder_2\myorder_2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"my_order" | translate}}\n\n            <span float-right> \n\n              <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>             \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <div class="rate">\n\n                        <p class=text-light>{{"order_on" | translate}} 12-March-017</p>\n\n                        <div style="display: flex;">\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="card-btn" float-right padding-top>\n\n                        <small class="text-sky ">{{"cancel_order" | translate}}</small>\n\n                        <small class="text-white bg-green green-shadow">{{"track_order" | translate}}</small>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/bag.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skybags Leo 26 ltrs Red Casual Backpack</h4>\n\n                    <div class="rate">\n\n                        <p class=text-light>{{"deliver_on" | translate}} 12-March-017</p> <div style="display: flex;">\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="card-btn" float-right padding-top>\n\n                        <small class="text-sky ">{{"return_item" | translate}}</small>\n\n                        <small class="text-white bg-thime sky-shadow">{{"rate_now" | translate}}</small>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/wach.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skmei Analog-Digital Multicolor Dil Men\'s Watch</h4>\n\n                    <div class="rate">\n\n                        <p class=text-light>{{"deliver_on" | translate}} 12-March-017</p>\n\n                        <div style="display: flex;">\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="card-btn" float-right padding-top>\n\n                        <small class="text-sky ">{{"share_product" | translate}}</small>\n\n                        <small class="text-white bg-gray gray-shadow">{{"rated" | translate}} 4\n\n                         <ion-icon name="md-star"></ion-icon>\n\n                        </small>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\myorder_2\myorder_2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], Myorder_2Page);
    return Myorder_2Page;
}());

//# sourceMappingURL=myorder_2.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__ = __webpack_require__(75);
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
            selector: 'page-help ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\help\help.html"*/'<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n        </button>\n\n        <ion-title>{{\'help_center\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <h6 padding-left padding-right>{{\'faq\' | translate}}</h6>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            {{\'order_track\' | translate}}\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            {{"order_track_help_text" | translate}}\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            {{\'refund\' | translate}}\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            {{"refund_help_text" | translate}}\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            {{\'cancel_help\' | translate}}\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            {{"cancel_help_text" | translate}}\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            {{\'seller_help\' | translate}}\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            {{\'seller_help_text\' | translate}}\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            {{\'payments\' | translate}}\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            {{\'payments_help_text\' | translate}}\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-review ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\review\review.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"add_review" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-card-header style="padding-bottom: 0;">\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <div class="rateing">\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-header>\n\n\n\n        <ion-card-content>\n\n            <div class="form">\n\n                <ion-list>\n\n                    <ion-item class="write-reveiw">\n\n                        <ion-textarea type="text" placeholder="{{\'write_review\' | translate}}"></ion-textarea>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-input type="text" placeholder="{{\'heading_review\' | translate}}"></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n            <button ion-button full class="bg-green btn-round btn-text">{{"submit_now" | translate}}</button>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <h5>{{"previous_orders" | translate}}</h5>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/bag.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skybags Leo 26 ltrs Red Casual Backpack</h4>\n\n                    <div class="rateing">\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-header>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/wach.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skmei Analog-Digital Multicolor Dil Men\'s Watch</h4>\n\n                    <div class="rateing">\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-header>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\review\review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 407:
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

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(415);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_phonenumber_phonenumber__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_password_password__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_verification_verification__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_createaccount_createaccount__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_category_category__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_shirts_shirts__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_itemdetail_itemdetail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_shippining_shippining__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_placed_placed__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_wishlist_wishlist__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_my_account_my_account__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_myorder_1_myorder_1__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_myorder_2_myorder_2__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_help_help__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cart_cart__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_review_review__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_short_short__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_search_search__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_filter_filter__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_globalization__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ngx_translate_core__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ngx_translate_http_loader__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_config__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_users_module_users_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_country_country__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_alerts_module_alerts_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angular2_token__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_http__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_tab_tab__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_pymes_pymes__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_sellers_sellers__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_independients_independients__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_pymes_module_pymes_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_sellers_module_sellers_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_products_products__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_products_products__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_diagnostic__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_gps_gps__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_native_geocoder__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_geolocation__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_chat_chat__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_messages_messages__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_notifications_notifications__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_recovery_recovery__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_save_pymes_save_pymes__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_save_independients_save_independients__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_save_sellers_save_sellers__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_independients_module_independients_module__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_filters_module_filters_module__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_wishes_module_wishes_module__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_cart_module_cart_module__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__providers_notifications_module_notifications_module__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_follows_module_follows_module__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_map_map__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_image_picker__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ionic_native_camera__ = __webpack_require__(78);
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
                __WEBPACK_IMPORTED_MODULE_52__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_recovery_recovery__["a" /* RecoveryPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_save_pymes_save_pymes__["a" /* SavePymesPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_save_independients_save_independients__["a" /* SaveIndependientsPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_save_sellers_save_sellers__["a" /* SaveSellersPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_map_map__["a" /* MapPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonIcon: 'ios-arrow-back',
                    iconMode: 'ios',
                    pageTransition: 'ios-transition',
                    menuType: 'reveal'
                }, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/country/country.module#CountryPageModule', name: 'CountryPage', segment: 'country', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/independients/independients.module#IndependientsPageModule', name: 'IndependientsPage', segment: 'independients', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recovery/recovery.module#RecoveryPageModule', name: 'RecoveryPage', segment: 'recovery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pymes/pymes.module#PymesPageModule', name: 'PymesPage', segment: 'pymes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/save-sellers/save-sellers.module#SaveSellersPageModule', name: 'SaveSellersPage', segment: 'save-sellers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/save-independients/save-independients.module#SaveIndependientsPageModule', name: 'SaveIndependientsPage', segment: 'save-independients', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/save-pymes/save-pymes.module#SavePymesPageModule', name: 'SavePymesPage', segment: 'save-pymes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sellers/sellers.module#SellersPageModule', name: 'SellersPage', segment: 'sellers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
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
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_52__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_recovery_recovery__["a" /* RecoveryPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_save_pymes_save_pymes__["a" /* SavePymesPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_save_independients_save_independients__["a" /* SaveIndependientsPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_save_sellers_save_sellers__["a" /* SaveSellersPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_map_map__["a" /* MapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_globalization__["a" /* Globalization */],
                { provide: __WEBPACK_IMPORTED_MODULE_31__app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_31__app_config__["b" /* BaseAppConfig */] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_32__providers_users_module_users_module__["a" /* UsersModuleProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */],
                __WEBPACK_IMPORTED_MODULE_36_angular2_token__["b" /* Angular2TokenService */],
                __WEBPACK_IMPORTED_MODULE_42__providers_pymes_module_pymes_module__["a" /* PymesModuleProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_sellers_module_sellers_module__["a" /* SellersModuleProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_products_products__["a" /* ProductsProvider */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_47__providers_gps_gps__["a" /* GpsProvider */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_57__providers_independients_module_independients_module__["a" /* IndependientsModuleProvider */],
                __WEBPACK_IMPORTED_MODULE_58__providers_filters_module_filters_module__["a" /* FiltersModuleProvider */],
                __WEBPACK_IMPORTED_MODULE_59__providers_wishes_module_wishes_module__["a" /* WishesModuleProvider */],
                __WEBPACK_IMPORTED_MODULE_60__providers_cart_module_cart_module__["a" /* CartModuleProvider */],
                __WEBPACK_IMPORTED_MODULE_61__providers_notifications_module_notifications_module__["a" /* NotificationsModuleProvider */],
                __WEBPACK_IMPORTED_MODULE_62__providers_follows_module_follows_module__["a" /* FollowsModuleProvider */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_65__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__(23);
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
    function GpsProvider(diagnostic, nativeGeocoder, geolocation, storage, http) {
        this.diagnostic = diagnostic;
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation = geolocation;
        this.storage = storage;
        this.http = http;
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
    GpsProvider.prototype.GetUbications = function (lat, lng, newCategories, q, radio) {
        var params = {
            q: q,
            radio: radio,
            user: [
                lat,
                lng
            ],
            categories: newCategories
        };
        console.log(params);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__routes__["b" /* routes */].geolocation(), params).map(function (res) { return res; });
    };
    GpsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], GpsProvider);
    return GpsProvider;
}());

//# sourceMappingURL=gps.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wishlist_wishlist__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__country_country__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alerts_module_alerts_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pymes_pymes__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__independients_independients__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sellers_sellers__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_products__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_users_module_users_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_gps_gps__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__save_pymes_save_pymes__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__save_independients_save_independients__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__save_sellers_save_sellers__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_products_products__ = __webpack_require__(357);
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
    function HomePage(navCtrl, modalCtrl, alert, userProvider, gps, product, event) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alert = alert;
        this.userProvider = userProvider;
        this.gps = gps;
        this.product = product;
        this.event = event;
        this.country = 'Chile';
        this.sellers = [];
        this.products = [];
        this.independients = [];
        this.slides = [
            {
                title: "Zona de Tiendas",
                description: "Descubre iBigWave",
                smalltext: "Consigue los mejores precios",
                image: "assets/imgs/slider1.jpg",
                button: "Crear Tienda",
                component: __WEBPACK_IMPORTED_MODULE_14__save_pymes_save_pymes__["a" /* SavePymesPage */],
                color: "primary"
            },
            {
                title: "Zona de Profesionales",
                description: "Descubre iBigWave",
                smalltext: "Consigue los mejores precios",
                image: "assets/imgs/slider2.jpg",
                button: "Crear Profesional",
                component: __WEBPACK_IMPORTED_MODULE_15__save_independients_save_independients__["a" /* SaveIndependientsPage */],
                color: "secondary"
            },
            {
                title: "Zona de Seller",
                description: "Descubre iBigWave",
                smalltext: "Consigue los mejores precios",
                image: "assets/imgs/slider3.jpg",
                button: "Deseo Vender",
                component: __WEBPACK_IMPORTED_MODULE_16__save_sellers_save_sellers__["a" /* SaveSellersPage */],
                color: "danger"
            }
        ];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.checkUser();
        this.getSuggest();
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
        this.event.publish('userLogin');
    };
    HomePage.prototype.getCountry = function () {
        this.country = this.gps.get_address();
    };
    HomePage.prototype.goSave = function (slide) {
        this.navCtrl.push(slide.component);
    };
    HomePage.prototype.getSuggest = function () {
        var _this = this;
        this.product.homeSuggest().subscribe(function (resp) {
            _this.sellers = JSON.parse(resp['_body']).data.sellers_by_followers.slice(0, 6);
            console.log('Sellers::::', _this.sellers);
            _this.products = JSON.parse(resp['_body']).data.products_by_created_at.slice(0, 6);
            console.log('Products::::', _this.products);
            _this.independients = JSON.parse(resp['_body']).data.independents_by_created_at.slice(0, 6);
            console.log('independientes::::', _this.independients);
        });
    };
    HomePage.prototype.chunks = function (array, size) {
        var results = [];
        while (array.length) {
            results.push(array.splice(0, size));
        }
        return results;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\home\home.html"*/'<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important;">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png">\n\n       <!--  <ion-badge id="notifications-badge" color="danger">4</ion-badge> -->\n\n      </ion-icon>\n\n    </button>\n\n\n\n    <ion-title text-uppercase text-center>{{"app_title" | translate}} <br>\n\n       <div (click)="selectCountry()" class="country"> <small> {{country}}</small> <ion-icon name="arrow-dropdown"></ion-icon></div>\n\n      <span float-right>\n\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n\n        <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;">\n\n          <ion-badge id="notifications-badge" color="danger">2</ion-badge>\n\n        </ion-icon>\n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'search_box\' | translate}}" (click)="searchPage()"></ion-searchbar>\n\n\n\n<!--   <div class="tab-row">\n\n    <ion-row>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/electronics.png">\n\n          <small class="text-white">Tiendas</small>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/fashion.png">\n\n          <small class="text-white">Independientes</small>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/home.png">\n\n          <small class="text-white">Personas</small>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/mobaile.png">\n\n          <small class="text-white">Mobaile</small>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div> -->\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-light">\n\n  <ion-slides pager autoplay=2000 parallax=true>\n\n    <ion-slide *ngFor="let slide of slides">\n\n        <button ion-button class="btn_slide" color="{{slide.color}}" (click)="goSave(slide)">{{slide.button}}</button>\n\n      <img [src]="slide.image" class="slide-image" />\n\n      <div class="banner-text">\n\n        <p [innerHTML]="slide.description"></p>\n\n        <small [innerHTML]="slide.smalltext"></small>\n\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n\n\n  <ion-slides pager autoplay=2000 parallax=true>\n\n      <ion-slide>\n\n  <p class="feature_category"><!-- {{"feature_item" | translate}} -->Visita nuestras tiendas\n\n    <small class="bg-red btn-round text-white" float-right (click)="goListPymes()">{{"view_all" | translate}}<!--  Ver todas nuestras tiendas --></small>\n\n  </p>\n\n\n\n  <ion-row>\n\n      <ion-col>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            <div class="img-box" (click)="itemdetailPage()">\n\n                <img src="assets/imgs/suit_PNG8132.png">\n\n            </div>\n\n            <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n          </ion-card-header>\n\n          <ion-card-content (click)="itemdetailPage()">\n\n            <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n            <div class="rateing">\n\n              <div class="card-btn">\n\n                <p class="" float-left>\n\n                  <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                  <span class="text-light bold"> (125)</span>\n\n                </p>\n\n                <div style="display: flex;" float-right>\n\n                  <div class="price text-light mr-5">\n\n                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                  </div>\n\n                  <div class="price text-sky">\n\n                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card>\n\n          <ion-card-header>\n\n              <div class="img-box" (click)="itemdetailPage()">\n\n                  <img src="assets/imgs/shirt-2.jpg">\n\n              </div>\n\n              <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n          </ion-card-header>\n\n          <ion-card-content (click)="itemdetailPage()">\n\n              <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n              <div class="rateing">\n\n                  <div class="card-btn">\n\n                      <p class="" float-left>\n\n                          <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                          <span class="text-light bold"> (125)</span>\n\n                      </p>\n\n                      <div style="display: flex;" float-right>\n\n                          <div class="price text-light mr-5">\n\n                              <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                          </div>\n\n                          <div class="price text-sky">\n\n                              <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                          </div>\n\n                      </div>\n\n                  </div>\n\n              </div>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <div class="img-box" (click)="itemdetailPage()">\n\n                    <img src="assets/imgs/shirt-3.jpg">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n            </ion-card-header>\n\n            <ion-card-content (click)="itemdetailPage()">\n\n                <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                <div class="rateing">\n\n                    <div class="card-btn">\n\n                        <p class="" float-left>\n\n                            <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                            <span class="text-light bold"> (125)</span>\n\n                        </p>\n\n                        <div style="display: flex;" float-right>\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <div class="img-box" (click)="itemdetailPage()">\n\n                    <img src="assets/imgs/shirt-4.jpg">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n            </ion-card-header>\n\n            <ion-card-content (click)="itemdetailPage()">\n\n                <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                <div class="rateing">\n\n                    <div class="card-btn">\n\n                        <p class="" float-left>\n\n                            <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                            <span class="text-light bold"> (125)</span>\n\n                        </p>\n\n                        <div style="display: flex;" float-right>\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n</ion-slide>\n\n<ion-slide>\n\n    <p class="feature_category"><!-- {{"feature_item" | translate}} -->Vendedores independientes\n\n      <small class="bg-purple btn-round text-white" float-right (click)="goListIndependients()">{{"view_all" | translate}}<!--  Ver todas nuestras tiendas --></small>\n\n    </p>\n\n  \n\n    <ion-row>\n\n        <ion-col>\n\n          <ion-card>\n\n            <ion-card-header>\n\n              <div class="img-box" (click)="itemdetailPage()">\n\n                  <img src="assets/imgs/suit_PNG8132.png">\n\n              </div>\n\n              <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n            </ion-card-header>\n\n            <ion-card-content (click)="itemdetailPage()">\n\n              <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n              <div class="rateing">\n\n                <div class="card-btn">\n\n                  <p class="" float-left>\n\n                    <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                    <span class="text-light bold"> (125)</span>\n\n                  </p>\n\n                  <div style="display: flex;" float-right>\n\n                    <div class="price text-light mr-5">\n\n                      <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                    </div>\n\n                    <div class="price text-sky">\n\n                      <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-card>\n\n            <ion-card-header>\n\n                <div class="img-box" (click)="itemdetailPage()">\n\n                    <img src="assets/imgs/shirt-2.jpg">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n            </ion-card-header>\n\n            <ion-card-content (click)="itemdetailPage()">\n\n                <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                <div class="rateing">\n\n                    <div class="card-btn">\n\n                        <p class="" float-left>\n\n                            <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                            <span class="text-light bold"> (125)</span>\n\n                        </p>\n\n                        <div style="display: flex;" float-right>\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    \n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-card>\n\n              <ion-card-header>\n\n                  <div class="img-box" (click)="itemdetailPage()">\n\n                      <img src="assets/imgs/shirt-3.jpg">\n\n                  </div>\n\n                  <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n              </ion-card-header>\n\n              <ion-card-content (click)="itemdetailPage()">\n\n                  <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                  <div class="rateing">\n\n                      <div class="card-btn">\n\n                          <p class="" float-left>\n\n                              <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                              <span class="text-light bold"> (125)</span>\n\n                          </p>\n\n                          <div style="display: flex;" float-right>\n\n                              <div class="price text-light mr-5">\n\n                                  <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                              </div>\n\n                              <div class="price text-sky">\n\n                                  <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                              </div>\n\n                          </div>\n\n                      </div>\n\n                  </div>\n\n              </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-card>\n\n              <ion-card-header>\n\n                  <div class="img-box" (click)="itemdetailPage()">\n\n                      <img src="assets/imgs/shirt-4.jpg">\n\n                  </div>\n\n                  <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n              </ion-card-header>\n\n              <ion-card-content (click)="itemdetailPage()">\n\n                  <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                  <div class="rateing">\n\n                      <div class="card-btn">\n\n                          <p class="" float-left>\n\n                              <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                              <span class="text-light bold"> (125)</span>\n\n                          </p>\n\n                          <div style="display: flex;" float-right>\n\n                              <div class="price text-light mr-5">\n\n                                  <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                              </div>\n\n                              <div class="price text-sky">\n\n                                  <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                              </div>\n\n                          </div>\n\n                      </div>\n\n                  </div>\n\n              </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n  </ion-slide>\n\n  <ion-slide>\n\n      <p class="feature_category"><!-- {{"feature_item" | translate}} -->Productos sugeridos\n\n        <small class="bg-blue btn-round text-white" float-right (click)="goListProducts()">{{"view_all" | translate}}<!--  Ver todas nuestras tiendas --></small>\n\n      </p>\n\n    \n\n      <ion-row>\n\n          <ion-col>\n\n            <ion-card>\n\n              <ion-card-header>\n\n                <div class="img-box" (click)="itemdetailPage()">\n\n                    <img src="assets/imgs/suit_PNG8132.png">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n              </ion-card-header>\n\n              <ion-card-content (click)="itemdetailPage()">\n\n                <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                <div class="rateing">\n\n                  <div class="card-btn">\n\n                    <p class="" float-left>\n\n                      <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                      <span class="text-light bold"> (125)</span>\n\n                    </p>\n\n                    <div style="display: flex;" float-right>\n\n                      <div class="price text-light mr-5">\n\n                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                      </div>\n\n                      <div class="price text-sky">\n\n                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </ion-card-content>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-card>\n\n              <ion-card-header>\n\n                  <div class="img-box" (click)="itemdetailPage()">\n\n                      <img src="assets/imgs/shirt-2.jpg">\n\n                  </div>\n\n                  <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n              </ion-card-header>\n\n              <ion-card-content (click)="itemdetailPage()">\n\n                  <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                  <div class="rateing">\n\n                      <div class="card-btn">\n\n                          <p class="" float-left>\n\n                              <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                              <span class="text-light bold"> (125)</span>\n\n                          </p>\n\n                          <div style="display: flex;" float-right>\n\n                              <div class="price text-light mr-5">\n\n                                  <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                              </div>\n\n                              <div class="price text-sky">\n\n                                  <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                              </div>\n\n                          </div>\n\n                      </div>\n\n                  </div>\n\n              </ion-card-content>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n      \n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box" (click)="itemdetailPage()">\n\n                        <img src="assets/imgs/shirt-3.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content (click)="itemdetailPage()">\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div style="display: flex;" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box" (click)="itemdetailPage()">\n\n                        <img src="assets/imgs/shirt-4.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content (click)="itemdetailPage()">\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div style="display: flex;" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n    </ion-slide>\n\n    <ion-slide>\n\n        <p class="feature_category"><!-- {{"feature_item" | translate}} -->Nuestros vendedores mas seguidos\n\n          <small class="bg-sky btn-round text-white" float-right (click)="goListSellers()">{{"view_all" | translate}}<!--  Ver todas nuestras tiendas --></small>\n\n        </p>\n\n        <ion-row *ngFor="let seller of sellers  let i=index">\n\n            <ion-col>\n\n              <ion-card>\n\n                <ion-card-header>\n\n                  <div class="img-box" (click)="itemdetailPage()">\n\n                      <img src="{{seller.photo}}">\n\n                  </div>\n\n                  <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content (click)="itemdetailPage()">\n\n                  <h5>{{seller.title}}</h5>\n\n                  <div class="rateing">\n\n                    <div class="card-btn">\n\n                      <p class="" float-left>\n\n  \n\n                      </p>\n\n                      <div style="display: flex;" float-right>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </ion-card-content>\n\n              </ion-card>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box" (click)="itemdetailPage()">\n\n                        <img src="assets/imgs/shirt-2.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content (click)="itemdetailPage()">\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div style="display: flex;" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n              </ion-card>\n\n            </ion-col>\n\n          </ion-row>\n\n        \n\n      </ion-slide>\n\n</ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_12__providers_users_module_users_module__["a" /* UsersModuleProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__providers_users_module_users_module__["a" /* UsersModuleProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_13__providers_gps_gps__["a" /* GpsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__providers_gps_gps__["a" /* GpsProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_17__providers_products_products__["a" /* ProductsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__providers_products_products__["a" /* ProductsProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _g || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shippining_shippining__ = __webpack_require__(351);
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
            selector: 'page-itemdetail ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\itemdetail\itemdetail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>Men\'s Shirts\n\n            <span float-right> \n\n              <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>            \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<!--<select size & color>-->\n\n<ion-content class="bg-light">\n\n    <div class="img-section shadow-bottom" text-center>\n\n        <img src="assets/imgs/item-img.png">\n\n        <div class="tab-btn-box">\n\n            <div class="tab-btn">\n\n                <img src="assets/imgs/item-img.png">\n\n            </div>\n\n            <div class="tab-btn">\n\n                <img src="assets/imgs/item-img.png">\n\n            </div>\n\n            <div class="tab-btn">\n\n                <img src="assets/imgs/item-img.png">\n\n            </div>\n\n        </div>\n\n        <div class="d-flex" style="align-items: start;">\n\n            <span>Unique For Men Black Formal Slim Fit Shirt by Mark Tayler</span>\n\n            <span class="icon"> <ion-icon name="share-alt"></ion-icon><ion-icon name="md-heart"></ion-icon></span>\n\n        </div>\n\n        <div class="card-btn">\n\n            <div class="d-flex" style="padding: 1rem">\n\n                <div class="review-box">\n\n                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                    <span class="text-sky small-text ">{{"read_all" | translate}} 125 {{"review" | translate}}</span>\n\n                </div>\n\n                <div class="price-box">\n\n                    <div class="price text-light" style="margin-right: 1rem;">\n\n                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                    </div>\n\n                    <div class="price text-sky">\n\n                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="select-section shadow-bottom">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <div class="size">\n\n                    <ion-item>\n\n                        <ion-label>{{"size" | translate}}</ion-label>\n\n                        <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                            <ion-option value="enable">Small</ion-option>\n\n                            <ion-option selected value="mute">Medium</ion-option>\n\n                            <ion-option value="mute_week"> large</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <div class="color">\n\n                    <ion-item>\n\n                        <ion-label>{{"color" | translate}}</ion-label>\n\n                        <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                            <ion-option selected value="enable">Black</ion-option>\n\n                            <ion-option value="mute">White</ion-option>\n\n                            <ion-option value="mute_week">Red</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n    <!--<select size & color end>-->\n\n\n\n    <!--    <Key features>-->\n\n    <div class="features bg-white shadow-bottom" padding>\n\n        <h6 class="heading">{{"key_feature" | translate}}</h6>\n\n        <p><span class="circle"></span>Unique For Men</p>\n\n        <p><span class="circle"></span>Febri: Cotton Blend</p>\n\n        <p><span class="circle"></span>Color: Black</p>\n\n        <p><span class="circle"></span>Fit: Slim Fit</p>\n\n        <p><span class="circle"></span>Sleeves: Full\n\n            <span text-right class="text-sky">{{"view_more" | translate}}\n\n              <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n            </span>\n\n        </p>\n\n    </div>\n\n    <!--  <Key features end>-->\n\n\n\n    <!--    <{{"check_delivery" | translate}}>-->\n\n    <div class="pincod bg-white shadow-bottom" padding>\n\n      <h6 class="heading">{{"check_delivery" | translate}}</h6>\n\n      <ion-row>\n\n        <ion-col col-8>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Username"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <button ion-button full class="bg-sky btn-round btn-text">{{"submit" | translate}}</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <p>\n\n        <span>{{"cod" | translate}}</span>\n\n        <span text-center>{{"free_sheeping" | translate}}</span>\n\n        <span text-right>{{"delivery" | translate}} in 3-6 {{"days" | translate}}</span>\n\n      </p>\n\n    </div>\n\n    <!--    <{{"check_delivery" | translate}} end>-->\n\n\n\n    <!--    <reating & {{"review" | translate}}>-->\n\n    <div class="reating-review bg-white" padding>\n\n      <div class="reating">\n\n        <div class="rated">\n\n          <ion-badge class="badges bg-green text-white">\n\n            4.2\n\n            <ion-icon name="md-star"></ion-icon>\n\n          </ion-badge>\n\n          <p class="text-light">\n\n            <span text-center>\n\n              {{"rated_by" | translate}}<br>125 {{"poeple" | translate}}\n\n            </span>\n\n          </p>\n\n        </div>\n\n\n\n        <div class="reating-box">\n\n          <div class="rating">\n\n            <div class="text-1">5\n\n              <ion-icon name="md-star"></ion-icon>\n\n            </div>\n\n            <div class="progres-bar rate-5"><span style="width: 90%"></span></div>\n\n            <div class="text-2">88\n\n              <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n            </div>\n\n          </div>\n\n          <div class="rating">\n\n            <div class="text-1">4\n\n              <ion-icon name="md-star"></ion-icon>\n\n            </div>\n\n            <div class="progres-bar rate-4"><span style="width: 70%"></span></div>\n\n            <div class="text-2">88\n\n              <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n            </div>\n\n          </div>\n\n          <div class="rating">\n\n            <div class="text-1">3\n\n              <ion-icon name="md-star"></ion-icon>\n\n            </div>\n\n            <div class="progres-bar rate-3"><span style="width: 50%"></span></div>\n\n            <div class="text-2">88\n\n              <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n            </div>\n\n          </div>\n\n          <div class="rating">\n\n            <div class="text-1">2\n\n              <ion-icon name="md-star"></ion-icon>\n\n            </div>\n\n            <div class="progres-bar rate-2"><span style="width: 35%"></span></div>\n\n            <div class="text-2">88\n\n              <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n            </div>\n\n          </div>\n\n          <div class="rating">\n\n            <div class="text-1">1\n\n              <ion-icon name="md-star"></ion-icon>\n\n            </div>\n\n            <div class="progres-bar rate-1"><span style="width: 20%"></span></div>\n\n            <div class="text-2">88\n\n              <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class="btn review">{{"write_review" | translate}}</div>\n\n\n\n      <div class="lick">\n\n        <p padding-top>\n\n          <span class="left-side">\n\n            <ion-badge class="badges bg-green text-white">4<ion-icon name="md-star"></ion-icon></ion-badge>  \n\n            <span class="bold">{{"great_product" | translate}}</span>\n\n          </span>\n\n          <span class="right-side">\n\n             <span class="text-light">16 May, 2017</span>\n\n          </span>\n\n        </p>\n\n\n\n        <h5> Lorem Ipsum is simply dummy text of the printing and typesetting industry\n\n        </h5>\n\n        <p class="border-bottom  name-like" padding-bottom>\n\n          <span class="left-side">\n\n             Davis Williamson.\n\n          </span>\n\n          <span class="right-side icon-box">     \n\n            <ion-icon name="md-thumbs-up" text-right class="icon-lick"></ion-icon><small>2</small>\n\n            <ion-icon name="md-thumbs-down" text-right class="icon-lick"></ion-icon><small>2</small>             \n\n          </span>\n\n        </p>\n\n\n\n\n\n        <p padding-top>\n\n          <span class="left-side">\n\n            <ion-badge class="badges bg-yellow text-white">4<ion-icon name="md-star"></ion-icon></ion-badge>  \n\n            <span class="bold">Not satisfid with quality</span>\n\n          </span>\n\n          <span class="right-side">\n\n             <span class="text-light">10 apr, 2017</span>\n\n          </span>\n\n        </p>\n\n        <h5>  Lorem Ipsum is simply dummy text of the printing and typesetting industry </h5>\n\n        <p class="border-bottom name-like" padding-bottom>\n\n          <span class="left-side">\n\n            Rahul Oberoy.\n\n          </span>\n\n          <span class="right-side icon-box">\n\n            <ion-icon name="md-thumbs-up" text-right class="icon-lick"></ion-icon><small>2</small>\n\n            <ion-icon name="md-thumbs-down" text-right class="icon-lick"></ion-icon><small>2</small>             \n\n          </span>\n\n        </p>\n\n        <h4 class="text-sky" text-right>\n\n          {{"read_all" | translate}} {{"reviews" | translate}}s\n\n          <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n        </h4>\n\n      </div>\n\n    </div>\n\n    <!--    <reating & review end>-->\n\n\n\n    <!--    <similar Products>-->\n\n    <div class="products" padding-top>\n\n      <h6 class="heading">{{"similar_products" | translate}}\n\n        <span text-right class="text-sky">{{"view_more" | translate}}\n\n          <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n        </span>\n\n      </h6>\n\n      <div class="products-scroll">\n\n        <div class="products-container" style="width:479px;">\n\n          <div class="products-item">\n\n            <ion-card>\n\n              <ion-card-header>\n\n                <div class="img-box">\n\n                  <img src="assets/imgs/shirt-3.jpg">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n              </ion-card-header>\n\n              <ion-card-content>\n\n                <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                <div class="rateing">\n\n                  <div class="card-bottom">\n\n                    <p class="" float-left>\n\n                      <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                      <span class="text-light bold"> (125)</span>\n\n                    </p>\n\n                    <div class="d-flex" float-right>\n\n                      <div class="price text-light mr-5">\n\n                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                      </div>\n\n                      <div class="price text-sky">\n\n                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </ion-card-content>\n\n            </ion-card>\n\n          </div>\n\n\n\n          <div class="products-item">\n\n            <ion-card>\n\n              <ion-card-header>\n\n                <div class="img-box">\n\n                  <img src="assets/imgs/shirt-4.jpg">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n              </ion-card-header>\n\n              <ion-card-content>\n\n                <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                <div class="rateing">\n\n                  <div class="card-bottom">\n\n                    <p class="" float-left>\n\n                      <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                      <span class="text-light bold"> (125)</span>\n\n                    </p>\n\n                    <div class="d-flex" float-right>\n\n                      <div class="price text-light mr-5">\n\n                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                      </div>\n\n                      <div class="price text-sky">\n\n                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </ion-card-content>\n\n            </ion-card>\n\n          </div>\n\n\n\n          <div class="products-item">\n\n            <ion-card>\n\n              <ion-card-header>\n\n                <div class="img-box">\n\n                  <img src="assets/imgs/shirt-2.jpg">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n              </ion-card-header>\n\n              <ion-card-content>\n\n                <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                <div class="rateing">\n\n                  <div class="card-bottom">\n\n                    <p class="">\n\n                      <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                      <span class="text-light bold"> (125)</span>\n\n                    </p>\n\n\n\n                    <div class="d-flex">\n\n                      <div class="price text-light mr-5">\n\n                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                      </div>\n\n                      <div class="price text-sky">\n\n                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </ion-card-content>\n\n            </ion-card>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <!--    <similar Products end>-->\n\n    <div style="height: 65px;"></div>\n\n    <div class="receipt btn-fisx-bottom">\n\n      <ion-row>\n\n        <ion-col><button ion-button full class="btn-round green-shadow btn-text" style="background: $white-color;color: #4dd711;">{{"add_cart" | translate}}</button> </ion-col>\n\n        <ion-col><button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="shippiningPage()"> {{"buy" | translate}}</button></ion-col>\n\n      </ion-row>\n\n    </div>\n\n\n\n    <!--    <reating & {{"review" | translate}} end>-->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\itemdetail\itemdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], ItemdetailPage);
    return ItemdetailPage;
}());

//# sourceMappingURL=itemdetail.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return headersModel; });
var headersModel = (function () {
    function headersModel() {
    }
    return headersModel;
}());

//# sourceMappingURL=headers.model.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shopModel; });
var shopModel = (function () {
    function shopModel() {
        this.banner = null;
        this.photo = null;
        this.launched = null;
        this.phone = null;
        this.url = null;
        this.address = null;
        this.vision = null;
        this.mission = null;
        this.web = null;
        this.profile = null;
        this.experience = null;
    }
    return shopModel;
}());

//# sourceMappingURL=shop.model.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return independientsModel; });
var independientsModel = (function () {
    function independientsModel() {
        this.banner = null;
        this.photo = null;
        this.launched = null;
        this.phone = null;
        this.url = null;
        this.address = null;
        this.vision = null;
        this.mission = null;
        this.web = null;
        this.profile = null;
        this.experience = null;
    }
    return independientsModel;
}());

//# sourceMappingURL=independients.model.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sellersModel; });
var sellersModel = (function () {
    function sellersModel() {
        this.banner = null;
        this.photo = null;
        this.launched = null;
        this.phone = null;
        this.url = null;
        this.address = null;
        this.vision = null;
        this.mission = null;
        this.web = null;
        this.profile = null;
        this.experience = null;
    }
    return sellersModel;
}());

//# sourceMappingURL=sellers.model.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return iconsMaps; });
//const iconBase = 'http://icons.iconarchive.com/icons/papirus-team/papirus-apps/32/';
var icons = {
    kenny: {
        //icon: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBDMTYxLjg5NiwwLDg1LjMzMyw3Ni41NjMsODUuMzMzLDE3MC42NjdjMCwyOC4yNSw3LjA2Myw1Ni4yNiwyMC40OSw4MS4xMDRMMjQ2LjY2Nyw1MDYuNSAgICBjMS44NzUsMy4zOTYsNS40NDgsNS41LDkuMzMzLDUuNXM3LjQ1OC0yLjEwNCw5LjMzMy01LjVsMTQwLjg5Ni0yNTQuODEzYzEzLjM3NS0yNC43NiwyMC40MzgtNTIuNzcxLDIwLjQzOC04MS4wMjEgICAgQzQyNi42NjcsNzYuNTYzLDM1MC4xMDQsMCwyNTYsMHogTTI1NiwyNTZjLTQ3LjA1MiwwLTg1LjMzMy0zOC4yODEtODUuMzMzLTg1LjMzM2MwLTQ3LjA1MiwzOC4yODEtODUuMzMzLDg1LjMzMy04NS4zMzMgICAgczg1LjMzMywzOC4yODEsODUuMzMzLDg1LjMzM0MzNDEuMzMzLDIxNy43MTksMzAzLjA1MiwyNTYsMjU2LDI1NnoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'
        icon: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzM2LjY0MyAzMzYuNjQzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMzYuNjQzIDMzNi42NDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTU3LjYxOCwzMjcuNDc4YzUuOTA4LDEyLjIyNiwxNS41MDEsMTIuMjIsMjEuMzk3LTAuMDEyYzI1LjI5OS01Mi40ODEsODYuODk2LTE4MC40Miw4OC44MTItMTg1Ljc0M2wwLjMyNC0wLjg4NiAgIGMzLjgzNy0xMC45NTksNi4wMjgtMjIuNjg5LDYuMDI4LTM0Ljk2OUMyNzQuMTgsNDcuNDExLDIyNi43OSwwLDE2OC4zMzEsMEMxMDkuODU5LDAsNjIuNDYzLDQ3LjQwMiw2Mi40NjMsMTA1Ljg2OCAgIGMwLDguNjU2LDEuMTU2LDE3LjAyMSwzLjExMywyNS4wNzZsMC4xMDgsMC40NDdDNjguMzkzLDE0Mi4yNjksMTMxLjg2LDI3NC4xNjcsMTU3LjYxOCwzMjcuNDc4eiBNMTY4LjMzNiw0Ni4xNjIgICBjMzIuOTY5LDAsNTkuNjkxLDI2Ljc1MSw1OS42OTEsNTkuNzEyYzAsMzIuOTgxLTI2LjcyOCw1OS43MDUtNTkuNjkxLDU5LjcwNWMtMzIuOTg0LDAtNTkuNzExLTI2LjczLTU5LjcxMS01OS43MDUgICBDMTA4LjYzMSw3Mi45MTMsMTM1LjM1Miw0Ni4xNjIsMTY4LjMzNiw0Ni4xNjJ6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=='
    }
};
var iconsMaps = {
    Pyme: {
        icon: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzM2LjY0MyAzMzYuNjQzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMzYuNjQzIDMzNi42NDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTU3LjYxOCwzMjcuNDc4YzUuOTA4LDEyLjIyNiwxNS41MDEsMTIuMjIsMjEuMzk3LTAuMDEyYzI1LjI5OS01Mi40ODEsODYuODk2LTE4MC40Miw4OC44MTItMTg1Ljc0M2wwLjMyNC0wLjg4NiAgIGMzLjgzNy0xMC45NTksNi4wMjgtMjIuNjg5LDYuMDI4LTM0Ljk2OUMyNzQuMTgsNDcuNDExLDIyNi43OSwwLDE2OC4zMzEsMEMxMDkuODU5LDAsNjIuNDYzLDQ3LjQwMiw2Mi40NjMsMTA1Ljg2OCAgIGMwLDguNjU2LDEuMTU2LDE3LjAyMSwzLjExMywyNS4wNzZsMC4xMDgsMC40NDdDNjguMzkzLDE0Mi4yNjksMTMxLjg2LDI3NC4xNjcsMTU3LjYxOCwzMjcuNDc4eiBNMTY4LjMzNiw0Ni4xNjIgICBjMzIuOTY5LDAsNTkuNjkxLDI2Ljc1MSw1OS42OTEsNTkuNzEyYzAsMzIuOTgxLTI2LjcyOCw1OS43MDUtNTkuNjkxLDU5LjcwNWMtMzIuOTg0LDAtNTkuNzExLTI2LjczLTU5LjcxMS01OS43MDUgICBDMTA4LjYzMSw3Mi45MTMsMTM1LjM1Miw0Ni4xNjIsMTY4LjMzNiw0Ni4xNjJ6IiBmaWxsPSIjZmY0MDgxIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=='
    },
    Seller: {
        icon: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzM2LjY0MyAzMzYuNjQzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMzYuNjQzIDMzNi42NDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTU3LjYxOCwzMjcuNDc4YzUuOTA4LDEyLjIyNiwxNS41MDEsMTIuMjIsMjEuMzk3LTAuMDEyYzI1LjI5OS01Mi40ODEsODYuODk2LTE4MC40Miw4OC44MTItMTg1Ljc0M2wwLjMyNC0wLjg4NiAgIGMzLjgzNy0xMC45NTksNi4wMjgtMjIuNjg5LDYuMDI4LTM0Ljk2OUMyNzQuMTgsNDcuNDExLDIyNi43OSwwLDE2OC4zMzEsMEMxMDkuODU5LDAsNjIuNDYzLDQ3LjQwMiw2Mi40NjMsMTA1Ljg2OCAgIGMwLDguNjU2LDEuMTU2LDE3LjAyMSwzLjExMywyNS4wNzZsMC4xMDgsMC40NDdDNjguMzkzLDE0Mi4yNjksMTMxLjg2LDI3NC4xNjcsMTU3LjYxOCwzMjcuNDc4eiBNMTY4LjMzNiw0Ni4xNjIgICBjMzIuOTY5LDAsNTkuNjkxLDI2Ljc1MSw1OS42OTEsNTkuNzEyYzAsMzIuOTgxLTI2LjcyOCw1OS43MDUtNTkuNjkxLDU5LjcwNWMtMzIuOTg0LDAtNTkuNzExLTI2LjczLTU5LjcxMS01OS43MDUgICBDMTA4LjYzMSw3Mi45MTMsMTM1LjM1Miw0Ni4xNjIsMTY4LjMzNiw0Ni4xNjJ6IiBmaWxsPSIjM2Y1MWI1Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=='
    },
    Independent: {
        icon: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzM2LjY0MyAzMzYuNjQzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMzYuNjQzIDMzNi42NDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTU3LjYxOCwzMjcuNDc4YzUuOTA4LDEyLjIyNiwxNS41MDEsMTIuMjIsMjEuMzk3LTAuMDEyYzI1LjI5OS01Mi40ODEsODYuODk2LTE4MC40Miw4OC44MTItMTg1Ljc0M2wwLjMyNC0wLjg4NiAgIGMzLjgzNy0xMC45NTksNi4wMjgtMjIuNjg5LDYuMDI4LTM0Ljk2OUMyNzQuMTgsNDcuNDExLDIyNi43OSwwLDE2OC4zMzEsMEMxMDkuODU5LDAsNjIuNDYzLDQ3LjQwMiw2Mi40NjMsMTA1Ljg2OCAgIGMwLDguNjU2LDEuMTU2LDE3LjAyMSwzLjExMywyNS4wNzZsMC4xMDgsMC40NDdDNjguMzkzLDE0Mi4yNjksMTMxLjg2LDI3NC4xNjcsMTU3LjYxOCwzMjcuNDc4eiBNMTY4LjMzNiw0Ni4xNjIgICBjMzIuOTY5LDAsNTkuNjkxLDI2Ljc1MSw1OS42OTEsNTkuNzEyYzAsMzIuOTgxLTI2LjcyOCw1OS43MDUtNTkuNjkxLDU5LjcwNWMtMzIuOTg0LDAtNTkuNzExLTI2LjczLTU5LjcxMS01OS43MDUgICBDMTA4LjYzMSw3Mi45MTMsMTM1LjM1Miw0Ni4xNjIsMTY4LjMzNiw0Ni4xNjJ6IiBmaWxsPSIjZjUzZDNkIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=='
    }
};
//# sourceMappingURL=icons.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_phonenumber_phonenumber__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_category_category__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_wishlist_wishlist__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_account_my_account__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_myorder_1_myorder_1__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_myorder_2_myorder_2__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_help_help__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_review_review__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_config__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__node_modules_ngx_translate_core__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_globalization__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_password_password__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_createaccount_createaccount__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tab_tab__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_alerts_module_alerts_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_token__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_routes__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_chat_chat__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_notifications_notifications__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_users_module_users_module__ = __webpack_require__(20);
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
    function MyApp(config, globalization, platform, statusBar, splashScreen, translate, storage, alertCtrl, alert, _tokenService, modalCtrl, userProvider, menuCtrl, events) {
        var _this = this;
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
        this.userProvider = userProvider;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_18__pages_tab_tab__["a" /* TabPage */];
        this.user = [];
        this.user.avatar = 'false';
        this.events.subscribe("userLogin", function () {
            _this.checkLogin();
            console.log("events in component app", _this.user);
        });
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.translate.setDefaultLang('en');
        this.platform.ready().then(function () {
            _this.checkLogin();
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
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
            _this.translate.use('es');
            _this.setDirectionAccordingly('es');
            // this.setDirectionAccordingly('ar');
            /*       } */
        });
    };
    MyApp.prototype.checkLogin = function () {
        var _this = this;
        this._tokenService.init({
            apiBase: __WEBPACK_IMPORTED_MODULE_22__providers_routes__["a" /* ROOT */]
        });
        this.userProvider.getUser().subscribe(function (resp) {
            _this.user = JSON.parse(resp['_body']).data.attributes;
            if (!_this.user.phone) {
                _this.user.phone = 'N/A';
            }
            if (!_this.user.avatar['url']) {
                _this.user.avatar = false;
            }
            else {
                _this.user.avatar = _this.user.avatar['url'];
            }
            _this.menuCtrl.enable(true, 'authenticated');
            _this.menuCtrl.enable(false, 'unauthenticated');
        }, function (error) {
            if (error.status == 401) {
                console.log(error);
                _this.storage.remove('user');
                _this.alert.alert('Alerta!', "Su sesión ha expirado.");
                _this.menuCtrl.enable(false, 'authenticated');
                _this.menuCtrl.enable(true, 'unauthenticated');
                _this.user = null;
            }
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
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_myorder_1_myorder_1__["a" /* Myorder_1Page */]);
    };
    MyApp.prototype.myorder_2Page = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_myorder_2_myorder_2__["a" /* Myorder_2Page */]);
    };
    MyApp.prototype.my_accountPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_my_account_my_account__["a" /* My_accountPage */]);
    };
    MyApp.prototype.categoryPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_category_category__["a" /* CategoryPage */]);
    };
    MyApp.prototype.homePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_tab_tab__["a" /* TabPage */]);
    };
    MyApp.prototype.reviewPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_review_review__["a" /* ReviewPage */]);
    };
    MyApp.prototype.loginPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_16__pages_password_password__["a" /* PasswordPage */]);
    };
    MyApp.prototype.wishlistPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_wishlist_wishlist__["a" /* WishlistPage */]);
    };
    MyApp.prototype.cartPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.helpPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_help_help__["a" /* HelpPage */]);
    };
    MyApp.prototype.registerPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_17__pages_createaccount_createaccount__["a" /* CreateaccountPage */]);
    };
    MyApp.prototype.phonenumberPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_phonenumber_phonenumber__["a" /* PhonenumberPage */]);
    };
    MyApp.prototype.chatPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_23__pages_chat_chat__["a" /* ChatPage */]);
    };
    MyApp.prototype.notificationPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_24__pages_notifications_notifications__["a" /* NotificationsPage */]);
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
                        _this.userProvider.logOut().subscribe(function () {
                            loading.present().then(function () {
                                _this.alert.alert('Alerta!', "Cierre de sesión exitoso");
                                _this.menuCtrl.enable(false, 'authenticated');
                                _this.menuCtrl.enable(true, 'unauthenticated');
                                _this.user = null;
                                loading.dismiss();
                            });
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\app\app.html"*/'<ion-menu [content]="content" *ngIf="!user" id="unauthenticated">\n\n    <ion-header>\n\n<!--         <ion-toolbar>\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/profile_pix.png">\n\n                    </ion-avatar>\n\n                    <h2>{{"hey" | translate}} Tarun\n\n                        <ion-icon name="ios-arrow-forward"></ion-icon>\n\n                    </h2>\n\n                    <p>+91 9087654321</p>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-toolbar> -->\n\n <!--        <div class="menu-tabs" padding text-center>\n\n            <ion-row>\n\n                <ion-col col-4 menuClose (click)="myorder_1Page()">\n\n                    <img src="assets/imgs/my_order.png">\n\n                    <p>{{"my_order" | translate}}</p>\n\n                </ion-col>\n\n                <ion-col col-4 menuClose (click)="my_accountPage()">\n\n                    <img src="assets/imgs/my-card.png">\n\n                    <p>{{"my_cards" | translate}}</p>\n\n                </ion-col>\n\n                <ion-col col-4 menuClose (click)="my_accountPage()">\n\n                    <img src="assets/imgs/my_location.png">\n\n                    <p>{{"my_address" | translate}}</p>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div> -->\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n        <div class="menu-title">\n\n            <ion-list>\n\n                <button ion-item menuClose (click)="homePage()">\n\n                    <img src="assets/imgs/ic_home.png ">\n\n                        {{"home" | translate}}\n\n                </button>\n\n                <button ion-item menuClose (click)="loginPage()">\n\n                    <img src="assets/imgs/ic_home.png ">\n\n                        {{"login" | translate}}\n\n                </button>\n\n                <button ion-item menuClose (click)="registerPage()">\n\n                    <img src="assets/imgs/ic_home.png ">\n\n                        {{"sign_up" | translate}}\n\n                </button>\n\n                <button ion-item menuClose (click)="reviewPage()">\n\n                    <img src="assets/imgs/ic_more.png ">\n\n                        {{"add_reviews" | translate}}\n\n                </button>\n\n            </ion-list>\n\n        </div>\n\n    </ion-content>\n\n\n\n</ion-menu>\n\n<ion-menu [content]="content" id="authenticated" >\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-list>\n\n                <ion-item *ngIf="user">\n\n                    <ion-avatar item-start>\n\n                        <img *ngIf="!user.avatar" src="data:image/png;base64,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">\n\n                        <img *ngIf="user.avatar" src="{{user.avatar}}">\n\n                    </ion-avatar>\n\n                    <h2>{{user.name}}\n\n                        <ion-icon name="ios-arrow-forward"></ion-icon>\n\n                    </h2>\n\n                    <p>{{user.email}}</p>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-toolbar>\n\n        <div class="menu-tabs" padding text-center>\n\n            <ion-row>\n\n                <ion-col col-4 menuClose (click)="myorder_1Page()">\n\n                    <img src="assets/imgs/my_order.png">\n\n                    <p>{{"my_order" | translate}}</p>\n\n                </ion-col>\n\n                <ion-col col-4 menuClose (click)="my_accountPage()">\n\n                    <img src="assets/imgs/my-card.png">\n\n                    <p>{{"my_cards" | translate}}</p>\n\n                </ion-col>\n\n                <ion-col col-4 menuClose (click)="my_accountPage()">\n\n                    <img src="assets/imgs/my_location.png">\n\n                    <p>{{"my_address" | translate}}</p>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n        <div class="menu-title">\n\n            <ion-list>\n\n                <button ion-item menuClose (click)="homePage()">\n\n                    <img src="assets/imgs/ic_home.png ">\n\n                        {{"home" | translate}}\n\n                </button>\n\n                <button ion-item menuClose (click)="chatPage()">\n\n                    <img src="assets/imgs/ic_categories.png ">\n\n                      <!--   {{"categories" | translate}} -->Mensajes\n\n                      <ion-badge id="notifications-badge" color="danger">1</ion-badge>\n\n                </button>\n\n               <!--  <div class="drop-down ">\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_electronics.png ">\n\n                        Electronics\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_fashion.png ">\n\n                        Fashion\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_home_decor.png ">\n\n                        Home Decor\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_mobile.png ">\n\n                        Mobile\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_more.png ">\n\n                        More\n\n                </button>\n\n                </div> -->\n\n                <button ion-item menuClose (click)="notificationPage()">\n\n                        <ion-icon name="notifications-outline" class="notifications-icon"></ion-icon>\n\n                       Notificaciones <ion-badge id="notifications-badge" color="danger">3</ion-badge>\n\n                </button>\n\n                <button ion-item menuClose (click)="wishlistPage()">\n\n                    <img src="assets/imgs/ic_my_wishlist.png ">\n\n                        {{"wishlist" | translate}} (3)\n\n                </button>\n\n                <button ion-item menuClose (click)="my_accountPage()">\n\n                    <img src="assets/imgs/ic_my_account.png ">\n\n                        {{"my_account" | translate}}\n\n                </button>\n\n        <!--         <button ion-item menuClose (click)="helpPage()">\n\n                    <img src="assets/imgs/ic_help.png ">\n\n                        {{"help_center" | translate}}\n\n                </button> -->\n\n                <button ion-item menuClose (click)="logout()">\n\n                    <img src="assets/imgs/ic_logout.png ">\n\n                        {{"logout" | translate}}\n\n                </button>\n\n                <button ion-item menuClose (click)="reviewPage()">\n\n                    <img src="assets/imgs/ic_more.png ">\n\n                        {{"add_reviews" | translate}}\n\n                </button>\n\n            </ion-list>\n\n        </div>\n\n    </ion-content>\n\n\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" [class]="deviceModel" #content swipeBackEnabled="false " type="overlay"></ion-nav>'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\app\app.html"*/
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_13__app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_15__ionic_native_globalization__["a" /* Globalization */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_14__node_modules_ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_20__providers_alerts_module_alerts_module__["a" /* AlertsModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_21_angular2_token__["b" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_25__providers_users_module_users_module__["a" /* UsersModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishesModuleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WishesModuleProvider = (function () {
    function WishesModuleProvider(http, _tokenService) {
        this.http = http;
        this._tokenService = _tokenService;
    }
    WishesModuleProvider.prototype.getWishes = function () {
        this._tokenService.get(__WEBPACK_IMPORTED_MODULE_3__routes__["b" /* routes */].listWish());
    };
    WishesModuleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angular2_token__["b" /* Angular2TokenService */]])
    ], WishesModuleProvider);
    return WishesModuleProvider;
}());

//# sourceMappingURL=wishes-module.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsModuleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
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
  Generated class for the NotificationsModuleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificationsModuleProvider = (function () {
    function NotificationsModuleProvider(http) {
        this.http = http;
        console.log('Hello NotificationsModuleProvider Provider');
    }
    NotificationsModuleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NotificationsModuleProvider);
    return NotificationsModuleProvider;
}());

//# sourceMappingURL=notifications-module.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowsModuleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FollowsModuleProvider = (function () {
    function FollowsModuleProvider(http, _tokenService) {
        this.http = http;
        this._tokenService = _tokenService;
    }
    FollowsModuleProvider.prototype.getFollows = function (type) {
        this._tokenService.get(__WEBPACK_IMPORTED_MODULE_2__routes__["b" /* routes */].following(type));
    };
    FollowsModuleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_angular2_token__["b" /* Angular2TokenService */]])
    ], FollowsModuleProvider);
    return FollowsModuleProvider;
}());

//# sourceMappingURL=follows-module.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cart_module_cart_module__ = __webpack_require__(155);
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
    function WishlistPage(navCtrl, viewCtrl, cartProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.cartProvider = cartProvider;
        this.modalCtrl = modalCtrl;
    }
    WishlistPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    WishlistPage.prototype.getListCart = function () {
        this.cartProvider.getCart();
    };
    WishlistPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    WishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-wishlist ',template:/*ion-inline-start:"C:\Users\refm1\Desktop\BigWave\src\pages\wishlist\wishlist.html"*/'<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"wishlist" | translate}} (3)\n\n            <span float-right>                  \n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt\n\n                        <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                    </h4>\n\n                    <div class="rateing">\n\n                        <p class=text-light>Man\'s shirt </p>\n\n                        <div class="card-btn" padding-top>\n\n                            <div class="">\n\n                                <div float-left>\n\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                                    <span class="text-light small-text">(125 {{"review" | translate}})</span>\n\n                                </div>\n\n                                <div style="display: flex;" float-right>\n\n                                    <div class="price text-light mr-5">\n\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                    </div>\n\n                                    <div class="price text-sky">\n\n                                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/bag.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skybags Leo 26 ltrs Red Casual Backpack\n\n                        <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                    </h4>\n\n                    <div class="rateing">\n\n                        <p class=text-light>bags & Backpack</p>\n\n                        <div class="card-btn" padding-top>\n\n                            <div class="">\n\n                                <div float-left>\n\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                                    <span class="text-light small-text">(125 {{"review" | translate}})</span>\n\n                                </div>\n\n                                <div style="display: flex;" float-right>\n\n                                    <div class="price text-light mr-5">\n\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                    </div>\n\n                                    <div class="price text-sky">\n\n                                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/wach.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skmei Analog-Digital Mul- ticolor Dil Men\'s Watch\n\n                        <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                    </h4>\n\n                    <div class="rateing">\n\n                        <p class=text-light>Wrist watch</p>\n\n                        <div class="card-btn" padding-top>\n\n                            <div class="rateing">\n\n                                <div float-left>\n\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                                    <span class="text-light small-text">(125 {{"review" | translate}})</span>\n\n                                </div>\n\n                                <div style="display: flex;" float-right>\n\n                                    <div class="price text-light mr-5">\n\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                    </div>\n\n                                    <div class="price text-sky">\n\n                                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\refm1\Desktop\BigWave\src\pages\wishlist\wishlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_cart_module_cart_module__["a" /* CartModuleProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());

//# sourceMappingURL=user.model.js.map

/***/ })

},[410]);
//# sourceMappingURL=main.js.map