import React from "react";
import Cartas from "./Cartas";
import { baraja } from "./Baraja";
import { v4 as uuidv4 } from "uuid";

const CardList = ({ deckSelected }) => {
  // filter the decks with the deck value and common cards like "?"
  const cardFiltered = baraja.filter(item => item.deck === deckSelected);

  // render the cardValue filtered with map and inser a Key = card value.
  const cardValue = cardFiltered.map((item, index) => {
    return <Cartas key={uuidv4()} value={cardFiltered[index].value} />;
  });
  return <>{cardValue}</>;
};

export default CardList;
