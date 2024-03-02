(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/pages/_app/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/_app/index.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var D_Projects_thesis_site_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.scss */ "./src/pages/_app/globals.scss");
/* harmony import */ var _globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_globals_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Projects\\thesis-site\\src\\pages\\_app\\index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Projects_thesis_site_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_auth_client__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    session: pageProps.session,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = App;

var _c;

$RefreshReg$(_c, "App");

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


/***/ }),

/***/ "./node_modules/next-auth/dist/client/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/next-auth/dist/client/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useSession = useSession;
exports.session = exports.getSession = getSession;
exports.csrfToken = exports.getCsrfToken = getCsrfToken;
exports.providers = exports.getProviders = getProviders;
exports.signin = exports.signIn = signIn;
exports.signout = exports.signOut = signOut;
exports.options = exports.setOptions = setOptions;
exports.Provider = Provider;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _logger2 = _interopRequireWildcard(__webpack_require__(/*! ../lib/logger */ "./node_modules/next-auth/dist/lib/logger.js"));

var _parseUrl = _interopRequireDefault(__webpack_require__(/*! ../lib/parse-url */ "./node_modules/next-auth/dist/lib/parse-url.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __NEXTAUTH = {
  baseUrl: (0, _parseUrl.default)(process.env.NEXTAUTH_URL || process.env.VERCEL_URL).baseUrl,
  basePath: (0, _parseUrl.default)(process.env.NEXTAUTH_URL).basePath,
  baseUrlServer: (0, _parseUrl.default)(process.env.NEXTAUTH_URL_INTERNAL || process.env.NEXTAUTH_URL || process.env.VERCEL_URL).baseUrl,
  basePathServer: (0, _parseUrl.default)(process.env.NEXTAUTH_URL_INTERNAL || process.env.NEXTAUTH_URL).basePath,
  keepAlive: 0,
  clientMaxAge: 0,
  _clientLastSync: 0,
  _clientSyncTimer: null,
  _eventListenersAdded: false,
  _clientSession: undefined,
  _getSession: function _getSession() {}
};
var logger = (0, _logger2.proxyLogger)(_logger2.default, __NEXTAUTH.basePath);
var broadcast = BroadcastChannel();

if (typeof window !== "undefined" && !__NEXTAUTH._eventListenersAdded) {
  __NEXTAUTH._eventListenersAdded = true;
  broadcast.receive(function () {
    return __NEXTAUTH._getSession({
      event: "storage"
    });
  });
  document.addEventListener("visibilitychange", function () {
    !document.hidden && __NEXTAUTH._getSession({
      event: "visibilitychange"
    });
  }, false);
}

var SessionContext = (0, _react.createContext)();

function useSession(session) {
  var context = (0, _react.useContext)(SessionContext);
  if (context) return context;
  return _useSessionHook(session);
}

function _useSessionHook(session) {
  var _useState = (0, _react.useState)(session),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(!data),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  (0, _react.useEffect)(function () {
    __NEXTAUTH._getSession = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee() {
      var _ref2,
          _ref2$event,
          event,
          triggredByEvent,
          triggeredByStorageEvent,
          clientMaxAge,
          clientLastSync,
          currentTime,
          clientSession,
          newClientSessionData,
          _args = arguments;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref2$event = _ref2.event, event = _ref2$event === void 0 ? null : _ref2$event;
              _context.prev = 1;
              triggredByEvent = event !== null;
              triggeredByStorageEvent = event === "storage";
              clientMaxAge = __NEXTAUTH.clientMaxAge;
              clientLastSync = parseInt(__NEXTAUTH._clientLastSync);
              currentTime = _now();
              clientSession = __NEXTAUTH._clientSession;

              if (!(!triggeredByStorageEvent && clientSession !== undefined)) {
                _context.next = 19;
                break;
              }

              if (!(clientMaxAge === 0 && triggredByEvent !== true)) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return");

            case 13:
              if (!(clientMaxAge > 0 && clientSession === null)) {
                _context.next = 17;
                break;
              }

              return _context.abrupt("return");

            case 17:
              if (!(clientMaxAge > 0 && currentTime < clientLastSync + clientMaxAge)) {
                _context.next = 19;
                break;
              }

              return _context.abrupt("return");

            case 19:
              if (clientSession === undefined) {
                __NEXTAUTH._clientSession = null;
              }

              __NEXTAUTH._clientLastSync = _now();
              _context.next = 23;
              return getSession({
                triggerEvent: !triggeredByStorageEvent
              });

            case 23:
              newClientSessionData = _context.sent;
              __NEXTAUTH._clientSession = newClientSessionData;
              setData(newClientSessionData);
              setLoading(false);
              _context.next = 33;
              break;

            case 29:
              _context.prev = 29;
              _context.t0 = _context["catch"](1);
              logger.error("CLIENT_USE_SESSION_ERROR", _context.t0);
              setLoading(false);

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 29]]);
    }));

    __NEXTAUTH._getSession();
  });
  return [data, loading];
}

function getSession(_x) {
  return _getSession2.apply(this, arguments);
}

function _getSession2() {
  _getSession2 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee4(ctx) {
    var _ctx$triggerEvent;

    var session;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _fetchData("session", ctx);

          case 2:
            session = _context4.sent;

            if ((_ctx$triggerEvent = ctx === null || ctx === void 0 ? void 0 : ctx.triggerEvent) !== null && _ctx$triggerEvent !== void 0 ? _ctx$triggerEvent : true) {
              broadcast.post({
                event: "session",
                data: {
                  trigger: "getSession"
                }
              });
            }

            return _context4.abrupt("return", session);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getSession2.apply(this, arguments);
}

function getCsrfToken(_x2) {
  return _getCsrfToken.apply(this, arguments);
}

function _getCsrfToken() {
  _getCsrfToken = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee5(ctx) {
    var _yield$_fetchData;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _fetchData("csrf", ctx);

          case 2:
            _context5.t1 = _yield$_fetchData = _context5.sent;
            _context5.t0 = _context5.t1 === null;

            if (_context5.t0) {
              _context5.next = 6;
              break;
            }

            _context5.t0 = _yield$_fetchData === void 0;

          case 6:
            if (!_context5.t0) {
              _context5.next = 10;
              break;
            }

            _context5.t2 = void 0;
            _context5.next = 11;
            break;

          case 10:
            _context5.t2 = _yield$_fetchData.csrfToken;

          case 11:
            return _context5.abrupt("return", _context5.t2);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getCsrfToken.apply(this, arguments);
}

function getProviders() {
  return _getProviders.apply(this, arguments);
}

function _getProviders() {
  _getProviders = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee6() {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _fetchData("providers");

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getProviders.apply(this, arguments);
}

function signIn(_x3) {
  return _signIn.apply(this, arguments);
}

function _signIn() {
  _signIn = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee7(provider) {
    var options,
        authorizationParams,
        _options$callbackUrl,
        callbackUrl,
        _options$redirect,
        redirect,
        baseUrl,
        providers,
        isCredentials,
        isEmail,
        isSupportingReturn,
        signInUrl,
        _signInUrl,
        res,
        data,
        _data$url,
        url,
        error,
        _args7 = arguments;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            options = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
            authorizationParams = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : {};
            _options$callbackUrl = options.callbackUrl, callbackUrl = _options$callbackUrl === void 0 ? window.location.href : _options$callbackUrl, _options$redirect = options.redirect, redirect = _options$redirect === void 0 ? true : _options$redirect;
            baseUrl = _apiBaseUrl();
            _context7.next = 6;
            return getProviders();

          case 6:
            providers = _context7.sent;

            if (providers) {
              _context7.next = 9;
              break;
            }

            return _context7.abrupt("return", window.location.replace("".concat(baseUrl, "/error")));

          case 9:
            if (provider in providers) {
              _context7.next = 11;
              break;
            }

            return _context7.abrupt("return", window.location.replace("".concat(baseUrl, "/signin?callbackUrl=").concat(encodeURIComponent(callbackUrl))));

          case 11:
            isCredentials = providers[provider].type === "credentials";
            isEmail = providers[provider].type === "email";
            isSupportingReturn = isCredentials || isEmail;
            signInUrl = isCredentials ? "".concat(baseUrl, "/callback/").concat(provider) : "".concat(baseUrl, "/signin/").concat(provider);
            _signInUrl = "".concat(signInUrl, "?").concat(new URLSearchParams(authorizationParams));
            _context7.t0 = fetch;
            _context7.t1 = _signInUrl;
            _context7.t2 = {
              "Content-Type": "application/x-www-form-urlencoded"
            };
            _context7.t3 = URLSearchParams;
            _context7.t4 = _objectSpread;
            _context7.t5 = _objectSpread({}, options);
            _context7.t6 = {};
            _context7.next = 25;
            return getCsrfToken();

          case 25:
            _context7.t7 = _context7.sent;
            _context7.t8 = callbackUrl;
            _context7.t9 = {
              csrfToken: _context7.t7,
              callbackUrl: _context7.t8,
              json: true
            };
            _context7.t10 = (0, _context7.t4)(_context7.t5, _context7.t6, _context7.t9);
            _context7.t11 = new _context7.t3(_context7.t10);
            _context7.t12 = {
              method: "post",
              headers: _context7.t2,
              body: _context7.t11
            };
            _context7.next = 33;
            return (0, _context7.t0)(_context7.t1, _context7.t12);

          case 33:
            res = _context7.sent;
            _context7.next = 36;
            return res.json();

          case 36:
            data = _context7.sent;

            if (!(redirect || !isSupportingReturn)) {
              _context7.next = 42;
              break;
            }

            url = (_data$url = data.url) !== null && _data$url !== void 0 ? _data$url : callbackUrl;
            window.location.replace(url);
            if (url.includes("#")) window.location.reload();
            return _context7.abrupt("return");

          case 42:
            error = new URL(data.url).searchParams.get("error");

            if (!res.ok) {
              _context7.next = 46;
              break;
            }

            _context7.next = 46;
            return __NEXTAUTH._getSession({
              event: "storage"
            });

          case 46:
            return _context7.abrupt("return", {
              error: error,
              status: res.status,
              ok: res.ok,
              url: error ? null : data.url
            });

          case 47:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _signIn.apply(this, arguments);
}

function signOut() {
  return _signOut.apply(this, arguments);
}

function _signOut() {
  _signOut = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee8() {
    var options,
        _options$callbackUrl2,
        callbackUrl,
        _options$redirect2,
        redirect,
        baseUrl,
        fetchOptions,
        res,
        data,
        _data$url2,
        url,
        _args8 = arguments;

    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            options = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
            _options$callbackUrl2 = options.callbackUrl, callbackUrl = _options$callbackUrl2 === void 0 ? window.location.href : _options$callbackUrl2, _options$redirect2 = options.redirect, redirect = _options$redirect2 === void 0 ? true : _options$redirect2;
            baseUrl = _apiBaseUrl();
            _context8.t0 = {
              "Content-Type": "application/x-www-form-urlencoded"
            };
            _context8.t1 = URLSearchParams;
            _context8.next = 7;
            return getCsrfToken();

          case 7:
            _context8.t2 = _context8.sent;
            _context8.t3 = callbackUrl;
            _context8.t4 = {
              csrfToken: _context8.t2,
              callbackUrl: _context8.t3,
              json: true
            };
            _context8.t5 = new _context8.t1(_context8.t4);
            fetchOptions = {
              method: "post",
              headers: _context8.t0,
              body: _context8.t5
            };
            _context8.next = 14;
            return fetch("".concat(baseUrl, "/signout"), fetchOptions);

          case 14:
            res = _context8.sent;
            _context8.next = 17;
            return res.json();

          case 17:
            data = _context8.sent;
            broadcast.post({
              event: "session",
              data: {
                trigger: "signout"
              }
            });

            if (!redirect) {
              _context8.next = 24;
              break;
            }

            url = (_data$url2 = data.url) !== null && _data$url2 !== void 0 ? _data$url2 : callbackUrl;
            window.location.replace(url);
            if (url.includes("#")) window.location.reload();
            return _context8.abrupt("return");

          case 24:
            _context8.next = 26;
            return __NEXTAUTH._getSession({
              event: "storage"
            });

          case 26:
            return _context8.abrupt("return", data);

          case 27:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _signOut.apply(this, arguments);
}

function setOptions() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      baseUrl = _ref3.baseUrl,
      basePath = _ref3.basePath,
      clientMaxAge = _ref3.clientMaxAge,
      keepAlive = _ref3.keepAlive;

  if (baseUrl) __NEXTAUTH.baseUrl = baseUrl;
  if (basePath) __NEXTAUTH.basePath = basePath;
  if (clientMaxAge) __NEXTAUTH.clientMaxAge = clientMaxAge;

  if (keepAlive) {
    __NEXTAUTH.keepAlive = keepAlive;
    if (typeof window === "undefined") return;

    if (__NEXTAUTH._clientSyncTimer !== null) {
      clearTimeout(__NEXTAUTH._clientSyncTimer);
    }

    __NEXTAUTH._clientSyncTimer = setTimeout((0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (__NEXTAUTH._clientSession) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.next = 4;
              return __NEXTAUTH._getSession({
                event: "timer"
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })), keepAlive * 1000);
  }
}

function Provider(_ref5) {
  var children = _ref5.children,
      session = _ref5.session,
      options = _ref5.options;
  setOptions(options);
  return (0, _react.createElement)(SessionContext.Provider, {
    value: useSession(session)
  }, children);
}

function _fetchData(_x4) {
  return _fetchData2.apply(this, arguments);
}

function _fetchData2() {
  _fetchData2 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee9(path) {
    var _ref7,
        ctx,
        _ref7$req,
        req,
        baseUrl,
        options,
        res,
        data,
        _args9 = arguments;

    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _ref7 = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {}, ctx = _ref7.ctx, _ref7$req = _ref7.req, req = _ref7$req === void 0 ? ctx === null || ctx === void 0 ? void 0 : ctx.req : _ref7$req;
            _context9.prev = 1;
            _context9.next = 4;
            return _apiBaseUrl();

          case 4:
            baseUrl = _context9.sent;
            options = req ? {
              headers: {
                cookie: req.headers.cookie
              }
            } : {};
            _context9.next = 8;
            return fetch("".concat(baseUrl, "/").concat(path), options);

          case 8:
            res = _context9.sent;
            _context9.next = 11;
            return res.json();

          case 11:
            data = _context9.sent;

            if (res.ok) {
              _context9.next = 14;
              break;
            }

            throw data;

          case 14:
            return _context9.abrupt("return", Object.keys(data).length > 0 ? data : null);

          case 17:
            _context9.prev = 17;
            _context9.t0 = _context9["catch"](1);
            logger.error("CLIENT_FETCH_ERROR", path, _context9.t0);
            return _context9.abrupt("return", null);

          case 21:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 17]]);
  }));
  return _fetchData2.apply(this, arguments);
}

function _apiBaseUrl() {
  if (typeof window === "undefined") {
    if (!process.env.NEXTAUTH_URL) {
      logger.warn("NEXTAUTH_URL", "NEXTAUTH_URL environment variable not set");
    }

    return "".concat(__NEXTAUTH.baseUrlServer).concat(__NEXTAUTH.basePathServer);
  }

  return __NEXTAUTH.basePath;
}

function _now() {
  return Math.floor(Date.now() / 1000);
}

function BroadcastChannel() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "nextauth.message";
  return {
    receive: function receive(onReceive) {
      if (typeof window === "undefined") return;
      window.addEventListener("storage", function () {
        var _ref6 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee3(event) {
          var message;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(event.key !== name)) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return");

                case 2:
                  message = JSON.parse(event.newValue);

                  if (!((message === null || message === void 0 ? void 0 : message.event) !== "session" || !(message !== null && message !== void 0 && message.data))) {
                    _context3.next = 5;
                    break;
                  }

                  return _context3.abrupt("return");

                case 5:
                  onReceive(message);

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
    },
    post: function post(message) {
      if (typeof localStorage === "undefined") return;
      localStorage.setItem(name, JSON.stringify(_objectSpread(_objectSpread({}, message), {}, {
        timestamp: _now()
      })));
    }
  };
}

var _default = {
  getSession: getSession,
  getCsrfToken: getCsrfToken,
  getProviders: getProviders,
  useSession: useSession,
  signIn: signIn,
  signOut: signOut,
  Provider: Provider,
  setOptions: setOptions,
  options: setOptions,
  session: getSession,
  providers: getProviders,
  csrfToken: getCsrfToken,
  signin: signIn,
  signout: signOut
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next-auth/dist/lib/logger.js":
/*!***************************************************!*\
  !*** ./node_modules/next-auth/dist/lib/logger.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setLogger = setLogger;
exports.proxyLogger = proxyLogger;
exports.default = void 0;
const _logger = {
  error(code, ...message) {
    console.error(`[next-auth][error][${code.toLowerCase()}]`, `\nhttps://next-auth.js.org/errors#${code.toLowerCase()}`, ...message);
  },

  warn(code, ...message) {
    console.warn(`[next-auth][warn][${code.toLowerCase()}]`, `\nhttps://next-auth.js.org/warnings#${code.toLowerCase()}`, ...message);
  },

  debug(code, ...message) {
    var _process, _process$env;

    if (!((_process = process) !== null && process !== void 0 && (_process$env = _process.env) !== null && _process$env !== void 0 && _process$env._NEXTAUTH_DEBUG)) return;
    console.log(`[next-auth][debug][${code.toLowerCase()}]`, ...message);
  }

};

function setLogger(newLogger = {}) {
  if (newLogger.error) _logger.error = newLogger.error;
  if (newLogger.warn) _logger.warn = newLogger.warn;
  if (newLogger.debug) _logger.debug = newLogger.debug;
}

var _default = _logger;
exports.default = _default;

function proxyLogger(logger = _logger, basePath) {
  try {
    if (typeof window === "undefined") {
      return logger;
    }

    const clientLogger = {};

    for (const level in logger) {
      clientLogger[level] = (code, ...message) => {
        _logger[level](code, ...message);

        const url = `${basePath}/_log`;
        const body = new URLSearchParams({
          level,
          code,
          message: JSON.stringify(message.map(m => {
            if (m instanceof Error) {
              return {
                name: m.name,
                message: m.message,
                stack: m.stack
              };
            }

            return m;
          }))
        });

        if (navigator.sendBeacon) {
          return navigator.sendBeacon(url, body);
        }

        return fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body
        });
      };
    }

    return clientLogger;
  } catch (_unused) {
    return _logger;
  }
}

/***/ }),

/***/ "./node_modules/next-auth/dist/lib/parse-url.js":
/*!******************************************************!*\
  !*** ./node_modules/next-auth/dist/lib/parse-url.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = parseUrl;

function parseUrl(url) {
  const defaultHost = 'http://localhost:3000';
  const defaultPath = '/api/auth';

  if (!url) {
    url = `${defaultHost}${defaultPath}`;
  }

  const protocol = url.startsWith('http:') ? 'http' : 'https';
  url = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const [_host, ..._path] = url.split('/');
  const baseUrl = _host ? `${protocol}://${_host}` : defaultHost;
  const basePath = _path.length > 0 ? `/${_path.join('/')}` : defaultPath;
  return {
    baseUrl,
    basePath
  };
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app%2Findex.jsx!":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app%2Findex.jsx! ***!
  \*******************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app/index.jsx */ "./src/pages/_app/index.jsx");
      }
    ]);
  

/***/ }),

/***/ "./src/pages/_app/globals.scss":
/*!*************************************!*\
  !*** ./src/pages/_app/globals.scss ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./globals.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./src/pages/_app/globals.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./globals.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./src/pages/_app/globals.scss",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./globals.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./src/pages/_app/globals.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./src/pages/_app/globals.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./src/pages/_app/globals.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! tailwindcss v2.1.4 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n* {\n\t--tw-shadow: 0 0 #0000;\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: rgba(59, 130, 246, 0.5);\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n}\n.container {\n\twidth: 100%;\n}\n@media (min-width: 640px) {\n\n\t.container {\n\t\tmax-width: 640px;\n\t}\n}\n@media (min-width: 768px) {\n\n\t.container {\n\t\tmax-width: 768px;\n\t}\n}\n@media (min-width: 1024px) {\n\n\t.container {\n\t\tmax-width: 1024px;\n\t}\n}\n@media (min-width: 1280px) {\n\n\t.container {\n\t\tmax-width: 1280px;\n\t}\n}\n@media (min-width: 1536px) {\n\n\t.container {\n\t\tmax-width: 1536px;\n\t}\n}\n.fixed {\n\tposition: fixed;\n}\n.relative {\n\tposition: relative;\n}\n.absolute {\n\tposition: absolute;\n}\n.static {\n\tposition: static;\n}\n.top-0 {\n\ttop: 0px;\n}\n.left-0 {\n\tleft: 0px;\n}\n.bottom-0 {\n\tbottom: 0px;\n}\n.z-0 {\n\tz-index: 0;\n}\n.z-10 {\n\tz-index: 10;\n}\n.z-20 {\n\tz-index: 20;\n}\n.mx-auto {\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.my-12 {\n\tmargin-top: 3rem;\n\tmargin-bottom: 3rem;\n}\n.my-1 {\n\tmargin-top: 0.25rem;\n\tmargin-bottom: 0.25rem;\n}\n.mx-16 {\n\tmargin-left: 4rem;\n\tmargin-right: 4rem;\n}\n.mx-5 {\n\tmargin-left: 1.25rem;\n\tmargin-right: 1.25rem;\n}\n.my-5 {\n\tmargin-top: 1.25rem;\n\tmargin-bottom: 1.25rem;\n}\n.my-4 {\n\tmargin-top: 1rem;\n\tmargin-bottom: 1rem;\n}\n.my-10 {\n\tmargin-top: 2.5rem;\n\tmargin-bottom: 2.5rem;\n}\n.mb-32 {\n\tmargin-bottom: 8rem;\n}\n.mb-4 {\n\tmargin-bottom: 1rem;\n}\n.mt-5 {\n\tmargin-top: 1.25rem;\n}\n.ml-2 {\n\tmargin-left: 0.5rem;\n}\n.mb-6 {\n\tmargin-bottom: 1.5rem;\n}\n.-mb-2 {\n\tmargin-bottom: -0.5rem;\n}\n.ml-auto {\n\tmargin-left: auto;\n}\n.mb-2 {\n\tmargin-bottom: 0.5rem;\n}\n.mb-5 {\n\tmargin-bottom: 1.25rem;\n}\n.mr-2 {\n\tmargin-right: 0.5rem;\n}\n.mt-1 {\n\tmargin-top: 0.25rem;\n}\n.-mt-64 {\n\tmargin-top: -16rem;\n}\n.mt-10 {\n\tmargin-top: 2.5rem;\n}\n.mb-12 {\n\tmargin-bottom: 3rem;\n}\n.mr-5 {\n\tmargin-right: 1.25rem;\n}\n.mt-4 {\n\tmargin-top: 1rem;\n}\n.mt-2 {\n\tmargin-top: 0.5rem;\n}\n.mb-8 {\n\tmargin-bottom: 2rem;\n}\n.mt-12 {\n\tmargin-top: 3rem;\n}\n.mb-64 {\n\tmargin-bottom: 16rem;\n}\n.-mt-1 {\n\tmargin-top: -0.25rem;\n}\n.ml-8 {\n\tmargin-left: 2rem;\n}\n.-ml-12 {\n\tmargin-left: -3rem;\n}\n.mt-16 {\n\tmargin-top: 4rem;\n}\n.mr-1 {\n\tmargin-right: 0.25rem;\n}\n.-mt-2 {\n\tmargin-top: -0.5rem;\n}\n.mr-8 {\n\tmargin-right: 2rem;\n}\n.-mt-16 {\n\tmargin-top: -4rem;\n}\n.ml-0 {\n\tmargin-left: 0px;\n}\n.ml-5 {\n\tmargin-left: 1.25rem;\n}\n.flex {\n\tdisplay: flex;\n}\n.block {\n\tdisplay: block;\n}\n.inline-block {\n\tdisplay: inline-block;\n}\n.grid {\n\tdisplay: grid;\n}\n.inline {\n\tdisplay: inline;\n}\n.hidden {\n\tdisplay: none;\n}\n.h-0 {\n\theight: 0px;\n}\n.h-screen {\n\theight: 100vh;\n}\n.h-5 {\n\theight: 1.25rem;\n}\n.h-3 {\n\theight: 0.75rem;\n}\n.h-12 {\n\theight: 3rem;\n}\n.h-96 {\n\theight: 24rem;\n}\n.h-7 {\n\theight: 1.75rem;\n}\n.w-10\\/12 {\n\twidth: 83.333333%;\n}\n.w-full {\n\twidth: 100%;\n}\n.w-2\\/3 {\n\twidth: 66.666667%;\n}\n.w-1\\/3 {\n\twidth: 33.333333%;\n}\n.w-0 {\n\twidth: 0px;\n}\n.w-screen {\n\twidth: 100vw;\n}\n.w-64 {\n\twidth: 16rem;\n}\n.w-32 {\n\twidth: 8rem;\n}\n.w-5 {\n\twidth: 1.25rem;\n}\n.w-28 {\n\twidth: 7rem;\n}\n.w-3 {\n\twidth: 0.75rem;\n}\n.w-72 {\n\twidth: 18rem;\n}\n.w-96 {\n\twidth: 24rem;\n}\n.w-80 {\n\twidth: 20rem;\n}\n.w-7 {\n\twidth: 1.75rem;\n}\n.max-w-5xl {\n\tmax-width: 64rem;\n}\n.max-w-md {\n\tmax-width: 28rem;\n}\n.max-w-4xl {\n\tmax-width: 56rem;\n}\n.flex-grow {\n\tflex-grow: 1;\n}\n.transform {\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\ttransform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-45 {\n\t--tw-rotate: 45deg;\n}\n.rotate-180 {\n\t--tw-rotate: 180deg;\n}\n.cursor-pointer {\n\tcursor: pointer;\n}\n.cursor-default {\n\tcursor: default;\n}\n.select-none {\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n}\n.appearance-none {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n}\n.flex-col {\n\tflex-direction: column;\n}\n.flex-row {\n\tflex-direction: row;\n}\n.flex-col-reverse {\n\tflex-direction: column-reverse;\n}\n.flex-wrap {\n\tflex-wrap: wrap;\n}\n.content-center {\n\talign-content: center;\n}\n.items-center {\n\talign-items: center;\n}\n.justify-center {\n\tjustify-content: center;\n}\n.justify-end {\n\tjustify-content: flex-end;\n}\n.justify-between {\n\tjustify-content: space-between;\n}\n.justify-around {\n\tjustify-content: space-around;\n}\n.self-center {\n\talign-self: center;\n}\n.rounded {\n\tborder-radius: 0.25rem;\n}\n.rounded-md {\n\tborder-radius: 0.375rem;\n}\n.rounded-full {\n\tborder-radius: 9999px;\n}\n.border {\n\tborder-width: 1px;\n}\n.border-0 {\n\tborder-width: 0px;\n}\n.border-4 {\n\tborder-width: 4px;\n}\n.border-t {\n\tborder-top-width: 1px;\n}\n.border-b {\n\tborder-bottom-width: 1px;\n}\n.border-l-2 {\n\tborder-left-width: 2px;\n}\n.border-solid {\n\tborder-style: solid;\n}\n.border-black {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(0, 0, 0, var(--tw-border-opacity));\n}\n.border-gray-900 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(17, 24, 39, var(--tw-border-opacity));\n}\n.border-red-500 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(239, 68, 68, var(--tw-border-opacity));\n}\n.border-red-600 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(220, 38, 38, var(--tw-border-opacity));\n}\n.border-transparent {\n\tborder-color: transparent;\n}\n.bg-white {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-gray-200 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n.bg-gray-800 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n.bg-red-600 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(220, 38, 38, var(--tw-bg-opacity));\n}\n.bg-red-500 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n}\n.bg-transparent {\n\tbackground-color: transparent;\n}\n.bg-black {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(0, 0, 0, var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.fill-current {\n\tfill: currentColor;\n}\n.p-4 {\n\tpadding: 1rem;\n}\n.p-2 {\n\tpadding: 0.5rem;\n}\n.p-5 {\n\tpadding: 1.25rem;\n}\n.px-5 {\n\tpadding-left: 1.25rem;\n\tpadding-right: 1.25rem;\n}\n.py-2 {\n\tpadding-top: 0.5rem;\n\tpadding-bottom: 0.5rem;\n}\n.px-0 {\n\tpadding-left: 0px;\n\tpadding-right: 0px;\n}\n.py-12 {\n\tpadding-top: 3rem;\n\tpadding-bottom: 3rem;\n}\n.px-4 {\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\n.py-5 {\n\tpadding-top: 1.25rem;\n\tpadding-bottom: 1.25rem;\n}\n.py-4 {\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n.px-12 {\n\tpadding-left: 3rem;\n\tpadding-right: 3rem;\n}\n.py-10 {\n\tpadding-top: 2.5rem;\n\tpadding-bottom: 2.5rem;\n}\n.py-20 {\n\tpadding-top: 5rem;\n\tpadding-bottom: 5rem;\n}\n.px-1 {\n\tpadding-left: 0.25rem;\n\tpadding-right: 0.25rem;\n}\n.py-3 {\n\tpadding-top: 0.75rem;\n\tpadding-bottom: 0.75rem;\n}\n.px-2 {\n\tpadding-left: 0.5rem;\n\tpadding-right: 0.5rem;\n}\n.py-1 {\n\tpadding-top: 0.25rem;\n\tpadding-bottom: 0.25rem;\n}\n.pb-4 {\n\tpadding-bottom: 1rem;\n}\n.pb-12 {\n\tpadding-bottom: 3rem;\n}\n.pr-20 {\n\tpadding-right: 5rem;\n}\n.pt-6 {\n\tpadding-top: 1.5rem;\n}\n.pl-10 {\n\tpadding-left: 2.5rem;\n}\n.pt-0 {\n\tpadding-top: 0px;\n}\n.pt-12 {\n\tpadding-top: 3rem;\n}\n.pt-4 {\n\tpadding-top: 1rem;\n}\n.pb-24 {\n\tpadding-bottom: 6rem;\n}\n.pt-8 {\n\tpadding-top: 2rem;\n}\n.pt-5 {\n\tpadding-top: 1.25rem;\n}\n.pl-8 {\n\tpadding-left: 2rem;\n}\n.pr-8 {\n\tpadding-right: 2rem;\n}\n.pl-4 {\n\tpadding-left: 1rem;\n}\n.text-center {\n\ttext-align: center;\n}\n.text-left {\n\ttext-align: left;\n}\n.align-middle {\n\tvertical-align: middle;\n}\n.align-bottom {\n\tvertical-align: bottom;\n}\n.text-sm {\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\n.text-xs {\n\tfont-size: 0.75rem;\n\tline-height: 1rem;\n}\n.text-xl {\n\tfont-size: 1.25rem;\n\tline-height: 1.75rem;\n}\n.text-5xl {\n\tfont-size: 3rem;\n\tline-height: 1;\n}\n.text-2xl {\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n}\n.text-lg {\n\tfont-size: 1.125rem;\n\tline-height: 1.75rem;\n}\n.font-bold {\n\tfont-weight: 700;\n}\n.font-semibold {\n\tfont-weight: 600;\n}\n.font-thin {\n\tfont-weight: 100;\n}\n.uppercase {\n\ttext-transform: uppercase;\n}\n.italic {\n\tfont-style: italic;\n}\n.leading-tight {\n\tline-height: 1.25;\n}\n.leading-none {\n\tline-height: 1;\n}\n.text-red-600 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(220, 38, 38, var(--tw-text-opacity));\n}\n.text-white {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.text-gray-600 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(75, 85, 99, var(--tw-text-opacity));\n}\n.text-gray-700 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n.text-black {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n.text-red-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(239, 68, 68, var(--tw-text-opacity));\n}\n.text-gray-800 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(31, 41, 55, var(--tw-text-opacity));\n}\n.text-gray-400 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(156, 163, 175, var(--tw-text-opacity));\n}\n.text-gray-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(107, 114, 128, var(--tw-text-opacity));\n}\n.underline {\n\ttext-decoration: underline;\n}\n.placeholder-gray-900::-moz-placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(17, 24, 39, var(--tw-placeholder-opacity));\n}\n.placeholder-gray-900:-ms-input-placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(17, 24, 39, var(--tw-placeholder-opacity));\n}\n.placeholder-gray-900::placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(17, 24, 39, var(--tw-placeholder-opacity));\n}\n.placeholder-gray-400::-moz-placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(156, 163, 175, var(--tw-placeholder-opacity));\n}\n.placeholder-gray-400:-ms-input-placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(156, 163, 175, var(--tw-placeholder-opacity));\n}\n.placeholder-gray-400::placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(156, 163, 175, var(--tw-placeholder-opacity));\n}\n.opacity-0 {\n\topacity: 0;\n}\n.opacity-100 {\n\topacity: 1;\n}\n.shadow-xl {\n\t--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-lg {\n\t--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-2xl {\n\t--tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow {\n\t--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline-none {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n.ring-1 {\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.ring-black {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgba(0, 0, 0, var(--tw-ring-opacity));\n}\n.ring-opacity-5 {\n\t--tw-ring-opacity: 0.05;\n}\n.transition-all {\n\ttransition-property: all;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n.transition-colors {\n\ttransition-property: background-color, border-color, color, fill, stroke;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n.transition-transform {\n\ttransition-property: transform;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n.transition {\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n.delay-500 {\n\ttransition-delay: 500ms;\n}\n.delay-1000 {\n\ttransition-delay: 1000ms;\n}\n.duration-700 {\n\ttransition-duration: 700ms;\n}\n.duration-300 {\n\ttransition-duration: 300ms;\n}\n.duration-500 {\n\ttransition-duration: 500ms;\n}\n.duration-1000 {\n\ttransition-duration: 1000ms;\n}\n.duration-100 {\n\ttransition-duration: 100ms;\n}\n.ease-in-out {\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ease-in {\n\ttransition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n:root {\n  --c-primary: #e83f43;\n  --c-accent: #3fe899;\n}\n\n.rp-image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  border: 5px solid black;\n}\n\n.rp-uneditable-lbl {\n  background-color: white !important;\n}\n\n.rp-shapes {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: crosshair;\n}\n\n.rp-selected-input {\n  position: absolute;\n}\n\n.rp-delete {\n  width: 20px;\n  height: 20px;\n  fill: white;\n}\n\n.rp-delete-section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.rp-default-input-section {\n  display: flex;\n  align-items: stretch;\n  background-color: white;\n  border: none;\n}\n\n.rp-default-input-section input {\n  padding: 20px;\n  color: white;\n  background: transparent;\n  border: 0;\n  outline: none;\n}\n\n.rp-default-input-section input::-moz-placeholder {\n  color: #94bfff;\n}\n\n.rp-default-input-section input:-ms-input-placeholder {\n  color: #94bfff;\n}\n\n.rp-default-input-section input::placeholder {\n  color: #94bfff;\n}\n\n.rp-default-input-section a {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 35px;\n  color: white;\n  font-size: 12px;\n  background-color: black;\n  cursor: pointer;\n  transition: background-color 0.5s, color 0.5s;\n}\n\n.rp-default-input-section a:hover,\n.rp-default-input-section a:active {\n  background-color: red;\n}\n\n.rp-default-select-section {\n  display: flex;\n  flex-direction: column;\n  background-color: black;\n  padding: 10px 10px;\n  z-index: 100 !important;\n}\n.rp-default-select-section p {\n  text-align: center;\n  font-size: 16px;\n  color: white;\n  margin: 0;\n}\n.rp-default-select-section div {\n  display: flex;\n  justify-content: center;\n}\n.rp-default-select-section div a {\n  font-size: 12px;\n  width: 40%;\n  text-align: center;\n  border: 1px solid white;\n  color: white;\n  margin: 5px 10px 5px 0px;\n  cursor: pointer;\n}\n\n.rp-default-input-section_select.yes:hover {\n  background-color: green;\n}\n\n.rp-default-input-section_select.no:hover {\n  background-color: red;\n}\n\n.annotation-container .annotation-step-text {\n  display: flex;\n}\n.annotation-container .annotation-step-text span {\n  border: 1px solid black;\n  padding: 0.5rem 0.8rem;\n  width: 100% !important;\n  background: white;\n  font-size: 1.8rem;\n}\n.annotation-container .annotation-step-text:after {\n  content: \" \";\n  z-index: 1;\n  position: relative;\n  background-color: black;\n  margin-top: 1.8rem;\n  width: 100% !important;\n  height: 1px;\n}\n.annotation-container p {\n  font-size: 1rem;\n}\n\n.rp-container {\n  --tw-border-opacity: 1;\n  border-color: rgba(0, 0, 0, var(--tw-border-opacity));\n  border-width: 1px;\n  display: flex;\n}\n@media screen and (max-width: 1260px) {\n  .rp-container {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n.rp-stage {\n  position: relative;\n  min-width: 960px;\n  min-height: 600px;\n  width: 960px !important;\n  height: 600px !important;\n}\n\n.rp-annotations {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-left: 1rem;\n}\n@media screen and (max-width: 1260px) {\n  .rp-annotations {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    margin-left: 0;\n  }\n  .rp-annotations .rp-annotations-list {\n    width: 50%;\n    --tw-border-opacity: 1;\n    border-color: rgba(0, 0, 0, var(--tw-border-opacity));\n    border-width: 1px;\n    min-height: 260px;\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n.rp-annotations ul {\n  list-style: none;\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  overflow-y: auto;\n}\n.rp-annotations ul li span {\n  cursor: pointer;\n}\n.rp-annotations ul li span:hover {\n  text-decoration: underline;\n}\n\n.rp-form {\n  display: flex;\n  flex-direction: column;\n}\n.rp-form fieldset {\n  border: none;\n}\n.rp-form button.annotationModalBtn {\n  border: 1px solid #232323;\n  align-content: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  color: white;\n  cursor: pointer;\n  outline: none;\n  vertical-align: middle;\n  text-decoration: none;\n  background: transparent;\n  margin: 0;\n  padding: 0.3rem 1rem;\n  position: relative;\n  width: 110px;\n  margin-right: 1rem;\n  background-color: #016401;\n}\n.rp-form button.annotationModalBtn:hover {\n  background-color: green;\n}\n.rp-form .radio-forms .grouped_radio {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n}\n.rp-form .radio-forms label.radio-control {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.rp-form .radio-forms label.radio-control p {\n  margin: 0;\n  margin-bottom: -1.6rem;\n  text-align: center;\n  font-size: 1.2rem;\n}\n.rp-form .radio-forms label.radio-control img {\n  display: block;\n  pointer-events: none;\n  width: 200px;\n  height: 200px;\n  opacity: 0.8;\n  margin-top: 0.4rem;\n  border: 5px solid black;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n  transition: opacity 500ms ease-out, border 500ms ease-out;\n}\n.rp-form .radio-forms label.radio-control img:hover {\n  opacity: 1;\n}\n.rp-form .radio-forms label.radio-control input[type=radio]:checked ~ img {\n  opacity: 1 !important;\n  border-color: #094 !important;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4) !important;\n}\n.rp-form .slider-forms {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n.rp-form .slider-forms .slider-div {\n  display: block;\n  margin: auto;\n}\n.rp-form .slider-forms .slider-div fieldset .rp-slider {\n  margin: 1rem 0% 1rem 0%;\n}\n.rp-form .slider-forms .slider-div fieldset .rp-slider datalist {\n  display: flex;\n  width: 708px;\n  justify-content: space-between;\n  height: 1rem;\n}\n.rp-form .slider-forms .slider-div fieldset .rp-slider input {\n  width: 700px;\n  height: 3px;\n  border-radius: 5px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n.rp-form .slider-forms .slider-description {\n  display: flex;\n  justify-content: space-between;\n  width: 940px;\n  margin-bottom: 3rem;\n}\n.rp-form .slider-forms .slider-description p {\n  max-width: 30vw;\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n.rp-form .slider-forms .range-slider-value {\n  display: block;\n  position: relative;\n  width: 300px;\n  color: white;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 3px;\n  background: black;\n  padding: 10px 10px;\n  font-size: 1.2rem;\n}\n\n.annotation-submit-btn {\n  background-color: var(--c-accent);\n  padding: 10px 20px;\n  border-radius: 5px;\n  font-size: 1.2rem;\n  transition: all 0.3s;\n  color: #02361e;\n  border-color: #0aa05a;\n}\n.annotation-submit-btn:hover {\n  color: white;\n  background-color: #0aa05a;\n}\n\n.gifContainer {\n  width: 80vw;\n  max-width: 60rem;\n}\n\n.hover\\:border-black:hover {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(0, 0, 0, var(--tw-border-opacity));\n}\n\n.hover\\:bg-gray-900:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(17, 24, 39, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-800:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-red-500:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-red-700:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(185, 28, 28, var(--tw-bg-opacity));\n}\n\n.hover\\:text-white:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.hover\\:underline:hover {\n\ttext-decoration: underline;\n}\n\n.hover\\:shadow-none:hover {\n\t--tw-shadow: 0 0 #0000;\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:shadow-sm:hover {\n\t--tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.focus\\:outline-none:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n\n.active\\:outline-none:active {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n\n.group:hover .group-hover\\:flex {\n\tdisplay: flex;\n}\n\n@media (min-width: 640px) {\n\n\t.sm\\:mx-0 {\n\t\tmargin-left: 0px;\n\t\tmargin-right: 0px;\n\t}\n\n\t.sm\\:w-8\\/12 {\n\t\twidth: 66.666667%;\n\t}\n}\n\n@media (min-width: 768px) {\n\n\t.md\\:-mx-4 {\n\t\tmargin-left: -1rem;\n\t\tmargin-right: -1rem;\n\t}\n\n\t.md\\:-ml-10 {\n\t\tmargin-left: -2.5rem;\n\t}\n\n\t.md\\:mr-0 {\n\t\tmargin-right: 0px;\n\t}\n\n\t.md\\:mr-12 {\n\t\tmargin-right: 3rem;\n\t}\n\n\t.md\\:ml-6 {\n\t\tmargin-left: 1.5rem;\n\t}\n\n\t.md\\:mr-5 {\n\t\tmargin-right: 1.25rem;\n\t}\n\n\t.md\\:-mt-12 {\n\t\tmargin-top: -3rem;\n\t}\n\n\t.md\\:flex {\n\t\tdisplay: flex;\n\t}\n\n\t.md\\:hidden {\n\t\tdisplay: none;\n\t}\n\n\t.md\\:w-6\\/12 {\n\t\twidth: 50%;\n\t}\n\n\t.md\\:w-2\\/5 {\n\t\twidth: 40%;\n\t}\n\n\t.md\\:max-w-2xl {\n\t\tmax-width: 42rem;\n\t}\n\n\t.md\\:flex-1 {\n\t\tflex: 1 1 0%;\n\t}\n\n\t.md\\:flex-row {\n\t\tflex-direction: row;\n\t}\n\n\t.md\\:flex-wrap {\n\t\tflex-wrap: wrap;\n\t}\n\n\t.md\\:items-center {\n\t\talign-items: center;\n\t}\n\n\t.md\\:p-5 {\n\t\tpadding: 1.25rem;\n\t}\n\n\t.md\\:px-0 {\n\t\tpadding-left: 0px;\n\t\tpadding-right: 0px;\n\t}\n\n\t.md\\:px-4 {\n\t\tpadding-left: 1rem;\n\t\tpadding-right: 1rem;\n\t}\n\n\t.md\\:px-5 {\n\t\tpadding-left: 1.25rem;\n\t\tpadding-right: 1.25rem;\n\t}\n\n\t.md\\:py-10 {\n\t\tpadding-top: 2.5rem;\n\t\tpadding-bottom: 2.5rem;\n\t}\n\n\t.md\\:pt-12 {\n\t\tpadding-top: 3rem;\n\t}\n\n\t.md\\:pb-6 {\n\t\tpadding-bottom: 1.5rem;\n\t}\n\n\t.md\\:text-left {\n\t\ttext-align: left;\n\t}\n\n\t.md\\:text-right {\n\t\ttext-align: right;\n\t}\n}\n\n@media (min-width: 1024px) {\n\n\t.lg\\:mx-20 {\n\t\tmargin-left: 5rem;\n\t\tmargin-right: 5rem;\n\t}\n\n\t.lg\\:mx-auto {\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n\n\t.lg\\:ml-16 {\n\t\tmargin-left: 4rem;\n\t}\n\n\t.lg\\:w-5\\/12 {\n\t\twidth: 41.666667%;\n\t}\n\n\t.lg\\:w-1\\/3 {\n\t\twidth: 33.333333%;\n\t}\n\n\t.lg\\:w-4\\/5 {\n\t\twidth: 80%;\n\t}\n\n\t.lg\\:max-w-7xl {\n\t\tmax-width: 80rem;\n\t}\n\n\t.lg\\:px-24 {\n\t\tpadding-left: 6rem;\n\t\tpadding-right: 6rem;\n\t}\n}\n\n@media (min-width: 1280px) {\n\n\t.xl\\:mr-5 {\n\t\tmargin-right: 1.25rem;\n\t}\n\n\t.xl\\:-mt-20 {\n\t\tmargin-top: -5rem;\n\t}\n\n\t.xl\\:ml-32 {\n\t\tmargin-left: 8rem;\n\t}\n\n\t.xl\\:w-4\\/12 {\n\t\twidth: 33.333333%;\n\t}\n\n\t.xl\\:w-5\\/12 {\n\t\twidth: 41.666667%;\n\t}\n\n\t.xl\\:w-1\\/3 {\n\t\twidth: 33.333333%;\n\t}\n\n\t.xl\\:w-3\\/4 {\n\t\twidth: 75%;\n\t}\n\n\t.xl\\:flex-row {\n\t\tflex-direction: row;\n\t}\n}\n\n@media (min-width: 1536px) {\n\n\t.\\32xl\\:ml-64 {\n\t\tmargin-left: 16rem;\n\t}\n}", "",{"version":3,"sources":["<no source>","webpack://src/pages/_app/%3Cinput%20css%208rzbim%3E","webpack://src/pages/_app/%3Cinput%20css%20MkXEnt%3E","webpack://src/pages/_app/globals.scss","webpack://globals.scss"],"names":[],"mappings":"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AHjrBA;CAAA,kBAAA;AGorBA;AHprBA;CAAA,mBAAA;AGurBA;AHvrBA;CAAA,qBAAA;AG0rBA;AH1rBA;CAAA,gBAAA;AG6rBA;AH7rBA;CAAA,kBAAA;AGgsBA;AHhsBA;CAAA,mBAAA;AGmsBA;AHnsBA;CAAA,gBAAA;AGssBA;AHtsBA;CAAA,oBAAA;AGysBA;AHzsBA;CAAA,oBAAA;AG4sBA;AH5sBA;CAAA,iBAAA;AG+sBA;AH/sBA;CAAA,kBAAA;AGktBA;AHltBA;CAAA,gBAAA;AGqtBA;AHrtBA;CAAA,qBAAA;AGwtBA;AHxtBA;CAAA,mBAAA;AG2tBA;AH3tBA;CAAA,kBAAA;AG8tBA;AH9tBA;CAAA,iBAAA;AGiuBA;AHjuBA;CAAA,gBAAA;AGouBA;AHpuBA;CAAA,oBAAA;AGuuBA;AHvuBA;CAAA,aAAA;AG0uBA;AH1uBA;CAAA,cAAA;AG6uBA;AH7uBA;CAAA,qBAAA;AGgvBA;AHhvBA;CAAA,aAAA;AGmvBA;AHnvBA;CAAA,eAAA;AGsvBA;AHtvBA;CAAA,aAAA;AGyvBA;AHzvBA;CAAA,WAAA;AG4vBA;AH5vBA;CAAA,aAAA;AG+vBA;AH/vBA;CAAA,eAAA;AGkwBA;AHlwBA;CAAA,eAAA;AGqwBA;AHrwBA;CAAA,YAAA;AGwwBA;AHxwBA;CAAA,aAAA;AG2wBA;AH3wBA;CAAA,eAAA;AG8wBA;AH9wBA;CAAA,iBAAA;AGixBA;AHjxBA;CAAA,WAAA;AGoxBA;AHpxBA;CAAA,iBAAA;AGuxBA;AHvxBA;CAAA,iBAAA;AG0xBA;AH1xBA;CAAA,UAAA;AG6xBA;AH7xBA;CAAA,YAAA;AGgyBA;AHhyBA;CAAA,YAAA;AGmyBA;AHnyBA;CAAA,WAAA;AGsyBA;AHtyBA;CAAA,cAAA;AGyyBA;AHzyBA;CAAA,WAAA;AG4yBA;AH5yBA;CAAA,cAAA;AG+yBA;AH/yBA;CAAA,YAAA;AGkzBA;AHlzBA;CAAA,YAAA;AGqzBA;AHrzBA;CAAA,YAAA;AGwzBA;AHxzBA;CAAA,cAAA;AG2zBA;AH3zBA;CAAA,gBAAA;AG8zBA;AH9zBA;CAAA,gBAAA;AGi0BA;AHj0BA;CAAA,gBAAA;AGo0BA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","sourcesContent":[null,"/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: theme('borderColor.DEFAULT', currentColor); /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: theme('colors.gray.400', #a1a1aa);\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n","/*! tailwindcss v2.1.4 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n* {\n\t--tw-shadow: 0 0 #0000;\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: rgba(59, 130, 246, 0.5);\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n}\n.container {\n\twidth: 100%;\n}\n@media (min-width: 640px) {\n\n\t.container {\n\t\tmax-width: 640px;\n\t}\n}\n@media (min-width: 768px) {\n\n\t.container {\n\t\tmax-width: 768px;\n\t}\n}\n@media (min-width: 1024px) {\n\n\t.container {\n\t\tmax-width: 1024px;\n\t}\n}\n@media (min-width: 1280px) {\n\n\t.container {\n\t\tmax-width: 1280px;\n\t}\n}\n@media (min-width: 1536px) {\n\n\t.container {\n\t\tmax-width: 1536px;\n\t}\n}\n.fixed {\n\tposition: fixed;\n}\n.relative {\n\tposition: relative;\n}\n.absolute {\n\tposition: absolute;\n}\n.static {\n\tposition: static;\n}\n.top-0 {\n\ttop: 0px;\n}\n.left-0 {\n\tleft: 0px;\n}\n.bottom-0 {\n\tbottom: 0px;\n}\n.z-0 {\n\tz-index: 0;\n}\n.z-10 {\n\tz-index: 10;\n}\n.z-20 {\n\tz-index: 20;\n}\n.mx-auto {\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.my-12 {\n\tmargin-top: 3rem;\n\tmargin-bottom: 3rem;\n}\n.my-1 {\n\tmargin-top: 0.25rem;\n\tmargin-bottom: 0.25rem;\n}\n.mx-16 {\n\tmargin-left: 4rem;\n\tmargin-right: 4rem;\n}\n.mx-5 {\n\tmargin-left: 1.25rem;\n\tmargin-right: 1.25rem;\n}\n.my-5 {\n\tmargin-top: 1.25rem;\n\tmargin-bottom: 1.25rem;\n}\n.my-4 {\n\tmargin-top: 1rem;\n\tmargin-bottom: 1rem;\n}\n.my-10 {\n\tmargin-top: 2.5rem;\n\tmargin-bottom: 2.5rem;\n}\n.mb-32 {\n\tmargin-bottom: 8rem;\n}\n.mb-4 {\n\tmargin-bottom: 1rem;\n}\n.mt-5 {\n\tmargin-top: 1.25rem;\n}\n.ml-2 {\n\tmargin-left: 0.5rem;\n}\n.mb-6 {\n\tmargin-bottom: 1.5rem;\n}\n.-mb-2 {\n\tmargin-bottom: -0.5rem;\n}\n.ml-auto {\n\tmargin-left: auto;\n}\n.mb-2 {\n\tmargin-bottom: 0.5rem;\n}\n.mb-5 {\n\tmargin-bottom: 1.25rem;\n}\n.mr-2 {\n\tmargin-right: 0.5rem;\n}\n.mt-1 {\n\tmargin-top: 0.25rem;\n}\n.-mt-64 {\n\tmargin-top: -16rem;\n}\n.mt-10 {\n\tmargin-top: 2.5rem;\n}\n.mb-12 {\n\tmargin-bottom: 3rem;\n}\n.mr-5 {\n\tmargin-right: 1.25rem;\n}\n.mt-4 {\n\tmargin-top: 1rem;\n}\n.mt-2 {\n\tmargin-top: 0.5rem;\n}\n.mb-8 {\n\tmargin-bottom: 2rem;\n}\n.mt-12 {\n\tmargin-top: 3rem;\n}\n.mb-64 {\n\tmargin-bottom: 16rem;\n}\n.-mt-1 {\n\tmargin-top: -0.25rem;\n}\n.ml-8 {\n\tmargin-left: 2rem;\n}\n.-ml-12 {\n\tmargin-left: -3rem;\n}\n.mt-16 {\n\tmargin-top: 4rem;\n}\n.mr-1 {\n\tmargin-right: 0.25rem;\n}\n.-mt-2 {\n\tmargin-top: -0.5rem;\n}\n.mr-8 {\n\tmargin-right: 2rem;\n}\n.-mt-16 {\n\tmargin-top: -4rem;\n}\n.ml-0 {\n\tmargin-left: 0px;\n}\n.ml-5 {\n\tmargin-left: 1.25rem;\n}\n.flex {\n\tdisplay: flex;\n}\n.block {\n\tdisplay: block;\n}\n.inline-block {\n\tdisplay: inline-block;\n}\n.grid {\n\tdisplay: grid;\n}\n.inline {\n\tdisplay: inline;\n}\n.hidden {\n\tdisplay: none;\n}\n.h-0 {\n\theight: 0px;\n}\n.h-screen {\n\theight: 100vh;\n}\n.h-5 {\n\theight: 1.25rem;\n}\n.h-3 {\n\theight: 0.75rem;\n}\n.h-12 {\n\theight: 3rem;\n}\n.h-96 {\n\theight: 24rem;\n}\n.h-7 {\n\theight: 1.75rem;\n}\n.w-10\\/12 {\n\twidth: 83.333333%;\n}\n.w-full {\n\twidth: 100%;\n}\n.w-2\\/3 {\n\twidth: 66.666667%;\n}\n.w-1\\/3 {\n\twidth: 33.333333%;\n}\n.w-0 {\n\twidth: 0px;\n}\n.w-screen {\n\twidth: 100vw;\n}\n.w-64 {\n\twidth: 16rem;\n}\n.w-32 {\n\twidth: 8rem;\n}\n.w-5 {\n\twidth: 1.25rem;\n}\n.w-28 {\n\twidth: 7rem;\n}\n.w-3 {\n\twidth: 0.75rem;\n}\n.w-72 {\n\twidth: 18rem;\n}\n.w-96 {\n\twidth: 24rem;\n}\n.w-80 {\n\twidth: 20rem;\n}\n.w-7 {\n\twidth: 1.75rem;\n}\n.max-w-5xl {\n\tmax-width: 64rem;\n}\n.max-w-md {\n\tmax-width: 28rem;\n}\n.max-w-4xl {\n\tmax-width: 56rem;\n}\n.flex-grow {\n\tflex-grow: 1;\n}\n.transform {\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\ttransform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-45 {\n\t--tw-rotate: 45deg;\n}\n.rotate-180 {\n\t--tw-rotate: 180deg;\n}\n.cursor-pointer {\n\tcursor: pointer;\n}\n.cursor-default {\n\tcursor: default;\n}\n.select-none {\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n}\n.appearance-none {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n}\n.flex-col {\n\tflex-direction: column;\n}\n.flex-row {\n\tflex-direction: row;\n}\n.flex-col-reverse {\n\tflex-direction: column-reverse;\n}\n.flex-wrap {\n\tflex-wrap: wrap;\n}\n.content-center {\n\talign-content: center;\n}\n.items-center {\n\talign-items: center;\n}\n.justify-center {\n\tjustify-content: center;\n}\n.justify-end {\n\tjustify-content: flex-end;\n}\n.justify-between {\n\tjustify-content: space-between;\n}\n.justify-around {\n\tjustify-content: space-around;\n}\n.self-center {\n\talign-self: center;\n}\n.rounded {\n\tborder-radius: 0.25rem;\n}\n.rounded-md {\n\tborder-radius: 0.375rem;\n}\n.rounded-full {\n\tborder-radius: 9999px;\n}\n.border {\n\tborder-width: 1px;\n}\n.border-0 {\n\tborder-width: 0px;\n}\n.border-4 {\n\tborder-width: 4px;\n}\n.border-t {\n\tborder-top-width: 1px;\n}\n.border-b {\n\tborder-bottom-width: 1px;\n}\n.border-l-2 {\n\tborder-left-width: 2px;\n}\n.border-solid {\n\tborder-style: solid;\n}\n.border-black {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(0, 0, 0, var(--tw-border-opacity));\n}\n.border-gray-900 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(17, 24, 39, var(--tw-border-opacity));\n}\n.border-red-500 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(239, 68, 68, var(--tw-border-opacity));\n}\n.border-red-600 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(220, 38, 38, var(--tw-border-opacity));\n}\n.border-transparent {\n\tborder-color: transparent;\n}\n.bg-white {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-gray-200 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n.bg-gray-800 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n.bg-red-600 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(220, 38, 38, var(--tw-bg-opacity));\n}\n.bg-red-500 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n}\n.bg-transparent {\n\tbackground-color: transparent;\n}\n.bg-black {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(0, 0, 0, var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.fill-current {\n\tfill: currentColor;\n}\n.p-4 {\n\tpadding: 1rem;\n}\n.p-2 {\n\tpadding: 0.5rem;\n}\n.p-5 {\n\tpadding: 1.25rem;\n}\n.px-5 {\n\tpadding-left: 1.25rem;\n\tpadding-right: 1.25rem;\n}\n.py-2 {\n\tpadding-top: 0.5rem;\n\tpadding-bottom: 0.5rem;\n}\n.px-0 {\n\tpadding-left: 0px;\n\tpadding-right: 0px;\n}\n.py-12 {\n\tpadding-top: 3rem;\n\tpadding-bottom: 3rem;\n}\n.px-4 {\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\n.py-5 {\n\tpadding-top: 1.25rem;\n\tpadding-bottom: 1.25rem;\n}\n.py-4 {\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n.px-12 {\n\tpadding-left: 3rem;\n\tpadding-right: 3rem;\n}\n.py-10 {\n\tpadding-top: 2.5rem;\n\tpadding-bottom: 2.5rem;\n}\n.py-20 {\n\tpadding-top: 5rem;\n\tpadding-bottom: 5rem;\n}\n.px-1 {\n\tpadding-left: 0.25rem;\n\tpadding-right: 0.25rem;\n}\n.py-3 {\n\tpadding-top: 0.75rem;\n\tpadding-bottom: 0.75rem;\n}\n.px-2 {\n\tpadding-left: 0.5rem;\n\tpadding-right: 0.5rem;\n}\n.py-1 {\n\tpadding-top: 0.25rem;\n\tpadding-bottom: 0.25rem;\n}\n.pb-4 {\n\tpadding-bottom: 1rem;\n}\n.pb-12 {\n\tpadding-bottom: 3rem;\n}\n.pr-20 {\n\tpadding-right: 5rem;\n}\n.pt-6 {\n\tpadding-top: 1.5rem;\n}\n.pl-10 {\n\tpadding-left: 2.5rem;\n}\n.pt-0 {\n\tpadding-top: 0px;\n}\n.pt-12 {\n\tpadding-top: 3rem;\n}\n.pt-4 {\n\tpadding-top: 1rem;\n}\n.pb-24 {\n\tpadding-bottom: 6rem;\n}\n.pt-8 {\n\tpadding-top: 2rem;\n}\n.pt-5 {\n\tpadding-top: 1.25rem;\n}\n.pl-8 {\n\tpadding-left: 2rem;\n}\n.pr-8 {\n\tpadding-right: 2rem;\n}\n.pl-4 {\n\tpadding-left: 1rem;\n}\n.text-center {\n\ttext-align: center;\n}\n.text-left {\n\ttext-align: left;\n}\n.align-middle {\n\tvertical-align: middle;\n}\n.align-bottom {\n\tvertical-align: bottom;\n}\n.text-sm {\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\n.text-xs {\n\tfont-size: 0.75rem;\n\tline-height: 1rem;\n}\n.text-xl {\n\tfont-size: 1.25rem;\n\tline-height: 1.75rem;\n}\n.text-5xl {\n\tfont-size: 3rem;\n\tline-height: 1;\n}\n.text-2xl {\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n}\n.text-lg {\n\tfont-size: 1.125rem;\n\tline-height: 1.75rem;\n}\n.font-bold {\n\tfont-weight: 700;\n}\n.font-semibold {\n\tfont-weight: 600;\n}\n.font-thin {\n\tfont-weight: 100;\n}\n.uppercase {\n\ttext-transform: uppercase;\n}\n.italic {\n\tfont-style: italic;\n}\n.leading-tight {\n\tline-height: 1.25;\n}\n.leading-none {\n\tline-height: 1;\n}\n.text-red-600 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(220, 38, 38, var(--tw-text-opacity));\n}\n.text-white {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.text-gray-600 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(75, 85, 99, var(--tw-text-opacity));\n}\n.text-gray-700 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n.text-black {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n.text-red-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(239, 68, 68, var(--tw-text-opacity));\n}\n.text-gray-800 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(31, 41, 55, var(--tw-text-opacity));\n}\n.text-gray-400 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(156, 163, 175, var(--tw-text-opacity));\n}\n.text-gray-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(107, 114, 128, var(--tw-text-opacity));\n}\n.underline {\n\ttext-decoration: underline;\n}\n.placeholder-gray-900::-moz-placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(17, 24, 39, var(--tw-placeholder-opacity));\n}\n.placeholder-gray-900:-ms-input-placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(17, 24, 39, var(--tw-placeholder-opacity));\n}\n.placeholder-gray-900::placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(17, 24, 39, var(--tw-placeholder-opacity));\n}\n.placeholder-gray-400::-moz-placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(156, 163, 175, var(--tw-placeholder-opacity));\n}\n.placeholder-gray-400:-ms-input-placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(156, 163, 175, var(--tw-placeholder-opacity));\n}\n.placeholder-gray-400::placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(156, 163, 175, var(--tw-placeholder-opacity));\n}\n.opacity-0 {\n\topacity: 0;\n}\n.opacity-100 {\n\topacity: 1;\n}\n.shadow-xl {\n\t--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-lg {\n\t--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-2xl {\n\t--tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow {\n\t--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline-none {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n.ring-1 {\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.ring-black {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgba(0, 0, 0, var(--tw-ring-opacity));\n}\n.ring-opacity-5 {\n\t--tw-ring-opacity: 0.05;\n}\n.transition-all {\n\ttransition-property: all;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n.transition-colors {\n\ttransition-property: background-color, border-color, color, fill, stroke;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n.transition-transform {\n\ttransition-property: transform;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n.transition {\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n.delay-500 {\n\ttransition-delay: 500ms;\n}\n.delay-1000 {\n\ttransition-delay: 1000ms;\n}\n.duration-700 {\n\ttransition-duration: 700ms;\n}\n.duration-300 {\n\ttransition-duration: 300ms;\n}\n.duration-500 {\n\ttransition-duration: 500ms;\n}\n.duration-1000 {\n\ttransition-duration: 1000ms;\n}\n.duration-100 {\n\ttransition-duration: 100ms;\n}\n.ease-in-out {\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ease-in {\n\ttransition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n:root {\n  --c-primary: #e83f43;\n  --c-accent: #3fe899;\n}\n\n.rp-image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  border: 5px solid black;\n}\n\n.rp-uneditable-lbl {\n  background-color: white !important;\n}\n\n.rp-shapes {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: crosshair;\n}\n\n.rp-selected-input {\n  position: absolute;\n}\n\n.rp-delete {\n  width: 20px;\n  height: 20px;\n  fill: white;\n}\n\n.rp-delete-section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.rp-default-input-section {\n  display: flex;\n  align-items: stretch;\n  background-color: white;\n  border: none;\n}\n\n.rp-default-input-section input {\n  padding: 20px;\n  color: white;\n  background: transparent;\n  border: 0;\n  outline: none;\n}\n\n.rp-default-input-section input::-moz-placeholder {\n  color: #94bfff;\n}\n\n.rp-default-input-section input:-ms-input-placeholder {\n  color: #94bfff;\n}\n\n.rp-default-input-section input::placeholder {\n  color: #94bfff;\n}\n\n.rp-default-input-section a {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 35px;\n  color: white;\n  font-size: 12px;\n  background-color: black;\n  cursor: pointer;\n  transition: background-color 0.5s, color 0.5s;\n}\n\n.rp-default-input-section a:hover,\n.rp-default-input-section a:active {\n  background-color: red;\n}\n\n.rp-default-select-section {\n  display: flex;\n  flex-direction: column;\n  background-color: black;\n  padding: 10px 10px;\n  z-index: 100 !important;\n}\n.rp-default-select-section p {\n  text-align: center;\n  font-size: 16px;\n  color: white;\n  margin: 0;\n}\n.rp-default-select-section div {\n  display: flex;\n  justify-content: center;\n}\n.rp-default-select-section div a {\n  font-size: 12px;\n  width: 40%;\n  text-align: center;\n  border: 1px solid white;\n  color: white;\n  margin: 5px 10px 5px 0px;\n  cursor: pointer;\n}\n\n.rp-default-input-section_select.yes:hover {\n  background-color: green;\n}\n\n.rp-default-input-section_select.no:hover {\n  background-color: red;\n}\n\n.annotation-container .annotation-step-text {\n  display: flex;\n}\n.annotation-container .annotation-step-text span {\n  border: 1px solid black;\n  padding: 0.5rem 0.8rem;\n  width: 100% !important;\n  background: white;\n  font-size: 1.8rem;\n}\n.annotation-container .annotation-step-text:after {\n  content: \" \";\n  z-index: 1;\n  position: relative;\n  background-color: black;\n  margin-top: 1.8rem;\n  width: 100% !important;\n  height: 1px;\n}\n.annotation-container p {\n  font-size: 1rem;\n}\n\n.rp-container {\n  --tw-border-opacity: 1;\n  border-color: rgba(0, 0, 0, var(--tw-border-opacity));\n  border-width: 1px;\n  display: flex;\n}\n@media screen and (max-width: 1260px) {\n  .rp-container {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n.rp-stage {\n  position: relative;\n  min-width: 960px;\n  min-height: 600px;\n  width: 960px !important;\n  height: 600px !important;\n}\n\n.rp-annotations {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-left: 1rem;\n}\n@media screen and (max-width: 1260px) {\n  .rp-annotations {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    margin-left: 0;\n  }\n  .rp-annotations .rp-annotations-list {\n    width: 50%;\n    --tw-border-opacity: 1;\n    border-color: rgba(0, 0, 0, var(--tw-border-opacity));\n    border-width: 1px;\n    min-height: 260px;\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n.rp-annotations ul {\n  list-style: none;\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  overflow-y: auto;\n}\n.rp-annotations ul li span {\n  cursor: pointer;\n}\n.rp-annotations ul li span:hover {\n  text-decoration: underline;\n}\n\n.rp-form {\n  display: flex;\n  flex-direction: column;\n}\n.rp-form fieldset {\n  border: none;\n}\n.rp-form button.annotationModalBtn {\n  border: 1px solid #232323;\n  align-content: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  color: white;\n  cursor: pointer;\n  outline: none;\n  vertical-align: middle;\n  text-decoration: none;\n  background: transparent;\n  margin: 0;\n  padding: 0.3rem 1rem;\n  position: relative;\n  width: 110px;\n  margin-right: 1rem;\n  background-color: #016401;\n}\n.rp-form button.annotationModalBtn:hover {\n  background-color: green;\n}\n.rp-form .radio-forms .grouped_radio {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n}\n.rp-form .radio-forms label.radio-control {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.rp-form .radio-forms label.radio-control p {\n  margin: 0;\n  margin-bottom: -1.6rem;\n  text-align: center;\n  font-size: 1.2rem;\n}\n.rp-form .radio-forms label.radio-control img {\n  display: block;\n  pointer-events: none;\n  width: 200px;\n  height: 200px;\n  opacity: 0.8;\n  margin-top: 0.4rem;\n  border: 5px solid black;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n  transition: opacity 500ms ease-out, border 500ms ease-out;\n}\n.rp-form .radio-forms label.radio-control img:hover {\n  opacity: 1;\n}\n.rp-form .radio-forms label.radio-control input[type=radio]:checked ~ img {\n  opacity: 1 !important;\n  border-color: #094 !important;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4) !important;\n}\n.rp-form .slider-forms {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n.rp-form .slider-forms .slider-div {\n  display: block;\n  margin: auto;\n}\n.rp-form .slider-forms .slider-div fieldset .rp-slider {\n  margin: 1rem 0% 1rem 0%;\n}\n.rp-form .slider-forms .slider-div fieldset .rp-slider datalist {\n  display: flex;\n  width: 708px;\n  justify-content: space-between;\n  height: 1rem;\n}\n.rp-form .slider-forms .slider-div fieldset .rp-slider input {\n  width: 700px;\n  height: 3px;\n  border-radius: 5px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n.rp-form .slider-forms .slider-description {\n  display: flex;\n  justify-content: space-between;\n  width: 940px;\n  margin-bottom: 3rem;\n}\n.rp-form .slider-forms .slider-description p {\n  max-width: 30vw;\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n.rp-form .slider-forms .range-slider-value {\n  display: block;\n  position: relative;\n  width: 300px;\n  color: white;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 3px;\n  background: black;\n  padding: 10px 10px;\n  font-size: 1.2rem;\n}\n\n.annotation-submit-btn {\n  background-color: var(--c-accent);\n  padding: 10px 20px;\n  border-radius: 5px;\n  font-size: 1.2rem;\n  transition: all 0.3s;\n  color: #02361e;\n  border-color: #0aa05a;\n}\n.annotation-submit-btn:hover {\n  color: white;\n  background-color: #0aa05a;\n}\n\n.gifContainer {\n  width: 80vw;\n  max-width: 60rem;\n}\n\n.hover\\:border-black:hover {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(0, 0, 0, var(--tw-border-opacity));\n}\n\n.hover\\:bg-gray-900:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(17, 24, 39, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-800:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-red-500:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-red-700:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(185, 28, 28, var(--tw-bg-opacity));\n}\n\n.hover\\:text-white:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.hover\\:underline:hover {\n\ttext-decoration: underline;\n}\n\n.hover\\:shadow-none:hover {\n\t--tw-shadow: 0 0 #0000;\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:shadow-sm:hover {\n\t--tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.focus\\:outline-none:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n\n.active\\:outline-none:active {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n\n.group:hover .group-hover\\:flex {\n\tdisplay: flex;\n}\n\n@media (min-width: 640px) {\n\n\t.sm\\:mx-0 {\n\t\tmargin-left: 0px;\n\t\tmargin-right: 0px;\n\t}\n\n\t.sm\\:w-8\\/12 {\n\t\twidth: 66.666667%;\n\t}\n}\n\n@media (min-width: 768px) {\n\n\t.md\\:-mx-4 {\n\t\tmargin-left: -1rem;\n\t\tmargin-right: -1rem;\n\t}\n\n\t.md\\:-ml-10 {\n\t\tmargin-left: -2.5rem;\n\t}\n\n\t.md\\:mr-0 {\n\t\tmargin-right: 0px;\n\t}\n\n\t.md\\:mr-12 {\n\t\tmargin-right: 3rem;\n\t}\n\n\t.md\\:ml-6 {\n\t\tmargin-left: 1.5rem;\n\t}\n\n\t.md\\:mr-5 {\n\t\tmargin-right: 1.25rem;\n\t}\n\n\t.md\\:-mt-12 {\n\t\tmargin-top: -3rem;\n\t}\n\n\t.md\\:flex {\n\t\tdisplay: flex;\n\t}\n\n\t.md\\:hidden {\n\t\tdisplay: none;\n\t}\n\n\t.md\\:w-6\\/12 {\n\t\twidth: 50%;\n\t}\n\n\t.md\\:w-2\\/5 {\n\t\twidth: 40%;\n\t}\n\n\t.md\\:max-w-2xl {\n\t\tmax-width: 42rem;\n\t}\n\n\t.md\\:flex-1 {\n\t\tflex: 1 1 0%;\n\t}\n\n\t.md\\:flex-row {\n\t\tflex-direction: row;\n\t}\n\n\t.md\\:flex-wrap {\n\t\tflex-wrap: wrap;\n\t}\n\n\t.md\\:items-center {\n\t\talign-items: center;\n\t}\n\n\t.md\\:p-5 {\n\t\tpadding: 1.25rem;\n\t}\n\n\t.md\\:px-0 {\n\t\tpadding-left: 0px;\n\t\tpadding-right: 0px;\n\t}\n\n\t.md\\:px-4 {\n\t\tpadding-left: 1rem;\n\t\tpadding-right: 1rem;\n\t}\n\n\t.md\\:px-5 {\n\t\tpadding-left: 1.25rem;\n\t\tpadding-right: 1.25rem;\n\t}\n\n\t.md\\:py-10 {\n\t\tpadding-top: 2.5rem;\n\t\tpadding-bottom: 2.5rem;\n\t}\n\n\t.md\\:pt-12 {\n\t\tpadding-top: 3rem;\n\t}\n\n\t.md\\:pb-6 {\n\t\tpadding-bottom: 1.5rem;\n\t}\n\n\t.md\\:text-left {\n\t\ttext-align: left;\n\t}\n\n\t.md\\:text-right {\n\t\ttext-align: right;\n\t}\n}\n\n@media (min-width: 1024px) {\n\n\t.lg\\:mx-20 {\n\t\tmargin-left: 5rem;\n\t\tmargin-right: 5rem;\n\t}\n\n\t.lg\\:mx-auto {\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n\n\t.lg\\:ml-16 {\n\t\tmargin-left: 4rem;\n\t}\n\n\t.lg\\:w-5\\/12 {\n\t\twidth: 41.666667%;\n\t}\n\n\t.lg\\:w-1\\/3 {\n\t\twidth: 33.333333%;\n\t}\n\n\t.lg\\:w-4\\/5 {\n\t\twidth: 80%;\n\t}\n\n\t.lg\\:max-w-7xl {\n\t\tmax-width: 80rem;\n\t}\n\n\t.lg\\:px-24 {\n\t\tpadding-left: 6rem;\n\t\tpadding-right: 6rem;\n\t}\n}\n\n@media (min-width: 1280px) {\n\n\t.xl\\:mr-5 {\n\t\tmargin-right: 1.25rem;\n\t}\n\n\t.xl\\:-mt-20 {\n\t\tmargin-top: -5rem;\n\t}\n\n\t.xl\\:ml-32 {\n\t\tmargin-left: 8rem;\n\t}\n\n\t.xl\\:w-4\\/12 {\n\t\twidth: 33.333333%;\n\t}\n\n\t.xl\\:w-5\\/12 {\n\t\twidth: 41.666667%;\n\t}\n\n\t.xl\\:w-1\\/3 {\n\t\twidth: 33.333333%;\n\t}\n\n\t.xl\\:w-3\\/4 {\n\t\twidth: 75%;\n\t}\n\n\t.xl\\:flex-row {\n\t\tflex-direction: row;\n\t}\n}\n\n@media (min-width: 1536px) {\n\n\t.\\32xl\\:ml-64 {\n\t\tmargin-left: 16rem;\n\t}\n}","@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n\r\n// $white: #fff;\r\n// $black: #232323;\r\n// $black-2: #2b2b2b;\r\n// $gray: #8d8d8d;\r\n// $red: #e83f43;\r\n// $accent: #3fe899;\r\n\r\n:root {\r\n  --c-primary: #e83f43;\r\n  --c-accent: #3fe899;\r\n}\r\n\r\n//Annotation Tool\r\n\r\n// Package\r\n.rp-image {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n  border: 5px solid black;\r\n}\r\n\r\n.rp-uneditable-lbl {\r\n  background-color: white !important;\r\n}\r\n\r\n.rp-shapes {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  cursor: crosshair;\r\n}\r\n\r\n.rp-selected-input {\r\n  position: absolute;\r\n}\r\n\r\n.rp-delete {\r\n  width: 20px;\r\n  height: 20px;\r\n  fill: white;\r\n}\r\n\r\n.rp-delete-section {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.rp-default-input-section {\r\n  display: flex;\r\n  align-items: stretch;\r\n  background-color: white;\r\n  border: none;\r\n  // border-radius: 5px;\r\n}\r\n\r\n.rp-default-input-section input {\r\n  padding: 20px;\r\n  color: white;\r\n  background: transparent;\r\n  border: 0;\r\n  outline: none;\r\n}\r\n\r\n.rp-default-input-section input::placeholder {\r\n  color: #94bfff;\r\n}\r\n\r\n.rp-default-input-section a {\r\n  padding: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 35px;\r\n  color: white;\r\n  font-size: 12px;\r\n  background-color: black;\r\n  // border-radius: 0 5px 5px 0;\r\n  cursor: pointer;\r\n  transition: background-color 0.5s, color 0.5s;\r\n}\r\n\r\n.rp-default-input-section a:hover,\r\n.rp-default-input-section a:active {\r\n  background-color: red;\r\n}\r\n\r\n.rp-default-select-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: black;\r\n  padding: 10px 10px;\r\n  z-index: 100 !important;\r\n  p {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    color: white;\r\n    margin: 0;\r\n  }\r\n  div {\r\n    display: flex;\r\n    justify-content: center;\r\n    a {\r\n      font-size: 12px;\r\n      width: 40%;\r\n      text-align: center;\r\n      border: 1px solid white;\r\n      color: white;\r\n      margin: 5px 10px 5px 0px;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n}\r\n\r\n.rp-default-input-section_select.yes:hover {\r\n  background-color: green;\r\n}\r\n.rp-default-input-section_select.no:hover {\r\n  background-color: red;\r\n}\r\n\r\n// .rp-default-input-section_select.yes-active {\r\n//   // background-color: green;\r\n// }\r\n\r\n// .rp-default-input-section_select.no-active {\r\n//   // background-color: red;\r\n// }\r\n\r\n//Custom\r\n.annotation-container {\r\n  .annotation-step-text {\r\n    display: flex;\r\n    span {\r\n      border: 1px solid black;\r\n      padding: 0.5rem 0.8rem;\r\n      width: 100% !important;\r\n      background: white;\r\n      // z-index: 2;\r\n      font-size: 1.8rem;\r\n    }\r\n    &:after {\r\n      content: \" \";\r\n      z-index: 1;\r\n      position: relative;\r\n      background-color: black;\r\n      margin-top: 1.8rem;\r\n      // background-color: red;\r\n      width: 100% !important;\r\n      height: 1px;\r\n      // border: 1px solid black;\r\n    }\r\n  }\r\n\r\n  p {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n.rp-container {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgba(0, 0, 0, var(--tw-border-opacity));\r\n  border-width: 1px;\r\n  display: flex;\r\n  @media screen and (max-width: 1260px) {\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}\r\n.rp-stage {\r\n  position: relative;\r\n  min-width: 960px;\r\n  min-height: 600px;\r\n  width: 960px !important;\r\n  height: 600px !important;\r\n}\r\n\r\n.rp-annotations {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin-left: 1rem;\r\n  // margin-top: -30px;\r\n  @media screen and (max-width: 1260px) {\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    margin-left: 0;\r\n    .rp-annotations-list {\r\n      width: 50%;\r\n      --tw-border-opacity: 1;\r\n      border-color: rgba(0, 0, 0, var(--tw-border-opacity));\r\n      border-width: 1px;\r\n      min-height: 260px;\r\n      padding-left: 10px;\r\n      padding-right: 10px;\r\n    }\r\n  }\r\n\r\n  ul {\r\n    list-style: none;\r\n    height: 150px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    overflow-y: auto;\r\n    li {\r\n      span {\r\n        cursor: pointer;\r\n        &:hover {\r\n          text-decoration: underline;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.rp-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  fieldset {\r\n    border: none;\r\n  }\r\n  button.annotationModalBtn {\r\n    border: 1px solid #232323;\r\n    align-content: center;\r\n    justify-content: center;\r\n    font-size: 1.1rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    outline: none;\r\n    vertical-align: middle;\r\n    text-decoration: none;\r\n    background: transparent;\r\n    margin: 0;\r\n    padding: 0.3rem 1rem;\r\n    position: relative;\r\n    width: 110px;\r\n    margin-right: 1rem;\r\n    background-color: rgb(1, 100, 1);\r\n    &:hover {\r\n      background-color: green;\r\n    }\r\n  }\r\n\r\n  .radio-forms {\r\n    .grouped_radio {\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: space-around;\r\n      width: 100%;\r\n    }\r\n    label.radio-control {\r\n      user-select: none;\r\n      cursor: pointer;\r\n      // margin: 1% 0% 1% 0%;\r\n      p {\r\n        margin: 0;\r\n        margin-bottom: -1.6rem;\r\n        text-align: center;\r\n        font-size: 1.2rem;\r\n      }\r\n      img {\r\n        display: block;\r\n        pointer-events: none;\r\n        width: 200px;\r\n        height: 200px;\r\n        opacity: 0.8;\r\n        margin-top: 0.4rem;\r\n        // margin: auto;\r\n        // border-radius: 50%;\r\n        border: 5px solid black;\r\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\r\n        transition: opacity 500ms ease-out, border 500ms ease-out;\r\n        &:hover {\r\n          opacity: 1;\r\n        }\r\n      }\r\n      // input[type=\"radio\"] {\r\n      //   // display: inline-block;\r\n      //   // position: absolute;\r\n      //   // overflow: hidden;\r\n      //   // width: 1px;\r\n      //   // height: 1px;\r\n      //   // left: -1000px;\r\n      //   // top: -1000px;\r\n      // }\r\n      input[type=\"radio\"]:checked ~ img {\r\n        opacity: 1 !important;\r\n        border-color: #094 !important;\r\n        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4) !important;\r\n      }\r\n    }\r\n  }\r\n  .slider-forms {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: auto;\r\n    .slider-div {\r\n      display: block;\r\n      margin: auto;\r\n      fieldset {\r\n        .rp-slider {\r\n          margin: 1rem 0% 1rem 0%;\r\n          datalist {\r\n            display: flex;\r\n            width: 708px;\r\n            justify-content: space-between;\r\n            height: 1rem;\r\n            // background-color: red;\r\n          }\r\n          input {\r\n            width: 700px;\r\n            // -webkit-appearance: none;\r\n            height: 3px;\r\n            border-radius: 5px;\r\n            outline: none;\r\n            padding: 0;\r\n            margin: 0;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .slider-description {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      width: 940px;\r\n      margin-bottom: 3rem;\r\n      p {\r\n        max-width: 30vw;\r\n        font-size: 1.3rem;\r\n        font-weight: bold;\r\n      }\r\n    }\r\n\r\n    .range-slider-value {\r\n      display: block;\r\n      position: relative;\r\n      width: 300px;\r\n      color: white;\r\n      line-height: 20px;\r\n      text-align: center;\r\n      border-radius: 3px;\r\n      background: black;\r\n      padding: 10px 10px;\r\n      font-size: 1.2rem;\r\n\r\n      // &:after {\r\n      //   position: absolute;\r\n      //   top: 8px;\r\n      //   left: -7px;\r\n      //   width: 0;\r\n      //   height: 0;\r\n      //   border-top: 7px solid transparent;\r\n      //   border-right: 7px solid variables.$black;\r\n      //   border-bottom: 7px solid transparent;\r\n      //   content: \"\";\r\n      // }\r\n    }\r\n  }\r\n  // margin: 0% 0% 0% 10%;\r\n  // button {\r\n  //   margin: 20% 0% 1% 80%;\r\n  // }\r\n}\r\n\r\n.annotation-submit-btn {\r\n  background-color: var(--c-accent);\r\n  padding: 10px 20px;\r\n  border-radius: 5px;\r\n  font-size: 1.2rem;\r\n  transition: all 0.3s;\r\n  color: #02361e;\r\n  border-color: #0aa05a;\r\n  &:hover {\r\n    color: white;\r\n    background-color: #0aa05a;\r\n  }\r\n}\r\n\r\n.gifContainer{\r\n  width: 80vw;\r\n  max-width: 60rem;\r\n}\r\n// .overflowList {\r\n// }\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app%2Findex.jsx!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAvaW5kZXguanN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL2Rpc3QvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL2Rpc3QvbGliL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9kaXN0L2xpYi9wYXJzZS11cmwuanMiLCJ3ZWJwYWNrOi8vX05fRS8/MjVhMyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAvZ2xvYmFscy5zY3NzPzg5YjUiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC9nbG9iYWxzLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUNYckU7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUIsUTs7Ozs7Ozs7OztBQ0xyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUNyQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5QixROzs7Ozs7Ozs7O0FDaEJyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUIsUTs7Ozs7Ozs7OztBQ1ByRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTJCLCtCQUErQjtBQUMxRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUMvQnJFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUNMckUscUJBQXFCLG1CQUFPLENBQUMsb0ZBQXFCOztBQUVsRCwyQkFBMkIsbUJBQU8sQ0FBQyxnR0FBMkI7O0FBRTlELGlDQUFpQyxtQkFBTyxDQUFDLDRHQUFpQzs7QUFFMUUsc0JBQXNCLG1CQUFPLENBQUMsc0ZBQXNCOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5QixROzs7Ozs7Ozs7O0FDYnJFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxzQkFBeUIsbUJBQW1CLHlCQUF5QjtBQUN6RSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLElBQUksc0JBQXlCLG1CQUFtQix5QkFBeUI7QUFDekU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUNyQnJFLHVCQUF1QixtQkFBTyxDQUFDLHdGQUF1Qjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUNackUsZ0hBQStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQS9DO0FBQ0E7QUFFZSxTQUFTQSxHQUFULE9BQXVDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUNwRCxzQkFDRSw4REFBQyxzREFBRDtBQUFVLFdBQU8sRUFBRUEsU0FBUyxDQUFDQyxPQUE3QjtBQUFBLDJCQUNJLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO0tBTnVCRixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIWDs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7O0FBRW5GLGNBQWMsbUJBQU8sQ0FBQyxzRkFBK0I7O0FBRXJELDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFrQjtBQUNsQixlQUFlLEdBQUcsa0JBQWtCO0FBQ3BDLGlCQUFpQixHQUFHLG9CQUFvQjtBQUN4QyxpQkFBaUIsR0FBRyxvQkFBb0I7QUFDeEMsY0FBYyxHQUFHLGNBQWM7QUFDL0IsZUFBZSxHQUFHLGVBQWU7QUFDakMsZUFBZSxHQUFHLGtCQUFrQjtBQUNwQyxnQkFBZ0I7QUFDaEIsZUFBZTs7QUFFZiwwQ0FBMEMsbUJBQU8sQ0FBQyxzRkFBNEI7O0FBRTlFLDhDQUE4QyxtQkFBTyxDQUFDLHNHQUF1Qzs7QUFFN0YsZ0RBQWdELG1CQUFPLENBQUMsMEdBQXlDOztBQUVqRyw2Q0FBNkMsbUJBQU8sQ0FBQyxvR0FBc0M7O0FBRTNGLGFBQWEsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFNUIsdUNBQXVDLG1CQUFPLENBQUMsa0VBQWU7O0FBRTlELHVDQUF1QyxtQkFBTyxDQUFDLHdFQUFrQjs7QUFFakUsZ0RBQWdELGdEQUFnRCx1Q0FBdUMsc0NBQXNDLG9GQUFvRiwyREFBMkQsRUFBRSxlQUFlOztBQUU3VSxvREFBb0QsNkNBQTZDLFlBQVksRUFBRSw4RUFBOEUsU0FBUyxnQkFBZ0IsRUFBRSxtREFBbUQsK0JBQStCLHVCQUF1QixFQUFFLGlCQUFpQixzRkFBc0YsdUJBQXVCLDJFQUEyRSxxRkFBcUYsc0NBQXNDLDBDQUEwQyxFQUFFLE9BQU8sd0JBQXdCLEVBQUUsRUFBRSxFQUFFLHNCQUFzQixhQUFhLHdCQUF3QixFQUFFLGVBQWU7O0FBRXB5QiwwQ0FBMEMsZ0NBQWdDLG9DQUFvQyxvREFBb0Qsc0JBQXNCLDBDQUEwQyxnRUFBZ0UsRUFBRSxFQUFFLEVBQUUsZ0NBQWdDLEVBQUUsYUFBYTs7QUFFdlYsZ0NBQWdDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsYUFBYSx1REFBdUQseURBQXlELEVBQUUsRUFBRSxFQUFFLDZDQUE2QywyRUFBMkUsRUFBRSxPQUFPLGlEQUFpRCxrRkFBa0YsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUVsaUI7QUFDQSxrQ0FBa0MsT0FBTyxxQkFBcUIsT0FBTztBQUNyRSxtQ0FBbUMsT0FBTztBQUMxQyx3Q0FBd0MsT0FBTyw4QkFBOEIsT0FBTyxxQkFBcUIsT0FBTztBQUNoSCx5Q0FBeUMsT0FBTyw4QkFBOEIsT0FBTztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0Esb0ZBQW9GO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFLLEdBQUcsT0FBTyxrUUFBa1EsUUFBUSxNQUFNLE1BQU0sTUFBTSxPQUFPLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxPQUFPLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxPQUFPLE9BQU8sTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE9BQU8sT0FBTyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLE1BQU0sUUFBUSxVQUFVLGVBQWUscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLHVCQUF1QixPQUFPLE9BQU8sTUFBTSxPQUFPLE1BQU0sU0FBUyxzQkFBc0IscUJBQXFCLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxlQUFlLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sU0FBUyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1QixRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLDRCQUE0QixPQUFPLE9BQU8sc0JBQXNCLHFCQUFxQix1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsTUFBTSxTQUFTLFVBQVUsWUFBWSxXQUFXLE9BQU8sU0FBUyxNQUFNLFFBQVEsWUFBWSxPQUFPLFVBQVUsTUFBTSxZQUFZLFVBQVUsWUFBWSxPQUFPLFNBQVMsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLFFBQVEsS0FBSyxXQUFXLE9BQU8sS0FBSyxRQUFRLEtBQUssV0FBVyxPQUFPLEtBQUssUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFFBQVEsS0FBSyxXQUFXLE9BQU8sS0FBSyxRQUFRLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxRQUFRLEtBQUssV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLE9BQU8sTUFBTSxRQUFRLEtBQUssV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FB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Q0E7QUFDQSxFQUFFLGdCQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztB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UDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLGNBQWM7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2xyQ2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsRUFBRSx1SkFBc0U7QUFDeEUiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiaW1wb3J0ICcuL2dsb2JhbHMuc2Nzcyc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZVNlc3Npb24gPSB1c2VTZXNzaW9uO1xuZXhwb3J0cy5zZXNzaW9uID0gZXhwb3J0cy5nZXRTZXNzaW9uID0gZ2V0U2Vzc2lvbjtcbmV4cG9ydHMuY3NyZlRva2VuID0gZXhwb3J0cy5nZXRDc3JmVG9rZW4gPSBnZXRDc3JmVG9rZW47XG5leHBvcnRzLnByb3ZpZGVycyA9IGV4cG9ydHMuZ2V0UHJvdmlkZXJzID0gZ2V0UHJvdmlkZXJzO1xuZXhwb3J0cy5zaWduaW4gPSBleHBvcnRzLnNpZ25JbiA9IHNpZ25JbjtcbmV4cG9ydHMuc2lnbm91dCA9IGV4cG9ydHMuc2lnbk91dCA9IHNpZ25PdXQ7XG5leHBvcnRzLm9wdGlvbnMgPSBleHBvcnRzLnNldE9wdGlvbnMgPSBzZXRPcHRpb25zO1xuZXhwb3J0cy5Qcm92aWRlciA9IFByb3ZpZGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlZ2VuZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2FzeW5jVG9HZW5lcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfbG9nZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9saWIvbG9nZ2VyXCIpKTtcblxudmFyIF9wYXJzZVVybCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xpYi9wYXJzZS11cmxcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgX19ORVhUQVVUSCA9IHtcbiAgYmFzZVVybDogKDAsIF9wYXJzZVVybC5kZWZhdWx0KShwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwgfHwgcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCkuYmFzZVVybCxcbiAgYmFzZVBhdGg6ICgwLCBfcGFyc2VVcmwuZGVmYXVsdCkocHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMKS5iYXNlUGF0aCxcbiAgYmFzZVVybFNlcnZlcjogKDAsIF9wYXJzZVVybC5kZWZhdWx0KShwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkxfSU5URVJOQUwgfHwgcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMIHx8IHByb2Nlc3MuZW52LlZFUkNFTF9VUkwpLmJhc2VVcmwsXG4gIGJhc2VQYXRoU2VydmVyOiAoMCwgX3BhcnNlVXJsLmRlZmF1bHQpKHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTF9JTlRFUk5BTCB8fCBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwpLmJhc2VQYXRoLFxuICBrZWVwQWxpdmU6IDAsXG4gIGNsaWVudE1heEFnZTogMCxcbiAgX2NsaWVudExhc3RTeW5jOiAwLFxuICBfY2xpZW50U3luY1RpbWVyOiBudWxsLFxuICBfZXZlbnRMaXN0ZW5lcnNBZGRlZDogZmFsc2UsXG4gIF9jbGllbnRTZXNzaW9uOiB1bmRlZmluZWQsXG4gIF9nZXRTZXNzaW9uOiBmdW5jdGlvbiBfZ2V0U2Vzc2lvbigpIHt9XG59O1xudmFyIGxvZ2dlciA9ICgwLCBfbG9nZ2VyMi5wcm94eUxvZ2dlcikoX2xvZ2dlcjIuZGVmYXVsdCwgX19ORVhUQVVUSC5iYXNlUGF0aCk7XG52YXIgYnJvYWRjYXN0ID0gQnJvYWRjYXN0Q2hhbm5lbCgpO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhX19ORVhUQVVUSC5fZXZlbnRMaXN0ZW5lcnNBZGRlZCkge1xuICBfX05FWFRBVVRILl9ldmVudExpc3RlbmVyc0FkZGVkID0gdHJ1ZTtcbiAgYnJvYWRjYXN0LnJlY2VpdmUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfX05FWFRBVVRILl9nZXRTZXNzaW9uKHtcbiAgICAgIGV2ZW50OiBcInN0b3JhZ2VcIlxuICAgIH0pO1xuICB9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICFkb2N1bWVudC5oaWRkZW4gJiYgX19ORVhUQVVUSC5fZ2V0U2Vzc2lvbih7XG4gICAgICBldmVudDogXCJ2aXNpYmlsaXR5Y2hhbmdlXCJcbiAgICB9KTtcbiAgfSwgZmFsc2UpO1xufVxuXG52YXIgU2Vzc2lvbkNvbnRleHQgPSAoMCwgX3JlYWN0LmNyZWF0ZUNvbnRleHQpKCk7XG5cbmZ1bmN0aW9uIHVzZVNlc3Npb24oc2Vzc2lvbikge1xuICB2YXIgY29udGV4dCA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoU2Vzc2lvbkNvbnRleHQpO1xuICBpZiAoY29udGV4dCkgcmV0dXJuIGNvbnRleHQ7XG4gIHJldHVybiBfdXNlU2Vzc2lvbkhvb2soc2Vzc2lvbik7XG59XG5cbmZ1bmN0aW9uIF91c2VTZXNzaW9uSG9vayhzZXNzaW9uKSB7XG4gIHZhciBfdXNlU3RhdGUgPSAoMCwgX3JlYWN0LnVzZVN0YXRlKShzZXNzaW9uKSxcbiAgICAgIF91c2VTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyLmRlZmF1bHQpKF91c2VTdGF0ZSwgMiksXG4gICAgICBkYXRhID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldERhdGEgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUzID0gKDAsIF9yZWFjdC51c2VTdGF0ZSkoIWRhdGEpLFxuICAgICAgX3VzZVN0YXRlNCA9ICgwLCBfc2xpY2VkVG9BcnJheTIuZGVmYXVsdCkoX3VzZVN0YXRlMywgMiksXG4gICAgICBsb2FkaW5nID0gX3VzZVN0YXRlNFswXSxcbiAgICAgIHNldExvYWRpbmcgPSBfdXNlU3RhdGU0WzFdO1xuXG4gICgwLCBfcmVhY3QudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgX19ORVhUQVVUSC5fZ2V0U2Vzc2lvbiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjIuZGVmYXVsdCkoX3JlZ2VuZXJhdG9yLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgdmFyIF9yZWYyLFxuICAgICAgICAgIF9yZWYyJGV2ZW50LFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIHRyaWdncmVkQnlFdmVudCxcbiAgICAgICAgICB0cmlnZ2VyZWRCeVN0b3JhZ2VFdmVudCxcbiAgICAgICAgICBjbGllbnRNYXhBZ2UsXG4gICAgICAgICAgY2xpZW50TGFzdFN5bmMsXG4gICAgICAgICAgY3VycmVudFRpbWUsXG4gICAgICAgICAgY2xpZW50U2Vzc2lvbixcbiAgICAgICAgICBuZXdDbGllbnRTZXNzaW9uRGF0YSxcbiAgICAgICAgICBfYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvci5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIF9yZWYyID0gX2FyZ3MubGVuZ3RoID4gMCAmJiBfYXJnc1swXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3NbMF0gOiB7fSwgX3JlZjIkZXZlbnQgPSBfcmVmMi5ldmVudCwgZXZlbnQgPSBfcmVmMiRldmVudCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYyJGV2ZW50O1xuICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTtcbiAgICAgICAgICAgICAgdHJpZ2dyZWRCeUV2ZW50ID0gZXZlbnQgIT09IG51bGw7XG4gICAgICAgICAgICAgIHRyaWdnZXJlZEJ5U3RvcmFnZUV2ZW50ID0gZXZlbnQgPT09IFwic3RvcmFnZVwiO1xuICAgICAgICAgICAgICBjbGllbnRNYXhBZ2UgPSBfX05FWFRBVVRILmNsaWVudE1heEFnZTtcbiAgICAgICAgICAgICAgY2xpZW50TGFzdFN5bmMgPSBwYXJzZUludChfX05FWFRBVVRILl9jbGllbnRMYXN0U3luYyk7XG4gICAgICAgICAgICAgIGN1cnJlbnRUaW1lID0gX25vdygpO1xuICAgICAgICAgICAgICBjbGllbnRTZXNzaW9uID0gX19ORVhUQVVUSC5fY2xpZW50U2Vzc2lvbjtcblxuICAgICAgICAgICAgICBpZiAoISghdHJpZ2dlcmVkQnlTdG9yYWdlRXZlbnQgJiYgY2xpZW50U2Vzc2lvbiAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxOTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghKGNsaWVudE1heEFnZSA9PT0gMCAmJiB0cmlnZ3JlZEJ5RXZlbnQgIT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgaWYgKCEoY2xpZW50TWF4QWdlID4gMCAmJiBjbGllbnRTZXNzaW9uID09PSBudWxsKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgIGlmICghKGNsaWVudE1heEFnZSA+IDAgJiYgY3VycmVudFRpbWUgPCBjbGllbnRMYXN0U3luYyArIGNsaWVudE1heEFnZSkpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgICBpZiAoY2xpZW50U2Vzc2lvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgX19ORVhUQVVUSC5fY2xpZW50U2Vzc2lvbiA9IG51bGw7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfX05FWFRBVVRILl9jbGllbnRMYXN0U3luYyA9IF9ub3coKTtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDIzO1xuICAgICAgICAgICAgICByZXR1cm4gZ2V0U2Vzc2lvbih7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50OiAhdHJpZ2dlcmVkQnlTdG9yYWdlRXZlbnRcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgICAgIG5ld0NsaWVudFNlc3Npb25EYXRhID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgX19ORVhUQVVUSC5fY2xpZW50U2Vzc2lvbiA9IG5ld0NsaWVudFNlc3Npb25EYXRhO1xuICAgICAgICAgICAgICBzZXREYXRhKG5ld0NsaWVudFNlc3Npb25EYXRhKTtcbiAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzMztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAyOTtcbiAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFtcImNhdGNoXCJdKDEpO1xuICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDTElFTlRfVVNFX1NFU1NJT05fRVJST1JcIiwgX2NvbnRleHQudDApO1xuICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIF9jYWxsZWUsIG51bGwsIFtbMSwgMjldXSk7XG4gICAgfSkpO1xuXG4gICAgX19ORVhUQVVUSC5fZ2V0U2Vzc2lvbigpO1xuICB9KTtcbiAgcmV0dXJuIFtkYXRhLCBsb2FkaW5nXTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Vzc2lvbihfeCkge1xuICByZXR1cm4gX2dldFNlc3Npb24yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRTZXNzaW9uMigpIHtcbiAgX2dldFNlc3Npb24yID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShfcmVnZW5lcmF0b3IuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0KGN0eCkge1xuICAgIHZhciBfY3R4JHRyaWdnZXJFdmVudDtcblxuICAgIHZhciBzZXNzaW9uO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0JChfY29udGV4dDQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0LnByZXYgPSBfY29udGV4dDQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiBfZmV0Y2hEYXRhKFwic2Vzc2lvblwiLCBjdHgpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgc2Vzc2lvbiA9IF9jb250ZXh0NC5zZW50O1xuXG4gICAgICAgICAgICBpZiAoKF9jdHgkdHJpZ2dlckV2ZW50ID0gY3R4ID09PSBudWxsIHx8IGN0eCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3R4LnRyaWdnZXJFdmVudCkgIT09IG51bGwgJiYgX2N0eCR0cmlnZ2VyRXZlbnQgIT09IHZvaWQgMCA/IF9jdHgkdHJpZ2dlckV2ZW50IDogdHJ1ZSkge1xuICAgICAgICAgICAgICBicm9hZGNhc3QucG9zdCh7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IFwic2Vzc2lvblwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiZ2V0U2Vzc2lvblwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NC5hYnJ1cHQoXCJyZXR1cm5cIiwgc2Vzc2lvbik7XG5cbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNCk7XG4gIH0pKTtcbiAgcmV0dXJuIF9nZXRTZXNzaW9uMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBnZXRDc3JmVG9rZW4oX3gyKSB7XG4gIHJldHVybiBfZ2V0Q3NyZlRva2VuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRDc3JmVG9rZW4oKSB7XG4gIF9nZXRDc3JmVG9rZW4gPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyLmRlZmF1bHQpKF9yZWdlbmVyYXRvci5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZTUoY3R4KSB7XG4gICAgdmFyIF95aWVsZCRfZmV0Y2hEYXRhO1xuXG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvci5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZTUkKF9jb250ZXh0NSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDUucHJldiA9IF9jb250ZXh0NS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIF9mZXRjaERhdGEoXCJjc3JmXCIsIGN0eCk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBfY29udGV4dDUudDEgPSBfeWllbGQkX2ZldGNoRGF0YSA9IF9jb250ZXh0NS5zZW50O1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQwID0gX2NvbnRleHQ1LnQxID09PSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoX2NvbnRleHQ1LnQwKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gNjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9jb250ZXh0NS50MCA9IF95aWVsZCRfZmV0Y2hEYXRhID09PSB2b2lkIDA7XG5cbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBpZiAoIV9jb250ZXh0NS50MCkge1xuICAgICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDEwO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2NvbnRleHQ1LnQyID0gdm9pZCAwO1xuICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSAxMTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIF9jb250ZXh0NS50MiA9IF95aWVsZCRfZmV0Y2hEYXRhLmNzcmZUb2tlbjtcblxuICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDUudDIpO1xuXG4gICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU1KTtcbiAgfSkpO1xuICByZXR1cm4gX2dldENzcmZUb2tlbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm92aWRlcnMoKSB7XG4gIHJldHVybiBfZ2V0UHJvdmlkZXJzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm92aWRlcnMoKSB7XG4gIF9nZXRQcm92aWRlcnMgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyLmRlZmF1bHQpKF9yZWdlbmVyYXRvci5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZTYoKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvci5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZTYkKF9jb250ZXh0Nikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDYucHJldiA9IF9jb250ZXh0Ni5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIF9mZXRjaERhdGEoXCJwcm92aWRlcnNcIik7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDYuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNik7XG4gIH0pKTtcbiAgcmV0dXJuIF9nZXRQcm92aWRlcnMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc2lnbkluKF94Mykge1xuICByZXR1cm4gX3NpZ25Jbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfc2lnbkluKCkge1xuICBfc2lnbkluID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShfcmVnZW5lcmF0b3IuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU3KHByb3ZpZGVyKSB7XG4gICAgdmFyIG9wdGlvbnMsXG4gICAgICAgIGF1dGhvcml6YXRpb25QYXJhbXMsXG4gICAgICAgIF9vcHRpb25zJGNhbGxiYWNrVXJsLFxuICAgICAgICBjYWxsYmFja1VybCxcbiAgICAgICAgX29wdGlvbnMkcmVkaXJlY3QsXG4gICAgICAgIHJlZGlyZWN0LFxuICAgICAgICBiYXNlVXJsLFxuICAgICAgICBwcm92aWRlcnMsXG4gICAgICAgIGlzQ3JlZGVudGlhbHMsXG4gICAgICAgIGlzRW1haWwsXG4gICAgICAgIGlzU3VwcG9ydGluZ1JldHVybixcbiAgICAgICAgc2lnbkluVXJsLFxuICAgICAgICBfc2lnbkluVXJsLFxuICAgICAgICByZXMsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIF9kYXRhJHVybCxcbiAgICAgICAgdXJsLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgX2FyZ3M3ID0gYXJndW1lbnRzO1xuXG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvci5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZTckKF9jb250ZXh0Nykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDcucHJldiA9IF9jb250ZXh0Ny5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgb3B0aW9ucyA9IF9hcmdzNy5sZW5ndGggPiAxICYmIF9hcmdzN1sxXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3M3WzFdIDoge307XG4gICAgICAgICAgICBhdXRob3JpemF0aW9uUGFyYW1zID0gX2FyZ3M3Lmxlbmd0aCA+IDIgJiYgX2FyZ3M3WzJdICE9PSB1bmRlZmluZWQgPyBfYXJnczdbMl0gOiB7fTtcbiAgICAgICAgICAgIF9vcHRpb25zJGNhbGxiYWNrVXJsID0gb3B0aW9ucy5jYWxsYmFja1VybCwgY2FsbGJhY2tVcmwgPSBfb3B0aW9ucyRjYWxsYmFja1VybCA9PT0gdm9pZCAwID8gd2luZG93LmxvY2F0aW9uLmhyZWYgOiBfb3B0aW9ucyRjYWxsYmFja1VybCwgX29wdGlvbnMkcmVkaXJlY3QgPSBvcHRpb25zLnJlZGlyZWN0LCByZWRpcmVjdCA9IF9vcHRpb25zJHJlZGlyZWN0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVkaXJlY3Q7XG4gICAgICAgICAgICBiYXNlVXJsID0gX2FwaUJhc2VVcmwoKTtcbiAgICAgICAgICAgIF9jb250ZXh0Ny5uZXh0ID0gNjtcbiAgICAgICAgICAgIHJldHVybiBnZXRQcm92aWRlcnMoKTtcblxuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHByb3ZpZGVycyA9IF9jb250ZXh0Ny5zZW50O1xuXG4gICAgICAgICAgICBpZiAocHJvdmlkZXJzKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Ny5uZXh0ID0gOTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDcuYWJydXB0KFwicmV0dXJuXCIsIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiXCIuY29uY2F0KGJhc2VVcmwsIFwiL2Vycm9yXCIpKSk7XG5cbiAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBpZiAocHJvdmlkZXIgaW4gcHJvdmlkZXJzKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Ny5uZXh0ID0gMTE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ3LmFicnVwdChcInJldHVyblwiLCB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIlwiLmNvbmNhdChiYXNlVXJsLCBcIi9zaWduaW4/Y2FsbGJhY2tVcmw9XCIpLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoY2FsbGJhY2tVcmwpKSkpO1xuXG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIGlzQ3JlZGVudGlhbHMgPSBwcm92aWRlcnNbcHJvdmlkZXJdLnR5cGUgPT09IFwiY3JlZGVudGlhbHNcIjtcbiAgICAgICAgICAgIGlzRW1haWwgPSBwcm92aWRlcnNbcHJvdmlkZXJdLnR5cGUgPT09IFwiZW1haWxcIjtcbiAgICAgICAgICAgIGlzU3VwcG9ydGluZ1JldHVybiA9IGlzQ3JlZGVudGlhbHMgfHwgaXNFbWFpbDtcbiAgICAgICAgICAgIHNpZ25JblVybCA9IGlzQ3JlZGVudGlhbHMgPyBcIlwiLmNvbmNhdChiYXNlVXJsLCBcIi9jYWxsYmFjay9cIikuY29uY2F0KHByb3ZpZGVyKSA6IFwiXCIuY29uY2F0KGJhc2VVcmwsIFwiL3NpZ25pbi9cIikuY29uY2F0KHByb3ZpZGVyKTtcbiAgICAgICAgICAgIF9zaWduSW5VcmwgPSBcIlwiLmNvbmNhdChzaWduSW5VcmwsIFwiP1wiKS5jb25jYXQobmV3IFVSTFNlYXJjaFBhcmFtcyhhdXRob3JpemF0aW9uUGFyYW1zKSk7XG4gICAgICAgICAgICBfY29udGV4dDcudDAgPSBmZXRjaDtcbiAgICAgICAgICAgIF9jb250ZXh0Ny50MSA9IF9zaWduSW5Vcmw7XG4gICAgICAgICAgICBfY29udGV4dDcudDIgPSB7XG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfY29udGV4dDcudDMgPSBVUkxTZWFyY2hQYXJhbXM7XG4gICAgICAgICAgICBfY29udGV4dDcudDQgPSBfb2JqZWN0U3ByZWFkO1xuICAgICAgICAgICAgX2NvbnRleHQ3LnQ1ID0gX29iamVjdFNwcmVhZCh7fSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBfY29udGV4dDcudDYgPSB7fTtcbiAgICAgICAgICAgIF9jb250ZXh0Ny5uZXh0ID0gMjU7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q3NyZlRva2VuKCk7XG5cbiAgICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgICAgX2NvbnRleHQ3LnQ3ID0gX2NvbnRleHQ3LnNlbnQ7XG4gICAgICAgICAgICBfY29udGV4dDcudDggPSBjYWxsYmFja1VybDtcbiAgICAgICAgICAgIF9jb250ZXh0Ny50OSA9IHtcbiAgICAgICAgICAgICAgY3NyZlRva2VuOiBfY29udGV4dDcudDcsXG4gICAgICAgICAgICAgIGNhbGxiYWNrVXJsOiBfY29udGV4dDcudDgsXG4gICAgICAgICAgICAgIGpzb246IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfY29udGV4dDcudDEwID0gKDAsIF9jb250ZXh0Ny50NCkoX2NvbnRleHQ3LnQ1LCBfY29udGV4dDcudDYsIF9jb250ZXh0Ny50OSk7XG4gICAgICAgICAgICBfY29udGV4dDcudDExID0gbmV3IF9jb250ZXh0Ny50MyhfY29udGV4dDcudDEwKTtcbiAgICAgICAgICAgIF9jb250ZXh0Ny50MTIgPSB7XG4gICAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IF9jb250ZXh0Ny50MixcbiAgICAgICAgICAgICAgYm9keTogX2NvbnRleHQ3LnQxMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9jb250ZXh0Ny5uZXh0ID0gMzM7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9jb250ZXh0Ny50MCkoX2NvbnRleHQ3LnQxLCBfY29udGV4dDcudDEyKTtcblxuICAgICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgICByZXMgPSBfY29udGV4dDcuc2VudDtcbiAgICAgICAgICAgIF9jb250ZXh0Ny5uZXh0ID0gMzY7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcblxuICAgICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgICBkYXRhID0gX2NvbnRleHQ3LnNlbnQ7XG5cbiAgICAgICAgICAgIGlmICghKHJlZGlyZWN0IHx8ICFpc1N1cHBvcnRpbmdSZXR1cm4pKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Ny5uZXh0ID0gNDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cmwgPSAoX2RhdGEkdXJsID0gZGF0YS51cmwpICE9PSBudWxsICYmIF9kYXRhJHVybCAhPT0gdm9pZCAwID8gX2RhdGEkdXJsIDogY2FsbGJhY2tVcmw7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh1cmwpO1xuICAgICAgICAgICAgaWYgKHVybC5pbmNsdWRlcyhcIiNcIikpIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDcuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgIGVycm9yID0gbmV3IFVSTChkYXRhLnVybCkuc2VhcmNoUGFyYW1zLmdldChcImVycm9yXCIpO1xuXG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDQ2O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2NvbnRleHQ3Lm5leHQgPSA0NjtcbiAgICAgICAgICAgIHJldHVybiBfX05FWFRBVVRILl9nZXRTZXNzaW9uKHtcbiAgICAgICAgICAgICAgZXZlbnQ6IFwic3RvcmFnZVwiXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgNDY6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ3LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzLFxuICAgICAgICAgICAgICBvazogcmVzLm9rLFxuICAgICAgICAgICAgICB1cmw6IGVycm9yID8gbnVsbCA6IGRhdGEudXJsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ny5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNyk7XG4gIH0pKTtcbiAgcmV0dXJuIF9zaWduSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc2lnbk91dCgpIHtcbiAgcmV0dXJuIF9zaWduT3V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9zaWduT3V0KCkge1xuICBfc2lnbk91dCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjIuZGVmYXVsdCkoX3JlZ2VuZXJhdG9yLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlOCgpIHtcbiAgICB2YXIgb3B0aW9ucyxcbiAgICAgICAgX29wdGlvbnMkY2FsbGJhY2tVcmwyLFxuICAgICAgICBjYWxsYmFja1VybCxcbiAgICAgICAgX29wdGlvbnMkcmVkaXJlY3QyLFxuICAgICAgICByZWRpcmVjdCxcbiAgICAgICAgYmFzZVVybCxcbiAgICAgICAgZmV0Y2hPcHRpb25zLFxuICAgICAgICByZXMsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIF9kYXRhJHVybDIsXG4gICAgICAgIHVybCxcbiAgICAgICAgX2FyZ3M4ID0gYXJndW1lbnRzO1xuXG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvci5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZTgkKF9jb250ZXh0OCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDgucHJldiA9IF9jb250ZXh0OC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgb3B0aW9ucyA9IF9hcmdzOC5sZW5ndGggPiAwICYmIF9hcmdzOFswXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3M4WzBdIDoge307XG4gICAgICAgICAgICBfb3B0aW9ucyRjYWxsYmFja1VybDIgPSBvcHRpb25zLmNhbGxiYWNrVXJsLCBjYWxsYmFja1VybCA9IF9vcHRpb25zJGNhbGxiYWNrVXJsMiA9PT0gdm9pZCAwID8gd2luZG93LmxvY2F0aW9uLmhyZWYgOiBfb3B0aW9ucyRjYWxsYmFja1VybDIsIF9vcHRpb25zJHJlZGlyZWN0MiA9IG9wdGlvbnMucmVkaXJlY3QsIHJlZGlyZWN0ID0gX29wdGlvbnMkcmVkaXJlY3QyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVkaXJlY3QyO1xuICAgICAgICAgICAgYmFzZVVybCA9IF9hcGlCYXNlVXJsKCk7XG4gICAgICAgICAgICBfY29udGV4dDgudDAgPSB7XG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfY29udGV4dDgudDEgPSBVUkxTZWFyY2hQYXJhbXM7XG4gICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDc7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q3NyZlRva2VuKCk7XG5cbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICBfY29udGV4dDgudDIgPSBfY29udGV4dDguc2VudDtcbiAgICAgICAgICAgIF9jb250ZXh0OC50MyA9IGNhbGxiYWNrVXJsO1xuICAgICAgICAgICAgX2NvbnRleHQ4LnQ0ID0ge1xuICAgICAgICAgICAgICBjc3JmVG9rZW46IF9jb250ZXh0OC50MixcbiAgICAgICAgICAgICAgY2FsbGJhY2tVcmw6IF9jb250ZXh0OC50MyxcbiAgICAgICAgICAgICAganNvbjogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9jb250ZXh0OC50NSA9IG5ldyBfY29udGV4dDgudDEoX2NvbnRleHQ4LnQ0KTtcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgaGVhZGVyczogX2NvbnRleHQ4LnQwLFxuICAgICAgICAgICAgICBib2R5OiBfY29udGV4dDgudDVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDE0O1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKFwiXCIuY29uY2F0KGJhc2VVcmwsIFwiL3NpZ25vdXRcIiksIGZldGNoT3B0aW9ucyk7XG5cbiAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgcmVzID0gX2NvbnRleHQ4LnNlbnQ7XG4gICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDE3O1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG5cbiAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgZGF0YSA9IF9jb250ZXh0OC5zZW50O1xuICAgICAgICAgICAgYnJvYWRjYXN0LnBvc3Qoe1xuICAgICAgICAgICAgICBldmVudDogXCJzZXNzaW9uXCIsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcInNpZ25vdXRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFyZWRpcmVjdCkge1xuICAgICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDI0O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXJsID0gKF9kYXRhJHVybDIgPSBkYXRhLnVybCkgIT09IG51bGwgJiYgX2RhdGEkdXJsMiAhPT0gdm9pZCAwID8gX2RhdGEkdXJsMiA6IGNhbGxiYWNrVXJsO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXJsKTtcbiAgICAgICAgICAgIGlmICh1cmwuaW5jbHVkZXMoXCIjXCIpKSB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ4LmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgICBfY29udGV4dDgubmV4dCA9IDI2O1xuICAgICAgICAgICAgcmV0dXJuIF9fTkVYVEFVVEguX2dldFNlc3Npb24oe1xuICAgICAgICAgICAgICBldmVudDogXCJzdG9yYWdlXCJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDguYWJydXB0KFwicmV0dXJuXCIsIGRhdGEpO1xuXG4gICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ4LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU4KTtcbiAgfSkpO1xuICByZXR1cm4gX3NpZ25PdXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc2V0T3B0aW9ucygpIHtcbiAgdmFyIF9yZWYzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgIGJhc2VVcmwgPSBfcmVmMy5iYXNlVXJsLFxuICAgICAgYmFzZVBhdGggPSBfcmVmMy5iYXNlUGF0aCxcbiAgICAgIGNsaWVudE1heEFnZSA9IF9yZWYzLmNsaWVudE1heEFnZSxcbiAgICAgIGtlZXBBbGl2ZSA9IF9yZWYzLmtlZXBBbGl2ZTtcblxuICBpZiAoYmFzZVVybCkgX19ORVhUQVVUSC5iYXNlVXJsID0gYmFzZVVybDtcbiAgaWYgKGJhc2VQYXRoKSBfX05FWFRBVVRILmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gIGlmIChjbGllbnRNYXhBZ2UpIF9fTkVYVEFVVEguY2xpZW50TWF4QWdlID0gY2xpZW50TWF4QWdlO1xuXG4gIGlmIChrZWVwQWxpdmUpIHtcbiAgICBfX05FWFRBVVRILmtlZXBBbGl2ZSA9IGtlZXBBbGl2ZTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXG4gICAgaWYgKF9fTkVYVEFVVEguX2NsaWVudFN5bmNUaW1lciAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KF9fTkVYVEFVVEguX2NsaWVudFN5bmNUaW1lcik7XG4gICAgfVxuXG4gICAgX19ORVhUQVVUSC5fY2xpZW50U3luY1RpbWVyID0gc2V0VGltZW91dCgoMCwgX2FzeW5jVG9HZW5lcmF0b3IyLmRlZmF1bHQpKF9yZWdlbmVyYXRvci5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoKSB7XG4gICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGlmIChfX05FWFRBVVRILl9jbGllbnRTZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA0O1xuICAgICAgICAgICAgICByZXR1cm4gX19ORVhUQVVUSC5fZ2V0U2Vzc2lvbih7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IFwidGltZXJcIlxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIF9jYWxsZWUyKTtcbiAgICB9KSksIGtlZXBBbGl2ZSAqIDEwMDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIFByb3ZpZGVyKF9yZWY1KSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWY1LmNoaWxkcmVuLFxuICAgICAgc2Vzc2lvbiA9IF9yZWY1LnNlc3Npb24sXG4gICAgICBvcHRpb25zID0gX3JlZjUub3B0aW9ucztcbiAgc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgcmV0dXJuICgwLCBfcmVhY3QuY3JlYXRlRWxlbWVudCkoU2Vzc2lvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdXNlU2Vzc2lvbihzZXNzaW9uKVxuICB9LCBjaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIF9mZXRjaERhdGEoX3g0KSB7XG4gIHJldHVybiBfZmV0Y2hEYXRhMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfZmV0Y2hEYXRhMigpIHtcbiAgX2ZldGNoRGF0YTIgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyLmRlZmF1bHQpKF9yZWdlbmVyYXRvci5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZTkocGF0aCkge1xuICAgIHZhciBfcmVmNyxcbiAgICAgICAgY3R4LFxuICAgICAgICBfcmVmNyRyZXEsXG4gICAgICAgIHJlcSxcbiAgICAgICAgYmFzZVVybCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgcmVzLFxuICAgICAgICBkYXRhLFxuICAgICAgICBfYXJnczkgPSBhcmd1bWVudHM7XG5cbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlOSQoX2NvbnRleHQ5KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0OS5wcmV2ID0gX2NvbnRleHQ5Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfcmVmNyA9IF9hcmdzOS5sZW5ndGggPiAxICYmIF9hcmdzOVsxXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3M5WzFdIDoge30sIGN0eCA9IF9yZWY3LmN0eCwgX3JlZjckcmVxID0gX3JlZjcucmVxLCByZXEgPSBfcmVmNyRyZXEgPT09IHZvaWQgMCA/IGN0eCA9PT0gbnVsbCB8fCBjdHggPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN0eC5yZXEgOiBfcmVmNyRyZXE7XG4gICAgICAgICAgICBfY29udGV4dDkucHJldiA9IDE7XG4gICAgICAgICAgICBfY29udGV4dDkubmV4dCA9IDQ7XG4gICAgICAgICAgICByZXR1cm4gX2FwaUJhc2VVcmwoKTtcblxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGJhc2VVcmwgPSBfY29udGV4dDkuc2VudDtcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZXEgPyB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBjb29raWU6IHJlcS5oZWFkZXJzLmNvb2tpZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IDoge307XG4gICAgICAgICAgICBfY29udGV4dDkubmV4dCA9IDg7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goXCJcIi5jb25jYXQoYmFzZVVybCwgXCIvXCIpLmNvbmNhdChwYXRoKSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICByZXMgPSBfY29udGV4dDkuc2VudDtcbiAgICAgICAgICAgIF9jb250ZXh0OS5uZXh0ID0gMTE7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcblxuICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICBkYXRhID0gX2NvbnRleHQ5LnNlbnQ7XG5cbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQ5Lm5leHQgPSAxNDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IGRhdGE7XG5cbiAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OS5hYnJ1cHQoXCJyZXR1cm5cIiwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMCA/IGRhdGEgOiBudWxsKTtcblxuICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICBfY29udGV4dDkucHJldiA9IDE3O1xuICAgICAgICAgICAgX2NvbnRleHQ5LnQwID0gX2NvbnRleHQ5W1wiY2F0Y2hcIl0oMSk7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDTElFTlRfRkVUQ0hfRVJST1JcIiwgcGF0aCwgX2NvbnRleHQ5LnQwKTtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDkuYWJydXB0KFwicmV0dXJuXCIsIG51bGwpO1xuXG4gICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ5LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU5LCBudWxsLCBbWzEsIDE3XV0pO1xuICB9KSk7XG4gIHJldHVybiBfZmV0Y2hEYXRhMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfYXBpQmFzZVVybCgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBpZiAoIXByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCkge1xuICAgICAgbG9nZ2VyLndhcm4oXCJORVhUQVVUSF9VUkxcIiwgXCJORVhUQVVUSF9VUkwgZW52aXJvbm1lbnQgdmFyaWFibGUgbm90IHNldFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIi5jb25jYXQoX19ORVhUQVVUSC5iYXNlVXJsU2VydmVyKS5jb25jYXQoX19ORVhUQVVUSC5iYXNlUGF0aFNlcnZlcik7XG4gIH1cblxuICByZXR1cm4gX19ORVhUQVVUSC5iYXNlUGF0aDtcbn1cblxuZnVuY3Rpb24gX25vdygpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xufVxuXG5mdW5jdGlvbiBCcm9hZGNhc3RDaGFubmVsKCkge1xuICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogXCJuZXh0YXV0aC5tZXNzYWdlXCI7XG4gIHJldHVybiB7XG4gICAgcmVjZWl2ZTogZnVuY3Rpb24gcmVjZWl2ZShvblJlY2VpdmUpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3JlZjYgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyLmRlZmF1bHQpKF9yZWdlbmVyYXRvci5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMoZXZlbnQpIHtcbiAgICAgICAgICB2YXIgbWVzc2FnZTtcbiAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlMyQoX2NvbnRleHQzKSB7XG4gICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBpZiAoIShldmVudC5rZXkgIT09IG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQubmV3VmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoISgobWVzc2FnZSA9PT0gbnVsbCB8fCBtZXNzYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZXNzYWdlLmV2ZW50KSAhPT0gXCJzZXNzaW9uXCIgfHwgIShtZXNzYWdlICE9PSBudWxsICYmIG1lc3NhZ2UgIT09IHZvaWQgMCAmJiBtZXNzYWdlLmRhdGEpKSkge1xuICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgIG9uUmVjZWl2ZShtZXNzYWdlKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLnN0b3AoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF9jYWxsZWUzKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoX3g1KSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWY2LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9KCkpO1xuICAgIH0sXG4gICAgcG9zdDogZnVuY3Rpb24gcG9zdChtZXNzYWdlKSB7XG4gICAgICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtZXNzYWdlKSwge30sIHtcbiAgICAgICAgdGltZXN0YW1wOiBfbm93KClcbiAgICAgIH0pKSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGdldFNlc3Npb246IGdldFNlc3Npb24sXG4gIGdldENzcmZUb2tlbjogZ2V0Q3NyZlRva2VuLFxuICBnZXRQcm92aWRlcnM6IGdldFByb3ZpZGVycyxcbiAgdXNlU2Vzc2lvbjogdXNlU2Vzc2lvbixcbiAgc2lnbkluOiBzaWduSW4sXG4gIHNpZ25PdXQ6IHNpZ25PdXQsXG4gIFByb3ZpZGVyOiBQcm92aWRlcixcbiAgc2V0T3B0aW9uczogc2V0T3B0aW9ucyxcbiAgb3B0aW9uczogc2V0T3B0aW9ucyxcbiAgc2Vzc2lvbjogZ2V0U2Vzc2lvbixcbiAgcHJvdmlkZXJzOiBnZXRQcm92aWRlcnMsXG4gIGNzcmZUb2tlbjogZ2V0Q3NyZlRva2VuLFxuICBzaWduaW46IHNpZ25JbixcbiAgc2lnbm91dDogc2lnbk91dFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zZXRMb2dnZXIgPSBzZXRMb2dnZXI7XG5leHBvcnRzLnByb3h5TG9nZ2VyID0gcHJveHlMb2dnZXI7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5jb25zdCBfbG9nZ2VyID0ge1xuICBlcnJvcihjb2RlLCAuLi5tZXNzYWdlKSB7XG4gICAgY29uc29sZS5lcnJvcihgW25leHQtYXV0aF1bZXJyb3JdWyR7Y29kZS50b0xvd2VyQ2FzZSgpfV1gLCBgXFxuaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2Vycm9ycyMke2NvZGUudG9Mb3dlckNhc2UoKX1gLCAuLi5tZXNzYWdlKTtcbiAgfSxcblxuICB3YXJuKGNvZGUsIC4uLm1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLndhcm4oYFtuZXh0LWF1dGhdW3dhcm5dWyR7Y29kZS50b0xvd2VyQ2FzZSgpfV1gLCBgXFxuaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3dhcm5pbmdzIyR7Y29kZS50b0xvd2VyQ2FzZSgpfWAsIC4uLm1lc3NhZ2UpO1xuICB9LFxuXG4gIGRlYnVnKGNvZGUsIC4uLm1lc3NhZ2UpIHtcbiAgICB2YXIgX3Byb2Nlc3MsIF9wcm9jZXNzJGVudjtcblxuICAgIGlmICghKChfcHJvY2VzcyA9IHByb2Nlc3MpICE9PSBudWxsICYmIF9wcm9jZXNzICE9PSB2b2lkIDAgJiYgKF9wcm9jZXNzJGVudiA9IF9wcm9jZXNzLmVudikgIT09IG51bGwgJiYgX3Byb2Nlc3MkZW52ICE9PSB2b2lkIDAgJiYgX3Byb2Nlc3MkZW52Ll9ORVhUQVVUSF9ERUJVRykpIHJldHVybjtcbiAgICBjb25zb2xlLmxvZyhgW25leHQtYXV0aF1bZGVidWddWyR7Y29kZS50b0xvd2VyQ2FzZSgpfV1gLCAuLi5tZXNzYWdlKTtcbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBzZXRMb2dnZXIobmV3TG9nZ2VyID0ge30pIHtcbiAgaWYgKG5ld0xvZ2dlci5lcnJvcikgX2xvZ2dlci5lcnJvciA9IG5ld0xvZ2dlci5lcnJvcjtcbiAgaWYgKG5ld0xvZ2dlci53YXJuKSBfbG9nZ2VyLndhcm4gPSBuZXdMb2dnZXIud2FybjtcbiAgaWYgKG5ld0xvZ2dlci5kZWJ1ZykgX2xvZ2dlci5kZWJ1ZyA9IG5ld0xvZ2dlci5kZWJ1Zztcbn1cblxudmFyIF9kZWZhdWx0ID0gX2xvZ2dlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG5mdW5jdGlvbiBwcm94eUxvZ2dlcihsb2dnZXIgPSBfbG9nZ2VyLCBiYXNlUGF0aCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gbG9nZ2VyO1xuICAgIH1cblxuICAgIGNvbnN0IGNsaWVudExvZ2dlciA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBsZXZlbCBpbiBsb2dnZXIpIHtcbiAgICAgIGNsaWVudExvZ2dlcltsZXZlbF0gPSAoY29kZSwgLi4ubWVzc2FnZSkgPT4ge1xuICAgICAgICBfbG9nZ2VyW2xldmVsXShjb2RlLCAuLi5tZXNzYWdlKTtcblxuICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlUGF0aH0vX2xvZ2A7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICBjb2RlLFxuICAgICAgICAgIG1lc3NhZ2U6IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UubWFwKG0gPT4ge1xuICAgICAgICAgICAgaWYgKG0gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG0ubmFtZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgc3RhY2s6IG0uc3RhY2tcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgfSkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VuZEJlYWNvbikge1xuICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIGJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHlcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBjbGllbnRMb2dnZXI7XG4gIH0gY2F0Y2ggKF91bnVzZWQpIHtcbiAgICByZXR1cm4gX2xvZ2dlcjtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcGFyc2VVcmw7XG5cbmZ1bmN0aW9uIHBhcnNlVXJsKHVybCkge1xuICBjb25zdCBkZWZhdWx0SG9zdCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuICBjb25zdCBkZWZhdWx0UGF0aCA9ICcvYXBpL2F1dGgnO1xuXG4gIGlmICghdXJsKSB7XG4gICAgdXJsID0gYCR7ZGVmYXVsdEhvc3R9JHtkZWZhdWx0UGF0aH1gO1xuICB9XG5cbiAgY29uc3QgcHJvdG9jb2wgPSB1cmwuc3RhcnRzV2l0aCgnaHR0cDonKSA/ICdodHRwJyA6ICdodHRwcyc7XG4gIHVybCA9IHVybC5yZXBsYWNlKC9eaHR0cHM/OlxcL1xcLy8sICcnKS5yZXBsYWNlKC9cXC8kLywgJycpO1xuICBjb25zdCBbX2hvc3QsIC4uLl9wYXRoXSA9IHVybC5zcGxpdCgnLycpO1xuICBjb25zdCBiYXNlVXJsID0gX2hvc3QgPyBgJHtwcm90b2NvbH06Ly8ke19ob3N0fWAgOiBkZWZhdWx0SG9zdDtcbiAgY29uc3QgYmFzZVBhdGggPSBfcGF0aC5sZW5ndGggPiAwID8gYC8ke19wYXRoLmpvaW4oJy8nKX1gIDogZGVmYXVsdFBhdGg7XG4gIHJldHVybiB7XG4gICAgYmFzZVVybCxcbiAgICBiYXNlUGF0aFxuICB9O1xufSIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2FwcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwL2luZGV4LmpzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzRdIS4vZ2xvYmFscy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzRdIS4vZ2xvYmFscy5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVs0XSEuL2dsb2JhbHMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1pZCsnICcrY291bnQudG9TdHJpbmcoKTtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXI6aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT8nQG1lZGlhICcrb2JqLm1lZGlhKycgeycrb2JqLmNzcysnfSc6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz0nXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkrJyAqLyc7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9ZnVuY3Rpb24oKXtyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihsaXN0LG9wdGlvbnMpe29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgdGFpbHdpbmRjc3MgdjIuMS40IHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbSAqLy8qISBtb2Rlcm4tbm9ybWFsaXplIHYxLjEuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplICovXFxuXFxuLypcXG5Eb2N1bWVudFxcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5Vc2UgYSBiZXR0ZXIgYm94IG1vZGVsIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qKlxcblVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUgKG9waW5pb25hdGVkKS5cXG4qL1xcblxcbmh0bWwge1xcblxcdC1tb3otdGFiLXNpemU6IDQ7XFxuXFx0LW8tdGFiLXNpemU6IDQ7XFxuXFx0ICAgdGFiLXNpemU6IDQ7XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4qL1xcblxcbmh0bWwge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2VjdGlvbnNcXG49PT09PT09PVxcbiovXFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG5JbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbiovXFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0c3lzdGVtLXVpLFxcblxcdFxcdC1hcHBsZS1zeXN0ZW0sIC8qIEZpcmVmb3ggc3VwcG9ydHMgdGhpcyBidXQgbm90IHlldCBgc3lzdGVtLXVpYCAqL1xcblxcdFxcdCdTZWdvZSBVSScsXFxuXFx0XFx0Um9ib3RvLFxcblxcdFxcdEhlbHZldGljYSxcXG5cXHRcXHRBcmlhbCxcXG5cXHRcXHRzYW5zLXNlcmlmLFxcblxcdFxcdCdBcHBsZSBDb2xvciBFbW9qaScsXFxuXFx0XFx0J1NlZ29lIFVJIEVtb2ppJztcXG59XFxuXFxuLypcXG5Hcm91cGluZyBjb250ZW50XFxuPT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbiovXFxuXFxuaHIge1xcblxcdGhlaWdodDogMDsgLyogMSAqL1xcblxcdGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG49PT09PT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuXFx0LXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuXFx0ICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuMS4gSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4yLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0dWktbW9ub3NwYWNlLFxcblxcdFxcdFNGTW9uby1SZWd1bGFyLFxcblxcdFxcdENvbnNvbGFzLFxcblxcdFxcdCdMaWJlcmF0aW9uIE1vbm8nLFxcblxcdFxcdE1lbmxvLFxcblxcdFxcdG1vbm9zcGFjZTsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcblxcdGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG5QcmV2ZW50ICdzdWInIGFuZCAnc3VwJyBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuXFx0Zm9udC1zaXplOiA3NSU7XFxuXFx0bGluZS1oZWlnaHQ6IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG5cXHRib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuXFx0dG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuVGFidWxhciBkYXRhXFxuPT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4qL1xcblxcbnRhYmxlIHtcXG5cXHR0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcblxcdGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkZvcm1zXFxuPT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHRtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbjEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuXFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuKi9cXG5cXG46Oi1tb3otZm9jdXMtaW5uZXIge1xcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5SZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcblxcdG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsICc6aW52YWxpZCcgc3R5bGVzIGluIEZpcmVmb3guXFxuU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczN1xcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuXFx0Ym94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dCAnZmllbGRzZXQnIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmxlZ2VuZCB7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcblxcdG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gJ2luaGVyaXQnIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuXFx0Zm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkludGVyYWN0aXZlXFxuPT09PT09PT09PT1cXG4qL1xcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG5cXHRkaXNwbGF5OiBsaXN0LWl0ZW07XFxufS8qKlxcbiAqIE1hbnVhbGx5IGZvcmtlZCBmcm9tIFNVSVQgQ1NTIEJhc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9zdWl0Y3NzL2Jhc2VcXG4gKiBBIHRoaW4gbGF5ZXIgb24gdG9wIG9mIG5vcm1hbGl6ZS5jc3MgdGhhdCBwcm92aWRlcyBhIHN0YXJ0aW5nIHBvaW50IG1vcmVcXG4gKiBzdWl0YWJsZSBmb3Igd2ViIGFwcGxpY2F0aW9ucy5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXFxuICovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBXb3JrIGFyb3VuZCBhIEZpcmVmb3gvSUUgYnVnIHdoZXJlIHRoZSB0cmFuc3BhcmVudCBgYnV0dG9uYCBiYWNrZ3JvdW5kXFxuICogcmVzdWx0cyBpbiBhIGxvc3Mgb2YgdGhlIGRlZmF1bHQgYGJ1dHRvbmAgZm9jdXMgc3R5bGVzLlxcbiAqL1xcblxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkO1xcbiAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogVGFpbHdpbmQgY3VzdG9tIHJlc2V0IHN0eWxlc1xcbiAqL1xcblxcbi8qKlxcbiAqIDEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5ICh3aXRoIFRhaWx3aW5kJ3MgZGVmYXVsdFxcbiAqICAgIHNhbnMtc2VyaWYgZm9udCBzdGFjayBhcyBhIGZhbGxiYWNrKSBhcyBhIHNhbmUgZGVmYXVsdC5cXG4gKiAyLiBVc2UgVGFpbHdpbmQncyBkZWZhdWx0IFxcXCJub3JtYWxcXFwiIGxpbmUtaGVpZ2h0IHNvIHRoZSB1c2VyIGlzbid0IGZvcmNlZFxcbiAqICAgIHRvIG92ZXJyaWRlIGl0IHRvIGVuc3VyZSBjb25zaXN0ZW5jeSBldmVuIHdoZW4gdXNpbmcgdGhlIGRlZmF1bHQgdGhlbWUuXFxuICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAyICovXFxufVxcblxcblxcbi8qKlxcbiAqIEluaGVyaXQgZm9udC1mYW1pbHkgYW5kIGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhc1xcbiAqIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiAqL1xcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC5cXG4gKlxcbiAqICAgIFdlIHVzZWQgdG8gc2V0IHRoaXMgaW4gdGhlIGh0bWwgZWxlbWVudCBhbmQgaW5oZXJpdCBmcm9tXFxuICogICAgdGhlIHBhcmVudCBlbGVtZW50IGZvciBldmVyeXRoaW5nIGVsc2UuIFRoaXMgY2F1c2VkIGlzc3Vlc1xcbiAqICAgIGluIHNoYWRvdy1kb20tZW5oYW5jZWQgZWxlbWVudHMgbGlrZSA8ZGV0YWlscz4gd2hlcmUgdGhlIGNvbnRlbnRcXG4gKiAgICBpcyB3cmFwcGVkIGJ5IGEgZGl2IHdpdGggYm94LXNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YC5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNFxcbiAqXFxuICpcXG4gKiAyLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC5cXG4gKlxcbiAqICAgIEJ5IGRlZmF1bHQsIHRoZSB3YXkgdGhlIGJyb3dzZXIgc3BlY2lmaWVzIHRoYXQgYW4gZWxlbWVudCBzaG91bGQgaGF2ZSBub1xcbiAqICAgIGJvcmRlciBpcyBieSBzZXR0aW5nIGl0J3MgYm9yZGVyLXN0eWxlIHRvIGBub25lYCBpbiB0aGUgdXNlci1hZ2VudFxcbiAqICAgIHN0eWxlc2hlZXQuXFxuICpcXG4gKiAgICBJbiBvcmRlciB0byBlYXNpbHkgYWRkIGJvcmRlcnMgdG8gZWxlbWVudHMgYnkganVzdCBzZXR0aW5nIHRoZSBgYm9yZGVyLXdpZHRoYFxcbiAqICAgIHByb3BlcnR5LCB3ZSBjaGFuZ2UgdGhlIGRlZmF1bHQgYm9yZGVyLXN0eWxlIGZvciBhbGwgZWxlbWVudHMgdG8gYHNvbGlkYCwgYW5kXFxuICogICAgdXNlIGJvcmRlci13aWR0aCB0byBoaWRlIHRoZW0gaW5zdGVhZC4gVGhpcyB3YXkgb3VyIGBib3JkZXJgIHV0aWxpdGllcyBvbmx5XFxuICogICAgbmVlZCB0byBzZXQgdGhlIGBib3JkZXItd2lkdGhgIHByb3BlcnR5IGluc3RlYWQgb2YgdGhlIGVudGlyZSBgYm9yZGVyYFxcbiAqICAgIHNob3J0aGFuZCwgbWFraW5nIG91ciBib3JkZXIgdXRpbGl0aWVzIG11Y2ggbW9yZSBzdHJhaWdodGZvcndhcmQgdG8gY29tcG9zZS5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNlxcbiAqL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbiAqIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHRcXG4gKi9cXG5cXG5ociB7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbi8qKlxcbiAqIFVuZG8gdGhlIGBib3JkZXItc3R5bGU6IG5vbmVgIHJlc2V0IHRoYXQgTm9ybWFsaXplIGFwcGxpZXMgdG8gaW1hZ2VzIHNvIHRoYXRcXG4gKiBvdXIgYGJvcmRlci17d2lkdGh9YCB1dGlsaXRpZXMgaGF2ZSB0aGUgZXhwZWN0ZWQgZWZmZWN0LlxcbiAqXFxuICogVGhlIE5vcm1hbGl6ZSByZXNldCBpcyB1bm5lY2Vzc2FyeSBmb3IgdXMgc2luY2Ugd2UgZGVmYXVsdCB0aGUgYm9yZGVyLXdpZHRoXFxuICogdG8gMCBvbiBhbGwgZWxlbWVudHMuXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvaXNzdWVzLzM2MlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiAjOWNhM2FmO1xcbn1cXG5cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6ICM5Y2EzYWY7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiAjOWNhM2FmO1xcbn1cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mXFxuICogb3B0LW91dC5cXG4gKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCBmb3JtIGVsZW1lbnQgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIGZvcmdldCB0b1xcbiAqIHN0eWxlIGV4cGxpY2l0bHkgc28geW91IGRvbid0IGluYWR2ZXJ0ZW50bHkgaW50cm9kdWNlXFxuICogc3R5bGVzIHRoYXQgZGV2aWF0ZSBmcm9tIHlvdXIgZGVzaWduIHN5c3RlbS4gVGhlc2Ugc3R5bGVzXFxuICogc3VwcGxlbWVudCBhIHBhcnRpYWwgcmVzZXQgdGhhdCBpcyBhbHJlYWR5IGFwcGxpZWQgYnlcXG4gKiBub3JtYWxpemUuY3NzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFVzZSB0aGUgY29uZmlndXJlZCAnbW9ubycgZm9udCBmYW1pbHkgZm9yIGVsZW1lbnRzIHRoYXRcXG4gKiBhcmUgZXhwZWN0ZWQgdG8gYmUgcmVuZGVyZWQgd2l0aCBhIG1vbm9zcGFjZSBmb250LCBmYWxsaW5nXFxuICogYmFjayB0byB0aGUgc3lzdGVtIG1vbm9zcGFjZSBzdGFjayBpZiB0aGVyZSBpcyBubyBjb25maWd1cmVkXFxuICogJ21vbm8nIGZvbnQgZmFtaWx5LlxcbiAqL1xcblxcbnByZSxcXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLyoqXFxuICogTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQgYXMgdGhhdCdzXFxuICogdGhlIGJlaGF2aW9yIHlvdSB3YW50IGFsbW9zdCBhbGwgb2YgdGhlIHRpbWUuIEluc3BpcmVkIGJ5XFxuICogQ1NTIFJlbWVkeSwgd2l0aCBgc3ZnYCBhZGRlZCBhcyB3ZWxsLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKipcXG4gKiBDb25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmVcXG4gKiB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbioge1xcblxcdC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxuXFx0LS10dy1yaW5nLWluc2V0OiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxuXFx0LS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcblxcdC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuXFx0LS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG5cXHQtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcblxcdC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG59XFxuLmNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcblxcdC5jb250YWluZXIge1xcblxcdFxcdG1heC13aWR0aDogNjQwcHg7XFxuXFx0fVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXG5cXHQuY29udGFpbmVyIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDc2OHB4O1xcblxcdH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcblxcblxcdC5jb250YWluZXIge1xcblxcdFxcdG1heC13aWR0aDogMTAyNHB4O1xcblxcdH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcblxcblxcdC5jb250YWluZXIge1xcblxcdFxcdG1heC13aWR0aDogMTI4MHB4O1xcblxcdH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcblxcblxcdC5jb250YWluZXIge1xcblxcdFxcdG1heC13aWR0aDogMTUzNnB4O1xcblxcdH1cXG59XFxuLmZpeGVkIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxufVxcbi5yZWxhdGl2ZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYWJzb2x1dGUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLnN0YXRpYyB7XFxuXFx0cG9zaXRpb246IHN0YXRpYztcXG59XFxuLnRvcC0wIHtcXG5cXHR0b3A6IDBweDtcXG59XFxuLmxlZnQtMCB7XFxuXFx0bGVmdDogMHB4O1xcbn1cXG4uYm90dG9tLTAge1xcblxcdGJvdHRvbTogMHB4O1xcbn1cXG4uei0wIHtcXG5cXHR6LWluZGV4OiAwO1xcbn1cXG4uei0xMCB7XFxuXFx0ei1pbmRleDogMTA7XFxufVxcbi56LTIwIHtcXG5cXHR6LWluZGV4OiAyMDtcXG59XFxuLm14LWF1dG8ge1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLm15LTEyIHtcXG5cXHRtYXJnaW4tdG9wOiAzcmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcbi5teS0xIHtcXG5cXHRtYXJnaW4tdG9wOiAwLjI1cmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVxcbi5teC0xNiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDRyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiA0cmVtO1xcbn1cXG4ubXgtNSB7XFxuXFx0bWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xcbn1cXG4ubXktNSB7XFxuXFx0bWFyZ2luLXRvcDogMS4yNXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbn1cXG4ubXktNCB7XFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4ubXktMTAge1xcblxcdG1hcmdpbi10b3A6IDIuNXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxufVxcbi5tYi0zMiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogOHJlbTtcXG59XFxuLm1iLTQge1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tdC01IHtcXG5cXHRtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG4ubWwtMiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuLm1iLTYge1xcblxcdG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuLi1tYi0yIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xcbn1cXG4ubWwtYXV0byB7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5tYi0yIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi5tYi01IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbn1cXG4ubXItMiB7XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5tdC0xIHtcXG5cXHRtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbn1cXG4uLW10LTY0IHtcXG5cXHRtYXJnaW4tdG9wOiAtMTZyZW07XFxufVxcbi5tdC0xMCB7XFxuXFx0bWFyZ2luLXRvcDogMi41cmVtO1xcbn1cXG4ubWItMTIge1xcblxcdG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcbi5tci01IHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XFxufVxcbi5tdC00IHtcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4ubXQtMiB7XFxuXFx0bWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG4ubWItOCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLm10LTEyIHtcXG5cXHRtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG4ubWItNjQge1xcblxcdG1hcmdpbi1ib3R0b206IDE2cmVtO1xcbn1cXG4uLW10LTEge1xcblxcdG1hcmdpbi10b3A6IC0wLjI1cmVtO1xcbn1cXG4ubWwtOCB7XFxuXFx0bWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcbi4tbWwtMTIge1xcblxcdG1hcmdpbi1sZWZ0OiAtM3JlbTtcXG59XFxuLm10LTE2IHtcXG5cXHRtYXJnaW4tdG9wOiA0cmVtO1xcbn1cXG4ubXItMSB7XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uLW10LTIge1xcblxcdG1hcmdpbi10b3A6IC0wLjVyZW07XFxufVxcbi5tci04IHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcbi4tbXQtMTYge1xcblxcdG1hcmdpbi10b3A6IC00cmVtO1xcbn1cXG4ubWwtMCB7XFxuXFx0bWFyZ2luLWxlZnQ6IDBweDtcXG59XFxuLm1sLTUge1xcblxcdG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xcbn1cXG4uZmxleCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuLmJsb2NrIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuLmlubGluZS1ibG9jayB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZ3JpZCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG59XFxuLmlubGluZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lO1xcbn1cXG4uaGlkZGVuIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG4uaC0wIHtcXG5cXHRoZWlnaHQ6IDBweDtcXG59XFxuLmgtc2NyZWVuIHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uaC01IHtcXG5cXHRoZWlnaHQ6IDEuMjVyZW07XFxufVxcbi5oLTMge1xcblxcdGhlaWdodDogMC43NXJlbTtcXG59XFxuLmgtMTIge1xcblxcdGhlaWdodDogM3JlbTtcXG59XFxuLmgtOTYge1xcblxcdGhlaWdodDogMjRyZW07XFxufVxcbi5oLTcge1xcblxcdGhlaWdodDogMS43NXJlbTtcXG59XFxuLnctMTBcXFxcLzEyIHtcXG5cXHR3aWR0aDogODMuMzMzMzMzJTtcXG59XFxuLnctZnVsbCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcbi53LTJcXFxcLzMge1xcblxcdHdpZHRoOiA2Ni42NjY2NjclO1xcbn1cXG4udy0xXFxcXC8zIHtcXG5cXHR3aWR0aDogMzMuMzMzMzMzJTtcXG59XFxuLnctMCB7XFxuXFx0d2lkdGg6IDBweDtcXG59XFxuLnctc2NyZWVuIHtcXG5cXHR3aWR0aDogMTAwdnc7XFxufVxcbi53LTY0IHtcXG5cXHR3aWR0aDogMTZyZW07XFxufVxcbi53LTMyIHtcXG5cXHR3aWR0aDogOHJlbTtcXG59XFxuLnctNSB7XFxuXFx0d2lkdGg6IDEuMjVyZW07XFxufVxcbi53LTI4IHtcXG5cXHR3aWR0aDogN3JlbTtcXG59XFxuLnctMyB7XFxuXFx0d2lkdGg6IDAuNzVyZW07XFxufVxcbi53LTcyIHtcXG5cXHR3aWR0aDogMThyZW07XFxufVxcbi53LTk2IHtcXG5cXHR3aWR0aDogMjRyZW07XFxufVxcbi53LTgwIHtcXG5cXHR3aWR0aDogMjByZW07XFxufVxcbi53LTcge1xcblxcdHdpZHRoOiAxLjc1cmVtO1xcbn1cXG4ubWF4LXctNXhsIHtcXG5cXHRtYXgtd2lkdGg6IDY0cmVtO1xcbn1cXG4ubWF4LXctbWQge1xcblxcdG1heC13aWR0aDogMjhyZW07XFxufVxcbi5tYXgtdy00eGwge1xcblxcdG1heC13aWR0aDogNTZyZW07XFxufVxcbi5mbGV4LWdyb3cge1xcblxcdGZsZXgtZ3JvdzogMTtcXG59XFxuLnRyYW5zZm9ybSB7XFxuXFx0LS10dy10cmFuc2xhdGUteDogMDtcXG5cXHQtLXR3LXRyYW5zbGF0ZS15OiAwO1xcblxcdC0tdHctcm90YXRlOiAwO1xcblxcdC0tdHctc2tldy14OiAwO1xcblxcdC0tdHctc2tldy15OiAwO1xcblxcdC0tdHctc2NhbGUteDogMTtcXG5cXHQtLXR3LXNjYWxlLXk6IDE7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXR3LXRyYW5zbGF0ZS14KSkgdHJhbnNsYXRlWSh2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcbi5yb3RhdGUtNDUge1xcblxcdC0tdHctcm90YXRlOiA0NWRlZztcXG59XFxuLnJvdGF0ZS0xODAge1xcblxcdC0tdHctcm90YXRlOiAxODBkZWc7XFxufVxcbi5jdXJzb3ItcG9pbnRlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY3Vyc29yLWRlZmF1bHQge1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLnNlbGVjdC1ub25lIHtcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdCAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0ICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uYXBwZWFyYW5jZS1ub25lIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0ICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcblxcdCAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuLmZsZXgtY29sIHtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZmxleC1yb3cge1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5mbGV4LWNvbC1yZXZlcnNlIHtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcbi5mbGV4LXdyYXAge1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmNvbnRlbnQtY2VudGVyIHtcXG5cXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5pdGVtcy1jZW50ZXIge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LWVuZCB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmp1c3RpZnktYmV0d2VlbiB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uanVzdGlmeS1hcm91bmQge1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uc2VsZi1jZW50ZXIge1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnJvdW5kZWQge1xcblxcdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcbi5yb3VuZGVkLW1kIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG59XFxuLnJvdW5kZWQtZnVsbCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogOTk5OXB4O1xcbn1cXG4uYm9yZGVyIHtcXG5cXHRib3JkZXItd2lkdGg6IDFweDtcXG59XFxuLmJvcmRlci0wIHtcXG5cXHRib3JkZXItd2lkdGg6IDBweDtcXG59XFxuLmJvcmRlci00IHtcXG5cXHRib3JkZXItd2lkdGg6IDRweDtcXG59XFxuLmJvcmRlci10IHtcXG5cXHRib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcbi5ib3JkZXItYiB7XFxuXFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbn1cXG4uYm9yZGVyLWwtMiB7XFxuXFx0Ym9yZGVyLWxlZnQtd2lkdGg6IDJweDtcXG59XFxuLmJvcmRlci1zb2xpZCB7XFxuXFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuLmJvcmRlci1ibGFjayB7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1ncmF5LTkwMCB7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMTcsIDI0LCAzOSwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1yZWQtNTAwIHtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgyMzksIDY4LCA2OCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1yZWQtNjAwIHtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgyMjAsIDM4LCAzOCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci10cmFuc3BhcmVudCB7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmJnLXdoaXRlIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ncmF5LTIwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LCAyMzEsIDIzNSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctZ3JheS04MDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCA0MSwgNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXJlZC02MDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMCwgMzgsIDM4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1yZWQtNTAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzksIDY4LCA2OCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctdHJhbnNwYXJlbnQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uYmctYmxhY2sge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyYXktMTAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDI0NCwgMjQ2LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5maWxsLWN1cnJlbnQge1xcblxcdGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuLnAtNCB7XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuLnAtMiB7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcbn1cXG4ucC01IHtcXG5cXHRwYWRkaW5nOiAxLjI1cmVtO1xcbn1cXG4ucHgtNSB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XFxufVxcbi5weS0yIHtcXG5cXHRwYWRkaW5nLXRvcDogMC41cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi5weC0wIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwcHg7XFxufVxcbi5weS0xMiB7XFxuXFx0cGFkZGluZy10b3A6IDNyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDNyZW07XFxufVxcbi5weC00IHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDFyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLnB5LTUge1xcblxcdHBhZGRpbmctdG9wOiAxLjI1cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xcbn1cXG4ucHktNCB7XFxuXFx0cGFkZGluZy10b3A6IDFyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi5weC0xMiB7XFxuXFx0cGFkZGluZy1sZWZ0OiAzcmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDNyZW07XFxufVxcbi5weS0xMCB7XFxuXFx0cGFkZGluZy10b3A6IDIuNXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcbn1cXG4ucHktMjAge1xcblxcdHBhZGRpbmctdG9wOiA1cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiA1cmVtO1xcbn1cXG4ucHgtMSB7XFxuXFx0cGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5weS0zIHtcXG5cXHRwYWRkaW5nLXRvcDogMC43NXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG59XFxuLnB4LTIge1xcblxcdHBhZGRpbmctbGVmdDogMC41cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuLnB5LTEge1xcblxcdHBhZGRpbmctdG9wOiAwLjI1cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbn1cXG4ucGItNCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi5wYi0xMiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDNyZW07XFxufVxcbi5wci0yMCB7XFxuXFx0cGFkZGluZy1yaWdodDogNXJlbTtcXG59XFxuLnB0LTYge1xcblxcdHBhZGRpbmctdG9wOiAxLjVyZW07XFxufVxcbi5wbC0xMCB7XFxuXFx0cGFkZGluZy1sZWZ0OiAyLjVyZW07XFxufVxcbi5wdC0wIHtcXG5cXHRwYWRkaW5nLXRvcDogMHB4O1xcbn1cXG4ucHQtMTIge1xcblxcdHBhZGRpbmctdG9wOiAzcmVtO1xcbn1cXG4ucHQtNCB7XFxuXFx0cGFkZGluZy10b3A6IDFyZW07XFxufVxcbi5wYi0yNCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDZyZW07XFxufVxcbi5wdC04IHtcXG5cXHRwYWRkaW5nLXRvcDogMnJlbTtcXG59XFxuLnB0LTUge1xcblxcdHBhZGRpbmctdG9wOiAxLjI1cmVtO1xcbn1cXG4ucGwtOCB7XFxuXFx0cGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG4ucHItOCB7XFxuXFx0cGFkZGluZy1yaWdodDogMnJlbTtcXG59XFxuLnBsLTQge1xcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuLnRleHQtY2VudGVyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50ZXh0LWxlZnQge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5hbGlnbi1taWRkbGUge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5hbGlnbi1ib3R0b20ge1xcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxufVxcbi50ZXh0LXNtIHtcXG5cXHRmb250LXNpemU6IDAuODc1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4udGV4dC14cyB7XFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG4udGV4dC14bCB7XFxuXFx0Zm9udC1zaXplOiAxLjI1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG4udGV4dC01eGwge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxuLnRleHQtMnhsIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuLnRleHQtbGcge1xcblxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcbi5mb250LWJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5mb250LXNlbWlib2xkIHtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZm9udC10aGluIHtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcbn1cXG4udXBwZXJjYXNlIHtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uaXRhbGljIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5sZWFkaW5nLXRpZ2h0IHtcXG5cXHRsaW5lLWhlaWdodDogMS4yNTtcXG59XFxuLmxlYWRpbmctbm9uZSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbi50ZXh0LXJlZC02MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDIyMCwgMzgsIDM4LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtd2hpdGUge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ncmF5LTYwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoNzUsIDg1LCA5OSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWdyYXktNzAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSg1NSwgNjUsIDgxLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtYmxhY2sge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1yZWQtNTAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgyMzksIDY4LCA2OCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWdyYXktODAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgzMSwgNDEsIDU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtZ3JheS00MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDE1NiwgMTYzLCAxNzUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ncmF5LTUwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMTA3LCAxMTQsIDEyOCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi51bmRlcmxpbmUge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4ucGxhY2Vob2xkZXItZ3JheS05MDA6Oi1tb3otcGxhY2Vob2xkZXIge1xcblxcdC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgxNywgMjQsIDM5LCB2YXIoLS10dy1wbGFjZWhvbGRlci1vcGFjaXR5KSk7XFxufVxcbi5wbGFjZWhvbGRlci1ncmF5LTkwMDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcblxcdC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgxNywgMjQsIDM5LCB2YXIoLS10dy1wbGFjZWhvbGRlci1vcGFjaXR5KSk7XFxufVxcbi5wbGFjZWhvbGRlci1ncmF5LTkwMDo6cGxhY2Vob2xkZXIge1xcblxcdC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgxNywgMjQsIDM5LCB2YXIoLS10dy1wbGFjZWhvbGRlci1vcGFjaXR5KSk7XFxufVxcbi5wbGFjZWhvbGRlci1ncmF5LTQwMDo6LW1vei1wbGFjZWhvbGRlciB7XFxuXFx0LS10dy1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDE1NiwgMTYzLCAxNzUsIHZhcigtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHkpKTtcXG59XFxuLnBsYWNlaG9sZGVyLWdyYXktNDAwOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuXFx0LS10dy1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDE1NiwgMTYzLCAxNzUsIHZhcigtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHkpKTtcXG59XFxuLnBsYWNlaG9sZGVyLWdyYXktNDAwOjpwbGFjZWhvbGRlciB7XFxuXFx0LS10dy1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDE1NiwgMTYzLCAxNzUsIHZhcigtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHkpKTtcXG59XFxuLm9wYWNpdHktMCB7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxuLm9wYWNpdHktMTAwIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4uc2hhZG93LXhsIHtcXG5cXHQtLXR3LXNoYWRvdzogMCAyMHB4IDI1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMTBweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4uc2hhZG93LWxnIHtcXG5cXHQtLXR3LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuLnNoYWRvdy1tZCB7XFxuXFx0LS10dy1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4uc2hhZG93LTJ4bCB7XFxuXFx0LS10dy1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuLnNoYWRvdyB7XFxuXFx0LS10dy1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4ub3V0bGluZS1ub25lIHtcXG5cXHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0b3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuLnJpbmctMSB7XFxuXFx0LS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XFxuXFx0LS10dy1yaW5nLXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygxcHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgIzAwMDApO1xcbn1cXG4ucmluZy1ibGFjayB7XFxuXFx0LS10dy1yaW5nLW9wYWNpdHk6IDE7XFxuXFx0LS10dy1yaW5nLWNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLXR3LXJpbmctb3BhY2l0eSkpO1xcbn1cXG4ucmluZy1vcGFjaXR5LTUge1xcblxcdC0tdHctcmluZy1vcGFjaXR5OiAwLjA1O1xcbn1cXG4udHJhbnNpdGlvbi1hbGwge1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXG5cXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxuLnRyYW5zaXRpb24tY29sb3JzIHtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGNvbG9yLCBmaWxsLCBzdHJva2U7XFxuXFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcbi50cmFuc2l0aW9uLXRyYW5zZm9ybSB7XFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcblxcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcblxcdHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xcbn1cXG4udHJhbnNpdGlvbiB7XFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCBjb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCBjb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyO1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XFxuXFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcbi5kZWxheS01MDAge1xcblxcdHRyYW5zaXRpb24tZGVsYXk6IDUwMG1zO1xcbn1cXG4uZGVsYXktMTAwMCB7XFxuXFx0dHJhbnNpdGlvbi1kZWxheTogMTAwMG1zO1xcbn1cXG4uZHVyYXRpb24tNzAwIHtcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiA3MDBtcztcXG59XFxuLmR1cmF0aW9uLTMwMCB7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxufVxcbi5kdXJhdGlvbi01MDAge1xcblxcdHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcbn1cXG4uZHVyYXRpb24tMTAwMCB7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcbn1cXG4uZHVyYXRpb24tMTAwIHtcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDBtcztcXG59XFxuLmVhc2UtaW4tb3V0IHtcXG5cXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG59XFxuLmVhc2UtaW4ge1xcblxcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcXG59XFxuOnJvb3Qge1xcbiAgLS1jLXByaW1hcnk6ICNlODNmNDM7XFxuICAtLWMtYWNjZW50OiAjM2ZlODk5O1xcbn1cXG5cXG4ucnAtaW1hZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucnAtdW5lZGl0YWJsZS1sYmwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG59XFxuXFxuLnJwLXNoYXBlcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLnJwLXNlbGVjdGVkLWlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnJwLWRlbGV0ZSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4ucnAtZGVsZXRlLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJwLWRlZmF1bHQtaW5wdXQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnJwLWRlZmF1bHQtaW5wdXQtc2VjdGlvbiBpbnB1dCB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucnAtZGVmYXVsdC1pbnB1dC1zZWN0aW9uIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjOTRiZmZmO1xcbn1cXG5cXG4ucnAtZGVmYXVsdC1pbnB1dC1zZWN0aW9uIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzk0YmZmZjtcXG59XFxuXFxuLnJwLWRlZmF1bHQtaW5wdXQtc2VjdGlvbiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM5NGJmZmY7XFxufVxcblxcbi5ycC1kZWZhdWx0LWlucHV0LXNlY3Rpb24gYSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMsIGNvbG9yIDAuNXM7XFxufVxcblxcbi5ycC1kZWZhdWx0LWlucHV0LXNlY3Rpb24gYTpob3ZlcixcXG4ucnAtZGVmYXVsdC1pbnB1dC1zZWN0aW9uIGE6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnJwLWRlZmF1bHQtc2VsZWN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xcbn1cXG4ucnAtZGVmYXVsdC1zZWxlY3Qtc2VjdGlvbiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnJwLWRlZmF1bHQtc2VsZWN0LXNlY3Rpb24gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnJwLWRlZmF1bHQtc2VsZWN0LXNlY3Rpb24gZGl2IGEge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgd2lkdGg6IDQwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiA1cHggMTBweCA1cHggMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucnAtZGVmYXVsdC1pbnB1dC1zZWN0aW9uX3NlbGVjdC55ZXM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5ycC1kZWZhdWx0LWlucHV0LXNlY3Rpb25fc2VsZWN0Lm5vOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmFubm90YXRpb24tY29udGFpbmVyIC5hbm5vdGF0aW9uLXN0ZXAtdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYW5ub3RhdGlvbi1jb250YWluZXIgLmFubm90YXRpb24tc3RlcC10ZXh0IHNwYW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcbi5hbm5vdGF0aW9uLWNvbnRhaW5lciAuYW5ub3RhdGlvbi1zdGVwLXRleHQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luLXRvcDogMS44cmVtO1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIGhlaWdodDogMXB4O1xcbn1cXG4uYW5ub3RhdGlvbi1jb250YWluZXIgcCB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5ycC1jb250YWluZXIge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjYwcHgpIHtcXG4gIC5ycC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLnJwLXN0YWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi13aWR0aDogOTYwcHg7XFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gIHdpZHRoOiA5NjBweCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucnAtYW5ub3RhdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjYwcHgpIHtcXG4gIC5ycC1hbm5vdGF0aW9ucyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5ycC1hbm5vdGF0aW9ucyAucnAtYW5ub3RhdGlvbnMtbGlzdCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgbWluLWhlaWdodDogMjYwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIH1cXG59XFxuLnJwLWFubm90YXRpb25zIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4ucnAtYW5ub3RhdGlvbnMgdWwgbGkgc3BhbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ycC1hbm5vdGF0aW9ucyB1bCBsaSBzcGFuOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ucnAtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnJwLWZvcm0gZmllbGRzZXQge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4ucnAtZm9ybSBidXR0b24uYW5ub3RhdGlvbk1vZGFsQnRuIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMzIzMjM7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxNjQwMTtcXG59XFxuLnJwLWZvcm0gYnV0dG9uLmFubm90YXRpb25Nb2RhbEJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuLnJwLWZvcm0gLnJhZGlvLWZvcm1zIC5ncm91cGVkX3JhZGlvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnJwLWZvcm0gLnJhZGlvLWZvcm1zIGxhYmVsLnJhZGlvLWNvbnRyb2wge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnJwLWZvcm0gLnJhZGlvLWZvcm1zIGxhYmVsLnJhZGlvLWNvbnRyb2wgcCB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAtMS42cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi5ycC1mb3JtIC5yYWRpby1mb3JtcyBsYWJlbC5yYWRpby1jb250cm9sIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIG1hcmdpbi10b3A6IDAuNHJlbTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1vdXQsIGJvcmRlciA1MDBtcyBlYXNlLW91dDtcXG59XFxuLnJwLWZvcm0gLnJhZGlvLWZvcm1zIGxhYmVsLnJhZGlvLWNvbnRyb2wgaW1nOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5ycC1mb3JtIC5yYWRpby1mb3JtcyBsYWJlbC5yYWRpby1jb250cm9sIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgfiBpbWcge1xcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWNvbG9yOiAjMDk0ICFpbXBvcnRhbnQ7XFxuICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQpICFpbXBvcnRhbnQ7XFxufVxcbi5ycC1mb3JtIC5zbGlkZXItZm9ybXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5ycC1mb3JtIC5zbGlkZXItZm9ybXMgLnNsaWRlci1kaXYge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5ycC1mb3JtIC5zbGlkZXItZm9ybXMgLnNsaWRlci1kaXYgZmllbGRzZXQgLnJwLXNsaWRlciB7XFxuICBtYXJnaW46IDFyZW0gMCUgMXJlbSAwJTtcXG59XFxuLnJwLWZvcm0gLnNsaWRlci1mb3JtcyAuc2xpZGVyLWRpdiBmaWVsZHNldCAucnAtc2xpZGVyIGRhdGFsaXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNzA4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcbi5ycC1mb3JtIC5zbGlkZXItZm9ybXMgLnNsaWRlci1kaXYgZmllbGRzZXQgLnJwLXNsaWRlciBpbnB1dCB7XFxuICB3aWR0aDogNzAwcHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ucnAtZm9ybSAuc2xpZGVyLWZvcm1zIC5zbGlkZXItZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA5NDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcbi5ycC1mb3JtIC5zbGlkZXItZm9ybXMgLnNsaWRlci1kZXNjcmlwdGlvbiBwIHtcXG4gIG1heC13aWR0aDogMzB2dztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5ycC1mb3JtIC5zbGlkZXItZm9ybXMgLnJhbmdlLXNsaWRlci12YWx1ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmFubm90YXRpb24tc3VibWl0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWFjY2VudCk7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgY29sb3I6ICMwMjM2MWU7XFxuICBib3JkZXItY29sb3I6ICMwYWEwNWE7XFxufVxcbi5hbm5vdGF0aW9uLXN1Ym1pdC1idG46aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhYTA1YTtcXG59XFxuXFxuLmdpZkNvbnRhaW5lciB7XFxuICB3aWR0aDogODB2dztcXG4gIG1heC13aWR0aDogNjByZW07XFxufVxcblxcbi5ob3ZlclxcXFw6Ym9yZGVyLWJsYWNrOmhvdmVyIHtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOmJnLWdyYXktOTAwOmhvdmVyIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNywgMjQsIDM5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6YmctZ3JheS04MDA6aG92ZXIge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCA0MSwgNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmhvdmVyXFxcXDpiZy1yZWQtNTAwOmhvdmVyIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzksIDY4LCA2OCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOmJnLXJlZC03MDA6aG92ZXIge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgMjgsIDI4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6dGV4dC13aGl0ZTpob3ZlciB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6dW5kZXJsaW5lOmhvdmVyIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmhvdmVyXFxcXDpzaGFkb3ctbm9uZTpob3ZlciB7XFxuXFx0LS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOnNoYWRvdy1zbTpob3ZlciB7XFxuXFx0LS10dy1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuXFxuLmZvY3VzXFxcXDpvdXRsaW5lLW5vbmU6Zm9jdXMge1xcblxcdG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cXG4uYWN0aXZlXFxcXDpvdXRsaW5lLW5vbmU6YWN0aXZlIHtcXG5cXHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0b3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuXFxuLmdyb3VwOmhvdmVyIC5ncm91cC1ob3ZlclxcXFw6ZmxleCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuXFx0LnNtXFxcXDpteC0wIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHB4O1xcblxcdFxcdG1hcmdpbi1yaWdodDogMHB4O1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOnctOFxcXFwvMTIge1xcblxcdFxcdHdpZHRoOiA2Ni42NjY2NjclO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuXFx0Lm1kXFxcXDotbXgtNCB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IC0xcmVtO1xcblxcdFxcdG1hcmdpbi1yaWdodDogLTFyZW07XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6LW1sLTEwIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogLTIuNXJlbTtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDptci0wIHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDBweDtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDptci0xMiB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAzcmVtO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOm1sLTYge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6bXItNSB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOi1tdC0xMiB7XFxuXFx0XFx0bWFyZ2luLXRvcDogLTNyZW07XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6ZmxleCB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDpoaWRkZW4ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6dy02XFxcXC8xMiB7XFxuXFx0XFx0d2lkdGg6IDUwJTtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDp3LTJcXFxcLzUge1xcblxcdFxcdHdpZHRoOiA0MCU7XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6bWF4LXctMnhsIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDQycmVtO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOmZsZXgtMSB7XFxuXFx0XFx0ZmxleDogMSAxIDAlO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOmZsZXgtcm93IHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOmZsZXgtd3JhcCB7XFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOml0ZW1zLWNlbnRlciB7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDpwLTUge1xcblxcdFxcdHBhZGRpbmc6IDEuMjVyZW07XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6cHgtMCB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAwcHg7XFxuXFx0XFx0cGFkZGluZy1yaWdodDogMHB4O1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOnB4LTQge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOnB4LTUge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMS4yNXJlbTtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOnB5LTEwIHtcXG5cXHRcXHRwYWRkaW5nLXRvcDogMi41cmVtO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6cHQtMTIge1xcblxcdFxcdHBhZGRpbmctdG9wOiAzcmVtO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOnBiLTYge1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6dGV4dC1sZWZ0IHtcXG5cXHRcXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOnRleHQtcmlnaHQge1xcblxcdFxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcblxcblxcdC5sZ1xcXFw6bXgtMjAge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiA1cmVtO1xcblxcdFxcdG1hcmdpbi1yaWdodDogNXJlbTtcXG5cXHR9XFxuXFxuXFx0LmxnXFxcXDpteC1hdXRvIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFx0fVxcblxcblxcdC5sZ1xcXFw6bWwtMTYge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiA0cmVtO1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOnctNVxcXFwvMTIge1xcblxcdFxcdHdpZHRoOiA0MS42NjY2NjclO1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOnctMVxcXFwvMyB7XFxuXFx0XFx0d2lkdGg6IDMzLjMzMzMzMyU7XFxuXFx0fVxcblxcblxcdC5sZ1xcXFw6dy00XFxcXC81IHtcXG5cXHRcXHR3aWR0aDogODAlO1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOm1heC13LTd4bCB7XFxuXFx0XFx0bWF4LXdpZHRoOiA4MHJlbTtcXG5cXHR9XFxuXFxuXFx0LmxnXFxcXDpweC0yNCB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiA2cmVtO1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDZyZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuXFxuXFx0LnhsXFxcXDptci01IHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XFxuXFx0fVxcblxcblxcdC54bFxcXFw6LW10LTIwIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAtNXJlbTtcXG5cXHR9XFxuXFxuXFx0LnhsXFxcXDptbC0zMiB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDhyZW07XFxuXFx0fVxcblxcblxcdC54bFxcXFw6dy00XFxcXC8xMiB7XFxuXFx0XFx0d2lkdGg6IDMzLjMzMzMzMyU7XFxuXFx0fVxcblxcblxcdC54bFxcXFw6dy01XFxcXC8xMiB7XFxuXFx0XFx0d2lkdGg6IDQxLjY2NjY2NyU7XFxuXFx0fVxcblxcblxcdC54bFxcXFw6dy0xXFxcXC8zIHtcXG5cXHRcXHR3aWR0aDogMzMuMzMzMzMzJTtcXG5cXHR9XFxuXFxuXFx0LnhsXFxcXDp3LTNcXFxcLzQge1xcblxcdFxcdHdpZHRoOiA3NSU7XFxuXFx0fVxcblxcblxcdC54bFxcXFw6ZmxleC1yb3cge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxuXFxuXFx0LlxcXFwzMnhsXFxcXDptbC02NCB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDE2cmVtO1xcblxcdH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiPG5vIHNvdXJjZT5cIixcIndlYnBhY2s6Ly9zcmMvcGFnZXMvX2FwcC8lM0NpbnB1dCUyMGNzcyUyMDhyemJpbSUzRVwiLFwid2VicGFjazovL3NyYy9wYWdlcy9fYXBwLyUzQ2lucHV0JTIwY3NzJTIwTWtYRW50JTNFXCIsXCJ3ZWJwYWNrOi8vc3JjL3BhZ2VzL19hcHAvZ2xvYmFscy5zY3NzXCIsXCJ3ZWJwYWNrOi8vZ2xvYmFscy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdFQUFBLENBQUEsOEZDQThGOztBQUU5Rjs7O0NBR0M7O0FBRUQ7O0NBRUM7O0FBRUQ7OztDQUdDLHNCQUFzQjtBQUN2Qjs7QUFFQTs7Q0FFQzs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQixjQUFXO0lBQVgsV0FBVztBQUNaOztBQUVBOzs7Q0FHQzs7QUFFRDtDQUNDLGlCQUFpQixFQUFFLE1BQU07Q0FDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN2Qzs7QUFFQTs7O0NBR0M7O0FBRUQ7O0NBRUM7O0FBRUQ7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7O0NBRUM7O0FBRUQ7Q0FDQzs7Ozs7Ozs7O2tCQVNpQjtBQUNsQjs7QUFFQTs7O0NBR0M7O0FBRUQ7OztDQUdDOztBQUVEO0NBQ0MsU0FBUyxFQUFFLE1BQU07Q0FDakIsY0FBYyxFQUFFLE1BQU07QUFDdkI7O0FBRUE7OztDQUdDOztBQUVEOztDQUVDOztBQUVEO0NBQ0MseUNBQWlDO1NBQWpDLGlDQUFpQztBQUNsQzs7QUFFQTs7Q0FFQzs7QUFFRDs7Q0FFQyxtQkFBbUI7QUFDcEI7O0FBRUE7OztDQUdDOztB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O0FHaW9CQTtBSGpvQkE7Q0FBQSxtQkFBQTtDQUFBLHNCQUFBO0FHcW9CQTtBSHJvQkE7Q0FBQSxnQkFBQTtDQUFBLG1CQUFBO0FHeW9CQTtBSHpvQkE7Q0FBQSxrQkFBQTtDQUFBLHFCQUFBO0FHNm9CQTtBSDdvQkE7Q0FBQSxtQkFBQTtBR2dwQkE7QUhocEJBO0NBQUEsbUJBQUE7QUdtcEJBO0FIbnBCQTtDQUFBLG1CQUFBO0FHc3BCQTtBSHRwQkE7Q0FBQSxtQkFBQTtBR3lwQkE7QUh6cEJBO0NBQUEscUJBQUE7QUc0cEJBO0FINXBCQTtDQUFBLHNCQUFBO0FHK3BCQTtBSC9wQkE7Q0FBQSxpQkFBQTtBR2txQkE7QUhscUJBO0NBQUEscUJBQUE7QUdxcUJBO0FIcnFCQTtDQUFBLHNCQUFBO0FHd3FCQTtBSHhxQkE7Q0FBQSxvQkFBQTtBRzJxQkE7QUgzcUJBO0NBQUEsbUJBQUE7QUc4cUJBO0FIOXFCQTtDQUFBLGtCQUFBO0FHaXJCQTtBSGpyQkE7Q0FBQSxrQkFBQTtBR29yQkE7QUhwckJBO0NBQUEsbUJBQUE7QUd1ckJBO0FIdnJCQTtDQUFBLHFCQUFBO0FHMHJCQTtBSDFyQkE7Q0FBQSxnQkFBQTtBRzZyQkE7QUg3ckJBO0NBQUEsa0JBQUE7QUdnc0JBO0FIaHNCQTtDQUFBLG1CQUFBO0FHbXNCQTtBSG5zQkE7Q0FBQSxnQkFBQTtBR3NzQkE7QUh0c0JBO0NBQUEsb0JBQUE7QUd5c0JBO0FIenNCQTtDQUFBLG9CQUFBO0FHNHNCQTtBSDVzQkE7Q0FBQSxpQkFBQTtBRytzQkE7QUgvc0JBO0NBQUEsa0JBQUE7QUdrdEJBO0FIbHRCQTtDQUFBLGdCQUFBO0FHcXRCQTtBSHJ0QkE7Q0FBQSxxQkFBQTtBR3d0QkE7QUh4dEJBO0NBQUEsbUJBQUE7QUcydEJBO0FIM3RCQTtDQUFBLGtCQUFBO0FHOHRCQTtBSDl0QkE7Q0FBQSxpQkFBQTtBR2l1QkE7QUhqdUJBO0NBQUEsZ0JBQUE7QUdvdUJBO0FIcHVCQTtDQUFBLG9CQUFBO0FHdXVCQTtBSHZ1QkE7Q0FBQSxhQUFBO0FHMHVCQTtBSDF1QkE7Q0FB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Q0d5ekRDOztDSHp6REQ7RUFBQSxVQUFBO0NHNnpEQzs7Q0g3ekREO0VBQUEsZ0JBQUE7Q0dpMERDOztDSGowREQ7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0NHczBEQztBQUNEOztBSHYwREE7O0NBQUE7RUFBQSxxQkFBQTtDRzYwREM7O0NINzBERDtFQUFBLGlCQUFBO0NHaTFEQzs7Q0hqMUREO0VBQUEsaUJBQUE7Q0dxMURDOztDSHIxREQ7RUFBQSxpQkFBQTtDR3kxREM7O0NIejFERDtFQUFBLGlCQUFBO0NHNjFEQzs7Q0g3MUREO0VBQUEsaUJBQUE7Q0dpMkRDOztDSGoyREQ7RUFBQSxVQUFBO0NHcTJEQzs7Q0hyMkREO0VBQUEsbUJBQUE7Q0d5MkRDO0FBQ0Q7O0FIMTJEQTs7Q0FBQTtFQUFBLGtCQUFBO0NHZzNEQztBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltudWxsLFwiLyohIG1vZGVybi1ub3JtYWxpemUgdjEuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUgKi9cXG5cXG4vKlxcbkRvY3VtZW50XFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyoqXFxuVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0LW1vei10YWItc2l6ZTogNDtcXG5cXHR0YWItc2l6ZTogNDtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZWN0aW9uc1xcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5SZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbkltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHRzeXN0ZW0tdWksXFxuXFx0XFx0LWFwcGxlLXN5c3RlbSwgLyogRmlyZWZveCBzdXBwb3J0cyB0aGlzIGJ1dCBub3QgeWV0IGBzeXN0ZW0tdWlgICovXFxuXFx0XFx0J1NlZ29lIFVJJyxcXG5cXHRcXHRSb2JvdG8sXFxuXFx0XFx0SGVsdmV0aWNhLFxcblxcdFxcdEFyaWFsLFxcblxcdFxcdHNhbnMtc2VyaWYsXFxuXFx0XFx0J0FwcGxlIENvbG9yIEVtb2ppJyxcXG5cXHRcXHQnU2Vnb2UgVUkgRW1vamknO1xcbn1cXG5cXG4vKlxcbkdyb3VwaW5nIGNvbnRlbnRcXG49PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuKi9cXG5cXG5ociB7XFxuXFx0aGVpZ2h0OiAwOyAvKiAxICovXFxuXFx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5UZXh0LWxldmVsIHNlbWFudGljc1xcbj09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnJbdGl0bGVdIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuMS4gSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4yLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0dWktbW9ub3NwYWNlLFxcblxcdFxcdFNGTW9uby1SZWd1bGFyLFxcblxcdFxcdENvbnNvbGFzLFxcblxcdFxcdCdMaWJlcmF0aW9uIE1vbm8nLFxcblxcdFxcdE1lbmxvLFxcblxcdFxcdG1vbm9zcGFjZTsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcblxcdGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG5QcmV2ZW50ICdzdWInIGFuZCAnc3VwJyBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuXFx0Zm9udC1zaXplOiA3NSU7XFxuXFx0bGluZS1oZWlnaHQ6IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG5cXHRib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuXFx0dG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuVGFidWxhciBkYXRhXFxuPT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4qL1xcblxcbnRhYmxlIHtcXG5cXHR0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcblxcdGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkZvcm1zXFxuPT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHRtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbjEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuXFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuKi9cXG5cXG46Oi1tb3otZm9jdXMtaW5uZXIge1xcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5SZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcblxcdG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsICc6aW52YWxpZCcgc3R5bGVzIGluIEZpcmVmb3guXFxuU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczN1xcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuXFx0Ym94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dCAnZmllbGRzZXQnIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmxlZ2VuZCB7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcblxcdG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gJ2luaGVyaXQnIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuXFx0Zm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkludGVyYWN0aXZlXFxuPT09PT09PT09PT1cXG4qL1xcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG5cXHRkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblwiLFwiLyoqXFxuICogTWFudWFsbHkgZm9ya2VkIGZyb20gU1VJVCBDU1MgQmFzZTogaHR0cHM6Ly9naXRodWIuY29tL3N1aXRjc3MvYmFzZVxcbiAqIEEgdGhpbiBsYXllciBvbiB0b3Agb2Ygbm9ybWFsaXplLmNzcyB0aGF0IHByb3ZpZGVzIGEgc3RhcnRpbmcgcG9pbnQgbW9yZVxcbiAqIHN1aXRhYmxlIGZvciB3ZWIgYXBwbGljYXRpb25zLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4gKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIFdvcmsgYXJvdW5kIGEgRmlyZWZveC9JRSBidWcgd2hlcmUgdGhlIHRyYW5zcGFyZW50IGBidXR0b25gIGJhY2tncm91bmRcXG4gKiByZXN1bHRzIGluIGEgbG9zcyBvZiB0aGUgZGVmYXVsdCBgYnV0dG9uYCBmb2N1cyBzdHlsZXMuXFxuICovXFxuXFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQ7XFxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBUYWlsd2luZCBjdXN0b20gcmVzZXQgc3R5bGVzXFxuICovXFxuXFxuLyoqXFxuICogMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgKHdpdGggVGFpbHdpbmQncyBkZWZhdWx0XFxuICogICAgc2Fucy1zZXJpZiBmb250IHN0YWNrIGFzIGEgZmFsbGJhY2spIGFzIGEgc2FuZSBkZWZhdWx0LlxcbiAqIDIuIFVzZSBUYWlsd2luZCdzIGRlZmF1bHQgXFxcIm5vcm1hbFxcXCIgbGluZS1oZWlnaHQgc28gdGhlIHVzZXIgaXNuJ3QgZm9yY2VkXFxuICogICAgdG8gb3ZlcnJpZGUgaXQgdG8gZW5zdXJlIGNvbnNpc3RlbmN5IGV2ZW4gd2hlbiB1c2luZyB0aGUgZGVmYXVsdCB0aGVtZS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5zYW5zJywgdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiKTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKipcXG4gKiBJbmhlcml0IGZvbnQtZmFtaWx5IGFuZCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXNcXG4gKiBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguXFxuICpcXG4gKiAgICBXZSB1c2VkIHRvIHNldCB0aGlzIGluIHRoZSBodG1sIGVsZW1lbnQgYW5kIGluaGVyaXQgZnJvbVxcbiAqICAgIHRoZSBwYXJlbnQgZWxlbWVudCBmb3IgZXZlcnl0aGluZyBlbHNlLiBUaGlzIGNhdXNlZCBpc3N1ZXNcXG4gKiAgICBpbiBzaGFkb3ctZG9tLWVuaGFuY2VkIGVsZW1lbnRzIGxpa2UgPGRldGFpbHM+IHdoZXJlIHRoZSBjb250ZW50XFxuICogICAgaXMgd3JhcHBlZCBieSBhIGRpdiB3aXRoIGJveC1zaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzRcXG4gKlxcbiAqXFxuICogMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguXFxuICpcXG4gKiAgICBCeSBkZWZhdWx0LCB0aGUgd2F5IHRoZSBicm93c2VyIHNwZWNpZmllcyB0aGF0IGFuIGVsZW1lbnQgc2hvdWxkIGhhdmUgbm9cXG4gKiAgICBib3JkZXIgaXMgYnkgc2V0dGluZyBpdCdzIGJvcmRlci1zdHlsZSB0byBgbm9uZWAgaW4gdGhlIHVzZXItYWdlbnRcXG4gKiAgICBzdHlsZXNoZWV0LlxcbiAqXFxuICogICAgSW4gb3JkZXIgdG8gZWFzaWx5IGFkZCBib3JkZXJzIHRvIGVsZW1lbnRzIGJ5IGp1c3Qgc2V0dGluZyB0aGUgYGJvcmRlci13aWR0aGBcXG4gKiAgICBwcm9wZXJ0eSwgd2UgY2hhbmdlIHRoZSBkZWZhdWx0IGJvcmRlci1zdHlsZSBmb3IgYWxsIGVsZW1lbnRzIHRvIGBzb2xpZGAsIGFuZFxcbiAqICAgIHVzZSBib3JkZXItd2lkdGggdG8gaGlkZSB0aGVtIGluc3RlYWQuIFRoaXMgd2F5IG91ciBgYm9yZGVyYCB1dGlsaXRpZXMgb25seVxcbiAqICAgIG5lZWQgdG8gc2V0IHRoZSBgYm9yZGVyLXdpZHRoYCBwcm9wZXJ0eSBpbnN0ZWFkIG9mIHRoZSBlbnRpcmUgYGJvcmRlcmBcXG4gKiAgICBzaG9ydGhhbmQsIG1ha2luZyBvdXIgYm9yZGVyIHV0aWxpdGllcyBtdWNoIG1vcmUgc3RyYWlnaHRmb3J3YXJkIHRvIGNvbXBvc2UuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTZcXG4gKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6IHRoZW1lKCdib3JkZXJDb2xvci5ERUZBVUxUJywgY3VycmVudENvbG9yKTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbiAqIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHRcXG4gKi9cXG5cXG5ociB7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbi8qKlxcbiAqIFVuZG8gdGhlIGBib3JkZXItc3R5bGU6IG5vbmVgIHJlc2V0IHRoYXQgTm9ybWFsaXplIGFwcGxpZXMgdG8gaW1hZ2VzIHNvIHRoYXRcXG4gKiBvdXIgYGJvcmRlci17d2lkdGh9YCB1dGlsaXRpZXMgaGF2ZSB0aGUgZXhwZWN0ZWQgZWZmZWN0LlxcbiAqXFxuICogVGhlIE5vcm1hbGl6ZSByZXNldCBpcyB1bm5lY2Vzc2FyeSBmb3IgdXMgc2luY2Ugd2UgZGVmYXVsdCB0aGUgYm9yZGVyLXdpZHRoXFxuICogdG8gMCBvbiBhbGwgZWxlbWVudHMuXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvaXNzdWVzLzM2MlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogdGhlbWUoJ2NvbG9ycy5ncmF5LjQwMCcsICNhMWExYWEpO1xcbn1cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mXFxuICogb3B0LW91dC5cXG4gKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCBmb3JtIGVsZW1lbnQgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIGZvcmdldCB0b1xcbiAqIHN0eWxlIGV4cGxpY2l0bHkgc28geW91IGRvbid0IGluYWR2ZXJ0ZW50bHkgaW50cm9kdWNlXFxuICogc3R5bGVzIHRoYXQgZGV2aWF0ZSBmcm9tIHlvdXIgZGVzaWduIHN5c3RlbS4gVGhlc2Ugc3R5bGVzXFxuICogc3VwcGxlbWVudCBhIHBhcnRpYWwgcmVzZXQgdGhhdCBpcyBhbHJlYWR5IGFwcGxpZWQgYnlcXG4gKiBub3JtYWxpemUuY3NzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFVzZSB0aGUgY29uZmlndXJlZCAnbW9ubycgZm9udCBmYW1pbHkgZm9yIGVsZW1lbnRzIHRoYXRcXG4gKiBhcmUgZXhwZWN0ZWQgdG8gYmUgcmVuZGVyZWQgd2l0aCBhIG1vbm9zcGFjZSBmb250LCBmYWxsaW5nXFxuICogYmFjayB0byB0aGUgc3lzdGVtIG1vbm9zcGFjZSBzdGFjayBpZiB0aGVyZSBpcyBubyBjb25maWd1cmVkXFxuICogJ21vbm8nIGZvbnQgZmFtaWx5LlxcbiAqL1xcblxcbnByZSxcXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5tb25vJywgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2UpO1xcbn1cXG5cXG4vKipcXG4gKiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdCBhcyB0aGF0J3NcXG4gKiB0aGUgYmVoYXZpb3IgeW91IHdhbnQgYWxtb3N0IGFsbCBvZiB0aGUgdGltZS4gSW5zcGlyZWQgYnlcXG4gKiBDU1MgUmVtZWR5LCB3aXRoIGBzdmdgIGFkZGVkIGFzIHdlbGwuXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxuICovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi8qKlxcbiAqIENvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZVxcbiAqIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxuICovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXCIsXCIvKiEgdGFpbHdpbmRjc3MgdjIuMS40IHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbSAqLy8qISBtb2Rlcm4tbm9ybWFsaXplIHYxLjEuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplICovXFxuXFxuLypcXG5Eb2N1bWVudFxcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5Vc2UgYSBiZXR0ZXIgYm94IG1vZGVsIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qKlxcblVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUgKG9waW5pb25hdGVkKS5cXG4qL1xcblxcbmh0bWwge1xcblxcdC1tb3otdGFiLXNpemU6IDQ7XFxuXFx0LW8tdGFiLXNpemU6IDQ7XFxuXFx0ICAgdGFiLXNpemU6IDQ7XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4qL1xcblxcbmh0bWwge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2VjdGlvbnNcXG49PT09PT09PVxcbiovXFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG5JbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbiovXFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0c3lzdGVtLXVpLFxcblxcdFxcdC1hcHBsZS1zeXN0ZW0sIC8qIEZpcmVmb3ggc3VwcG9ydHMgdGhpcyBidXQgbm90IHlldCBgc3lzdGVtLXVpYCAqL1xcblxcdFxcdCdTZWdvZSBVSScsXFxuXFx0XFx0Um9ib3RvLFxcblxcdFxcdEhlbHZldGljYSxcXG5cXHRcXHRBcmlhbCxcXG5cXHRcXHRzYW5zLXNlcmlmLFxcblxcdFxcdCdBcHBsZSBDb2xvciBFbW9qaScsXFxuXFx0XFx0J1NlZ29lIFVJIEVtb2ppJztcXG59XFxuXFxuLypcXG5Hcm91cGluZyBjb250ZW50XFxuPT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbiovXFxuXFxuaHIge1xcblxcdGhlaWdodDogMDsgLyogMSAqL1xcblxcdGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG49PT09PT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuXFx0LXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuXFx0ICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuMS4gSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4yLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0dWktbW9ub3NwYWNlLFxcblxcdFxcdFNGTW9uby1SZWd1bGFyLFxcblxcdFxcdENvbnNvbGFzLFxcblxcdFxcdCdMaWJlcmF0aW9uIE1vbm8nLFxcblxcdFxcdE1lbmxvLFxcblxcdFxcdG1vbm9zcGFjZTsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcblxcdGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG5QcmV2ZW50ICdzdWInIGFuZCAnc3VwJyBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuXFx0Zm9udC1zaXplOiA3NSU7XFxuXFx0bGluZS1oZWlnaHQ6IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG5cXHRib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuXFx0dG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuVGFidWxhciBkYXRhXFxuPT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4qL1xcblxcbnRhYmxlIHtcXG5cXHR0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcblxcdGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkZvcm1zXFxuPT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHRtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbjEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuXFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuKi9cXG5cXG46Oi1tb3otZm9jdXMtaW5uZXIge1xcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5SZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcblxcdG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsICc6aW52YWxpZCcgc3R5bGVzIGluIEZpcmVmb3guXFxuU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczN1xcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuXFx0Ym94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dCAnZmllbGRzZXQnIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmxlZ2VuZCB7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcblxcdG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gJ2luaGVyaXQnIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuXFx0Zm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkludGVyYWN0aXZlXFxuPT09PT09PT09PT1cXG4qL1xcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG5cXHRkaXNwbGF5OiBsaXN0LWl0ZW07XFxufS8qKlxcbiAqIE1hbnVhbGx5IGZvcmtlZCBmcm9tIFNVSVQgQ1NTIEJhc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9zdWl0Y3NzL2Jhc2VcXG4gKiBBIHRoaW4gbGF5ZXIgb24gdG9wIG9mIG5vcm1hbGl6ZS5jc3MgdGhhdCBwcm92aWRlcyBhIHN0YXJ0aW5nIHBvaW50IG1vcmVcXG4gKiBzdWl0YWJsZSBmb3Igd2ViIGFwcGxpY2F0aW9ucy5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXFxuICovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBXb3JrIGFyb3VuZCBhIEZpcmVmb3gvSUUgYnVnIHdoZXJlIHRoZSB0cmFuc3BhcmVudCBgYnV0dG9uYCBiYWNrZ3JvdW5kXFxuICogcmVzdWx0cyBpbiBhIGxvc3Mgb2YgdGhlIGRlZmF1bHQgYGJ1dHRvbmAgZm9jdXMgc3R5bGVzLlxcbiAqL1xcblxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkO1xcbiAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogVGFpbHdpbmQgY3VzdG9tIHJlc2V0IHN0eWxlc1xcbiAqL1xcblxcbi8qKlxcbiAqIDEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5ICh3aXRoIFRhaWx3aW5kJ3MgZGVmYXVsdFxcbiAqICAgIHNhbnMtc2VyaWYgZm9udCBzdGFjayBhcyBhIGZhbGxiYWNrKSBhcyBhIHNhbmUgZGVmYXVsdC5cXG4gKiAyLiBVc2UgVGFpbHdpbmQncyBkZWZhdWx0IFxcXCJub3JtYWxcXFwiIGxpbmUtaGVpZ2h0IHNvIHRoZSB1c2VyIGlzbid0IGZvcmNlZFxcbiAqICAgIHRvIG92ZXJyaWRlIGl0IHRvIGVuc3VyZSBjb25zaXN0ZW5jeSBldmVuIHdoZW4gdXNpbmcgdGhlIGRlZmF1bHQgdGhlbWUuXFxuICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAyICovXFxufVxcblxcblxcbi8qKlxcbiAqIEluaGVyaXQgZm9udC1mYW1pbHkgYW5kIGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhc1xcbiAqIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiAqL1xcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC5cXG4gKlxcbiAqICAgIFdlIHVzZWQgdG8gc2V0IHRoaXMgaW4gdGhlIGh0bWwgZWxlbWVudCBhbmQgaW5oZXJpdCBmcm9tXFxuICogICAgdGhlIHBhcmVudCBlbGVtZW50IGZvciBldmVyeXRoaW5nIGVsc2UuIFRoaXMgY2F1c2VkIGlzc3Vlc1xcbiAqICAgIGluIHNoYWRvdy1kb20tZW5oYW5jZWQgZWxlbWVudHMgbGlrZSA8ZGV0YWlscz4gd2hlcmUgdGhlIGNvbnRlbnRcXG4gKiAgICBpcyB3cmFwcGVkIGJ5IGEgZGl2IHdpdGggYm94LXNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YC5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNFxcbiAqXFxuICpcXG4gKiAyLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC5cXG4gKlxcbiAqICAgIEJ5IGRlZmF1bHQsIHRoZSB3YXkgdGhlIGJyb3dzZXIgc3BlY2lmaWVzIHRoYXQgYW4gZWxlbWVudCBzaG91bGQgaGF2ZSBub1xcbiAqICAgIGJvcmRlciBpcyBieSBzZXR0aW5nIGl0J3MgYm9yZGVyLXN0eWxlIHRvIGBub25lYCBpbiB0aGUgdXNlci1hZ2VudFxcbiAqICAgIHN0eWxlc2hlZXQuXFxuICpcXG4gKiAgICBJbiBvcmRlciB0byBlYXNpbHkgYWRkIGJvcmRlcnMgdG8gZWxlbWVudHMgYnkganVzdCBzZXR0aW5nIHRoZSBgYm9yZGVyLXdpZHRoYFxcbiAqICAgIHByb3BlcnR5LCB3ZSBjaGFuZ2UgdGhlIGRlZmF1bHQgYm9yZGVyLXN0eWxlIGZvciBhbGwgZWxlbWVudHMgdG8gYHNvbGlkYCwgYW5kXFxuICogICAgdXNlIGJvcmRlci13aWR0aCB0byBoaWRlIHRoZW0gaW5zdGVhZC4gVGhpcyB3YXkgb3VyIGBib3JkZXJgIHV0aWxpdGllcyBvbmx5XFxuICogICAgbmVlZCB0byBzZXQgdGhlIGBib3JkZXItd2lkdGhgIHByb3BlcnR5IGluc3RlYWQgb2YgdGhlIGVudGlyZSBgYm9yZGVyYFxcbiAqICAgIHNob3J0aGFuZCwgbWFraW5nIG91ciBib3JkZXIgdXRpbGl0aWVzIG11Y2ggbW9yZSBzdHJhaWdodGZvcndhcmQgdG8gY29tcG9zZS5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNlxcbiAqL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbiAqIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHRcXG4gKi9cXG5cXG5ociB7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbi8qKlxcbiAqIFVuZG8gdGhlIGBib3JkZXItc3R5bGU6IG5vbmVgIHJlc2V0IHRoYXQgTm9ybWFsaXplIGFwcGxpZXMgdG8gaW1hZ2VzIHNvIHRoYXRcXG4gKiBvdXIgYGJvcmRlci17d2lkdGh9YCB1dGlsaXRpZXMgaGF2ZSB0aGUgZXhwZWN0ZWQgZWZmZWN0LlxcbiAqXFxuICogVGhlIE5vcm1hbGl6ZSByZXNldCBpcyB1bm5lY2Vzc2FyeSBmb3IgdXMgc2luY2Ugd2UgZGVmYXVsdCB0aGUgYm9yZGVyLXdpZHRoXFxuICogdG8gMCBvbiBhbGwgZWxlbWVudHMuXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvaXNzdWVzLzM2MlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiAjOWNhM2FmO1xcbn1cXG5cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6ICM5Y2EzYWY7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiAjOWNhM2FmO1xcbn1cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mXFxuICogb3B0LW91dC5cXG4gKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCBmb3JtIGVsZW1lbnQgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIGZvcmdldCB0b1xcbiAqIHN0eWxlIGV4cGxpY2l0bHkgc28geW91IGRvbid0IGluYWR2ZXJ0ZW50bHkgaW50cm9kdWNlXFxuICogc3R5bGVzIHRoYXQgZGV2aWF0ZSBmcm9tIHlvdXIgZGVzaWduIHN5c3RlbS4gVGhlc2Ugc3R5bGVzXFxuICogc3VwcGxlbWVudCBhIHBhcnRpYWwgcmVzZXQgdGhhdCBpcyBhbHJlYWR5IGFwcGxpZWQgYnlcXG4gKiBub3JtYWxpemUuY3NzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFVzZSB0aGUgY29uZmlndXJlZCAnbW9ubycgZm9udCBmYW1pbHkgZm9yIGVsZW1lbnRzIHRoYXRcXG4gKiBhcmUgZXhwZWN0ZWQgdG8gYmUgcmVuZGVyZWQgd2l0aCBhIG1vbm9zcGFjZSBmb250LCBmYWxsaW5nXFxuICogYmFjayB0byB0aGUgc3lzdGVtIG1vbm9zcGFjZSBzdGFjayBpZiB0aGVyZSBpcyBubyBjb25maWd1cmVkXFxuICogJ21vbm8nIGZvbnQgZmFtaWx5LlxcbiAqL1xcblxcbnByZSxcXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLyoqXFxuICogTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQgYXMgdGhhdCdzXFxuICogdGhlIGJlaGF2aW9yIHlvdSB3YW50IGFsbW9zdCBhbGwgb2YgdGhlIHRpbWUuIEluc3BpcmVkIGJ5XFxuICogQ1NTIFJlbWVkeSwgd2l0aCBgc3ZnYCBhZGRlZCBhcyB3ZWxsLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKipcXG4gKiBDb25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmVcXG4gKiB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbioge1xcblxcdC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxuXFx0LS10dy1yaW5nLWluc2V0OiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxuXFx0LS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcblxcdC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuXFx0LS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG5cXHQtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcblxcdC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG59XFxuLmNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcblxcdC5jb250YWluZXIge1xcblxcdFxcdG1heC13aWR0aDogNjQwcHg7XFxuXFx0fVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXG5cXHQuY29udGFpbmVyIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDc2OHB4O1xcblxcdH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcblxcblxcdC5jb250YWluZXIge1xcblxcdFxcdG1heC13aWR0aDogMTAyNHB4O1xcblxcdH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcblxcblxcdC5jb250YWluZXIge1xcblxcdFxcdG1heC13aWR0aDogMTI4MHB4O1xcblxcdH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcblxcblxcdC5jb250YWluZXIge1xcblxcdFxcdG1heC13aWR0aDogMTUzNnB4O1xcblxcdH1cXG59XFxuLmZpeGVkIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxufVxcbi5yZWxhdGl2ZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYWJzb2x1dGUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLnN0YXRpYyB7XFxuXFx0cG9zaXRpb246IHN0YXRpYztcXG59XFxuLnRvcC0wIHtcXG5cXHR0b3A6IDBweDtcXG59XFxuLmxlZnQtMCB7XFxuXFx0bGVmdDogMHB4O1xcbn1cXG4uYm90dG9tLTAge1xcblxcdGJvdHRvbTogMHB4O1xcbn1cXG4uei0wIHtcXG5cXHR6LWluZGV4OiAwO1xcbn1cXG4uei0xMCB7XFxuXFx0ei1pbmRleDogMTA7XFxufVxcbi56LTIwIHtcXG5cXHR6LWluZGV4OiAyMDtcXG59XFxuLm14LWF1dG8ge1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLm15LTEyIHtcXG5cXHRtYXJnaW4tdG9wOiAzcmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcbi5teS0xIHtcXG5cXHRtYXJnaW4tdG9wOiAwLjI1cmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVxcbi5teC0xNiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDRyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiA0cmVtO1xcbn1cXG4ubXgtNSB7XFxuXFx0bWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xcbn1cXG4ubXktNSB7XFxuXFx0bWFyZ2luLXRvcDogMS4yNXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbn1cXG4ubXktNCB7XFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4ubXktMTAge1xcblxcdG1hcmdpbi10b3A6IDIuNXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxufVxcbi5tYi0zMiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogOHJlbTtcXG59XFxuLm1iLTQge1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tdC01IHtcXG5cXHRtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG4ubWwtMiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuLm1iLTYge1xcblxcdG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuLi1tYi0yIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xcbn1cXG4ubWwtYXV0byB7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5tYi0yIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi5tYi01IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbn1cXG4ubXItMiB7XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5tdC0xIHtcXG5cXHRtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbn1cXG4uLW10LTY0IHtcXG5cXHRtYXJnaW4tdG9wOiAtMTZyZW07XFxufVxcbi5tdC0xMCB7XFxuXFx0bWFyZ2luLXRvcDogMi41cmVtO1xcbn1cXG4ubWItMTIge1xcblxcdG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcbi5tci01IHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XFxufVxcbi5tdC00IHtcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4ubXQtMiB7XFxuXFx0bWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG4ubWItOCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLm10LTEyIHtcXG5cXHRtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG4ubWItNjQge1xcblxcdG1hcmdpbi1ib3R0b206IDE2cmVtO1xcbn1cXG4uLW10LTEge1xcblxcdG1hcmdpbi10b3A6IC0wLjI1cmVtO1xcbn1cXG4ubWwtOCB7XFxuXFx0bWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcbi4tbWwtMTIge1xcblxcdG1hcmdpbi1sZWZ0OiAtM3JlbTtcXG59XFxuLm10LTE2IHtcXG5cXHRtYXJnaW4tdG9wOiA0cmVtO1xcbn1cXG4ubXItMSB7XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uLW10LTIge1xcblxcdG1hcmdpbi10b3A6IC0wLjVyZW07XFxufVxcbi5tci04IHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcbi4tbXQtMTYge1xcblxcdG1hcmdpbi10b3A6IC00cmVtO1xcbn1cXG4ubWwtMCB7XFxuXFx0bWFyZ2luLWxlZnQ6IDBweDtcXG59XFxuLm1sLTUge1xcblxcdG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xcbn1cXG4uZmxleCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuLmJsb2NrIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuLmlubGluZS1ibG9jayB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZ3JpZCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG59XFxuLmlubGluZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lO1xcbn1cXG4uaGlkZGVuIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG4uaC0wIHtcXG5cXHRoZWlnaHQ6IDBweDtcXG59XFxuLmgtc2NyZWVuIHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uaC01IHtcXG5cXHRoZWlnaHQ6IDEuMjVyZW07XFxufVxcbi5oLTMge1xcblxcdGhlaWdodDogMC43NXJlbTtcXG59XFxuLmgtMTIge1xcblxcdGhlaWdodDogM3JlbTtcXG59XFxuLmgtOTYge1xcblxcdGhlaWdodDogMjRyZW07XFxufVxcbi5oLTcge1xcblxcdGhlaWdodDogMS43NXJlbTtcXG59XFxuLnctMTBcXFxcLzEyIHtcXG5cXHR3aWR0aDogODMuMzMzMzMzJTtcXG59XFxuLnctZnVsbCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcbi53LTJcXFxcLzMge1xcblxcdHdpZHRoOiA2Ni42NjY2NjclO1xcbn1cXG4udy0xXFxcXC8zIHtcXG5cXHR3aWR0aDogMzMuMzMzMzMzJTtcXG59XFxuLnctMCB7XFxuXFx0d2lkdGg6IDBweDtcXG59XFxuLnctc2NyZWVuIHtcXG5cXHR3aWR0aDogMTAwdnc7XFxufVxcbi53LTY0IHtcXG5cXHR3aWR0aDogMTZyZW07XFxufVxcbi53LTMyIHtcXG5cXHR3aWR0aDogOHJlbTtcXG59XFxuLnctNSB7XFxuXFx0d2lkdGg6IDEuMjVyZW07XFxufVxcbi53LTI4IHtcXG5cXHR3aWR0aDogN3JlbTtcXG59XFxuLnctMyB7XFxuXFx0d2lkdGg6IDAuNzVyZW07XFxufVxcbi53LTcyIHtcXG5cXHR3aWR0aDogMThyZW07XFxufVxcbi53LTk2IHtcXG5cXHR3aWR0aDogMjRyZW07XFxufVxcbi53LTgwIHtcXG5cXHR3aWR0aDogMjByZW07XFxufVxcbi53LTcge1xcblxcdHdpZHRoOiAxLjc1cmVtO1xcbn1cXG4ubWF4LXctNXhsIHtcXG5cXHRtYXgtd2lkdGg6IDY0cmVtO1xcbn1cXG4ubWF4LXctbWQge1xcblxcdG1heC13aWR0aDogMjhyZW07XFxufVxcbi5tYXgtdy00eGwge1xcblxcdG1heC13aWR0aDogNTZyZW07XFxufVxcbi5mbGV4LWdyb3cge1xcblxcdGZsZXgtZ3JvdzogMTtcXG59XFxuLnRyYW5zZm9ybSB7XFxuXFx0LS10dy10cmFuc2xhdGUteDogMDtcXG5cXHQtLXR3LXRyYW5zbGF0ZS15OiAwO1xcblxcdC0tdHctcm90YXRlOiAwO1xcblxcdC0tdHctc2tldy14OiAwO1xcblxcdC0tdHctc2tldy15OiAwO1xcblxcdC0tdHctc2NhbGUteDogMTtcXG5cXHQtLXR3LXNjYWxlLXk6IDE7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXR3LXRyYW5zbGF0ZS14KSkgdHJhbnNsYXRlWSh2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcbi5yb3RhdGUtNDUge1xcblxcdC0tdHctcm90YXRlOiA0NWRlZztcXG59XFxuLnJvdGF0ZS0xODAge1xcblxcdC0tdHctcm90YXRlOiAxODBkZWc7XFxufVxcbi5jdXJzb3ItcG9pbnRlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY3Vyc29yLWRlZmF1bHQge1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLnNlbGVjdC1ub25lIHtcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdCAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0ICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uYXBwZWFyYW5jZS1ub25lIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0ICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcblxcdCAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuLmZsZXgtY29sIHtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZmxleC1yb3cge1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5mbGV4LWNvbC1yZXZlcnNlIHtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcbi5mbGV4LXdyYXAge1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmNvbnRlbnQtY2VudGVyIHtcXG5cXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5pdGVtcy1jZW50ZXIge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LWVuZCB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmp1c3RpZnktYmV0d2VlbiB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uanVzdGlmeS1hcm91bmQge1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uc2VsZi1jZW50ZXIge1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnJvdW5kZWQge1xcblxcdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcbi5yb3VuZGVkLW1kIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG59XFxuLnJvdW5kZWQtZnVsbCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogOTk5OXB4O1xcbn1cXG4uYm9yZGVyIHtcXG5cXHRib3JkZXItd2lkdGg6IDFweDtcXG59XFxuLmJvcmRlci0wIHtcXG5cXHRib3JkZXItd2lkdGg6IDBweDtcXG59XFxuLmJvcmRlci00IHtcXG5cXHRib3JkZXItd2lkdGg6IDRweDtcXG59XFxuLmJvcmRlci10IHtcXG5cXHRib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcbi5ib3JkZXItYiB7XFxuXFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbn1cXG4uYm9yZGVyLWwtMiB7XFxuXFx0Ym9yZGVyLWxlZnQtd2lkdGg6IDJweDtcXG59XFxuLmJvcmRlci1zb2xpZCB7XFxuXFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuLmJvcmRlci1ibGFjayB7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1ncmF5LTkwMCB7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMTcsIDI0LCAzOSwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1yZWQtNTAwIHtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgyMzksIDY4LCA2OCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1yZWQtNjAwIHtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgyMjAsIDM4LCAzOCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci10cmFuc3BhcmVudCB7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmJnLXdoaXRlIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ncmF5LTIwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LCAyMzEsIDIzNSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctZ3JheS04MDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCA0MSwgNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXJlZC02MDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMCwgMzgsIDM4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1yZWQtNTAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzksIDY4LCA2OCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctdHJhbnNwYXJlbnQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uYmctYmxhY2sge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyYXktMTAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDI0NCwgMjQ2LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5maWxsLWN1cnJlbnQge1xcblxcdGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuLnAtNCB7XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuLnAtMiB7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcbn1cXG4ucC01IHtcXG5cXHRwYWRkaW5nOiAxLjI1cmVtO1xcbn1cXG4ucHgtNSB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XFxufVxcbi5weS0yIHtcXG5cXHRwYWRkaW5nLXRvcDogMC41cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi5weC0wIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwcHg7XFxufVxcbi5weS0xMiB7XFxuXFx0cGFkZGluZy10b3A6IDNyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDNyZW07XFxufVxcbi5weC00IHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDFyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLnB5LTUge1xcblxcdHBhZGRpbmctdG9wOiAxLjI1cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xcbn1cXG4ucHktNCB7XFxuXFx0cGFkZGluZy10b3A6IDFyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi5weC0xMiB7XFxuXFx0cGFkZGluZy1sZWZ0OiAzcmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDNyZW07XFxufVxcbi5weS0xMCB7XFxuXFx0cGFkZGluZy10b3A6IDIuNXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcbn1cXG4ucHktMjAge1xcblxcdHBhZGRpbmctdG9wOiA1cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiA1cmVtO1xcbn1cXG4ucHgtMSB7XFxuXFx0cGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5weS0zIHtcXG5cXHRwYWRkaW5nLXRvcDogMC43NXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG59XFxuLnB4LTIge1xcblxcdHBhZGRpbmctbGVmdDogMC41cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuLnB5LTEge1xcblxcdHBhZGRpbmctdG9wOiAwLjI1cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbn1cXG4ucGItNCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi5wYi0xMiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDNyZW07XFxufVxcbi5wci0yMCB7XFxuXFx0cGFkZGluZy1yaWdodDogNXJlbTtcXG59XFxuLnB0LTYge1xcblxcdHBhZGRpbmctdG9wOiAxLjVyZW07XFxufVxcbi5wbC0xMCB7XFxuXFx0cGFkZGluZy1sZWZ0OiAyLjVyZW07XFxufVxcbi5wdC0wIHtcXG5cXHRwYWRkaW5nLXRvcDogMHB4O1xcbn1cXG4ucHQtMTIge1xcblxcdHBhZGRpbmctdG9wOiAzcmVtO1xcbn1cXG4ucHQtNCB7XFxuXFx0cGFkZGluZy10b3A6IDFyZW07XFxufVxcbi5wYi0yNCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDZyZW07XFxufVxcbi5wdC04IHtcXG5cXHRwYWRkaW5nLXRvcDogMnJlbTtcXG59XFxuLnB0LTUge1xcblxcdHBhZGRpbmctdG9wOiAxLjI1cmVtO1xcbn1cXG4ucGwtOCB7XFxuXFx0cGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG4ucHItOCB7XFxuXFx0cGFkZGluZy1yaWdodDogMnJlbTtcXG59XFxuLnBsLTQge1xcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuLnRleHQtY2VudGVyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50ZXh0LWxlZnQge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5hbGlnbi1taWRkbGUge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5hbGlnbi1ib3R0b20ge1xcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxufVxcbi50ZXh0LXNtIHtcXG5cXHRmb250LXNpemU6IDAuODc1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4udGV4dC14cyB7XFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG4udGV4dC14bCB7XFxuXFx0Zm9udC1zaXplOiAxLjI1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG4udGV4dC01eGwge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxuLnRleHQtMnhsIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuLnRleHQtbGcge1xcblxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcbi5mb250LWJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5mb250LXNlbWlib2xkIHtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZm9udC10aGluIHtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcbn1cXG4udXBwZXJjYXNlIHtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uaXRhbGljIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5sZWFkaW5nLXRpZ2h0IHtcXG5cXHRsaW5lLWhlaWdodDogMS4yNTtcXG59XFxuLmxlYWRpbmctbm9uZSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbi50ZXh0LXJlZC02MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDIyMCwgMzgsIDM4LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtd2hpdGUge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ncmF5LTYwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoNzUsIDg1LCA5OSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWdyYXktNzAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSg1NSwgNjUsIDgxLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtYmxhY2sge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1yZWQtNTAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgyMzksIDY4LCA2OCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWdyYXktODAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgzMSwgNDEsIDU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtZ3JheS00MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDE1NiwgMTYzLCAxNzUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ncmF5LTUwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMTA3LCAxMTQsIDEyOCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi51bmRlcmxpbmUge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4ucGxhY2Vob2xkZXItZ3JheS05MDA6Oi1tb3otcGxhY2Vob2xkZXIge1xcblxcdC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgxNywgMjQsIDM5LCB2YXIoLS10dy1wbGFjZWhvbGRlci1vcGFjaXR5KSk7XFxufVxcbi5wbGFjZWhvbGRlci1ncmF5LTkwMDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcblxcdC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgxNywgMjQsIDM5LCB2YXIoLS10dy1wbGFjZWhvbGRlci1vcGFjaXR5KSk7XFxufVxcbi5wbGFjZWhvbGRlci1ncmF5LTkwMDo6cGxhY2Vob2xkZXIge1xcblxcdC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgxNywgMjQsIDM5LCB2YXIoLS10dy1wbGFjZWhvbGRlci1vcGFjaXR5KSk7XFxufVxcbi5wbGFjZWhvbGRlci1ncmF5LTQwMDo6LW1vei1wbGFjZWhvbGRlciB7XFxuXFx0LS10dy1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDE1NiwgMTYzLCAxNzUsIHZhcigtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHkpKTtcXG59XFxuLnBsYWNlaG9sZGVyLWdyYXktNDAwOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuXFx0LS10dy1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDE1NiwgMTYzLCAxNzUsIHZhcigtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHkpKTtcXG59XFxuLnBsYWNlaG9sZGVyLWdyYXktNDAwOjpwbGFjZWhvbGRlciB7XFxuXFx0LS10dy1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDE1NiwgMTYzLCAxNzUsIHZhcigtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHkpKTtcXG59XFxuLm9wYWNpdHktMCB7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxuLm9wYWNpdHktMTAwIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4uc2hhZG93LXhsIHtcXG5cXHQtLXR3LXNoYWRvdzogMCAyMHB4IDI1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMTBweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4uc2hhZG93LWxnIHtcXG5cXHQtLXR3LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuLnNoYWRvdy1tZCB7XFxuXFx0LS10dy1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4uc2hhZG93LTJ4bCB7XFxuXFx0LS10dy1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuLnNoYWRvdyB7XFxuXFx0LS10dy1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4ub3V0bGluZS1ub25lIHtcXG5cXHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0b3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuLnJpbmctMSB7XFxuXFx0LS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XFxuXFx0LS10dy1yaW5nLXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygxcHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgIzAwMDApO1xcbn1cXG4ucmluZy1ibGFjayB7XFxuXFx0LS10dy1yaW5nLW9wYWNpdHk6IDE7XFxuXFx0LS10dy1yaW5nLWNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLXR3LXJpbmctb3BhY2l0eSkpO1xcbn1cXG4ucmluZy1vcGFjaXR5LTUge1xcblxcdC0tdHctcmluZy1vcGFjaXR5OiAwLjA1O1xcbn1cXG4udHJhbnNpdGlvbi1hbGwge1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXG5cXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxuLnRyYW5zaXRpb24tY29sb3JzIHtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGNvbG9yLCBmaWxsLCBzdHJva2U7XFxuXFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcbi50cmFuc2l0aW9uLXRyYW5zZm9ybSB7XFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcblxcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcblxcdHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xcbn1cXG4udHJhbnNpdGlvbiB7XFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCBjb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCBjb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyO1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XFxuXFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcbi5kZWxheS01MDAge1xcblxcdHRyYW5zaXRpb24tZGVsYXk6IDUwMG1zO1xcbn1cXG4uZGVsYXktMTAwMCB7XFxuXFx0dHJhbnNpdGlvbi1kZWxheTogMTAwMG1zO1xcbn1cXG4uZHVyYXRpb24tNzAwIHtcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiA3MDBtcztcXG59XFxuLmR1cmF0aW9uLTMwMCB7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxufVxcbi5kdXJhdGlvbi01MDAge1xcblxcdHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcbn1cXG4uZHVyYXRpb24tMTAwMCB7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcbn1cXG4uZHVyYXRpb24tMTAwIHtcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDBtcztcXG59XFxuLmVhc2UtaW4tb3V0IHtcXG5cXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG59XFxuLmVhc2UtaW4ge1xcblxcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcXG59XFxuOnJvb3Qge1xcbiAgLS1jLXByaW1hcnk6ICNlODNmNDM7XFxuICAtLWMtYWNjZW50OiAjM2ZlODk5O1xcbn1cXG5cXG4ucnAtaW1hZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucnAtdW5lZGl0YWJsZS1sYmwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG59XFxuXFxuLnJwLXNoYXBlcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLnJwLXNlbGVjdGVkLWlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnJwLWRlbGV0ZSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4ucnAtZGVsZXRlLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJwLWRlZmF1bHQtaW5wdXQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnJwLWRlZmF1bHQtaW5wdXQtc2VjdGlvbiBpbnB1dCB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucnAtZGVmYXVsdC1pbnB1dC1zZWN0aW9uIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjOTRiZmZmO1xcbn1cXG5cXG4ucnAtZGVmYXVsdC1pbnB1dC1zZWN0aW9uIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzk0YmZmZjtcXG59XFxuXFxuLnJwLWRlZmF1bHQtaW5wdXQtc2VjdGlvbiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM5NGJmZmY7XFxufVxcblxcbi5ycC1kZWZhdWx0LWlucHV0LXNlY3Rpb24gYSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMsIGNvbG9yIDAuNXM7XFxufVxcblxcbi5ycC1kZWZhdWx0LWlucHV0LXNlY3Rpb24gYTpob3ZlcixcXG4ucnAtZGVmYXVsdC1pbnB1dC1zZWN0aW9uIGE6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnJwLWRlZmF1bHQtc2VsZWN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xcbn1cXG4ucnAtZGVmYXVsdC1zZWxlY3Qtc2VjdGlvbiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnJwLWRlZmF1bHQtc2VsZWN0LXNlY3Rpb24gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnJwLWRlZmF1bHQtc2VsZWN0LXNlY3Rpb24gZGl2IGEge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgd2lkdGg6IDQwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiA1cHggMTBweCA1cHggMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucnAtZGVmYXVsdC1pbnB1dC1zZWN0aW9uX3NlbGVjdC55ZXM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5ycC1kZWZhdWx0LWlucHV0LXNlY3Rpb25fc2VsZWN0Lm5vOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmFubm90YXRpb24tY29udGFpbmVyIC5hbm5vdGF0aW9uLXN0ZXAtdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYW5ub3RhdGlvbi1jb250YWluZXIgLmFubm90YXRpb24tc3RlcC10ZXh0IHNwYW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcbi5hbm5vdGF0aW9uLWNvbnRhaW5lciAuYW5ub3RhdGlvbi1zdGVwLXRleHQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luLXRvcDogMS44cmVtO1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIGhlaWdodDogMXB4O1xcbn1cXG4uYW5ub3RhdGlvbi1jb250YWluZXIgcCB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5ycC1jb250YWluZXIge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjYwcHgpIHtcXG4gIC5ycC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLnJwLXN0YWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi13aWR0aDogOTYwcHg7XFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gIHdpZHRoOiA5NjBweCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucnAtYW5ub3RhdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjYwcHgpIHtcXG4gIC5ycC1hbm5vdGF0aW9ucyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5ycC1hbm5vdGF0aW9ucyAucnAtYW5ub3RhdGlvbnMtbGlzdCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgbWluLWhlaWdodDogMjYwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIH1cXG59XFxuLnJwLWFubm90YXRpb25zIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4ucnAtYW5ub3RhdGlvbnMgdWwgbGkgc3BhbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ycC1hbm5vdGF0aW9ucyB1bCBsaSBzcGFuOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ucnAtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnJwLWZvcm0gZmllbGRzZXQge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4ucnAtZm9ybSBidXR0b24uYW5ub3RhdGlvbk1vZGFsQnRuIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMzIzMjM7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxNjQwMTtcXG59XFxuLnJwLWZvcm0gYnV0dG9uLmFubm90YXRpb25Nb2RhbEJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuLnJwLWZvcm0gLnJhZGlvLWZvcm1zIC5ncm91cGVkX3JhZGlvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnJwLWZvcm0gLnJhZGlvLWZvcm1zIGxhYmVsLnJhZGlvLWNvbnRyb2wge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnJwLWZvcm0gLnJhZGlvLWZvcm1zIGxhYmVsLnJhZGlvLWNvbnRyb2wgcCB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAtMS42cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi5ycC1mb3JtIC5yYWRpby1mb3JtcyBsYWJlbC5yYWRpby1jb250cm9sIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIG1hcmdpbi10b3A6IDAuNHJlbTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1vdXQsIGJvcmRlciA1MDBtcyBlYXNlLW91dDtcXG59XFxuLnJwLWZvcm0gLnJhZGlvLWZvcm1zIGxhYmVsLnJhZGlvLWNvbnRyb2wgaW1nOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5ycC1mb3JtIC5yYWRpby1mb3JtcyBsYWJlbC5yYWRpby1jb250cm9sIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgfiBpbWcge1xcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWNvbG9yOiAjMDk0ICFpbXBvcnRhbnQ7XFxuICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQpICFpbXBvcnRhbnQ7XFxufVxcbi5ycC1mb3JtIC5zbGlkZXItZm9ybXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5ycC1mb3JtIC5zbGlkZXItZm9ybXMgLnNsaWRlci1kaXYge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5ycC1mb3JtIC5zbGlkZXItZm9ybXMgLnNsaWRlci1kaXYgZmllbGRzZXQgLnJwLXNsaWRlciB7XFxuICBtYXJnaW46IDFyZW0gMCUgMXJlbSAwJTtcXG59XFxuLnJwLWZvcm0gLnNsaWRlci1mb3JtcyAuc2xpZGVyLWRpdiBmaWVsZHNldCAucnAtc2xpZGVyIGRhdGFsaXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNzA4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcbi5ycC1mb3JtIC5zbGlkZXItZm9ybXMgLnNsaWRlci1kaXYgZmllbGRzZXQgLnJwLXNsaWRlciBpbnB1dCB7XFxuICB3aWR0aDogNzAwcHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ucnAtZm9ybSAuc2xpZGVyLWZvcm1zIC5zbGlkZXItZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA5NDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcbi5ycC1mb3JtIC5zbGlkZXItZm9ybXMgLnNsaWRlci1kZXNjcmlwdGlvbiBwIHtcXG4gIG1heC13aWR0aDogMzB2dztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5ycC1mb3JtIC5zbGlkZXItZm9ybXMgLnJhbmdlLXNsaWRlci12YWx1ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmFubm90YXRpb24tc3VibWl0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWFjY2VudCk7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgY29sb3I6ICMwMjM2MWU7XFxuICBib3JkZXItY29sb3I6ICMwYWEwNWE7XFxufVxcbi5hbm5vdGF0aW9uLXN1Ym1pdC1idG46aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhYTA1YTtcXG59XFxuXFxuLmdpZkNvbnRhaW5lciB7XFxuICB3aWR0aDogODB2dztcXG4gIG1heC13aWR0aDogNjByZW07XFxufVxcblxcbi5ob3ZlclxcXFw6Ym9yZGVyLWJsYWNrOmhvdmVyIHtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOmJnLWdyYXktOTAwOmhvdmVyIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNywgMjQsIDM5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6YmctZ3JheS04MDA6aG92ZXIge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCA0MSwgNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmhvdmVyXFxcXDpiZy1yZWQtNTAwOmhvdmVyIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzksIDY4LCA2OCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOmJnLXJlZC03MDA6aG92ZXIge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgMjgsIDI4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6dGV4dC13aGl0ZTpob3ZlciB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6dW5kZXJsaW5lOmhvdmVyIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmhvdmVyXFxcXDpzaGFkb3ctbm9uZTpob3ZlciB7XFxuXFx0LS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOnNoYWRvdy1zbTpob3ZlciB7XFxuXFx0LS10dy1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuXFxuLmZvY3VzXFxcXDpvdXRsaW5lLW5vbmU6Zm9jdXMge1xcblxcdG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cXG4uYWN0aXZlXFxcXDpvdXRsaW5lLW5vbmU6YWN0aXZlIHtcXG5cXHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0b3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuXFxuLmdyb3VwOmhvdmVyIC5ncm91cC1ob3ZlclxcXFw6ZmxleCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuXFx0LnNtXFxcXDpteC0wIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHB4O1xcblxcdFxcdG1hcmdpbi1yaWdodDogMHB4O1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOnctOFxcXFwvMTIge1xcblxcdFxcdHdpZHRoOiA2Ni42NjY2NjclO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuXFx0Lm1kXFxcXDotbXgtNCB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IC0xcmVtO1xcblxcdFxcdG1hcmdpbi1yaWdodDogLTFyZW07XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6LW1sLTEwIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogLTIuNXJlbTtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDptci0wIHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDBweDtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDptci0xMiB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAzcmVtO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOm1sLTYge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6bXItNSB7XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOi1tdC0xMiB7XFxuXFx0XFx0bWFyZ2luLXRvcDogLTNyZW07XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6ZmxleCB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDpoaWRkZW4ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6dy02XFxcXC8xMiB7XFxuXFx0XFx0d2lkdGg6IDUwJTtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDp3LTJcXFxcLzUge1xcblxcdFxcdHdpZHRoOiA0MCU7XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6bWF4LXctMnhsIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDQycmVtO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOmZsZXgtMSB7XFxuXFx0XFx0ZmxleDogMSAxIDAlO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOmZsZXgtcm93IHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOmZsZXgtd3JhcCB7XFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOml0ZW1zLWNlbnRlciB7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDpwLTUge1xcblxcdFxcdHBhZGRpbmc6IDEuMjVyZW07XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6cHgtMCB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAwcHg7XFxuXFx0XFx0cGFkZGluZy1yaWdodDogMHB4O1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOnB4LTQge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOnB4LTUge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMS4yNXJlbTtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOnB5LTEwIHtcXG5cXHRcXHRwYWRkaW5nLXRvcDogMi41cmVtO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6cHQtMTIge1xcblxcdFxcdHBhZGRpbmctdG9wOiAzcmVtO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOnBiLTYge1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6dGV4dC1sZWZ0IHtcXG5cXHRcXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOnRleHQtcmlnaHQge1xcblxcdFxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcblxcblxcdC5sZ1xcXFw6bXgtMjAge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiA1cmVtO1xcblxcdFxcdG1hcmdpbi1yaWdodDogNXJlbTtcXG5cXHR9XFxuXFxuXFx0LmxnXFxcXDpteC1hdXRvIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFx0fVxcblxcblxcdC5sZ1xcXFw6bWwtMTYge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiA0cmVtO1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOnctNVxcXFwvMTIge1xcblxcdFxcdHdpZHRoOiA0MS42NjY2NjclO1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOnctMVxcXFwvMyB7XFxuXFx0XFx0d2lkdGg6IDMzLjMzMzMzMyU7XFxuXFx0fVxcblxcblxcdC5sZ1xcXFw6dy00XFxcXC81IHtcXG5cXHRcXHR3aWR0aDogODAlO1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOm1heC13LTd4bCB7XFxuXFx0XFx0bWF4LXdpZHRoOiA4MHJlbTtcXG5cXHR9XFxuXFxuXFx0LmxnXFxcXDpweC0yNCB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiA2cmVtO1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDZyZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuXFxuXFx0LnhsXFxcXDptci01IHtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XFxuXFx0fVxcblxcblxcdC54bFxcXFw6LW10LTIwIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAtNXJlbTtcXG5cXHR9XFxuXFxuXFx0LnhsXFxcXDptbC0zMiB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDhyZW07XFxuXFx0fVxcblxcblxcdC54bFxcXFw6dy00XFxcXC8xMiB7XFxuXFx0XFx0d2lkdGg6IDMzLjMzMzMzMyU7XFxuXFx0fVxcblxcblxcdC54bFxcXFw6dy01XFxcXC8xMiB7XFxuXFx0XFx0d2lkdGg6IDQxLjY2NjY2NyU7XFxuXFx0fVxcblxcblxcdC54bFxcXFw6dy0xXFxcXC8zIHtcXG5cXHRcXHR3aWR0aDogMzMuMzMzMzMzJTtcXG5cXHR9XFxuXFxuXFx0LnhsXFxcXDp3LTNcXFxcLzQge1xcblxcdFxcdHdpZHRoOiA3NSU7XFxuXFx0fVxcblxcblxcdC54bFxcXFw6ZmxleC1yb3cge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxuXFxuXFx0LlxcXFwzMnhsXFxcXDptbC02NCB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDE2cmVtO1xcblxcdH1cXG59XCIsXCJAdGFpbHdpbmQgYmFzZTtcXHJcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXHJcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcclxcblxcclxcbi8vICR3aGl0ZTogI2ZmZjtcXHJcXG4vLyAkYmxhY2s6ICMyMzIzMjM7XFxyXFxuLy8gJGJsYWNrLTI6ICMyYjJiMmI7XFxyXFxuLy8gJGdyYXk6ICM4ZDhkOGQ7XFxyXFxuLy8gJHJlZDogI2U4M2Y0MztcXHJcXG4vLyAkYWNjZW50OiAjM2ZlODk5O1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tYy1wcmltYXJ5OiAjZTgzZjQzO1xcclxcbiAgLS1jLWFjY2VudDogIzNmZTg5OTtcXHJcXG59XFxyXFxuXFxyXFxuLy9Bbm5vdGF0aW9uIFRvb2xcXHJcXG5cXHJcXG4vLyBQYWNrYWdlXFxyXFxuLnJwLWltYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnJwLXVuZWRpdGFibGUtbGJsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5ycC1zaGFwZXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxyXFxufVxcclxcblxcclxcbi5ycC1zZWxlY3RlZC1pbnB1dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5ycC1kZWxldGUge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBmaWxsOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJwLWRlbGV0ZS1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ycC1kZWZhdWx0LWlucHV0LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5ycC1kZWZhdWx0LWlucHV0LXNlY3Rpb24gaW5wdXQge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJwLWRlZmF1bHQtaW5wdXQtc2VjdGlvbiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6ICM5NGJmZmY7XFxyXFxufVxcclxcblxcclxcbi5ycC1kZWZhdWx0LWlucHV0LXNlY3Rpb24gYSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAvLyBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cywgY29sb3IgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLnJwLWRlZmF1bHQtaW5wdXQtc2VjdGlvbiBhOmhvdmVyLFxcclxcbi5ycC1kZWZhdWx0LWlucHV0LXNlY3Rpb24gYTphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ucnAtZGVmYXVsdC1zZWxlY3Qtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcclxcbiAgei1pbmRleDogMTAwICFpbXBvcnRhbnQ7XFxyXFxuICBwIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcbiAgZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGEge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICB3aWR0aDogNDAlO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgbWFyZ2luOiA1cHggMTBweCA1cHggMHB4O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucnAtZGVmYXVsdC1pbnB1dC1zZWN0aW9uX3NlbGVjdC55ZXM6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcbi5ycC1kZWZhdWx0LWlucHV0LXNlY3Rpb25fc2VsZWN0Lm5vOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gLnJwLWRlZmF1bHQtaW5wdXQtc2VjdGlvbl9zZWxlY3QueWVzLWFjdGl2ZSB7XFxyXFxuLy8gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4vLyB9XFxyXFxuXFxyXFxuLy8gLnJwLWRlZmF1bHQtaW5wdXQtc2VjdGlvbl9zZWxlY3Qubm8tYWN0aXZlIHtcXHJcXG4vLyAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4vLyB9XFxyXFxuXFxyXFxuLy9DdXN0b21cXHJcXG4uYW5ub3RhdGlvbi1jb250YWluZXIge1xcclxcbiAgLmFubm90YXRpb24tc3RlcC10ZXh0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgc3BhbiB7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcXHJcXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgIC8vIHotaW5kZXg6IDI7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgJjphZnRlciB7XFxyXFxuICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDEuOHJlbTtcXHJcXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXHJcXG4gICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnJwLWNvbnRhaW5lciB7XFxyXFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxyXFxuICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjYwcHgpIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcbi5ycC1zdGFnZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtaW4td2lkdGg6IDk2MHB4O1xcclxcbiAgbWluLWhlaWdodDogNjAwcHg7XFxyXFxuICB3aWR0aDogOTYwcHggIWltcG9ydGFudDtcXHJcXG4gIGhlaWdodDogNjAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnJwLWFubm90YXRpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gIC8vIG1hcmdpbi10b3A6IC0zMHB4O1xcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI2MHB4KSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgLnJwLWFubm90YXRpb25zLWxpc3Qge1xcclxcbiAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgICAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXHJcXG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXHJcXG4gICAgICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG4gICAgICBtaW4taGVpZ2h0OiAyNjBweDtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGxpIHtcXHJcXG4gICAgICBzcGFuIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnJwLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmaWVsZHNldCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIGJ1dHRvbi5hbm5vdGF0aW9uTW9kYWxCdG4ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjMyMzIzO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDExMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxLCAxMDAsIDEpO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLnJhZGlvLWZvcm1zIHtcXHJcXG4gICAgLmdyb3VwZWRfcmFkaW8ge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICBsYWJlbC5yYWRpby1jb250cm9sIHtcXHJcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgLy8gbWFyZ2luOiAxJSAwJSAxJSAwJTtcXHJcXG4gICAgICBwIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xLjZyZW07XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgaW1nIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICAgICAgb3BhY2l0eTogMC44O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMC40cmVtO1xcclxcbiAgICAgICAgLy8gbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLW91dCwgYm9yZGVyIDUwMG1zIGVhc2Utb3V0O1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC8vIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgICAgIC8vICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIC8vICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIC8vICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAvLyAgIC8vIHdpZHRoOiAxcHg7XFxyXFxuICAgICAgLy8gICAvLyBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAvLyAgIC8vIGxlZnQ6IC0xMDAwcHg7XFxyXFxuICAgICAgLy8gICAvLyB0b3A6IC0xMDAwcHg7XFxyXFxuICAgICAgLy8gfVxcclxcbiAgICAgIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCB+IGltZyB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6ICMwOTQgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNCkgIWltcG9ydGFudDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5zbGlkZXItZm9ybXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIC5zbGlkZXItZGl2IHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgZmllbGRzZXQge1xcclxcbiAgICAgICAgLnJwLXNsaWRlciB7XFxyXFxuICAgICAgICAgIG1hcmdpbjogMXJlbSAwJSAxcmVtIDAlO1xcclxcbiAgICAgICAgICBkYXRhbGlzdCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNzA4cHg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcXHJcXG4gICAgICAgICAgICAvLyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNsaWRlci1kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgd2lkdGg6IDk0MHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICAgICAgcCB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDMwdnc7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmFuZ2Utc2xpZGVyLXZhbHVlIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG5cXHJcXG4gICAgICAvLyAmOmFmdGVyIHtcXHJcXG4gICAgICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAvLyAgIHRvcDogOHB4O1xcclxcbiAgICAgIC8vICAgbGVmdDogLTdweDtcXHJcXG4gICAgICAvLyAgIHdpZHRoOiAwO1xcclxcbiAgICAgIC8vICAgaGVpZ2h0OiAwO1xcclxcbiAgICAgIC8vICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICAgIC8vICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdmFyaWFibGVzLiRibGFjaztcXHJcXG4gICAgICAvLyAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAvLyAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgIC8vIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLy8gbWFyZ2luOiAwJSAwJSAwJSAxMCU7XFxyXFxuICAvLyBidXR0b24ge1xcclxcbiAgLy8gICBtYXJnaW46IDIwJSAwJSAxJSA4MCU7XFxyXFxuICAvLyB9XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uLXN1Ym1pdC1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1hY2NlbnQpO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIGNvbG9yOiAjMDIzNjFlO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMGFhMDVhO1xcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhYTA1YTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmdpZkNvbnRhaW5lcntcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgbWF4LXdpZHRoOiA2MHJlbTtcXHJcXG59XFxyXFxuLy8gLm92ZXJmbG93TGlzdCB7XFxyXFxuLy8gfVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=