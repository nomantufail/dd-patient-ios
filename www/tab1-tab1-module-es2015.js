(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title color=\"warning\">Profile</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <div class=\"image-container\">\n        <img src=\"/assets/images/profile.png\" class=\"rounded-circle img-responsive center-block\" style=\"margin: auto\" alt=\"Acme User\">\n    </div>\n    <h4>Acme User</h4>\n\n    <ion-list>\n        <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n                <ion-text>\n                    <h3 style=\"font-size: larger\">Phone</h3>\n                </ion-text>\n                <p>+923154379760</p>\n            </ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n                <ion-text>\n                    <h3 style=\"font-size: larger\">Emirates ID</h3>\n                </ion-text>\n                <p>6541-23-49790</p>\n            </ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n                <ion-text>\n                    <h3 style=\"font-size: larger\">Address</h3>\n                </ion-text>\n                <p>Lahore, Punjab, Pakistan</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n    <div class=\"d-flex justify-content-center\">\n        <ion-chip routerLink=\"/login\" outline=\"true\">\n            <ion-icon name=\"log-out-outline\"></ion-icon>\n            <ion-label>Logout</ion-label>\n        </ion-chip>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* * {\n  text-align: center;\n}\n\n.d-flex.justify-content-center {\n  margin-top: 10px;\n}\n\n.image-container, .image-container img {\n  width: 100px;\n  height: 100px;\n}\n\n.image-container img {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\nion-list ion-title h3 {\n  font-size: larger;\n}\n\nion-list ion-label p {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub21hbnR1ZmFpbC93b3Jrc3BhY2UvaW9uaWMvZGQtcGF0aWVudC9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDR0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVFO0VBQ0UsaUJBQUE7QUNDSjs7QURDRTtFQUNFLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiAqIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmQtZmxleC5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5pbWFnZS1jb250YWluZXIsIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLmltYWdlLWNvbnRhaW5lciB7XG4gIC8vbWFyZ2luLXRvcDogMjBweDtcbn1cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuaW9uLWxpc3Qge1xuICBpb24tdGl0bGUgaDMge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICB9XG4gIGlvbi1sYWJlbCBwIHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG59XG4iLCIqICoge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kLWZsZXguanVzdGlmeS1jb250ZW50LWNlbnRlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pbWFnZS1jb250YWluZXIsIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW9uLWxpc3QgaW9uLXRpdGxlIGgzIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5pb24tbGlzdCBpb24tbGFiZWwgcCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tab1Page = class Tab1Page {
    constructor() { }
};
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map