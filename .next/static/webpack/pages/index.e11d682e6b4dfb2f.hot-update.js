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

/***/ "./components/dream-big/Modal.tsx":
/*!****************************************!*\
  !*** ./components/dream-big/Modal.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Dialog */ \"./node_modules/@mui/material/Dialog/index.js\");\n/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.module.scss */ \"./components/dream-big/modal.module.scss\");\n/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modal_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar Modal = function(param) {\n    var open = param.open, children = param.children, closeModal = param.closeModal, selectedSection = param.selectedSection;\n    var handleClose = function() {};\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        onClose: handleClose,\n        open: open,\n        fullWidth: true,\n        maxWidth: 'lg',\n        sx: {\n            '& .MuiPaper-root': {\n                backgroundColor: 'transparent'\n            }\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().overlay), \" flex flex-col\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    onClick: function() {\n                        return closeModal();\n                    },\n                    className: \"\".concat((_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link), \" text-xl relative left-6 top-8 w-fit\"),\n                    children: \"☇ GO BACK\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Backup\\\\Admin\\\\Documents\\\\hipposoft\\\\Rock-steady-d\\\\components\\\\dream-big\\\\Modal.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center text-white\",\n                    children: \"DREAM BIG.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Backup\\\\Admin\\\\Documents\\\\hipposoft\\\\Rock-steady-d\\\\components\\\\dream-big\\\\Modal.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center text-white empty-font\",\n                    children: \"WE CREATE IT\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Backup\\\\Admin\\\\Documents\\\\hipposoft\\\\Rock-steady-d\\\\components\\\\dream-big\\\\Modal.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, _this),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full flex justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: 'py-3 px-4 relative rig',\n                        onClick: function() {\n                            window.localStorage.setItem('section', selectedSection);\n                            closeModal();\n                            next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/#CONTACT');\n                        },\n                        children: \"Find out more\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Backup\\\\Admin\\\\Documents\\\\hipposoft\\\\Rock-steady-d\\\\components\\\\dream-big\\\\Modal.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Backup\\\\Admin\\\\Documents\\\\hipposoft\\\\Rock-steady-d\\\\components\\\\dream-big\\\\Modal.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Backup\\\\Admin\\\\Documents\\\\hipposoft\\\\Rock-steady-d\\\\components\\\\dream-big\\\\Modal.tsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Backup\\\\Admin\\\\Documents\\\\hipposoft\\\\Rock-steady-d\\\\components\\\\dream-big\\\\Modal.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this));\n};\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2RyZWFtLWJpZy9Nb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ087QUFDUztBQUNEOztBQVN4QyxHQUFLLENBQUNJLEtBQUssR0FBRyxRQUNULFFBS2dCLENBQUM7UUFKZEMsSUFBSSxTQUFKQSxJQUFJLEVBQ0pDLFFBQVEsU0FBUkEsUUFBUSxFQUNSQyxVQUFVLFNBQVZBLFVBQVUsRUFDVkMsZUFBZSxTQUFmQSxlQUFlO0lBR25CLEdBQUssQ0FBQ0MsV0FBVyxHQUFHLFFBQVEsR0FBRixDQUFDLENBQUM7SUFFNUIsTUFBTSw2RUFDRFAsNERBQU07UUFDSFEsT0FBTyxFQUFFRCxXQUFXO1FBQ3BCSixJQUFJLEVBQUVBLElBQUk7UUFDVk0sU0FBUyxFQUFFLElBQUk7UUFDZkMsUUFBUSxFQUFFLENBQUk7UUFDZEMsRUFBRSxFQUFFLENBQUM7WUFDRCxDQUFrQixtQkFBRSxDQUFDO2dCQUNqQkMsZUFBZSxFQUFFLENBQWE7WUFDaEMsQ0FBQztRQUNQLENBQUM7OEZBRUFDLENBQUc7WUFBQ0MsU0FBUyxFQUFHLEdBQWlCLE1BQWMsQ0FBN0JiLG1FQUFjLEVBQUMsQ0FBYzs7NEZBQzNDZSxDQUFDO29CQUFDQyxPQUFPLEVBQUUsUUFBUTt3QkFBRlosTUFBTSxDQUFOQSxVQUFVOztvQkFBSVMsU0FBUyxFQUFHLEdBQWMsTUFBb0MsQ0FBaERiLGdFQUFXLEVBQUMsQ0FBb0M7OEJBQUcsQ0FBZTs7Ozs7OzRGQUMvR2tCLENBQUU7b0JBQUNMLFNBQVMsRUFBRyxDQUFzQjs4QkFBRyxDQUFVOzs7Ozs7NEZBQ2xESyxDQUFFO29CQUFDTCxTQUFTLEVBQUcsQ0FBaUM7OEJBQUcsQ0FBWTs7Ozs7O2dCQUMvRFYsUUFBUTs0RkFDUlMsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQXlCOzBHQUN2Q00sQ0FBTTt3QkFDSE4sU0FBUyxFQUFFLENBQXdCO3dCQUNuQ0csT0FBTyxFQUFFLFFBQVEsR0FBRixDQUFDOzRCQUNaSSxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQVMsVUFBRWpCLGVBQWU7NEJBQ3RERCxVQUFVOzRCQUNWTix1REFBVyxDQUFDLENBQVc7d0JBQzNCLENBQUM7a0NBQ0osQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQixDQUFDO0tBMUNLRyxLQUFLO0FBNENYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kcmVhbS1iaWcvTW9kYWwudHN4PzEyNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2cnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW9kYWwubW9kdWxlLnNjc3MnO1xyXG5cclxudHlwZSBtb2RhbFByb3BzID0ge1xyXG4gICAgb3BlbjogYm9vbGVhbixcclxuICAgIGNoaWxkcmVuOiBhbnksXHJcbiAgICBjbG9zZU1vZGFsOiBhbnksXHJcbiAgICBzZWxlY3RlZFNlY3Rpb246IHN0cmluZyxcclxufVxyXG5cclxuY29uc3QgTW9kYWwgPSAoXHJcbiAgICB7XHJcbiAgICAgICAgb3BlbixcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgICAgICBjbG9zZU1vZGFsLFxyXG4gICAgICAgIHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH06bW9kYWxQcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge307XHJcbiAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9IFxyXG4gICAgICAgICAgICBvcGVuPXtvcGVufSBcclxuICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfSBcclxuICAgICAgICAgICAgbWF4V2lkdGg9eydsZyd9XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAnJiAuTXVpUGFwZXItcm9vdCc6IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm92ZXJsYXl9IGZsZXggZmxleC1jb2xgfT5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGNsb3NlTW9kYWwoKX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlua30gdGV4dC14bCByZWxhdGl2ZSBsZWZ0LTYgdG9wLTggdy1maXRgfT4mIzk3MzU7IEdPIEJBQ0s8L2E+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZWB9PkRSRUFNIEJJRy48L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YHRleHQtY2VudGVyIHRleHQtd2hpdGUgZW1wdHktZm9udGB9PldFIENSRUFURSBJVDwvaDE+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGZsZXgganVzdGlmeS1lbmQnPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydweS0zIHB4LTQgcmVsYXRpdmUgcmlnJ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VjdGlvbicsIHNlbGVjdGVkU2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8jQ09OVEFDVCcpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBGaW5kIG91dCBtb3JlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0RpYWxvZz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyIiwiRGlhbG9nIiwic3R5bGVzIiwiTW9kYWwiLCJvcGVuIiwiY2hpbGRyZW4iLCJjbG9zZU1vZGFsIiwic2VsZWN0ZWRTZWN0aW9uIiwiaGFuZGxlQ2xvc2UiLCJvbkNsb3NlIiwiZnVsbFdpZHRoIiwibWF4V2lkdGgiLCJzeCIsImJhY2tncm91bmRDb2xvciIsImRpdiIsImNsYXNzTmFtZSIsIm92ZXJsYXkiLCJhIiwib25DbGljayIsImxpbmsiLCJoMSIsImJ1dHRvbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dream-big/Modal.tsx\n");

/***/ })

});