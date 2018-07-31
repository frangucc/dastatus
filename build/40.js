webpackJsonp([40],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBackgroundPageModule", function() { return CardBackgroundPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_background__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardBackgroundPageModule = /** @class */ (function () {
    function CardBackgroundPageModule() {
    }
    CardBackgroundPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__card_background__["a" /* CardBackgroundPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__card_background__["a" /* CardBackgroundPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__card_background__["a" /* CardBackgroundPage */]
            ]
        })
    ], CardBackgroundPageModule);
    return CardBackgroundPageModule;
}());

//# sourceMappingURL=card-background.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardBackgroundPage; });
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


var CardBackgroundPage = /** @class */ (function () {
    function CardBackgroundPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cards = [
            {
                imageUrl: 'assets/img/card/card-saopaolo.png',
                title: 'São Paulo',
                subtitle: '41 Listings'
            },
            {
                imageUrl: 'assets/img/card/card-amsterdam.png',
                title: 'Amsterdam',
                subtitle: '64 Listings'
            },
            {
                imageUrl: 'assets/img/card/card-sf.png',
                title: 'San Francisco',
                subtitle: '72 Listings'
            },
            {
                imageUrl: 'assets/img/card/card-madison.png',
                title: 'Madison',
                subtitle: '28 Listings'
            }
        ];
    }
    CardBackgroundPage.prototype.cardTapped = function (card) {
        alert(card.title + ' was tapped.');
    };
    CardBackgroundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card-background',template:/*ion-inline-start:"C:\Users\User\Desktop\app1\src\pages\ionic-official-components\card\card-background\card-background.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Card Background List</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor="let card of cards" (click)="cardTapped(card)">\n    <img [src]="card.imageUrl" />\n    <div class="card-title">{{card.title}}</div>\n    <div class="card-subtitle">{{card.subtitle}}</div>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Desktop\app1\src\pages\ionic-official-components\card\card-background\card-background.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], CardBackgroundPage);
    return CardBackgroundPage;
}());

//# sourceMappingURL=card-background.js.map

/***/ })

});
//# sourceMappingURL=40.js.map