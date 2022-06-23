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

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nfunction Session(param) {\n    var title = param.title, room = param.room;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 4,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    var sessions = param.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, _objectSpread({}, sessions[0]), void 0, false, {\n            fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_c2 = SpeakerImage;\nfunction SpeakerDemographics(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_c3 = SpeakerDemographics;\nfunction Speaker(param) {\n    var speaker = param.speaker, showSessions = param.showSessions;\n    var first = speaker.first, last = speaker.last, sessions = speaker.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, _objectSpread({}, speaker), void 0, false, {\n                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 65,\n                columnNumber: 38\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_c4 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerDemographics\");\n$RefreshReg$(_c4, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYTs7Ozs7NENBQU07Ozs7OztvQ0FDdEI7Ozs7Ozs0QkFDSjs7Ozs7O29CQUNKOzs7Ozs7WUFDSixDQUNUO0NBQ0o7QUF6QlFILE1BQUFBLG1CQUFtQjtBQTJCNUIsU0FBU1MsT0FBTyxDQUFDLEtBQXVCLEVBQUM7UUFBdkJDLE9BQU8sR0FBUixLQUF1QixDQUF0QkEsT0FBTyxFQUFFQyxZQUFZLEdBQXRCLEtBQXVCLENBQWJBLFlBQVk7SUFDbkMsSUFBT2pCLEtBQUssR0FBb0JnQixPQUFPLENBQWhDaEIsS0FBSyxFQUFFQyxJQUFJLEdBQWNlLE9BQU8sQ0FBekJmLElBQUksRUFBRUwsUUFBUSxHQUFJb0IsT0FBTyxDQUFuQnBCLFFBQVE7SUFDNUIscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0wsU0FBUyxFQUFDLDJEQUEyRDs7MEJBQ3RFLDhEQUFDSyxLQUFHO2dCQUFDTCxTQUFTLEVBQUMsMkJBQTJCOztrQ0FDdEMsOERBQUNNLFlBQVk7d0JBQUNDLEVBQUUsRUFBRUEsRUFBRTt3QkFBRUMsS0FBSyxFQUFFQSxLQUFLO3dCQUFFQyxJQUFJLEVBQUVBLElBQUk7Ozs7OzRCQUFJO2tDQUNsRCw4REFBQ0ssbUJBQW1CLG9CQUFLVSxPQUFPOzs7OzRCQUFJOzs7Ozs7b0JBQ2xDO1lBQ0xDLFlBQVksS0FBSyxJQUFJLGlCQUFHLDhEQUFDdEIsUUFBUTtnQkFBQ0MsUUFBUSxFQUFFQSxRQUFROzs7OztvQkFBRyxHQUFHLElBQUk7Ozs7OztZQUM3RCxDQUNUO0NBQ0o7QUFYUW1CLE1BQUFBLE9BQU87QUFhaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzPzI5MmQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU2Vzc2lvbih7dGl0bGUsIHJvb219KXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cbiAgICAgICAgICAgIHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxuICAgICAgICA8L3NwYW4+XG4gICAgKSBcbn1cblxuZnVuY3Rpb24gU2Vzc2lvbnMoe3Nlc3Npb25zfSl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxuICAgICAgICAgICAgPFNlc3Npb24gey4uLnNlc3Npb25zWzBdfS8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gU3BlYWtlckltYWdlKHtpZCwgZmlyc3QsIGxhc3R9KXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXG4gICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKHtmaXJzdCwgbGFzdCwgYmlvLCBjb21wYW55LCB0d2l0dGVySGFuZGxlLCBmYXZvcml0ZX0pe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICB7YmlvfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCBkLWZsZXggZmxleC1yb3cgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+VHdpdHRlcjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+e3R3aXR0ZXJIYW5kbGV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTcGVha2VyKHtzcGVha2VyLCBzaG93U2Vzc2lvbnN9KXtcbiAgICBjb25zdCB7Zmlyc3QsIGxhc3QsIHNlc3Npb25zfSA9IHNwZWFrZXI7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBteS00XCI+XG4gICAgICAgICAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cbiAgICAgICAgICAgICAgICA8U3BlYWtlckRlbW9ncmFwaGljcyB7Li4uc3BlYWtlcn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3Nob3dTZXNzaW9ucyA9PT0gdHJ1ZSA/IDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9Lz4gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXI7Il0sIm5hbWVzIjpbIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJzcGFuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJkaXYiLCJTcGVha2VySW1hZ2UiLCJpZCIsImZpcnN0IiwibGFzdCIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiZmF2b3JpdGUiLCJoMyIsInAiLCJoNSIsImg2IiwiU3BlYWtlciIsInNwZWFrZXIiLCJzaG93U2Vzc2lvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n");

/***/ })

});