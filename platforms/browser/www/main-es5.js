(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+fvF": function fvF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormModalPage", function () {
        return FormModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _services_util_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../services/util/util.service */
      "YOl1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FormModalPage_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Estado cl\xEDnico / Patologia: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Categoria da patologia: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " C\xF3digo CID: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Modelo de formul\xE1rio: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " C\xF3digo interno do formul\xE1rio: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Par\xE2metro: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormModalPage_div_7_Template_ion_button_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10.submitStatus(ctx_r10.statusForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Publicar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.statusForm);
        }
      }

      function FormModalPage_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Estado Cl\xEDnico / Patologia: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Categoria: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Refer\xEAncia 1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Refer\xEAncia 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Refer\xEAncia 3: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Refer\xEAncia 4: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Refer\xEAncia 5: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "ion-input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Imagem de Refer\xEAncia: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormModalPage_div_8_Template_ion_button_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r12.submitBiomark(ctx_r12.biomarkForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Publicar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.biomarkForm);
        }
      }

      function FormModalPage_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Estado Cl\xEDnico / Patologia: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Categoria: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Ordem: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Upload de arquivo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Link do v\xEDdeo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Tratamento: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Dura\xE7\xE3o: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "ion-input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " T\xEDtulo 1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Texto 1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "ion-input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " T\xEDtulo 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "ion-input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Texto 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "ion-input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ion-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormModalPage_div_9_Template_ion_button_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r14.submitTratamento(ctx_r14.tratamentoForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Publicar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.tratamentoForm);
        }
      }

      function FormModalPage_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Estado cl\xEDnico / Patologia: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Categoria: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Ordem da Recomenda\xE7\xE3o: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Upload de arquivo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Link do v\xEDdeo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Descri\xE7\xE3o: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Dura\xE7\xE3o: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "ion-input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " T\xEDtulo 1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Texto 1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "ion-input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " T\xEDtulo 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "ion-input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Texto 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "ion-input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ion-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormModalPage_div_10_Template_ion_button_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r16.submitContent(ctx_r16.contentForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Publicar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.contentForm);
        }
      }

      function FormModalPage_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Categoria: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Ordem: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Upload de arquivo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Link do v\xEDdeo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Nome do alimento: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Quantidade: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "ion-input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Unidade de Medida: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " T\xEDtulo 1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "ion-input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Texto 1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "ion-input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " T\xEDtulo 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "ion-input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Texto 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "ion-input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "ion-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormModalPage_div_11_Template_ion_button_click_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r18.submitFood(ctx_r18.foodForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Publicar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r4.foodForm);
        }
      }

      function FormModalPage_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Status: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Categoria: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Ordem: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Arquivo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Link do v\xEDdeo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Atividade: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Dura\xE7\xE3o: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "ion-input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " T\xEDtulo 1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Texto 1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "ion-input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " T\xEDtulo 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "ion-input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Texto 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "ion-input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ion-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormModalPage_div_12_Template_ion_button_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r20.submitActivity(ctx_r20.activityForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Publicar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r5.activityForm);
        }
      }

      function FormModalPage_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Categoria: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Nome do formul\xE1rio: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " C\xF3digo interno do formul\xE1rio: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Ordem do formul\xE1rio: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Escala / N\xEDvel: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Ordem: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Pergunta: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "ion-input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Par\xE2metro: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Resposta 1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "ion-input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Resposta 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "ion-input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Resposta 3: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "ion-input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Resposta 4: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "ion-input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Resposta 5: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "ion-input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "ion-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormModalPage_div_13_Template_ion_button_click_54_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r22.submitMultiple(ctx_r22.multipleForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Publicar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r6.multipleForm);
        }
      }

      function FormModalPage_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Categoria: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Nome do Formul\xE1rio: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " C\xF3digo interno do formul\xE1rio: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Ordem do formul\xE1rio: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " N\xEDvel: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Tipo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Ordem: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "ion-input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Parametro: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Nome: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "ion-input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Imagem: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "ion-input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Resposta 1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "ion-input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Resposta 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "ion-input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Resposta 3: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "ion-input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " Resposta 4: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "ion-input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " Resposta 5: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "ion-input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "ion-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormModalPage_div_14_Template_ion_button_click_62_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r24.submitGestalt(ctx_r24.gestaltForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Publicar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r7.gestaltForm);
        }
      }

      function FormModalPage_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Categoria: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Nome do formul\xE1rio: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " C\xF3digo do Formul\xE1rio: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Ordem do formul\xE1rio no fluxo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Escala / N\xEDvel: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Tipo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Ordem da quest\xE3o no formul\xE1rio: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "ion-input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Par\xE2metro: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Pergunta: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "ion-input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Resposta 1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "ion-input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Resposta 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "ion-input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ion-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormModalPage_div_15_Template_ion_button_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r26.submitBinaria(ctx_r26.binariaForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Publicar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r8.binariaForm);
        }
      }

      function FormModalPage_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Categoria: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Formul\xE1rio: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Ordem do formul\xE1rio no fluxo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Escala / N\xEDvel: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Ordem: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Pergunta: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Par\xE2metro: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "ion-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Resposta 1: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Resposta 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "ion-input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Resposta 3: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "ion-input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Resposta 4: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "ion-input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "ion-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Resposta 5: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "ion-input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "ion-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormModalPage_div_16_Template_ion_button_click_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r28.submitLevels(ctx_r28.levelForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Publicar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r9.levelForm);
        }
      }

      var FormModalPage = /*#__PURE__*/function () {
        function FormModalPage(router, loadingCtrl, modalController, navParams, formBuilder, api, util) {
          _classCallCheck(this, FormModalPage);

          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.modalController = modalController;
          this.navParams = navParams;
          this.formBuilder = formBuilder;
          this.api = api;
          this.util = util;
          this.title = navParams.get("title");
          this.form_type = navParams.get("form_type");
          this.item = navParams.get("item");
          this.index = navParams.get("index");
          console.log(this.title);
          console.log(this.form_type);
          console.log(this.item);
          this.statusForm = formBuilder.group({
            patolog: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            cid: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            form: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            parametro: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
          });

          if (this.title == "Editar Estado Clínico / Patologia:") {
            this.statusForm = formBuilder.group({
              patolog: [this.item.patolog, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              category: [this.item.category, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              cid: [this.item.cid, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              type: [this.item.type, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              form: [this.item.form, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              parametro: [this.item.parametro, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
            });
          }

          this.biomarkForm = formBuilder.group({
            status: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            biomark: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ref1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ref2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ref3: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ref4: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ref5: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            imgref: [""]
          });
          this.tratamentoForm = formBuilder.group({
            status: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ordem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            arquivo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            video: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            tratamento: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            duracao: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            title1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            text1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            title2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            text2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
          });
          this.contentForm = formBuilder.group({
            status: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ordem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            arquivo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            video: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            conteudo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            duracao: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            title1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            text1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            title2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            text2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
          });
          this.foodForm = formBuilder.group({
            status: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ordem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            arquivo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            video: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            alimento: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            quantidade: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            medida: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            title1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            text1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            title2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            text2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
          });
          this.activityForm = formBuilder.group({
            status: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ordem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            arquivo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            video: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            atividade: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            duracao: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            title1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            text1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            title2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            text2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
          });
          this.multipleForm = formBuilder.group({
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            nform: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            formulario: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            fordem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            nivel: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ordem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            parametro: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            pergunta: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans3: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans4: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans5: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
          });

          if (this.title == "Editar Questão de Múltipla Escolha") {
            this.multipleForm = formBuilder.group({
              category: [(_a = this.item.questoes[this.index]) === null || _a === void 0 ? void 0 : _a.category, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              nform: [(_b = this.item.formularios[0]) === null || _b === void 0 ? void 0 : _b.nform, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              formulario: [this.item.formularios[0].form, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              fordem: [this.item.formularios[0].fordem, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              nivel: [this.item.formularios[0].nivel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              ordem: [(_c = this.item.questoes[0]) === null || _c === void 0 ? void 0 : _c.ordem, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              pergunta: [(_d = this.item.questoes[this.index]) === null || _d === void 0 ? void 0 : _d.pergunta, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              parametro: [(_e = this.item.questoes[this.index]) === null || _e === void 0 ? void 0 : _e.parametro, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              ans1: [(_f = this.item.questoes[this.index]) === null || _f === void 0 ? void 0 : _f.ans1, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              ans2: [(_g = this.item.questoes[this.index]) === null || _g === void 0 ? void 0 : _g.ans2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              ans3: [(_h = this.item.questoes[this.index]) === null || _h === void 0 ? void 0 : _h.ans3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              ans4: [(_j = this.item.questoes[this.index]) === null || _j === void 0 ? void 0 : _j.ans4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
              ans5: [(_k = this.item.questoes[this.index]) === null || _k === void 0 ? void 0 : _k.ans5, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
            });
          }

          this.gestaltForm = formBuilder.group({
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            nform: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            formulario: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            fordem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            nivel: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            tipo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ordem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            parametro: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            img: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            nome: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans3: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans4: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans5: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
          });
          this.binariaForm = formBuilder.group({
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            nform: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            formulario: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            fordem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            nivel: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            tipo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ordem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            parametro: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            pergunta: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
          });
          this.levelForm = formBuilder.group({
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            formulario: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            fordem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            nivel: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ordem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            pergunta: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            parametro: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans3: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans4: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            ans5: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
          });
        }

        _createClass(FormModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.modalController.dismiss();
          }
        }, {
          key: "submitStatus",
          value: function submitStatus(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var fd;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      fd = new FormData();
                      fd.append("patolog", data.patolog);
                      fd.append("category", data.category);
                      fd.append("cid", data.cid);
                      fd.append("type", data.type);
                      fd.append("form", data.form);
                      fd.append("parametro", data.parametro);

                      if (this.title == "Edit Status") {
                        this.post_API("editpato", fd);
                      } else {
                        this.post_API("inspato", fd);
                      }

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "submitBiomark",
          value: function submitBiomark(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var fd;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      fd = new FormData();
                      fd.append("status", data.status);
                      fd.append("biomark", data.biomark);
                      fd.append("category", data.category);
                      fd.append("ref1", data.ref1);
                      fd.append("ref2", data.ref2);
                      fd.append("ref3", data.ref3);
                      fd.append("ref4", data.ref4);
                      fd.append("ref5", data.ref5);
                      fd.append("imgref", data.imgref);
                      this.post_API("insbiomark", fd);

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "submitTratamento",
          value: function submitTratamento(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var fd;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      fd = new FormData();
                      fd.append("status", data.status);
                      fd.append("categoria", data.category);
                      fd.append("ordem", data.ordem);
                      fd.append("arquivo", data.arquivo);
                      fd.append("video", data.video);
                      fd.append("tratamento", data.tratamento);
                      fd.append("duracao", data.duracao);
                      fd.append("title1", data.title1);
                      fd.append("txt1", data.text1);
                      fd.append("title2", data.title2);
                      fd.append("txt2", data.text2);
                      this.post_API("instreatm", fd);

                    case 13:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "submitContent",
          value: function submitContent(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var fd;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      fd = new FormData();
                      fd.append("status", data.status);
                      fd.append("categoria", data.category);
                      fd.append("ordem", data.ordem);
                      fd.append("arquivo", data.arquivo);
                      fd.append("video", data.video);
                      fd.append("conteudo", data.conteudo);
                      fd.append("duracao", data.duracao);
                      fd.append("title1", data.title1);
                      fd.append("txt1", data.text1);
                      fd.append("title2", data.title2);
                      fd.append("txt2", data.text2);
                      this.post_API("inscontent", fd);

                    case 13:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "submitFood",
          value: function submitFood(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var fd;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      fd = new FormData();
                      fd.append("status", data.status);
                      fd.append("categoria", data.category);
                      fd.append("ordem", data.ordem);
                      fd.append("arquivo", data.arquivo);
                      fd.append("video", data.video);
                      fd.append("alimento", data.alimento);
                      fd.append("quantidade", data.quantidade);
                      fd.append("medida", data.medida);
                      fd.append("title1", data.title1);
                      fd.append("txt1", data.text1);
                      fd.append("title2", data.title2);
                      fd.append("txt2", data.text2);
                      this.post_API("insfood", fd);

                    case 14:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "submitActivity",
          value: function submitActivity(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var fd;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      fd = new FormData();
                      fd.append("status", data.status);
                      fd.append("categoria", data.category);
                      fd.append("ordem", data.ordem);
                      fd.append("arquivo", data.arquivo);
                      fd.append("video", data.video);
                      fd.append("atividade", data.atividade);
                      fd.append("duracao", data.duracao);
                      fd.append("title1", data.title1);
                      fd.append("txt1", data.text1);
                      fd.append("title2", data.title2);
                      fd.append("txt2", data.text2);
                      this.post_API("insactivie", fd);

                    case 13:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "submitMultiple",
          value: function submitMultiple(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var fd;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      fd = new FormData();
                      fd.append("category", data.category);
                      fd.append("nform", data.nform);
                      fd.append("formulario", data.formulario);
                      fd.append("fordem", data.fordem);
                      fd.append("nivel", data.nivel);
                      fd.append("ordem", data.ordem);
                      fd.append("parametro", data.parametro);
                      fd.append("pergunta", data.pergunta);
                      fd.append("ans1", data.ans1);
                      fd.append("ans2", data.ans2);
                      fd.append("ans3", data.ans3);
                      fd.append("ans4", data.ans4);
                      fd.append("ans5", data.ans5);

                      if (this.title == "Editar Questão de Múltipla Escolha") {
                        this.post_API("changequest/" + data.ordem, fd);
                      } else {
                        this.post_API("insertquest", fd);
                      }

                    case 15:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "submitGestalt",
          value: function submitGestalt(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var fd;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      fd = new FormData();
                      fd.append("category", data.category);
                      fd.append("nform", data.nform);
                      fd.append("formulario", data.formulario);
                      fd.append("fordem", data.fordem);
                      fd.append("nivel", data.nivel);
                      fd.append("ord", data.ordem);
                      fd.append("tipo", data.tipo);
                      fd.append("parametro", data.parametro);
                      fd.append("nome", data.nome);
                      fd.append("img", data.img);
                      fd.append("ans1", data.ans1);
                      fd.append("ans2", data.ans2);
                      fd.append("ans3", data.ans3);
                      fd.append("ans4", data.ans4);
                      fd.append("ans5", data.ans5);
                      this.post_API("imgselect", fd);

                    case 17:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "submitBinaria",
          value: function submitBinaria(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var fd;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      fd = new FormData();
                      fd.append("category", data.category);
                      fd.append("nform", data.nform);
                      fd.append("formulario", data.formulario);
                      fd.append("fordem", data.fordem);
                      fd.append("nivel", data.nivel);
                      fd.append("ord", data.ordem);
                      fd.append("tipo", data.tipo);
                      fd.append("parametro", data.parametro);
                      fd.append("pergunta", data.pergunta);
                      fd.append("ans1", data.ans1);
                      fd.append("ans2", data.ans2);
                      this.post_API("insertquest2", fd);

                    case 13:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "submitLevels",
          value: function submitLevels(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var fd;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      fd = new FormData();
                      fd.append("category", data.category);
                      fd.append("formulario", data.formulario);
                      fd.append("fordem", data.fordem);
                      fd.append("nivel", data.nivel);
                      fd.append("ordem", data.ordem);
                      fd.append("parametro", data.parametro);
                      fd.append("pergunta", data.pergunta);
                      fd.append("ans1", data.ans1);
                      fd.append("ans2", data.ans2);
                      fd.append("ans3", data.ans3);
                      fd.append("ans4", data.ans4);
                      fd.append("ans5", data.ans5);
                      this.post_API("insertnivel", fd);

                    case 14:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "post_API",
          value: function post_API(url, fd) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      this.api.post_params(url, fd).then(function (res) {
                        console.log("After parse ", res);

                        if (res) {
                          res.subscribe(function (data) {
                            console.log("Multiple form submit API > ", data);

                            _this.util.presentToast({
                              header: "Success!",
                              message: data
                            }).then(function () {
                              _this.modalController.dismiss({
                                data: "edited"
                              });
                            });
                          }, function (err) {
                            console.log("API error -> ", err);

                            _this.api.proccessError(err);
                          });
                        }
                      });

                    case 1:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }]);

        return FormModalPage;
      }();

      FormModalPage.ɵfac = function FormModalPage_Factory(t) {
        return new (t || FormModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_util_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]));
      };

      FormModalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: FormModalPage,
        selectors: [["app-form-modal"]],
        inputs: {
          title: "title",
          form_type: "form_type"
        },
        decls: 17,
        vars: 11,
        consts: [["color", "light"], ["slot", "start"], ["name", "close", 2, "font-size", "1.5rem", 3, "click"], [4, "ngIf"], [3, "formGroup"], ["color", "transparent"], ["position", "stacked"], ["type", "text", "formControlName", "patolog"], ["type", "text", "formControlName", "category"], ["type", "text", "formControlName", "cid"], ["type", "text", "formControlName", "type"], ["type", "text", "formControlName", "form"], ["type", "text", "formControlName", "parametro"], ["expand", "block", "color", "secondary", 3, "click"], ["type", "text", "formControlName", "status"], ["type", "text", "formControlName", "ref1"], ["type", "text", "formControlName", "ref2"], ["type", "text", "formControlName", "ref3"], ["type", "text", "formControlName", "ref4"], ["type", "text", "formControlName", "ref5"], ["type", "text", "formControlName", "imgref"], ["type", "text", "formControlName", "ordem"], ["type", "text", "formControlName", "arquivo"], ["type", "text", "formControlName", "video"], ["type", "text", "formControlName", "tratamento"], ["type", "text", "formControlName", "duracao"], ["type", "text", "formControlName", "title1"], ["type", "text", "formControlName", "text1"], ["type", "text", "formControlName", "title2"], ["type", "text", "formControlName", "text2"], ["type", "text", "formControlName", "conteudo"], ["type", "text", "formControlName", "alimento"], ["type", "text", "formControlName", "quantidade"], ["type", "text", "formControlName", "medida"], ["type", "text", "formControlName", "atividade"], ["type", "text", "formControlName", "nform"], ["type", "text", "formControlName", "formulario"], ["type", "text", "formControlName", "fordem"], ["type", "text", "formControlName", "nivel"], ["type", "text", "formControlName", "pergunta"], ["type", "text", "formControlName", "ans1"], ["type", "text", "formControlName", "ans2"], ["type", "text", "formControlName", "ans3"], ["type", "text", "formControlName", "ans4"], ["type", "text", "formControlName", "ans5"], ["type", "text", "formControlName", "tipo"], ["type", "text", "formControlName", "nome"], ["type", "text", "formControlName", "img"]],
        template: function FormModalPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormModalPage_Template_ion_icon_click_3_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FormModalPage_div_7_Template, 29, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, FormModalPage_div_8_Template, 37, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, FormModalPage_div_9_Template, 49, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FormModalPage_div_10_Template, 49, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, FormModalPage_div_11_Template, 53, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, FormModalPage_div_12_Template, 49, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, FormModalPage_div_13_Template, 57, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, FormModalPage_div_14_Template, 65, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, FormModalPage_div_15_Template, 49, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, FormModalPage_div_16_Template, 53, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form_type == "patologia");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form_type == "biomark");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form_type == "tratamento");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form_type == "content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form_type == "food");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form_type == "activity");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form_type == "multiple");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form_type == "gestalt");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form_type == "binaria");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form_type == "levels");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"]],
        styles: ["ion-label[_ngcontent-%COMP%] {\n  color: #2694a3 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2RhbC9mb3JtLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9mb3JtLW1vZGFsL2Zvcm0tbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xuICAgIGNvbG9yOiAjMjY5NGEzICFpbXBvcnRhbnQ7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FormModalPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: "app-form-modal",
            templateUrl: "./form-modal.page.html",
            styleUrls: ["./form-modal.page.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]
          }];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          form_type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    0: function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/aim/aimf1/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR": function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiURL: 'https://aimscientist.herokuapp.com'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "E2f4": function E2f4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var StorageService = /*#__PURE__*/function () {
        function StorageService(storage) {
          _classCallCheck(this, StorageService);

          this.storage = storage;
        }

        _createClass(StorageService, [{
          key: "set",
          value: function set(key, value) {
            return this.storage.set(key, value);
          }
        }, {
          key: "get",
          value: function get(key) {
            return this.storage.get(key);
          }
        }, {
          key: "remove",
          value: function remove(key) {
            return this.storage.remove(key);
          }
        }]);

        return StorageService;
      }();

      StorageService.ɵfac = function StorageService_Factory(t) {
        return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]));
      };

      StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StorageService,
        factory: StorageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n": function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(navCtrl, platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.navCtrl = navCtrl;
          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.statusBar.styleDefault();

              _this2.splashScreen.hide();

              _this2.navCtrl.navigateRoot(['login']);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
          }, {
            type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]
          }, {
            type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YOl1": function YOl1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilService", function () {
        return UtilService;
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

      var UtilService = /*#__PURE__*/function () {
        function UtilService(loadingCtrl, toastCtrl, alertCtrl) {
          _classCallCheck(this, UtilService);

          this.loadingCtrl = loadingCtrl;
          this.toastCtrl = toastCtrl;
          this.alertCtrl = alertCtrl;
        }

        _createClass(UtilService, [{
          key: "presentAlert",
          value: function presentAlert(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var alert;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.alertCtrl.create(data);

                    case 2:
                      alert = _context12.sent;
                      _context12.next = 5;
                      return alert.present();

                    case 5:
                      return _context12.abrupt("return", _context12.sent);

                    case 6:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "presentErr",
          value: function presentErr(hdr, msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var alert;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.alertCtrl.create({
                        header: hdr,
                        message: msg,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context13.sent;
                      _context13.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var toast;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.toastCtrl.create(Object.assign({
                        duration: data.duration ? data.duration : 3500
                      }, data));

                    case 2:
                      toast = _context14.sent;
                      _context14.next = 5;
                      return toast.present();

                    case 5:
                      return _context14.abrupt("return", _context14.sent);

                    case 6:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.loadingCtrl.create(data);

                    case 2:
                      this.loading = _context15.sent;
                      _context15.next = 5;
                      return this.loading.present();

                    case 5:
                      return _context15.abrupt("return", _context15.sent);

                    case 6:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "dismissLoading",
          value: function dismissLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      if (!this.loading) {
                        _context16.next = 2;
                        break;
                      }

                      return _context16.abrupt("return", this.loading.dismiss());

                    case 2:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }]);

        return UtilService;
      }();

      UtilService.ɵfac = function UtilService_Factory(t) {
        return new (t || UtilService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]));
      };

      UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UtilService,
        factory: UtilService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UtilService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YrRj": function YrRj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDataComponent", function () {
        return UserDataComponent;
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


      var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/storage/storage.service */
      "E2f4");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var UserDataComponent = /*#__PURE__*/function () {
        function UserDataComponent(modalCtrl, auth, toastController, storage) {
          _classCallCheck(this, UserDataComponent);

          this.modalCtrl = modalCtrl;
          this.auth = auth;
          this.toastController = toastController;
          this.storage = storage;
          this.zipCode = "";
          this.city = "";
          this.cpfcnpj = "";
          this.email = "";
          this.address = "";
          this.specialty = "";
          this.state = "";
          this.name = "";
          this.record = "";
          this.sname = "";
          this.whats = "";
          this.password = "";
          this.cpassword = "";
        }

        _createClass(UserDataComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadUserData();
          }
        }, {
          key: "loadUserData",
          value: function loadUserData() {
            var _this3 = this;

            console.log("inside");
            this.storage.get("mia_user_data").then(function (user) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;

              console.log("user here", user);
              _this3.zipCode = (_a = user[0]) === null || _a === void 0 ? void 0 : _a.cep;
              _this3.city = (_b = user[0]) === null || _b === void 0 ? void 0 : _b.cidade;
              _this3.cpfcnpj = (_c = user[0]) === null || _c === void 0 ? void 0 : _c.cpfcnpj;
              _this3.email = (_d = user[0]) === null || _d === void 0 ? void 0 : _d.email;
              _this3.address = (_e = user[0]) === null || _e === void 0 ? void 0 : _e.endereco;
              _this3.specialty = (_f = user[0]) === null || _f === void 0 ? void 0 : _f.especialidade;
              _this3.state = (_g = user[0]) === null || _g === void 0 ? void 0 : _g.estado;
              _this3.name = (_h = user[0]) === null || _h === void 0 ? void 0 : _h.nome;
              _this3.record = (_j = user[0]) === null || _j === void 0 ? void 0 : _j.registro;
              _this3.sname = (_k = user[0]) === null || _k === void 0 ? void 0 : _k.snome;
              _this3.whats = (_l = user[0]) === null || _l === void 0 ? void 0 : _l.whats;
              _this3.password = (_m = user[0]) === null || _m === void 0 ? void 0 : _m.password;
              _this3.cpassword = (_o = user[0]) === null || _o === void 0 ? void 0 : _o.password;
              _this3.userData = user[0];
            });
          }
        }, {
          key: "closeLoginPop",
          value: function closeLoginPop() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "editForm",
          value: function editForm() {
            var _this4 = this;

            // console.log("zipCode", this.zipCode);
            // console.log("city", this.city);
            // console.log("cpfcnpj", this.cpfcnpj);
            // console.log("email", this.email);
            // console.log("address", this.address);
            // console.log("specialty", this.specialty);
            // console.log("state", this.state);
            // console.log("name", this.name);
            // console.log("record", this.record);
            // console.log("sname", this.sname);
            // console.log("whats", this.whats);
            // console.log("password", this.password);
            // console.log("cpassword", this.cpassword);
            this.auth.EditProfile(this.zipCode, this.city, this.cpfcnpj, this.email, this.address, this.specialty, this.state, this.name, this.record, this.sname, this.whats, this.password, this.cpassword).then(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                var _this5 = this;

                var token;
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        console.log("response", response);

                        if (!response) {
                          _context17.next = 6;
                          break;
                        }

                        _context17.next = 4;
                        return this.storage.get("mia_access_token");

                      case 4:
                        token = _context17.sent;

                        if (token) {
                          this.auth.getUserInfo(token).then(function (response) {
                            // console.log("response", response);
                            _this5.storage.set("mia_user_data", response);

                            _this5.closeLoginPop();
                          })["catch"](function (err) {
                            console.log("err", err);

                            _this5.closeLoginPop();
                          });
                          this.presentToast(response);
                        }

                      case 6:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17, this);
              }));
            })["catch"](function (err) {
              console.log("err", err);
            });
          }
        }, {
          key: "presentToast",
          value: function presentToast(response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var toast;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.toastController.create({
                        message: response,
                        duration: 2000
                      });

                    case 2:
                      toast = _context18.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }]);

        return UserDataComponent;
      }();

      UserDataComponent.ɵfac = function UserDataComponent_Factory(t) {
        return new (t || UserDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]));
      };

      UserDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: UserDataComponent,
        selectors: [["app-user-bar"]],
        decls: 63,
        vars: 13,
        consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["color", "light"], ["slot", "start"], ["name", "close", 2, "font-size", "1.5rem", 3, "click"], [1, "form-content-style", 3, "ngSubmit"], ["color", "transparent"], ["position", "stacked"], ["placeholder", "nome", "type", "text", "name", "name", 3, "ngModel", "ngModelChange"], ["placeholder", "snome", "type", "text", "name", "sname", 3, "ngModel", "ngModelChange"], ["placeholder", "email", "type", "text", "name", "email", 3, "ngModel", "ngModelChange"], ["placeholder", "whats", "type", "text", "name", "whats", 3, "ngModel", "ngModelChange"], ["placeholder", "especialidade", "type", "text", "name", "specialty", 3, "ngModel", "ngModelChange"], ["placeholder", "registro", "type", "text", "name", "record", 3, "ngModel", "ngModelChange"], ["placeholder", "cpfcnpj", "type", "text", "name", "cpfcnpj", 3, "ngModel", "ngModelChange"], ["placeholder", "cep", "type", "text", "name", "zipCode", 3, "ngModel", "ngModelChange"], ["placeholder", "estado", "type", "text", "name", "state", 3, "ngModel", "ngModelChange"], ["placeholder", "cidade", "type", "text", "name", "city", 3, "ngModel", "ngModelChange"], ["placeholder", "endereco", "type", "text", "name", "address", 3, "ngModel", "ngModelChange"], ["placeholder", "whats", "type", "text", "name", "password", 3, "ngModel", "ngModelChange"], ["placeholder", "whats", "type", "text", "name", "cpassword", 3, "ngModel", "ngModelChange"], ["type", "submit", "expand", "full"]],
        template: function UserDataComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserDataComponent_Template_ion_icon_click_4_listener() {
              return ctx.closeLoginPop();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Informa\xE7\xE3o do usu\xE1rio");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserDataComponent_Template_form_ngSubmit_8_listener() {
              return ctx.editForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Nome:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_ion_input_ngModelChange_12_listener($event) {
              return ctx.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Sobrenome:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_ion_input_ngModelChange_16_listener($event) {
              return ctx.sname = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "E-mail:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_ion_input_ngModelChange_20_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "WhatsApp:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_ion_input_ngModelChange_24_listener($event) {
              return ctx.whats = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Especialidade:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_ion_input_ngModelChange_28_listener($event) {
              return ctx.specialty = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "N\xBA de Registro:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_ion_input_ngModelChange_32_listener($event) {
              return ctx.record = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "CPF / CNPJ:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_ion_input_ngModelChange_36_listener($event) {
              return ctx.cpfcnpj = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "CEP:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_ion_input_ngModelChange_40_listener($event) {
              return ctx.zipCode = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Estado:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_ion_input_ngModelChange_44_listener($event) {
              return ctx.state = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Cidade:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_ion_input_ngModelChange_48_listener($event) {
              return ctx.city = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Endere\xE7o:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_ion_input_ngModelChange_52_listener($event) {
              return ctx.address = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Senha:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_ion_input_ngModelChange_56_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Confirme a sua senha:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_ion_input_ngModelChange_60_listener($event) {
              return ctx.cpassword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Editar Informa\xE7\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.sname);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.whats);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.specialty);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.record);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cpfcnpj);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.zipCode);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.city);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.address);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cpassword);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]],
        styles: [".person-img[_ngcontent-%COMP%] {\n  width: 43px;\n  height: 40px;\n}\n\n.fingerprint-img[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  width: 25px;\n  height: 25px;\n}\n\n.p-name[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 0.8rem;\n  color: black;\n}\n\nion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWRhdGEvdXNlci1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFDRDs7QUFFQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUVBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUdDO0VBQ0MsZUFBQTtBQUFGOztBQUVDO0VBQ0MsZUFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWRhdGEvdXNlci1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcnNvbi1pbWcge1xuXHR3aWR0aDogNDNweDtcblx0aGVpZ2h0OiA0MHB4O1xufVxuXG4uZmluZ2VycHJpbnQtaW1nIHtcblx0bWFyZ2luLXRvcDogNXB4O1xuXHR3aWR0aDogMjVweDtcblx0aGVpZ2h0OiAyNXB4O1xufVxuXG4ucC1uYW1lIHtcblx0bWFyZ2luLXRvcDogOHB4O1xuXHRmb250LXNpemU6IDAuOHJlbTtcblx0Y29sb3I6IGJsYWNrO1xufVxuXG5pb24taXRlbSB7XG5cdGlvbi1sYWJlbCB7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHR9XG5cdGlvbi1pbnB1dCB7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHR9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserDataComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "app-user-bar",
            templateUrl: "./user-data.component.html",
            styleUrls: ["./user-data.component.scss"]
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
          }, {
            type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4": function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var ng_circle_progress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-circle-progress */
      "K1R0");
      /* harmony import */


      var _app_form_modal_form_modal_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../app/form-modal/form-modal.page */
      "+fvF");
      /* harmony import */


      var _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/user-data/user-data.component */
      "YrRj");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_11__["NgCircleProgressModule"].forRoot({
          // set defaults here
          radius: 100,
          outerStrokeWidth: 16,
          innerStrokeWidth: 8,
          outerStrokeColor: "#78C000",
          innerStrokeColor: "#C7E596",
          animationDuration: 300
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_13__["UserDataComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_11__["NgCircleProgressModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_13__["UserDataComponent"]],
            entryComponents: [_app_form_modal_form_modal_page__WEBPACK_IMPORTED_MODULE_12__["FormModalPage"], _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_13__["UserDataComponent"]],
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_11__["NgCircleProgressModule"].forRoot({
              // set defaults here
              radius: 100,
              outerStrokeWidth: 16,
              innerStrokeWidth: 8,
              outerStrokeColor: "#78C000",
              innerStrokeColor: "#C7E596",
              animationDuration: 300
            })],
            providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], {
              provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
              useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kLfG": function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "lGQG": function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./storage/storage.service */
      "E2f4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL;

      var AuthService = /*#__PURE__*/function () {
        function AuthService(storage, http) {
          _classCallCheck(this, AuthService);

          this.storage = storage;
          this.http = http;
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(email, password) {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](); //headers.append("Content-Type", "multipart/form-data");

              var fd = new FormData();
              fd.append("cpfcnpj", email);
              fd.append("password", password);

              _this6.http.post("".concat(apiURL, "/login"), fd, {
                headers: headers
              }).subscribe(function (res) {
                if (res && res.token) {
                  console.log("login Auth -> ", res);

                  _this6.storage.set("mia_access_token", res.token).then(function () {
                    //call /profile to request user data
                    setTimeout(function () {
                      _this6.http.get("".concat(apiURL, "/perfil"), {
                        headers: {
                          Bearer: res.token
                        }
                      }).subscribe(function (user) {
                        _this6.storage.set("mia_user_data", user).then(function () {
                          // console.log("user", user);
                          resolve(true);
                        })["catch"](function (err) {
                          // console.log("user", user);
                          reject(err);
                        });
                      }, function (err) {
                        console.log(err);
                      });
                    }, 100);
                    resolve(res);
                  })["catch"](function (err) {
                    reject(err);
                  });
                } else {
                  reject({
                    error: "no token"
                  });
                }
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "register",
          value: function register(info) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](); //headers.append("Content-Type", "multipart/form-data");

              var fd = new FormData();
              fd.append("especialidade", info.especialidade);
              fd.append("registro", info.registro);
              fd.append("cpfcnpj", info.cpf);
              fd.append("nome", info.nome);
              fd.append("snome", info.sobrenome);
              fd.append("whats", info.whatsapp);
              fd.append("email", info.email);
              fd.append("cep", info.cep);
              fd.append("estado", info.estado);
              fd.append("cidade", info.cidade);
              fd.append("endereco", info.endereco);
              fd.append("password", info.password);
              fd.append("cpassword", info.confirm_password);

              _this7.http.post("".concat(apiURL, "/register"), fd, {
                headers: headers
              }).subscribe(function (res) {
                if (res && res.token) {
                  console.log("Register Auth -> ", res.token);

                  _this7.storage.set("mia_access_token", res.token).then(function () {
                    //call /profile to request user data
                    setTimeout(function () {
                      _this7.http.get("".concat(apiURL, "/perfil"), {
                        headers: {
                          Bearer: res.token
                        }
                      }).subscribe(function (user) {
                        _this7.storage.set("mia_user_data", user).then(function () {
                          resolve(true);
                        })["catch"](function (err) {
                          reject(err);
                        });
                      }, function (err) {
                        console.log(err);
                      });
                    }, 100);
                    resolve(res);
                  })["catch"](function (err) {
                    reject(err);
                  });
                } else {
                  reject({
                    error: "no token"
                  });
                }
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "EditProfile",
          value: function EditProfile(zipCode, city, cpfcnpj, email, address, specialty, state, name, record, sname, whats, password, cpassword) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var formData, endPoint, token;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      formData = new FormData();
                      formData.append("nome", name);
                      formData.append("snome", sname);
                      formData.append("email", email);
                      formData.append("whats", whats);
                      formData.append("especialidade", specialty);
                      formData.append("registro", record);
                      formData.append("cpfcnpj", cpfcnpj);
                      formData.append("cep", zipCode);
                      formData.append("estado", state);
                      formData.append("cidade", city);
                      formData.append("endereco", address);
                      formData.append("password", password);
                      formData.append("cpassword", cpassword);
                      endPoint = "https://aimscientist.herokuapp.com/editprof";
                      _context19.next = 17;
                      return this.storage.get("mia_access_token");

                    case 17:
                      token = _context19.sent;
                      return _context19.abrupt("return", this.http.post(endPoint, formData, {
                        headers: {
                          Bearer: token
                        },
                        responseType: "text"
                      }).toPromise());

                    case 19:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "getUserInfo",
          value: function getUserInfo(token) {
            return this.http.get("".concat(apiURL, "/perfil"), {
              headers: {
                Bearer: token
              }
            }).toPromise();
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "oZWX": function oZWX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../storage/storage.service */
      "E2f4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL;

      var ApiService = /*#__PURE__*/function () {
        function ApiService(navCtrl, storage, http, alertController) {
          _classCallCheck(this, ApiService);

          this.navCtrl = navCtrl;
          this.storage = storage;
          this.http = http;
          this.alertController = alertController;
        }

        _createClass(ApiService, [{
          key: "get",
          value: function get(url) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var token;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.getToken();

                    case 2:
                      token = _context20.sent;
                      _context20.next = 5;
                      return this.http.get("".concat(apiURL, "/").concat(url), {
                        headers: {
                          Bearer: token
                        }
                      });

                    case 5:
                      return _context20.abrupt("return", _context20.sent);

                    case 6:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "post",
          value: function post(url) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var token;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.getToken();

                    case 2:
                      token = _context21.sent;
                      _context21.next = 5;
                      return this.http.post("".concat(apiURL, "/").concat(url), {
                        headers: {
                          Bearer: token
                        }
                      });

                    case 5:
                      return _context21.abrupt("return", _context21.sent);

                    case 6:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "post_params",
          value: function post_params(url, formData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var token;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.next = 2;
                      return this.getToken();

                    case 2:
                      token = _context22.sent;
                      _context22.next = 5;
                      return this.http.post("".concat(apiURL, "/").concat(url), formData, {
                        headers: {
                          Bearer: token
                        }
                      });

                    case 5:
                      return _context22.abrupt("return", _context22.sent);

                    case 6:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "viaCEP",
          value: function viaCEP(cep) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.http.get("https://viacep.com.br/ws/" + cep + "/json/");

                    case 2:
                      return _context23.abrupt("return", _context23.sent);

                    case 3:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return this.storage.get("mia_access_token");
          }
        }, {
          key: "proccessError",
          value: function proccessError(err) {
            var _a, _b;

            console.log("err", err);
            console.log("Proccess Error", (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message);
            this.alertController.dismiss(); // localStorage.removeItem("userToken");

            if (err && (err === null || err === void 0 ? void 0 : err.error) && ((_b = err === null || err === void 0 ? void 0 : err.error) === null || _b === void 0 ? void 0 : _b.message) == "Token inválido! Por gentileza, verifique o seu login!") {
              this.navCtrl.navigateRoot(["/login"]);
              return this.storage.remove("mia_access_token");
            }
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
          }, {
            type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A": function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        // loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | register-register-module */
          "register-register-module").then(__webpack_require__.bind(null,
          /*! ./register/register.module */
          "x5bZ")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'agenda',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | agenda-agenda-module */
          "agenda-agenda-module").then(__webpack_require__.bind(null,
          /*! ./agenda/agenda.module */
          "hejP")).then(function (m) {
            return m.AgendaPageModule;
          });
        }
      }, {
        path: 'atendimento',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | atendimento-atendimento-module */
          "atendimento-atendimento-module").then(__webpack_require__.bind(null,
          /*! ./atendimento/atendimento.module */
          "Z6yw")).then(function (m) {
            return m.AtendimentoPageModule;
          });
        }
      }, {
        path: 'prontuario',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | prontuario-prontuario-module */
          [__webpack_require__.e("default~dashboard-dashboard-module~pacientes-pacientes-module~prontuario-prontuario-module"), __webpack_require__.e("prontuario-prontuario-module")]).then(__webpack_require__.bind(null,
          /*! ./prontuario/prontuario.module */
          "adIq")).then(function (m) {
            return m.ProntuarioPageModule;
          });
        }
      }, {
        path: 'form-modal',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | form-modal-form-modal-module */
          "form-modal-form-modal-module").then(__webpack_require__.bind(null,
          /*! ./form-modal/form-modal.module */
          "a3ps")).then(function (m) {
            return m.FormModalPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb": function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    },

    /***/
    "zn8P": function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map