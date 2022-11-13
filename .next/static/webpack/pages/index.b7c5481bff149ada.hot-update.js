"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Components/Favoritos.js":
/*!*************************************!*\
  !*** ./src/Components/Favoritos.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Favoritos; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 100%;\\n    padding: 16px 32px;\\n    h2{\\n        font-size: 16px;\\n    }\\n\\n    img{\\n        width: 100px;\\n        height: 100px;\\n        border-radius: 50%;\\n        display: block;\\n    }\\n\\n    .aluraTubesItens{\\n        margin-top: 16px;\\n        display: flex;\\n        flex-direction: row;\\n        column-gap: 10px;\\n    }\\n\\n    a{\\n        row-gap: 8px;\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n    }\\n\\n    span{\\n        font-family: Helvetica;\\n        font-weight: 400;\\n        font-size: 14px;\\n        line-height: 16px;\\n        color: #000000;\\n    }\\n    \\n\\n    \\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst StyledFavoritos = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"Favoritos__StyledFavoritos\",\n    componentId: \"sc-c1964a8c-0\"\n})(_templateObject());\n_c = StyledFavoritos;\nfunction Favoritos(props) {\n    const aluraTubesItens = Object.keys(props.aluraTubes);\n    console.log(aluraTubesItens);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledFavoritos, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"AluraTubes Favoritos\"\n            }, void 0, false, {\n                fileName: \"/home/mariane/estudos/projetos/aluratube/src/Components/Favoritos.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: aluraTubesItens.map((aluraTubesItem)=>{\n                    const tubes = props.aluraTubes[aluraTubesItem];\n                    console.log(tubes);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"aluraTubesItens\",\n                        children: tubes.map((tube)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                target: \"_blank\",\n                                href: tube.link_canal,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: tube.url_foto,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/mariane/estudos/projetos/aluratube/src/Components/Favoritos.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 41\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: tube.nome_aluratube\n                                    }, void 0, false, {\n                                        fileName: \"/home/mariane/estudos/projetos/aluratube/src/Components/Favoritos.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 41\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/mariane/estudos/projetos/aluratube/src/Components/Favoritos.js\",\n                                lineNumber: 58,\n                                columnNumber: 37\n                            }, this);\n                        })\n                    }, aluraTubesItem, false, {\n                        fileName: \"/home/mariane/estudos/projetos/aluratube/src/Components/Favoritos.js\",\n                        lineNumber: 55,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/mariane/estudos/projetos/aluratube/src/Components/Favoritos.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mariane/estudos/projetos/aluratube/src/Components/Favoritos.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Favoritos;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledFavoritos\");\n$RefreshReg$(_c1, \"Favoritos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9GYXZvcml0b3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFBc0M7QUFHdEMsTUFBTUMsa0JBQWtCRCx3RUFBVTs7OztLQUE1QkM7QUF3Q1MsU0FBU0UsVUFBVUMsS0FBSyxFQUFFO0lBQ3JDLE1BQU1DLGtCQUFrQkMsT0FBT0MsSUFBSSxDQUFDSCxNQUFNSSxVQUFVO0lBQ3BEQyxRQUFRQyxHQUFHLENBQUNMO0lBQ1oscUJBQ0ksOERBQUNKOzswQkFDRyw4REFBQ1U7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ1Q7MEJBQ0lHLGdCQUFnQk8sR0FBRyxDQUFDLENBQUNDLGlCQUFtQjtvQkFDckMsTUFBTUMsUUFBUVYsTUFBTUksVUFBVSxDQUFDSyxlQUFlO29CQUM5Q0osUUFBUUMsR0FBRyxDQUFDSTtvQkFDWixxQkFDSSw4REFBQ1o7d0JBQXlCYSxXQUFVO2tDQUMvQkQsTUFBTUYsR0FBRyxDQUFDLENBQUNJLE9BQVM7NEJBQ2pCLHFCQUNJLDhEQUFDQztnQ0FBRUMsUUFBUTtnQ0FBVUMsTUFBTUgsS0FBS0ksVUFBVTs7a0RBQ3RDLDhEQUFDQzt3Q0FBSUMsS0FBS04sS0FBS08sUUFBUTt3Q0FBRUMsS0FBSTs7Ozs7O2tEQUM3Qiw4REFBQ0M7a0RBQU1ULEtBQUtVLGNBQWM7Ozs7Ozs7Ozs7Ozt3QkFJdEM7dUJBVE1iOzs7OztnQkFhbEI7Ozs7Ozs7Ozs7OztBQUtoQixDQUFDO01BN0J1QlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmF2b3JpdG9zLmpzPzE0MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG5cbmNvbnN0IFN0eWxlZEZhdm9yaXRvcyA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xuICAgIGgye1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmFsdXJhVHViZXNJdGVuc3tcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgY29sdW1uLWdhcDogMTBweDtcbiAgICB9XG5cbiAgICBhe1xuICAgICAgICByb3ctZ2FwOiA4cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgc3BhbntcbiAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuICAgIFxuXG4gICAgXG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhdm9yaXRvcyhwcm9wcykge1xuICAgIGNvbnN0IGFsdXJhVHViZXNJdGVucyA9IE9iamVjdC5rZXlzKHByb3BzLmFsdXJhVHViZXMpXG4gICAgY29uc29sZS5sb2coYWx1cmFUdWJlc0l0ZW5zKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkRmF2b3JpdG9zPlxuICAgICAgICAgICAgPGgyPkFsdXJhVHViZXMgRmF2b3JpdG9zPC9oMj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2FsdXJhVHViZXNJdGVucy5tYXAoKGFsdXJhVHViZXNJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR1YmVzID0gcHJvcHMuYWx1cmFUdWJlc1thbHVyYVR1YmVzSXRlbV1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codHViZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2FsdXJhVHViZXNJdGVtfSBjbGFzc05hbWU9XCJhbHVyYVR1YmVzSXRlbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHViZXMubWFwKCh0dWJlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9e1wiX2JsYW5rXCJ9IGhyZWY9e3R1YmUubGlua19jYW5hbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3R1YmUudXJsX2ZvdG99IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3R1YmUubm9tZV9hbHVyYXR1YmV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvU3R5bGVkRmF2b3JpdG9zPlxuICAgIClcbn0iXSwibmFtZXMiOlsic3R5bGVkIiwiU3R5bGVkRmF2b3JpdG9zIiwiZGl2IiwiRmF2b3JpdG9zIiwicHJvcHMiLCJhbHVyYVR1YmVzSXRlbnMiLCJPYmplY3QiLCJrZXlzIiwiYWx1cmFUdWJlcyIsImNvbnNvbGUiLCJsb2ciLCJoMiIsIm1hcCIsImFsdXJhVHViZXNJdGVtIiwidHViZXMiLCJjbGFzc05hbWUiLCJ0dWJlIiwiYSIsInRhcmdldCIsImhyZWYiLCJsaW5rX2NhbmFsIiwiaW1nIiwic3JjIiwidXJsX2ZvdG8iLCJhbHQiLCJzcGFuIiwibm9tZV9hbHVyYXR1YmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Favoritos.js\n"));

/***/ })

});