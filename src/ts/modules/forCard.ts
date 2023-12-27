export const rearrangeElement = (
  cardSelector: string,
  cardTitleSelector: string,
  cardContactsSelector: string
) => {
  const screenWidth = window.innerWidth;

  const card = document.querySelector(cardSelector);
  const cardTitle = document.querySelector(cardTitleSelector);
  const cardContacts = document.querySelector(cardContactsSelector);

  if (screenWidth <= 580 && card && cardContacts) {
    card?.after(cardContacts);
  } else if (cardTitle && cardContacts) {
    cardTitle?.after(cardContacts);
  }
};
