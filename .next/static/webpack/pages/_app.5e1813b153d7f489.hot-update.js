"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_Components_CSSReset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Components/CSSReset */ \"./src/Components/CSSReset.js\");\n/* harmony import */ var _src_Components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Components/Menu/components/ColorMode */ \"./src/Components/Menu/components/ColorMode.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst theme = {\n    light: {\n        backgroundBase: \"#f9f9f9\",\n        backgroundLevel1: \"#ffffff\",\n        backgroundLevel2: \"#f0f0f0\",\n        borderBase: \"#e5e5e5\",\n        textColorBase: \"#222222\"\n    },\n    dark: {\n        backgroundBase: \"#181818\",\n        backgroundLevel1: \"#202020\",\n        backgroundLevel2: \"#313131\",\n        borderBase: \"#383838\",\n        textColorBase: \"#FFFFFF\"\n    }\n};\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const contexto = React.useContext(ColorModeContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n            theme: theme.light,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_CSSReset__WEBPACK_IMPORTED_MODULE_1__.CSSReset, {}, void 0, false, {\n                    fileName: \"/home/mariane/estudos/projetos/aluratube/pages/_app.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/mariane/estudos/projetos/aluratube/pages/_app.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mariane/estudos/projetos/aluratube/pages/_app.js\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mariane/estudos/projetos/aluratube/pages/_app.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(MyApp, \"ZR0oSHYnh86JaJQkXCiE4u/O/jw=\");\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUFrRDtBQUNJO0FBQzBCO0FBRWhGLE1BQU1HLFFBQVE7SUFDVkMsT0FBTztRQUNIQyxnQkFBZ0I7UUFDaEJDLGtCQUFrQjtRQUNsQkMsa0JBQWtCO1FBQ2xCQyxZQUFZO1FBQ1pDLGVBQWU7SUFDbkI7SUFDQUMsTUFBTTtRQUNGTCxnQkFBZ0I7UUFDaEJDLGtCQUFrQjtRQUNsQkMsa0JBQWtCO1FBQ2xCQyxZQUFZO1FBQ1pDLGVBQWU7SUFDbkI7QUFDSjtBQUVlLFNBQVNFLE1BQU0sS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4Qjs7SUFDMUIsTUFBTUMsV0FBV0MsTUFBTUMsVUFBVSxDQUFDQztJQUNsQyxxQkFDSSw4REFBQ2YsaUZBQWlCQTtrQkFDZCw0RUFBQ0YsNERBQWFBO1lBQUNHLE9BQU9BLE1BQU1DLEtBQUs7OzhCQUM3Qiw4REFBQ0gsOERBQVFBOzs7Ozs4QkFDVCw4REFBQ1c7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEMsQ0FBQztHQVh1QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IENTU1Jlc2V0IH0gZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL0NTU1Jlc2V0XCI7XG5pbXBvcnQgQ29sb3JNb2RlUHJvdmlkZXIsIHt9IGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9NZW51L2NvbXBvbmVudHMvQ29sb3JNb2RlXCI7XG5cbmNvbnN0IHRoZW1lID0ge1xuICAgIGxpZ2h0OiB7XG4gICAgICAgIGJhY2tncm91bmRCYXNlOiBcIiNmOWY5ZjlcIixcbiAgICAgICAgYmFja2dyb3VuZExldmVsMTogXCIjZmZmZmZmXCIsXG4gICAgICAgIGJhY2tncm91bmRMZXZlbDI6IFwiI2YwZjBmMFwiLFxuICAgICAgICBib3JkZXJCYXNlOiBcIiNlNWU1ZTVcIixcbiAgICAgICAgdGV4dENvbG9yQmFzZTogXCIjMjIyMjIyXCIsXG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAgIGJhY2tncm91bmRCYXNlOiBcIiMxODE4MThcIixcbiAgICAgICAgYmFja2dyb3VuZExldmVsMTogXCIjMjAyMDIwXCIsXG4gICAgICAgIGJhY2tncm91bmRMZXZlbDI6IFwiIzMxMzEzMVwiLFxuICAgICAgICBib3JkZXJCYXNlOiBcIiMzODM4MzhcIixcbiAgICAgICAgdGV4dENvbG9yQmFzZTogXCIjRkZGRkZGXCIsXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgY29uc3QgY29udGV4dG8gPSBSZWFjdC51c2VDb250ZXh0KENvbG9yTW9kZUNvbnRleHQpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyPlxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lLmxpZ2h0fT5cbiAgICAgICAgICAgICAgICA8Q1NTUmVzZXQgLz5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvQ29sb3JNb2RlUHJvdmlkZXI+XG5cbiAgICApXG59Il0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJDU1NSZXNldCIsIkNvbG9yTW9kZVByb3ZpZGVyIiwidGhlbWUiLCJsaWdodCIsImJhY2tncm91bmRCYXNlIiwiYmFja2dyb3VuZExldmVsMSIsImJhY2tncm91bmRMZXZlbDIiLCJib3JkZXJCYXNlIiwidGV4dENvbG9yQmFzZSIsImRhcmsiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbnRleHRvIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiQ29sb3JNb2RlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});