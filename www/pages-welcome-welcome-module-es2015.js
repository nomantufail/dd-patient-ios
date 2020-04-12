(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-margin-top\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-4 col-xs-5\">\n                <div class=\"wrimagecard wrimagecard-topimage\">\n                    <a routerLink=\"/home/tab1\">\n                        <div class=\"container\">\n                            <div class=\"row\">\n                                <div class=\"col-4 wrimagecard-topimage_header container\" style=\"background-color:rgba(187, 120, 36, 0.1)\" >\n                                    <i class=\"fas fa-user\" style=\"color:#BB7824; font-size: 50px\"></i>\n                                </div>\n                                <div class=\"col\" style=\"align-items: center\">\n                                    <h5 class=\"home-widget-title\">Profile</h5>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4 col-xs-5\">\n                <div class=\"wrimagecard wrimagecard-topimage\">\n                    <a (click)=\"underDelopment()\">\n                        <div class=\"container\">\n                            <div class=\"row\">\n                                <div class=\"col-4 wrimagecard-topimage_header container\" style=\"background-color:rgba(22, 160, 133, 0.1)\" >\n                                    <i class=\"fas fa-cubes\" style=\"color:#16A085; font-size: 50px\"></i>\n                                </div>\n                                <div class=\"col\" style=\"align-items: center\">\n                                    <h5 class=\"home-widget-title\">Orders</h5>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4\">\n                <div class=\"wrimagecard wrimagecard-topimage\">\n                    <a (click)=\"underDelopment()\">\n                        <div class=\"container\">\n                            <div class=\"row\">\n                                <div class=\"col-4 wrimagecard-topimage_header container\" style=\"background-color:rgba(213, 15, 37, 0.1)\" >\n                                    <i class=\"fas fa-stethoscope\" style=\"color:#fabc09; font-size: 50px\"></i>\n                                </div>\n                                <div class=\"col\" style=\"align-items: center\">\n                                    <h5 class=\"home-widget-title\">Appointments</h5>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4\">\n                <div class=\"wrimagecard wrimagecard-topimage\">\n                    <a routerLink=\"/home/tab2\">\n                        <div class=\"container\">\n                            <div class=\"row\">\n                                <div class=\"col-4 wrimagecard-topimage_header container\" style=\"background-color:rgba(121, 90, 71, 0.1)\" >\n                                    <i class=\"fas fa-pills\" style=\"color:#795a47; font-size: 50px\"></i>\n                                </div>\n                                <div class=\"col\" style=\"align-items: center\">\n                                    <h5 class=\"home-widget-title\">Shop</h5>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-md-3 col-sm-4\">\n                <div class=\"wrimagecard wrimagecard-topimage\">\n                    <a routerLink=\"/home/tab3\">\n                        <div class=\"container\">\n                            <div class=\"row\">\n                                <div class=\"col-4 wrimagecard-topimage_header container\" style=\"background-color:rgba(130, 93, 9, 0.1)\" >\n                                    <i class=\"fas fa-shopping-cart\" style=\"color:#825d09; font-size: 50px\"></i>\n                                </div>\n                                <div class=\"col\" style=\"align-items: center\">\n                                    <h5 class=\"home-widget-title\">Cart</h5>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/welcome/welcome-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function() { return WelcomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/welcome/welcome.page.ts");




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/welcome/welcome.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/pages/welcome/welcome-routing.module.ts");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/welcome/welcome.page.ts");







let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  margin-top: 40px;\n}\n\n.container-fluid .home-widget-title {\n  line-height: 80px;\n}\n\nion-badge {\n  border-radius: 50%;\n  width: 25px;\n}\n\n.wrimagecard {\n  margin-top: 0;\n  margin-bottom: 1.5rem;\n  text-align: left;\n  position: relative;\n  background: #fff;\n  box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);\n  border-radius: 4px;\n  transition: all 0.3s ease;\n}\n\n.wrimagecard .fa {\n  position: relative;\n  font-size: 70px;\n}\n\n.wrimagecard-topimage_header {\n  padding: 20px;\n}\n\na.wrimagecard:hover, .wrimagecard-topimage:hover {\n  box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);\n}\n\n.wrimagecard-topimage a {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.wrimagecard-topimage_title {\n  padding: 20px 24px;\n  height: 80px;\n  padding-bottom: 0.75rem;\n  position: relative;\n}\n\n.wrimagecard-topimage a {\n  border-bottom: none;\n  text-decoration: none;\n  color: #525c65;\n  transition: color 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub21hbnR1ZmFpbC93b3Jrc3BhY2UvaW9uaWMvZGQtcGF0aWVudC9zcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7QUNFRjs7QURBQTtFQUtFLGtCQUFBO0VBQ0EsV0FBQTtBQ0RGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscURBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7QUNFRjs7QURBQTtFQUNFLGlEQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURIQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5jb250YWluZXItZmx1aWQgLmhvbWUtd2lkZ2V0LXRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG59XG5pb24tYmFkZ2Uge1xuICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy9yaWdodDogMzNweDtcbiAgLy90b3A6IDE3cHg7XG4gIC8vZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyNXB4O1xufVxuLndyaW1hZ2VjYXJke1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMTJweCAxNXB4IDIwcHggMHB4IHJnYmEoNDYsNjEsNzMsMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi53cmltYWdlY2FyZCAuZmF7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA3MHB4O1xufVxuLndyaW1hZ2VjYXJkLXRvcGltYWdlX2hlYWRlcntcbiAgcGFkZGluZzogMjBweDtcbn1cbmEud3JpbWFnZWNhcmQ6aG92ZXIsIC53cmltYWdlY2FyZC10b3BpbWFnZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCA0cHggOHB4IDBweCByZ2JhKDQ2LDYxLDczLDAuMik7XG59XG4ud3JpbWFnZWNhcmQtdG9waW1hZ2UgYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLndyaW1hZ2VjYXJkLXRvcGltYWdlX3RpdGxlIHtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud3JpbWFnZWNhcmQtdG9waW1hZ2UgYSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM1MjVjNjU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcbn1cbiIsIi5jb250YWluZXItZmx1aWQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uY29udGFpbmVyLWZsdWlkIC5ob21lLXdpZGdldC10aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xufVxuXG5pb24tYmFkZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4ud3JpbWFnZWNhcmQge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMTJweCAxNXB4IDIwcHggMHB4IHJnYmEoNDYsIDYxLCA3MywgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLndyaW1hZ2VjYXJkIC5mYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA3MHB4O1xufVxuXG4ud3JpbWFnZWNhcmQtdG9waW1hZ2VfaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuYS53cmltYWdlY2FyZDpob3ZlciwgLndyaW1hZ2VjYXJkLXRvcGltYWdlOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDRweCA4cHggMHB4IHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbn1cblxuLndyaW1hZ2VjYXJkLXRvcGltYWdlIGEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLndyaW1hZ2VjYXJkLXRvcGltYWdlX3RpdGxlIHtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi53cmltYWdlY2FyZC10b3BpbWFnZSBhIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzUyNWM2NTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.ts ***!
  \***********************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let WelcomePage = class WelcomePage {
    constructor(alertController) {
        this.alertController = alertController;
    }
    ngOnInit() { }
    presentAlert(section) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Under Development',
                message: section + ' area is under development',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    underDelopment(section = 'this') {
        this.presentAlert(section);
    }
};
WelcomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.page.scss */ "./src/app/pages/welcome/welcome.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module-es2015.js.map