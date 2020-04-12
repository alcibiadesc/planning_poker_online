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

  // ADD Custom Menu when deck selectec is "Custom"
  let [addButtonNew, setAddButtonNew] = useState("");

  // Get input card value from the input
  let [newCardName, setNewCardName] = useState("");
  const useNewCardName = event => {
    setNewCardName(event.target.value);
  };

  // Add new cards to array copy of CustomDeck

  const [customDeck, setAddNewCard] = useState(storedCard);

  let useAddNewCard = () => {
    setAddNewCard([...customDeck, { value: newCardName, deck: "Custom" }]);
    console.log(customDeck);
    setNewCardName("");
  };

  // Press center  const handleKeyPress = event => {
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      setAddNewCard([...customDeck, { value: newCardName, deck: "Custom" }]);

      setNewCardName("");
    }
  };

  // DELETE ALL CUSTOM cards

  const [deleteCustomCards, setDeleteCustomCards] = useState();

  const deleteAllCustomCards = () => {
    console.log("all decks was deleted:" + deleteCustomCards);
    setDeleteCustomCards(customDeck.splice(0, customDeck.length));
  };

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
    <>
      <div className="f3 tc avenir pv2 fl w-100 pa2">{deck}</div>

      {/* Custom Menu */}

      {deck === "Custom" && (
        <CustomDeckMenu
          addButtonNew={addButtonNew}
          newCardName={newCardName}
          useNewCardName={useNewCardName}
          handleKeyPress={handleKeyPress}
          useAddNewCard={useAddNewCard}
          deleteAllCustomCards={deleteAllCustomCards}
        />
      )}

      <CardList
        deckSelected={deck}
        customDeck={customDeck}
        storeCard={storeCard}
        useDeleteCard={useDeleteCard}
      />

      <FooterMenu
        setDeck={setDeck}
        deck={deck}
        setAddButtonNew={setAddButtonNew}
      />
    </>
  );
}

export default Table;
