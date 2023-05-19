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
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: \"fg-I47JQUWKYJTVYUMN9SNUD9SJC1Y7V8MXMPNHX6OH\",\n    basePath: \"https://api.hypere.app/v1\"\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nconst basePromptPrefix = `Give me a random unique question based on the following material which may be my study notes, exam review, etc to help me practice for my upcoming test based on this information. :`;\nconst generateAction = async (req, res)=>{\n    console.log(`API: ${basePromptPrefix}${req.body.userInput}\\n`);\n    try {\n        const completion = await openai.createChatCompletion({\n            model: \"gpt-3.5-turbo\",\n            messages: [\n                {\n                    role: \"system\",\n                    content: `You are ChatGPT, a large language model trained by OpenAI. Carefully heed the user's instructions. ${basePromptPrefix}`\n                },\n                {\n                    role: \"user\",\n                    content: req.body.userInput\n                }\n            ]\n        });\n        console.log(completion.data);\n        console.log(completion.data.choices[0].message.content);\n        res.status(200).json({\n            output: completion.data.choices[0].message.content\n        });\n    } catch (error) {\n        console.log(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsNkNBQXNDO0lBQzlDRyxVQUFVSCwyQkFBdUM7QUFDbkQ7QUFFQSxNQUFNSyxTQUFTLElBQUlSLDZDQUFTQSxDQUFDQztBQUM3QixNQUFNUSxtQkFDTixDQUFDLG9MQUFvTCxDQUFDO0FBRXRMLE1BQU1DLGlCQUFpQixPQUFPQyxLQUFLQyxNQUFRO0lBQ3pDQyxRQUFRQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUVMLGlCQUFpQixFQUFFRSxJQUFJSSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxFQUFFLENBQUM7SUFDN0QsSUFBSTtRQUNGLE1BQU1DLGFBQWEsTUFBTVQsT0FBT1Usb0JBQW9CLENBQUM7WUFDbkRDLE9BQU87WUFDUEMsVUFBVTtnQkFDUjtvQkFDRUMsTUFBTTtvQkFDTkMsU0FBUyxDQUFDLG1HQUFtRyxFQUFFYixpQkFBaUIsQ0FBQztnQkFDbkk7Z0JBQ0E7b0JBQUVZLE1BQU07b0JBQVFDLFNBQVNYLElBQUlJLElBQUksQ0FBQ0MsU0FBUztnQkFBQzthQUM3QztRQUNIO1FBQ0FILFFBQVFDLEdBQUcsQ0FBQ0csV0FBV00sSUFBSTtRQUMzQlYsUUFBUUMsR0FBRyxDQUFDRyxXQUFXTSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLE9BQU8sQ0FBQ0gsT0FBTztRQUN0RFYsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxRQUFRWCxXQUFXTSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLE9BQU8sQ0FBQ0gsT0FBTztRQUFDO0lBQzVFLEVBQUUsT0FBT08sT0FBTztRQUNkaEIsUUFBUUMsR0FBRyxDQUFDZTtJQUNkO0FBQ0Y7QUFFQSxpRUFBZW5CLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3JhdGNocGFkLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzYyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xyXG5cclxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09QRU5BSV9BUElfS0VZLFxyXG4gIGJhc2VQYXRoOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUEVOQUlfRU5EUE9JTlRcclxufSk7XHJcblxyXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xyXG5jb25zdCBiYXNlUHJvbXB0UHJlZml4ID0gXHJcbmBHaXZlIG1lIGEgcmFuZG9tIHVuaXF1ZSBxdWVzdGlvbiBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIG1hdGVyaWFsIHdoaWNoIG1heSBiZSBteSBzdHVkeSBub3RlcywgZXhhbSByZXZpZXcsIGV0YyB0byBoZWxwIG1lIHByYWN0aWNlIGZvciBteSB1cGNvbWluZyB0ZXN0IGJhc2VkIG9uIHRoaXMgaW5mb3JtYXRpb24uIDpgO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVBY3Rpb24gPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zb2xlLmxvZyhgQVBJOiAke2Jhc2VQcm9tcHRQcmVmaXh9JHtyZXEuYm9keS51c2VySW5wdXR9XFxuYCk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ2hhdENvbXBsZXRpb24oe1xyXG4gICAgICBtb2RlbDogXCJncHQtMy41LXR1cmJvXCIsXHJcbiAgICAgIG1lc3NhZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcm9sZTogXCJzeXN0ZW1cIixcclxuICAgICAgICAgIGNvbnRlbnQ6IGBZb3UgYXJlIENoYXRHUFQsIGEgbGFyZ2UgbGFuZ3VhZ2UgbW9kZWwgdHJhaW5lZCBieSBPcGVuQUkuIENhcmVmdWxseSBoZWVkIHRoZSB1c2VyJ3MgaW5zdHJ1Y3Rpb25zLiAke2Jhc2VQcm9tcHRQcmVmaXh9YCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHJlcS5ib2R5LnVzZXJJbnB1dCB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhjb21wbGV0aW9uLmRhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBvdXRwdXQ6IGNvbXBsZXRpb24uZGF0YS5jaG9pY2VzWzBdLm1lc3NhZ2UuY29udGVudCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQWN0aW9uOyJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19PUEVOQUlfQVBJX0tFWSIsImJhc2VQYXRoIiwiTkVYVF9QVUJMSUNfT1BFTkFJX0VORFBPSU5UIiwib3BlbmFpIiwiYmFzZVByb21wdFByZWZpeCIsImdlbmVyYXRlQWN0aW9uIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJ1c2VySW5wdXQiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ2hhdENvbXBsZXRpb24iLCJtb2RlbCIsIm1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJkYXRhIiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJqc29uIiwib3V0cHV0IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();