webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog/index.tsx":
/*!******************************!*\
  !*** ./pages/blog/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Blog; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_auth_AuthHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/auth/AuthHeader */ \"./components/auth/AuthHeader.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/james/Documents/dev/cp-fe/pages/blog/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Blog(_ref) {\n  _s();\n\n  var allPostsData = _ref.allPostsData;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  return __jsx(_components_auth_AuthHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Blog Page\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"navbar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    className: \"logo\",\n    src: \"/images/Logo.png\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"nav navbar-nav ml-auto\",\n    id: \"navbarNavDropdown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }, __jsx(\"i\", {\n    className: \"far fa-bell\",\n    style: {\n      margin: \"15px 20px\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    src: \"/images/profileImage2.png\",\n    alt: \"Avatar\",\n    style: {\n      width: \"50px\",\n      height: \"50px\",\n      marginTop: 2,\n      marginRight: 10\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }), __jsx(\"ul\", {\n    style: {\n      listStyle: \"none\",\n      marginTop: 0,\n      padding: 0\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    className: \"nav-item dropdown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link dropdown-toggle\",\n    href: \"#\",\n    id: \"navbarDropdownMenuLink\",\n    \"data-toggle\": \"dropdown\",\n    \"aria-haspopup\": \"true\",\n    \"aria-expanded\": \"false\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, \"James Asafuah\"), __jsx(\"div\", {\n    className: \"dropdown-menu\",\n    \"aria-labelledby\": \"navbarDropdownMenuLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/user/profile\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 19\n    }\n  }, __jsx(\"a\", {\n    className: \"dropdown-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 21\n    }\n  }, \"View Profile\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/admin\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 19\n    }\n  }, __jsx(\"a\", {\n    className: \"dropdown-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }, \"Account Settings\")), __jsx(\"a\", {\n    className: \"dropdown-item\",\n    onClick: function onClick() {\n      window.localStorage.removeItem(\"cp-a\");\n      router.push(\"/auth/login\");\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 19\n    }\n  }, \"Logout\")))))), __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"/js/a.js\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(Blog, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Blog;\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC50c3g/MWRmMyJdLCJuYW1lcyI6WyJCbG9nIiwiYWxsUG9zdHNEYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsImxpc3RTdHlsZSIsInBhZGRpbmciLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjtBQUM3QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsU0FDRSxNQUFDLG1FQUFEO0FBQVksU0FBSyxFQUFDLFdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQXNCLE9BQUcsRUFBQyxrQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBd0MsTUFBRSxFQUFDLG1CQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUEyQixTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFDRSxPQUFHLEVBQUMsMkJBRE47QUFFRSxPQUFHLEVBQUMsUUFGTjtBQUdFLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsTUFERjtBQUVMQyxZQUFNLEVBQUUsTUFGSDtBQUdMQyxlQUFTLEVBQUUsQ0FITjtBQUlMQyxpQkFBVyxFQUFFO0FBSlIsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFZRTtBQUFJLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsTUFBYjtBQUFxQkYsZUFBUyxFQUFFLENBQWhDO0FBQW1DRyxhQUFPLEVBQUU7QUFBNUMsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLDBCQURaO0FBRUUsUUFBSSxFQUFDLEdBRlA7QUFHRSxNQUFFLEVBQUMsd0JBSEw7QUFJRSxtQkFBWSxVQUpkO0FBS0UscUJBQWMsTUFMaEI7QUFNRSxxQkFBYyxPQU5oQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBV0U7QUFDRSxhQUFTLEVBQUMsZUFEWjtBQUVFLHVCQUFnQix3QkFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBSkYsRUFPRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQVBGLEVBVUU7QUFDRSxhQUFTLEVBQUMsZUFEWjtBQUVFLFdBQU8sRUFBRSxtQkFBTTtBQUNiQyxZQUFNLENBQUNDLFlBQVAsQ0FBb0JDLFVBQXBCLENBQStCLE1BQS9CO0FBQ0FYLFlBQU0sQ0FBQ1ksSUFBUCxDQUFZLGFBQVo7QUFDRCxLQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixDQVhGLENBREYsQ0FaRixDQUZGLENBREYsRUFtREU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkRGLEVBb0RFO0FBQVEsUUFBSSxFQUFDLGlCQUFiO0FBQStCLE9BQUcsRUFBQyxVQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcERGLENBREYsQ0FERjtBQTBERDs7R0E1RHVCZCxJO1VBQ1BHLHFEOzs7S0FET0gsSSIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1dGhIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYXV0aC9BdXRoSGVhZGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKHsgYWxsUG9zdHNEYXRhIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhIZWFkZXIgdGl0bGU9XCJCbG9nIFBhZ2VcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL2ltYWdlcy9Mb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG1sLWF1dG9cIiBpZD1cIm5hdmJhck5hdkRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1iZWxsXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjE1cHggMjBweFwiIH19PjwvaT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcHJvZmlsZUltYWdlMi5wbmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwcHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiwgbWFyZ2luVG9wOiAwLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBKYW1lcyBBc2FmdWFoXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93bk1lbnVMaW5rXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+VmlldyBQcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+QWNjb3VudCBTZXR0aW5nczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNwLWFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hdXRoL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+PC9kaXY+XHJcbiAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL2pzL2EuanNcIj48L3NjcmlwdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0F1dGhIZWFkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/index.tsx\n");

/***/ })

})