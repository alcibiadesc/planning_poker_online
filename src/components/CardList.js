import React from "react";
import Cartas from "./Cartas";
import { baraja } from "./Baraja";

const CardList = ({ deckSelected }) => {
  // filter the decks with the deck value and common cards like "?"
  const cardFiltered = baraja.filter(
    item => item.deck === deckSelected || item.deck === "Common"
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
