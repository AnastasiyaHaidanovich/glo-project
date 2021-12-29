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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_verification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/verification */ \"./modules/verification.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('31 december 2021');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_verification__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menu = document.querySelector(\"menu\");\r\n    const closeBtn = menu.querySelector(\".close-btn\");\r\n    const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n    const toServiceBtn = document.querySelector(\".service-btn>img\");\r\n    const body = document.querySelector(\"body\");\r\n\r\n    body.addEventListener('click', (e) => {\r\n        if (e.target.closest(\".menu\")){\r\n            menu.classList.toggle(\"active-menu\");\r\n        } else if (e.target === toServiceBtn){\r\n            \r\n            e.preventDefault();\r\n            \r\n            const blockID = \"#service-block\";\r\n                            \r\n            document.querySelector(\"\" + blockID).scrollIntoView({\r\n                behavior: \"smooth\",\r\n                block: \"start\"\r\n                });\r\n        } else if (e.target == closeBtn) {\r\n            menu.classList.toggle(\"active-menu\");\r\n        } else if (e.target.tagName == \"A\" && menu.classList.contains(\"active-menu\")){\r\n            e.preventDefault();\r\n                \r\n            const blockID = e.target.getAttribute('href');\r\n                            \r\n            document.querySelector(\"\" + blockID).scrollIntoView({\r\n                behavior: \"smooth\",\r\n                block: \"start\"\r\n                });\r\n            menu.classList.toggle(\"active-menu\");\r\n        } else if (menu.classList.contains(\"active-menu\") && !e.target.closest(\".active-menu\")){\r\n            menu.classList.toggle(\"active-menu\");\r\n        }\r\n    });    \r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const buttons = document.querySelectorAll(\".popup-btn\");\r\n    const modal = document.querySelector(\".popup\");\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener(\"click\", () => {\r\n            const smoothOpen = () => {\r\n                modal.style.display = \"block\";\r\n                modal.style.opacity = 0;\r\n\r\n                let idInterval;\r\n                let count = 0;\r\n\r\n                const appear = () => {\r\n                    if (count <= 1){\r\n                    count += 0.05;\r\n                    modal.style.opacity = `${count}`;\r\n                    idInterval = requestAnimationFrame(appear);\r\n                } else {\r\n                    cancelAnimationFrame(idInterval);\r\n                }\r\n                };\r\n                idInterval = requestAnimationFrame(appear);\r\n            };\r\n            \r\n            if(window.innerWidth > 768){\r\n                smoothOpen();\r\n            } else {\r\n                modal.style.display = \"block\";\r\n            }\r\n\r\n            // setInterval(appear, 50);\r\n        });\r\n    });\r\n\r\n    function modalClose() {\r\n            const smoothClose = () => {\r\n                let idInterval;\r\n                let count = 1;\r\n\r\n                const close = () => {\r\n                    if (count >= 0){\r\n                    count -= 0.05;\r\n                    modal.style.opacity = `${count}`;\r\n                    idInterval = requestAnimationFrame(close);\r\n                    } else {\r\n                        cancelAnimationFrame(idInterval);\r\n                        modal.style.display = \"none\";\r\n                    }\r\n                };\r\n                idInterval = requestAnimationFrame(close);\r\n            };\r\n\r\n            if (window.innerWidth > 768){\r\n                smoothClose();\r\n            } else {\r\n                modal.style.display = \"none\";\r\n            }\r\n            \r\n    }\r\n    \r\n    modal.addEventListener('click', (e) => {\r\n        if(!e.target.closest(\".popup-content\") || e.target.classList.contains(\"popup-close\")){\r\n            modalClose();\r\n            // modal.style.display = \"none\";\r\n        }\r\n        \r\n    });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector(\".service-header\");\r\n    const tabContent = document.querySelectorAll(\".service-tab\");\r\n    const tabs = document.querySelectorAll(\".service-header-tab\");\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest(\".service-header-tab\")) {\r\n            let tabBtn = e.target.closest(\".service-header-tab\");\r\n            tabs.forEach((tab, index) => {\r\n                if(tab === tabBtn){\r\n                    tab.classList.add(\"active\");\r\n                    tabContent[index].classList.remove(\"d-none\");\r\n                } else {\r\n                    tab.classList.remove(\"active\");\r\n                    tabContent[index].classList.add(\"d-none\");\r\n                }\r\n            });\r\n        }\r\n        \r\n    });\r\n    // console.log();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById(\"timer-hours\");\r\n    const timerMinutes = document.getElementById(\"timer-minutes\");\r\n    const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n    const getTimeRemain = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemain = (dateStop - dateNow)/1000;\r\n    \r\n        let hours = Math.floor(timeRemain/60/60);\r\n        let minutes = Math.floor((timeRemain/60)%60);\r\n        let seconds = Math.floor(timeRemain%60);\r\n        \r\n        return {timeRemain, hours, minutes, seconds};\r\n        \r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemain();\r\n        \r\n        if(getTime.hours < 10){\r\n            getTime.hours = \"0\" + getTime.hours;\r\n        } else if(getTime.minutes < 10){\r\n            getTime.minutes = \"0\" + getTime.minutes;\r\n        } else if(getTime.seconds < 10){\r\n            getTime.seconds = \"0\" + getTime.seconds;\r\n        }\r\n\r\n        timerHours.textContent = getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds;\r\n\r\n        // if (getTime.timeRemain > 0){\r\n        //     setTimeout(updateClock, 1000);\r\n        // }\r\n    };\r\n    \r\n    const startTimer = () => {\r\n        let getTime = getTimeRemain();\r\n    if (getTime.timeRemain > 0){\r\n            setInterval(updateClock, 1000);\r\n        }\r\n    };\r\n    startTimer();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/verification.js":
/*!*********************************!*\
  !*** ./modules/verification.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst verification = () => {\r\n    const inputs = document.querySelectorAll(\".calc-block > input\");\r\n    inputs.forEach(input => {\r\n        input.addEventListener(\"input\", (e) => {\r\n            e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n        });\r\n    });\r\n\r\n    const textInputs = [];\r\n    const textName1 = document.getElementById(\"form1-name\");\r\n    const textName2 = document.getElementById(\"form2-name\");\r\n    const textName3 = document.getElementById(\"form3-name\");\r\n    const textMessage = document.getElementById(\"form2-message\");\r\n\r\n    textInputs.push(textName1, textName2, textName3, textMessage);\r\n    \r\n    for(let elem of textInputs){\r\n        elem.addEventListener(\"input\", (e) => {\r\n            if(e.target.value.match(/[а-я]+/i)){\r\n                let name = e.target.value.match(/[а-я]+/i)[0];\r\n                e.target.value = name;\r\n            } else {\r\n                e.target.value = \"\";\r\n            }\r\n        });\r\n    }\r\n\r\n    const inputEmail = document.querySelectorAll(\"input[type=email]\");\r\n    \r\n    inputEmail.forEach(email => {\r\n        email.addEventListener(\"input\", (e) => {\r\n            if(e.target.value.match(/[а-я%&+=,()?^$#]+/i)){\r\n                e.target.value = e.target.value.replace(/[а-я%&+=,()?^$#]+/i, \"\");\r\n            } \r\n        });\r\n    });\r\n    // console.log();\r\n\r\n    const inputTel = document.querySelectorAll(\"input[type=tel]\");\r\n    \r\n    inputTel.forEach(telElem => {\r\n        telElem.addEventListener(\"input\", (e) => {\r\n            if(e.target.value.match(/[0-9-()+]+/)){\r\n                let tel = e.target.value.match(/[0-9-()+]+/)[0];\r\n                e.target.value = tel;\r\n            } else {\r\n                e.target.value = \"\";\r\n            }\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verification);\n\n//# sourceURL=webpack:///./modules/verification.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;