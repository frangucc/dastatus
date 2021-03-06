webpackJsonp([25],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginOnePageModule", function() { return LoginOnePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_one__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginOnePageModule = /** @class */ (function () {
    function LoginOnePageModule() {
    }
    LoginOnePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__login_one__["a" /* LoginOnePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__login_one__["a" /* LoginOnePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__login_one__["a" /* LoginOnePage */]
            ]
        })
    ], LoginOnePageModule);
    return LoginOnePageModule;
}());

//# sourceMappingURL=login-one.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { FormBuilder, FormControl, Validator } from '@angular/forms';


var LoginOnePage = /** @class */ (function () {
    function LoginOnePage(loadingCtrl, alertCtrl, app) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.backgroundImage = 'assets/img/background/background-5.jpg';
    }
    LoginOnePage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            duration: 500
        });
        loading.onDidDismiss(function () {
            var alert = _this.alertCtrl.create({
                title: 'Logged in!',
                subTitle: 'Thanks for logging in.',
                buttons: ['Dismiss']
            });
            alert.present();
        });
        loading.present();
    };
    LoginOnePage.prototype.goToSignup = function () {
        // this.navCtrl.push(SignupPage);
    };
    LoginOnePage.prototype.goToResetPassword = function () {
        // this.navCtrl.push(ResetPasswordPage);
    };
    LoginOnePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-one',template:/*ion-inline-start:"C:\Users\User\Desktop\app1\src\pages\login\login-one\login-one.html"*/'<ion-content padding class="transparent-header" [ngStyle]="{\'background-image\': \'url(\' + backgroundImage +\')\'}">\n  <ion-header>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n  <div padding>\n    <ion-row>\n      <ion-col>\n        <img class="logo" src="assets/img/logo/logo-mailchimp.png" />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list inset class="no-border">\n          <ion-item>\n            <ion-label>Username</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Password</ion-label>\n            <ion-input type="password"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button class="login-button" (click)="login()">Login</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div (click)="goToSignup()">\n          <span>Or create a new account.</span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\app1\src\pages\login\login-one\login-one.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], LoginOnePage);
    return LoginOnePage;
}());

//# sourceMappingURL=login-one.js.map

/***/ })

});
//# sourceMappingURL=25.js.map