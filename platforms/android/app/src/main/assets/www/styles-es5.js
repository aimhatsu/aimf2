(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
    /***/
    3:
    /*!**********************************************************!*\
      !*** multi ./src/theme/variables.scss ./src/global.scss ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      __webpack_require__(
      /*! D:\MIA\server\fr1v33\src\theme\variables.scss */
      "fFqt");

      module.exports = __webpack_require__(
      /*! D:\MIA\server\fr1v33\src\global.scss */
      "8oQk");
      /***/
    },

    /***/
    "8oQk":
    /*!*************************!*\
      !*** ./src/global.scss ***!
      \*************************/

    /*! no static exports found */

    /***/
    function oQk(module, exports, __webpack_require__) {
      var api = __webpack_require__(
      /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
      "LboF");

      var content = __webpack_require__(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./global.scss */
      "kTCX");

      content = content.__esModule ? content["default"] : content;

      if (typeof content === 'string') {
        content = [[module.i, content, '']];
      }

      var options = {};
      options.insert = "head";
      options.singleton = false;
      var update = api(content, options);
      module.exports = content.locals || {};
      /***/
    },

    /***/
    "JPst":
    /*!*****************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/api.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function JPst(module, exports, __webpack_require__) {
      "use strict";
      /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names

      module.exports = function (useSourceMap) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);

            if (item[2]) {
              return "@media ".concat(item[2], " {").concat(content, "}");
            }

            return content;
          }).join('');
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names


        list.i = function (modules, mediaQuery, dedupe) {
          if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
          }

          var alreadyImportedModules = {};

          if (dedupe) {
            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              // eslint-disable-next-line no-continue
              continue;
            }

            if (mediaQuery) {
              if (!item[2]) {
                item[2] = mediaQuery;
              } else {
                item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
              }
            }

            list.push(item);
          }
        };

        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

        var cssMapping = item[3];

        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
          });
          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }

        return [content].join('\n');
      } // Adapted from convert-source-map (MIT)


      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
        return "/*# ".concat(data, " */");
      }
      /***/

    },

    /***/
    "LboF":
    /*!****************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
      \****************************************************************************/

    /*! no static exports found */

    /***/
    function LboF(module, exports, __webpack_require__) {
      "use strict";

      var isOldIE = function isOldIE() {
        var memo;
        return function memorize() {
          if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
          }

          return memo;
        };
      }();

      var getTarget = function getTarget() {
        var memo = {};
        return function memorize(target) {
          if (typeof memo[target] === 'undefined') {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }

            memo[target] = styleTarget;
          }

          return memo[target];
        };
      }();

      var stylesInDom = [];

      function getIndexByIdentifier(identifier) {
        var result = -1;

        for (var i = 0; i < stylesInDom.length; i++) {
          if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
          }
        }

        return result;
      }

      function modulesToDom(list, options) {
        var idCountMap = {};
        var identifiers = [];

        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var count = idCountMap[id] || 0;
          var identifier = "".concat(id, " ").concat(count);
          idCountMap[id] = count + 1;
          var index = getIndexByIdentifier(identifier);
          var obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
          };

          if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
          } else {
            stylesInDom.push({
              identifier: identifier,
              updater: addStyle(obj, options),
              references: 1
            });
          }

          identifiers.push(identifier);
        }

        return identifiers;
      }

      function insertStyleElement(options) {
        var style = document.createElement('style');
        var attributes = options.attributes || {};

        if (typeof attributes.nonce === 'undefined') {
          var nonce = true ? __webpack_require__.nc : undefined;

          if (nonce) {
            attributes.nonce = nonce;
          }
        }

        Object.keys(attributes).forEach(function (key) {
          style.setAttribute(key, attributes[key]);
        });

        if (typeof options.insert === 'function') {
          options.insert(style);
        } else {
          var target = getTarget(options.insert || 'head');

          if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          }

          target.appendChild(style);
        }

        return style;
      }

      function removeStyleElement(style) {
        // istanbul ignore if
        if (style.parentNode === null) {
          return false;
        }

        style.parentNode.removeChild(style);
      }
      /* istanbul ignore next  */


      var replaceText = function replaceText() {
        var textStore = [];
        return function replace(index, replacement) {
          textStore[index] = replacement;
          return textStore.filter(Boolean).join('\n');
        };
      }();

      function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

        /* istanbul ignore if  */

        if (style.styleSheet) {
          style.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = style.childNodes;

          if (childNodes[index]) {
            style.removeChild(childNodes[index]);
          }

          if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
          } else {
            style.appendChild(cssNode);
          }
        }
      }

      function applyToTag(style, options, obj) {
        var css = obj.css;
        var media = obj.media;
        var sourceMap = obj.sourceMap;

        if (media) {
          style.setAttribute('media', media);
        } else {
          style.removeAttribute('media');
        }

        if (sourceMap && btoa) {
          css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
        } // For old IE

        /* istanbul ignore if  */


        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          while (style.firstChild) {
            style.removeChild(style.firstChild);
          }

          style.appendChild(document.createTextNode(css));
        }
      }

      var singleton = null;
      var singletonCounter = 0;

      function addStyle(obj, options) {
        var style;
        var update;
        var remove;

        if (options.singleton) {
          var styleIndex = singletonCounter++;
          style = singleton || (singleton = insertStyleElement(options));
          update = applyToSingletonTag.bind(null, style, styleIndex, false);
          remove = applyToSingletonTag.bind(null, style, styleIndex, true);
        } else {
          style = insertStyleElement(options);
          update = applyToTag.bind(null, style, options);

          remove = function remove() {
            removeStyleElement(style);
          };
        }

        update(obj);
        return function updateStyle(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
              return;
            }

            update(obj = newObj);
          } else {
            remove();
          }
        };
      }

      module.exports = function (list, options) {
        options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page

        if (!options.singleton && typeof options.singleton !== 'boolean') {
          options.singleton = isOldIE();
        }

        list = list || [];
        var lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];

          if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
          }

          for (var i = 0; i < lastIdentifiers.length; i++) {
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
          }

          var newLastIdentifiers = modulesToDom(newList, options);

          for (var _i = 0; _i < lastIdentifiers.length; _i++) {
            var _identifier = lastIdentifiers[_i];

            var _index = getIndexByIdentifier(_identifier);

            if (stylesInDom[_index].references === 0) {
              stylesInDom[_index].updater();

              stylesInDom.splice(_index, 1);
            }
          }

          lastIdentifiers = newLastIdentifiers;
        };
      };
      /***/

    },

    /***/
    "fFqt":
    /*!**********************************!*\
      !*** ./src/theme/variables.scss ***!
      \**********************************/

    /*! no static exports found */

    /***/
    function fFqt(module, exports, __webpack_require__) {
      var api = __webpack_require__(
      /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
      "LboF");

      var content = __webpack_require__(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--13-1!../../node_modules/postcss-loader/src??embedded!../../node_modules/resolve-url-loader??ref--13-3!../../node_modules/sass-loader/dist/cjs.js??ref--13-4!./variables.scss */
      "yb4E");

      content = content.__esModule ? content["default"] : content;

      if (typeof content === 'string') {
        content = [[module.i, content, '']];
      }

      var options = {};
      options.insert = "head";
      options.singleton = false;
      var update = api(content, options);
      module.exports = content.locals || {};
      /***/
    },

    /***/
    "kTCX":
    /*!*********************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/global.scss ***!
      \*********************************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kTCX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../node_modules/css-loader/dist/runtime/api.js */
      "JPst");
      /* harmony import */


      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__); // Imports


      var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true); // Module


      ___CSS_LOADER_EXPORT___.push([module.i, "/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\nhtml.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\nbody {\n  background: var(--ion-background-color);\n}\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\n  padding-top: 0px;\n}\nhtml.ios ion-modal .ion-page {\n  border-radius: inherit;\n}\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n.ion-page-invisible {\n  opacity: 0;\n}\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n.menu-content {\n  transform: translate3d(0,  0,  0);\n}\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n/* Basic CSS for apps built with Ionic */\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nimg {\n  max-width: 100%;\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\ntextarea::-moz-placeholder {\n  padding-left: 2px;\n}\ntextarea::placeholder {\n  padding-left: 2px;\n}\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n[tappable] {\n  cursor: pointer;\n}\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\nhtml:not(.hydrated) body {\n  display: none;\n}\nhtml.plt-pwa {\n  height: 100vh;\n}\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n          text-size-adjust: none;\n}\nhtml {\n  font-family: var(--ion-font-family);\n}\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 20px;\n}\nh5 {\n  font-size: 18px;\n}\nh6 {\n  font-size: 16px;\n}\nsmall {\n  font-size: 75%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n.ion-hide {\n  display: none !important;\n}\n.ion-hide-up {\n  display: none !important;\n}\n.ion-hide-down {\n  display: none !important;\n}\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .ion-hide-xl-down {\n    display: none !important;\n  }\n}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.ion-padding {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-top {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n.ion-padding-start {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-start {\n    padding-left: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-end {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-end {\n    padding-right: unset;\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-bottom {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-vertical {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-horizontal {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-no-margin {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ion-margin {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-top {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n.ion-margin-start {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-start {\n    margin-left: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-end {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-end {\n    margin-right: unset;\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-bottom {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-vertical {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-horizontal {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-float-left {\n  float: left !important;\n}\n.ion-float-right {\n  float: right !important;\n}\n.ion-float-start {\n  float: left !important;\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\n  float: right !important;\n}\n.ion-float-end {\n  float: right !important;\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\n  float: left !important;\n}\n@media (min-width: 576px) {\n  .ion-float-sm-left {\n    float: left !important;\n  }\n\n  .ion-float-sm-right {\n    float: right !important;\n  }\n\n  .ion-float-sm-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\n    float: right !important;\n  }\n\n  .ion-float-sm-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\n    float: left !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-float-md-left {\n    float: left !important;\n  }\n\n  .ion-float-md-right {\n    float: right !important;\n  }\n\n  .ion-float-md-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\n    float: right !important;\n  }\n\n  .ion-float-md-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\n    float: left !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-float-lg-left {\n    float: left !important;\n  }\n\n  .ion-float-lg-right {\n    float: right !important;\n  }\n\n  .ion-float-lg-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\n    float: right !important;\n  }\n\n  .ion-float-lg-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\n    float: left !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-float-xl-left {\n    float: left !important;\n  }\n\n  .ion-float-xl-right {\n    float: right !important;\n  }\n\n  .ion-float-xl-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\n    float: right !important;\n  }\n\n  .ion-float-xl-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\n    float: left !important;\n  }\n}\n.ion-text-center {\n  text-align: center !important;\n}\n.ion-text-justify {\n  text-align: justify !important;\n}\n.ion-text-start {\n  text-align: start !important;\n}\n.ion-text-end {\n  text-align: end !important;\n}\n.ion-text-left {\n  text-align: left !important;\n}\n.ion-text-right {\n  text-align: right !important;\n}\n.ion-text-nowrap {\n  white-space: nowrap !important;\n}\n.ion-text-wrap {\n  white-space: normal !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-center {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-center {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-center {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-center {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap {\n    white-space: normal !important;\n  }\n}\n.ion-text-uppercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n.ion-text-lowercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n.ion-text-capitalize {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n.ion-align-self-start {\n  align-self: flex-start !important;\n}\n.ion-align-self-end {\n  align-self: flex-end !important;\n}\n.ion-align-self-center {\n  align-self: center !important;\n}\n.ion-align-self-stretch {\n  align-self: stretch !important;\n}\n.ion-align-self-baseline {\n  align-self: baseline !important;\n}\n.ion-align-self-auto {\n  align-self: auto !important;\n}\n.ion-wrap {\n  flex-wrap: wrap !important;\n}\n.ion-nowrap {\n  flex-wrap: nowrap !important;\n}\n.ion-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.ion-justify-content-start {\n  justify-content: flex-start !important;\n}\n.ion-justify-content-center {\n  justify-content: center !important;\n}\n.ion-justify-content-end {\n  justify-content: flex-end !important;\n}\n.ion-justify-content-around {\n  justify-content: space-around !important;\n}\n.ion-justify-content-between {\n  justify-content: space-between !important;\n}\n.ion-justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n.ion-align-items-start {\n  align-items: flex-start !important;\n}\n.ion-align-items-center {\n  align-items: center !important;\n}\n.ion-align-items-end {\n  align-items: flex-end !important;\n}\n.ion-align-items-stretch {\n  align-items: stretch !important;\n}\n.ion-align-items-baseline {\n  align-items: baseline !important;\n}\n.sub-toolbar h1 {\n  color: #2694a3;\n  font-weight: bold;\n}\n.sub-toolbar p {\n  font-size: 12px;\n}\nh1, p {\n  margin: 0;\n  padding: 0;\n}\n[wrap-box] {\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  background: #eee;\n}\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\np, h1, h2, h3, h4, h5, h6 {\n  margin: 0;\n  padding: 0;\n}\na:hover {\n  text-decoration: none;\n}\nbutton:focus {\n  outline: none !important;\n}\nlabel {\n  margin-bottom: inherit;\n}\n@font-face {\n  font-family: Calibri-Regular;\n  src: url('Calibri-Regular.ttf');\n}\n@font-face {\n  font-family: Calibri-Bold;\n  src: url('Calibri-Bold.ttf');\n}\n@font-face {\n  font-family: segoe-ui-bold;\n  src: url('segoe-ui-bold.ttf');\n}\n@font-face {\n  font-family: segoe-ui-regular;\n  src: url('segoe-ui-regular.ttf');\n}\n@font-face {\n  font-family: RiftSoft-Demi;\n  src: url('RiftSoft-Demi.otf');\n}\n@font-face {\n  font-family: RiftSoft-Medium;\n  src: url('RiftSoft-Medium.otf');\n}\n/*Login Pages*/\n/*Login Pages*/\n.user-login-area {\n  background: url('background.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  background-position: 80% 0%;\n}\n.user-login-area:after {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(38, 148, 163, 0.5);\n}\n.single-user-area {\n  position: relative;\n  z-index: 22;\n  background: rgba(0, 0, 0, 0.25);\n  width: 400px;\n  margin: auto;\n  height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 35px;\n  padding-right: 25px;\n}\n.login-email {\n  margin-bottom: 25px;\n}\n.login-email i, .login-password i {\n  position: absolute;\n  left: 44px;\n  margin-top: 5px;\n  color: #ddd;\n  font-size: 14px;\n}\n.login-email input, .login-password input {\n  background: transparent;\n  border: none;\n  border-bottom: 2px solid #ddd;\n  width: 100%;\n  padding: 0px 35px;\n  padding-bottom: 8px;\n  font-family: Calibri-Regular;\n  font-size: 16px;\n  color: #fff;\n  outline: none;\n}\n.login-email input::-moz-placeholder, .login-password input::-moz-placeholder {\n  font-family: Calibri-Regular;\n  color: #fff;\n  font-size: 16px;\n  opacity: 1;\n}\n.login-email input::placeholder, .login-password input::placeholder {\n  font-family: Calibri-Regular;\n  color: #fff;\n  font-size: 16px;\n  opacity: 1;\n}\n.privacy-area {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 120px;\n}\n.privacy-area p {\n  font-family: Calibri-Regular;\n  color: #fff;\n  font-size: 14px;\n  margin-right: 15px;\n}\n.privacy-area a {\n  font-family: Calibri-Bold;\n  text-transform: uppercase;\n  color: #F1B4AE;\n  font-size: 18px;\n  transition: 1s;\n}\n.privacy-area a:hover {\n  color: #00ACC4;\n}\nion-title {\n  padding: 0px;\n}", "", {
        "version": 3,
        "sources": ["webpack://src/global.scss", "webpack://node_modules/@ionic/angular/src/css/core.scss", "webpack://node_modules/@ionic/angular/css/core.css", "webpack://node_modules/@ionic/angular/src/themes/ionic.mixins.scss", "webpack://node_modules/@ionic/angular/src/themes/ionic.globals.scss", "webpack://node_modules/@ionic/angular/src/components/menu/menu.ios.vars.scss", "webpack://node_modules/@ionic/angular/src/components/menu/menu.md.vars.scss", "webpack://node_modules/@ionic/angular/src/css/normalize.scss", "webpack://node_modules/@ionic/angular/css/normalize.css", "webpack://node_modules/@ionic/angular/src/css/structure.scss", "webpack://node_modules/@ionic/angular/css/structure.css", "webpack://node_modules/@ionic/angular/src/css/typography.scss", "webpack://node_modules/@ionic/angular/css/typography.css", "webpack://node_modules/@ionic/angular/src/css/display.scss", "webpack://node_modules/@ionic/angular/css/display.css", "webpack://node_modules/@ionic/angular/src/css/padding.scss", "webpack://node_modules/@ionic/angular/css/padding.css", "webpack://node_modules/@ionic/angular/src/css/float-elements.scss", "webpack://node_modules/@ionic/angular/css/float-elements.css", "webpack://node_modules/@ionic/angular/src/css/text-alignment.scss", "webpack://node_modules/@ionic/angular/css/text-alignment.css", "webpack://node_modules/@ionic/angular/src/css/text-transformation.scss", "webpack://node_modules/@ionic/angular/css/text-transformation.css", "webpack://node_modules/@ionic/angular/src/css/flex-utils.scss", "webpack://node_modules/@ionic/angular/css/flex-utils.css"],
        "names": [],
        "mappings": "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ACF;Ad/BA,iDAAA;AeJA;EACE,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EZ8NE,eY5Ne;EZ6Nf,gBY7Ne;EZiQjB,cYjQiB;EZkQjB,iBYlQiB;ACbnB;ADgBA;EACE,yCAAA;EACA,uCAAA;EACA,uCAAA;EACA,0CAAA;EZyNE,sCY5OM;EZ6ON,uCY7OM;EZ6QR,qCY7QQ;EZ8QR,wCY9QQ;ACUV;AbsOM;EACE;IAEI,mBAAA;IAGA,oBAAA;IAGF,+CYzPA;IZ0PA,8CY1PA;IZ2PA,6CY3PA;IZ4PA,4CY5PA;ECmBR;AACF;ADIA;EACE,uCAAA;EZoPA,qCY7QQ;ACyBV;ADKA;EACE,yCAAA;EZ6ME,sCY5OM;AC6BV;AbmNM;EACE;IAEI,mBAAA;IAMF,+CYzPA;IZ0PA,8CY1PA;ECmCR;AACF;ADAA;EACE,uCAAA;EZwME,uCY7OM;ACyCV;AbuMM;EACE;IAKI,oBAAA;IAKF,6CY3PA;IZ4PA,4CY5PA;EC+CR;AACF;ADNA;EACE,0CAAA;EZmOA,wCY9QQ;ACqDV;ADLA;EACE,uCAAA;EACA,0CAAA;EZ2NA,qCY7QQ;EZ8QR,wCY9QQ;AC2DV;ADJA;EACE,yCAAA;EACA,uCAAA;EZmLE,sCY5OM;EZ6ON,uCY7OM;ACiEV;Ab+KM;EACE;IAEI,mBAAA;IAGA,oBAAA;IAGF,+CYzPA;IZ0PA,8CY1PA;IZ2PA,6CY3PA;IZ4PA,4CY5PA;EC0ER;AACF;ADTA;EACE,iBAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;EZkKE,cYhKc;EZiKd,eYjKc;EZqMhB,aYrMgB;EZsMhB,gBYtMgB;ACclB;ADXA;EACE,uCAAA;EACA,qCAAA;EACA,qCAAA;EACA,wCAAA;EZ6JE,oCY3OK;EZ4OL,qCY5OK;EZ4QP,mCY5QO;EZ6QP,sCY7QO;ACgGT;Ab+IM;EACE;IAEI,kBAAA;IAGA,mBAAA;IAGF,6CYxPD;IZyPC,4CYzPD;IZ0PC,2CY1PD;IZ2PC,0CY3PD;ECyGP;AACF;ADvBA;EACE,qCAAA;EZwLA,mCY5QO;AC+GT;ADtBA;EACE,uCAAA;EZiJE,oCY3OK;ACmHT;Ab4HM;EACE;IAEI,kBAAA;IAMF,6CYxPD;IZyPC,4CYzPD;ECyHP;AACF;AD3BA;EACE,qCAAA;EZ4IE,qCY5OK;AC+HT;AbgHM;EACE;IAKI,mBAAA;IAKF,2CY1PD;IZ2PC,0CY3PD;ECqIP;AACF;ADjCA;EACE,wCAAA;EZuKA,sCY7QO;AC2IT;ADhCA;EACE,qCAAA;EACA,wCAAA;EZ+JA,mCY5QO;EZ6QP,sCY7QO;ACiJT;AD/BA;EACE,uCAAA;EACA,qCAAA;EZuHE,oCY3OK;EZ4OL,qCY5OK;ACuJT;AbwFM;EACE;IAEI,kBAAA;IAGA,mBAAA;IAGF,6CYxPD;IZyPC,4CYzPD;IZ0PC,2CY1PD;IZ2PC,0CY3PD;ECgKP;AACF;AC9JI;EdmaE,sBAAA;Ae/aN;ADgBI;Ed+ZE,uBAAA;Ae3aN;ADgBI;Ed6YE,sBAAA;AezZN;Af4LW;EAgOL,uBAAA;AezZN;ADaI;EdgZE,uBAAA;AezZN;AfqLW;EAuOL,sBAAA;AezZN;Af4GI;EclHA;IdmaE,sBAAA;EexZJ;;EDPE;Id+ZE,uBAAA;EepZJ;;EDPE;Id6YE,sBAAA;EelYJ;EfqKS;IAgOL,uBAAA;EelYJ;;EDVE;IdgZE,uBAAA;EelYJ;Ef8JS;IAuOL,sBAAA;EelYJ;AACF;AfoFI;EclHA;IdmaE,sBAAA;EejYJ;;ED9BE;Id+ZE,uBAAA;Ee7XJ;;ED9BE;Id6YE,sBAAA;Ee3WJ;Ef8IS;IAgOL,uBAAA;Ee3WJ;;EDjCE;IdgZE,uBAAA;Ee3WJ;EfuIS;IAuOL,sBAAA;Ee3WJ;AACF;Af6DI;EclHA;IdmaE,sBAAA;Ee1WJ;;EDrDE;Id+ZE,uBAAA;EetWJ;;EDrDE;Id6YE,sBAAA;EepVJ;EfuHS;IAgOL,uBAAA;EepVJ;;EDxDE;IdgZE,uBAAA;EepVJ;EfgHS;IAuOL,sBAAA;EepVJ;AACF;AfsCI;EclHA;IdmaE,sBAAA;EenVJ;;ED5EE;Id+ZE,uBAAA;Ee/UJ;;ED5EE;Id6YE,sBAAA;Ee7TJ;EfgGS;IAgOL,uBAAA;Ee7TJ;;ED/EE;IdgZE,uBAAA;Ee7TJ;EfyFS;IAuOL,sBAAA;Ee7TJ;AACF;ACnGI;EACE,6BAAA;ACbN;ADgBI;EACE,8BAAA;ACbN;ADgBI;EACE,4BAAA;ACbN;ADgBI;EACE,0BAAA;ACbN;ADgBI;EACE,2BAAA;ACbN;ADgBI;EACE,4BAAA;ACbN;ADgBI;EACE,8BAAA;ACbN;ADgBI;EACE,8BAAA;ACbN;AjBkGI;EgBlHA;IACE,6BAAA;ECoBJ;;EDjBE;IACE,8BAAA;ECoBJ;;EDjBE;IACE,4BAAA;ECoBJ;;EDjBE;IACE,0BAAA;ECoBJ;;EDjBE;IACE,2BAAA;ECoBJ;;EDjBE;IACE,4BAAA;ECoBJ;;EDjBE;IACE,8BAAA;ECoBJ;;EDjBE;IACE,8BAAA;ECoBJ;AACF;AjBgEI;EgBlHA;IACE,6BAAA;ECqDJ;;EDlDE;IACE,8BAAA;ECqDJ;;EDlDE;IACE,4BAAA;ECqDJ;;EDlDE;IACE,0BAAA;ECqDJ;;EDlDE;IACE,2BAAA;ECqDJ;;EDlDE;IACE,4BAAA;ECqDJ;;EDlDE;IACE,8BAAA;ECqDJ;;EDlDE;IACE,8BAAA;ECqDJ;AACF;AjB+BI;EgBlHA;IACE,6BAAA;ECsFJ;;EDnFE;IACE,8BAAA;ECsFJ;;EDnFE;IACE,4BAAA;ECsFJ;;EDnFE;IACE,0BAAA;ECsFJ;;EDnFE;IACE,2BAAA;ECsFJ;;EDnFE;IACE,4BAAA;ECsFJ;;EDnFE;IACE,8BAAA;ECsFJ;;EDnFE;IACE,8BAAA;ECsFJ;AACF;AjBFI;EgBlHA;IACE,6BAAA;ECuHJ;;EDpHE;IACE,8BAAA;ECuHJ;;EDpHE;IACE,4BAAA;ECuHJ;;EDpHE;IACE,0BAAA;ECuHJ;;EDpHE;IACE,2BAAA;ECuHJ;;EDpHE;IACE,4BAAA;ECuHJ;;EDpHE;IACE,8BAAA;ECuHJ;;EDpHE;IACE,8BAAA;ECuHJ;AACF;ACrJI;EACE,yDAAA;EACA,oCAAA;ACbN;ADgBI;EACE,yDAAA;EACA,oCAAA;ACbN;ADgBI;EACE,yDAAA;EACA,qCAAA;ACbN;AnBmHI;EkBlHA;IACE,yDAAA;IACA,oCAAA;ECGJ;;EDAE;IACE,yDAAA;IACA,oCAAA;ECGJ;;EDAE;IACE,yDAAA;IACA,qCAAA;ECGJ;AACF;AnBkGI;EkBlHA;IACE,yDAAA;IACA,oCAAA;ECmBJ;;EDhBE;IACE,yDAAA;IACA,oCAAA;ECmBJ;;EDhBE;IACE,yDAAA;IACA,qCAAA;ECmBJ;AACF;AnBkFI;EkBlHA;IACE,yDAAA;IACA,oCAAA;ECmCJ;;EDhCE;IACE,yDAAA;IACA,oCAAA;ECmCJ;;EDhCE;IACE,yDAAA;IACA,qCAAA;ECmCJ;AACF;AnBkEI;EkBlHA;IACE,yDAAA;IACA,oCAAA;ECmDJ;;EDhDE;IACE,yDAAA;IACA,oCAAA;ECmDJ;;EDhDE;IACE,yDAAA;IACA,qCAAA;ECmDJ;AACF;ACtEA;EACE,iCAAA;ACPF;ADUA;EACE,+BAAA;ACPF;ADUA;EACE,6BAAA;ACPF;ADUA;EACE,8BAAA;ACPF;ADUA;EACE,+BAAA;ACPF;ADUA;EACE,2BAAA;ACPF;ADcA;EACE,0BAAA;ACXF;ADcA;EACE,4BAAA;ACXF;ADcA;EACE,kCAAA;ACXF;ADkBA;EACE,sCAAA;ACfF;ADkBA;EACE,kCAAA;ACfF;ADkBA;EACE,oCAAA;ACfF;ADkBA;EACE,wCAAA;ACfF;ADkBA;EACE,yCAAA;ACfF;ADkBA;EACE,wCAAA;ACfF;ADsBA;EACE,kCAAA;ACnBF;ADsBA;EACE,8BAAA;ACnBF;ADsBA;EACE,gCAAA;ACnBF;ADsBA;EACE,+BAAA;ACnBF;ADsBA;EACE,gCAAA;ACnBF;AxBlDI;EACE,cAAA;EACA,iBAAA;AAJN;AAMC;EACC,eAAA;AAJF;AAQE;EACE,SAAA;EAAW,UAAA;AAJf;AAOA;EACC,iBAAA;EACA,iBAAA;EAAmB,kBAAA;AAHpB;AAMA;EACC,SAAA;EACA,UAAA;EACA,gBAAA;AAHD;AAKA;EACC,gBAAA;EACA,SAAA;EACA,UAAA;AAFD;AAIA;EACC,SAAA;EACA,UAAA;AADD;AAGA;EACC,qBAAA;AAAD;AAEA;EACC,wBAAA;AACD;AACA;EACC,sBAAA;AAED;AAAA;EACE,4BAAA;EACA,+BAAA;AAGF;AADA;EACE,yBAAA;EACA,4BAAA;AAGF;AADA;EACE,0BAAA;EACA,6BAAA;AAGF;AADA;EACE,6BAAA;EACA,gCAAA;AAGF;AADA;EACE,0BAAA;EACA,6BAAA;AAGF;AADA;EACE,4BAAA;EACA,+BAAA;AAGF;AAAA,cAAA;AACA,cAAA;AACA;EACC,iCAAA;EACA,4BAAA;EACA,sBAAA;EACA,YAAA;EACA,2BAAA;AAED;AAAA;EACC,WAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mCAAA;AAGD;AADA;EACC,kBAAA;EACA,WAAA;EACA,+BAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,uBAAA;EACA,kBAAA;EACA,mBAAA;AAID;AAFA;EACC,mBAAA;AAKD;AAHA;EACC,kBAAA;EACA,UAAA;EACA,eAAA;EACA,WAAA;EACA,eAAA;AAMD;AAJA;EACC,uBAAA;EACA,YAAA;EACA,6BAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;EACA,4BAAA;EACA,eAAA;EACA,WAAA;EACA,aAAA;AAOD;AALA;EACC,4BAAA;EACA,WAAA;EACA,eAAA;EACA,UAAA;AAQD;AAZA;EACC,4BAAA;EACA,WAAA;EACA,eAAA;EACA,UAAA;AAQD;AALA;EACC,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;AAQD;AANA;EACC,4BAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AASD;AAPA;EACC,yBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;EACA,cAAA;AAUD;AARA;EACC,cAAA;AAWD;AATA;EACC,YAAA;AAYD",
        "sourcesContent": ["/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n\n/* Core CSS required for Ionic components to work properly */\n@import \"~@ionic/angular/css/core.css\";\n\n/* Basic CSS for apps built with Ionic */\n@import \"~@ionic/angular/css/normalize.css\";\n@import \"~@ionic/angular/css/structure.css\";\n@import \"~@ionic/angular/css/typography.css\";\n@import '~@ionic/angular/css/display.css';\n\n/* Optional CSS utils that can be commented out */\n@import \"~@ionic/angular/css/padding.css\";\n@import \"~@ionic/angular/css/float-elements.css\";\n@import \"~@ionic/angular/css/text-alignment.css\";\n@import \"~@ionic/angular/css/text-transformation.css\";\n@import \"~@ionic/angular/css/flex-utils.css\";\n\n.sub-toolbar{\n    h1{\n      color: #2694a3;\n      font-weight: bold;\n\t}\n\tp{\n\t\tfont-size: 12px;\n\t}\n  }\n\n  h1, p{\n    margin: 0; padding: 0;\n  }\n\n[wrap-box]{\n\tmax-width: 1200px;\n\tmargin-left: auto; margin-right: auto;\n}\n\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\tbackground: #eee;\n}\nul{\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n}\np,h1,h2,h3,h4,h5,h6{\n\tmargin: 0;\n\tpadding: 0;\n}\na:hover{\n\ttext-decoration: none;\n}\nbutton:focus {\n\toutline: none !important;\n}\nlabel {\n\tmargin-bottom: inherit;\n}\n@font-face {\n  font-family: Calibri-Regular;\n  src: url(./assets/fonts/Calibri-Regular.ttf);\n}\n@font-face {\n  font-family: Calibri-Bold;\n  src: url(./assets/fonts/Calibri-Bold.ttf);\n}\n@font-face {\n  font-family: segoe-ui-bold;\n  src: url(./assets/fonts/segoe-ui-bold.ttf);\n}\n@font-face {\n  font-family: segoe-ui-regular;\n  src: url(./assets/fonts/segoe-ui-regular.ttf);\n}\n@font-face {\n  font-family: RiftSoft-Demi;\n  src: url(./assets/fonts/RiftSoft-Demi.otf);\n}\n@font-face {\n  font-family: RiftSoft-Medium;\n  src: url(./assets/fonts/RiftSoft-Medium.otf);\n}\n\n/*Login Pages*/\n/*Login Pages*/\n.user-login-area {\n\tbackground: url(./assets/images/background.jpg);\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\theight: 100%;\n\tbackground-position: 80% 0%;\n}\n.user-login-area:after {\n\tcontent: \"\";\n\tposition: absolute;\n\theight: 100%;\n\twidth: 100%;\n\ttop: 0;\n\tleft: 0;\n\tbackground: rgba(38, 148, 163, .5);\n}\n.single-user-area {\n\tposition: relative;\n\tz-index: 22;\n\tbackground: rgba(0, 0, 0, .25);\n\twidth: 400px;\n\tmargin: auto;\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex-direction: column;\n\tjustify-content: center;\n\tpadding-left: 35px;\n\tpadding-right: 25px;\n}\n.login-email {\n\tmargin-bottom: 25px;\n}\n.login-email i, .login-password i {\n\tposition: absolute;\n\tleft: 44px;\n\tmargin-top: 5px;\n\tcolor: #ddd;\n\tfont-size: 14px;\n}\n.login-email input, .login-password input {\n\tbackground: transparent;\n\tborder: none;\n\tborder-bottom: 2px solid #ddd;\n\twidth: 100%;\n\tpadding: 0px 35px;\n\tpadding-bottom: 8px;\n\tfont-family: Calibri-Regular;\n\tfont-size: 16px;\n\tcolor: #fff;\n\toutline: none;\n}\n.login-email input::placeholder, .login-password input::placeholder {\n\tfont-family: Calibri-Regular;\n\tcolor: #fff;\n\tfont-size: 16px;\n\topacity: 1;\n}\n\n.privacy-area {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-top: 120px;\n}\n.privacy-area p {\n\tfont-family: Calibri-Regular;\n\tcolor: #fff;\n\tfont-size: 14px;\n\tmargin-right: 15px;\n}\n.privacy-area a {\n\tfont-family: Calibri-Bold;\n\ttext-transform: uppercase;\n\tcolor: #F1B4AE;\n\tfont-size: 18px;\n\ttransition: 1s;\n}\n.privacy-area a:hover {\n\tcolor: #00ACC4;\n}\nion-title {\n\tpadding: 0px;\n}", null, "html.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\n\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\n\nbody {\n  background: var(--ion-background-color);\n}\n\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\n\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\n  padding-top: 0px;\n}\n\nhtml.ios ion-modal .ion-page {\n  border-radius: inherit;\n}\n\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\n\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n\n.ion-page-invisible {\n  opacity: 0;\n}\n\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\n\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n\n.menu-content {\n  transform: translate3d(0,  0,  0);\n}\n\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n\n/*# sourceMappingURL=core.css.map */\n", null, null, null, null, null, "audio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\n\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\n\ntextarea::placeholder {\n  padding-left: 2px;\n}\n\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\n\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\n\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\n\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\n[tappable] {\n  cursor: pointer;\n}\n\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n/*# sourceMappingURL=normalize.css.map */\n", null, "* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n  text-size-adjust: 100%;\n}\n\nhtml:not(.hydrated) body {\n  display: none;\n}\n\nhtml.plt-pwa {\n  height: 100vh;\n}\n\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  text-size-adjust: none;\n}\n\n/*# sourceMappingURL=structure.css.map */\n", null, "html {\n  font-family: var(--ion-font-family);\n}\n\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\nh3 {\n  font-size: 22px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\nh6 {\n  font-size: 16px;\n}\n\nsmall {\n  font-size: 75%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/*# sourceMappingURL=typography.css.map */\n", null, ".ion-hide {\n  display: none !important;\n}\n\n.ion-hide-up {\n  display: none !important;\n}\n\n.ion-hide-down {\n  display: none !important;\n}\n\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .ion-hide-xl-down {\n    display: none !important;\n  }\n}\n\n/*# sourceMappingURL=display.css.map */\n", null, ".ion-no-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.ion-padding {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-top {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n.ion-padding-start {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-start {\n    padding-left: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-end {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-end {\n    padding-right: unset;\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-bottom {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-vertical {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-horizontal {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-no-margin {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.ion-margin {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-top {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n.ion-margin-start {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-start {\n    margin-left: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-end {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-end {\n    margin-right: unset;\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-bottom {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-vertical {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-horizontal {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n/*# sourceMappingURL=padding.css.map */\n", null, ".ion-float-left {\n  float: left !important;\n}\n\n.ion-float-right {\n  float: right !important;\n}\n\n.ion-float-start {\n  float: left !important;\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\n  float: right !important;\n}\n\n.ion-float-end {\n  float: right !important;\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\n  float: left !important;\n}\n\n@media (min-width: 576px) {\n  .ion-float-sm-left {\n    float: left !important;\n  }\n\n  .ion-float-sm-right {\n    float: right !important;\n  }\n\n  .ion-float-sm-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\n    float: right !important;\n  }\n\n  .ion-float-sm-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\n    float: left !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-float-md-left {\n    float: left !important;\n  }\n\n  .ion-float-md-right {\n    float: right !important;\n  }\n\n  .ion-float-md-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\n    float: right !important;\n  }\n\n  .ion-float-md-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\n    float: left !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-float-lg-left {\n    float: left !important;\n  }\n\n  .ion-float-lg-right {\n    float: right !important;\n  }\n\n  .ion-float-lg-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\n    float: right !important;\n  }\n\n  .ion-float-lg-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\n    float: left !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-float-xl-left {\n    float: left !important;\n  }\n\n  .ion-float-xl-right {\n    float: right !important;\n  }\n\n  .ion-float-xl-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\n    float: right !important;\n  }\n\n  .ion-float-xl-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\n    float: left !important;\n  }\n}\n\n/*# sourceMappingURL=float-elements.css.map */\n", null, ".ion-text-center {\n  text-align: center !important;\n}\n\n.ion-text-justify {\n  text-align: justify !important;\n}\n\n.ion-text-start {\n  text-align: start !important;\n}\n\n.ion-text-end {\n  text-align: end !important;\n}\n\n.ion-text-left {\n  text-align: left !important;\n}\n\n.ion-text-right {\n  text-align: right !important;\n}\n\n.ion-text-nowrap {\n  white-space: nowrap !important;\n}\n\n.ion-text-wrap {\n  white-space: normal !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-center {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-center {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-center {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-center {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap {\n    white-space: normal !important;\n  }\n}\n\n/*# sourceMappingURL=text-alignment.css.map */\n", null, ".ion-text-uppercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n\n.ion-text-lowercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n\n.ion-text-capitalize {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n/*# sourceMappingURL=text-transformation.css.map */\n", null, ".ion-align-self-start {\n  align-self: flex-start !important;\n}\n\n.ion-align-self-end {\n  align-self: flex-end !important;\n}\n\n.ion-align-self-center {\n  align-self: center !important;\n}\n\n.ion-align-self-stretch {\n  align-self: stretch !important;\n}\n\n.ion-align-self-baseline {\n  align-self: baseline !important;\n}\n\n.ion-align-self-auto {\n  align-self: auto !important;\n}\n\n.ion-wrap {\n  flex-wrap: wrap !important;\n}\n\n.ion-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.ion-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.ion-justify-content-start {\n  justify-content: flex-start !important;\n}\n\n.ion-justify-content-center {\n  justify-content: center !important;\n}\n\n.ion-justify-content-end {\n  justify-content: flex-end !important;\n}\n\n.ion-justify-content-around {\n  justify-content: space-around !important;\n}\n\n.ion-justify-content-between {\n  justify-content: space-between !important;\n}\n\n.ion-justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n\n.ion-align-items-start {\n  align-items: flex-start !important;\n}\n\n.ion-align-items-center {\n  align-items: center !important;\n}\n\n.ion-align-items-end {\n  align-items: flex-end !important;\n}\n\n.ion-align-items-stretch {\n  align-items: stretch !important;\n}\n\n.ion-align-items-baseline {\n  align-items: baseline !important;\n}\n\n/*# sourceMappingURL=flex-utils.css.map */\n"],
        "sourceRoot": ""
      }]); // Exports

      /* harmony default export */


      __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
      /***/
    },

    /***/
    "yb4E":
    /*!******************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/theme/variables.scss ***!
      \******************************************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yb4E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../node_modules/css-loader/dist/runtime/api.js */
      "JPst");
      /* harmony import */


      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__); // Imports


      var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true); // Module


      ___CSS_LOADER_EXPORT___.push([module.i, "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #2694a3;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #30b2c4;\n  --ion-color-primary-tint: #71a8af;\n  /** secondary **/\n  --ion-color-secondary: #EF9E95;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: rgb(223, 175, 171);\n  --ion-color-secondary-tint: rgb(218, 174, 170);\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #ffffff;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #2694a3;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}", "", {
        "version": 3,
        "sources": ["webpack://src/theme/variables.scss"],
        "names": [],
        "mappings": "AAGA,0BAAA;AACA;EACE,cAAA;EACA,4BAAA;EACA,qCAAA;EACA,qCAAA;EACA,+CAAA;EACA,kCAAA;EACA,iCAAA;EAEA,gBAAA;EACA,8BAAA;EACA,uCAAA;EACA,uCAAA;EACA,iDAAA;EACA,+CAAA;EACA,8CAAA;EAEA,eAAA;EACA,6BAAA;EACA,sCAAA;EACA,sCAAA;EACA,gDAAA;EACA,mCAAA;EACA,kCAAA;EAEA,cAAA;EACA,4BAAA;EACA,oCAAA;EACA,qCAAA;EACA,+CAAA;EACA,kCAAA;EACA,iCAAA;EAEA,cAAA;EACA,4BAAA;EACA,oCAAA;EACA,qCAAA;EACA,+CAAA;EACA,kCAAA;EACA,iCAAA;EAEA,aAAA;EACA,2BAAA;EACA,mCAAA;EACA,oCAAA;EACA,8CAAA;EACA,iCAAA;EACA,gCAAA;EAEA,WAAA;EACA,yBAAA;EACA,gCAAA;EACA,kCAAA;EACA,4CAAA;EACA,+BAAA;EACA,8BAAA;EAEA,aAAA;EACA,2BAAA;EACA,qCAAA;EACA,oCAAA;EACA,8CAAA;EACA,iCAAA;EACA,gCAAA;EAEA,YAAA;EACA,0BAAA;EACA,oCAAA;EACA,mCAAA;EACA,uCAAA;EACA,gCAAA;EACA,+BAAA;AAVF",
        "sourcesContent": ["// Ionic Variables and Theming. For more info, please see:\n// http://ionicframework.com/docs/theming/\n\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #2694a3;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #30b2c4;\n  --ion-color-primary-tint: #71a8af;\n\n  /** secondary **/\n  --ion-color-secondary: #EF9E95;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: rgb(223, 175, 171);\n  --ion-color-secondary-tint: rgb(218, 174, 170);\n\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n\n  /** light **/\n  --ion-color-light: #ffffff;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #2694a3;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n"],
        "sourceRoot": ""
      }]); // Exports

      /* harmony default export */


      __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
      /***/
    }
  }, [[3, "runtime"]]]);
})();
//# sourceMappingURL=styles-es5.js.map