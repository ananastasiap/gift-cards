import "../scss/style.scss";
import "swiper/css";
import { swiperMain } from "./modules";

window.addEventListener("DOMContentLoaded", () => {
  // swiperThumb(".congratulation__swiper--thumb");
  swiperMain(".congratulation__swiper--card");
});
