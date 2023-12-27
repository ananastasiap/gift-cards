import { API_URL } from "./api";

interface GiftData {
  card: string;
  sender_name: string;
  reciever_name: string;
  message: string;
}

export const getData = (
  cardImageSelector: string,
  cardFromSelector: string,
  cardToSelector: string,
  cardMessageSelector: string
) => {
  const cardImage = document.querySelector<HTMLImageElement>(cardImageSelector);
  const cardFrom = document.querySelector<HTMLElement>(cardFromSelector);
  const cardTo = document.querySelector<HTMLElement>(cardToSelector);
  const cardMessage = document.querySelector<HTMLElement>(cardMessageSelector);

  const getIdFromURL = () => {
    const params = new URLSearchParams(location.search);
    return params.get("id");
  };

  const getGiftData = async (
    id: string | null
  ): Promise<GiftData | undefined> => {
    try {
      const res = await fetch(`${API_URL}/api/gift/${id}`);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`Открытка не найден`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateUI = (data: GiftData) => {
    if (cardImage && data.card) {
      cardImage.src = `images/${data.card}.png`;
    }

    if (cardFrom) {
      cardFrom.textContent = data.sender_name;
    }

    if (cardTo) {
      cardTo.textContent = data.reciever_name;
    }

    if (cardMessage) {
      const formattedMessage = data.message.replaceAll("\n", "<br>");
      cardMessage.innerHTML = formattedMessage;
    }
  };

  const id = getIdFromURL();
  if (id) {
    getGiftData(id).then((data) => {
      if (data) {
        updateUI(data);
      }
    });
  }
};
