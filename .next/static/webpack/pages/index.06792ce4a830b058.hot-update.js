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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_Black_and_White_Minimal_Monogram_Logo_removebg_preview_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Black_and_White_Minimal_Monogram_Logo-removebg-preview.png */ \"./assets/Black_and_White_Minimal_Monogram_Logo-removebg-preview.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [userInput2, setUserInput2] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [apiOutput, setApiOutput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [apiOutput2, setApiOutput2] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [isGenerating, setIsGenerating] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const callGenerateEndpoint = async ()=>{\n        setIsGenerating(true);\n        console.log(\"Calling OpenAI...\");\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                userInput\n            })\n        });\n        const data = await response.json();\n        const { output  } = data;\n        console.log(\"OpenAI replied...\", JSON.stringify(output));\n        // setApiOutput(`${output.text}`);\n        setIsGenerating(false);\n    };\n    const callGenerateEndpoint2 = async ()=>{\n        setIsGenerating(true);\n        console.log(userInput2, apiOutput);\n        console.log(\"Calling OpenAI...\");\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                userInput: \"Tell me if the answer\" + userInput2 + \"is the right answer to the question\" + apiOutput + \"and congratulate me if you believe I'm right! However if my answer is wrong, then tell me how to solve it.\"\n            })\n        });\n        const data = await response.json();\n        const { output  } = data;\n        console.log(\"OpenAI replied...\", JSON.stringify(output));\n        // setApiOutput2(`${output.text}`);\n        setIsGenerating(false);\n    };\n    const onUserChangedText = (event)=>{\n        console.log(event.target.value);\n        setUserInput(event.target.value);\n    };\n    const onUserChangedText2 = (event)=>{\n        console.log(event.target.value);\n        setUserInput2(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/quizzer/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 8\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Vocabulate\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/quizzer/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 8\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/quizzer/pages/index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header-title\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Studyflow\"\n                                }, void 0, false, {\n                                    fileName: \"/workspace/quizzer/pages/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header-subtitle\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Paste in your study notes, your teacher's exam review, etc and start practicing.\"\n                                }, void 0, false, {\n                                    fileName: \"/workspace/quizzer/pages/index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/quizzer/pages/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"prompt-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"side-by-side\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"prompt-box\",\n                                        placeholder: \"paste in your study notes, teacher's exam review, etc right here\",\n                                        value: userInput,\n                                        onChange: onUserChangedText\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/quizzer/pages/index.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"prompt-box\",\n                                        placeholder: \"write your answer here\",\n                                        value: userInput2,\n                                        onChange: onUserChangedText2\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/quizzer/pages/index.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"prompt-buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: isGenerating ? \"generate-button loading\" : \"generate-button\",\n                                        onClick: ()=>{\n                                            console.log(\"pressed me\");\n                                            callGenerateEndpoint();\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"generate\",\n                                            children: isGenerating ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"loader\"\n                                            }, void 0, false, {\n                                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                                lineNumber: 107,\n                                                columnNumber: 19\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Find Your Word\"\n                                            }, void 0, false, {\n                                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                                lineNumber: 109,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/quizzer/pages/index.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/quizzer/pages/index.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: isGenerating ? \"generate-button loading\" : \"generate-button\",\n                                        onClick: ()=>{\n                                            console.log(\"pressed me\");\n                                            callGenerateEndpoint2();\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"generate\",\n                                            children: isGenerating ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"loader\"\n                                            }, void 0, false, {\n                                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                                lineNumber: 124,\n                                                columnNumber: 19\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Submit Answer\"\n                                            }, void 0, false, {\n                                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                                lineNumber: 126,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/quizzer/pages/index.js\",\n                                            lineNumber: 122,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/quizzer/pages/index.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined),\n                            apiOutput && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"output\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"output-header-container\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"output-header\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: apiOutput\n                                            }, void 0, false, {\n                                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                                lineNumber: 135,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/quizzer/pages/index.js\",\n                                            lineNumber: 134,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/quizzer/pages/index.js\",\n                                        lineNumber: 133,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"output-content\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: apiOutput2\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/quizzer/pages/index.js\",\n                                            lineNumber: 139,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/quizzer/pages/index.js\",\n                                        lineNumber: 138,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/quizzer/pages/index.js\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/quizzer/pages/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/quizzer/pages/index.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"badge-container grow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://twitter.com/KrishivThakuria\",\n                    target: \"_blank\",\n                    rel: \"noreferrer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"badge\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Made by Krishiv Thakuria\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/quizzer/pages/index.js\",\n                            lineNumber: 152,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspace/quizzer/pages/index.js\",\n                        lineNumber: 151,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/workspace/quizzer/pages/index.js\",\n                    lineNumber: 146,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/quizzer/pages/index.js\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/quizzer/pages/index.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"qWwE1X7nn40lbFxKlURlIg1a/OI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uL2Fzc2V0cy9CbGFja19hbmRfV2hpdGVfTWluaW1hbF9Nb25vZ3JhbV9Mb2dvLXJlbW92ZWJnLXByZXZpZXcucG5nXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlcklucHV0Miwgc2V0VXNlcklucHV0Ml0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYXBpT3V0cHV0LCBzZXRBcGlPdXRwdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FwaU91dHB1dDIsIHNldEFwaU91dHB1dDJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzR2VuZXJhdGluZywgc2V0SXNHZW5lcmF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgY2FsbEdlbmVyYXRlRW5kcG9pbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc0dlbmVyYXRpbmcodHJ1ZSk7XHJcbiAgXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJDYWxsaW5nIE9wZW5BSS4uLlwiKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJJbnB1dCB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCB7IG91dHB1dCB9ID0gZGF0YTtcclxuICAgIGNvbnNvbGUubG9nKFwiT3BlbkFJIHJlcGxpZWQuLi5cIiwgSlNPTi5zdHJpbmdpZnkob3V0cHV0KSk7XHJcblxyXG4gICAgLy8gc2V0QXBpT3V0cHV0KGAke291dHB1dC50ZXh0fWApO1xyXG4gICAgc2V0SXNHZW5lcmF0aW5nKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGNhbGxHZW5lcmF0ZUVuZHBvaW50MiA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldElzR2VuZXJhdGluZyh0cnVlKTtcclxuICBcclxuY29uc29sZS5sb2codXNlcklucHV0MiwgYXBpT3V0cHV0KVxyXG4gICAgY29uc29sZS5sb2coXCJDYWxsaW5nIE9wZW5BSS4uLlwiKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7dXNlcklucHV0OiBcIlRlbGwgbWUgaWYgdGhlIGFuc3dlclwiICsgdXNlcklucHV0MiArIFwiaXMgdGhlIHJpZ2h0IGFuc3dlciB0byB0aGUgcXVlc3Rpb25cIiArIGFwaU91dHB1dCArIFwiYW5kIGNvbmdyYXR1bGF0ZSBtZSBpZiB5b3UgYmVsaWV2ZSBJJ20gcmlnaHQhIEhvd2V2ZXIgaWYgbXkgYW5zd2VyIGlzIHdyb25nLCB0aGVuIHRlbGwgbWUgaG93IHRvIHNvbHZlIGl0LlwifSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgeyBvdXRwdXQgfSA9IGRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhcIk9wZW5BSSByZXBsaWVkLi4uXCIsIEpTT04uc3RyaW5naWZ5KG91dHB1dCkpO1xyXG5cclxuICAgIC8vIHNldEFwaU91dHB1dDIoYCR7b3V0cHV0LnRleHR9YCk7XHJcbiAgICBzZXRJc0dlbmVyYXRpbmcoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25Vc2VyQ2hhbmdlZFRleHQgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRVc2VySW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uVXNlckNoYW5nZWRUZXh0MiA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldFVzZXJJbnB1dDIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImZhdmljb24uaWNvXCIvPlxyXG4gICAgICAgPHRpdGxlPlZvY2FidWxhdGU8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoMT5TdHVkeWZsb3c8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIFBhc3RlIGluIHlvdXIgc3R1ZHkgbm90ZXMsIHlvdXIgdGVhY2hlcidzIGV4YW0gcmV2aWV3LCBldGMgYW5kIHN0YXJ0IHByYWN0aWNpbmcuXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogQWRkIHRoaXMgY29kZSBoZXJlKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9tcHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLWJ5LXNpZGVcIj5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9tcHQtYm94XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXN0ZSBpbiB5b3VyIHN0dWR5IG5vdGVzLCB0ZWFjaGVyJ3MgZXhhbSByZXZpZXcsIGV0YyByaWdodCBoZXJlXCJcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJJbnB1dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uVXNlckNoYW5nZWRUZXh0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9tcHQtYm94XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ3cml0ZSB5b3VyIGFuc3dlciBoZXJlXCJcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJJbnB1dDJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVzZXJDaGFuZ2VkVGV4dDJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb21wdC1idXR0b25zXCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGlzR2VuZXJhdGluZyA/IFwiZ2VuZXJhdGUtYnV0dG9uIGxvYWRpbmdcIiA6IFwiZ2VuZXJhdGUtYnV0dG9uXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcmVzc2VkIG1lXCIpO1xyXG4gICAgICAgICAgICAgICAgY2FsbEdlbmVyYXRlRW5kcG9pbnQoKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmF0ZVwiPlxyXG4gICAgICAgICAgICAgICAge2lzR2VuZXJhdGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPHA+RmluZCBZb3VyIFdvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGlzR2VuZXJhdGluZyA/IFwiZ2VuZXJhdGUtYnV0dG9uIGxvYWRpbmdcIiA6IFwiZ2VuZXJhdGUtYnV0dG9uXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcmVzc2VkIG1lXCIpO1xyXG4gICAgICAgICAgICAgICAgY2FsbEdlbmVyYXRlRW5kcG9pbnQyKCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVcIj5cclxuICAgICAgICAgICAgICAgIHtpc0dlbmVyYXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwPlN1Ym1pdCBBbnN3ZXI8L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHthcGlPdXRwdXQgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2FwaU91dHB1dH08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRwdXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+e2FwaU91dHB1dDJ9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhZGdlLWNvbnRhaW5lciBncm93XCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL0tyaXNoaXZUaGFrdXJpYVwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZVwiPlxyXG4gICAgICAgICAgICA8cD5NYWRlIGJ5IEtyaXNoaXYgVGhha3VyaWE8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJsb2dvIiwidXNlU3RhdGUiLCJIb21lIiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwidXNlcklucHV0MiIsInNldFVzZXJJbnB1dDIiLCJhcGlPdXRwdXQiLCJzZXRBcGlPdXRwdXQiLCJhcGlPdXRwdXQyIiwic2V0QXBpT3V0cHV0MiIsImlzR2VuZXJhdGluZyIsInNldElzR2VuZXJhdGluZyIsImNhbGxHZW5lcmF0ZUVuZHBvaW50IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsIm91dHB1dCIsImNhbGxHZW5lcmF0ZUVuZHBvaW50MiIsIm9uVXNlckNoYW5nZWRUZXh0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uVXNlckNoYW5nZWRUZXh0MiIsImRpdiIsImNsYXNzTmFtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwidGl0bGUiLCJoMSIsImgyIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYSIsIm9uQ2xpY2siLCJzcGFuIiwicCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});