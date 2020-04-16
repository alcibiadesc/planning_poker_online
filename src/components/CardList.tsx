import React from "react";
import Cartas from "./Cartas";
import { baraja } from "./Baraja";

type props = {
  deckSelected: string;
  customDeck: any;
  setAddNewCard: any;
};

const CardList = ({
  deckSelected,
  customDeck,

  setAddNewCard,
}: props) => {
  // filter the decks with the deck value and common cards like "?"

  let barajaSeleccionada = baraja;
  customDeck.length > 0 && deckSelected === "Custom"
    ? (barajaSeleccionada = customDeck)
    : (barajaSeleccionada = baraja);

  const cardFiltered = barajaSeleccionada.filter(
    (item: any) => item.deck === deckSelected
  );

  // render the cardValue filtered with map and inser a Key = card value.
  const cardValue = cardFiltered.map((item: any, index: number) => {
    return (
      <Cartas
        key={cardFiltered[index].id}
        value={cardFiltered[index].value}
        customDeck={customDeck}
        deckSelected={deckSelected}
        setAddNewCard={setAddNewCard}
        id={cardFiltered[index].id}
      />
    );
  });

  return <React.Fragment>{cardValue}</React.Fragment>;
};

export default CardList;
