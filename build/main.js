webpackJsonp([46],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
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


var TeamsPage = /** @class */ (function () {
    function TeamsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = 'TeamsPage';
    }
    TeamsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teams',template:/*ion-inline-start:"C:\Users\User\Desktop\app1\src\pages\teams\teams.html"*/'<ion-header>\n  <ion-navbar>\n	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="margin-left: auto; margin-right: auto; text-align: center;">\n      Teams\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <div> <p>Teams Page<p></div>\n<img style="display: block; width: 62%; height: 86%; margin-left: auto; margin-right: auto;" src="assets/imgs/dastatuslogo.jpg">\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\app1\src\pages\teams\teams.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], TeamsPage);
    return TeamsPage;
}());

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accordion-list/accordion-list.module": [
		276,
		43
	],
	"../pages/home/home.module": [
		277,
		45
	],
	"../pages/ionic-official-components/alert/alert.module": [
		273,
		42
	],
	"../pages/ionic-official-components/button/button.module": [
		274,
		41
	],
	"../pages/ionic-official-components/card/card-background/card-background.module": [
		278,
		40
	],
	"../pages/ionic-official-components/card/card-badge/card-badge.module": [
		280,
		39
	],
	"../pages/ionic-official-components/card/card-image/card-image.module": [
		279,
		38
	],
	"../pages/ionic-official-components/card/card-map/card-map.module": [
		281,
		37
	],
	"../pages/ionic-official-components/card/card-social/card-social.module": [
		282,
		36
	],
	"../pages/ionic-official-components/card/card.module": [
		275,
		35
	],
	"../pages/ionic-official-components/ionic-official-components.module": [
		283,
		0
	],
	"../pages/list/crypto-list/crypto-list.module": [
		284,
		34
	],
	"../pages/list/delete-items/delete-items.module": [
		285,
		33
	],
	"../pages/list/list.module": [
		286,
		32
	],
	"../pages/list/settings/settings.module": [
		287,
		31
	],
	"../pages/list/sliding-item/sliding-item.module": [
		288,
		30
	],
	"../pages/list/users/users.module": [
		289,
		29
	],
	"../pages/login/login-background-slider/login-background-slider.module": [
		290,
		28
	],
	"../pages/login/login-background-video/login-background-video.module": [
		291,
		27
	],
	"../pages/login/login-instagram/login-instagram.module": [
		292,
		26
	],
	"../pages/login/login-one/login-one.module": [
		293,
		25
	],
	"../pages/login/login-slider/login-slider.module": [
		294,
		24
	],
	"../pages/login/login.module": [
		295,
		23
	],
	"../pages/popup-fab/popup-fab-modal/popup-fab-modal.module": [
		296,
		22
	],
	"../pages/popup-fab/popup-fab.module": [
		297,
		21
	],
	"../pages/popup-menu/popup-menu-one/popup-menu-one.module": [
		298,
		20
	],
	"../pages/popup-menu/popup-menu-two/popup-menu-two.module": [
		299,
		19
	],
	"../pages/popup-menu/popup-menu.module": [
		300,
		18
	],
	"../pages/popup-modal/hint-modal/hint-modal.module": [
		301,
		17
	],
	"../pages/popup-modal/popup-modal.module": [
		302,
		16
	],
	"../pages/popup-modal/signup-modal/signup-modal.module": [
		303,
		15
	],
	"../pages/popup-modal/walkthrough-modal/walkthrough-modal.module": [
		304,
		14
	],
	"../pages/slide/slide-carousel/slide-carousel.module": [
		305,
		13
	],
	"../pages/slide/slide-color-changing/slide-color-changing.module": [
		306,
		12
	],
	"../pages/slide/slide-custom-pagination/slide-custom-pagination.module": [
		307,
		11
	],
	"../pages/slide/slide-free-mode/slide-free-mode.module": [
		308,
		10
	],
	"../pages/slide/slide-nested/slide-nested.module": [
		309,
		9
	],
	"../pages/slide/slide-photo-gallery/slide-photo-gallery.module": [
		310,
		8
	],
	"../pages/slide/slide-rtl/slide-rtl.module": [
		311,
		7
	],
	"../pages/slide/slide-transitions/slide-transitions.module": [
		312,
		6
	],
	"../pages/slide/slide-walkthrough/slide-walkthrough.module": [
		313,
		5
	],
	"../pages/slide/slider-list/slider-list.module": [
		314,
		4
	],
	"../pages/slide/slider-with-arrows/slider-with-arrows.module": [
		315,
		3
	],
	"../pages/slide/slides.module": [
		318,
		2
	],
	"../pages/teams/teams.module": [
		316,
		44
	],
	"../pages/timeline/timeline.module": [
		317,
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_imports__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//import { PipesModule } from '../pipes/pipes.module';
//import { ComponentsModule } from '../components/components.module';



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__app_imports__["a" /* DIRECTIVES */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */],
            ],
            exports: []
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_teams_teams__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { AccordionListPage } from '../pages/accordion-list/accordion-list';
//import { IonicOfficialComponentsPage } from '../pages/ionic-official-components/ionic-official-components';

//import { MODULES, PROVIDERS } from './app.imports';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_teams_teams__["a" /* TeamsPage */],
            ],
            imports: [
                //MODULES,
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/accordion-list/accordion-list.module#AccordionListPageModule', name: 'AccordionListPage', segment: 'accordion-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/alert/alert.module#AlertsPageModule', name: 'AlertsPage', segment: 'alert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/button/button.module#ButtonsListPageModule', name: 'ButtonsListPage', segment: 'button', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/card/card-background/card-background.module#CardBackgroundPageModule', name: 'CardBackgroundPage', segment: 'card-background', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/card/card-image/card-image.module#CardImagePageModule', name: 'CardImagePage', segment: 'card-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/card/card-badge/card-badge.module#CardBadgePageModule', name: 'CardBadgePage', segment: 'card-badge', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/card/card-map/card-map.module#CardMapPageModule', name: 'CardMapPage', segment: 'card-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/card/card-social/card-social.module#CardSocialPageModule', name: 'CardSocialPage', segment: 'card-social', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/card/card.module#CardListPageModule', name: 'CardsListPage', segment: 'card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-official-components/ionic-official-components.module#IonicOfficialComponentsPageModule', name: 'IonicOfficialComponentsPage', segment: 'ionic-official-components', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/crypto-list/crypto-list.module#CryptoListPageModule', name: 'CryptoListPage', segment: 'crypto-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/delete-items/delete-items.module#DeleteItemsPageModule', name: 'DeleteItemsPage', segment: 'delete-items', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListsPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/settings/settings.module#SettingsListPageModule', name: 'SettingsListPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/sliding-item/sliding-item.module#SlidingItemPageModule', name: 'SlidingItemPage', segment: 'sliding-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login-background-slider/login-background-slider.module#LoginBackgroundSliderPageModule', name: 'LoginBackgroundSliderPage', segment: 'login-background-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login-background-video/login-background-video.module#LoginBackgroundVideoPageModule', name: 'LoginBackgroundVideoPage', segment: 'login-background-video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login-instagram/login-instagram.module#LoginInstagramPageModule', name: 'LoginInstagramPage', segment: 'login-instagram', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login-one/login-one.module#LoginOnePageModule', name: 'LoginOnePage', segment: 'login-one', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login-slider/login-slider.module#LoginSliderPageModule', name: 'LoginSliderPage', segment: 'login-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginListPageModule', name: 'LoginListPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-fab/popup-fab-modal/popup-fab-modal.module#PopupFabModalPageModule', name: 'PopupFabModalPage', segment: 'popup-fab-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-fab/popup-fab.module#PopupFabPageModule', name: 'PopupFabPage', segment: 'popup-fab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-menu/popup-menu-one/popup-menu-one.module#PopupMenuOnePageModule', name: 'PopupMenuOnePage', segment: 'popup-menu-one', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-menu/popup-menu-two/popup-menu-two.module#PopupMenuTwoPageModule', name: 'PopupMenuTwoPage', segment: 'popup-menu-two', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-menu/popup-menu.module#PopupMenuListPageModule', name: 'PopupMenuListPage', segment: 'popup-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-modal/hint-modal/hint-modal.module#HintModalPageModule', name: 'HintModalPage', segment: 'hint-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-modal/popup-modal.module#PopupModalPageModule', name: 'PopupModalsPage', segment: 'popup-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-modal/signup-modal/signup-modal.module#SignupModalPageModule', name: 'SignupModalPage', segment: 'signup-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popup-modal/walkthrough-modal/walkthrough-modal.module#WalkthroughModalPageModule', name: 'WalkthroughModalPage', segment: 'walkthrough-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-carousel/slide-carousel.module#SlideCarouselPageModule', name: 'SlideCarouselPage', segment: 'slide-carousel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-color-changing/slide-color-changing.module#SlideColorChangingPageModule', name: 'SlideColorChangingPage', segment: 'slide-color-changing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-custom-pagination/slide-custom-pagination.module#SlideCustomPaginationPageModule', name: 'SlideCustomPaginationPage', segment: 'slide-custom-pagination', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-free-mode/slide-free-mode.module#SlideFreeModePageModule', name: 'SlideFreeModePage', segment: 'slide-free-mode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-nested/slide-nested.module#SlideNestedPageModule', name: 'SlideNestedPage', segment: 'slide-nested', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-photo-gallery/slide-photo-gallery.module#SlidePhotoGalleryPageModule', name: 'SlidePhotoGalleryPage', segment: 'slide-photo-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-rtl/slide-rtl.module#SlideRightToLeftPageModule', name: 'SlideRightToLeftPage', segment: 'slide-rtl', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-transitions/slide-transitions.module#SlideTransitionsPageModule', name: 'SlideTransitionsPage', segment: 'slide-transitions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide-walkthrough/slide-walkthrough.module#SlideWalkthroughPageModule', name: 'SlideWalkthroughPage', segment: 'slide-walkthrough', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slider-list/slider-list.module#SliderListPageModule', name: 'SliderListPage', segment: 'slider-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slider-with-arrows/slider-with-arrows.module#SliderWithArrowsPageModule', name: 'SliderWithArrowsPage', segment: 'slider-with-arrows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teams/teams.module#TeamsPageModule', name: 'TeamsPage', segment: 'teams', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timeline/timeline.module#TimelinePageModule', name: 'TimelinePage', segment: 'timeline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slides.module#SlidesPageModule', name: 'SlidesPage', segment: 'slides', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__shared_module__["a" /* SharedModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_teams_teams__["a" /* TeamsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sliding_drawer_sliding_drawer__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_autosize_autosize__ = __webpack_require__(264);
// Global state (used for theming)
//import { AppState } from './app.global';
// Providers
//import { ToastService } from '../providers/util/toast.service';
//import { AlertService } from '../providers/util/alert.service';
//import { CameraProvider } from '../providers/util/camera.provider';
//import { NativeGoogleMapsProvider } from '../providers/native-google-maps/native-google-maps';
// Ionic native providers
//import { CardIO } from '@ionic-native/card-io';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { Camera } from '@ionic-native/camera';
//import { Diagnostic } from '@ionic-native/diagnostic';
//import { Geolocation } from '@ionic-native/geolocation';
//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';
//import { GoogleMaps } from '@ionic-native/google-maps';
// Directives


// Modules
//import { SwingModule } from 'angular2-swing';
//import { BrowserModule } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';
//export const MODULES = [
//SwingModule,
//BrowserModule,
//HttpClientModule,
//];
//export const PROVIDERS = [
//AlertService,
//ToastService,
//AppState,
//CameraProvider,
//NativeGoogleMapsProvider,
// Ionic native specific providers
//BarcodeScanner,
//Camera,
//Diagnostic,
//Geolocation,
//CardIO,
//StatusBar,
//SplashScreen,
//GoogleMaps,
//];
var DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__components_sliding_drawer_sliding_drawer__["a" /* SlidingDrawer */],
    __WEBPACK_IMPORTED_MODULE_1__components_autosize_autosize__["a" /* Autosize */],
];
//# sourceMappingURL=app.imports.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidingDrawer; });
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


var SlidingDrawer = /** @class */ (function () {
    function SlidingDrawer(element, renderer, domCtrl, platform) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.platform = platform;
        this.handleHeight = 50;
        this.bounceBack = true;
        this.thresholdTop = 200;
        this.thresholdBottom = 200;
    }
    SlidingDrawer.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.options.handleHeight) {
            this.handleHeight = this.options.handleHeight;
        }
        if (this.options.bounceBack) {
            this.bounceBack = this.options.bounceBack;
        }
        if (this.options.thresholdFromBottom) {
            this.thresholdBottom = this.options.thresholdFromBottom;
        }
        if (this.options.thresholdFromTop) {
            this.thresholdTop = this.options.thresholdFromTop;
        }
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.platform.height() - this.handleHeight + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'padding-top', this.handleHeight + 'px');
        var hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_VERTICAL });
        hammer.on('pan', function (ev) {
            _this.handlePan(ev);
        });
    };
    SlidingDrawer.prototype.handlePan = function (ev) {
        var _this = this;
        var newTop = ev.center.y;
        var bounceToBottom = false;
        var bounceToTop = false;
        if (this.bounceBack && ev.isFinal) {
            var topDiff = newTop - this.thresholdTop;
            var bottomDiff = (this.platform.height() - this.thresholdBottom) - newTop;
            topDiff >= bottomDiff ? bounceToBottom = true : bounceToTop = true;
        }
        if ((newTop < this.thresholdTop && ev.additionalEvent === 'panup') || bounceToTop) {
            this.domCtrl.write(function () {
                _this.renderer.setElementStyle(_this.element.nativeElement, 'transition', 'top 0.5s');
                _this.renderer.setElementStyle(_this.element.nativeElement, 'top', '0px');
            });
        }
        else if (((this.platform.height() - newTop) < this.thresholdBottom && ev.additionalEvent === 'pandown')
            || bounceToBottom) {
            this.domCtrl.write(function () {
                _this.renderer.setElementStyle(_this.element.nativeElement, 'transition', 'top 0.5s');
                _this.renderer.setElementStyle(_this.element.nativeElement, 'top', _this.platform.height() - _this.handleHeight + 'px');
            });
        }
        else {
            this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'none');
            if (newTop > 0 && newTop < (this.platform.height() - this.handleHeight)) {
                if (ev.additionalEvent === 'panup' || ev.additionalEvent === 'pandown') {
                    this.domCtrl.write(function () {
                        _this.renderer.setElementStyle(_this.element.nativeElement, 'top', newTop + 'px');
                    });
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('options'),
        __metadata("design:type", Object)
    ], SlidingDrawer.prototype, "options", void 0);
    SlidingDrawer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sliding-drawer',template:/*ion-inline-start:"C:\Users\User\Desktop\app1\src\components\sliding-drawer\sliding-drawer.html"*/'<ion-content>\n  <ng-content></ng-content>\n</ion-content>'/*ion-inline-end:"C:\Users\User\Desktop\app1\src\components\sliding-drawer\sliding-drawer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* DomController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], SlidingDrawer);
    return SlidingDrawer;
}());

//# sourceMappingURL=sliding-drawer.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autosize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Autosize = /** @class */ (function () {
    function Autosize(element) {
        this.element = element;
    }
    Autosize.prototype.onInput = function (textArea) {
        this.adjust();
    };
    Autosize.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    Autosize.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], Autosize.prototype, "onInput", null);
    Autosize = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'ion-textarea[autosize]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], Autosize);
    return Autosize;
}());

//# sourceMappingURL=autosize.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_teams_teams__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*//import { AccordionListPage } from '../pages/accordion-list/accordion-list';
//import { IonicOfficialComponentsPage } from '../pages/ionic-official-components/ionic-official-components';*/


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashscreen, menuCtrl) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashscreen = splashscreen;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.activePage = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], active: true, icon: 'home' },
            { title: 'Teams', component: __WEBPACK_IMPORTED_MODULE_5__pages_teams_teams__["a" /* TeamsPage */], active: false, icon: 'book' }
            /*//{ title: 'Accordion List', component: AccordionListPage, active: false, icon: 'map' },
            //{ title: 'Ionic Official Components',
              //component: 'IonicOfficialComponentsPage', active: false, icon: 'ionic' },
            //{ title: 'Ionic Native Features', component: 'IonicNativePage', active: false, icon: 'ionic' },
            //{ title: 'Login', component: 'LoginListPage', active: false, icon: 'archive' },
            //{ title: 'Lists', component: 'ListPage', active: false, icon: 'body' },
            //{ title: 'Miscellaneous', component: 'MiscellaneousListPage', active: false, icon: 'bookmarks' },
            //{ title: 'Modal with Navigation', component: 'ModalWithNavigationPage', active: false, icon: 'book' },
            //{ title: 'Popup Fab', component: 'PopupFabPage', active: false, icon: 'map' },
            //{ title: 'Popup Modal', component: 'PopupModalsPage', active: false, icon: 'basket' },
            //{ title: 'Popup Menu', component: 'PopupMenuListPage', active: false, icon: 'beer' },
            //{ title: 'Timeline', component: 'TimelinePage', active: false, icon: 'calendar' },
            //{ title: 'Slides', component: 'SlidesPage', active: false, icon: 'contact' },*/
        ];
        this.activePage.subscribe(function (selectedPage) {
            _this.pages.map(function (page) {
                page.active = page.title === selectedPage.title;
            });
        });
        /*
        platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          statusBar.styleDefault();
          splashScreen.hide();
        });*/
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashscreen.hide();
            _this.menuCtrl.enable(false, 'right');
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage.next(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\User\Desktop\app1\src\app\app.html"*/'<!--Default Menu-->\n  <ion-menu [content]="content" id="menu-components">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" [class.highlight]="p.active" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  <ion-nav [root]="rootPage" #content></ion-nav>'/*ion-inline-end:"C:\Users\User\Desktop\app1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.drawerOptions = {
            handleHeight: 50,
            thresholdFromBottom: 200,
            thresholdFromTop: 200,
            bounceBack: true
        };
        //this.rootPage = 'HomePage';
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\User\Desktop\app1\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="margin-left: auto; margin-right: auto; text-align: center;">\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n<img style="display: block; width: 62%; height: 86%; margin-left: auto; margin-right: auto;" src="assets/imgs/dastatuslogo.jpg">\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\app1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map