"use strict";
import "/styles/index.scss";

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

const repairToggle = document.querySelector('.container-repair__toggle');
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