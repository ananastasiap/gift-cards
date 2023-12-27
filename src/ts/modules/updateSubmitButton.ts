export const updateSubmitButton = (submitButtonSelector: string) => {
  const submitButton =
    document.querySelector<HTMLButtonElement>(submitButtonSelector);
  const form = document.querySelector<HTMLFormElement>(".form");
  let isFormField = true;

  if (form) {
    for (const field of form.elements) {
      if (
        field instanceof HTMLInputElement &&
        field.classList.contains("form__field")
      ) {
        if (!field.value.trim()) {
          // .trim() -- remove space
          isFormField = false;
          break;
        }
      }
    }
  }

  if (submitButton) {
    submitButton.disabled = !isFormField;
  }
};
