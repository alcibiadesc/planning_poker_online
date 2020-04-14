const CARD_CUSTOM_STORAGE_KEY = "CARD_CUSTOM_STORAGE_KEY";

export const storeCard = cardMap => {
  localStorage.setItem(CARD_CUSTOM_STORAGE_KEY, JSON.stringify(cardMap));
};

export const readStoredCards = () => {
  const cardMap = JSON.parse(localStorage.getItem(CARD_CUSTOM_STORAGE_KEY));
  return cardMap ? cardMap : [{ value: "inicial p" }];
};
