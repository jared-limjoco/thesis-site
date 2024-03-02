self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/features/home/raffle.jsx":
/*!**************************************!*\
  !*** ./src/features/home/raffle.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Raffle; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_heading_h2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ui/heading/h2 */ "./src/ui/heading/h2/index.jsx");
/* harmony import */ var _ui_heading_h3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui/heading/h3 */ "./src/ui/heading/h3/index.jsx");
/* harmony import */ var _ui_heading_p__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/ui/heading/p */ "./src/ui/heading/p/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./src/features/home/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Projects\\thesis-site\\src\\features\\home\\raffle.jsx",
    _s = $RefreshSig$();






function Raffle() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      scrollState = _useState[0],
      setScrollState = _useState[1];

  var handleScroll = function handleScroll() {
    setScrollState(window.scrollY);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    window.addEventListener("scroll", handleScroll);
    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "flex container mx-auto p-5",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-auto lg:px-24",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "duration-300 ease-in text-center  ".concat(scrollState < 300 ? "opacity-0" : "opacity-100"),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_heading_h2__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: "Rewards"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_heading_p__WEBPACK_IMPORTED_MODULE_4__.default, {
          children: "By helping us annotate, you are eligble to win the following prizes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-around flex-wrap mt-4 duration-300 ease-in ".concat(scrollState < 300 ? "opacity-0" : "opacity-100"),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().prize),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_heading_h3__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: "Raffle Prize"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_heading_p__WEBPACK_IMPORTED_MODULE_4__.default, {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().infoPrize),
            children: "Twenty annotators will have a change to win our raffle prize."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_heading_p__WEBPACK_IMPORTED_MODULE_4__.default, {
            children: "PHP 100 each"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_s(Raffle, "Onr4umYtoWJ9u8OK7zHL/U2OnX4=");

_c = Raffle;

var _c;

$RefreshReg$(_c, "Raffle");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2hvbWUvcmFmZmxlLmpzeCJdLCJuYW1lcyI6WyJSYWZmbGUiLCJ1c2VTdGF0ZSIsInNjcm9sbFN0YXRlIiwic2V0U2Nyb2xsU3RhdGUiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNPQywrQ0FBUSxDQUFDLENBQUQsQ0FEZjtBQUFBLE1BQ3hCQyxXQUR3QjtBQUFBLE1BQ1hDLGNBRFc7O0FBRy9CLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJELGtCQUFjLENBQUNFLE1BQU0sQ0FBQ0MsT0FBUixDQUFkO0FBQ0QsR0FGRDs7QUFJQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RGLFVBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NKLFlBQWxDO0FBQ0EsV0FBTztBQUFBLGFBQU1DLE1BQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNMLFlBQXJDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FIUSxDQUFUO0FBS0Esc0JBQ0U7QUFBUyxhQUFTLEVBQUMsNEJBQW5CO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLDhDQUNQRixXQUFXLEdBQUcsR0FBZCxHQUFvQixXQUFwQixHQUFrQyxhQUQzQixDQURYO0FBQUEsZ0NBS0UsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFNRSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVdFO0FBQ0UsaUJBQVMsb0VBQ1BBLFdBQVcsR0FBRyxHQUFkLEdBQW9CLFdBQXBCLEdBQWtDLGFBRDNCLENBRFg7QUFBQSwrQkFLRTtBQUFLLG1CQUFTLEVBQUVRLGtFQUFoQjtBQUFBLGtDQUNFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBRyxxQkFBUyxFQUFFQSxzRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUtFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQkQ7O0dBM0N1QlYsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MDVjMTVkMGM4ZTgyNmMxMjhiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEgyIGZyb20gXCJAL3VpL2hlYWRpbmcvaDJcIjtcclxuaW1wb3J0IEgzIGZyb20gXCJAL3VpL2hlYWRpbmcvaDNcIjtcclxuaW1wb3J0IFAgZnJvbSBcIkAvdWkvaGVhZGluZy9wXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFmZmxlKCkge1xyXG4gIGNvbnN0IFtzY3JvbGxTdGF0ZSwgc2V0U2Nyb2xsU3RhdGVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIHNldFNjcm9sbFN0YXRlKHdpbmRvdy5zY3JvbGxZKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBjb250YWluZXIgbXgtYXV0byBwLTVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGxnOnB4LTI0XCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZHVyYXRpb24tMzAwIGVhc2UtaW4gdGV4dC1jZW50ZXIgICR7XHJcbiAgICAgICAgICAgIHNjcm9sbFN0YXRlIDwgMzAwID8gXCJvcGFjaXR5LTBcIiA6IFwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEgyPlJld2FyZHM8L0gyPlxyXG4gICAgICAgICAgPFA+XHJcbiAgICAgICAgICAgIEJ5IGhlbHBpbmcgdXMgYW5ub3RhdGUsIHlvdSBhcmUgZWxpZ2JsZSB0byB3aW4gdGhlIGZvbGxvd2luZyBwcml6ZXNcclxuICAgICAgICAgIDwvUD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktYXJvdW5kIGZsZXgtd3JhcCBtdC00IGR1cmF0aW9uLTMwMCBlYXNlLWluICR7XHJcbiAgICAgICAgICAgIHNjcm9sbFN0YXRlIDwgMzAwID8gXCJvcGFjaXR5LTBcIiA6IFwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcml6ZX0+XHJcbiAgICAgICAgICAgIDxIMz5SYWZmbGUgUHJpemU8L0gzPlxyXG4gICAgICAgICAgICA8UCBjbGFzc05hbWU9e3N0eWxlcy5pbmZvUHJpemV9PlxyXG4gICAgICAgICAgICAgIFR3ZW50eSBhbm5vdGF0b3JzIHdpbGwgaGF2ZSBhIGNoYW5nZSB0byB3aW4gb3VyIHJhZmZsZSBwcml6ZS5cclxuICAgICAgICAgICAgPC9QPlxyXG4gICAgICAgICAgICA8UD5cclxuICAgICAgICAgICAgICBQSFAgMTAwIGVhY2hcclxuICAgICAgICAgICAgPC9QPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==