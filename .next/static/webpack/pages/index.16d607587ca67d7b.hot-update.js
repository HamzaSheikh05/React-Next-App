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

/***/ "./src/components/SpeakersToolBar.js":
/*!*******************************************!*\
  !*** ./src/components/SpeakersToolBar.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction SpeakersToolbar() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), showSessions = ref[0], setShowSessions = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\"), theme = ref1[0], setTheme = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"toolbar dark-theme-header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-content-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"toolrow d-flex flex-column flex-lg-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Show Sessions\\xa0\\xa0\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/SpeakersToolBar.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"fav\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            checked: showSessions,\n                                            onChange: function(event) {\n                                                setShowSessions(event.target.checked);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/SpeakersToolBar.js\",\n                                            lineNumber: 16,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"switch\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/SpeakersToolBar.js\",\n                                            lineNumber: 23,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/SpeakersToolBar.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/SpeakersToolBar.js\",\n                            lineNumber: 13,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row ml-sm-5 ml-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Theme\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/SpeakersToolBar.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"dropdown\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"form-control theme\",\n                                        value: theme,\n                                        onChange: function(event) {\n                                            setTheme(event.target.value);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"light\",\n                                                children: \"Light\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/SpeakersToolBar.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"dark\",\n                                                children: \"Dark\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/SpeakersToolBar.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/SpeakersToolBar.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/SpeakersToolBar.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/SpeakersToolBar.js\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/SpeakersToolBar.js\",\n                    lineNumber: 12,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/SpeakersToolBar.js\",\n                lineNumber: 11,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/SpeakersToolBar.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/SpeakersToolBar.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakersToolbar, \"nfOw7aIB8BPCZX2eqMvCymAN8Yg=\");\n_c = SpeakersToolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersToolbar);\nvar _c;\n$RefreshReg$(_c, \"SpeakersToolbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc1Rvb2xCYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUErQjs7QUFFL0IsU0FBU0MsZUFBZSxHQUFFOztJQUV0QixJQUF3Q0QsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUoxRCxZQUl1QixHQUFxQkEsR0FBYyxHQUFuQyxFQUp2QixlQUl3QyxHQUFJQSxHQUFjLEdBQWxCO0lBQ3BDLElBQTBCQSxJQUFpQixHQUFqQkEsK0NBQVEsQ0FBQyxPQUFPLENBQUMsRUFML0MsS0FLZ0IsR0FBY0EsSUFBaUIsR0FBL0IsRUFMaEIsUUFLMEIsR0FBSUEsSUFBaUIsR0FBckI7SUFFdEIscUJBQ0ksOERBQUNNLFNBQU87UUFBQ0MsU0FBUyxFQUFDLDJCQUEyQjtrQkFDMUMsNEVBQUNDLEtBQUc7WUFBQ0QsU0FBUyxFQUFDLFdBQVc7c0JBQ3RCLDRFQUFDQyxLQUFHO2dCQUFDRCxTQUFTLEVBQUMseUJBQXlCOzBCQUNwQyw0RUFBQ0UsSUFBRTtvQkFBQ0YsU0FBUyxFQUFDLHdDQUF3Qzs7c0NBQ2xELDhEQUFDRyxJQUFFOzRCQUFDSCxTQUFTLEVBQUMsZ0NBQWdDOzs4Q0FDMUMsOERBQUNJLEdBQUM7OENBQUMsdUJBQXlCOzs7Ozt3Q0FBSTs4Q0FDaEMsOERBQUNDLE9BQUs7b0NBQUNMLFNBQVMsRUFBQyxLQUFLOztzREFDbEIsOERBQUNNLE9BQUs7NENBQ0ZDLElBQUksRUFBQyxVQUFVOzRDQUNmQyxPQUFPLEVBQUViLFlBQVk7NENBQ3JCYyxRQUFRLEVBQUUsU0FBQ0MsS0FBSyxFQUFLO2dEQUNqQmQsZUFBZSxDQUFDYyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDLENBQUM7NkNBQ3pDOzs7OztnREFDSDtzREFDRiw4REFBQ0ksTUFBSTs0Q0FBQ1osU0FBUyxFQUFDLFFBQVE7Ozs7O2dEQUFROzs7Ozs7d0NBQzVCOzs7Ozs7Z0NBQ1A7c0NBQ0wsOERBQUNHLElBQUU7NEJBQUNILFNBQVMsRUFBQyw2Q0FBNkM7OzhDQUN2RCw4REFBQ2EsUUFBTTs4Q0FBQyxPQUFLOzs7Ozt3Q0FBUzs4Q0FDdEIsOERBQUNSLE9BQUs7b0NBQUNMLFNBQVMsRUFBQyxVQUFVOzhDQUN2Qiw0RUFBQ2MsUUFBTTt3Q0FDSGQsU0FBUyxFQUFDLG9CQUFvQjt3Q0FDOUJlLEtBQUssRUFBRWxCLEtBQUs7d0NBQ1pZLFFBQVEsRUFBRSxTQUFDQyxLQUFLLEVBQUs7NENBQ2pCWixRQUFRLENBQUNZLEtBQUssQ0FBQ0MsTUFBTSxDQUFDSSxLQUFLLENBQUMsQ0FBQzt5Q0FDaEM7OzBEQUVELDhEQUFDQyxRQUFNO2dEQUFDRCxLQUFLLEVBQUMsT0FBTzswREFBQyxPQUFLOzs7OztvREFBUzswREFDcEMsOERBQUNDLFFBQU07Z0RBQUNELEtBQUssRUFBQyxNQUFNOzBEQUFDLE1BQUk7Ozs7O29EQUFTOzs7Ozs7NENBQzdCOzs7Ozt3Q0FDTDs7Ozs7O2dDQUNQOzs7Ozs7d0JBQ0o7Ozs7O29CQUNIOzs7OztnQkFDSjs7Ozs7WUFDQSxDQUNiO0NBQ0o7R0EzQ1FyQixlQUFlO0FBQWZBLEtBQUFBLGVBQWU7QUE2Q3hCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNUb29sQmFyLmpzPzllNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBTcGVha2Vyc1Rvb2xiYXIoKXtcblxuICAgIGNvbnN0IFtzaG93U2Vzc2lvbnMsIHNldFNob3dTZXNzaW9uc10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCdsaWdodCcpO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b29sYmFyIGRhcmstdGhlbWUtaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvb2xyb3cgZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbGctcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+U2hvdyBTZXNzaW9ucyZuYnNwOyZuYnNwOzwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2hvd1Nlc3Npb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dTZXNzaW9ucyhldmVudC50YXJnZXQuY2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2hcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93IG1sLXNtLTUgbWwtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGhlbWU8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0aGVtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhlbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodFwiPkxpZ2h0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPkRhcms8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNUb29sYmFyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNwZWFrZXJzVG9vbGJhciIsInNob3dTZXNzaW9ucyIsInNldFNob3dTZXNzaW9ucyIsInRoZW1lIiwic2V0VGhlbWUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwidWwiLCJsaSIsImIiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0Iiwic3BhbiIsInN0cm9uZyIsInNlbGVjdCIsInZhbHVlIiwib3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SpeakersToolBar.js\n");

/***/ })

});