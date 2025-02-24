'use strict';

window.onload = () => {
    const swiper = new Swiper(".swiper", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 16,
  
      pagination: {
        el: ".swiper-pagination",
      },
    });
  };
  
  const toggleClassName = (element, className) => {
    const isActive = element.classList.contains(className);
  
    if (isActive) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  };
  
  const buttonExpand = document.querySelector(".button-expand");
  const menu = document.querySelector(".menu");
  
  buttonExpand.addEventListener("click", () => {
    toggleClassName(buttonExpand, "expanded");
    toggleClassName(menu, "expanded");
  });