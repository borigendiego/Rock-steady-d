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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Dialog */ \"./node_modules/@mui/material/Dialog/index.js\");\n/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.module.scss */ \"./components/dream-big/modal.module.scss\");\n/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modal_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar Modal = function(param) {\n    var open = param.open, children = param.children, closeModal = param.closeModal, selectedSection = param.selectedSection;\n    var handleClose = function() {};\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        onClose: handleClose,\n        open: open,\n        fullWidth: true,\n        maxWidth: 'lg',\n        sx: {\n            '& .MuiPaper-root': {\n                backgroundColor: 'transparent'\n            }\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().overlay), \" flex flex-col\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    onClick: function() {\n                        return closeModal();\n                    },\n                    className: \"\".concat((_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link), \" text-xl relative left-6 top-8 w-fit\"),\n                    children: \"☇ GO BACK\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Backup\\\\Admin\\\\Documents\\\\hipposoft\\\\Rock-steady-d\\\\components\\\\dream-big\\\\Modal.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center text-white\",\n                    children: \"DREAM BIG.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Backup\\\\Admin\\\\Documents\\\\hipposoft\\\\Rock-steady-d\\\\components\\\\dream-big\\\\Modal.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center text-white empty-font\",\n                    children: \"WE CREATE IT\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Backup\\\\Admin\\\\Documents\\\\hipposoft\\\\Rock-steady-d\\\\components\\\\dream-big\\\\Modal.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, _this),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: 'py-3 px-4 relative ',\n                        onClick: function() {\n                            window.localStorage.setItem('section', selectedSection);\n                            closeModal();\n                            next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/#CONTACT');\n                        },\n                        children: \"Find out more\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Backup\\\\Admin\\\\Documents\\\\hipposoft\\\\Rock-steady-d\\\\components\\\\dream-big\\\\Modal.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Backup\\\\Admin\\\\Documents\\\\hipposoft\\\\Rock-steady-d\\\\components\\\\dream-big\\\\Modal.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Backup\\\\Admin\\\\Documents\\\\hipposoft\\\\Rock-steady-d\\\\components\\\\dream-big\\\\Modal.tsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Backup\\\\Admin\\\\Documents\\\\hipposoft\\\\Rock-steady-d\\\\components\\\\dream-big\\\\Modal.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this));\n};\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2RyZWFtLWJpZy9Nb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ087QUFDUztBQUNEOztBQVN4QyxHQUFLLENBQUNJLEtBQUssR0FBRyxRQUNULFFBS2dCLENBQUM7UUFKZEMsSUFBSSxTQUFKQSxJQUFJLEVBQ0pDLFFBQVEsU0FBUkEsUUFBUSxFQUNSQyxVQUFVLFNBQVZBLFVBQVUsRUFDVkMsZUFBZSxTQUFmQSxlQUFlO0lBR25CLEdBQUssQ0FBQ0MsV0FBVyxHQUFHLFFBQVEsR0FBRixDQUFDLENBQUM7SUFFNUIsTUFBTSw2RUFDRFAsNERBQU07UUFDSFEsT0FBTyxFQUFFRCxXQUFXO1FBQ3BCSixJQUFJLEVBQUVBLElBQUk7UUFDVk0sU0FBUyxFQUFFLElBQUk7UUFDZkMsUUFBUSxFQUFFLENBQUk7UUFDZEMsRUFBRSxFQUFFLENBQUM7WUFDRCxDQUFrQixtQkFBRSxDQUFDO2dCQUNqQkMsZUFBZSxFQUFFLENBQWE7WUFDaEMsQ0FBQztRQUNQLENBQUM7OEZBRUFDLENBQUc7WUFBQ0MsU0FBUyxFQUFHLEdBQWlCLE1BQWMsQ0FBN0JiLG1FQUFjLEVBQUMsQ0FBYzs7NEZBQzNDZSxDQUFDO29CQUFDQyxPQUFPLEVBQUUsUUFBUTt3QkFBRlosTUFBTSxDQUFOQSxVQUFVOztvQkFBSVMsU0FBUyxFQUFHLEdBQWMsTUFBb0MsQ0FBaERiLGdFQUFXLEVBQUMsQ0FBb0M7OEJBQUcsQ0FBZTs7Ozs7OzRGQUMvR2tCLENBQUU7b0JBQUNMLFNBQVMsRUFBRyxDQUFzQjs4QkFBRyxDQUFVOzs7Ozs7NEZBQ2xESyxDQUFFO29CQUFDTCxTQUFTLEVBQUcsQ0FBaUM7OEJBQUcsQ0FBWTs7Ozs7O2dCQUMvRFYsUUFBUTs0RkFDUlMsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQVE7MEdBQ3RCTSxDQUFNO3dCQUNITixTQUFTLEVBQUUsQ0FBcUI7d0JBQ2hDRyxPQUFPLEVBQUUsUUFBUSxHQUFGLENBQUM7NEJBQ1pJLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBUyxVQUFFakIsZUFBZTs0QkFDdERELFVBQVU7NEJBQ1ZOLHVEQUFXLENBQUMsQ0FBVzt3QkFDM0IsQ0FBQztrQ0FDSixDQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCLENBQUM7S0ExQ0tHLEtBQUs7QUE0Q1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RyZWFtLWJpZy9Nb2RhbC50c3g/MTI2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbXVpL21hdGVyaWFsL0RpYWxvZyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tb2RhbC5tb2R1bGUuc2Nzcyc7XHJcblxyXG50eXBlIG1vZGFsUHJvcHMgPSB7XHJcbiAgICBvcGVuOiBib29sZWFuLFxyXG4gICAgY2hpbGRyZW46IGFueSxcclxuICAgIGNsb3NlTW9kYWw6IGFueSxcclxuICAgIHNlbGVjdGVkU2VjdGlvbjogc3RyaW5nLFxyXG59XHJcblxyXG5jb25zdCBNb2RhbCA9IChcclxuICAgIHtcclxuICAgICAgICBvcGVuLFxyXG4gICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgIGNsb3NlTW9kYWwsXHJcbiAgICAgICAgc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTptb2RhbFByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7fTtcclxuICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gXHJcbiAgICAgICAgICAgIG9wZW49e29wZW59IFxyXG4gICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9IFxyXG4gICAgICAgICAgICBtYXhXaWR0aD17J2xnJ31cclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICcmIC5NdWlQYXBlci1yb290Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMub3ZlcmxheX0gZmxleCBmbGV4LWNvbGB9PlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gY2xvc2VNb2RhbCgpfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5rfSB0ZXh0LXhsIHJlbGF0aXZlIGxlZnQtNiB0b3AtOCB3LWZpdGB9PiYjOTczNTsgR08gQkFDSzwvYT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2B0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlYH0+RFJFQU0gQklHLjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBlbXB0eS1mb250YH0+V0UgQ1JFQVRFIElUPC9oMT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydweS0zIHB4LTQgcmVsYXRpdmUgJ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VjdGlvbicsIHNlbGVjdGVkU2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8jQ09OVEFDVCcpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBGaW5kIG91dCBtb3JlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0RpYWxvZz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyIiwiRGlhbG9nIiwic3R5bGVzIiwiTW9kYWwiLCJvcGVuIiwiY2hpbGRyZW4iLCJjbG9zZU1vZGFsIiwic2VsZWN0ZWRTZWN0aW9uIiwiaGFuZGxlQ2xvc2UiLCJvbkNsb3NlIiwiZnVsbFdpZHRoIiwibWF4V2lkdGgiLCJzeCIsImJhY2tncm91bmRDb2xvciIsImRpdiIsImNsYXNzTmFtZSIsIm92ZXJsYXkiLCJhIiwib25DbGljayIsImxpbmsiLCJoMSIsImJ1dHRvbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dream-big/Modal.tsx\n");

/***/ })

});