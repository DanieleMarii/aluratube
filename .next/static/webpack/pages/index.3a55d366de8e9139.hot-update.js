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

/***/ "./src/Components/Timeline.js":
/*!************************************!*\
  !*** ./src/Components/Timeline.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Timeline; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  flex: 1;\\n  width: 100%;\\n  padding: 16px;\\n  overflow: hidden;\\n  box-sizing: border-box;\\n  h2 {\\n    font-size: 16px;\\n    margin-bottom: 16px;\\n    text-transform: capitalize;\\n  }\\n  img {\\n    aspect-ratio: 16/9;\\n    font-weight: 500;\\n    object-fit: cover;\\n    width: 100%;\\n    max-width: 210px;\\n    height: auto;\\n  }\\n  section {\\n    width: 100%;\\n    padding: 0;\\n    overflow: hidden;\\n    padding: 16px;\\n    div {\\n      \\n      width: calc(100vw - 16px * 4);\\n      display: grid;\\n      grid-gap: 16px;\\n      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));\\n      grid-auto-flow: column;\\n      grid-auto-columns: minmax(200px,1fr);\\n      overflow-x: scroll;\\n      scroll-snap-type: x mandatory;\\n      a {\\n        scroll-snap-align: start;\\n        span {\\n          padding-top: 8px;\\n          display: block;\\n          padding-right: 24px;\\n          color: \",\n        \";\\n        }\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst StyledTimeline = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"Timeline__StyledTimeline\",\n    componentId: \"sc-e869ef4d-0\"\n})(_templateObject(), (param)=>{\n    let { theme  } = param;\n    return theme.textColorBase || \"#222222\";\n});\n_c = StyledTimeline;\nfunction Timeline(seapropriedades) {\n    // console.log(\"Dentro do componente\", propriedades.playlists);\n    const playlistNames = Object.keys(propriedades.playlists);\n    // Statement\n    // Retorno por expressão\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledTimeline, {\n        children: playlistNames.map((playlistName)=>{\n            const videos = propriedades.playlists[playlistName];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: playlistName\n                    }, void 0, false, {\n                        fileName: \"/home/mariane/estudos/projetos/aluratube/src/Components/Timeline.js\",\n                        lineNumber: 61,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: videos.filter((video)=>{\n                            return video.title;\n                        }).map((video)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: video.url,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: video.thumb\n                                    }, void 0, false, {\n                                        fileName: \"/home/mariane/estudos/projetos/aluratube/src/Components/Timeline.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 41\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: video.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/mariane/estudos/projetos/aluratube/src/Components/Timeline.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 41\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/mariane/estudos/projetos/aluratube/src/Components/Timeline.js\",\n                                lineNumber: 68,\n                                columnNumber: 37\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/mariane/estudos/projetos/aluratube/src/Components/Timeline.js\",\n                        lineNumber: 62,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mariane/estudos/projetos/aluratube/src/Components/Timeline.js\",\n                lineNumber: 60,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/mariane/estudos/projetos/aluratube/src/Components/Timeline.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Timeline;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledTimeline\");\n$RefreshReg$(_c1, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9UaW1lbGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFFdkMsTUFBTUMsaUJBQWlCRCx3RUFBVTs7O3NCQXdDZCxTQUFlRztRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNQyxhQUFhLElBQUk7QUFBUTtLQXhDM0RIO0FBK0NTLFNBQVNJLFNBQVNDLGVBQWUsRUFBRTtJQUM5QywrREFBK0Q7SUFDL0QsTUFBTUMsZ0JBQWdCQyxPQUFPQyxJQUFJLENBQUNDLGFBQWFDLFNBQVM7SUFDeEQsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixxQkFDSSw4REFBQ1Y7a0JBQ0lNLGNBQWNLLEdBQUcsQ0FBQyxDQUFDQyxlQUFpQjtZQUNqQyxNQUFNQyxTQUFTSixhQUFhQyxTQUFTLENBQUNFLGFBQWE7WUFDbkQscUJBQ0ksOERBQUNFOztrQ0FDRyw4REFBQ0M7a0NBQUlIOzs7Ozs7a0NBQ0wsOERBQUNYO2tDQUNJWSxPQUFPRyxNQUFNLENBQUMsQ0FBQ0MsUUFBUzs0QkFDdkIsT0FBT0EsTUFBTUMsS0FBSzt3QkFDcEIsR0FDR1AsR0FBRyxDQUFDLENBQUNNLFFBQVU7NEJBQ2QscUJBQ0ksOERBQUNFO2dDQUFFQyxNQUFNSCxNQUFNSSxHQUFHOztrREFDZCw4REFBQ0M7d0NBQUlDLEtBQUtOLE1BQU1PLEtBQUs7Ozs7OztrREFDckIsOERBQUNDO2tEQUNJUixNQUFNQyxLQUFLOzs7Ozs7Ozs7Ozs7d0JBSTVCOzs7Ozs7Ozs7Ozs7UUFJaEI7Ozs7OztBQUdaLENBQUM7TUFoQ3VCZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9UaW1lbGluZS5qcz9mMGY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IFN0eWxlZFRpbWVsaW5lID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuICBpbWcge1xuICAgIGFzcGVjdC1yYXRpbzogMTYvOTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMjEwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIHNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGRpdiB7XG4gICAgICBcbiAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTZweCAqIDQpO1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtZ2FwOiAxNnB4O1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLG1pbm1heCgyMDBweCwxZnIpKTtcbiAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgICBncmlkLWF1dG8tY29sdW1uczogbWlubWF4KDIwMHB4LDFmcik7XG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgICAgIGEge1xuICAgICAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0Q29sb3JCYXNlIHx8IFwiIzIyMjIyMlwifTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZWxpbmUoc2VhcHJvcHJpZWRhZGVzKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJEZW50cm8gZG8gY29tcG9uZW50ZVwiLCBwcm9wcmllZGFkZXMucGxheWxpc3RzKTtcbiAgICBjb25zdCBwbGF5bGlzdE5hbWVzID0gT2JqZWN0LmtleXMocHJvcHJpZWRhZGVzLnBsYXlsaXN0cyk7XG4gICAgLy8gU3RhdGVtZW50XG4gICAgLy8gUmV0b3JubyBwb3IgZXhwcmVzc8Ojb1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRUaW1lbGluZT5cbiAgICAgICAgICAgIHtwbGF5bGlzdE5hbWVzLm1hcCgocGxheWxpc3ROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9zID0gcHJvcHJpZWRhZGVzLnBsYXlsaXN0c1twbGF5bGlzdE5hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntwbGF5bGlzdE5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZpZGVvcy5maWx0ZXIoKHZpZGVvKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2aWRlby50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKCh2aWRlbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmlkZW8udXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dmlkZW8udGh1bWJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2aWRlby50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvU3R5bGVkVGltZWxpbmU+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJzdHlsZWQiLCJTdHlsZWRUaW1lbGluZSIsImRpdiIsInRoZW1lIiwidGV4dENvbG9yQmFzZSIsIlRpbWVsaW5lIiwic2VhcHJvcHJpZWRhZGVzIiwicGxheWxpc3ROYW1lcyIsIk9iamVjdCIsImtleXMiLCJwcm9wcmllZGFkZXMiLCJwbGF5bGlzdHMiLCJtYXAiLCJwbGF5bGlzdE5hbWUiLCJ2aWRlb3MiLCJzZWN0aW9uIiwiaDIiLCJmaWx0ZXIiLCJ2aWRlbyIsInRpdGxlIiwiYSIsImhyZWYiLCJ1cmwiLCJpbWciLCJzcmMiLCJ0aHVtYiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Timeline.js\n"));

/***/ })

});