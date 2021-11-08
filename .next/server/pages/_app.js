(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\User\\mindsheep\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // import Font Awesome CSS


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__.config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({
  Component,
  pageProps
}) {
  //return <Component {...pageProps} />
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const handleRouteChange = url => {
    window.gtag('config', 'G-BFJGL2563L', {
      page_path: url
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(async () => {
    const {
      default: ReactPixel
    } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-facebook-pixel */ "react-facebook-pixel", 23));
    ReactPixel.init('1083310298772388', null, {
      autoConfig: true,
      debug: true
    });
    ReactPixel.pageView();
    ReactPixel.track("ViewContent");
  });
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! bootstrap/dist/js/bootstrap.bundle */ "bootstrap/dist/js/bootstrap.bundle", 23));
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: ["// Responsive meta tag", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "facebook-domain-verification",
        content: "eaw09084tc0bpcfl2ukw56x6cmybeh"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preload",
        href: "/fonts/AlyssumSans/AlyssumSans.TTF",
        as: "font",
        crossOrigin: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        async: true,
        defer: true,
        href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, this), "//  bootstrap CDN", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        strategy: "lazyOnload",
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-BFJGL2563L"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        strategy: "lazyOnload",
        dangerouslySetInnerHTML: {
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BFJGL2563L', { page_path: window.location.pathname });
        `
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \*******************************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (function() {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/fontawesome-svg-core");;

/***/ }),

/***/ "bootstrap/dist/js/bootstrap.bundle":
/*!*****************************************************!*\
  !*** external "bootstrap/dist/js/bootstrap.bundle" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("bootstrap/dist/js/bootstrap.bundle");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-facebook-pixel":
/*!***************************************!*\
  !*** external "react-facebook-pixel" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-facebook-pixel");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRlc3QvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL25leHQtdGVzdC9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiIiwid2VicGFjazovL25leHQtdGVzdC9leHRlcm5hbCBcImJvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGVcIiIsIndlYnBhY2s6Ly9uZXh0LXRlc3QvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9uZXh0LXRlc3QvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25leHQtdGVzdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC10ZXN0L2V4dGVybmFsIFwicmVhY3QtZmFjZWJvb2stcGl4ZWxcIiIsIndlYnBhY2s6Ly9uZXh0LXRlc3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJjb25maWciLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwid2luZG93IiwiZ3RhZyIsInBhZ2VfcGF0aCIsInVzZUVmZmVjdCIsImV2ZW50cyIsIm9uIiwib2ZmIiwiZGVmYXVsdCIsIlJlYWN0UGl4ZWwiLCJpbml0IiwiYXV0b0NvbmZpZyIsImRlYnVnIiwicGFnZVZpZXciLCJ0cmFjayIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FDdUQ7O0FBQ3ZEO0FBQ0FBLGdGQUFBLEdBQW9CLEtBQXBCLEMsQ0FBMkI7O0FBRTNCLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QztBQUNBLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRUEsUUFBTUMsaUJBQWlCLEdBQUlDLEdBQUQsSUFBUztBQUNqQ0MsVUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWixFQUFzQixjQUF0QixFQUFzQztBQUNwQ0MsZUFBUyxFQUFFSDtBQUR5QixLQUF0QztBQUdELEdBSkQ7O0FBTUFJLGtEQUFTLENBQUMsTUFBTTtBQUNkUCxVQUFNLENBQUNRLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NQLGlCQUF4QztBQUNBLFdBQU8sTUFBTTtBQUNYRixZQUFNLENBQUNRLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNSLGlCQUF6QztBQUNELEtBRkQ7QUFHRCxHQUxRLEVBS04sQ0FBQ0YsTUFBTSxDQUFDUSxNQUFSLENBTE0sQ0FBVDtBQU9BRCxrREFBUyxDQUFDLFlBQVk7QUFDcEIsVUFBTTtBQUFFSSxhQUFPLEVBQUVDO0FBQVgsUUFBMEIsTUFBTSw4SUFBdEM7QUFDQUEsY0FBVSxDQUFDQyxJQUFYLENBQWdCLGtCQUFoQixFQUFvQyxJQUFwQyxFQUEwQztBQUN0Q0MsZ0JBQVUsRUFBRSxJQUQwQjtBQUV0Q0MsV0FBSyxFQUFFO0FBRitCLEtBQTFDO0FBSUFILGNBQVUsQ0FBQ0ksUUFBWDtBQUNBSixjQUFVLENBQUNLLEtBQVgsQ0FBaUIsYUFBakI7QUFDRCxHQVJRLENBQVQ7QUFVQVYsa0RBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBS0Esc0JBQ0U7QUFBQSw0QkFDQSw4REFBQyxrREFBRDtBQUFBLHdEQUVBO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQUdBO0FBQU0sWUFBSSxFQUFDLDhCQUFYO0FBQTBDLGVBQU8sRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEEsZUFJQTtBQUFNLFdBQUcsRUFBQyxlQUFWO0FBQTBCLFlBQUksRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkEsZUFLQTtBQUFNLFdBQUcsRUFBQyxTQUFWO0FBQW9CLFlBQUksRUFBQyxvQ0FBekI7QUFBOEQsVUFBRSxFQUFDLE1BQWpFO0FBQXdFLG1CQUFXLEVBQUM7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBLGVBTUE7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsMkJBQTVCO0FBQXdELG1CQUFXO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOQSxlQU9BO0FBQU0sYUFBSyxNQUFYO0FBQVksYUFBSyxNQUFqQjtBQUFrQixZQUFJLEVBQUMscUZBQXZCO0FBQTZHLFdBQUcsRUFBQztBQUFqSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEEsb0NBa0JBO0FBQVEsZ0JBQVEsRUFBQyxZQUFqQjtBQUE4QixhQUFLLE1BQW5DO0FBQW9DLFdBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJBLGVBbUJBO0FBQVEsZ0JBQVEsRUFBQyxZQUFqQjtBQUNFLCtCQUF1QixFQUFFO0FBQ3ZCVyxnQkFBTSxFQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOK0I7QUFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQStCQSw4REFBQyxTQUFELG9CQUFlbkIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JBO0FBQUEsa0JBREY7QUFtQ0Q7O0FBRUQsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3NcIjsgLy8gaW1wb3J0IEZvbnQgQXdlc29tZSBDU1NcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xyXG5jb25maWcuYXV0b0FkZENzcyA9IGZhbHNlOyAvLyBUZWxsIEZvbnQgQXdlc29tZSB0byBza2lwIGFkZGluZyB0aGUgQ1NTIGF1dG9tYXRpY2FsbHkgc2luY2UgaXQncyBiZWluZyBpbXBvcnRlZCBhYm92ZVxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgLy9yZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcclxuICAgIHdpbmRvdy5ndGFnKCdjb25maWcnLCAnRy1CRkpHTDI1NjNMJywge1xyXG4gICAgICBwYWdlX3BhdGg6IHVybCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRlZmF1bHQ6IFJlYWN0UGl4ZWwgfSA9IGF3YWl0IGltcG9ydCgncmVhY3QtZmFjZWJvb2stcGl4ZWwnKTtcclxuICAgIFJlYWN0UGl4ZWwuaW5pdCgnMTA4MzMxMDI5ODc3MjM4OCcsIG51bGwsIHtcclxuICAgICAgICBhdXRvQ29uZmlnOiB0cnVlLFxyXG4gICAgICAgIGRlYnVnOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIFJlYWN0UGl4ZWwucGFnZVZpZXcoKTtcclxuICAgIFJlYWN0UGl4ZWwudHJhY2soXCJWaWV3Q29udGVudFwiKVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW1wb3J0KFwiYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZVwiKVxyXG4gIH0sIFtdKTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8SGVhZD5cclxuICAgIC8vIFJlc3BvbnNpdmUgbWV0YSB0YWdcclxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICA8bWV0YSBuYW1lPVwiZmFjZWJvb2stZG9tYWluLXZlcmlmaWNhdGlvblwiIGNvbnRlbnQ9XCJlYXcwOTA4NHRjMGJwY2ZsMnVrdzU2eDZjbXliZWhcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwicHJlbG9hZFwiIGhyZWY9XCIvZm9udHMvQWx5c3N1bVNhbnMvQWx5c3N1bVNhbnMuVFRGXCIgYXM9XCJmb250XCIgY3Jvc3NPcmlnaW49XCJcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4gLz5cclxuICAgIDxsaW5rIGFzeW5jIGRlZmVyIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDMwMDs0MDA7NjAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgLy8gIGJvb3RzdHJhcCBDRE5cclxuICAgIHsvKiA8bGlua1xyXG4gICAgc3RyYXRlZ3k9XCJsYXp5T25sb2FkXCIgYXN5bmMgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGExL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICBpbnRlZ3JpdHk9XCJzaGEzODQtZ2lKRjZra29xTlEwMHZ5K0hNRFA3YXpPdUwweHRiZkljYVQ5d2pLSHI4UmJEVmRkVkh5VGZBQXNyZWt3S21QMVwiXHJcbiAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiIFxyXG4gICAgLz5cclxuICAgIDxzY3JpcHRcclxuICAgIHN0cmF0ZWd5PVwibGF6eU9ubG9hZFwiIGFzeW5jIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGExL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIlxyXG4gICAgaW50ZWdyaXR5PVwic2hhMzg0LXlnYlY5a2lxVWM2b2E0bXNYbjk4NjhwVHRXTWdpUWFlWUg3L3Q3TEVDTGJ5UEEyeDY1S2dmODBPSkZkcm9hZldcIlxyXG4gICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD4gKi99XHJcbiAgICA8c2NyaXB0IHN0cmF0ZWd5PVwibGF6eU9ubG9hZFwiIGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1CRkpHTDI1NjNMXCI+PC9zY3JpcHQ+XHJcbiAgICA8c2NyaXB0IHN0cmF0ZWd5PVwibGF6eU9ubG9hZFwiXHJcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cclxuICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICBndGFnKCdjb25maWcnLCAnRy1CRkpHTDI1NjNMJywgeyBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSB9KTtcclxuICAgICAgICBgLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZhY2Vib29rLXBpeGVsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=