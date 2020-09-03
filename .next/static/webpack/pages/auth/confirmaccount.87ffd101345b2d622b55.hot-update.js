webpackHotUpdate_N_E("pages/auth/confirmaccount",{

/***/ "./pages/auth/confirmaccount.tsx":
/*!***************************************!*\
  !*** ./pages/auth/confirmaccount.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/james/Documents/dev/cp-fe/pages/auth/confirmaccount.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar ConfirmAccount = function ConfirmAccount() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      code = _useState[0],\n      setCode = _useState[1];\n\n  var myRef = react__WEBPACK_IMPORTED_MODULE_2__[\"createRef\"];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      code1 = _useState2[0],\n      setCode1 = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      code2 = _useState3[0],\n      setCode2 = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      code3 = _useState4[0],\n      setCode3 = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      code4 = _useState5[0],\n      setCode4 = _useState5[1];\n\n  var autotab = function autotab(current, to) {\n    if (current.getAttribute && current.value.length == current.getAttribute(\"maxlength\")) {\n      to.focus();\n    }\n  };\n\n  var submitCode = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var rs;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(\"http://51.116.114.155:8080/auth/keyinput/\", {\n                integer_key: \"\".concat(code1).concat(code2).concat(code3).concat(code4)\n              });\n\n            case 3:\n              rs = _context.sent;\n              _context.t0 = console;\n              _context.next = 7;\n              return rs.json();\n\n            case 7:\n              _context.t1 = _context.sent;\n\n              _context.t0.log.call(_context.t0, _context.t1);\n\n              _context.next = 14;\n              break;\n\n            case 11:\n              _context.prev = 11;\n              _context.t2 = _context[\"catch\"](0);\n              console.log(_context.t2);\n\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 11]]);\n    }));\n\n    return function submitCode() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"/auth.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"wrapper\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"row\",\n    style: {\n      margin: \"0 40px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"col-12\",\n    style: {\n      textAlign: \"center\",\n      alignContent: \"center\",\n      alignItems: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    style: {\n      fontSize: 30,\n      fontWeight: \"bolder\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 15\n    }\n  }, \"Enter code for verification\"), __jsx(\"form\", {\n    name: \"confirmation_code\",\n    style: {\n      width: \"100%\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    maxLength: 1,\n    size: 1,\n    min: \"0\",\n    max: \"9\",\n    name: \"number_1\",\n    pattern: \"[0-9]{1}\",\n    style: {\n      margin: \"20px 10px 30px 0px\",\n      textAlign: \"center\",\n      fontSize: 24\n    },\n    className: \"verificationbox\",\n    value: code1,\n    onChange: function onChange(e) {\n      return setCode1(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 19\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    maxLength: 1,\n    size: 1,\n    min: \"0\",\n    max: \"9\",\n    name: \"number_2\",\n    pattern: \"[0-9]{1}\",\n    style: {\n      margin: \"20px 10px 30px 0px\",\n      textAlign: \"center\",\n      fontSize: 24\n    },\n    className: \"verificationbox\",\n    value: code2,\n    onChange: function onChange(e) {\n      return setCode2(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 19\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    maxLength: 1,\n    size: 1,\n    min: \"0\",\n    max: \"9\",\n    name: \"number_3\",\n    pattern: \"[0-9]{1}\",\n    style: {\n      margin: \"20px 10px 30px 0px\",\n      textAlign: \"center\",\n      fontSize: 24\n    },\n    className: \"verificationbox\",\n    value: code3,\n    onChange: function onChange(e) {\n      return setCode3(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 19\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    maxLength: 1,\n    size: 1,\n    min: \"0\",\n    max: \"9\",\n    name: \"number_4\",\n    pattern: \"[0-9]{1}\",\n    style: {\n      margin: \"20px 10px 30px 0px\",\n      textAlign: \"center\",\n      fontSize: 24\n    },\n    className: \"verificationbox\",\n    value: code4,\n    onChange: function onChange(e) {\n      return setCode4(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 19\n    }\n  })))), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    variant: \"primary\",\n    type: \"submit\",\n    block: true,\n    size: \"lg\",\n    className: \"signup-btn\",\n    onClick: submitCode,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 13\n    }\n  }, \"Continue\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"col-12 text-center mt-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 13\n    }\n  }, \"If you don't receive the code within 1 minute, tap below to resend it\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 15\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 17\n    }\n  }, \"Resend\")))))));\n};\n\n_s(ConfirmAccount, \"oZ9AE3TlLBLQisH9HYnSmK9DHM4=\");\n\n_c = ConfirmAccount;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConfirmAccount);\n\nvar _c;\n\n$RefreshReg$(_c, \"ConfirmAccount\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9jb25maXJtYWNjb3VudC50c3g/MzgyNiJdLCJuYW1lcyI6WyJDb25maXJtQWNjb3VudCIsInVzZVN0YXRlIiwiY29kZSIsInNldENvZGUiLCJteVJlZiIsImNyZWF0ZVJlZiIsImNvZGUxIiwic2V0Q29kZTEiLCJjb2RlMiIsInNldENvZGUyIiwiY29kZTMiLCJzZXRDb2RlMyIsImNvZGU0Iiwic2V0Q29kZTQiLCJhdXRvdGFiIiwiY3VycmVudCIsInRvIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJsZW5ndGgiLCJmb2N1cyIsInN1Ym1pdENvZGUiLCJheGlvcyIsInBvc3QiLCJpbnRlZ2VyX2tleSIsInJzIiwiY29uc29sZSIsImpzb24iLCJsb2ciLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJhbGlnbkNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwid2lkdGgiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUNwQkMsSUFEb0I7QUFBQSxNQUNkQyxPQURjOztBQUUzQixNQUFNQyxLQUFLLEdBQUdDLCtDQUFkOztBQUYyQixtQkFHREosc0RBQVEsQ0FBQyxFQUFELENBSFA7QUFBQSxNQUdwQkssS0FIb0I7QUFBQSxNQUdiQyxRQUhhOztBQUFBLG1CQUlETixzREFBUSxDQUFDLEVBQUQsQ0FKUDtBQUFBLE1BSXBCTyxLQUpvQjtBQUFBLE1BSWJDLFFBSmE7O0FBQUEsbUJBS0RSLHNEQUFRLENBQUMsRUFBRCxDQUxQO0FBQUEsTUFLcEJTLEtBTG9CO0FBQUEsTUFLYkMsUUFMYTs7QUFBQSxtQkFNRFYsc0RBQVEsQ0FBQyxFQUFE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ckIsYzs7S0FBQUEsYztBQW1KU0EsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2NvbmZpcm1hY2NvdW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IENvbmZpcm1BY2NvdW50ID0gKCkgPT4ge1xuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgbXlSZWYgPSBjcmVhdGVSZWY7XG4gIGNvbnN0IFtjb2RlMSwgc2V0Q29kZTFdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb2RlMiwgc2V0Q29kZTJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb2RlMywgc2V0Q29kZTNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb2RlNCwgc2V0Q29kZTRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGF1dG90YWIgPSAoY3VycmVudCwgdG8pID0+IHtcbiAgICBpZiAoXG4gICAgICBjdXJyZW50LmdldEF0dHJpYnV0ZSAmJlxuICAgICAgY3VycmVudC52YWx1ZS5sZW5ndGggPT0gY3VycmVudC5nZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIilcbiAgICApIHtcbiAgICAgIHRvLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdENvZGUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJzOiBhbnkgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBcImh0dHA6Ly81MS4xMTYuMTE0LjE1NTo4MDgwL2F1dGgva2V5aW5wdXQvXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBpbnRlZ2VyX2tleTogYCR7Y29kZTF9JHtjb2RlMn0ke2NvZGUzfSR7Y29kZTR9YCxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHJzLmpzb24oKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9hdXRoLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IFwiMCA0MHB4XCIgfX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMlwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMzAsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgRW50ZXIgY29kZSBmb3IgdmVyaWZpY2F0aW9uXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGZvcm0gbmFtZT1cImNvbmZpcm1hdGlvbl9jb2RlXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezF9XG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezF9XG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCI5XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm51bWJlcl8xXCJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldezF9XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMjBweCAxMHB4IDMwcHggMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmVyaWZpY2F0aW9uYm94XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvZGUxfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvZGUxKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxfVxuICAgICAgICAgICAgICAgICAgICBzaXplPXsxfVxuICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiOVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJudW1iZXJfMlwiXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XXsxfVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjIwcHggMTBweCAzMHB4IDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjQsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZlcmlmaWNhdGlvbmJveFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb2RlMn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb2RlMihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MX1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17MX1cbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIG1heD1cIjlcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibnVtYmVyXzNcIlxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV17MX1cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIyMHB4IDEwcHggMzBweCAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2ZXJpZmljYXRpb25ib3hcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29kZTN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29kZTMoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezF9XG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezF9XG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCI5XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm51bWJlcl80XCJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldezF9XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMjBweCAxMHB4IDMwcHggMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmVyaWZpY2F0aW9uYm94XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvZGU0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvZGU0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lnbnVwLWJ0blwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdENvZGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbnRpbnVlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXIgbXQtM1wiPlxuICAgICAgICAgICAgICBJZiB5b3UgZG9uJ3QgcmVjZWl2ZSB0aGUgY29kZSB3aXRoaW4gMSBtaW51dGUsIHRhcCBiZWxvdyB0byByZXNlbmRcbiAgICAgICAgICAgICAgaXRcbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPGE+UmVzZW5kPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1BY2NvdW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/confirmaccount.tsx\n");

/***/ })

})