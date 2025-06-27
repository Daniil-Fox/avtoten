import { Swiper } from "swiper";
import { Pagination, Navigation, Grid } from "swiper/modules";

Swiper.use([Navigation, Pagination, Grid]);

new Swiper(".work__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    prevEl: ".work__arr--prev",
    nextEl: ".work__arr--next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// new Swiper(".work__grid", {
//   slidesPerView: 4,
//   grid: {
//     rows: 4,
//     fill: "row",
//   },
//   spaceBetween: 20,
//   navigation: {
//     prevEl: ".work__arr--prev",
//     nextEl: ".work__arr--next",
//   },
//   pagination: {
//     el: ".work__pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 20,
//     },
//   },
// });
