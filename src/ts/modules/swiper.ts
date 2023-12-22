import Swiper from "swiper/bundle";

export const swiperThumb = new Swiper(".congratulation__swiper--thumb", {
  spaceBetween: 16,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});

export const swiperMain = (selector: string) => {
  return new Swiper(selector, {
    spaceBetween: 16,
    thumbs: {
      swiper: swiperThumb,
    },
  });
};
