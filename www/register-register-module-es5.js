(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
    /***/
    "b0Bx": function b0Bx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/util/util.service */
      "YOl1");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function RegisterPage_p_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "senha incorreta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterPage_span_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CADASTRAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterPage_ion_spinner_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-spinner", 23);
        }
      }

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(navCtrl, util, auth, api) {
          _classCallCheck(this, RegisterPage);

          this.navCtrl = navCtrl;
          this.util = util;
          this.auth = auth;
          this.api = api;
          this.isLoading = false;
          this.isMatch = false;
          this.info = {
            especialidade: '',
            registro: '',
            cpf: '',
            nome: '',
            sobrenome: '',
            whatsapp: '',
            email: '',
            cep: '',
            estado: '',
            cidade: '',
            endereco: '',
            password: '',
            confirm_password: ''
          };
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "cepInput",
          value: function cepInput(cep) {
            var _this = this;

            console.log("Entered CEP ", cep);
            var cep = cep.replace(/\D/g, '');

            if (cep != "") {
              //Expressão regular para validar o CEP.
              var validacep = /^[0-9]{8}$/; //Valida o formato do CEP.

              if (validacep.test(cep)) {
                setTimeout(function () {
                  _this.api.viaCEP(_this.info.cep).then(function (res) {
                    if (res) {
                      res.subscribe(function (data) {
                        console.log("CEP API  > ", data);
                        _this.info.cidade = data.localidade;
                        _this.info.estado = data.uf;
                      }, function (err) {
                        console.log(err);

                        _this.api.proccessError(err);
                      });
                    }
                  });
                }, 2000);
              } else {
                console.log("CEP not valid");
              }
            }
          }
        }, {
          key: "doRegister",
          value: function doRegister() {
            var _this2 = this;

            if (this.info.confirm_password != this.info.password) {
              this.isMatch = true;
            } else {
              this.isMatch = false;
              this.isLoading = true;
              this.auth.register(this.info).then(function (res) {
                _this2.isLoading = false;
                console.log("Register API ", res);

                _this2.navCtrl.navigateRoot(['/tabs/dashboard']);
              })["catch"](function (err) {
                _this2.isLoading = false;

                _this2.util.presentToast({
                  header: 'Ops!',
                  message: err
                });

                console.log(err);
              });
            } // if (this.info.especialidade != '' && this.info.registro != '' && this.info.cpf != '' && this.info.nome != '' && this.info.sobrenome != '' && this.info.whatsapp != '' && this.info.email != '' && this.info.cep != '' && this.info.estado != '' && this.info.endereco != '' && this.info.password != '' && this.info.confirm_password != '') {
            // }

          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ɵfac = function RegisterPage_Factory(t) {
        return new (t || RegisterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      RegisterPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterPage,
        selectors: [["app-register"]],
        decls: 98,
        vars: 16,
        consts: [[1, "user-login-area", "bg-style"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "single-user-area", "back-shadow"], [1, "login-area"], [1, "ion-text-center"], ["src", "../../assets/images/mia-wht.png"], ["color", "transparent"], ["slot", "start", "name", "person", 1, "side-icon"], ["type", "text", 3, "ngModel", "ngModelChange"], ["type", "email", 3, "ngModel", "ngModelChange"], ["slot", "start", "name", "home", 1, "side-icon"], ["type", "tel", 3, "ngModel", "keyup", "ngModelChange"], ["slot", "start", "name", "lock", 1, "side-icon"], ["type", "password", 3, "ngModel", "ngModelChange"], ["class", "form-error", 4, "ngIf"], ["expand", "block", "shape", "round", "color", "light", 3, "click"], [4, "ngIf"], ["color", "dark", 4, "ngIf"], [1, "term-style"], ["routerLink", "/agenda"], [1, "form-error"], ["color", "dark"]],
        template: function RegisterPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ion-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Especialidade ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_15_listener($event) {
              return ctx.info.especialidade = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ion-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Registro ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_21_listener($event) {
              return ctx.info.registro = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ion-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " CPF ou CNPJ ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_27_listener($event) {
              return ctx.info.cpf = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ion-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Nome ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_33_listener($event) {
              return ctx.info.nome = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "ion-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Sobrenome ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_39_listener($event) {
              return ctx.info.sobrenome = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "ion-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " WhatsApp ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ion-input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_45_listener($event) {
              return ctx.info.whatsapp = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "ion-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " E-mail ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ion-input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_51_listener($event) {
              return ctx.info.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " CEP ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ion-input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RegisterPage_Template_ion_input_keyup_57_listener() {
              return ctx.cepInput(ctx.info.cep);
            })("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_57_listener($event) {
              return ctx.info.cep = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Estado ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ion-input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_63_listener($event) {
              return ctx.info.estado = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Cidade ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ion-input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_69_listener($event) {
              return ctx.info.cidade = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Endere\xE7o ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ion-input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_75_listener($event) {
              return ctx.info.endereco = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "ion-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Senha ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ion-input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_81_listener($event) {
              return ctx.info.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "ion-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Confirmar senha ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ion-input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPage_Template_ion_input_ngModelChange_87_listener($event) {
              return ctx.info.confirm_password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, RegisterPage_p_88_Template, 2, 0, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ion-button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterPage_Template_ion_button_click_90_listener() {
              return ctx.doRegister();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, RegisterPage_span_91_Template, 2, 0, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, RegisterPage_ion_spinner_92_Template, 1, 0, "ion-spinner", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Ao se cadastrar, voc\xEA concorda com nossos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "b", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Termos e Pol\xEDtica de Privacidade");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.info.especialidade);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.info.registro);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.info.cpf);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.info.nome);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.info.sobrenome);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.info.whatsapp);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.info.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.info.cep);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.info.estado);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.info.cidade);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.info.endereco);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.info.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.info.confirm_password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMatch);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSpinner"]],
        styles: [".bg-style[_ngcontent-%COMP%] {\n  height: 180% !important;\n}\n\n.back-shadow[_ngcontent-%COMP%] {\n  height: 0% !important;\n}\n\n.user-login-area[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 180% !important;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --color: #ffffff;\n  --highlight-height: 0 ;\n}\n\n.side-icon[_ngcontent-%COMP%] {\n  margin: 0px 8px 0px 0px;\n}\n\n.term-style[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n  color: #ffffff;\n  text-align: center;\n}\n\n.form-error[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: red;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDQyxXQUFBO0VBQ0EsdUJBQUE7QUFDRDs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1zdHlsZXtcbiAgICBoZWlnaHQ6IDE4MCUgIWltcG9ydGFudDtcbn1cblxuLmJhY2stc2hhZG93e1xuICAgIGhlaWdodDogMCUgIWltcG9ydGFudDtcbn1cblxuLnVzZXItbG9naW4tYXJlYTphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGhlaWdodDogMTgwJSAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbXtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMFxufVxuXG4uc2lkZS1pY29ue1xuICAgIG1hcmdpbjogMHB4IDhweCAwcHggMHB4O1xufVxuXG4udGVybS1zdHlsZXtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtLWVycm9ye1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
          }, {
            type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "x5bZ": function x5bZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
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


      var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register.page */
      "b0Bx");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
      }];

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RegisterPageModule
      });
      RegisterPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RegisterPageModule_Factory(t) {
          return new (t || RegisterPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegisterPageModule, {
          declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=register-register-module-es5.js.map