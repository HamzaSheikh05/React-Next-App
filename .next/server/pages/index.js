"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Speaker */ \"./src/components/Speaker.js\");\n\n\nconst IndexPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBNEM7QUFFNUMsTUFBTUMsU0FBUyxHQUFHLElBQU07SUFDcEIscUJBQ0ksOERBQUNELCtEQUFHOzs7O2lCQUFFLENBQ1Q7Q0FDSjtBQUVELGlFQUFlQyxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ub2RlLWFwcC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvU3BlYWtlclwiO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8QXBwLz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTsiXSwibmFtZXMiOlsiQXBwIiwiSW5kZXhQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Session({ title , room  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 4,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this);\n}\nfunction Sessions({ sessions  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n            ...sessions[0]\n        }, void 0, false, {\n            fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\nfunction SpeakerImage({ id , first , last  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: `/images/speaker-${id}.jpg`,\n            width: \"300\",\n            alt: `${first} ${last}`\n        }, void 0, false, {\n            fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\nfunction SpeakerFavorite({ favorite  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this),\n                \" \",\n                \"Favorite\",\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\nfunction SpeakerDemographics({ first , last , bio , company , twitterHandle , favorite  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite\n            }, void 0, false, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\nfunction Speaker({ speaker , showSessions  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {}, void 0, false, {\n                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {\n                        ...speaker\n                    }, void 0, false, {\n                        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n                lineNumber: 77,\n                columnNumber: 37\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sheikh/Downloads/Development/React-Node-App/src/components/Speaker.js\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Speaker);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQ0osQ0FDVDtDQUNKO0FBRUQsU0FBU0ssT0FBTyxDQUFDLEVBQUNDLE9BQU8sR0FBRUMsWUFBWSxHQUFDLEVBQUM7SUFFckMscUJBQ0ksOERBQUN0QixLQUFHO1FBQUNMLFNBQVMsRUFBQywyREFBMkQ7OzBCQUN0RSw4REFBQ0ssS0FBRztnQkFBQ0wsU0FBUyxFQUFDLDJCQUEyQjs7a0NBQ3RDLDhEQUFDTSxZQUFZOzs7OzRCQUFHO2tDQUNoQiw4REFBQ1csbUJBQW1CO3dCQUFFLEdBQUdTLE9BQU87Ozs7OzRCQUFJOzs7Ozs7b0JBQ2xDO1lBQ05DLFlBQVksS0FBSyxJQUFJLGlCQUFHLDhEQUFDeEIsUUFBUTtnQkFBQ0MsUUFBUSxFQUFFQSxRQUFROzs7OztvQkFBRyxHQUFHLElBQUk7Ozs7OztZQUM1RCxDQUNUO0NBQ0o7QUFFRCxpRUFBZXFCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5vZGUtYXBwLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcz8yOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFNlc3Npb24oe3RpdGxlLCByb29tfSl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XG4gICAgICAgICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cbiAgICAgICAgPC9zcGFuPlxuICAgICkgXG59XG5cbmZ1bmN0aW9uIFNlc3Npb25zKHtzZXNzaW9uc30pe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cbiAgICAgICAgICAgIDxTZXNzaW9uIHsuLi5zZXNzaW9uc1swXX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJJbWFnZSh7aWQsIGZpcnN0LCBsYXN0fSl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxuICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gU3BlYWtlckZhdm9yaXRlKHtmYXZvcml0ZX0pe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIn0vPntcIiBcIn1cbiAgICAgICAgICAgICAgICBGYXZvcml0ZXtcIiBcIn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKHtmaXJzdCwgbGFzdCwgYmlvLCBjb21wYW55LCB0d2l0dGVySGFuZGxlLCBmYXZvcml0ZX0pe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTcGVha2VyRmF2b3JpdGUgZmF2b3JpdGU9e2Zhdm9yaXRlfS8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAge2Jpb31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gU3BlYWtlcih7c3BlYWtlciwgc2hvd1Nlc3Npb25zfSl7XG4gICBcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG15LTRcIj5cbiAgICAgICAgICAgICAgICA8U3BlYWtlckltYWdlIC8+XG4gICAgICAgICAgICAgICAgPFNwZWFrZXJEZW1vZ3JhcGhpY3Mgey4uLnNwZWFrZXJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAge3Nob3dTZXNzaW9ucyA9PT0gdHJ1ZSA/IDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9Lz4gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXI7Il0sIm5hbWVzIjpbIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJzcGFuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJkaXYiLCJTcGVha2VySW1hZ2UiLCJpZCIsImZpcnN0IiwibGFzdCIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiU3BlYWtlckZhdm9yaXRlIiwiZmF2b3JpdGUiLCJpIiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiaDMiLCJwIiwiaDUiLCJoNiIsIlNwZWFrZXIiLCJzcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();