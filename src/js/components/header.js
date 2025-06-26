const header = document.querySelector(".header");

if (header) {
  const drodownList = header.querySelectorAll(".menu__item--dropdown");

  drodownList.forEach((item) => {
    const dropdownMenu = item.querySelector("ul");
    item.addEventListener("mouseenter", () => {
      item.classList.add("active");
      dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 60 + "px";
    });
    item.addEventListener("mouseleave", () => {
      item.classList.remove("active");
      dropdownMenu.style.maxHeight = null;
    });
  });
}
