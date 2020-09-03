webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/blog/BlogPost.tsx":
/*!**************************************!*\
  !*** ./components/blog/BlogPost.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlogPost; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BlogContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogContent */ \"./components/blog/BlogContent.tsx\");\n/* harmony import */ var _LoadData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadData */ \"./components/blog/LoadData.tsx\");\nvar _jsxFileName = \"/home/james/Documents/dev/cp-fe/components/blog/BlogPost.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction BlogPost() {\n  var _this = this;\n\n  var article = _BlogContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(function (article) {\n    return article.name;\n  });\n  if (!article) return __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 24\n    }\n  }, \"Article does not exist!\");\n  return __jsx(\"div\", {\n    className: \"row col-12\",\n    style: {\n      border: \"1px solid green\",\n      width: \"100%\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"col-12\",\n    style: {\n      marginTop: 20\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, _BlogContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(function (blog) {\n    return __jsx(\"div\", {\n      className: \"content-margin\",\n      style: {\n        marginBottom: 30\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }\n    }, __jsx(\"img\", {\n      className: \"image-content lazy-load float-left\",\n      style: {\n        marginRight: 90\n      },\n      src: blog.img_url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }\n    }), __jsx(\"div\", {\n      className: \"card-body text-wrap\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }\n    }, __jsx(\"p\", {\n      style: {\n        marginBottom: 35\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 15\n      }\n    }, \" \", blog.date, \" | \", blog.likes, \" | \", blog.votes), __jsx(\"h1\", {\n      className: \"card-title text-uppercase font-weight-bolder\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 15\n      }\n    }, blog.title), __jsx(\"p\", {\n      className: \"card-text\",\n      style: {\n        marginBottom: 32\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 15\n      }\n    }, blog.content[0].substring(0, 230), \"...\"), __jsx(_LoadData__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }\n    })));\n  })));\n}\n_c = BlogPost;\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9nL0Jsb2dQb3N0LnRzeD9mNjM1Il0sIm5hbWVzIjpbIkJsb2dQb3N0IiwiYXJ0aWNsZSIsIkJsb2dDb250ZW50IiwiZmluZCIsIm5hbWUiLCJib3JkZXIiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm1hcCIsImJsb2ciLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImltZ191cmwiLCJkYXRlIiwibGlrZXMiLCJ2b3RlcyIsInRpdGxlIiwiY29udGVudCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFDakMsTUFBTUMsT0FBTyxHQUFHQyxvREFBVyxDQUFDQyxJQUFaLENBQWlCLFVBQUNGLE9BQUQ7QUFBQSxXQUFhQSxPQUFPLENBQUNHLElBQXJCO0FBQUEsR0FBakIsQ0FBaEI7QUFFQSxNQUFJLENBQUNILE9BQUwsRUFBYyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQVA7QUFFZCxTQUNFO0FBQ0UsYUFBUyxFQUFDLFlBRFo7QUFFRSxTQUFLLEVBQUU7QUFBRUksWUFBTSxFQUFFLGlCQUFWO0FBQTZCQyxXQUFLLEVBQUU7QUFBcEMsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxvREFBVyxDQUFDTSxHQUFaLENBQWdCLFVBQUNDLElBQUQ7QUFBQSxXQUNmO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQWdDLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCLE9BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLGVBQVMsRUFBQyxvQ0FEWjtBQUVFLFdBQUssRUFBRTtBQUFFQyxtQkFBVyxFQUFFO0FBQWYsT0FGVDtBQUdFLFNBQUcsRUFBRUYsSUFBSSxDQUFDRyxPQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU1FO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFdBQUssRUFBRTtBQUFFRixvQkFBWSxFQUFFO0FBQWhCLE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHLEdBREgsRUFFR0QsSUFBSSxDQUFDSSxJQUZSLFNBRWlCSixJQUFJLENBQUNLLEtBRnRCLFNBRWdDTCxJQUFJLENBQUNNLEtBRnJDLENBREYsRUFLRTtBQUFJLGVBQVMsRUFBQyw4Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dOLElBQUksQ0FBQ08sS0FEUixDQUxGLEVBUUU7QUFBRyxlQUFTLEVBQUMsV0FBYjtBQUF5QixXQUFLLEVBQUU7QUFBRU4sb0JBQVksRUFBRTtBQUFoQixPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELElBQUksQ0FBQ1EsT0FBTCxDQUFhLENBQWIsRUFBZ0JDLFNBQWhCLENBQTBCLENBQTFCLEVBQTZCLEdBQTdCLENBREgsUUFSRixFQWFFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWJGLENBTkYsQ0FEZTtBQUFBLEdBQWhCLENBREgsQ0FKRixDQURGO0FBaUNEO0tBdEN1QmxCLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jsb2cvQmxvZ1Bvc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2dDb250ZW50IGZyb20gXCIuL0Jsb2dDb250ZW50XCI7XHJcbmltcG9ydCBMb2FkRGF0YSBmcm9tIFwiLi9Mb2FkRGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1Bvc3QoKSB7XHJcbiAgY29uc3QgYXJ0aWNsZSA9IEJsb2dDb250ZW50LmZpbmQoKGFydGljbGUpID0+IGFydGljbGUubmFtZSk7XHJcblxyXG4gIGlmICghYXJ0aWNsZSkgcmV0dXJuIDxoMT5BcnRpY2xlIGRvZXMgbm90IGV4aXN0ITwvaDE+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJyb3cgY29sLTEyXCJcclxuICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCBncmVlblwiLCB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgIHtCbG9nQ29udGVudC5tYXAoKGJsb2cpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1tYXJnaW5cIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDMwIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGVudCBsYXp5LWxvYWQgZmxvYXQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDkwIH19XHJcbiAgICAgICAgICAgICAgc3JjPXtibG9nLmltZ191cmx9XHJcbiAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgdGV4dC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAzNSB9fT5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIHtibG9nLmRhdGV9IHwge2Jsb2cubGlrZXN9IHwge2Jsb2cudm90ZXN9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWJvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAge2Jsb2cudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDMyIH19PlxyXG4gICAgICAgICAgICAgICAge2Jsb2cuY29udGVudFswXS5zdWJzdHJpbmcoMCwgMjMwKX0uLi5cclxuICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiBJbXBvcnRlZCBMb2FkRGF0YSBmcm9tIENvbXBvbmVudHMgICAgICAqL31cclxuICAgICAgICAgICAgICA8TG9hZERhdGEgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/blog/BlogPost.tsx\n");

/***/ })

})