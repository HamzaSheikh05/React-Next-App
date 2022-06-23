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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nfunction Session(param) {\n    var title = param.title, room = param.room;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 4,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    var sessions = param.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, _objectSpread({}, sessions[0]), void 0, false, {\n            fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_c2 = SpeakerImage;\nfunction SpeakerFavorite(param) {\n    var favorite = param.favorite, onFavoriteToggle = param.onFavoriteToggle;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: onFavoriteToggle,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this),\n                \" \",\n                \"Favorite\",\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_c3 = SpeakerFavorite;\nfunction SpeakerDemographics(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite, onFavoriteToggle = param.onFavoriteToggle;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite,\n                onFavoriteToggle: onFavoriteToggle\n            }, void 0, false, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_c4 = SpeakerDemographics;\nfunction Speaker(param) {\n    var speaker = param.speaker, showSessions = param.showSessions;\n    var id = speaker.id, first = speaker.first, last = speaker.last, sessions = speaker.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, _objectSpread({}, speaker), void 0, false, {\n                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 77,\n                columnNumber: 37\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, this);\n}\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQ0wsU0FBUyxFQUFDLDJCQUEyQjs7a0NBQ3RDLDhEQUFDTSxZQUFZO3dCQUFDQyxFQUFFLEVBQUVBLEVBQUU7d0JBQUVDLEtBQUssRUFBRUEsS0FBSzt3QkFBRUMsSUFBSSxFQUFFQSxJQUFJOzs7Ozs0QkFBSTtrQ0FDbEQsOERBQUNVLG1CQUFtQixvQkFBS1MsT0FBTzs7Ozs0QkFBSTs7Ozs7O29CQUNsQztZQUNOQyxZQUFZLEtBQUssSUFBSSxpQkFBRyw4REFBQzFCLFFBQVE7Z0JBQUNDLFFBQVEsRUFBRUEsUUFBUTs7Ozs7b0JBQUcsR0FBRyxJQUFJOzs7Ozs7WUFDNUQsQ0FDVDtDQUNKO0FBWFF1QixNQUFBQSxPQUFPO0FBYWhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcz8yOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFNlc3Npb24oe3RpdGxlLCByb29tfSl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XG4gICAgICAgICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cbiAgICAgICAgPC9zcGFuPlxuICAgICkgXG59XG5cbmZ1bmN0aW9uIFNlc3Npb25zKHtzZXNzaW9uc30pe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cbiAgICAgICAgICAgIDxTZXNzaW9uIHsuLi5zZXNzaW9uc1swXX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJJbWFnZSh7aWQsIGZpcnN0LCBsYXN0fSl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxuICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gU3BlYWtlckZhdm9yaXRlKHtmYXZvcml0ZSwgb25GYXZvcml0ZVRvZ2dsZX0pe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e29uRmF2b3JpdGVUb2dnbGV9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIn0vPntcIiBcIn1cbiAgICAgICAgICAgICAgICBGYXZvcml0ZXtcIiBcIn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKHtmaXJzdCwgbGFzdCwgYmlvLCBjb21wYW55LCB0d2l0dGVySGFuZGxlLCBmYXZvcml0ZSwgb25GYXZvcml0ZVRvZ2dsZX0pe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTcGVha2VyRmF2b3JpdGUgZmF2b3JpdGU9e2Zhdm9yaXRlfSBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfS8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAge2Jpb31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gU3BlYWtlcih7c3BlYWtlciwgc2hvd1Nlc3Npb25zfSl7XG4gICAgY29uc3Qge2lkLCBmaXJzdCwgbGFzdCwgc2Vzc2lvbnN9ID0gc3BlYWtlcjtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG15LTRcIj5cbiAgICAgICAgICAgICAgICA8U3BlYWtlckltYWdlIGlkPXtpZH0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSAvPlxuICAgICAgICAgICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIHsuLi5zcGVha2VyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIHtzaG93U2Vzc2lvbnMgPT09IHRydWUgPyA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfS8+IDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyOyJdLCJuYW1lcyI6WyJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwic3BhbiIsImNsYXNzTmFtZSIsInN0cm9uZyIsIm5hbWUiLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiZGl2IiwiU3BlYWtlckltYWdlIiwiaWQiLCJmaXJzdCIsImxhc3QiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImFsdCIsIlNwZWFrZXJGYXZvcml0ZSIsImZhdm9yaXRlIiwib25GYXZvcml0ZVRvZ2dsZSIsIm9uQ2xpY2siLCJpIiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiaDMiLCJwIiwiaDUiLCJoNiIsIlNwZWFrZXIiLCJzcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n");

/***/ })

});