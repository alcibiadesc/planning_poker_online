import React, { useState, useEffect } from "react";
import "./Table.css";
import CardList from "../components/CardList";
import { storeCard, readStoredCards } from "./CustomLocalStorage.js";

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
      <div className="w-100">
        {addButtonNew ? (
          <div className="w-100 tc center pa2">
            <input
              className="mb3 tc"
              type="text"
              value={newCardName}
              onChange={useNewCardName}
              onKeyPress={handleKeyPress}
              maxLength="15"
              placeholder="Card Value"
            />
            <br />
            <button
              href="#0"
              type="Reset"
              onClick={useAddNewCard}
              className="f6 link dim ba ph3 pv2 mb2 dib dark-gray pa2 noselect "
            >
              New Card
            </button>
            <button
              type="button"
              name="button"
              id="deleteAll"
              className="f6 link dim ba ph3 pv2 mb2 dib dark-gray pa2 noselect"
              onClick={deleteAllCustomCards}
            >
              Delete All
            </button>
          </div>
        ) : (
          ""
        )}
      </div>

      <CardList
        deckSelected={deck}
        customDeck={customDeck}
        storeCard={storeCard}
        useDeleteCard={useDeleteCard}
      />

      <footer id="footerBtm" className="bg-white black-80 tc avenir pv3">
        <nav className="bt tc mw7 center ">
          <p
            onClick={() => {
              setDeck((deck = "StoryPoints"));
              setAddButtonNew(false);
            }}
            className="noselect f5 mh2  link bg-animate black-80 hover-light-purple dib  linkBtm"
          >
            StoryPoints
          </p>
          <p
            onClick={() => {
              setDeck((deck = "T-Shirt"));
              console.log(`you changed the deck to: ${deck}`);
              setAddButtonNew(false);
            }}
            className="noselect f5 mh2  link bg-animate black-80 hover-light-purple dib linkBtm"
          >
            T-Shirt
          </p>
          <p
            onClick={() => {
              setDeck((deck = "Fibonacci"));
              console.log(`you changed the deck to: ${deck}`);
              setAddButtonNew(false);
            }}
            className="noselect f5 mh2  link bg-animate black-80 hover-light-purple dib  linkBtm"
          >
            Fibonacci
          </p>
          <p
            onClick={() => {
              setDeck((deck = "Custom"));
              console.log(`you changed the deck to: ${deck}`);

              setAddButtonNew(true);
            }}
            className="noselect f5 mh2  link bg-animate black-80 hover-light-purple dib  linkBtm"
          >
            Custom
          </p>
        </nav>
      </footer>
    </>
  );
}

export default Table;
