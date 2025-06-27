import "./_components.js";
import "./functions/burger.js";

import { validateForms } from "./functions/validate-forms.js";
import { getHeaderHeight } from "./functions/header-height.js";

function setupModalPopup() {
  const modalBtns = document.querySelectorAll(".modal-btn");
  const popup = document.querySelector(".popup--form");
  if (!popup) return;
  const closeBtns = popup.querySelectorAll(".popup__close");
  const overlay = popup.querySelector(".popup__overlay");

  modalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      popup.classList.add("active");
    });
  });

  function closePopup() {
    popup.classList.remove("active");
  }

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", closePopup);
  });
  if (overlay) {
    overlay.addEventListener("click", closePopup);
  }
}

document.addEventListener("DOMContentLoaded", setupModalPopup);

const rules1 = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
];

const afterForm = () => {
  const popupThx = document.querySelector(".popup--thx");
  const popup = document.querySelector(".popup--form");

  popup.classList.remove("active");
  popupThx.classList.add("active");
};

// validateForms(".popup__form", rules1, [], afterForm);

// Фиксация header при скролле вниз с учетом высоты меню
function setupFixedHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  // Устанавливаем кастомное свойство с высотой header
  getHeaderHeight();
  window.addEventListener("resize", getHeaderHeight);

  let lastScroll = window.scrollY;
  let isFixed = false;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    const headerHeight = header.offsetHeight;
    if (currentScroll > headerHeight) {
      if (!isFixed) {
        header.classList.add("fixed");
        document.body.style.paddingTop = headerHeight + "px";
        isFixed = true;
      }
    } else {
      if (isFixed) {
        header.classList.remove("fixed");
        document.body.style.paddingTop = "";
        isFixed = false;
      }
    }
    lastScroll = currentScroll;
  });
}

document.addEventListener("DOMContentLoaded", setupFixedHeader);
