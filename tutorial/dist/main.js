/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n/*\r\n예전에 js에 import export가 없을땐 namespace를 사용했었음\r\n*/\r\nlet test = \"park\";\r\n/*\r\nimport같은게 없었기때문에 여러 스크립트를 html에 연결하는 방식을썻는데\r\n그렇게 되면 변수가 곂쳐서 배열에 묶어 사용하게 됬는데 그게 namespace임\r\n파일에 import하는 방법은\r\n///<reference path='./a.ts' />이렇게 사용했다\r\n*/\r\n/*------generic------*/\r\nconst unknownFnc = (x) => {\r\n    return x[0];\r\n};\r\nconst u = unknownFnc([4, 2]);\r\n/*\r\n이때 변수 u의 타입은 number라고 생각할수도 있지만\r\nunknown이다 타입스크립트에게 타입변경을 기대하지말자\r\n*/\r\n/*\r\nconsole.log(u+1)\r\nu가 확실한 값이 아니기때문에 내로잉을 해주던가 as를 붙이던가 해야함\r\n그대신 쓸수 있는게 generic이다\r\n*/\r\nconst unknownFnc2 = (x) => {\r\n    return x[0];\r\n};\r\nconst u2 = unknownFnc2([4, 2]);\r\n//이런식으로 타입을 파라미터 처럼 넘겨줄수 있음\r\nconst minusFnc = (x) => {\r\n    return x - 1;\r\n}; //extends를 사용하면 우측타입이 있는지 검사해준다 \r\nlet werw = minusFnc(123);\r\nconst lenghtFnc = (x) => {\r\n    return x.length;\r\n};\r\nconst lenghtA = lenghtFnc(\"123\");\r\nconsole.log(lenghtA);\r\n//test\r\nconst testFnc = (x) => {\r\n    console.log(x.length);\r\n};\r\ntestFnc(\"testss\");\r\ntestFnc([\"test\", \"test2\"]);\r\nlet data = '{\"name\" : \"dog\", \"age\" : 1 }';\r\nconst 함수 = (a) => {\r\n    return JSON.parse(a);\r\n};\r\nlet result = 함수(data);\r\nclass Person {\r\n    constructor(a) {\r\n        this.name = a;\r\n    }\r\n}\r\nlet a = new Person('어쩌구');\r\na.name;\r\n\n\n//# sourceURL=webpack://tutorial/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__);
/******/ 	
/******/ })()
;