/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//tutle type array자료형에 사용가능한 엄격한 타입\r\nlet dog = [\"dog\", true];\r\n//응용\r\nconst spreadFnc = (...x) => {\r\n    console.log(x);\r\n};\r\nspreadFnc(1, \"2\");\r\nlet arr = [1, 2, 3];\r\nlet arr2 = [4, 5, ...arr];\r\n//3번째 인자 타입지정에 쓰인건 rest파라미터랑 비슷하게 작동함\r\nlet testArr = ['동서녹차', 4000, true];\r\nlet testArr2 = ['동서녹차', 4000, true, false, true, true, false, true];\r\nconst testFnc = (...a) => {\r\n};\r\nconst testFnc2 = (...a) => {\r\n    let myNumber = [];\r\n    let myString = [];\r\n    a.forEach(i => {\r\n        if (typeof i === \"string\") {\r\n            myString.push(i);\r\n        }\r\n        else {\r\n            myNumber.push(i);\r\n        }\r\n    });\r\n    const test = [myNumber, myString];\r\n    return test;\r\n};\r\nconsole.log(testFnc2(1, \"12\", 123, \"325\"));\r\n/*----- ts파일에서 js파일 import를 해오고 싶을때 -----*/\r\n/* declare let a\r\nconsole.log(a+1) */\r\n//재정의 해주는 키워드\r\n//ts에선 다른파일이랑 겹치는 변수는 typescript의 ambient module로 선언되서 못씀\r\n//로컬 모듈로 만드는 방법은 간단하다 선언된 파일에서 export가 한번이라도 되면 그 파일은 모듈형식임\r\n//근데 또 모듈파일에서 한두게만 전역으로 쓰고 싶을때가 있는데 그것도 declare해서 쓰면된다 a.ts에 써놓음\r\nconst myCat = \"hi\";\r\n\n\n//# sourceURL=webpack://tutorial/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;