(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-data-module"], {
    /***/
    "Fweb":
    /*!***********************************!*\
      !*** ./src/app/data/data.page.ts ***!
      \***********************************/

    /*! exports provided: DataPage */

    /***/
    function Fweb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataPage", function () {
        return DataPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _app_form_modal_form_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../app/form-modal/form-modal.page */
      "+fvF");
      /* harmony import */


      var _components_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/user-bar/user-bar.component */
      "Rw8l");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DataPage_div_18_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_1_Template_ion_col_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r7.open_multiple();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_1_Template_ion_col_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r9.open_binaria();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_1_Template_ion_col_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r10.open_gestalt();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_1_Template_ion_col_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r11.open_levels();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_1_Template_ion_col_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r12.open_multiple();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "M\xFAltipla");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_1_Template_ion_col_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r13.open_binaria();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Bin\xE1ria");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_1_Template_ion_col_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r14.open_gestalt();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Gestalt");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_1_Template_ion_col_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r15.open_levels();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "N\xEDveis");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DataPage_div_18_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_2_Template_ion_col_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r16.open_patologia();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_2_Template_ion_col_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r18.open_biomarcador();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_2_Template_ion_col_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r19.open_patologia();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Patologia");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_2_Template_ion_col_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r20.open_biomarcador();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Biomarcador");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DataPage_div_18_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_3_Template_ion_col_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r21.open_tratamento();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_3_Template_ion_col_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r23.open_content();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_3_Template_ion_col_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r24.open_food();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_3_Template_ion_col_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r25.open_activity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_3_Template_ion_col_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r26.open_tratamento();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Tratamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_3_Template_ion_col_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r27.open_content();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Conte\xFAdo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_3_Template_ion_col_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r28.open_food();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Alimenta\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_18_div_3_Template_ion_col_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r29.open_activity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Atividades");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DataPage_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataPage_div_18_div_1_Template, 23, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataPage_div_18_div_2_Template, 13, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataPage_div_18_div_3_Template, 23, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tab == "forms");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tab == "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tab == "rec");
        }
      }

      function DataPage_div_24_ion_item_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Categoria");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Patologia");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Ordem");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Conte\xFAdos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Tratamentos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Alimenta\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Exerc\xEDcios");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [0, 1];
      };

      function DataPage_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "GEST\xC3O DE RECOMENDA\xC7\xD5ES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Voc\xEA \xE9 o cientista que define padr\xF5es para cuidar de vidas. Obrigado!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-card", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Output");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-item", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Categoria ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ion-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ion-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Ordem ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "ion-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Tipo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "ion-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Nome ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "ion-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Unidade ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "ion-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "V\xEDdeo Link ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "ion-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, DataPage_div_24_ion_item_49_Template, 26, 0, "ion-item", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "item-bg-dark": a0
        };
      };

      function DataPage_div_25_ion_item_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_25_ion_item_45_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

            var item_r33 = ctx.$implicit;

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r35.edit_multiple(item_r33);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_25_ion_item_45_Template_ion_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

            var item_r33 = ctx.$implicit;

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r37.del_multiple(item_r33);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r33 = ctx.$implicit;
          var i_r34 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, 1 === i_r34 % 2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r33.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r33.formulario);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r33.tipo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r33.parametro);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r33.ordem);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r33.pergunta);
        }
      }

      function DataPage_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "GEST\xC3O DE FORMUL\xC1RIOS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Voc\xEA \xE9 o cientista que define padr\xF5es para cuidar de vidas. Obrigado!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-card", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Input");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-item", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Categoria ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ion-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Formul\xE1rio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ion-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Tipo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "ion-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Par\xE2metro ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "ion-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Ordem ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "ion-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Quest\xE3o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "ion-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, DataPage_div_25_ion_item_45_Template, 23, 9, "ion-item", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.allFilters);
        }
      }

      function DataPage_div_26_ion_row_61_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-icon", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_26_ion_row_61_Template_ion_icon_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

            var item_r40 = ctx.$implicit;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r42.editStatus(item_r40);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-icon", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_26_ion_row_61_Template_ion_icon_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r44.delStatus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-col", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-col", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-col", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-col", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r40 = ctx.$implicit;
          var i_r41 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, 1 === i_r41 % 2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r40.nome, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r40.category, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r40.cid, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r40.type, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r40.form, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r40.patolog, " ");
        }
      }

      function DataPage_div_26_ion_row_84_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-icon", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_26_ion_row_84_Template_ion_icon_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r47.delBiomark("labs");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-col", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-icon", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-icon", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_26_ion_row_84_Template_ion_icon_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r49.delBiomark("exams");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-col", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-icon", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-icon", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_26_ion_row_84_Template_ion_icon_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r50.delBiomark("autoexams");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-col", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ion-icon", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-icon", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_div_26_ion_row_84_Template_ion_icon_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r51.delBiomark("biosens");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r45 = ctx.$implicit;
          var i_r46 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, 1 === i_r46 % 2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r45.labs, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r45.exams, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r45.autoexams, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r45.biosens, " ");
        }
      }

      function DataPage_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "GEST\xC3O DE STATUS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Voc\xEA \xE9 o cientista que define padr\xF5es para cuidar de vidas. Obrigado!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-card", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-grid", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-col", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Data processing");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-col", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-item", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Biomarcadores");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-col", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-row", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ion-col", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-col", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-col", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Categoria");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-col", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "C\xF3digo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-col", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Tipo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-col", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Formul\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-col", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Par\xE2metro");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, DataPage_div_26_ion_row_61_Template, 28, 9, "ion-row", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ion-col", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ion-row", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ion-col", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Exames lab.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "ion-col", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Exames presenciais");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ion-col", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Autoexames");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "ion-col", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Biossenssores");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, DataPage_div_26_ion_row_84_Template, 33, 7, "ion-row", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.allFilters);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.status_biomark);
        }
      }

      var DataPage = /*#__PURE__*/function () {
        function DataPage(api, alertController, modalController) {
          _classCallCheck(this, DataPage);

          this.api = api;
          this.alertController = alertController;
          this.modalController = modalController;
          this.tab = 'forms';
          this.filterArray = [];
          this.allFilters = [];
          this.status_biomark = [];
          this.filterInputs_alert = [];
          this.moreOptions = true;
          this.loadForms();
        }

        _createClass(DataPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "segmentChange",
          value: function segmentChange($event) {
            if (this.tab == 'forms') {
              this.filterArray = [];
              this.loadForms();
            }

            if (this.tab == 'status') {
              this.filterArray = [];
              this.status_biomark = [];
              this.filterArray = [{
                checked: true,
                form: "corpo",
                nform: "Corpo"
              }, {
                checked: true,
                form: "mente",
                nform: "Mente"
              }, {
                checked: true,
                form: "emocoes",
                nform: "Emocoes"
              }];
              this.filterInputs_alert = [];
              this.filterInputs_alert = this.fillAlertInputs();

              for (var i = 0; i < this.filterArray.length; i++) {
                this.loadStatus(this.filterArray[i].form, this.filterArray[i].checked);
              }
            }

            if (this.tab == 'rec') {
              this.filterArray = [];
              this.loadForms();
            }
          }
        }, {
          key: "loadForms",
          value: function loadForms() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.api.get('forms').then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Forms API > ", data);
                            _this.filterArray = data;

                            for (var i = 0; i < _this.filterArray.length; i++) {
                              _this.filterArray[i].checked = true;

                              if (_this.tab == 'forms') {
                                _this.loadFormFilters(_this.filterArray[i].form, _this.filterArray[i].checked);
                              }

                              if (_this.tab == 'rec') {
                                _this.loadRecomen(_this.filterArray[i].form, _this.filterArray[i].checked);
                              }
                            }

                            _this.filterInputs_alert = _this.fillAlertInputs();
                          }, function (err) {
                            console.log("API error -> ", err);

                            _this.api.proccessError(err);
                          });
                        }
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "loadRecomen",
          value: function loadRecomen(form, checked) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.allFilters = [];

                      if (checked) {
                        this.api.get('recomen/' + form).then(function (res) {
                          if (res) {
                            res.subscribe(function (data) {
                              console.log("Recomen API > ", data);

                              if (data.length > 0) {
                                for (var i = 0; i < data.length; i++) {
                                  _this2.allFilters.push(data[i]);
                                }

                                console.log("Recomen filter > ", _this2.allFilters);
                              }
                            }, function (err) {
                              console.log("API error -> ", err);

                              _this2.api.proccessError(err);
                            });
                          }
                        });
                      }

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "loadStatus",
          value: function loadStatus(form, checked) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.allFilters = [];

                      if (checked) {
                        this.api.get('pato/status/' + form).then(function (res) {
                          if (res) {
                            res.subscribe(function (data) {
                              console.log("Status API > ", data);

                              if (data.result.length > 0) {
                                for (var i = 0; i < data.result.length; i++) {
                                  _this3.allFilters.push(data.result[i]);
                                }

                                console.log("Status filter > ", _this3.allFilters);
                              }
                            }, function (err) {
                              console.log("API error -> ", err);

                              _this3.api.proccessError(err);
                            });
                          }
                        });
                        this.api.get('biomark/' + form).then(function (res) {
                          if (res) {
                            res.subscribe(function (data) {
                              console.log("Status biomark API > ", data);

                              if (data.result.length > 0) {
                                for (var i = 0; i < data.result.length; i++) {
                                  _this3.status_biomark.push(data.result[i]);
                                }

                                console.log("Status biomark filter > ", _this3.status_biomark);
                              }
                            }, function (err) {
                              console.log("API error -> ", err);

                              _this3.api.proccessError(err);
                            });
                          }
                        });
                      }

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "del_multiple",
          value: function del_multiple(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var fd, alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      fd = new FormData();
                      fd.append('YES', 'YES');
                      _context4.next = 4;
                      return this.alertController.create({
                        header: 'Are you sure',
                        message: 'Are you sure, you want to delete this QUESTION',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            _this4.api.post_params('delquest/' + item.formulario + '/' + item.ordem, fd).then(function (res) {
                              if (res) {
                                res.subscribe(function (data) {
                                  console.log("Multiple del API > ", data);
                                }, function (err) {
                                  console.log("API error -> ", err);

                                  _this4.api.proccessError(err);
                                });
                              }
                            });
                          }
                        }]
                      });

                    case 4:
                      alert = _context4.sent;
                      _context4.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "delStatus",
          value: function delStatus() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        header: 'Are you sure',
                        message: 'Are you sure, you want to delete this status',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            _this5.api.get('delpato').then(function (res) {
                              if (res) {
                                res.subscribe(function (data) {
                                  console.log("Status del API > ", data);
                                }, function (err) {
                                  console.log("API error -> ", err);

                                  _this5.api.proccessError(err);
                                });
                              }
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "delBiomark",
          value: function delBiomark(biomark) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        header: 'Are you sure',
                        message: 'Are you sure, you want to delete this Biomark',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            _this6.api.post('delbiomark/' + biomark).then(function (res) {
                              if (res) {
                                res.subscribe(function (data) {
                                  console.log("Status Biomark del API > ", data);
                                }, function (err) {
                                  console.log("API error -> ", err);

                                  _this6.api.proccessError(err);
                                });
                              }
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "loadFormFilters",
          value: function loadFormFilters(form, checked) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.allFilters = [];

                      if (checked) {
                        this.api.get('forms/' + form).then(function (res) {
                          if (res) {
                            res.subscribe(function (data) {
                              console.log(form + " filter > ", data);

                              if (data.length > 0) {
                                for (var i = 0; i < data.length; i++) {
                                  _this7.allFilters.push(data[i]);
                                }

                                console.log("filter > ", _this7.allFilters);
                              }
                            }, function (err) {
                              console.log("API error -> ", err);

                              _this7.api.proccessError(err);
                            });
                          }
                        });
                      }

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "fillAlertInputs",
          value: function fillAlertInputs() {
            var theNewInputs = [];

            for (var i = 0; i < this.filterArray.length; i++) {
              theNewInputs.push({
                type: 'checkbox',
                label: this.filterArray[i].nform,
                value: this.filterArray[i],
                checked: this.filterArray[i].checked
              });
            }

            return theNewInputs;
          }
        }, {
          key: "openFilter",
          value: function openFilter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this8 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.alertController.create({
                        header: "Filtros",
                        inputs: this.filterInputs_alert,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler(data) {
                            console.log('Confirm Ok', data);
                            var isMatch = false;

                            for (var _i = 0; _i < _this8.filterArray.length; _i++) {
                              for (var j = 0; j < data.length; j++) {
                                if (data[j].form == _this8.filterArray[_i].form) {
                                  isMatch = true;
                                  break;
                                } else {
                                  isMatch = false;
                                }
                              }

                              if (isMatch) {
                                // To make filter true again
                                if (_this8.filterArray[_i].checked == false) {
                                  _this8.filterArray[_i].checked = true;
                                }
                              } else {
                                _this8.filterArray[_i].checked = false;
                                isMatch = false;
                              }
                            }

                            console.log('Filter array -> ', _this8.filterArray); // Call to API according to selected filters

                            // Call to API according to selected filters
                            if (_this8.tab == 'forms') {
                              for (var i = 0; i < _this8.filterArray.length; i++) {
                                _this8.loadFormFilters(_this8.filterArray[i].form, _this8.filterArray[i].checked);
                              }
                            }

                            if (_this8.tab == 'status') {
                              for (var i = 0; i < _this8.filterArray.length; i++) {
                                _this8.loadStatus(_this8.filterArray[i].form, _this8.filterArray[i].checked);
                              }
                            }

                            if (_this8.tab == 'rec') {
                              for (var i = 0; i < _this8.filterArray.length; i++) {
                                _this8.loadRecomen(_this8.filterArray[i].form, _this8.filterArray[i].checked);
                              }
                            } // Filling alert array


                            // Filling alert array
                            _this8.filterInputs_alert = [];
                            _this8.filterInputs_alert = _this8.fillAlertInputs();
                          }
                        }]
                      });

                    case 2:
                      alert = _context8.sent;
                      _context8.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "open_patologia",
          value: function open_patologia() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var modal, _yield$modal$onWillDi, data;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.modalController.create({
                        component: _app_form_modal_form_modal_page__WEBPACK_IMPORTED_MODULE_4__["FormModalPage"],
                        componentProps: {
                          'form_type': 'patologia',
                          'title': 'Insert new Status'
                        }
                      });

                    case 2:
                      modal = _context9.sent;
                      _context9.next = 5;
                      return modal.present();

                    case 5:
                      _context9.next = 7;
                      return modal.onWillDismiss();

                    case 7:
                      _yield$modal$onWillDi = _context9.sent;
                      data = _yield$modal$onWillDi.data;
                      console.log("patologia Modal Dismiss ", data);

                    case 10:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "editStatus",
          value: function editStatus(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var modal, _yield$modal$onWillDi2, data;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.modalController.create({
                        component: _app_form_modal_form_modal_page__WEBPACK_IMPORTED_MODULE_4__["FormModalPage"],
                        componentProps: {
                          'form_type': 'patologia',
                          'title': 'Edit Status',
                          'item': item
                        }
                      });

                    case 2:
                      modal = _context10.sent;
                      _context10.next = 5;
                      return modal.present();

                    case 5:
                      _context10.next = 7;
                      return modal.onWillDismiss();

                    case 7:
                      _yield$modal$onWillDi2 = _context10.sent;
                      data = _yield$modal$onWillDi2.data;
                      console.log("Edit patologia Modal Dismiss ", data);

                    case 10:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "open_biomarcador",
          value: function open_biomarcador() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var modal, _yield$modal$onWillDi3, data;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.modalController.create({
                        component: _app_form_modal_form_modal_page__WEBPACK_IMPORTED_MODULE_4__["FormModalPage"],
                        componentProps: {
                          'form_type': 'biomark',
                          'title': 'Insert new Biomarcador'
                        }
                      });

                    case 2:
                      modal = _context11.sent;
                      _context11.next = 5;
                      return modal.present();

                    case 5:
                      _context11.next = 7;
                      return modal.onWillDismiss();

                    case 7:
                      _yield$modal$onWillDi3 = _context11.sent;
                      data = _yield$modal$onWillDi3.data;
                      console.log("biomark Modal Dismiss ", data);

                    case 10:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "open_tratamento",
          value: function open_tratamento() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var modal, _yield$modal$onWillDi4, data;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.modalController.create({
                        component: _app_form_modal_form_modal_page__WEBPACK_IMPORTED_MODULE_4__["FormModalPage"],
                        componentProps: {
                          'form_type': 'tratamento',
                          'title': 'Insert new Tratamento'
                        }
                      });

                    case 2:
                      modal = _context12.sent;
                      _context12.next = 5;
                      return modal.present();

                    case 5:
                      _context12.next = 7;
                      return modal.onWillDismiss();

                    case 7:
                      _yield$modal$onWillDi4 = _context12.sent;
                      data = _yield$modal$onWillDi4.data;
                      console.log("Tratamento Modal Dismiss ", data);

                    case 10:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "open_content",
          value: function open_content() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var modal, _yield$modal$onWillDi5, data;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.modalController.create({
                        component: _app_form_modal_form_modal_page__WEBPACK_IMPORTED_MODULE_4__["FormModalPage"],
                        componentProps: {
                          'form_type': 'content',
                          'title': 'Insert new Conteúdo'
                        }
                      });

                    case 2:
                      modal = _context13.sent;
                      _context13.next = 5;
                      return modal.present();

                    case 5:
                      _context13.next = 7;
                      return modal.onWillDismiss();

                    case 7:
                      _yield$modal$onWillDi5 = _context13.sent;
                      data = _yield$modal$onWillDi5.data;
                      console.log("Content Modal Dismiss ", data);

                    case 10:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "open_food",
          value: function open_food() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var modal, _yield$modal$onWillDi6, data;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.modalController.create({
                        component: _app_form_modal_form_modal_page__WEBPACK_IMPORTED_MODULE_4__["FormModalPage"],
                        componentProps: {
                          'form_type': 'food',
                          'title': 'Insert new Alimentação'
                        }
                      });

                    case 2:
                      modal = _context14.sent;
                      _context14.next = 5;
                      return modal.present();

                    case 5:
                      _context14.next = 7;
                      return modal.onWillDismiss();

                    case 7:
                      _yield$modal$onWillDi6 = _context14.sent;
                      data = _yield$modal$onWillDi6.data;
                      console.log("Food Modal Dismiss ", data);

                    case 10:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "open_activity",
          value: function open_activity() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var modal, _yield$modal$onWillDi7, data;

              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.modalController.create({
                        component: _app_form_modal_form_modal_page__WEBPACK_IMPORTED_MODULE_4__["FormModalPage"],
                        componentProps: {
                          'form_type': 'activity',
                          'title': 'Insert new Atividades'
                        }
                      });

                    case 2:
                      modal = _context15.sent;
                      _context15.next = 5;
                      return modal.present();

                    case 5:
                      _context15.next = 7;
                      return modal.onWillDismiss();

                    case 7:
                      _yield$modal$onWillDi7 = _context15.sent;
                      data = _yield$modal$onWillDi7.data;
                      console.log("Activity Modal Dismiss ", data);

                    case 10:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "open_multiple",
          value: function open_multiple() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var modal, _yield$modal$onWillDi8, data;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.modalController.create({
                        component: _app_form_modal_form_modal_page__WEBPACK_IMPORTED_MODULE_4__["FormModalPage"],
                        componentProps: {
                          'form_type': 'multiple',
                          'title': 'Insert MULTIPLE CHOICE QUESTION'
                        }
                      });

                    case 2:
                      modal = _context16.sent;
                      _context16.next = 5;
                      return modal.present();

                    case 5:
                      _context16.next = 7;
                      return modal.onWillDismiss();

                    case 7:
                      _yield$modal$onWillDi8 = _context16.sent;
                      data = _yield$modal$onWillDi8.data;
                      console.log("Multiple Modal Dismiss ", data);

                    case 10:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "edit_multiple",
          value: function edit_multiple(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var modal, _yield$modal$onWillDi9, data;

              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.modalController.create({
                        component: _app_form_modal_form_modal_page__WEBPACK_IMPORTED_MODULE_4__["FormModalPage"],
                        componentProps: {
                          'form_type': 'multiple',
                          'title': 'Edit MULTIPLE CHOICE QUESTION',
                          'item': item
                        }
                      });

                    case 2:
                      modal = _context17.sent;
                      _context17.next = 5;
                      return modal.present();

                    case 5:
                      _context17.next = 7;
                      return modal.onWillDismiss();

                    case 7:
                      _yield$modal$onWillDi9 = _context17.sent;
                      data = _yield$modal$onWillDi9.data;
                      console.log("Edit multiple Modal Dismiss ", data);

                    case 10:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "open_gestalt",
          value: function open_gestalt() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var modal, _yield$modal$onWillDi10, data;

              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.modalController.create({
                        component: _app_form_modal_form_modal_page__WEBPACK_IMPORTED_MODULE_4__["FormModalPage"],
                        componentProps: {
                          'form_type': 'gestalt',
                          'title': 'Insert GESTALT QUESTION'
                        }
                      });

                    case 2:
                      modal = _context18.sent;
                      _context18.next = 5;
                      return modal.present();

                    case 5:
                      _context18.next = 7;
                      return modal.onWillDismiss();

                    case 7:
                      _yield$modal$onWillDi10 = _context18.sent;
                      data = _yield$modal$onWillDi10.data;
                      console.log("Gestalt Modal Dismiss ", data);

                    case 10:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "open_binaria",
          value: function open_binaria() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var modal, _yield$modal$onWillDi11, data;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.modalController.create({
                        component: _app_form_modal_form_modal_page__WEBPACK_IMPORTED_MODULE_4__["FormModalPage"],
                        componentProps: {
                          'form_type': 'binaria',
                          'title': 'Insert YES OR NO QUESTION'
                        }
                      });

                    case 2:
                      modal = _context19.sent;
                      _context19.next = 5;
                      return modal.present();

                    case 5:
                      _context19.next = 7;
                      return modal.onWillDismiss();

                    case 7:
                      _yield$modal$onWillDi11 = _context19.sent;
                      data = _yield$modal$onWillDi11.data;
                      console.log("Binaria Modal Dismiss ", data);

                    case 10:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "open_levels",
          value: function open_levels() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var modal, _yield$modal$onWillDi12, data;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.modalController.create({
                        component: _app_form_modal_form_modal_page__WEBPACK_IMPORTED_MODULE_4__["FormModalPage"],
                        componentProps: {
                          'form_type': 'levels',
                          'title': 'Insert LEVELS FORM'
                        }
                      });

                    case 2:
                      modal = _context20.sent;
                      _context20.next = 5;
                      return modal.present();

                    case 5:
                      _context20.next = 7;
                      return modal.onWillDismiss();

                    case 7:
                      _yield$modal$onWillDi12 = _context20.sent;
                      data = _yield$modal$onWillDi12.data;
                      console.log("Level Modal Dismiss ", data);

                    case 10:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }]);

        return DataPage;
      }();

      DataPage.ɵfac = function DataPage_Factory(t) {
        return new (t || DataPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
      };

      DataPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DataPage,
        selectors: [["app-data"]],
        decls: 27,
        vars: 5,
        consts: [[1, "toolbar-bg"], ["src", "../../assets/images/mia-wht.png", "width", "200", "alt", ""], ["slot", "end", 1, "ion-text-right"], [1, "toolbar-bg", 2, "box-shadow", "0px 0px 0px #00000059 !important"], ["color", "secondary", 3, "ngModel", "ionChange", "ngModelChange"], ["value", "forms"], ["value", "status"], ["value", "rec"], ["wrap-box", ""], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["class", "tab-options", 4, "ngIf"], [2, "display", "flex"], [2, "margin-right", "8px", 3, "click"], ["name", "add"], [3, "click"], ["name", "md-funnel"], [4, "ngIf"], [1, "tab-options"], ["size", "3", 3, "click"], ["src", "../../assets/images/list-icon.png", 1, "tab-icon-imgs", 2, "width", "19px", "height", "16px"], ["src", "../../assets/images/binary-icon.png", 1, "tab-icon-imgs", 2, "width", "20px", "height", "20px"], ["src", "../../assets/images/photo-icon.png", 1, "tab-icon-imgs", 2, "width", "16px", "height", "20px"], ["src", "../../assets/images/tune-bar-icon.png", 1, "tab-icon-imgs", 2, "width", "18px", "height", "18px"], [1, "tab-p-style"], ["size", "6", 3, "click"], ["src", "../../assets/images/bug-report-icon.png", 1, "tab-icon-imgs", 2, "width", "16px", "height", "18px"], ["src", "../../assets/images/bubble-icon.png", 1, "tab-icon-imgs", 2, "width", "16px", "height", "16px"], ["src", "../../assets/images/spa-icon.png", 1, "tab-icon-imgs", 2, "width", "20px", "height", "20px"], ["src", "../../assets/images/movie-icon.png", 1, "tab-icon-imgs", 2, "width", "20px", "height", "16px"], ["src", "../../assets/images/cart-icon.png", 1, "tab-icon-imgs", 2, "width", "22px", "height", "19px"], ["src", "../../assets/images/setting-icon.png", 1, "tab-icon-imgs", 2, "width", "23px", "height", "23px"], [1, "ion-no-padding"], [1, "sub-toolbar"], ["size", "8"], ["size", "4"], ["lines", "none", 1, "search-bar"], ["type", "text", "placeholder", "Pesquise uma recomenta\xE7\xE3o...", 1, "search-input"], ["ios", "ios-search", "md", "md-search", 1, "searchbar-icon"], [1, "data-card"], ["lines", "none"], ["lines", "none", 1, "item-bg-dark"], [2, "width", "92px"], ["name", "ios-arrow-down", 1, "dropdown-icon"], ["lines", "none", 4, "ngFor", "ngForOf"], ["fill", "clear", "color", "secondary", "slot", "start", 2, "margin", "0px 8px 0px 8px"], ["name", "md-create"], ["name", "trash"], ["type", "text", "placeholder", "Pesquise um formul\xE1rio ou item...", 1, "search-input"], [2, "width", "85px"], ["lines", "none", 3, "ngClass", 4, "ngFor", "ngForOf"], ["lines", "none", 3, "ngClass"], ["fill", "clear", "color", "secondary", "slot", "start", 2, "margin", "0px 8px 0px 8px", 3, "click"], [1, "ion-text-wrap"], ["type", "text", "placeholder", "Pesquise uma patologia ou biomarcador...", 1, "search-input"], [2, "padding", "0px"], ["size", "6"], ["size", "6", 2, "padding", "0px"], [1, "item-bg-dark"], ["size", "0.5"], ["size", "1.5", 1, "col-style"], ["size", "2", 1, "col-style"], ["size", "2.5", 1, "col-style"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "item-bg-darker"], ["size", "3", 1, "col-style"], [3, "ngClass"], ["color", "secondary", "name", "md-create", 2, "padding", "2px", 3, "click"], ["color", "secondary", "name", "trash", 2, "padding", "2px", 3, "click"], ["color", "secondary", "name", "md-create"], ["color", "secondary", "name", "trash", 3, "click"]],
        template: function DataPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-user-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-segment", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function DataPage_Template_ion_segment_ionChange_8_listener($event) {
              return ctx.segmentChange($event);
            })("ngModelChange", function DataPage_Template_ion_segment_ngModelChange_8_listener($event) {
              return ctx.tab = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-segment-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "FORMUL\xC1RIOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-segment-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "STATUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-segment-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "RECOMENDA\xC7\xD5ES");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-fab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DataPage_div_18_Template, 4, 3, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-fab-button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_Template_ion_fab_button_click_20_listener() {
              return ctx.moreOptions ? ctx.moreOptions = false : ctx.moreOptions = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "ion-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-fab-button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataPage_Template_ion_fab_button_click_22_listener() {
              return ctx.openFilter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "ion-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, DataPage_div_24_Template, 50, 2, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DataPage_div_25_Template, 46, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, DataPage_div_26_Template, 85, 2, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.tab);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.moreOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tab == "rec");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tab == "forms");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tab == "status");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _components_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_5__["UserBarComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]],
        styles: [".toolbar-bg[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(264deg, #2694A3 0%, #01426A 100%) 0% 0% no-repeat padding-box !important;\n  box-shadow: 0px 3px 20px #00000059;\n  display: flex;\n  margin: 0px;\n}\n\n.sub-toolbar[_ngcontent-%COMP%] {\n  margin-top: 18px !important;\n}\n\nion-segment[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  color: #ced6e0 !important;\n}\n\nion-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  --indicator-height: 8px !important;\n}\n\nion-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-indicator[_ngcontent-%COMP%] {\n  color: #EF9E95 !important;\n}\n\nion-segment[_ngcontent-%COMP%]   div.segment-button-indicator[_ngcontent-%COMP%] {\n  --indicator-height: 8px !important;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000029;\n  border-radius: 10px;\n}\n\n.searchbar-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #BCBCCB;\n  margin-right: 8px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  --placeholder-color: #43425D !important;\n}\n\n.data-card[_ngcontent-%COMP%] {\n  margin: 10px 0px 10px 0px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 10px;\n}\n\n.dropdown-icon[_ngcontent-%COMP%] {\n  color: #2694a3;\n}\n\n.item-bg-dark[_ngcontent-%COMP%] {\n  --background: #EEEEEE !important;\n  background: #EEEEEE !important;\n}\n\n.item-bg-darker[_ngcontent-%COMP%] {\n  --background: #C4C4C470 !important;\n  background: #C4C4C470 !important;\n}\n\n.item-bg-white[_ngcontent-%COMP%] {\n  --background: #ffffff !important;\n}\n\n.col-style[_ngcontent-%COMP%] {\n  padding: 5px 0px 5px 0px;\n  text-align: center;\n}\n\n.tab-options[_ngcontent-%COMP%] {\n  padding: 14px;\n  width: 415px;\n  height: 80px;\n  background: #f0c4c0;\n  position: absolute;\n  right: 90px;\n  bottom: 56px;\n  border-top-left-radius: 35px;\n  border-top-right-radius: 35px;\n  border-bottom-left-radius: 35px;\n}\n\n.tab-icon-imgs[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.tab-p-style[_ngcontent-%COMP%] {\n  color: #515151;\n  font-size: 12px;\n  text-align: center;\n  letter-spacing: 1.8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS9kYXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdIQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDSSx5QkFBQTtBQUNSOztBQUVJO0VBQ0kseUJBQUE7RUFDQSxrQ0FBQTtBQUFSOztBQUdJO0VBQ0kseUJBQUE7QUFEUjs7QUFJSTtFQUNJLGtDQUFBO0FBRlI7O0FBTUE7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNQTtFQUNJLHVDQUFBO0FBSEo7O0FBTUE7RUFDSSx5QkFBQTtFQUNBLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtBQUhKOztBQU1BO0VBQ0ksZ0NBQUE7RUFDQSw4QkFBQTtBQUhKOztBQU1BO0VBQ0ksa0NBQUE7RUFDQSxnQ0FBQTtBQUhKOztBQU1BO0VBQ0ksZ0NBQUE7QUFISjs7QUFNQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQUhKOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvZGF0YS9kYXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWJne1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgyNjRkZWcsICMyNjk0QTMgMCUsICMwMTQyNkEgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAyMHB4ICMwMDAwMDA1OTtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLnN1Yi10b29sYmFye1xuICAgIG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnR7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgICAgICBjb2xvcjogI2NlZDZlMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiA4cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24taW5kaWNhdG9ye1xuICAgICAgICBjb2xvcjogI0VGOUU5NSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGRpdi5zZWdtZW50LWJ1dHRvbi1pbmRpY2F0b3J7XG4gICAgICAgIC0taW5kaWNhdG9yLWhlaWdodDogOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uc2VhcmNoLWJhciB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDI5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zZWFyY2hiYXItaWNvbntcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICNCQ0JDQ0I7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5zZWFyY2gtaW5wdXR7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzQzNDI1RCAhaW1wb3J0YW50O1xufVxuXG4uZGF0YS1jYXJke1xuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5kcm9wZG93bi1pY29ue1xuICAgIGNvbG9yOiAjMjY5NGEzO1xufVxuXG4uaXRlbS1iZy1kYXJre1xuICAgIC0tYmFja2dyb3VuZDogI0VFRUVFRSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNFRUVFRUUgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tYmctZGFya2Vye1xuICAgIC0tYmFja2dyb3VuZDogI0M0QzRDNDcwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI0M0QzRDNDcwICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWJnLXdoaXRle1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uY29sLXN0eWxle1xuICAgIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWItb3B0aW9uc3tcbiAgICBwYWRkaW5nOiAxNHB4OyBcbiAgICB3aWR0aDogNDE1cHg7IFxuICAgIGhlaWdodDogODBweDsgXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MCwgMTk2LCAxOTIpOyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIHJpZ2h0OiA5MHB4OyBcbiAgICBib3R0b206IDU2cHg7IFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM1cHg7IFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzNXB4OyBcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzNXB4O1xufVxuXG4udGFiLWljb24taW1nc3tcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50YWItcC1zdHlsZXtcbiAgICBjb2xvcjogIzUxNTE1MTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjhweDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-data',
            templateUrl: './data.page.html',
            styleUrls: ['./data.page.scss']
          }]
        }], function () {
          return [{
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MgIx":
    /*!*************************************!*\
      !*** ./src/app/data/data.module.ts ***!
      \*************************************/

    /*! exports provided: DataPageModule */

    /***/
    function MgIx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataPageModule", function () {
        return DataPageModule;
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


      var _data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./data.page */
      "Fweb");

      var routes = [{
        path: '',
        component: _data_page__WEBPACK_IMPORTED_MODULE_6__["DataPage"]
      }];

      var DataPageModule = function DataPageModule() {
        _classCallCheck(this, DataPageModule);
      };

      DataPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DataPageModule
      });
      DataPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DataPageModule_Factory(t) {
          return new (t || DataPageModule)();
        },
        imports: [[_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataPageModule, {
          declarations: [_data_page__WEBPACK_IMPORTED_MODULE_6__["DataPage"]],
          imports: [_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_data_page__WEBPACK_IMPORTED_MODULE_6__["DataPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Rw8l":
    /*!***********************************************************!*\
      !*** ./src/app/components/user-bar/user-bar.component.ts ***!
      \***********************************************************/

    /*! exports provided: UserBarComponent */

    /***/
    function Rw8l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserBarComponent", function () {
        return UserBarComponent;
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
      /*! ../../services/storage/storage.service */
      "E2f4");
      /* harmony import */


      var _user_data_user_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../user-data/user-data.component */
      "YrRj");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UserBarComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserBarComponent_div_0_Template_ion_row_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.openUserData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-col", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.userData.nome, " ", ctx_r0.userData.snome, "");
        }
      }

      var UserBarComponent = /*#__PURE__*/function () {
        function UserBarComponent(storage, modalCtrl) {
          _classCallCheck(this, UserBarComponent);

          this.storage = storage;
          this.modalCtrl = modalCtrl;
          this.loadUserData();
        }

        _createClass(UserBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loadUserData",
          value: function loadUserData() {
            var _this9 = this;

            this.storage.get('mia_user_data').then(function (user) {
              console.log(user);
              _this9.userData = user;
            });
          }
        }, {
          key: "openUserData",
          value: function openUserData() {
            this.modalCtrl.create({
              component: _user_data_user_data_component__WEBPACK_IMPORTED_MODULE_3__["UserDataComponent"]
            }).then(function (userEl) {
              return userEl.present();
            });
          }
        }]);

        return UserBarComponent;
      }();

      UserBarComponent.ɵfac = function UserBarComponent_Factory(t) {
        return new (t || UserBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]));
      };

      UserBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserBarComponent,
        selectors: [["app-user-bar"]],
        decls: 1,
        vars: 1,
        consts: [["class", "item-bg", 4, "ngIf"], [1, "item-bg"], [3, "click"], ["size-md", "4", "size-xs", "4", "size-sm", "4", "size-lg", "4", 2, "padding", "0px 10px 0px 0px"], [1, "p-name"], ["size-md", "4", "size-xs", "4", "size-sm", "4", "size-lg", "4", 2, "padding", "0px 10px 0px 0px", "text-align", "center"], ["src", "../../assets/images/finger-print.png", 1, "fingerprint-img"], ["src", "../../assets/images/Avatar.png", 1, "person-img"]],
        template: function UserBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserBarComponent_div_0_Template, 10, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"]],
        styles: [".item-bg[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.person-img[_ngcontent-%COMP%] {\n  width: 43px;\n  height: 40px;\n}\n\n.fingerprint-img[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  width: 25px;\n  height: 25px;\n}\n\n.p-name[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 0.8rem;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWJhci91c2VyLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItYmFyL3VzZXItYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tYmd7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5wZXJzb24taW1ne1xuICAgIHdpZHRoOiA0M3B4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmZpbmdlcnByaW50LWltZ3tcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ucC1uYW1le1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-bar',
            templateUrl: './user-bar.component.html',
            styleUrls: ['./user-bar.component.scss']
          }]
        }], function () {
          return [{
            type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-bar/user-bar.component */
      "Rw8l");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ComponentsModule
      });
      ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ComponentsModule_Factory(t) {
          return new (t || ComponentsModule)();
        },
        imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
          declarations: [_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_3__["UserBarComponent"]],
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_3__["UserBarComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_3__["UserBarComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_3__["UserBarComponent"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=data-data-module-es5.js.map