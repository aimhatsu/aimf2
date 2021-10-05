(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
    /***/
    "MJr+": function MJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var TabsPage = function TabsPage() {
        _classCallCheck(this, TabsPage);
      };

      TabsPage.ɵfac = function TabsPage_Factory(t) {
        return new (t || TabsPage)();
      };

      TabsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TabsPage,
        selectors: [["app-tabs"]],
        decls: 18,
        vars: 0,
        consts: [["slot", "bottom", 1, "tabs-bg"], [2, "width", "100%"], ["size", "4"], ["tab", "dashboard", 1, "tabs-btn"], ["name", "pulse"], ["tab", "pacientes", 1, "tabs-btn"], ["name", "happy"], ["tab", "data", 1, "tabs-btn"], ["name", "cloud-outline"]],
        template: function TabsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-tab-bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-tab-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-tab-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pacientes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-col", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-tab-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ion-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]],
        styles: [".tabs-bg[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(266deg, #2694A3 0%, #01426A 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px -5px 30px #505C6229;\n  opacity: 1;\n}\n\n.tabs-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFHQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicy1iZ3tcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjY2ZGVnLCAjMjY5NEEzIDAlLCAjMDE0MjZBIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBib3gtc2hhZG93OiAwcHggLTVweCAzMHB4ICM1MDVDNjIyOTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4udGFicy1idG57XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tabs',
            templateUrl: 'tabs.page.html',
            styleUrls: ['tabs.page.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "hO9l": function hO9l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "kB8F");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: TabsPageModule
      });
      TabsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function TabsPageModule_Factory(t) {
          return new (t || TabsPageModule)();
        },
        imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabsPageModule, {
          declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]],
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabsPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"]],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kB8F": function kB8F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"],
        children: [{
          path: 'dashboard',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | dashboard-dashboard-module */
              [__webpack_require__.e("default~dashboard-dashboard-module~pacientes-pacientes-module~prontuario-prontuario-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
              /*! ../dashboard/dashboard.module */
              "TDBs")).then(function (m) {
                return m.DashboardPageModule;
              });
            }
          }]
        }, {
          path: 'pacientes',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pacientes-pacientes-module */
              [__webpack_require__.e("default~dashboard-dashboard-module~pacientes-pacientes-module~prontuario-prontuario-module"), __webpack_require__.e("pacientes-pacientes-module")]).then(__webpack_require__.bind(null,
              /*! ../pacientes/pacientes.module */
              "sPQD")).then(function (m) {
                return m.PacientesPageModule;
              });
            }
          }]
        }, {
          path: 'data',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | data-data-module */
              "data-data-module").then(__webpack_require__.bind(null,
              /*! ../data/data.module */
              "MgIx")).then(function (m) {
                return m.DataPageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/tabs/dashboard',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TabsPageRoutingModule
      });
      TabsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TabsPageRoutingModule_Factory(t) {
          return new (t || TabsPageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsPageRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=tabs-tabs-module-es5.js.map