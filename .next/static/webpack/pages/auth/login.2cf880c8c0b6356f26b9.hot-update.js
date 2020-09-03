webpackHotUpdate_N_E("pages/auth/login",{

/***/ "./components/Layout/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Navbar.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/home/james/Documents/dev/cp-fe/components/Layout/Navbar.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar navFontSize = {\n  fontSize: \"18px\"\n};\n\nvar Navbar = function Navbar(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isLoggedIn = _useState[0],\n      setIsLoggedIn = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var lStorage = window.localStorage.getItem(\"cp-a\");\n    lStorage = JSON.parse(lStorage);\n\n    if (lStorage !== null || lStorage !== undefined) {\n      setIsLoggedIn(true);\n    }\n  }, []);\n  return __jsx(\"nav\", {\n    className: \"navbar navbar-expand-lg navbar-light bg-light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, props.headerTitle ? props.headerTitle : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    style: {\n      textDecoration: \"none\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"/images/Logo.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }))))), isLoggedIn ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"d-md-flex d-block flex-row mx-md-auto mx-0\",\n    style: navFontSize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"collapse navbar-collapse mr-auto\",\n    id: \"navbarNavAltMarkup\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"navbar-nav\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/marketplace\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-item nav-link active\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 19\n    }\n  }, \"Market \", __jsx(\"span\", {\n    className: \"sr-only\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 28\n    }\n  }, \"(current)\"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/jobs\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-item nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 19\n    }\n  }, \"Jobs\")), __jsx(\"a\", {\n    className: \"nav-item nav-link\",\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, \"Partnership\"), __jsx(\"a\", {\n    className: \"nav-item nav-link\",\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, \"Forum\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/blog\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-item nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 19\n    }\n  }, \"Blog\")), __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 17\n    }\n  }, __jsx(\"ul\", {\n    style: {\n      listStyle: \"none\",\n      margin: 0,\n      padding: 0\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 19\n    }\n  }, __jsx(\"li\", {\n    className: \"nav-item dropdown\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 21\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link dropdown-toggle\",\n    href: \"#\",\n    id: \"navbarDropdownMenuLink\",\n    \"data-toggle\": \"dropdown\",\n    \"aria-haspopup\": \"true\",\n    \"aria-expanded\": \"false\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 23\n    }\n  }, \"Members\"), __jsx(\"div\", {\n    className: \"dropdown-menu\",\n    \"aria-labelledby\": \"navbarDropdownMenuLink\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 23\n    }\n  }, __jsx(\"a\", {\n    className: \"dropdown-item\",\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 25\n    }\n  }, \"Individual\"), __jsx(\"a\", {\n    className: \"dropdown-item\",\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 25\n    }\n  }, \"Organization\")))))))), __jsx(\"div\", {\n    className: \"nav navbar-nav ml-auto\",\n    id: \"navbarNavDropdown\",\n    style: navFontSize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  }, __jsx(\"i\", {\n    className: \"far fa-bell\",\n    style: {\n      margin: \"15px 20px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    src: \"/images/profileImage2.png\",\n    alt: \"Avatar\",\n    style: {\n      width: \"50px\",\n      height: \"50px\",\n      marginTop: 2,\n      marginRight: 10\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }), __jsx(\"ul\", {\n    style: {\n      listStyle: \"none\",\n      marginTop: 0,\n      padding: 0\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    className: \"nav-item dropdown\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link dropdown-toggle\",\n    href: \"#\",\n    id: \"navbarDropdownMenuLink\",\n    \"data-toggle\": \"dropdown\",\n    \"aria-haspopup\": \"true\",\n    \"aria-expanded\": \"false\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 17\n    }\n  }, \"James Asafuah\"), __jsx(\"div\", {\n    className: \"dropdown-menu\",\n    \"aria-labelledby\": \"navbarDropdownMenuLink\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"dropdown-item\",\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 19\n    }\n  }, \"View Profile\"), __jsx(\"a\", {\n    className: \"dropdown-item\",\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 19\n    }\n  }, \"Account Settings\"), __jsx(\"a\", {\n    className: \"dropdown-item\",\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 19\n    }\n  }, \"Logout\")))))) : \"\");\n};\n\n_s(Navbar, \"fKLMlyFH2GMrhNeUDpp+0z1yiCo=\");\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeD8wMmM2Il0sIm5hbWVzIjpbIm5hdkZvbnRTaXplIiwiZm9udFNpemUiLCJOYXZiYXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJ1c2VFZmZlY3QiLCJsU3RvcmFnZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJoZWFkZXJUaXRsZSIsInRleHREZWNvcmF0aW9uIiwibGlzdFN0eWxlIiwibWFyZ2luIiwicGFkZGluZyIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLFdBQVcsR0FBRztBQUNsQkMsVUFBUSxFQUFFO0FBRFEsQ0FBcEI7O0FBR0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsS0FBRCxDQURwQjtBQUFBLE1BQ2pCQyxVQURpQjtBQUFBLE1BQ0xDLGFBREs7O0FBR3hCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBZjtBQUNBSCxZQUFRLEdBQUdJLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxRQUFYLENBQVg7O0FBQ0EsUUFBSUEsUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBS00sU0FBdEMsRUFBaUQ7QUFDL0NSLG1CQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0Q7QUFDRixHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsU0FDRTtBQUFLLGFBQVMsRUFBQywrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFB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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUE2QixRQUFJLEVBQUMsR0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixFQU9FO0FBQUcsYUFBUyxFQUFDLGVBQWI7QUFBNkIsUUFBSSxFQUFDLEdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUEYsRUFVRTtBQUFHLGFBQVMsRUFBQyxlQUFiO0FBQTZCLFFBQUksRUFBQyxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsQ0FYRixDQURGLENBaEJGLENBekRGLENBRFMsR0E4SFQsRUE1SUosQ0FERjtBQWlKRCxDQTVKRDs7R0FBTWpCLE07O0tBQUFBLE07QUE4SlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IG5hdkZvbnRTaXplID0ge1xuICBmb250U2l6ZTogXCIxOHB4XCIsXG59O1xuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNwLWFcIik7XG4gICAgbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxTdG9yYWdlKTtcbiAgICBpZiAobFN0b3JhZ2UgIT09IG51bGwgfHwgbFN0b3JhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XG4gICAgICA8aDE+XG4gICAgICAgIHtwcm9wcy5oZWFkZXJUaXRsZSA/IChcbiAgICAgICAgICBwcm9wcy5oZWFkZXJUaXRsZVxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0xvZ28ucG5nXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9oMT5cbiAgICAgIHtpc0xvZ2dlZEluID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtbWQtZmxleCBkLWJsb2NrIGZsZXgtcm93IG14LW1kLWF1dG8gbXgtMFwiXG4gICAgICAgICAgICBzdHlsZT17bmF2Rm9udFNpemV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UgbXItYXV0b1wiXG4gICAgICAgICAgICAgIGlkPVwibmF2YmFyTmF2QWx0TWFya3VwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYXJrZXRwbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmsgYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIE1hcmtldCA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+KGN1cnJlbnQpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2pvYnNcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCI+Sm9iczwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgUGFydG5lcnNoaXBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgRm9ydW1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiPkJsb2c8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIsIG1hcmdpbjogMCwgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1lbWJlcnNcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93bk1lbnVMaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kaXZpZHVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbWwtYXV0b1wiXG4gICAgICAgICAgICBpZD1cIm5hdmJhck5hdkRyb3Bkb3duXCJcbiAgICAgICAgICAgIHN0eWxlPXtuYXZGb250U2l6ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtYmVsbFwiIHN0eWxlPXt7IG1hcmdpbjogXCIxNXB4IDIwcHhcIiB9fT48L2k+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcHJvZmlsZUltYWdlMi5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMixcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiwgbWFyZ2luVG9wOiAwLCBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibmF2YmFyRHJvcGRvd25NZW51TGlua1wiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgSmFtZXMgQXNhZnVhaFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICBWaWV3IFByb2ZpbGVcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50IFNldHRpbmdzXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG1sLWF1dG9cIlxuICAgICAgICAgICAgaWQ9XCJuYXZiYXJOYXZEcm9wZG93blwiXG4gICAgICAgICAgICBzdHlsZT17bmF2Rm9udFNpemV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgTG9naW4gPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPihjdXJyZW50KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9zaWdudXBcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U2lnbiBVcDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApfVxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/Navbar.tsx\n");

/***/ })

})