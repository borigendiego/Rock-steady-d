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

/***/ "./components/how/index.tsx":
/*!**********************************!*\
  !*** ./components/how/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _how_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./how.module.scss */ \"./components/how/how.module.scss\");\n/* harmony import */ var _how_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_how_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./components/how/constants.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar How = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), selectedItem = ref[0], setSelectedItem = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_how_module_scss__WEBPACK_IMPORTED_MODULE_3___default().background), \" flex h-screen flex-wrap px-40\"),\n        id: 'HOW',\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-2/3 flex flex-col justify-center relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: 'empty-font',\n                        children: \"HOW WE\"\n                    }, void 0, false, {\n                        fileName: \"/Users/diegoborigen/The Hipposoft/Kam/Rock Steady/Rock-steady-d/components/how/index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"DO IT\"\n                    }, void 0, false, {\n                        fileName: \"/Users/diegoborigen/The Hipposoft/Kam/Rock Steady/Rock-steady-d/components/how/index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/diegoborigen/The Hipposoft/Kam/Rock Steady/Rock-steady-d/components/how/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: 'flex w-1/3 justify-center items-center flex-col relative',\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: 'mb-4 text-center',\n                        children: \"This is how it works\"\n                    }, void 0, false, {\n                        fileName: \"/Users/diegoborigen/The Hipposoft/Kam/Rock Steady/Rock-steady-d/components/how/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: 'text-center h-28',\n                        children: _constants__WEBPACK_IMPORTED_MODULE_2__.CAROUSEL_DATA[selectedItem].description\n                    }, void 0, false, {\n                        fileName: \"/Users/diegoborigen/The Hipposoft/Kam/Rock Steady/Rock-steady-d/components/how/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: 'my-10 w-full',\n                        src: '/assets/images/separator.svg',\n                        alt: 'Separator SVG'\n                    }, void 0, false, {\n                        fileName: \"/Users/diegoborigen/The Hipposoft/Kam/Rock Steady/Rock-steady-d/components/how/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: 'flex',\n                        children: _constants__WEBPACK_IMPORTED_MODULE_2__.CAROUSEL_DATA.map(function(item) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: 'flex flex-col items-center cursor-pointer',\n                                onMouseEnter: function() {\n                                    return setSelectedItem(item.id);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: 'mx-4 flex justify-center items-center rounded-full bg-gray-700 w-20 h-20 mb-3 hover:scale-125 duration-300',\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: 'w-10 h-10',\n                                            src: item.icon,\n                                            alt: \"\".concat(item.title, \" SVG icon\")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/diegoborigen/The Hipposoft/Kam/Rock Steady/Rock-steady-d/components/how/index.tsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 41\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/diegoborigen/The Hipposoft/Kam/Rock Steady/Rock-steady-d/components/how/index.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 37\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/diegoborigen/The Hipposoft/Kam/Rock Steady/Rock-steady-d/components/how/index.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 37\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/diegoborigen/The Hipposoft/Kam/Rock Steady/Rock-steady-d/components/how/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 33\n                            }, _this1));\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/diegoborigen/The Hipposoft/Kam/Rock Steady/Rock-steady-d/components/how/index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/diegoborigen/The Hipposoft/Kam/Rock Steady/Rock-steady-d/components/how/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/diegoborigen/The Hipposoft/Kam/Rock Steady/Rock-steady-d/components/how/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, _this));\n};\n_s(How, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = How;\n/* harmony default export */ __webpack_exports__[\"default\"] = (How);\nvar _c;\n$RefreshReg$(_c, \"How\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvdy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUNEO0FBQ0s7OztBQUUzQyxHQUFLLENBQUNJLEdBQUcsR0FBRyxRQUNaLEdBRGtCLENBQUM7OztJQUNmLEdBQUssQ0FBbUNILEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTNDSSxZQUFZLEdBQXFCSixHQUFXLEtBQTlCSyxlQUFlLEdBQUlMLEdBQVc7SUFFbkQsTUFBTSw2RUFDRE0sQ0FBRztRQUFDQyxTQUFTLEVBQUcsR0FBb0IsTUFBOEIsQ0FBaEROLG9FQUFpQixFQUFDLENBQThCO1FBQUdRLEVBQUUsRUFBRSxDQUFLOzt3RkFDMUVILENBQUc7Z0JBQUNDLFNBQVMsRUFBRyxDQUEyQzs7Z0dBRW5ERyxDQUFFO3dCQUFDSCxTQUFTLEVBQUUsQ0FBWTtrQ0FBRSxDQUFNOzs7Ozs7Z0dBQ2xDRyxDQUFFO2tDQUFDLENBQUs7Ozs7Ozs7Ozs7Ozt3RkFHaEJKLENBQUc7Z0JBQUNDLFNBQVMsRUFBRSxDQUEwRDs7Z0dBQ3JFSSxDQUFFO3dCQUFDSixTQUFTLEVBQUUsQ0FBa0I7a0NBQUUsQ0FBb0I7Ozs7OztnR0FDdERLLENBQUM7d0JBQUNMLFNBQVMsRUFBRSxDQUFrQjtrQ0FBR0wscURBQWEsQ0FBQ0UsWUFBWSxFQUFFUyxXQUFXOzs7Ozs7Z0dBQ3pFQyxDQUFHO3dCQUFDUCxTQUFTLEVBQUUsQ0FBYzt3QkFBRVEsR0FBRyxFQUFFLENBQThCO3dCQUFFQyxHQUFHLEVBQUUsQ0FBZTs7Ozs7O2dHQUN4RlYsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFLENBQU07a0NBRWRMLHlEQUFpQixDQUFDLFFBQVEsQ0FBUGdCLElBQUksRUFBSyxDQUFDOzRCQUN6QixNQUFNLDZFQUNEWixDQUFHO2dDQUFDQyxTQUFTLEVBQUUsQ0FBMkM7Z0NBQUVZLFlBQVksRUFBRSxRQUFRO29DQUFGZCxNQUFNLENBQU5BLGVBQWUsQ0FBQ2EsSUFBSSxDQUFDVCxFQUFFOzs7Z0hBQ25HSCxDQUFHO3dDQUFDQyxTQUFTLEVBQUUsQ0FBNEc7OEhBQ3ZITyxDQUFHOzRDQUFDUCxTQUFTLEVBQUUsQ0FBVzs0Q0FBRVEsR0FBRyxFQUFFRyxJQUFJLENBQUNFLElBQUk7NENBQUVKLEdBQUcsRUFBRyxHQUFhLE1BQVMsQ0FBcEJFLElBQUksQ0FBQ0csS0FBSyxFQUFDLENBQVM7Ozs7Ozs7Ozs7O2dIQUU1RVQsQ0FBQztrREFBRU0sSUFBSSxDQUFDRyxLQUFLOzs7Ozs7Ozs7Ozs7d0JBRzFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QixDQUFDO0dBaENLbEIsR0FBRztLQUFIQSxHQUFHO0FBa0NULCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob3cvaW5kZXgudHN4PzY2M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvdy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBDQVJPVVNFTF9EQVRBIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBIb3cgPSAoKSA9PiB7XG4gICAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJhY2tncm91bmR9IGZsZXggaC1zY3JlZW4gZmxleC13cmFwIHB4LTQwYH0gaWQ9eydIT1cnfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy0yLzMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZWB9PlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9eydlbXB0eS1mb250J30+SE9XIFdFPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkRPIElUPC9oMT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggdy0xLzMganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sIHJlbGF0aXZlJ30+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17J21iLTQgdGV4dC1jZW50ZXInfT5UaGlzIGlzIGhvdyBpdCB3b3JrczwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXsndGV4dC1jZW50ZXIgaC0yOCd9PntDQVJPVVNFTF9EQVRBW3NlbGVjdGVkSXRlbV0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXsnbXktMTAgdy1mdWxsJ30gc3JjPXsnL2Fzc2V0cy9pbWFnZXMvc2VwYXJhdG9yLnN2Zyd9IGFsdD17J1NlcGFyYXRvciBTVkcnfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCd9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDQVJPVVNFTF9EQVRBLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXInfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNlbGVjdGVkSXRlbShpdGVtLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J214LTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLWdyYXktNzAwIHctMjAgaC0yMCBtYi0zIGhvdmVyOnNjYWxlLTEyNSBkdXJhdGlvbi0zMDAnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17J3ctMTAgaC0xMCd9IHNyYz17aXRlbS5pY29ufSBhbHQ9e2Ake2l0ZW0udGl0bGV9IFNWRyBpY29uYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG93OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ0FST1VTRUxfREFUQSIsIkhvdyIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImJhY2tncm91bmQiLCJpZCIsImgxIiwiaDMiLCJwIiwiZGVzY3JpcHRpb24iLCJpbWciLCJzcmMiLCJhbHQiLCJtYXAiLCJpdGVtIiwib25Nb3VzZUVudGVyIiwiaWNvbiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/how/index.tsx\n");

/***/ })

});