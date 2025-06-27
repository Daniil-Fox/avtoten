import "./_components.js";
import "./functions/burger.js";

import { validateForms } from "./functions/validate-forms.js";

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

validateForms(".popup__form", rules1, [], afterForm);
