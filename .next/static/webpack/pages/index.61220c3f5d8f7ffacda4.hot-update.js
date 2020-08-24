webpackHotUpdate_N_E("pages/index",{

/***/ "./contextStore/index.tsx":
/*!********************************!*\
  !*** ./contextStore/index.tsx ***!
  \********************************/
/*! exports provided: Store, ContextWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContextWrapper\", function() { return ContextWrapper; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/home/james/Documents/dev/nxt/contextStore/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar Store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(\"\");\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case \"change\":\n      return action;\n\n    default:\n      return state;\n  }\n};\n\nvar ContextWrapper = function ContextWrapper(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducer, \"Asafuah\"),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  return __jsx(Store.Provider, {\n    value: {\n      state: state,\n      dispatch: dispatch\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 3\n    }\n  }, children);\n};\n\n_s(ContextWrapper, \"kNwipxiO0s/pBjxyHZXAw5xTiLo=\");\n\n_c = ContextWrapper;\n\nvar _c;\n\n$RefreshReg$(_c, \"ContextWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dFN0b3JlL2luZGV4LnRzeD9lMTdkIl0sIm5hbWVzIjpbIlN0b3JlIiwiY3JlYXRlQ29udGV4dCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDb250ZXh0V3JhcHBlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBR08sSUFBTUEsS0FBSyxHQUFHQywyREFBYSxDQUFlLEVBQWYsQ0FBM0I7O0FBRVAsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2xDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNDLFNBQUssUUFBTDtBQUNDLGFBQU9ELE1BQVA7O0FBQ0Q7QUFDQyxhQUFPRCxLQUFQO0FBSkY7QUFNQSxDQVBEOztBQVNPLElBQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsb0JBQ3JCQyx3REFBVSxDQUFDTixPQUFELEVBQVUsU0FBVixDQURXO0FBQUEsTUFDeENDLEtBRHdDO0FBQUEsTUFDakNNLFFBRGlDOztBQUUvQyxTQUNDLE1BQUMsS0FBRCxDQUFPLFFBQVA7QUFBZ0IsU0FBSyxFQUFFO0FBQUVOLFdBQUssRUFBTEEsS0FBRjtBQUFTTSxjQUFRLEVBQVJBO0FBQVQsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2Q0YsUUFBN0MsQ0FERDtBQUdBLENBTE07O0dBQU1ELGM7O0tBQUFBLGMiLCJmaWxlIjoiLi9jb250ZXh0U3RvcmUvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3RhdCB9IGZyb20gXCJmc1wiO1xuXG5leHBvcnQgY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0PHN0cmluZyB8IGFueT4oXCJcIik7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBcImNoYW5nZVwiOlxuXHRcdFx0cmV0dXJuIGFjdGlvbjtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgQ29udGV4dFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBcIkFzYWZ1YWhcIik7XG5cdHJldHVybiAoXG5cdFx0PFN0b3JlLlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT57Y2hpbGRyZW59PC9TdG9yZS5Qcm92aWRlcj5cblx0KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contextStore/index.tsx\n");

/***/ })

})