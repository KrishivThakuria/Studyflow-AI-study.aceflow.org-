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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_Black_and_White_Minimal_Monogram_Logo_removebg_preview_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Black_and_White_Minimal_Monogram_Logo-removebg-preview.png */ \"./assets/Black_and_White_Minimal_Monogram_Logo-removebg-preview.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [userInput2, setUserInput2] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [apiOutput, setApiOutput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [apiOutput2, setApiOutput2] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [isGenerating, setIsGenerating] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const callGenerateEndpoint = async ()=>{\n        setIsGenerating(true);\n        console.log(\"Calling OpenAI...\");\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                userInput\n            })\n        });\n        const data = await response.json();\n        const { output  } = data;\n        console.log(output);\n        console.log(\"OpenAI replied...\", JSON.stringify(output));\n        setApiOutput(\"\".concat(output));\n        setIsGenerating(false);\n    };\n    const callGenerateEndpoint2 = async ()=>{\n        setIsGenerating(true);\n        console.log(userInput2, apiOutput);\n        console.log(\"Calling OpenAI...\");\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                userInput: \"Tell me if the answer\" + userInput2 + \"is the right answer to the question\" + apiOutput + \"and congratulate me if you believe I'm right! However if my answer is wrong, then tell me how to solve it.\"\n            })\n        });\n        const data = await response.json();\n        const { output  } = data;\n        console.log(\"OpenAI replied...\", JSON.stringify(output));\n        setApiOutput2(\"\".concat(output.text));\n        setIsGenerating(false);\n    };\n    const onUserChangedText = (event)=>{\n        console.log(event.target.value);\n        setUserInput(event.target.value);\n    };\n    const onUserChangedText2 = (event)=>{\n        console.log(event.target.value);\n        setUserInput2(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/quizzer/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 8\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Vocabulate\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/quizzer/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 8\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/quizzer/pages/index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header-title\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Studyflow\"\n                                }, void 0, false, {\n                                    fileName: \"/workspace/quizzer/pages/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header-subtitle\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Paste in your study notes, your teacher's exam review, etc and start practicing.\"\n                                }, void 0, false, {\n                                    fileName: \"/workspace/quizzer/pages/index.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/quizzer/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"prompt-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"side-by-side\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"prompt-box\",\n                                        placeholder: \"paste in your study notes, teacher's exam review, etc right here\",\n                                        value: userInput,\n                                        onChange: onUserChangedText\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/quizzer/pages/index.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"prompt-box\",\n                                        placeholder: \"write your answer here\",\n                                        value: userInput2,\n                                        onChange: onUserChangedText2\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/quizzer/pages/index.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                lineNumber: 81,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"prompt-buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: isGenerating ? \"generate-button loading\" : \"generate-button\",\n                                        onClick: ()=>{\n                                            console.log(\"pressed me\");\n                                            callGenerateEndpoint();\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"generate\",\n                                            children: isGenerating ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"loader\"\n                                            }, void 0, false, {\n                                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                                lineNumber: 108,\n                                                columnNumber: 19\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Find Your Word\"\n                                            }, void 0, false, {\n                                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                                lineNumber: 110,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/quizzer/pages/index.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/quizzer/pages/index.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: isGenerating ? \"generate-button loading\" : \"generate-button\",\n                                        onClick: ()=>{\n                                            console.log(\"pressed me\");\n                                            callGenerateEndpoint2();\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"generate\",\n                                            children: isGenerating ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"loader\"\n                                            }, void 0, false, {\n                                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                                lineNumber: 125,\n                                                columnNumber: 19\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Submit Answer\"\n                                            }, void 0, false, {\n                                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                                lineNumber: 127,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/quizzer/pages/index.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/quizzer/pages/index.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, undefined),\n                            apiOutput && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"output\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"output-header-container\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"output-header\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: apiOutput\n                                            }, void 0, false, {\n                                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                                lineNumber: 136,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/quizzer/pages/index.js\",\n                                            lineNumber: 135,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/quizzer/pages/index.js\",\n                                        lineNumber: 134,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"output-content\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: apiOutput2\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/quizzer/pages/index.js\",\n                                            lineNumber: 140,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/quizzer/pages/index.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                lineNumber: 133,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/quizzer/pages/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/quizzer/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"badge-container grow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://twitter.com/KrishivThakuria\",\n                    target: \"_blank\",\n                    rel: \"noreferrer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"badge\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Made by Krishiv Thakuria\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/quizzer/pages/index.js\",\n                            lineNumber: 153,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspace/quizzer/pages/index.js\",\n                        lineNumber: 152,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/workspace/quizzer/pages/index.js\",\n                    lineNumber: 147,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/quizzer/pages/index.js\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/quizzer/pages/index.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"qWwE1X7nn40lbFxKlURlIg1a/OI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uL2Fzc2V0cy9CbGFja19hbmRfV2hpdGVfTWluaW1hbF9Nb25vZ3JhbV9Mb2dvLXJlbW92ZWJnLXByZXZpZXcucG5nXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlcklucHV0Miwgc2V0VXNlcklucHV0Ml0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYXBpT3V0cHV0LCBzZXRBcGlPdXRwdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FwaU91dHB1dDIsIHNldEFwaU91dHB1dDJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzR2VuZXJhdGluZywgc2V0SXNHZW5lcmF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgY2FsbEdlbmVyYXRlRW5kcG9pbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc0dlbmVyYXRpbmcodHJ1ZSk7XHJcbiAgXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJDYWxsaW5nIE9wZW5BSS4uLlwiKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJJbnB1dCB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCB7IG91dHB1dCB9ID0gZGF0YTtcclxuICAgIGNvbnNvbGUubG9nKG91dHB1dClcclxuICAgIGNvbnNvbGUubG9nKFwiT3BlbkFJIHJlcGxpZWQuLi5cIiwgSlNPTi5zdHJpbmdpZnkob3V0cHV0KSk7XHJcblxyXG4gICAgc2V0QXBpT3V0cHV0KGAke291dHB1dH1gKTtcclxuICAgIHNldElzR2VuZXJhdGluZyhmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBjYWxsR2VuZXJhdGVFbmRwb2ludDIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc0dlbmVyYXRpbmcodHJ1ZSk7XHJcbiAgXHJcbmNvbnNvbGUubG9nKHVzZXJJbnB1dDIsIGFwaU91dHB1dClcclxuICAgIGNvbnNvbGUubG9nKFwiQ2FsbGluZyBPcGVuQUkuLi5cIik7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3VzZXJJbnB1dDogXCJUZWxsIG1lIGlmIHRoZSBhbnN3ZXJcIiArIHVzZXJJbnB1dDIgKyBcImlzIHRoZSByaWdodCBhbnN3ZXIgdG8gdGhlIHF1ZXN0aW9uXCIgKyBhcGlPdXRwdXQgKyBcImFuZCBjb25ncmF0dWxhdGUgbWUgaWYgeW91IGJlbGlldmUgSSdtIHJpZ2h0ISBIb3dldmVyIGlmIG15IGFuc3dlciBpcyB3cm9uZywgdGhlbiB0ZWxsIG1lIGhvdyB0byBzb2x2ZSBpdC5cIn0pLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IHsgb3V0cHV0IH0gPSBkYXRhO1xyXG4gICAgY29uc29sZS5sb2coXCJPcGVuQUkgcmVwbGllZC4uLlwiLCBKU09OLnN0cmluZ2lmeShvdXRwdXQpKTtcclxuXHJcbiAgICBzZXRBcGlPdXRwdXQyKGAke291dHB1dC50ZXh0fWApO1xyXG4gICAgc2V0SXNHZW5lcmF0aW5nKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uVXNlckNoYW5nZWRUZXh0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0VXNlcklucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBvblVzZXJDaGFuZ2VkVGV4dDIgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRVc2VySW5wdXQyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJmYXZpY29uLmljb1wiLz5cclxuICAgICAgIDx0aXRsZT5Wb2NhYnVsYXRlPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDE+U3R1ZHlmbG93PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3VidGl0bGVcIj5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICBQYXN0ZSBpbiB5b3VyIHN0dWR5IG5vdGVzLCB5b3VyIHRlYWNoZXIncyBleGFtIHJldmlldywgZXRjIGFuZCBzdGFydCBwcmFjdGljaW5nLlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEFkZCB0aGlzIGNvZGUgaGVyZSovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvbXB0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1ieS1zaWRlXCI+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvbXB0LWJveFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzdGUgaW4geW91ciBzdHVkeSBub3RlcywgdGVhY2hlcidzIGV4YW0gcmV2aWV3LCBldGMgcmlnaHQgaGVyZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VySW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVzZXJDaGFuZ2VkVGV4dH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvbXB0LWJveFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwid3JpdGUgeW91ciBhbnN3ZXIgaGVyZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VySW5wdXQyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25Vc2VyQ2hhbmdlZFRleHQyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9tcHQtYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBpc0dlbmVyYXRpbmcgPyBcImdlbmVyYXRlLWJ1dHRvbiBsb2FkaW5nXCIgOiBcImdlbmVyYXRlLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJlc3NlZCBtZVwiKTtcclxuICAgICAgICAgICAgICAgIGNhbGxHZW5lcmF0ZUVuZHBvaW50KCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVcIj5cclxuICAgICAgICAgICAgICAgIHtpc0dlbmVyYXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwPkZpbmQgWW91ciBXb3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBpc0dlbmVyYXRpbmcgPyBcImdlbmVyYXRlLWJ1dHRvbiBsb2FkaW5nXCIgOiBcImdlbmVyYXRlLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJlc3NlZCBtZVwiKTtcclxuICAgICAgICAgICAgICAgIGNhbGxHZW5lcmF0ZUVuZHBvaW50MigpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyYXRlXCI+XHJcbiAgICAgICAgICAgICAgICB7aXNHZW5lcmF0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8cD5TdWJtaXQgQW5zd2VyPC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7YXBpT3V0cHV0ICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRwdXRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dC1oZWFkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPnthcGlPdXRwdXR9PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxwPnthcGlPdXRwdXQyfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZS1jb250YWluZXIgZ3Jvd1wiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9LcmlzaGl2VGhha3VyaWFcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2VcIj5cclxuICAgICAgICAgICAgPHA+TWFkZSBieSBLcmlzaGl2IFRoYWt1cmlhPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwibG9nbyIsInVzZVN0YXRlIiwiSG9tZSIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsInVzZXJJbnB1dDIiLCJzZXRVc2VySW5wdXQyIiwiYXBpT3V0cHV0Iiwic2V0QXBpT3V0cHV0IiwiYXBpT3V0cHV0MiIsInNldEFwaU91dHB1dDIiLCJpc0dlbmVyYXRpbmciLCJzZXRJc0dlbmVyYXRpbmciLCJjYWxsR2VuZXJhdGVFbmRwb2ludCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvdXRwdXQiLCJjYWxsR2VuZXJhdGVFbmRwb2ludDIiLCJ0ZXh0Iiwib25Vc2VyQ2hhbmdlZFRleHQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25Vc2VyQ2hhbmdlZFRleHQyIiwiZGl2IiwiY2xhc3NOYW1lIiwibGluayIsInJlbCIsImhyZWYiLCJ0aXRsZSIsImgxIiwiaDIiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJhIiwib25DbGljayIsInNwYW4iLCJwIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});