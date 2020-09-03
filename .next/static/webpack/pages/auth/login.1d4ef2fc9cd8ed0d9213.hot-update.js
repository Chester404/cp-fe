webpackHotUpdate_N_E("pages/auth/login",{

/***/ "./pages/auth/login.tsx":
/*!******************************!*\
  !*** ./pages/auth/login.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_endpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/endpoints */ \"./lib/endpoints/index.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/james/Documents/dev/cp-fe/pages/auth/login.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar Loader = function Loader() {\n  return __jsx(\"span\", {\n    className: \"spinner-border spinner-border-sm\",\n    role: \"status\",\n    \"aria-hidden\": \"true\",\n    style: {\n      width: \"1.5rem\",\n      height: \"1.5rem\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }\n  });\n};\n\n_c = Loader;\n\nvar Login = function Login() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      isRegistered = _useState2[0],\n      setIsRegistered = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      isInputValid = _useState3[0],\n      setIsInputValid = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      isLoggedIn = _useState4[0],\n      setIsLoggedIn = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      promptBody = _useState5[0],\n      setPromptBody = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      linkTo = _useState6[0],\n      setLinkTo = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      linkText = _useState7[0],\n      setLinkText = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      authentication_property = _useState8[0],\n      setaAthenticationProperty = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      password = _useState9[0],\n      setPassword = _useState9[1];\n\n  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loading = _useState10[0],\n      setLoading = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      status = _useState11[0],\n      setStatus = _useState11[1];\n\n  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"blue\"),\n      statusColor = _useState12[0],\n      setStatusColor = _useState12[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var handleClose = function handleClose() {\n    return setShow(false);\n  };\n\n  var handleShow = function handleShow() {\n    return setShow(true);\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n      var result;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              setLoading(true);\n              setStatusColor(\"blue\");\n              setStatus(\"Please wait...\");\n              _context.prev = 4;\n              _context.next = 7;\n              return new _lib_endpoints__WEBPACK_IMPORTED_MODULE_7__[\"Auth\"]().login(authentication_property, password);\n\n            case 7:\n              result = _context.sent;\n\n              if (result.status === 200) {\n                setLoading(false);\n                console.log(\"RESULT:\", result);\n                setStatusColor(\"blue\");\n                setStatus(\"Authentication success\");\n                setTimeout(function () {\n                  // go to landing page\n                  window.localStorage.setItem(\"cp-a\", JSON.stringify(result.data));\n                  router.push(\"/blog\"); //   setPromptBody(\"Replace this prompt with landing page\");\n                  //   setShow(true);\n                  //   setLoading(false);\n                }, 250);\n              }\n\n              _context.next = 16;\n              break;\n\n            case 11:\n              _context.prev = 11;\n              _context.t0 = _context[\"catch\"](4);\n              console.log(_context.t0.message);\n\n              if (_context.t0.message === \"Request failed with status code 401\") {\n                // bad credentials\n                console.log(\"BAD CREDENTIALS\");\n                setStatusColor(\"red\");\n                setStatus(\"Please check your credentials and try again.\"); // setPromptBody(\"Please check your credentials and try again.\");\n\n                setLinkTo(\"signup\");\n                setLinkText(\"Signup\");\n                setShow(true);\n                setLoading(false);\n              } else if (_context.t0.message === \"Request failed with status code 404\") {\n                // bad endpoint\n                setStatusColor(\"red\");\n                setStatus(\"An error occured. Contact systems admin\");\n              } else if (_context.t0.message === \"Network Error\") {\n                // bad network connection\n                setStatusColor(\"red\");\n                setStatus(\"Please check your network connection and try again.\"); // setPromptBody(\"Please check your network connection and try again.\");\n                // setShow(true);\n\n                setLoading(false);\n              }\n\n              setTimeout(function () {\n                setStatus(\"\");\n              }, 3500);\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[4, 11]]);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"/auth.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      textAlign: \"center\",\n      margin: \"50px 0\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 15\n    }\n  }, \"Login\"))), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 11\n    }\n  })), \" \", __jsx(\"div\", {\n    className: \"row\",\n    style: {\n      margin: \"0px 5px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    style: {\n      width: \"100%\"\n    },\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"form-group col-12\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"email\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 15\n    }\n  }, \"Email address / Phone Number\"), __jsx(\"input\", {\n    type: \"email\",\n    className: \"form-control cinput\",\n    id: \"email\",\n    \"aria-describedby\": \"emailHelp\",\n    placeholder: \"Enter email or Phone number\",\n    value: authentication_property,\n    onChange: function onChange(e) {\n      return setaAthenticationProperty(e.target.value);\n    },\n    style: {\n      padding: \"20px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"form-group col-12\",\n    style: {\n      marginBottom: 30\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 13\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"exampleInputPassword1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 15\n    }\n  }, \"Password\"), __jsx(\"input\", {\n    type: \"password\",\n    className: \"form-control cinput\",\n    id: \"password\",\n    placeholder: \"Password\",\n    \"data-toggle\": \"password\",\n    value: password,\n    onChange: function onChange(e) {\n      return setPassword(e.target.value);\n    },\n    style: {\n      padding: \"20px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"form-group col-12\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary btn-block submitbutton\",\n    id: \"submitButton\",\n    style: {\n      padding: \"30px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 15\n    }\n  }, \"Login\")), __jsx(\"div\", {\n    style: {\n      textAlign: \"center\",\n      color: statusColor\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 13\n    }\n  }, \"\\xA0\", status), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    style: {\n      textAlign: \"center\",\n      fontWeight: \"bolder\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 15\n    }\n  }, \"forgot password?\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 15\n    }\n  }), \"Don't have an account?\", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    href: \"/auth/signup\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    id: \"signup\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 17\n    }\n  }, \"Sign Up\")))))));\n};\n\n_s(Login, \"6Batv2xJpoumH2VJhmLkL7NihdA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c2 = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Loader\");\n$RefreshReg$(_c2, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9sb2dpbi50c3g/N2Q4ZiJdLCJuYW1lcyI6WyJMb2FkZXIiLCJ3aWR0aCIsImhlaWdodCIsIkxvZ2luIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImlzUmVnaXN0ZXJlZCIsInNldElzUmVnaXN0ZXJlZCIsImlzSW5wdXRWYWxpZCIsInNldElzSW5wdXRWYWxpZCIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwicHJvbXB0Qm9keSIsInNldFByb21wdEJvZHkiLCJsaW5rVG8iLCJzZXRMaW5rVG8iLCJsaW5rVGV4dCIsInNldExpbmtUZXh0IiwiYXV0aGVudGljYXRpb25fcHJvcGVydHkiLCJzZXRhQXRoZW50aWNhdGlvblByb3BlcnR5IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3RhdHVzQ29sb3IiLCJzZXRTdGF0dXNDb2xvciIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hvdyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJBdXRoIiwibG9naW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInB1c2giLCJtZXNzYWdlIiwidGV4dEFsaWduIiwibWFyZ2luIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxTQUNiO0FBQ0UsYUFBUyxFQUFDLGtDQURa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RixFQXFDRTtBQUNFLFNBQUssRUFBRTtBQUNMTCxlQUFTLEVBQUUsUUFETjtBQUVMTyxXQUFLLEVBQUU5QjtBQUZGLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU1TRixNQU5ULENBckNGLEVBNkNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3Q0YsRUE4Q0U7QUFDRSxTQUFLLEVBQUU7QUFDTHlCLGVBQVMsRUFBRSxRQUROO0FBRUxRLGdCQUFVLEVBQUU7QUFGUCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLDRCQVNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxNQUFFLEVBQUMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FURixDQTlDRixDQURGLENBakJGLENBREYsQ0FERjtBQW9GRCxDQTVKRDs7R0FBTXZELEs7VUFjVzJCLHFEOzs7TUFkWDNCLEs7QUE4SlNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aC9sb2dpbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgRm9ybUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBdXRoIH0gZnJvbSBcIi4uLy4uL2xpYi9lbmRwb2ludHNcIjtcbmltcG9ydCB7IHJvdXRlIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyXCI7XG5cbmNvbnN0IExvYWRlciA9ICgpID0+IChcbiAgPHNwYW5cbiAgICBjbGFzc05hbWU9XCJzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbVwiXG4gICAgcm9sZT1cInN0YXR1c1wiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBzdHlsZT17eyB3aWR0aDogXCIxLjVyZW1cIiwgaGVpZ2h0OiBcIjEuNXJlbVwiIH19XG4gID48L3NwYW4+XG4pO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNSZWdpc3RlcmVkLCBzZXRJc1JlZ2lzdGVyZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0lucHV0VmFsaWQsIHNldElzSW5wdXRWYWxpZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwcm9tcHRCb2R5LCBzZXRQcm9tcHRCb2R5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGlua1RvLCBzZXRMaW5rVG9dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsaW5rVGV4dCwgc2V0TGlua1RleHRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthdXRoZW50aWNhdGlvbl9wcm9wZXJ0eSwgc2V0YUF0aGVudGljYXRpb25Qcm9wZXJ0eV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGF0dXNDb2xvciwgc2V0U3RhdHVzQ29sb3JdID0gdXNlU3RhdGUoXCJibHVlXCIpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvdyhmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZVNob3cgPSAoKSA9PiBzZXRTaG93KHRydWUpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRTdGF0dXNDb2xvcihcImJsdWVcIik7XG4gICAgc2V0U3RhdHVzKFwiUGxlYXNlIHdhaXQuLi5cIik7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG5ldyBBdXRoKCkubG9naW4oYXV0aGVudGljYXRpb25fcHJvcGVydHksIHBhc3N3b3JkKTtcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUkVTVUxUOlwiLCByZXN1bHQpO1xuICAgICAgICBzZXRTdGF0dXNDb2xvcihcImJsdWVcIik7XG4gICAgICAgIHNldFN0YXR1cyhcIkF1dGhlbnRpY2F0aW9uIHN1Y2Nlc3NcIik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gZ28gdG8gbGFuZGluZyBwYWdlXG4gICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3AtYVwiLCBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YSkpO1xuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2Jsb2dcIik7XG4gICAgICAgICAgLy8gICBzZXRQcm9tcHRCb2R5KFwiUmVwbGFjZSB0aGlzIHByb21wdCB3aXRoIGxhbmRpbmcgcGFnZVwiKTtcbiAgICAgICAgICAvLyAgIHNldFNob3codHJ1ZSk7XG4gICAgICAgICAgLy8gICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgIGlmIChlcnIubWVzc2FnZSA9PT0gXCJSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwMVwiKSB7XG4gICAgICAgIC8vIGJhZCBjcmVkZW50aWFsc1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJBRCBDUkVERU5USUFMU1wiKTtcbiAgICAgICAgc2V0U3RhdHVzQ29sb3IoXCJyZWRcIik7XG4gICAgICAgIHNldFN0YXR1cyhcIlBsZWFzZSBjaGVjayB5b3VyIGNyZWRlbnRpYWxzIGFuZCB0cnkgYWdhaW4uXCIpO1xuXG4gICAgICAgIC8vIHNldFByb21wdEJvZHkoXCJQbGVhc2UgY2hlY2sgeW91ciBjcmVkZW50aWFscyBhbmQgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgc2V0TGlua1RvKFwic2lnbnVwXCIpO1xuICAgICAgICBzZXRMaW5rVGV4dChcIlNpZ251cFwiKTtcbiAgICAgICAgc2V0U2hvdyh0cnVlKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKGVyci5tZXNzYWdlID09PSBcIlJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNDA0XCIpIHtcbiAgICAgICAgLy8gYmFkIGVuZHBvaW50XG4gICAgICAgIHNldFN0YXR1c0NvbG9yKFwicmVkXCIpO1xuICAgICAgICBzZXRTdGF0dXMoXCJBbiBlcnJvciBvY2N1cmVkLiBDb250YWN0IHN5c3RlbXMgYWRtaW5cIik7XG4gICAgICB9IGVsc2UgaWYgKGVyci5tZXNzYWdlID09PSBcIk5ldHdvcmsgRXJyb3JcIikge1xuICAgICAgICAvLyBiYWQgbmV0d29yayBjb25uZWN0aW9uXG4gICAgICAgIHNldFN0YXR1c0NvbG9yKFwicmVkXCIpO1xuICAgICAgICBzZXRTdGF0dXMoXCJQbGVhc2UgY2hlY2sgeW91ciBuZXR3b3JrIGNvbm5lY3Rpb24gYW5kIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgIC8vIHNldFByb21wdEJvZHkoXCJQbGVhc2UgY2hlY2sgeW91ciBuZXR3b3JrIGNvbm5lY3Rpb24gYW5kIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgIC8vIHNldFNob3codHJ1ZSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFN0YXR1cyhcIlwiKTtcbiAgICAgIH0sIDM1MDApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9hdXRoLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiNTBweCAwXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIDxiPkxvZ2luPC9iPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbjogXCIwcHggNXB4XCIgfX0+XG4gICAgICAgICAgPGZvcm0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC0xMlwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgYWRkcmVzcyAvIFBob25lIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNpbnB1dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbCBvciBQaG9uZSBudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXthdXRoZW50aWNhdGlvbl9wcm9wZXJ0eX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGFBdGhlbnRpY2F0aW9uUHJvcGVydHkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtMTJcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDMwIH19PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY2lucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4XCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC0xMlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBzdWJtaXRidXR0b25cIlxuICAgICAgICAgICAgICAgIGlkPVwic3VibWl0QnV0dG9uXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjMwcHhcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IHN0YXR1c0NvbG9yLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAmbmJzcDt7c3RhdHVzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGE+Zm9yZ290IHBhc3N3b3JkPzwvYT5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD9cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3NpZ251cFwiPlxuICAgICAgICAgICAgICAgIDxhIGlkPVwic2lnbnVwXCI+U2lnbiBVcDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/login.tsx\n");

/***/ })

})