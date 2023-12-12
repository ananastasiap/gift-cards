import "../scss/style.scss";
import { createSwiper } from "./modules";

window.addEventListener("DOMContentLoaded", () => {
  createSwiper(".congratulation__swiper--thumb");
  createSwiper(".congratulation__swiper--card");
});
