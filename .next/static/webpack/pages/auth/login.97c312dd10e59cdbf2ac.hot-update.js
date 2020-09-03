webpackHotUpdate_N_E("pages/auth/login",{

/***/ "./pages/auth/login.tsx":
/*!******************************!*\
  !*** ./pages/auth/login.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_endpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/endpoints */ \"./lib/endpoints/index.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/james/Documents/dev/cp-fe/pages/auth/login.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar Loader = function Loader() {\n  return __jsx(\"span\", {\n    className: \"spinner-border spinner-border-sm\",\n    role: \"status\",\n    \"aria-hidden\": \"true\",\n    style: {\n      width: \"1.5rem\",\n      height: \"1.5rem\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }\n  });\n};\n\n_c = Loader;\n\nvar Login = function Login() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      isRegistered = _useState2[0],\n      setIsRegistered = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      isInputValid = _useState3[0],\n      setIsInputValid = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      isLoggedIn = _useState4[0],\n      setIsLoggedIn = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      promptBody = _useState5[0],\n      setPromptBody = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      linkTo = _useState6[0],\n      setLinkTo = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      linkText = _useState7[0],\n      setLinkText = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      authentication_property = _useState8[0],\n      setaAthenticationProperty = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      password = _useState9[0],\n      setPassword = _useState9[1];\n\n  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loading = _useState10[0],\n      setLoading = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      status = _useState11[0],\n      setStatus = _useState11[1];\n\n  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"blue\"),\n      statusColor = _useState12[0],\n      setStatusColor = _useState12[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var handleClose = function handleClose() {\n    return setShow(false);\n  };\n\n  var handleShow = function handleShow() {\n    return setShow(true);\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n      var result;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              setLoading(true);\n              setStatusColor(\"blue\");\n              setStatus(\"Please wait...\");\n              _context.prev = 4;\n              _context.next = 7;\n              return new _lib_endpoints__WEBPACK_IMPORTED_MODULE_7__[\"Auth\"]().login(authentication_property, password);\n\n            case 7:\n              result = _context.sent;\n\n              if (result.status === 200) {\n                setLoading(false);\n                console.log(\"RESULT:\", result);\n                setStatusColor(\"blue\");\n                setStatus(\"Authentication success\");\n                setTimeout(function () {\n                  // go to landing page\n                  window.localStorage.setItem(\"cp-a\", JSON.stringify(result.data));\n                  router.push(\"/blog\"); //   setPromptBody(\"Replace this prompt with landing page\");\n                  //   setShow(true);\n                  //   setLoading(false);\n                }, 250);\n              }\n\n              _context.next = 16;\n              break;\n\n            case 11:\n              _context.prev = 11;\n              _context.t0 = _context[\"catch\"](4);\n              console.log(_context.t0.message);\n\n              if (_context.t0.message === \"Request failed with status code 401\") {\n                // bad credentials\n                console.log(\"BAD CREDENTIALS\");\n                setStatusColor(\"red\");\n                setStatus(\"Please check your credentials and try again.\"); // setPromptBody(\"Please check your credentials and try again.\");\n\n                setLinkTo(\"signup\");\n                setLinkText(\"Signup\");\n                setShow(true);\n                setLoading(false);\n              } else if (_context.t0.message === \"Request failed with status code 404\") {\n                // bad endpoint\n                setStatusColor(\"red\");\n                setStatus(\"An error occured. Contact systems admin\");\n              } else if (_context.t0.message === \"Network Error\") {\n                // bad network connection\n                setStatusColor(\"red\");\n                setStatus(\"Please check your network connection and try again.\"); // setPromptBody(\"Please check your network connection and try again.\");\n                // setShow(true);\n\n                setLoading(false);\n              }\n\n              setTimeout(function () {\n                setStatus(\"\");\n              }, 3500);\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[4, 11]]);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"/auth.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      textAlign: \"center\",\n      margin: \"50px 0\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 15\n    }\n  }, \"Login\"))), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 11\n    }\n  })), \" \", __jsx(\"div\", {\n    className: \"row\",\n    style: {\n      margin: \"0px 5px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    style: {\n      width: \"100%\"\n    },\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"form-group col-12\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"email\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 15\n    }\n  }, \"Email address / Phone Number\"), __jsx(\"input\", {\n    type: \"email\",\n    className: \"form-control cinput\",\n    id: \"email\",\n    \"aria-describedby\": \"emailHelp\",\n    placeholder: \"Enter email or Phone number\",\n    value: authentication_property,\n    onChange: function onChange(e) {\n      return setaAthenticationProperty(e.target.value);\n    },\n    style: {\n      padding: \"20px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"form-group col-12\",\n    style: {\n      marginBottom: 30\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 13\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"exampleInputPassword1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 15\n    }\n  }, \"Password\"), __jsx(\"input\", {\n    type: \"password\",\n    className: \"form-control cinput\",\n    id: \"password\",\n    placeholder: \"Password\",\n    \"data-toggle\": \"password\",\n    value: password,\n    onChange: function onChange(e) {\n      return setPassword(e.target.value);\n    },\n    style: {\n      padding: \"20px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"form-group col-12\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary btn-block submitbutton\",\n    id: \"submitButton\",\n    style: {\n      padding: \"10px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 15\n    }\n  }, \"Login\")), __jsx(\"div\", {\n    style: {\n      textAlign: \"center\",\n      fontWeight: \"bolder\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 15\n    }\n  }, \"Forgot password?\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 15\n    }\n  }), \"Don't have an account?\", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    href: \"/auth/signup\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    id: \"signup\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 17\n    }\n  }, \"Sign Up\")))))));\n};\n\n_s(Login, \"6Batv2xJpoumH2VJhmLkL7NihdA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c2 = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Loader\");\n$RefreshReg$(_c2, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9sb2dpbi50c3g/N2Q4ZiJdLCJuYW1lcyI6WyJMb2FkZXIiLCJ3aWR0aCIsImhlaWdodCIsIkxvZ2luIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImlzUmVnaXN0ZXJlZCIsInNldElzUmVnaXN0ZXJlZCIsImlzSW5wdXRWYWxpZCIsInNldElzSW5wdXRWYWxpZCIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwicHJvbXB0Qm9keSIsInNldFByb21wdEJvZHkiLCJsaW5rVG8iLCJzZXRMaW5rVG8iLCJsaW5rVGV4dCIsInNldExpbmtUZXh0IiwiYXV0aGVudGljYXRpb25fcHJvcGVydHkiLCJzZXRhQXRoZW50aWNhdGlvblByb3BlcnR5IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3RhdHVzQ29sb3IiLCJzZXRTdGF0dXNDb2xvciIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hvdyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJBdXRoIiwibG9naW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInB1c2giLCJtZXNzYWdlIiwidGV4dEFsaWduIiwibWFyZ2luIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsU0FDYjtBQUNFLGFBQVMsRUFBQyxrQ0FEWjtBQUVFLFFB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QUFDRSxTQUFLLEVBQUU7QUFDTEwsZUFBUyxFQUFFLFFBRE47QUFFTE8sZ0JBQVUsRUFBRTtBQUZQLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsNEJBU0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLE1BQUUsRUFBQyxRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQVRGLENBckNGLENBREYsQ0FqQkYsQ0FERixDQURGO0FBMkVELENBbkpEOztHQUFNdEQsSztVQWNXMkIscUQ7OztNQWRYM0IsSztBQXFKU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2xvZ2luLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEF1dGggfSBmcm9tIFwiLi4vLi4vbGliL2VuZHBvaW50c1wiO1xuaW1wb3J0IHsgcm91dGUgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXJcIjtcblxuY29uc3QgTG9hZGVyID0gKCkgPT4gKFxuICA8c3BhblxuICAgIGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtXCJcbiAgICByb2xlPVwic3RhdHVzXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEuNXJlbVwiLCBoZWlnaHQ6IFwiMS41cmVtXCIgfX1cbiAgPjwvc3Bhbj5cbik7XG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1JlZ2lzdGVyZWQsIHNldElzUmVnaXN0ZXJlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzSW5wdXRWYWxpZCwgc2V0SXNJbnB1dFZhbGlkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Byb21wdEJvZHksIHNldFByb21wdEJvZHldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsaW5rVG8sIHNldExpbmtUb10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xpbmtUZXh0LCBzZXRMaW5rVGV4dF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2F1dGhlbnRpY2F0aW9uX3Byb3BlcnR5LCBzZXRhQXRoZW50aWNhdGlvblByb3BlcnR5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N0YXR1c0NvbG9yLCBzZXRTdGF0dXNDb2xvcl0gPSB1c2VTdGF0ZShcImJsdWVcIik7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRTaG93KGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHNldFNob3codHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldFN0YXR1c0NvbG9yKFwiYmx1ZVwiKTtcbiAgICBzZXRTdGF0dXMoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbmV3IEF1dGgoKS5sb2dpbihhdXRoZW50aWNhdGlvbl9wcm9wZXJ0eSwgcGFzc3dvcmQpO1xuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSRVNVTFQ6XCIsIHJlc3VsdCk7XG4gICAgICAgIHNldFN0YXR1c0NvbG9yKFwiYmx1ZVwiKTtcbiAgICAgICAgc2V0U3RhdHVzKFwiQXV0aGVudGljYXRpb24gc3VjY2Vzc1wiKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBnbyB0byBsYW5kaW5nIHBhZ2VcbiAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjcC1hXCIsIEpTT04uc3RyaW5naWZ5KHJlc3VsdC5kYXRhKSk7XG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvYmxvZ1wiKTtcbiAgICAgICAgICAvLyAgIHNldFByb21wdEJvZHkoXCJSZXBsYWNlIHRoaXMgcHJvbXB0IHdpdGggbGFuZGluZyBwYWdlXCIpO1xuICAgICAgICAgIC8vICAgc2V0U2hvdyh0cnVlKTtcbiAgICAgICAgICAvLyAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9LCAyNTApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgaWYgKGVyci5tZXNzYWdlID09PSBcIlJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNDAxXCIpIHtcbiAgICAgICAgLy8gYmFkIGNyZWRlbnRpYWxzXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQkFEIENSRURFTlRJQUxTXCIpO1xuICAgICAgICBzZXRTdGF0dXNDb2xvcihcInJlZFwiKTtcbiAgICAgICAgc2V0U3RhdHVzKFwiUGxlYXNlIGNoZWNrIHlvdXIgY3JlZGVudGlhbHMgYW5kIHRyeSBhZ2Fpbi5cIik7XG5cbiAgICAgICAgLy8gc2V0UHJvbXB0Qm9keShcIlBsZWFzZSBjaGVjayB5b3VyIGNyZWRlbnRpYWxzIGFuZCB0cnkgYWdhaW4uXCIpO1xuICAgICAgICBzZXRMaW5rVG8oXCJzaWdudXBcIik7XG4gICAgICAgIHNldExpbmtUZXh0KFwiU2lnbnVwXCIpO1xuICAgICAgICBzZXRTaG93KHRydWUpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyLm1lc3NhZ2UgPT09IFwiUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDRcIikge1xuICAgICAgICAvLyBiYWQgZW5kcG9pbnRcbiAgICAgICAgc2V0U3RhdHVzQ29sb3IoXCJyZWRcIik7XG4gICAgICAgIHNldFN0YXR1cyhcIkFuIGVycm9yIG9jY3VyZWQuIENvbnRhY3Qgc3lzdGVtcyBhZG1pblwiKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyLm1lc3NhZ2UgPT09IFwiTmV0d29yayBFcnJvclwiKSB7XG4gICAgICAgIC8vIGJhZCBuZXR3b3JrIGNvbm5lY3Rpb25cbiAgICAgICAgc2V0U3RhdHVzQ29sb3IoXCJyZWRcIik7XG4gICAgICAgIHNldFN0YXR1cyhcIlBsZWFzZSBjaGVjayB5b3VyIG5ldHdvcmsgY29ubmVjdGlvbiBhbmQgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgLy8gc2V0UHJvbXB0Qm9keShcIlBsZWFzZSBjaGVjayB5b3VyIG5ldHdvcmsgY29ubmVjdGlvbiBhbmQgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgLy8gc2V0U2hvdyh0cnVlKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0U3RhdHVzKFwiXCIpO1xuICAgICAgfSwgMzUwMCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL2F1dGguY3NzXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIG1hcmdpbjogXCI1MHB4IDBcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgPGI+TG9naW48L2I+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L2Rpdj57XCIgXCJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luOiBcIjBweCA1cHhcIiB9fT5cbiAgICAgICAgICA8Zm9ybSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLTEyXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBhZGRyZXNzIC8gUGhvbmUgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY2lucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsIG9yIFBob25lIG51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2F1dGhlbnRpY2F0aW9uX3Byb3BlcnR5fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0YUF0aGVudGljYXRpb25Qcm9wZXJ0eShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4XCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC0xMlwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMzAgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjaW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLTEyXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIHN1Ym1pdGJ1dHRvblwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzdWJtaXRCdXR0b25cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YT5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P1xuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvc2lnbnVwXCI+XG4gICAgICAgICAgICAgICAgPGEgaWQ9XCJzaWdudXBcIj5TaWduIFVwPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/login.tsx\n");

/***/ })

})