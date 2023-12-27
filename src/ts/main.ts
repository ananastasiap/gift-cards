import "../scss/style.scss";
import "swiper/css";
import {
  swiperMain,
  rearrangeElement,
  makeMask,
  workingWithForm,
} from "./modules";

window.addEventListener("DOMContentLoaded", () => {
  swiperMain(".congratulation__swiper--card");
  window.addEventListener("resize", () => {
    rearrangeElement(".card", ".card__title", ".card__contacts");
  });
  makeMask(".form__field--phone");
  workingWithForm();
});
