import React from "react";
import Cartas from "./Cartas";
import { baraja } from "./Baraja";
import { deckInfo } from "./Footer";
import { deckType } from "./Footer";

const CardList = () => {
  // filter the decks with the deck value and common cards like "?"
  const cardFiltered = baraja.filter(
    item => item.deck === deckInfo || item.deck === "common"
  );
  // render the cardValue filtered with map and inser a Key = card value.
  const cardValue = cardFiltered.map((item, index) => {
    return (
      <Cartas
        key={cardFiltered[index].value}
        value={cardFiltered[index].value}
      />
    );
  });
  return <>{cardValue}</>;
};

export default CardList;
