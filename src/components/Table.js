import React, { useState, useEffect } from "react";
import "./Table.css";
import CardList from "../components/CardList";
import FooterMenu from "../components/FooterMenu.js";
import CustomDeckMenu from "../components/CustomDeckMenu.js";
import {
  storeCard,
  readStoredCards
} from "../components/CustomLocalStorage.js";

// MAIN FUNCTION
function Table() {
  // Local Storage
  useEffect(() => {
    storeCard(customDeck);
  });

  const storedCard = readStoredCards();

  // FILTER DECKS
  let [deck, setDeck] = useState("StoryPoints");

  // HOOKS
  let [newCardName, setNewCardName] = useState(""); // Get input card value from the input
  const [customDeck, setAddNewCard] = useState(storedCard); // Add new cards to array copy of CustomDeck
  const [deleteCustomCards, setDeleteCustomCards] = useState(); // Delete all custom cards

  // DELETE 1 Card inside Modal

  const [deleteCard, setDeleteCard] = useState();

  const useDeleteCard = () => {
    setDeleteCard(
      customDeck.length >= 1 &&
        customDeck.splice(
          customDeck.map(card => card.value).indexOf(customDeck.value),
          1
        )
    );
    console.log("you deleted:" + deleteCard);
  };

  return (
    <React.Fragment>
      <div className="flex flex-wrap">
        <div className="f3 tc avenir pv2 fl w-100 pa2">{deck}</div>

        {deck === "Custom" && (
          <CustomDeckMenu
            newCardName={newCardName}
            setDeleteCustomCards={setDeleteCustomCards}
            deleteCustomCards={deleteCustomCards}
            setAddNewCard={setAddNewCard}
            customDeck={customDeck}
            setNewCardName={setNewCardName}
          />
        )}
        <CardList
          deckSelected={deck}
          customDeck={customDeck}
          storeCard={storeCard}
          useDeleteCard={useDeleteCard}
        />

        <FooterMenu setDeck={setDeck} deck={deck} />
      </div>
    </React.Fragment>
  );
}

export default Table;
