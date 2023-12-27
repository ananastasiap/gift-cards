import "../scss/style.scss";
import "swiper/css";
import { swiperMain, rearrangeElement } from "./modules";

window.addEventListener("DOMContentLoaded", () => {
  swiperMain(".congratulation__swiper--card");
  window.addEventListener("resize", () => {
    rearrangeElement(".card", ".card__title", ".card__contacts");
  });
});
