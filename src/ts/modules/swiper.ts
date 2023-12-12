import SwiperClass from "swiper";

export const createSwiper = (selector: string) => {
  return new SwiperClass(selector, {});
};
