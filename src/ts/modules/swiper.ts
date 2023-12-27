import Swiper from "swiper/bundle";
import { SwiperOptions } from "swiper/types";

export const swiperThumb = new Swiper(".congratulation__swiper--thumb", {
  spaceBetween: 16,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});

export const swiperMain = (selector: string, options?: SwiperOptions) => {
  return new Swiper(selector, {
    spaceBetween: 16,
    thumbs: {
      swiper: swiperThumb,
    },
    ...options,
  });
};
