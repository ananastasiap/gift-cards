import { validate } from "validate.js";
import { swiperThumb, updateSubmitButton } from ".";
import { API_URL } from "./api";

export const workingWithForm = () => {
  const form = document.querySelector<HTMLFormElement>(".form");
  const cardInput = form?.querySelector<HTMLInputElement>(".form__card");

  const updateCardInput = () => {
    const activeSlide = document.querySelector(
      ".congratulation__card-slide .swiper-slide-active"
    );

    if (activeSlide) {
      const cardData = activeSlide.querySelector(".card-image");
      if (cardData instanceof HTMLElement) {
        const cardDataset = cardData.dataset.card;
        if (cardInput && cardDataset !== undefined) {
          cardInput.value = cardDataset;
        }
      }
    }
  };

  updateCardInput();

  swiperThumb.on("slideChangeTransitionEnd", () => {
    updateCardInput();
  });

  const phoneValidateOption = {
    // presence: {
    //   message: "Поле с телефоном обязательно для заполнения",
    // },
    format: {
      pattern: "\\+7\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}",
      message:
        'Номер телефона должен соотвествовать формату: "+7(XXX)XXX-XX-XX"',
    },
  };

  form?.addEventListener("input", () => {
    updateSubmitButton(".form__button");
  });
  form?.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const errors = validate(form, {
      sender_phone: phoneValidateOption,
      reciever_phone: phoneValidateOption,
    });

    if (errors) {
      for (const key in errors) {
        alert(errors[key]);
      }
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch(`${API_URL}/api/gift`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        prompt(
          "Открытка успешно сохранена. Доступна по адресу:",
          `${location.origin}/nested/index.html?id=${result.id}`
        );
        form.reset();
      } else {
        alert(`Ошибка при отправке: ${result.message}`);
      }
    } catch (error) {
      console.error(`Произошла ошибка при отправке: ${error}`);
      alert(`Произошла ошибка, попробуйте снова`);
    }
  });
};
