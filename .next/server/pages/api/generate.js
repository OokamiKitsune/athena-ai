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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"API Authentication failed.\"\n            }\n        });\n        return;\n    }\n    const question = req.body.question || \"\";\n    if (question.trim().length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"Please ask a question.\"\n            }\n        });\n        return;\n    }\n    try {\n        const answer = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: generatePrompt(question),\n            temperature: 1,\n            max_tokens: 100,\n            top_p: 1,\n            frequency_penalty: 0,\n            presence_penalty: 0\n        });\n        res.status(200).json({\n            result: answer.data.choices[0].text\n        });\n        console.log(answer.data.choices);\n    } catch (error) {\n        // Consider adjusting the error handling logic for your use case\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\nfunction generatePrompt(question) {\n    const capitalizedAnswer = question[0].toUpperCase() + question.slice(1).toLowerCase();\n    return capitalizedAnswer;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBQ0EsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsNkJBQWUsMENBQWdCTSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxJQUFJLENBQUNQLGNBQWNDLE1BQU0sRUFBRTtRQUN6Qk0sSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsT0FBTztnQkFDTEMsU0FBUztZQUNYO1FBQ0Y7UUFDQTtJQUNGLENBQUM7SUFFRCxNQUFNQyxXQUFXTixJQUFJTyxJQUFJLENBQUNELFFBQVEsSUFBSTtJQUN0QyxJQUFJQSxTQUFTRSxJQUFJLEdBQUdDLE1BQU0sS0FBSyxHQUFHO1FBQ2hDUixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUFTO1lBQ1g7UUFDRjtRQUNBO0lBQ0YsQ0FBQztJQUNELElBQUk7UUFDRixNQUFNSyxTQUFTLE1BQU1YLE9BQU9ZLGdCQUFnQixDQUFDO1lBQzNDQyxPQUFPO1lBQ1BDLFFBQVFDLGVBQWVSO1lBQ3ZCUyxhQUFhO1lBQ2JDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxtQkFBbUI7WUFDbkJDLGtCQUFrQjtRQUNwQjtRQUNBbEIsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFaUIsUUFBUVYsT0FBT1csSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJO1FBQUM7UUFDM0RDLFFBQVFDLEdBQUcsQ0FBQ2YsT0FBT1csSUFBSSxDQUFDQyxPQUFPO0lBQ2pDLEVBQUUsT0FBTWxCLE9BQU87UUFDYixnRUFBZ0U7UUFDaEUsSUFBSUEsTUFBTXNCLFFBQVEsRUFBRTtZQUNsQkYsUUFBUXBCLEtBQUssQ0FBQ0EsTUFBTXNCLFFBQVEsQ0FBQ3hCLE1BQU0sRUFBRUUsTUFBTXNCLFFBQVEsQ0FBQ0wsSUFBSTtZQUN4RHBCLElBQUlDLE1BQU0sQ0FBQ0UsTUFBTXNCLFFBQVEsQ0FBQ3hCLE1BQU0sRUFBRUMsSUFBSSxDQUFDQyxNQUFNc0IsUUFBUSxDQUFDTCxJQUFJO1FBQzVELE9BQU87WUFDTEcsUUFBUXBCLEtBQUssQ0FBQyxDQUFDLCtCQUErQixFQUFFQSxNQUFNQyxPQUFPLENBQUMsQ0FBQztZQUMvREosSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFDbkJDLE9BQU87b0JBQ0xDLFNBQVM7Z0JBQ1g7WUFDRjtRQUNGLENBQUM7SUFDSDtBQUNGLENBQUM7QUFDRCxTQUFTUyxlQUFlUixRQUFRLEVBQUU7SUFDaEMsTUFBTXFCLG9CQUNKckIsUUFBUSxDQUFDLEVBQUUsQ0FBQ3NCLFdBQVcsS0FBS3RCLFNBQVN1QixLQUFLLENBQUMsR0FBR0MsV0FBVztJQUMzRCxPQUFPSDtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS5qcz82MjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gXCJvcGVuYWlcIjtcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbn0pO1xuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIGlmICghY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBlcnJvcjoge1xuICAgICAgICBtZXNzYWdlOiBcIkFQSSBBdXRoZW50aWNhdGlvbiBmYWlsZWQuXCIsXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcXVlc3Rpb24gPSByZXEuYm9keS5xdWVzdGlvbiB8fCAnJztcbiAgaWYgKHF1ZXN0aW9uLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICBlcnJvcjoge1xuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBhc2sgYSBxdWVzdGlvbi5cIixcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBhbnN3ZXIgPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gICAgICBtb2RlbDogXCJ0ZXh0LWRhdmluY2ktMDAzXCIsXG4gICAgICBwcm9tcHQ6IGdlbmVyYXRlUHJvbXB0KHF1ZXN0aW9uKSxcbiAgICAgIHRlbXBlcmF0dXJlOiAxLFxuICAgICAgbWF4X3Rva2VuczogMTAwLFxuICAgICAgdG9wX3A6IDEsXG4gICAgICBmcmVxdWVuY3lfcGVuYWx0eTogMCxcbiAgICAgIHByZXNlbmNlX3BlbmFsdHk6IDAsXG4gICAgfSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IGFuc3dlci5kYXRhLmNob2ljZXNbMF0udGV4dCB9KTtcbiAgICBjb25zb2xlLmxvZyhhbnN3ZXIuZGF0YS5jaG9pY2VzKVxuICB9IGNhdGNoKGVycm9yKSB7XG4gICAgLy8gQ29uc2lkZXIgYWRqdXN0aW5nIHRoZSBlcnJvciBoYW5kbGluZyBsb2dpYyBmb3IgeW91ciB1c2UgY2FzZVxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvci5yZXNwb25zZS5zdGF0dXMsIGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgcmVzLnN0YXR1cyhlcnJvci5yZXNwb25zZS5zdGF0dXMpLmpzb24oZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdpdGggT3BlbkFJIEFQSSByZXF1ZXN0OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIGR1cmluZyB5b3VyIHJlcXVlc3QuJyxcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBnZW5lcmF0ZVByb21wdChxdWVzdGlvbikge1xuICBjb25zdCBjYXBpdGFsaXplZEFuc3dlciA9XG4gICAgcXVlc3Rpb25bMF0udG9VcHBlckNhc2UoKSArIHF1ZXN0aW9uLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBjYXBpdGFsaXplZEFuc3dlcjtcbn0iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwicXVlc3Rpb24iLCJib2R5IiwidHJpbSIsImxlbmd0aCIsImFuc3dlciIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInByb21wdCIsImdlbmVyYXRlUHJvbXB0IiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwidG9wX3AiLCJmcmVxdWVuY3lfcGVuYWx0eSIsInByZXNlbmNlX3BlbmFsdHkiLCJyZXN1bHQiLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJjYXBpdGFsaXplZEFuc3dlciIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

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