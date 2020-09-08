webpackHotUpdate_N_E("pages/auth/login",{

/***/ "./pages/auth/login.tsx":
/*!******************************!*\
  !*** ./pages/auth/login.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/endpoints */ \"./lib/endpoints/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/james/Documents/dev/cp-fe/pages/auth/login.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\nvar Login = function Login() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      authentication_property = _useState[0],\n      setAuthenticationProperty = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n\n  var authenticate = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              _context.prev = 1;\n              _context.next = 4;\n              return new _lib_endpoints__WEBPACK_IMPORTED_MODULE_6__[\"Auth\"]().login(authentication_property, password);\n\n            case 4:\n              response = _context.sent;\n              console.log(response);\n\n              if (response.status === 200) {\n                window.localStorage.setItem(\"cp-a\", JSON.stringify(response.data));\n                router.push(\"/blog\");\n              }\n\n              _context.next = 13;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](1);\n              console.log(e);\n\n              if (_context.t0.message === \"Request failed with status code 401\") {\n                // bad credentials\n                alert(\"Please check your credentials and try again.\");\n              } else if (_context.t0.message === \"Request failed with status code 404\") {\n                // bad endpoint\n                alert(\"Request failed\");\n              } else if (_context.t0.message === \"Network Error\") {\n                // bad network connection\n                alert(\"Please check your network connection and try again.\");\n              }\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 9]]);\n    }));\n\n    return function authenticate(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"/css/sign_up.css\",\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }), __jsx(\"title\", {\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, \"Community Project | Login Page\"), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\",\n    integrity: \"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\",\n    crossOrigin: \"anonymous\",\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js\",\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-show-password/1.0.3/bootstrap-show-password.min.js\",\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    src: \"https://kit.fontawesome.com/3303a2a495.js\",\n    crossOrigin: \"anonymous\",\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    id: \"2485722281\",\n    __self: _this\n  }, \".container.jsx-2485722281{margin:0 auto;margin-top:70px;width:30%;background:#ffffff;padding:25px;}.submitbutton.jsx-2485722281{background:#3964fc;border:#3964fc;border-radius:10px;}.jsx-2485722281:hover .submitbutton.jsx-2485722281{background:#3964fc;border:#3964fc;}.cinput.jsx-2485722281{border-radius:10px;}.input-group-addon.jsx-2485722281:last-child{background-color:#ffffff;border-radius:0px 10px 10px 0px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phbWVzL0RvY3VtZW50cy9kZXYvY3AtZmUvcGFnZXMvYXV0aC9sb2dpbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0VrQixBQUd5QixBQU9LLEFBS0EsQUFJQSxBQUdNLGNBbEJULEtBT0QsQUFLQSxBQUlqQixNQUdrQyxLQWxCdEIsSUFPUyxBQUtyQixNQVhxQixhQU9yQixJQVdBLEVBakJlLGFBQ2YiLCJmaWxlIjoiL2hvbWUvamFtZXMvRG9jdW1lbnRzL2Rldi9jcC1mZS9wYWdlcy9hdXRoL2xvZ2luLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEF1dGggfSBmcm9tIFwiLi4vLi4vbGliL2VuZHBvaW50c1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuICBjb25zdCBbYXV0aGVudGljYXRpb25fcHJvcGVydHksIHNldEF1dGhlbnRpY2F0aW9uUHJvcGVydHldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGF1dGhlbnRpY2F0ZSA9IGFzeW5jIChlOiBGb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV3IEF1dGgoKS5sb2dpbihcbiAgICAgICAgYXV0aGVudGljYXRpb25fcHJvcGVydHksXG4gICAgICAgIHBhc3N3b3JkXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNwLWFcIiwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICByb3V0ZXIucHVzaChcIi9ibG9nXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UgPT09IFwiUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDFcIikge1xuICAgICAgICAvLyBiYWQgY3JlZGVudGlhbHNcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgY2hlY2sgeW91ciBjcmVkZW50aWFscyBhbmQgdHJ5IGFnYWluLlwiKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyLm1lc3NhZ2UgPT09IFwiUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDRcIikge1xuICAgICAgICAvLyBiYWQgZW5kcG9pbnRcbiAgICAgICAgYWxlcnQoXCJSZXF1ZXN0IGZhaWxlZFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyLm1lc3NhZ2UgPT09IFwiTmV0d29yayBFcnJvclwiKSB7XG4gICAgICAgIC8vIGJhZCBuZXR3b3JrIGNvbm5lY3Rpb25cbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgY2hlY2sgeW91ciBuZXR3b3JrIGNvbm5lY3Rpb24gYW5kIHRyeSBhZ2Fpbi5cIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9jc3Mvc2lnbl91cC5jc3NcIiAvPlxuICAgICAgICA8dGl0bGU+Q29tbXVuaXR5IFByb2plY3QgfCBMb2dpbiBQYWdlPC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjcvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtQlZZaWlTSUZlSzFkR21KUkFreWN1SEFIUmczMk9tVWN3dzdvbjNSWWRnNFZhK1BtU1Rzei9LNjh2YmRFamg0dVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9qcXVlcnkvMy4xLjEvanF1ZXJ5Lm1pbi5qc1wiXG4gICAgICAgID48L3NjcmlwdD5cblxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYm9vdHN0cmFwLXNob3ctcGFzc3dvcmQvMS4wLjMvYm9vdHN0cmFwLXNob3ctcGFzc3dvcmQubWluLmpzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzMzMDNhMmE0OTUuanNcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zdWJtaXRidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzOTY0ZmM7XG4gICAgICAgICAgYm9yZGVyOiAjMzk2NGZjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgOmhvdmVyIC5zdWJtaXRidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzOTY0ZmM7XG4gICAgICAgICAgYm9yZGVyOiAjMzk2NGZjO1xuICAgICAgICB9XG4gICAgICAgIC5jaW5wdXQge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0LWdyb3VwLWFkZG9uOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9pbWFnZXMvTG9nby5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICA8Yj5Mb2dpbjwvYj5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17YXV0aGVudGljYXRlfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsIGFkZHJlc3MgLyBQaG9uZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthdXRoZW50aWNhdGlvbl9wcm9wZXJ0eX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0aGVudGljYXRpb25Qcm9wZXJ0eShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgc3VibWl0YnV0dG9uXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgIDxhPkZvcmdvdHRlbiBQYXNzd29yZD88L2E+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P1xuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9zaWdudXAvXCI+XG4gICAgICAgICAgICAgICAgICA8YT5TaWduIFVwPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi9qcy9hLmpzXCI+PC9zY3JpcHQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdfQ== */\\n/*@ sourceURL=/home/james/Documents/dev/cp-fe/pages/auth/login.tsx */\"), __jsx(\"div\", {\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-2485722281\" + \" \" + \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-2485722281\" + \" \" + \"navbar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"/images/Logo.png\",\n    className: \"jsx-2485722281\" + \" \" + \"logo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    className: \"jsx-2485722281\" + \" \" + \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      textAlign: \"center\"\n    },\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 15\n    }\n  }, __jsx(\"b\", {\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 17\n    }\n  }, \"Login\"))), __jsx(\"br\", {\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  })), \" \", __jsx(\"div\", {\n    className: \"jsx-2485722281\" + \" \" + \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, __jsx(\"form\", {\n    onSubmit: authenticate,\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-2485722281\" + \" \" + \"form-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 15\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"email\",\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 17\n    }\n  }, \"Email address / Phone Number\"), __jsx(\"input\", {\n    type: \"email\",\n    id: \"exampleInputEmail1\",\n    \"aria-describedby\": \"emailHelp\",\n    placeholder: \"Enter email\",\n    value: authentication_property,\n    onChange: function onChange(e) {\n      return setAuthenticationProperty(e.target.value);\n    },\n    className: \"jsx-2485722281\" + \" \" + \"form-control cinput\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"jsx-2485722281\" + \" \" + \"form-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 15\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"exampleInputPassword1\",\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 17\n    }\n  }, \"Password\"), __jsx(\"input\", {\n    type: \"password\",\n    id: \"exampleInputPassword1\",\n    placeholder: \"Password\",\n    \"data-toggle\": \"password\",\n    value: password,\n    onChange: function onChange(e) {\n      return setPassword(e.target.value);\n    },\n    className: \"jsx-2485722281\" + \" \" + \"form-control cinput\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    style: {\n      textAlign: \"center\"\n    },\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 15\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"jsx-2485722281\" + \" \" + \"btn btn-primary btn-block submitbutton\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 17\n    }\n  }, \"Login\")), __jsx(\"br\", {\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    style: {\n      textAlign: \"center\"\n    },\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 17\n    }\n  }, \"Forgotten Password?\"), __jsx(\"br\", {\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 17\n    }\n  }), __jsx(\"br\", {\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 17\n    }\n  }), \"Don't have an account?\", __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/auth/signup/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 19\n    }\n  }, \"Sign Up\"))))))), __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"/js/a.js\",\n    className: \"jsx-2485722281\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Login, \"t/79ECihNufONKJsqAGvGIECC0Y=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"]];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9sb2dpbi50c3g/N2Q4ZiJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZVN0YXRlIiwiYXV0aGVudGljYXRpb25fcHJvcGVydHkiLCJzZXRBdXRoZW50aWNhdGlvblByb3BlcnR5IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvdXRlciIsInVzZVJvdXRlciIsImF1dGhlbnRpY2F0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkF1dGgiLCJsb2dpbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInB1c2giLCJtZXNzYWdlIiwiYWxlcnQiLCJ0ZXh0QWxpZ24iLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUMyQ0Msc0RBQVEsQ0FBQyxFQUFELENBRG5EO0FBQUEsTUFDWEMsdUJBRFc7QUFBQSxNQUNjQyx5QkFEZDs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFWEcsUUFGVztBQUFBLE1BRURDLFdBRkM7O0FBSWxCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsWUFBWTtBQUFBLGdNQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkEsZUFBQyxDQUFDQyxjQUFGO0FBRG1CO0FBQUE7QUFBQSxxQkFHTSxJQUFJQyxtREFBSixHQUFXQyxLQUFYLENBQ3JCVix1QkFEcUIsRUFFckJFLFFBRnFCLENBSE47O0FBQUE7QUFHWFMsc0JBSFc7QUFPakJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjs7QUFD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QkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FiRixFQXlCRTtBQUFLLFNBQUssRUFBRTtBQUFFRixlQUFTLEVBQUU7QUFBYixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFBQSx3Q0FFWSx3Q0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQ0F6QkYsRUFpQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakNGLEVBa0NFO0FBQUssU0FBSyxFQUFFO0FBQUVBLGVBQVMsRUFBRTtBQUFiLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRiw0QkFLRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBTEYsQ0FsQ0YsQ0FERixDQVRGLENBTkYsQ0FsREYsRUFrSEU7QUFBUSxRQUFJLEVBQUMsaUJBQWI7QUFBK0IsT0FBRyxFQUFDLFVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxIRixDQURGO0FBc0hELENBdEpEOztHQUFNMUIsSztVQUlXTyxxRDs7O0tBSlhQLEs7QUF3SlNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aC9sb2dpbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgRm9ybUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBdXRoIH0gZnJvbSBcIi4uLy4uL2xpYi9lbmRwb2ludHNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgW2F1dGhlbnRpY2F0aW9uX3Byb3BlcnR5LCBzZXRBdXRoZW50aWNhdGlvblByb3BlcnR5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBhdXRoZW50aWNhdGUgPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5ldyBBdXRoKCkubG9naW4oXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uX3Byb3BlcnR5LFxuICAgICAgICBwYXNzd29yZFxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjcC1hXCIsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvYmxvZ1wiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgaWYgKGVyci5tZXNzYWdlID09PSBcIlJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNDAxXCIpIHtcbiAgICAgICAgLy8gYmFkIGNyZWRlbnRpYWxzXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGNoZWNrIHlvdXIgY3JlZGVudGlhbHMgYW5kIHRyeSBhZ2Fpbi5cIik7XG4gICAgICB9IGVsc2UgaWYgKGVyci5tZXNzYWdlID09PSBcIlJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNDA0XCIpIHtcbiAgICAgICAgLy8gYmFkIGVuZHBvaW50XG4gICAgICAgIGFsZXJ0KFwiUmVxdWVzdCBmYWlsZWRcIik7XG4gICAgICB9IGVsc2UgaWYgKGVyci5tZXNzYWdlID09PSBcIk5ldHdvcmsgRXJyb3JcIikge1xuICAgICAgICAvLyBiYWQgbmV0d29yayBjb25uZWN0aW9uXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGNoZWNrIHlvdXIgbmV0d29yayBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvY3NzL3NpZ25fdXAuY3NzXCIgLz5cbiAgICAgICAgPHRpdGxlPkNvbW11bml0eSBQcm9qZWN0IHwgTG9naW4gUGFnZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy43L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUJWWWlpU0lGZUsxZEdtSlJBa3ljdUhBSFJnMzJPbVVjd3c3b24zUllkZzRWYStQbVNUc3ovSzY4dmJkRWpoNHVcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuMS4xL2pxdWVyeS5taW4uanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2Jvb3RzdHJhcC1zaG93LXBhc3N3b3JkLzEuMC4zL2Jvb3RzdHJhcC1zaG93LXBhc3N3b3JkLm1pbi5qc1wiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS8zMzAzYTJhNDk1LmpzXCJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgfVxuICAgICAgICAuc3VibWl0YnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzk2NGZjO1xuICAgICAgICAgIGJvcmRlcjogIzM5NjRmYztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIDpob3ZlciAuc3VibWl0YnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzk2NGZjO1xuICAgICAgICAgIGJvcmRlcjogIzM5NjRmYztcbiAgICAgICAgfVxuICAgICAgICAuY2lucHV0IHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnB1dC1ncm91cC1hZGRvbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvaW1hZ2VzL0xvZ28ucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgPGI+TG9naW48L2I+XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2F1dGhlbnRpY2F0ZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBhZGRyZXNzIC8gUGhvbmUgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY2lucHV0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0RW1haWwxXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YXV0aGVudGljYXRpb25fcHJvcGVydHl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEF1dGhlbnRpY2F0aW9uUHJvcGVydHkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY2lucHV0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIHN1Ym1pdGJ1dHRvblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICA8YT5Gb3Jnb3R0ZW4gUGFzc3dvcmQ/PC9hPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD9cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvc2lnbnVwL1wiPlxuICAgICAgICAgICAgICAgICAgPGE+U2lnbiBVcDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvanMvYS5qc1wiPjwvc2NyaXB0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/login.tsx\n");

/***/ })

})