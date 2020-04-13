import React from "react";
import Cartas from "./Cartas";
import { v4 as uuidv4 } from "uuid";
import { baraja } from "./Baraja";

const CardList = ({ deckSelected, customDeck, setDeleteCard, deleteCard }) => {
  // filter the decks with the deck value and common cards like "?"

  let barajaSeleccionada = baraja;
  customDeck.length > 0 && deckSelected === "Custom"
    ? (barajaSeleccionada = customDeck)
    : (barajaSeleccionada = baraja);

  const cardFiltered = barajaSeleccionada.filter(
    item => item.deck === deckSelected
  );

  // render the cardValue filtered with map and inser a Key = card value.
  const cardValue = cardFiltered.map((item, index) => {
    return (
      <Cartas
        key={uuidv4()}
        value={cardFiltered[index].value}
        customDeck={customDeck}
        deckSelected={deckSelected}
        setDeleteCard={setDeleteCard}
        deleteCard={deleteCard}
      />
    );
  });

  return <React.Fragment>{cardValue}</React.Fragment>;
};

export default CardList;
