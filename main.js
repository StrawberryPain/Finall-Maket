/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../styles/index.scss */ "./styles/index.scss");



const swiperOptions = {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,

  pagination: {
    el: ".swiper-pagination",
  },
};

window.onload = () => {
  const swiperBrands = new Swiper(".swiper-brands", swiperOptions);
  const swiperRepair = new Swiper(".container-repair-swiper", swiperOptions);
  const swiperServices = new Swiper(".services-swiper", swiperOptions);
};

const toggleClassName = (element, className) => {
  const isActive = element.classList.contains(className);

  if (isActive) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
};

const removeClassName = (element, className) => {
  element.classList.remove(className);
};

const addClassName = (element, className) => {
  element.classList.add(className);
};

const buttonExpand = document.querySelector(".button-expand");
const menu = document.querySelector(".menu");

buttonExpand.addEventListener("click", () => {
  toggleClassName(buttonExpand, "expanded");
  toggleClassName(menu, "expanded");
});

const repairToggle = document.querySelector('.container-toggle');
const repairContainer = document.querySelector('.container-repair');

repairToggle.addEventListener("click", () => {
  toggleClassName(repairToggle, "expanded");
  toggleClassName(repairContainer, "expanded");
});

const overlay = document.querySelector(".overlay");

const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const menuFrame = document.getElementById("menu");

menuOpen.onclick = () => {
  toggleClassName(overlay, "opened");
  toggleClassName(menuFrame, "opened");
};

menuClose.onclick = () => {
  toggleClassName(overlay, "opened");
  toggleClassName(menuFrame, "opened");
};

const callOpen = document.getElementById("call-open");
const callOpenHeader = document.getElementById("call-open-header");
const callClose = document.getElementById("call-close");
const callFrame = document.getElementById("call-frame");

callOpen.onclick = () => {
  addClassName(overlay, "opened");
  addClassName(callFrame, "opened");

  removeClassName(menuFrame, "opened");
};

callOpenHeader.onclick = () => {
  addClassName(overlay, "opened");
  addClassName(callFrame, "opened");

  removeClassName(menuFrame, "opened");
};

callClose.onclick = () => {
  removeClassName(overlay, "opened");
  removeClassName(callFrame, "opened");

  removeClassName(menuFrame, "opened");
};

const feedbackOpen = document.getElementById("feedback-open");
const feedbackOpenHeader = document.getElementById("feedback-open-header");
const feedbackClose = document.getElementById("feedback-close");
const feedbackFrame = document.getElementById("feedback-frame");

feedbackOpen.onclick = () => {
  addClassName(overlay, "opened");
  addClassName(feedbackFrame, "opened");

  removeClassName(menuFrame, "opened");
};

feedbackOpenHeader.onclick = () => {
  addClassName(overlay, "opened");
  addClassName(feedbackFrame, "opened");

  removeClassName(menuFrame, "opened");
};

feedbackClose.onclick = () => {
  removeClassName(overlay, "opened");
  removeClassName(feedbackFrame, "opened");

  removeClassName(menuFrame, "opened");
};

overlay.onclick = () => {
  removeClassName(overlay, "opened");

  removeClassName(menuFrame, "opened");
  removeClassName(feedbackFrame, "opened");
  removeClassName(callFrame, "opened");
}

const informationHiddenText = document.getElementById("information-hidden-text");
const informationTextButton = document.getElementById("information-text-toggle");

informationTextButton.onclick = () => {
  toggleClassName(informationHiddenText, "opened");
  toggleClassName(informationTextButton, "opened");
};
})();

/******/ })()
;
//# sourceMappingURL=main.js.map