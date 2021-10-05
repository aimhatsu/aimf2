(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pacientes-pacientes-module"], {
    /***/
    "sPQD":
    /*!***********************************************!*\
      !*** ./src/app/pacientes/pacientes.module.ts ***!
      \***********************************************/

    /*! exports provided: PacientesPageModule */

    /***/
    function sPQD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PacientesPageModule", function () {
        return PacientesPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/components.module */
      "j1ZV");
      /* harmony import */


      var _pacientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pacientes.page */
      "wuyq");
      /* harmony import */


      var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-circle-progress */
      "K1R0");

      var routes = [{
        path: '',
        component: _pacientes_page__WEBPACK_IMPORTED_MODULE_6__["PacientesPage"]
      }];

      var PacientesPageModule = function PacientesPageModule() {
        _classCallCheck(this, PacientesPageModule);
      };

      PacientesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PacientesPageModule
      });
      PacientesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PacientesPageModule_Factory(t) {
          return new (t || PacientesPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"].forRoot({
          // set defaults here
          radius: 35,
          outerStrokeWidth: 10,
          innerStrokeWidth: 10,
          outerStrokeColor: "#2694A3",
          innerStrokeColor: "#2694A3",
          animationDuration: 300
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PacientesPageModule, {
          declarations: [_pacientes_page__WEBPACK_IMPORTED_MODULE_6__["PacientesPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PacientesPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"].forRoot({
              // set defaults here
              radius: 35,
              outerStrokeWidth: 10,
              innerStrokeWidth: 10,
              outerStrokeColor: "#2694A3",
              innerStrokeColor: "#2694A3",
              animationDuration: 300
            })],
            declarations: [_pacientes_page__WEBPACK_IMPORTED_MODULE_6__["PacientesPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wuyq":
    /*!*********************************************!*\
      !*** ./src/app/pacientes/pacientes.page.ts ***!
      \*********************************************/

    /*! exports provided: PacientesPage */

    /***/
    function wuyq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PacientesPage", function () {
        return PacientesPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/storage/storage.service */
      "E2f4");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! chart.js */
      "MO+k");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _components_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/user-bar/user-bar.component */
      "Rw8l");
      /* harmony import */


      var ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-circle-progress */
      "K1R0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PacientesPage_h4_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " PACIENTES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.geralpoint, " MEUS ");
        }
      }

      function PacientesPage_h4_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "POPULA\xC7\xC3O ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " GLOBAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PacientesPage_ion_col_77_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Historic 360");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xDAltima an\xE1lise em: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-col", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PacientesPage_ion_col_77_Template_img_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.get_emot();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PacientesPage_ion_col_77_Template_img_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.get_corpo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PacientesPage_ion_col_77_Template_img_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.get_mente();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "canvas", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-row", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-col", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PacientesPage_ion_col_77_Template_ion_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var item_r3 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.openProntuario(item_r3, "body");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ion-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "PRONTU\xC1RIO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r3.nome, " ", item_r3.snome, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "id", item_r3._id.$oid, "");
        }
      }

      var PacientesPage = /*#__PURE__*/function () {
        function PacientesPage(api, storage, navCtrl) {
          _classCallCheck(this, PacientesPage);

          this.api = api;
          this.storage = storage;
          this.navCtrl = navCtrl;
          this.pacientes = [];
          this.date = new Date();
          this.year = this.date.getFullYear();
          this.monthIndex = this.date.getMonth();
          this.loadUserData();
          this.loadTotals();
          this.loadPacientes();
        }

        _createClass(PacientesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loadUserData",
          value: function loadUserData() {
            var _this = this;

            this.storage.get('mia_user_data').then(function (user) {
              _this.userData = user;
            });
          }
        }, {
          key: "loadPacientes",
          value: function loadPacientes() {
            var _this2 = this;

            //get /totalpati
            this.api.get('seepati').then(function (res) {
              console.log(res);

              if (res) {
                res.subscribe(function (data) {
                  console.log("pacientes > ", data);
                  _this2.pacientes = data;
                  data.forEach(function (el) {
                    //this.loadChart(el._id, dataset)
                    setTimeout(function () {
                      _this2.loadChart("id" + el._id.$oid, {
                        labels: ['Corpo', 'Mente', 'Emoções'],
                        datasets: [{
                          backgroundColor: "#F1B4AE",
                          borderColor: "#2694a3",
                          pointBackgroundColor: "#2694a3",
                          data: [el.corpo, el.mente, el.emocoes]
                        }]
                      });
                    }, 1000);
                  });
                }, function (err) {
                  console.log(err);

                  _this2.api.proccessError(err);
                });
              }
            });
          }
        }, {
          key: "get_corpo",
          value: function get_corpo() {
            var _this3 = this;

            this.api.get('prontuario/today/corpo').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("Corpo > ", data);
                }, function (err) {
                  console.log("Corpo API error -> ", err);

                  _this3.api.proccessError(err);
                });
              }
            });
          }
        }, {
          key: "get_mente",
          value: function get_mente() {
            var _this4 = this;

            this.api.get('prontuario/today/mente').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("Mente > ", data);
                }, function (err) {
                  console.log("Mente API error -> ", err);

                  _this4.api.proccessError(err);
                });
              }
            });
          }
        }, {
          key: "get_emot",
          value: function get_emot() {
            var _this5 = this;

            this.api.get('prontuario/today/emocoes').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("Emot > ", data);
                }, function (err) {
                  console.log("Emot API error -> ", err);

                  _this5.api.proccessError(err);
                });
              }
            });
          }
        }, {
          key: "loadChart",
          value: function loadChart(canvas, data) {
            var ctx = document.getElementById(canvas);
            new chart_js__WEBPACK_IMPORTED_MODULE_4___default.a(ctx, {
              type: 'radar',
              data: data,
              options: {
                legend: {
                  position: 'bottom',
                  display: false
                },
                maintainAspectRatio: true,
                spanGaps: false,
                elements: {
                  line: {
                    tension: 0.000001
                  }
                },
                plugins: {
                  filler: {
                    propagate: false
                  },
                  'samples-filler-analyser': {
                    target: 'chart-analyser'
                  }
                }
              }
            });
          }
        }, {
          key: "loadTotals",
          value: function loadTotals() {
            var _this6 = this;

            //get /totalpati
            this.api.get('totalpati').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("totalpati > ", data);
                  _this6.totalpati = data && data[0] && data[0].totalpatients ? data[0].totalpatients : '0';
                }, function (err) {
                  console.log(err);

                  _this6.api.proccessError(err);
                });
              }
            }); //get /geralpoint

            this.api.get('geralpoint').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("geralpoint > ", data);
                  _this6.geralpoint = data && data[0] && data[0].mediafinal ? data[0].mediafinal.$numberDecimal : '0';
                }, function (err) {
                  console.log(err);

                  _this6.api.proccessError(err);
                });
              }
            }); //get /globalpoint

            this.api.get('globalpoint').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("globalpoint > ", data);
                  _this6.globalpoint = data && data[0] && data[0].mediafinal ? data[0].mediafinal : '0';
                }, function (err) {
                  console.log(err);

                  _this6.api.proccessError(err);
                });
              }
            }); //get /instaveis

            this.api.get('instavel').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("instaveis > ", data);
                  _this6.instaveis = data && data[0] && data[0].PacientesInstaveis ? data[0].PacientesInstaveis : '0';
                }, function (err) {
                  console.log(err);

                  _this6.api.proccessError(err);
                });
              }
            }); //get /estaveis

            this.api.get('estavel').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("estaveis > ", data);
                  _this6.estaveis = data && data[0] && data[0].PacientesEstaveis ? data[0].PacientesEstaveis : '0';
                }, function (err) {
                  console.log(err);

                  _this6.api.proccessError(err);
                });
              }
            }); //get /inativos

            this.api.get('inativo').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("inativos > ", data);
                  _this6.inativos = data && data[0] && data[0].PacientesEstaveis ? data[0].PacientesEstaveis : '0';
                }, function (err) {
                  console.log(err);

                  _this6.api.proccessError(err);
                });
              }
            });
          }
        }, {
          key: "openProntuario",
          value: function openProntuario(item, category) {
            var navigationExtras = {
              queryParams: {
                patientId: item._id.$oid,
                category: category,
                year: this.year,
                month: this.monthIndex
              }
            };
            this.navCtrl.navigateForward('prontuario', navigationExtras);
          }
        }]);

        return PacientesPage;
      }();

      PacientesPage.ɵfac = function PacientesPage_Factory(t) {
        return new (t || PacientesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]));
      };

      PacientesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PacientesPage,
        selectors: [["app-pacientes"]],
        decls: 78,
        vars: 36,
        consts: [[1, "toolbar-bg"], ["src", "../../assets/images/mia-wht.png", "width", "200", "alt", ""], ["slot", "end", 1, "ion-text-right"], ["wrap-box", ""], [1, "ion-no-padding"], [1, "sub-toolbar"], ["size", "8"], ["size", "4"], ["lines", "none", 1, "search-bar"], ["type", "text", "placeholder", "Pesquise pacientes por nome ou CPF...", 1, "search-input"], ["ios", "ios-search", "md", "md-search", 1, "searchbar-icon"], [1, "card-stats", 2, "margin-left", "0px"], ["size-md", "3", "size-sm", "3", "size-xs", "3", "size-lg", "3"], ["color", "primary", 1, "ion-text-center"], [2, "margin-top", "20px", "font-size", "22px"], [2, "color", "#9F9C9C !important", "font-size", "12px"], ["size-md", "2", "size-sm", "2", "size-lg", "2", "size-xs", "2", 2, "text-align", "center"], [3, "percent", "clockwise", "showTitle", "showSubtitle", "space", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "titleColor", "innerStrokeColor", "animation", "animationDuration", "showUnits"], ["size-md", "2.5", "size-sm", "2.5", "size-lg", "2.5", "size-xs", "2.5"], ["style", "color: #2694A3", "class", "h4-stats", 4, "ngIf"], ["style", "color: #EF9C92", "class", "h4-stats", 4, "ngIf"], [1, "card-stats"], ["size", "3"], ["lines", "none", 2, "border-right", "1px solid #999999"], ["color", "secondary", 1, "ion-text-center"], ["name", "sad", 1, "icon-stats"], [1, "p-stats"], ["name", "phone-portrait", 1, "icon-stats"], ["name", "logo-rss", 1, "icon-stats"], ["lines", "none"], ["name", "happy", 1, "icon-stats"], ["size", "4", 4, "ngFor", "ngForOf"], [1, "h4-stats", 2, "color", "#2694A3"], [1, "h4-stats", 2, "color", "#EF9C92"], [1, "slide-card"], ["src", "../../assets/images/person.png", 1, "slide-img"], ["size", "9"], [1, "h4-slide"], [1, "p-slide-title"], [1, "p-slide-subtitle"], ["size", "12"], ["src", "../../assets/images/mind-icon.png", 1, "mind-img", 3, "click"], ["src", "../../assets/images/body-icon.png", 1, "body-img", 3, "click"], ["src", "../../assets/images/emot-icon.png", 1, "emot-img", 3, "click"], ["width", "300", "height", "320", "responsive", "true", 2, "margin-top", "45px", 3, "id"], [2, "margin-top", "-12%"], ["size", "12", 2, "padding", "0px"], ["expand", "block", "color", "secondary", 1, "slide-btn", 3, "click"], ["slot", "start", "name", "heart", 2, "color", "#00000042"]],
        template: function PacientesPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-user-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-grid", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-row", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-col", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "TODOS OS PACIENTES ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Gerenciamento todos os seus pacientes em um \xFAnico lugar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-col", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ion-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-slides");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-col", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pacientes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-col", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "circle-progress", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-col", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PacientesPage_h4_34_Template, 5, 1, "h4", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-col", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "circle-progress", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-col", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PacientesPage_h4_38_Template, 5, 0, "h4", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ion-card", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ion-grid", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ion-col", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ion-item", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ion-label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "ion-icon", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "INST\xC1VEIS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ion-col", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ion-item", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ion-label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "ion-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "INATIVOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ion-col", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ion-item", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "ion-icon", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "BIOCONECTADOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ion-col", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ion-item", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "ion-icon", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "EST\xC1VEIS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, PacientesPage_ion_col_77_Template, 25, 3, "ion-col", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("2,108 ", ctx.totalpati, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("percent", ctx.geralpoint);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clockwise", false)("showTitle", true)("showSubtitle", false)("space", -10)("radius", 28)("outerStrokeWidth", 10)("innerStrokeWidth", 10)("outerStrokeColor", "#2694A3")("titleColor", "#2694A3")("innerStrokeColor", "#e7e8ea")("animation", true)("animationDuration", 300)("showUnits", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.geralpoint);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("percent", ctx.globalpoint);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clockwise", false)("showTitle", true)("showSubtitle", false)("space", -10)("radius", 28)("outerStrokeWidth", 10)("innerStrokeWidth", 10)("outerStrokeColor", "#EF9C92")("titleColor", "#EF9C92")("innerStrokeColor", "#e7e8ea")("animation", true)("animationDuration", 300)("showUnits", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.globalpoint);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("54 ", ctx.instaveis, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("321 ", ctx.inativos, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bioconectados || 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("1.300", ctx.estaveis, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pacientes);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _components_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_5__["UserBarComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__["CircleProgressComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]],
        styles: [".toolbar-bg[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(264deg, #2694A3 0%, #01426A 100%) 0% 0% no-repeat padding-box !important;\n  box-shadow: 0px 3px 20px #00000059;\n  display: flex;\n  margin: 0px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000029;\n  border-radius: 10px;\n}\n\n.searchbar-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #BCBCCB;\n  margin-right: 8px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  --placeholder-color: #43425D !important;\n}\n\n.card-stats[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin: 0px;\n}\n\n.p-stats[_ngcontent-%COMP%] {\n  color: #9F9C9C !important;\n  font-size: 10px;\n}\n\n.h4-stats[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 30px;\n}\n\n.icon-stats[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.slide-card[_ngcontent-%COMP%] {\n  margin: 0px;\n  height: 535px;\n  border-radius: 10px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 5px 5px 55px #505C6229;\n}\n\n.slide-card[_ngcontent-%COMP%]   .mind-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 355px;\n  left: 320px;\n  width: 70px;\n  height: 70px;\n}\n\n.slide-card[_ngcontent-%COMP%]   .emot-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 355px;\n  right: 320px;\n  width: 70px;\n  height: 70px;\n}\n\n.slide-card[_ngcontent-%COMP%]   .body-img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 70px;\n  height: 70px;\n  left: 165px;\n}\n\n.slide-img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 40px;\n}\n\n.h4-slide[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: left;\n  margin-top: 12px;\n  color: #238E9E;\n}\n\n.p-slide-title[_ngcontent-%COMP%] {\n  color: #3C3C3C;\n  text-align: left;\n}\n\n.p-slide-subtitle[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #00000059;\n}\n\n.slide-btn[_ngcontent-%COMP%] {\n  --border-radius: 10px;\n  font-weight: normal;\n  margin: 5px 0px 0px 0px;\n}\n\n.slide-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #3C3C3C !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFjaWVudGVzL3BhY2llbnRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnSEFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUNBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDUjs7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFSOztBQUdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFEUjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGSjs7QUFHSTtFQUNJLHlCQUFBO0FBRFIiLCJmaWxlIjoic3JjL2FwcC9wYWNpZW50ZXMvcGFjaWVudGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWJne1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgyNjRkZWcsICMyNjk0QTMgMCUsICMwMTQyNkEgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAyMHB4ICMwMDAwMDA1OTtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLnNlYXJjaC1iYXIge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAyOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc2VhcmNoYmFyLWljb257XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjQkNCQ0NCO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uc2VhcmNoLWlucHV0e1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM0MzQyNUQgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtc3RhdHN7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLnAtc3RhdHN7XG4gICAgY29sb3I6ICM5RjlDOUMgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5oNC1zdGF0c3tcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmljb24tc3RhdHN7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2xpZGUtY2FyZHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBoZWlnaHQ6IDUzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1NXB4ICM1MDVDNjIyOTtcblxuICAgIC5taW5kLWltZ3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDM1NXB4O1xuICAgICAgICBsZWZ0OiAzMjBweDtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICB9XG5cbiAgICAuZW1vdC1pbWd7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAzNTVweDtcbiAgICAgICAgcmlnaHQ6IDMyMHB4O1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgIH1cblxuICAgIC5ib2R5LWltZ3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBsZWZ0OiAxNjVweDtcbiAgICB9XG59XG5cbi5zbGlkZS1pbWd7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbi5oNC1zbGlkZXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGNvbG9yOiAjMjM4RTlFO1xufVxuXG4ucC1zbGlkZS10aXRsZXtcbiAgICBjb2xvcjogIzNDM0MzQztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucC1zbGlkZS1zdWJ0aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjMDAwMDAwNTk7XG59XG5cbi5zbGlkZS1idG57XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XG4gICAgcHtcbiAgICAgICAgY29sb3I6ICMzQzNDM0MgIWltcG9ydGFudDtcbiAgICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PacientesPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pacientes',
            templateUrl: './pacientes.page.html',
            styleUrls: ['./pacientes.page.scss']
          }]
        }], function () {
          return [{
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pacientes-pacientes-module-es5.js.map