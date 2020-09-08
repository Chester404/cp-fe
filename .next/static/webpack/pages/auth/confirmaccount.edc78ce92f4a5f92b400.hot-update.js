webpackHotUpdate_N_E("pages/auth/confirmaccount",{

/***/ "./components/Prompt.tsx":
/*!*******************************!*\
  !*** ./components/Prompt.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/home/james/Documents/dev/cp-fe/components/Prompt.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Prompt = function Prompt(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.show),\n      closeBox = _useState[0],\n      setCloseBox = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setCloseBox(props.show);\n  }, [props.show]);\n  return __jsx(\"div\", {\n    id: \"myModal\",\n    className: \"modal overlay\",\n    style: {\n      display: closeBox ? \"block\" : \"\",\n      zIndex: 9999\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"modal-content\",\n    style: {\n      width: \"400px\",\n      position: \"absolute\",\n      left: \"50%\",\n      top: \"50%\",\n      marginLeft: \"-150px\",\n      marginTop: \"-150px\",\n      padding: \"20px\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"h5\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \" \", props.children), props.success ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: props.linkTo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, props.linkText)) : __jsx(\"a\", {\n    href: \"#\",\n    onClick: function onClick() {\n      return setCloseBox(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, props.linkText)));\n};\n\n_s(Prompt, \"KXoXpXCbs4XVqUcTknwog92P9MM=\");\n\n_c = Prompt;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prompt);\n\nvar _c;\n\n$RefreshReg$(_c, \"Prompt\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9tcHQudHN4P2I2YzUiXSwibmFtZXMiOlsiUHJvbXB0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNob3ciLCJjbG9zZUJveCIsInNldENsb3NlQm94IiwidXNlRWZmZWN0IiwiZGlzcGxheSIsInpJbmRleCIsIndpZHRoIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJjaGlsZHJlbiIsInN1Y2Nlc3MiLCJsaW5rVG8iLCJsaW5rVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBZ0I7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQ0QsS0FBSyxDQUFDRSxJQUFQLENBRFg7QUFBQSxNQUN0QkMsUUFEc0I7QUFBQSxNQUNaQyxXQURZOztBQUU3QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELGVBQVcsQ0FBQ0osS0FBSyxDQUFDRSxJQUFQLENBQVg7QUFDRCxHQUZRLEVBRU4sQ0FBQ0YsS0FBSyxDQUFDRSxJQUFQLENBRk0sQ0FBVDtBQUdBLFNBQ0U7QUFDRSxNQUFFLEVBQUMsU0FETDtBQUVFLGFBQVMsRUFBQyxlQUZaO0FBR0UsU0FBSyxFQUFFO0FBQUVJLGFBQU8sRUFBRUgsUUFBUSxHQUFHLE9BQUgsR0FBYSxFQUFoQztBQUFvQ0ksWUFBTSxFQUFFO0FBQTVDLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQ0UsYUFBUyxFQUFDLGVBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFLE9BREY7QUFFTEMsY0FBUSxFQUFFLFVBRkw7QUFHTEMsVUFBSSxFQUFFLEtBSEQ7QUFJTEMsU0FBRyxFQUFFLEtBSkE7QUFLTEMsZ0JBQVUsRUFBRSxRQUxQO0FBTUxDLGVBQVMsRUFBRSxRQU5OO0FBT0xDLGFBQU8sRUFBRSxNQVBKO0FBUUxDLGVBQVMsRUFBRTtBQVJOLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTWYsS0FBSyxDQUFDZ0IsUUFBWixDQWRGLEVBZ0JHaEIsS0FBSyxDQUFDaUIsT0FBTixHQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVqQixLQUFLLENBQUNrQixNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQ2xCLEtBQUssQ0FBQ21CLFFBQXRDLENBREYsQ0FERCxHQUtDO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxXQUFPLEVBQUU7QUFBQSxhQUFNZixXQUFXLENBQUMsS0FBRCxDQUFqQjtBQUFBLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osS0FBSyxDQUFDbUIsUUFEVCxDQXJCSixDQU5GLENBREY7QUFvQ0QsQ0F6Q0Q7O0dBQU1wQixNOztLQUFBQSxNO0FBMkNTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvbXB0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUHJvbXB0ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgW2Nsb3NlQm94LCBzZXRDbG9zZUJveF0gPSB1c2VTdGF0ZShwcm9wcy5zaG93KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDbG9zZUJveChwcm9wcy5zaG93KTtcbiAgfSwgW3Byb3BzLnNob3ddKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD1cIm15TW9kYWxcIlxuICAgICAgY2xhc3NOYW1lPVwibW9kYWwgb3ZlcmxheVwiXG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBjbG9zZUJveCA/IFwiYmxvY2tcIiA6IFwiXCIsIHpJbmRleDogOTk5OSB9fVxuICAgID5cbiAgICAgIHsvKiA8IS0tIE1vZGFsIGNvbnRlbnQgLS0+ICovfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogXCI0MDBweFwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgICAgbWFyZ2luTGVmdDogXCItMTUwcHhcIixcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTE1MHB4XCIsXG4gICAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7LyogPHA+e3Byb3BzLnRpdGxlfTwvcD4gKi99XG4gICAgICAgIDxoNT4ge3Byb3BzLmNoaWxkcmVufTwvaDU+XG4gICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+ICovfVxuICAgICAgICB7cHJvcHMuc3VjY2VzcyA/IChcbiAgICAgICAgICA8TGluayBocmVmPXtwcm9wcy5saW5rVG99PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+e3Byb3BzLmxpbmtUZXh0fTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBzZXRDbG9zZUJveChmYWxzZSl9PlxuICAgICAgICAgICAge3Byb3BzLmxpbmtUZXh0fVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKX1cbiAgICAgICAgey8qIDwvZGl2PiAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvbXB0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Prompt.tsx\n");

/***/ })

})