webpackJsonp([2],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPageModule", function() { return SlidesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slides__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlidesPageModule = /** @class */ (function () {
    function SlidesPageModule() {
    }
    SlidesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__slides__["a" /* SlidesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__slides__["a" /* SlidesPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__slides__["a" /* SlidesPage */]
            ]
        })
    ], SlidesPageModule);
    return SlidesPageModule;
}());

//# sourceMappingURL=slides.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesPage; });
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


var SlidesPage = /** @class */ (function () {
    function SlidesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = SlidesPage_1;
        this.items = [
            // {
            //   title: 'Carousel',
            //   page: 'SlideCarouselPage'
            // },
            {
                title: 'Color changing sliders',
                page: 'SlideColorChangingPage'
            },
            {
                title: 'Custom pagination',
                page: 'SlideCustomPaginationPage'
            },
            {
                title: 'Free mode slide (no fixed positions)',
                page: 'SlideFreeModePage'
            },
            {
                title: 'List of Sliders',
                page: 'SliderListPage'
            },
            {
                title: 'Nested slides',
                page: 'SlideNestedPage'
            },
            {
                title: 'Slide transitions',
                page: 'SlideTransitionsPage'
            },
            {
                title: 'Slide right to left',
                page: 'SlideRightToLeftPage'
            },
            {
                title: 'Slide with pagination arrows',
                page: 'SliderWithArrowsPage'
            },
            {
                title: 'Slide Walkthrough',
                page: 'SlideWalkthroughPage'
            }
            // {
            //   title: 'Photo Gallery (not working)',
            //   page: 'SlidePhotoGalleryPage'
            // },
        ];
    }
    SlidesPage_1 = SlidesPage;
    SlidesPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    SlidesPage = SlidesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slides',template:/*ion-inline-start:"C:\Users\User\Desktop\app1\src\pages\slide\slides.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lists</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      {{item.title}}\n    </button>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Desktop\app1\src\pages\slide\slides.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], SlidesPage);
    return SlidesPage;
    var SlidesPage_1;
}());

//# sourceMappingURL=slides.js.map

/***/ })

});
//# sourceMappingURL=2.js.map