(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prontuario-prontuario-module"], {
    /***/
    "QjNu":
    /*!***********************************************!*\
      !*** ./src/app/prontuario/prontuario.page.ts ***!
      \***********************************************/

    /*! exports provided: ProntuarioPage */

    /***/
    function QjNu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProntuarioPage", function () {
        return ProntuarioPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/storage/storage.service */
      "E2f4");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! chart.js */
      "MO+k");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _components_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/user-bar/user-bar.component */
      "Rw8l");
      /* harmony import */


      var ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-circle-progress */
      "K1R0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ProntuarioPage_h4_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " PACIENTES");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.geralpoint, " MEUS ");
        }
      }

      function ProntuarioPage_h4_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "POPULA\xC7\xC3O ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " GLOBAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProntuarioPage_div_101_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "JOS\xC9 ANACLETO");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Hist\xF3rico 360\xBA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\xDAltima an\xE1lise \xE0s 5:37 PM, hoje");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-col", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProntuarioPage_div_101_Template_ion_col_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.loadHoje("corpo");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Corpo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-col", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProntuarioPage_div_101_Template_ion_col_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.loadHoje("doshas");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Doshas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-col", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProntuarioPage_div_101_Template_ion_col_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.loadHoje("gestalt");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Gestalt");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-col", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProntuarioPage_div_101_Template_ion_col_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.loadHoje("mente");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Mente");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-col", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProntuarioPage_div_101_Template_ion_col_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.loadHoje("chakras");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Chakras");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-col", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProntuarioPage_div_101_Template_ion_col_click_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.loadHoje("emocoes");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Emo\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-col", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProntuarioPage_div_101_Template_ion_col_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12.loadHoje("yinyang");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Yin Yang");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-col", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-col", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h2", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "DADOS DO CORPO");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ion-col", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "canvas", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-col", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-col", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-badge", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "01/01/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ion-badge", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "01/01/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProntuarioPage_div_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "JOS\xC9 ANACLETO");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Hist\xF3rico 360\xBA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\xDAltima an\xE1lise \xE0s 5:37 PM, hoje");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-col", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h2", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "HIST\xD3RICO DE ATENDIMENTOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-col", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-col", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-col", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Outubro");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Dia 25, 15:22");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-col", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-row", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "SERVICO: ACUPULTURA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-row", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Exames presenciais:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-row", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-badge", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Mamografia");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-badge", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Estetoscopia");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-row", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Diagnose cl\xEDnica:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-row", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-col", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-col", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "img", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ion-col", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Setembro");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Dia 25, 15:22");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "ion-col", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "ion-row", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "SERVICO: ACUPULTURA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "ion-row", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Exames presenciais:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "ion-row", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ion-badge", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Mamografia");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "ion-badge", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Estetoscopia");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "ion-row", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Diagnose cl\xEDnica:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "ion-row", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          "width": "33%"
        };
      };

      var _c1 = function _c1() {
        return {
          "width": "50%"
        };
      };

      var _c2 = function _c2() {
        return {
          "width": "25%"
        };
      };

      var _c3 = function _c3() {
        return {
          "width": "75%"
        };
      };

      var _c4 = function _c4() {
        return {
          "width": "5%"
        };
      };

      var _c5 = function _c5() {
        return {
          "width": "20%"
        };
      };

      var _c6 = function _c6() {
        return {
          "width": "35%"
        };
      };

      var _c7 = function _c7() {
        return {
          "width": "30%"
        };
      };

      function ProntuarioPage_div_103_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "JOS\xC9 ANACLETO");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Hist\xF3rico 360\xBA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\xDAltima an\xE1lise \xE0s 5:37 PM, hoje");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-col", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h2", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "FATORES DE RISCO DO AUTOCUIDADO");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-col", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-row", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-col", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-item", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-avatar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-col", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "33");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "33");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "33");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-row", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-col", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-item", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-avatar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-col", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-row", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-col", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-item", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-avatar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-col", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "75");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-row", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ion-col", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ion-item", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ion-avatar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "img", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ion-col", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "35");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "35");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ion-row", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "ion-col", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ion-item", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ion-avatar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "img", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "ion-col", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "33");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "33");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "33");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c0));
        }
      }

      var ProntuarioPage = /*#__PURE__*/function () {
        function ProntuarioPage(api, storage, navCtrl, route) {
          var _this = this;

          _classCallCheck(this, ProntuarioPage);

          this.api = api;
          this.storage = storage;
          this.navCtrl = navCtrl;
          this.route = route;
          this.tab = 'hoje';
          this.route.queryParams.subscribe(function (params) {
            _this.patientId = params["patientId"];
            _this.category = params["category"];
            _this.year = params["year"];
            _this.month = params["month"];

            _this.loadHoje(_this.category);
          });
          this.loadUserData();
          this.loadTotals();
        }

        _createClass(ProntuarioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            setTimeout(function () {
              _this2.prontuarioChart(1, 2, 3, 4, 5, 6);
            }, 1000);
          }
        }, {
          key: "prontuarioChart",
          value: function prontuarioChart(corpo, emot, mente, item1, item2, item3) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var yourImage, ctx, radarOptions, prontChart;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      yourImage = new Image();
                      yourImage.src = 'https://i.ibb.co/72pc2kH/add-circle-icon.png';
                      ctx = document.getElementById('prontChart');
                      radarOptions = {
                        legend: {
                          position: 'bottom',
                          display: false
                        },
                        scales: {
                          ticks: {
                            fontFamily: 'FontAwesome'
                          }
                        }
                      };
                      prontChart = new chart_js__WEBPACK_IMPORTED_MODULE_6___default.a(ctx, {
                        type: 'radar',
                        data: {
                          labels: ['Sol', 'Energia', 'Sistemas', 'Condicionamento fisico', 'Sono', 'Nutrição'],
                          datasets: [{
                            backgroundColor: "#F1B4AE",
                            borderColor: "#2694a3",
                            pointBackgroundColor: "#2694a3",
                            data: [corpo, emot, mente, item1, item2, item3]
                          }]
                        },
                        options: radarOptions
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "loadUserData",
          value: function loadUserData() {
            var _this3 = this;

            this.storage.get('mia_user_data').then(function (user) {
              _this3.userData = user;
            });
          }
        }, {
          key: "openPage",
          value: function openPage(page) {
            this.navCtrl.navigateRoot(page);
          }
        }, {
          key: "segmentChange",
          value: function segmentChange($event) {
            if (this.tab == "hoje") {
              this.loadHoje(this.category);
            }

            if (this.tab == "historico") {
              this.loadHistorico();
            }

            if (this.tab == "exames") {
              this.loadExames();
            }

            if (this.tab == "biosensores") {
              this.loadBio();
            }

            if (this.tab == "autocuidado") {
              this.loadAutocuidado();
            }

            if (this.tab == "familia") {
              this.loadFamilia();
            }

            if (this.tab == "opinioes") {
              this.loadOpinioes();
            }
          }
        }, {
          key: "loadTotals",
          value: function loadTotals() {
            var _this4 = this;

            //get /totalpati
            this.api.get('totalpati').then(function (res) {
              console.log("Total pati API -> ", res);

              if (res) {
                res.subscribe(function (data) {
                  console.log("totalpati > ", data);
                  _this4.totalpati = data && data[0] && data[0].totalpatients ? data[0].totalpatients : '0';
                }, function (err) {
                  console.log("Total pati API error -> ", err);

                  _this4.api.proccessError(err);
                });
              }
            }); //get /geralpoint

            this.api.get('geralpoint').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("geralpoint > ", data);
                  _this4.geralpoint = data && data[0] && data[0].mediafinal ? data[0].mediafinal.$numberDecimal : '0';
                }, function (err) {
                  console.log(err);

                  _this4.api.proccessError(err);
                });
              }
            }); //get /globalpoint

            this.api.get('globalpoint').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("globalpoint > ", data);
                  _this4.globalpoint = data && data[0] && data[0].mediafinal ? data[0].mediafinal : '0';
                  _this4.globalpoint = _this4.globalpoint.toFixed(2);
                }, function (err) {
                  console.log(err);

                  _this4.api.proccessError(err);
                });
              }
            }); // bios

            this.api.get('bios').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("Bios > ", data);
                }, function (err) {
                  console.log(err);

                  _this4.api.proccessError(err);
                });
              }
            }); // totalglobal

            this.api.get('totalglobal').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("total global > ", data);
                }, function (err) {
                  console.log(err);

                  _this4.api.proccessError(err);
                });
              }
            }); //get /instaveis

            this.api.get('instavel').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("instaveis > ", data);
                  _this4.instaveis = data && data[0] && data[0].PacientesInstaveis ? data[0].PacientesInstaveis : '0';
                }, function (err) {
                  console.log(err);

                  _this4.api.proccessError(err);
                });
              }
            }); //get /estaveis

            this.api.get('estavel').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("estaveis > ", data);
                  _this4.estaveis = data && data[0] && data[0].PacientesEstaveis ? data[0].PacientesEstaveis : '0';
                }, function (err) {
                  console.log(err);

                  _this4.api.proccessError(err);
                });
              }
            }); //get /inativos

            this.api.get('inativo').then(function (res) {
              if (res) {
                res.subscribe(function (data) {
                  console.log("inativos > ", data);
                  _this4.inativos = data && data[0] && data[0].PacientesEstaveis ? data[0].PacientesEstaveis : '0';
                }, function (err) {
                  console.log(err);

                  _this4.api.proccessError(err);
                });
              }
            });
          }
        }, {
          key: "loadHoje",
          value: function loadHoje(category) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.api.get('prontuario/today/' + this.patientId + '/' + category).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("inativos > ", data);
                            _this5.inativos = data && data[0] && data[0].PacientesEstaveis ? data[0].PacientesEstaveis : '0';
                          }, function (err) {
                            console.log(err);

                            _this5.api.proccessError(err);
                          });
                        }
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // Historico

        }, {
          key: "loadHistorico",
          value: function loadHistorico() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.api.get('prontuario/historic/0/30').then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("historico > ", data);
                          }, function (err) {
                            console.log(err);

                            _this6.api.proccessError(err);
                          });
                        }
                      });

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // Exames

        }, {
          key: "loadExames",
          value: function loadExames() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.api.get('prontuario/exams/0/30').then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Exams > ", data);
                          }, function (err) {
                            console.log(err);

                            _this7.api.proccessError(err);
                          });
                        }
                      });

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // AUTOCUIDADO

        }, {
          key: "loadAutocuidado",
          value: function loadAutocuidado() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.api.get('grafrisk/food/' + this.year).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Autocuidado food > ", data);
                          }, function (err) {
                            console.log(err);

                            _this8.api.proccessError(err);
                          });
                        }
                      });
                      this.api.get('grafrisk/activie/' + this.year).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Autocuidado activie > ", data);
                          }, function (err) {
                            console.log(err);

                            _this8.api.proccessError(err);
                          });
                        }
                      });
                      this.api.get('grafrisk/content/' + this.year).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Autocuidado content > ", data);
                          }, function (err) {
                            console.log(err);

                            _this8.api.proccessError(err);
                          });
                        }
                      });
                      this.api.get('grafrisk/treatm/' + this.year).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Autocuidado treatm > ", data);
                          }, function (err) {
                            console.log(err);

                            _this8.api.proccessError(err);
                          });
                        }
                      }); //Autocuidado Mes

                      this.api.get('grafrisk/food/' + this.year + '/' + this.month).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Autocuidado food mes > ", data);
                          }, function (err) {
                            console.log(err);

                            _this8.api.proccessError(err);
                          });
                        }
                      });
                      this.api.get('grafrisk/activie/' + this.year + '/' + this.month).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Autocuidado activie mes > ", data);
                          }, function (err) {
                            console.log(err);

                            _this8.api.proccessError(err);
                          });
                        }
                      });
                      this.api.get('grafrisk/content/' + this.year + '/' + this.month).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Autocuidado content mes > ", data);
                          }, function (err) {
                            console.log(err);

                            _this8.api.proccessError(err);
                          });
                        }
                      });
                      this.api.get('grafrisk/treatm/' + this.year + '/' + this.month).then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Autocuidado treatm mes > ", data);
                          }, function (err) {
                            console.log(err);

                            _this8.api.proccessError(err);
                          });
                        }
                      });

                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // Biosensores

        }, {
          key: "loadBio",
          value: function loadBio() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.api.get('prontuario/biosensors/0/30').then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Bio > ", data);
                          }, function (err) {
                            console.log(err);

                            _this9.api.proccessError(err);
                          });
                        }
                      });

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } // Familia

        }, {
          key: "loadFamilia",
          value: function loadFamilia() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this10 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.api.get('prontuario/family/0/30').then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Family > ", data);
                          }, function (err) {
                            console.log(err);

                            _this10.api.proccessError(err);
                          });
                        }
                      });

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          } // Opinioes

        }, {
          key: "loadOpinioes",
          value: function loadOpinioes() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.api.get('prontuario/opinions/0/30').then(function (res) {
                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Family > ", data);
                          }, function (err) {
                            console.log(err);

                            _this11.api.proccessError(err);
                          });
                        }
                      });

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return ProntuarioPage;
      }();

      ProntuarioPage.ɵfac = function ProntuarioPage_Factory(t) {
        return new (t || ProntuarioPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      ProntuarioPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProntuarioPage,
        selectors: [["app-prontuario"]],
        decls: 121,
        vars: 39,
        consts: [[1, "toolbar-bg"], ["src", "../../assets/images/mia-wht.png", "width", "200", "alt", ""], ["slot", "end", 1, "ion-text-right"], ["wrap-box", ""], [1, "sub-toolbar"], ["size", "8"], ["size", "4"], ["lines", "none", 1, "search-bar"], ["type", "text", "placeholder", "Pesquise pacientes por nome ou CPF...", 1, "search-input"], ["ios", "ios-search", "md", "md-search", 1, "searchbar-icon"], ["size", "6"], [1, "card-stats", 2, "margin-left", "0px"], ["size", "3"], ["lines", "none", 2, "margin-top", "8px"], ["color", "primary", 1, "ion-text-center"], [2, "color", "#9F9C9C !important", "font-size", "12px"], ["size", "2.5", 2, "text-align", "center"], [3, "percent", "clockwise", "showTitle", "showSubtitle", "space", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "titleColor", "innerStrokeColor", "animation", "animationDuration", "showUnits"], ["size", "2"], ["style", "color: #2694A3", "class", "h4-stats", 4, "ngIf"], ["style", "color: #EF9C92", "class", "h4-stats", 4, "ngIf"], [1, "card-stats", 2, "margin-right", "0px"], ["lines", "none", 2, "border-right", "1px solid #999999"], ["color", "secondary", 1, "ion-text-center"], ["name", "sad", 1, "icon-stats"], [1, "p-stats"], ["name", "phone-portrait", 1, "icon-stats"], ["name", "logo-rss", 1, "icon-stats"], ["lines", "none"], ["name", "happy", 1, "icon-stats"], [1, "ion-no-padding", "ion-no-margin", "card-style"], [2, "padding", "0px"], ["size", "2", 2, "padding", "0px"], ["lines", "none", 1, "card-heading"], ["slot", "start", "name", "heart", 1, "icon-header"], ["color", "light", 1, "ion-text-center", "label-item"], ["size", "10"], [1, "segment-bg"], ["color", "primary", 3, "ngModel", "ionChange", "ngModelChange"], ["value", "hoje"], ["value", "historico"], ["value", "exames"], ["value", "biosensores"], ["value", "autocuidado"], ["value", "familia"], ["value", "opinioes"], [4, "ngIf"], ["slot", "bottom", 1, "tabs-bg"], [2, "width", "100%"], ["tab", "dashboard", 1, "tabs-btn", 3, "click"], ["name", "pulse"], ["tab", "pacientes", 1, "tabs-btn", 3, "click"], ["name", "happy"], ["tab", "data", 1, "tabs-btn", 3, "click"], ["name", "cloud-outline"], [1, "h4-stats", 2, "color", "#2694A3"], [1, "h4-stats", 2, "color", "#EF9C92"], ["src", "../../assets/images/person.png", 1, "hoje-person-img"], ["size", "9"], [1, "h4-hoje"], [1, "p-hoje-title"], [1, "p-hoje-subtitle"], ["size", "4", 3, "click"], ["src", "../../assets/images/body-icon.png", 1, "hoje-bottom-imgs"], [2, "text-align", "center"], ["src", "../../assets/images/emot-icon.png", 1, "hoje-bottom-imgs"], ["src", "../../assets/images/mind-icon.png", 1, "hoje-bottom-imgs"], ["src", "../../assets/images/chakra-icon.png", 1, "hoje-bottom-imgs"], ["size", "12", 2, "padding-top", "25px"], [1, "pront-headings"], ["size", "12"], ["id", "prontChart", "width", "200", "height", "220", "responsive", "true", 1, "pront-style"], ["size", "1"], ["color", "primary"], ["color", "secondary"], ["size", "9", 1, "col-left-historic"], ["size", "10", 1, "col-bottom-historic", 2, "padding-top", "50px"], ["size", "3", 2, "padding", "0px"], ["size", "4", 2, "padding", "0px"], [1, "historic-p-year"], ["src", "../../assets/images/date-slot.png", 1, "date-slot-img"], ["size", "8", 2, "padding", "8px 0px 0px 0px"], [1, "historic-p-date"], [1, "heading-bg-dark"], [2, "padding", "10px"], [2, "margin-left", "10px"], ["color", "primary", 2, "margin-right", "1%"], [1, "ion-align-items-center"], ["src", "../../assets/images/img2.jpeg", "alt", ""], ["size", "11"], [1, "bar"], [1, "bar-1", 3, "ngStyle"], [1, "bar-2", 3, "ngStyle"], [1, "bar-3", 3, "ngStyle"], ["src", "../../assets/images/img5.jpeg", "alt", ""], ["src", "../../assets/images/img1.jpeg", "alt", ""], ["src", "../../assets/images/img3.jpeg", "alt", ""], ["src", "../../assets/images/img4.jpeg", "alt", ""]],
        template: function ProntuarioPage_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "PACIENTES");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Vis\xE3o geral de um paciente");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-col", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-col", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Pacientes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-col", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "circle-progress", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-col", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ProntuarioPage_h4_35_Template, 5, 1, "h4", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-col", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "circle-progress", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-col", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ProntuarioPage_h4_39_Template, 5, 0, "h4", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-card", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-col", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-item", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "ion-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "INST\xC1VEIS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-col", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-item", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "ion-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "INATIVOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-col", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-item", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "ion-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "BIOCONECTADOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "ion-col", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ion-item", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "ion-label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "ion-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "EST\xC1VEIS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "ion-card", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ion-card-header", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "ion-col", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "ion-item", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "ion-icon", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "ion-label", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " PRONTUARIO ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "ion-col", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "ion-card-content", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "ion-segment", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function ProntuarioPage_Template_ion_segment_ionChange_86_listener($event) {
              return ctx.segmentChange($event);
            })("ngModelChange", function ProntuarioPage_Template_ion_segment_ngModelChange_86_listener($event) {
              return ctx.tab = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "ion-segment-button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Hoje");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "ion-segment-button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Hist\xF3rico");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "ion-segment-button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Exames");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "ion-segment-button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Biosensores");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "ion-segment-button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Autocuidado");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "ion-segment-button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Fam\xEDlia");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "ion-segment-button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Opini\xF5es");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, ProntuarioPage_div_101_Template, 64, 0, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, ProntuarioPage_div_102_Template, 91, 0, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, ProntuarioPage_div_103_Template, 87, 30, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "ion-tab-bar", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "ion-row", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "ion-col", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "ion-tab-button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProntuarioPage_Template_ion_tab_button_click_107_listener() {
              return ctx.openPage("/tabs/dashboard");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "ion-icon", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "ion-col", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "ion-tab-button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProntuarioPage_Template_ion_tab_button_click_112_listener() {
              return ctx.openPage("/tabs/pacientes");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "ion-icon", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Pacientes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "ion-col", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "ion-tab-button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProntuarioPage_Template_ion_tab_button_click_117_listener() {
              return ctx.openPage("/tabs/data");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "ion-icon", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("2,108", ctx.totalpati, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("percent", ctx.geralpoint);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clockwise", false)("showTitle", true)("showSubtitle", false)("space", -10)("radius", 28)("outerStrokeWidth", 10)("innerStrokeWidth", 10)("outerStrokeColor", "#2694A3")("titleColor", "#2694A3")("innerStrokeColor", "#e7e8ea")("animation", true)("animationDuration", 300)("showUnits", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.geralpoint);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("percent", ctx.globalpoint);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clockwise", false)("showTitle", true)("showSubtitle", false)("space", -10)("radius", 28)("outerStrokeWidth", 10)("innerStrokeWidth", 10)("outerStrokeColor", "#EF9C92")("titleColor", "#EF9C92")("innerStrokeColor", "#e7e8ea")("animation", true)("animationDuration", 300)("showUnits", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.globalpoint);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("54 ", ctx.instaveis, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("321 ", ctx.inativos, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bioconectados || 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("1.200", ctx.estaveis, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.tab);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tab == "hoje");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tab == "historico");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tab == "autocuidado");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _components_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_7__["UserBarComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__["CircleProgressComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]],
        styles: [".toolbar-bg[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(264deg, #2694A3 0%, #01426A 100%) 0% 0% no-repeat padding-box !important;\n  box-shadow: 0px 3px 20px #00000059;\n  display: flex;\n  margin: 0px;\n}\n\n.tabs-bg[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(266deg, #2694A3 0%, #01426A 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px -5px 30px #505C6229;\n  opacity: 1;\n}\n\n.tabs-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #ffffff;\n}\n\n.pront-style[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.bar[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  width: 90%;\n  height: 25px;\n  background: #F1B4AE;\n  display: flex;\n  color: black;\n  text-align: center;\n}\n\n.bar-1[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-bottom-left-radius: 15px;\n  height: 25px;\n  background: #2694a3;\n}\n\n.bar-2[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  height: 25px;\n  background: #ffce00;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000029;\n  border-radius: 10px;\n}\n\n.searchbar-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #BCBCCB;\n  margin-right: 8px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  --placeholder-color: #43425D !important;\n}\n\n.card-style[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.card-stats[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.p-stats[_ngcontent-%COMP%] {\n  color: #9F9C9C !important;\n  font-size: 10px;\n}\n\n.h4-stats[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-align: left;\n  margin-top: 30px;\n}\n\n.icon-stats[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nion-card-header[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(264deg, #2694A3 0%, #01426A 100%) 0% 0% no-repeat padding-box !important;\n}\n\n.card-heading[_ngcontent-%COMP%] {\n  --background: transparent radial-gradient(closest-side at 100% 0%, #F0BEB8 0%, #EF9C92 100%) 0% 0% no-repeat padding-box !important;\n}\n\n.icon-header[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  margin-right: 0px;\n}\n\n.label-item[_ngcontent-%COMP%] {\n  letter-spacing: 1.8px;\n  font-size: 12px;\n}\n\n.segment-bg[_ngcontent-%COMP%] {\n  background: #F1F1F1 0% 0% no-repeat padding-box;\n}\n\nion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  color: #525252 !important;\n}\n\nion-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  background: #009688 !important;\n  --indicator-height: 8px !important;\n}\n\nion-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-indicator[_ngcontent-%COMP%] {\n  color: #EF9E95 !important;\n}\n\nion-segment[_ngcontent-%COMP%]   div.segment-button-indicator[_ngcontent-%COMP%] {\n  --indicator-height: 8px !important;\n}\n\n.pront-headings[_ngcontent-%COMP%] {\n  letter-spacing: 2.25px;\n  text-align: center;\n  color: #525252;\n}\n\n.hoje-person-img[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n  border-radius: 40px;\n}\n\n.h4-hoje[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: left;\n  margin-top: 12px;\n  color: #238E9E;\n}\n\n.p-hoje-title[_ngcontent-%COMP%] {\n  color: #3C3C3C;\n  text-align: left;\n}\n\n.p-hoje-subtitle[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #00000059;\n}\n\n.hoje-bottom-imgs[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.col-bottom-historic[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #525252;\n}\n\n.col-left-historic[_ngcontent-%COMP%] {\n  padding: 0px;\n  border-left: 2px solid #525252;\n}\n\n.heading-bg-dark[_ngcontent-%COMP%] {\n  background: #EEEEEE !important;\n  border-top: 1px solid #525252;\n  margin-top: 31px;\n}\n\n.date-slot-img[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 80px;\n  float: right;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 0px !important;\n  border: 0;\n  height: 1px;\n  background: #333;\n  background-image: linear-gradient(to right, #333, #333, #333);\n}\n\n.historic-p-date[_ngcontent-%COMP%] {\n  letter-spacing: 1.8px;\n}\n\n.historic-p-year[_ngcontent-%COMP%] {\n  letter-spacing: 1.8px;\n  position: absolute;\n  left: 43px;\n  top: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbnR1YXJpby9wcm9udHVhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdIQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0kscUdBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1Q0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxnSEFBQTtBQUNKOztBQUVBO0VBQ0ksbUlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQ0FBQTtBQUNKOztBQUlJO0VBQ0kseUJBQUE7QUFEUjs7QUFJSTtFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtBQUZSOztBQUtJO0VBQ0kseUJBQUE7QUFIUjs7QUFNSTtFQUNJLGtDQUFBO0FBSlI7O0FBUUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUxKOztBQVFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTEo7O0FBUUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFRQTtFQUNJLGdDQUFBO0FBTEo7O0FBUUE7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7QUFMSjs7QUFRQTtFQUNJLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2REFBQTtBQUxKOztBQVFBO0VBQ0kscUJBQUE7QUFMSjs7QUFRQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvcHJvbnR1YXJpby9wcm9udHVhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWJne1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgyNjRkZWcsICMyNjk0QTMgMCUsICMwMTQyNkEgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAyMHB4ICMwMDAwMDA1OTtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLnRhYnMtYmd7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI2NmRlZywgIzI2OTRBMyAwJSwgIzAxNDI2QSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgYm94LXNoYWRvdzogMHB4IC01cHggMzBweCAjNTA1QzYyMjk7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnRhYnMtYnRue1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ucHJvbnQtc3R5bGV7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uYmFye1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogI0YxQjRBRTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYXItMXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogIzI2OTRhMztcbn1cblxuLmJhci0ye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmNlMDA7XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMjk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnNlYXJjaGJhci1pY29ue1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogI0JDQkNDQjtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnNlYXJjaC1pbnB1dHtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNDM0MjVEICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLXN0eWxle1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXJkLXN0YXRze1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5wLXN0YXRze1xuICAgIGNvbG9yOiAjOUY5QzlDICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uaDQtc3RhdHN7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmljb24tc3RhdHN7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI2NGRlZywgIzI2OTRBMyAwJSwgIzAxNDI2QSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3ggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaGVhZGluZ3tcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHJhZGlhbC1ncmFkaWVudChjbG9zZXN0LXNpZGUgYXQgMTAwJSAwJSwgI0YwQkVCOCAwJSwgI0VGOUM5MiAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3ggIWltcG9ydGFudDtcbn1cblxuLmljb24taGVhZGVye1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4ubGFiZWwtaXRlbXtcbiAgICBsZXR0ZXItc3BhY2luZzogMS44cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc2VnbWVudC1iZ3tcbiAgICBiYWNrZ3JvdW5kOiAjRjFGMUYxIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cblxuaW9uLXNlZ21lbnR7XG4gICAgXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgICAgICBjb2xvcjogIzUyNTI1MiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwOTY4OCAhaW1wb3J0YW50O1xuICAgICAgICAtLWluZGljYXRvci1oZWlnaHQ6IDhweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1pbmRpY2F0b3J7XG4gICAgICAgIGNvbG9yOiAjRUY5RTk1ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgZGl2LnNlZ21lbnQtYnV0dG9uLWluZGljYXRvcntcbiAgICAgICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiA4cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5wcm9udC1oZWFkaW5nc3tcbiAgICBsZXR0ZXItc3BhY2luZzogMi4yNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgY29sb3I6ICM1MjUyNTI7XG59XG5cbi5ob2plLXBlcnNvbi1pbWd7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbi5oNC1ob2ple1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgY29sb3I6ICMyMzhFOUU7XG59XG5cbi5wLWhvamUtdGl0bGV7XG4gICAgY29sb3I6ICMzQzNDM0M7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnAtaG9qZS1zdWJ0aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjMDAwMDAwNTk7XG59XG5cbi5ob2plLWJvdHRvbS1pbWdze1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jb2wtYm90dG9tLWhpc3Rvcmlje1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTI1MjUyO1xufVxuXG4uY29sLWxlZnQtaGlzdG9yaWN7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzUyNTI1Mjtcbn1cblxuLmhlYWRpbmctYmctZGFya3tcbiAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1MjUyNTI7XG4gICAgbWFyZ2luLXRvcDogMzFweDtcbn1cblxuLmRhdGUtc2xvdC1pbWd7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuaHJ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzMzMsICMzMzMsICMzMzMpO1xufVxuXG4uaGlzdG9yaWMtcC1kYXRle1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjhweDtcbn1cblxuLmhpc3RvcmljLXAteWVhcntcbiAgICBsZXR0ZXItc3BhY2luZzogMS44cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICBsZWZ0OiA0M3B4OyBcbiAgICB0b3A6IDIycHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProntuarioPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-prontuario',
            templateUrl: './prontuario.page.html',
            styleUrls: ['./prontuario.page.scss']
          }]
        }], function () {
          return [{
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }, {
            type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "adIq":
    /*!*************************************************!*\
      !*** ./src/app/prontuario/prontuario.module.ts ***!
      \*************************************************/

    /*! exports provided: ProntuarioPageModule */

    /***/
    function adIq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProntuarioPageModule", function () {
        return ProntuarioPageModule;
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


      var _prontuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./prontuario.page */
      "QjNu");
      /* harmony import */


      var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-circle-progress */
      "K1R0");

      var routes = [{
        path: '',
        component: _prontuario_page__WEBPACK_IMPORTED_MODULE_6__["ProntuarioPage"]
      }];

      var ProntuarioPageModule = function ProntuarioPageModule() {
        _classCallCheck(this, ProntuarioPageModule);
      };

      ProntuarioPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProntuarioPageModule
      });
      ProntuarioPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProntuarioPageModule_Factory(t) {
          return new (t || ProntuarioPageModule)();
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
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProntuarioPageModule, {
          declarations: [_prontuario_page__WEBPACK_IMPORTED_MODULE_6__["ProntuarioPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProntuarioPageModule, [{
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
            declarations: [_prontuario_page__WEBPACK_IMPORTED_MODULE_6__["ProntuarioPage"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=prontuario-prontuario-module-es5.js.map