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

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../styles/index.scss */ \"./styles/index.scss\");\n\r\n\r\n\r\nconst swiperOptions = {\r\n  loop: true,\r\n  slidesPerView: \"auto\",\r\n  spaceBetween: 16,\r\n\r\n  pagination: {\r\n    el: \".swiper-pagination\",\r\n  },\r\n};\r\n\r\nwindow.onload = () => {\r\n  const swiperBrands = new Swiper(\".swiper-brands\", swiperOptions);\r\n  const swiperRepair = new Swiper(\".container-repair-swiper\", swiperOptions);\r\n  const swiperServices = new Swiper(\".services-swiper\", swiperOptions);\r\n};\r\n\r\nconst toggleClassName = (element, className) => {\r\n  const isActive = element.classList.contains(className);\r\n\r\n  if (isActive) {\r\n    element.classList.remove(className);\r\n  } else {\r\n    element.classList.add(className);\r\n  }\r\n};\r\n\r\nconst removeClassName = (element, className) => {\r\n  element.classList.remove(className);\r\n};\r\n\r\nconst addClassName = (element, className) => {\r\n  element.classList.add(className);\r\n};\r\n\r\nconst buttonExpand = document.querySelector(\".button-expand\");\r\nconst menu = document.querySelector(\".menu\");\r\n\r\nbuttonExpand.addEventListener(\"click\", () => {\r\n  toggleClassName(buttonExpand, \"expanded\");\r\n  toggleClassName(menu, \"expanded\");\r\n});\r\n\r\nconst repairToggle = document.querySelector('.container-repair__toggle');\r\nconst repairContainer = document.querySelector('.container-repair');\r\n\r\nrepairToggle.addEventListener(\"click\", () => {\r\n  toggleClassName(repairToggle, \"expanded\");\r\n  toggleClassName(repairContainer, \"expanded\");\r\n});\r\n\r\nconst overlay = document.querySelector(\".overlay\");\r\n\r\nconst menuOpen = document.getElementById(\"menu-open\");\r\nconst menuClose = document.getElementById(\"menu-close\");\r\nconst menuFrame = document.getElementById(\"menu\");\r\n\r\nmenuOpen.onclick = () => {\r\n  toggleClassName(overlay, \"opened\");\r\n  toggleClassName(menuFrame, \"opened\");\r\n};\r\n\r\nmenuClose.onclick = () => {\r\n  toggleClassName(overlay, \"opened\");\r\n  toggleClassName(menuFrame, \"opened\");\r\n};\r\n\r\nconst callOpen = document.getElementById(\"call-open\");\r\nconst callOpenHeader = document.getElementById(\"call-open-header\");\r\nconst callClose = document.getElementById(\"call-close\");\r\nconst callFrame = document.getElementById(\"call-frame\");\r\n\r\ncallOpen.onclick = () => {\r\n  addClassName(overlay, \"opened\");\r\n  addClassName(callFrame, \"opened\");\r\n\r\n  removeClassName(menuFrame, \"opened\");\r\n};\r\n\r\ncallOpenHeader.onclick = () => {\r\n  addClassName(overlay, \"opened\");\r\n  addClassName(callFrame, \"opened\");\r\n\r\n  removeClassName(menuFrame, \"opened\");\r\n};\r\n\r\ncallClose.onclick = () => {\r\n  removeClassName(overlay, \"opened\");\r\n  removeClassName(callFrame, \"opened\");\r\n\r\n  removeClassName(menuFrame, \"opened\");\r\n};\r\n\r\nconst feedbackOpen = document.getElementById(\"feedback-open\");\r\nconst feedbackOpenHeader = document.getElementById(\"feedback-open-header\");\r\nconst feedbackClose = document.getElementById(\"feedback-close\");\r\nconst feedbackFrame = document.getElementById(\"feedback-frame\");\r\n\r\nfeedbackOpen.onclick = () => {\r\n  addClassName(overlay, \"opened\");\r\n  addClassName(feedbackFrame, \"opened\");\r\n\r\n  removeClassName(menuFrame, \"opened\");\r\n};\r\n\r\nfeedbackOpenHeader.onclick = () => {\r\n  addClassName(overlay, \"opened\");\r\n  addClassName(feedbackFrame, \"opened\");\r\n\r\n  removeClassName(menuFrame, \"opened\");\r\n};\r\n\r\nfeedbackClose.onclick = () => {\r\n  removeClassName(overlay, \"opened\");\r\n  removeClassName(feedbackFrame, \"opened\");\r\n\r\n  removeClassName(menuFrame, \"opened\");\r\n};\r\n\r\noverlay.onclick = () => {\r\n  removeClassName(overlay, \"opened\");\r\n\r\n  removeClassName(menuFrame, \"opened\");\r\n  removeClassName(feedbackFrame, \"opened\");\r\n  removeClassName(callFrame, \"opened\");\r\n}\r\n\r\nconst informationHiddenText = document.getElementById(\"information-hidden-text\");\r\nconst informationTextButton = document.getElementById(\"information-text-toggle\");\r\n\r\ninformationTextButton.onclick = () => {\r\n  toggleClassName(informationHiddenText, \"opened\");\r\n  toggleClassName(informationTextButton, \"opened\");\r\n};\n\n//# sourceURL=webpack://finall-maket/./main.js?");

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://finall-maket/./styles/index.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;