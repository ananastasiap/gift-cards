import IMask from "imask";

export const makeMask = (phoneSelector: string) => {
  const phoneInputs =
    document.querySelectorAll<HTMLInputElement>(phoneSelector);

  phoneInputs.forEach((phoneInput) => {
    const element = phoneInput;
    IMask(element, {
      mask: "+{7}(000)000-00-00",
    });
  });
};
