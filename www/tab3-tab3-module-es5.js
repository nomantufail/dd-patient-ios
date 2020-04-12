function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"warning\">Cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"cartService.checkedOut\" class=\"alert alert-success\" role=\"alert\">\n    <h4 class=\"alert-heading\">Order Placed!</h4>\n    <p>Your items will be delivered to your door step within 48 hours.</p>\n    <hr>\n    <p class=\"mb-0\">In case of any problem or complain please contact us at +923154646530. Thank you.</p>\n  </div>\n  <div class=\"container\">\n    <div class=\"row ion-margin-top\" *ngFor=\"let item of cartService.items\">\n      <div class=\"col-5\">\n        <ion-thumbnail>\n          <ion-img [src]=\"item.img\"></ion-img>\n        </ion-thumbnail>\n      </div>\n      <div class=\"col\">\n        <div>\n          <ion-label>{{item.title}}</ion-label>\n        </div>\n        <div>\n          <ion-note>${{item.price}}</ion-note> x <input type=\"number\" placeholder=\"Qty\" class=\"qty-input\" (ngModelChange)=\"calculateTotal()\" [(ngModel)]=\"item.qty\">\n        </div>\n        <div>\n          <ion-icon (click)=\"remove(item)\" name=\"trash-outline\" color=\"danger\"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class=\"navbar\" *ngIf=\"cartService.items.length\">\n      <strong>Total: ${{totalAmount}}</strong>\n      <button class=\"btn btn-success\" (click)=\"checkout()\"><ion-icon name=\"pencil-outline\"></ion-icon> Checkout</button>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }])],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header * {\n  text-align: center;\n}\n\nion-thumbnail {\n  min-height: 100px;\n  width: 100px;\n}\n\nion-thumbnail ion-img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.qty-input {\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub21hbnR1ZmFpbC93b3Jrc3BhY2UvaW9uaWMvZGQtcGF0aWVudC9zcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDRUY7O0FEREU7RUFDRSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsMEJBQUE7S0FBQSx1QkFBQTtBQ0dKOztBREFBO0VBQ0UsV0FBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgKiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi10aHVtYm5haWwge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBpb24taW1nIHtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG59XG4ucXR5LWlucHV0IHtcbiAgd2lkdGg6IDgwcHg7XG59XG4iLCJpb24taGVhZGVyICoge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuaW9uLXRodW1ibmFpbCBpb24taW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5xdHktaW5wdXQge1xuICB3aWR0aDogODBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var Tab3Page = /*#__PURE__*/function () {
      function Tab3Page(cartService, productService, alertController) {
        _classCallCheck(this, Tab3Page);

        this.cartService = cartService;
        this.productService = productService;
        this.alertController = alertController;
        this.totalAmount = 0;
      }

      _createClass(Tab3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.calculateTotal();
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(options) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create(options);

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "calculateTotal",
        value: function calculateTotal() {
          var _this = this;

          this.totalAmount = 0;
          this.cartService.items.forEach(function (item) {
            _this.totalAmount += item.price * item.qty;
          });
        }
      }, {
        key: "remove",
        value: function remove(item) {
          var _this2 = this;

          this.presentAlert({
            header: 'Confirm!',
            message: 'Are you sure!',
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: function handler(blah) {}
            }, {
              text: 'Remove',
              handler: function handler() {
                _this2.cartService.removeItem(item);
              }
            }]
          });
        }
      }, {
        key: "checkout",
        value: function checkout() {
          this.productService.products.forEach(function (product) {
            product.inCart = false;
          });
          this.cartService.items = [];
          this.cartService.checkedOut = true;
        }
      }]);

      return Tab3Page;
    }();

    Tab3Page.ctorParameters = function () {
      return [{
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map