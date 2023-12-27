import { validate } from "validate.js";
import { updateSubmitButton } from ".";

export const workingWithForm = () => {
  const form = document.querySelector<HTMLFormElement>(".form");

  const phoneValidateOption = {
    presence: {
      message: "Поле с телефоном обязательно для заполнения",
    },
    format: {
      pattern: "\\+7\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}",
      message:
        'Номер телефона должен соотвествовать формату: "+7(XXX)XXX-XX-XX"',
    },
  };

  form?.addEventListener("input", () => {
    updateSubmitButton(".form__button");
  });
  form?.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const errors = validate(form, {
      sender_phone: phoneValidateOption,
      reciever_phone: phoneValidateOption,
    });

    console.log(errors);
  });
};
