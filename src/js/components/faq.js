const faq = document.querySelectorAll(".faq-item");

if (faq.length > 0) {
  faq.forEach((item) => {
    const btnOpen = item.querySelector(".btn-arrow");
    const btnClose = item.querySelector(".btn-arrow--reverse");
    const content = item.querySelector(".faq-item__body");
    btnOpen.addEventListener("click", (e) => {
      e.preventDefault();
      faq.forEach((el) => {
        el.classList.remove("active");
        const content = el.querySelector(".faq-item__body");
        content.style.maxHeight = null;
      });
      item.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    });
    btnClose.addEventListener("click", (e) => {
      e.preventDefault();
      item.classList.remove("active");
      content.style.maxHeight = null;
    });
  });
}
