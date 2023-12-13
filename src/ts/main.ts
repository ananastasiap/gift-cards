import "../scss/style.scss";
import "swiper/css";
import { createSwiper } from "./modules";

window.addEventListener("DOMContentLoaded", () => {
  createSwiper(".congratulation__swiper--thumb");
  createSwiper(".congratulation__swiper--card");
});
