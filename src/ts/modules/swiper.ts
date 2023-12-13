import Swiper from "swiper/bundle";

export const createSwiper = (selector: string) => {
  return new Swiper(selector, {});
};
