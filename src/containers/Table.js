import React, { useState } from "react";
import "./Table.css";
import CardList from "../components/CardList";
import { baraja } from "../components/Baraja.js";

function Table() {
  let [deck, setDeck] = useState("Fibonacci");

  let [addButtonNew, setAddButtonNew] = useState("");

  const [customDeck, setAddNewCard] = useState(baraja);

  let useAddNewCard = () => {
    setAddNewCard([...customDeck, { value: newCardName, deck: "Custom" }]);
    console.log(customDeck);
  };

  const [newCardName, setNewCardName] = useState("");

  const useNewCardName = event => {
    setNewCardName(event.target.value);
  };

  return (
    <>
      <div className="f3 tc avenir pv2 fl w-100 pa2">{deck}</div>
      <div className="w-100">
        {addButtonNew ? (
          <div className="w-100 tc center pa2">
            <input
              className="mb3"
              type="text"
              value={newCardName}
              onChange={useNewCardName}
            />
            <br />
            <div
              onClick={useAddNewCard}
              className="f6 link dim ba ph3 pv2 mb2 dib dark-gray pa2 noselect"
            >
              Add a new Card
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <CardList deckSelected={deck} customDeck={customDeck} />

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