import React, { useState, useEffect } from "react";
import "./Table.css";
import CardList from "../components/CardList";
import FooterMenu from "../components/FooterMenu.js";
import CustomDeckMenu from "../components/CustomDeckMenu.js";
import {
  storeCard,
  readStoredCards
} from "../components/CustomLocalStorage.js";

function Table() {
  // Local Storage
  useEffect(() => {
    storeCard(customDeck);
  });

  const storedCard = readStoredCards();

  // HOOKS
  const [deck, setDeck] = useState("StoryPoints"); // Filter Decks
  const [newCardName, setNewCardName] = useState(""); // Get input card value from the input
  const [customDeck, setAddNewCard] = useState(storedCard); // Add new cards to array copy of CustomDeck
  const [deleteCustomCards, setDeleteCustomCards] = useState(); // Delete all custom cards
  const [deleteCard, setDeleteCard] = useState(); // Delete 1 Card inside Modal

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
          setDeleteCard={setDeleteCard}
          deleteCard={deleteCard}
        />

        <FooterMenu setDeck={setDeck} deck={deck} />
      </div>
    </React.Fragment>
  );
}

export default Table;
