(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agenda-agenda-module"],{

/***/ "CigD":
/*!***************************************!*\
  !*** ./src/app/agenda/agenda.page.ts ***!
  \***************************************/
/*! exports provided: AgendaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPage", function() { return AgendaPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/user-bar/user-bar.component */ "Rw8l");




class AgendaPage {
    constructor() { }
    ngOnInit() {
    }
}
AgendaPage.ɵfac = function AgendaPage_Factory(t) { return new (t || AgendaPage)(); };
AgendaPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgendaPage, selectors: [["app-agenda"]], decls: 39, vars: 0, consts: [["color", "primary"], ["wrap-box", "", 2, "display", "flex"], ["src", "../../assets/images/mia-wht.png", "width", "200", "alt", ""], ["slot", "end", 1, "ion-text-right"], ["wrap-box", ""], [1, "sub-toolbar"], [1, "ion-text-right"], ["color", "secondary"], ["name", "clipboard"], ["mode", "ios"], [1, "ion-text-center"], ["fill", "clear"], ["name", "ios-arrow-back"], ["size", "6", 1, "ion-text-center"], ["name", "ios-arrow-forward"], [2, "position", "absolute", "right", "8px"], ["color", "secondary", "fill", "outline", "shape", "round"], ["name", "md-create"]], template: function AgendaPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-user-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "AGENDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Gerencie seu tempo, fa\u00E7a o que voc\u00EA quiser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Atender ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-card-header", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-col", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Selecione o mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Novembro 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "ion-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _components_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_2__["UserBarComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardHeader"]], styles: [".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.sub-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #2694a3;\n  font-weight: bold;\n}\n\nion-card[_ngcontent-%COMP%] {\n  min-height: 500px;\n  margin: 0;\n}\n\nh1[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbmRhL2FnZW5kYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFBTjs7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtBQURKOztBQUlFO0VBQ0UsU0FBQTtFQUFXLFVBQUE7QUFBZiIsImZpbGUiOiJzcmMvYXBwL2FnZW5kYS9hZ2VuZGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLnN1Yi10b29sYmFye1xuICAgIGgxe1xuICAgICAgY29sb3I6ICMyNjk0YTM7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1jYXJke1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgaDEsIHB7XG4gICAgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgendaPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agenda',
                templateUrl: './agenda.page.html',
                styleUrls: ['./agenda.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Rw8l":
/*!***********************************************************!*\
  !*** ./src/app/components/user-bar/user-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: UserBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBarComponent", function() { return UserBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _user_data_user_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-data/user-data.component */ "YrRj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








function UserBarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserBarComponent_div_0_Template_ion_row_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.openUserData(); });
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
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.userData == null ? null : ctx_r0.userData.nome, " ", ctx_r0.userData == null ? null : ctx_r0.userData.snome, "");
} }
class UserBarComponent {
    constructor(storage, modalCtrl) {
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.loadUserData();
    }
    ngOnInit() {
        // this.loadUserData();
        // console.log("here");
    }
    loadUserData() {
        let interval = setInterval(() => {
            this.storage
                .get("mia_user_data")
                .then((user) => {
                this.userData = user[0];
                console.log("user", this.userData);
                if (user[0]) {
                    clearInterval(interval);
                }
            })
                .catch(() => {
                console.log("error while fetching User Data");
            });
        }, 2000);
        // if (this.userData) {
        // 	console.log("here interval");
        // 	clearInterval(interval);
        // }
    }
    openUserData() {
        this.modalCtrl.create({ component: _user_data_user_data_component__WEBPACK_IMPORTED_MODULE_3__["UserDataComponent"] }).then((userEl) => userEl.present());
    }
}
UserBarComponent.ɵfac = function UserBarComponent_Factory(t) { return new (t || UserBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"])); };
UserBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserBarComponent, selectors: [["app-user-bar"]], decls: 1, vars: 1, consts: [["class", "item-bg", 4, "ngIf"], [1, "item-bg"], [3, "click"], ["size-md", "4", "size-xs", "4", "size-sm", "4", "size-lg", "4", 2, "padding", "0px 10px 0px 0px"], [1, "p-name"], ["size-md", "4", "size-xs", "4", "size-sm", "4", "size-lg", "4", 2, "padding", "0px 10px 0px 0px", "text-align", "center"], ["src", "../../assets/images/finger-print.png", 1, "fingerprint-img"], ["src", "../../assets/images/Avatar.png", 1, "person-img"]], template: function UserBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserBarComponent_div_0_Template, 10, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"]], styles: [".item-bg[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.person-img[_ngcontent-%COMP%] {\n  width: 43px;\n  height: 40px;\n}\n\n.fingerprint-img[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  width: 25px;\n  height: 25px;\n}\n\n.p-name[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 0.8rem;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWJhci91c2VyLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItYmFyL3VzZXItYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tYmd7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5wZXJzb24taW1ne1xuICAgIHdpZHRoOiA0M3B4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmZpbmdlcnByaW50LWltZ3tcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ucC1uYW1le1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-user-bar",
                templateUrl: "./user-bar.component.html",
                styleUrls: ["./user-bar.component.scss"],
            }]
    }], function () { return [{ type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }]; }, null); })();


/***/ }),

/***/ "hejP":
/*!*****************************************!*\
  !*** ./src/app/agenda/agenda.module.ts ***!
  \*****************************************/
/*! exports provided: AgendaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function() { return AgendaPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _agenda_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agenda.page */ "CigD");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");









const routes = [
    {
        path: '',
        component: _agenda_page__WEBPACK_IMPORTED_MODULE_5__["AgendaPage"]
    }
];
class AgendaPageModule {
}
AgendaPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AgendaPageModule });
AgendaPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AgendaPageModule_Factory(t) { return new (t || AgendaPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AgendaPageModule, { declarations: [_agenda_page__WEBPACK_IMPORTED_MODULE_5__["AgendaPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgendaPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_agenda_page__WEBPACK_IMPORTED_MODULE_5__["AgendaPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-bar/user-bar.component */ "Rw8l");





class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_3__["UserBarComponent"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_3__["UserBarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_3__["UserBarComponent"]],
                imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_user_bar_user_bar_component__WEBPACK_IMPORTED_MODULE_3__["UserBarComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=agenda-agenda-module-es2015.js.map