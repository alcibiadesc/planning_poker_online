import React, { useState } from "react";
import "./Table.css";
import CardList from "./CardList";

function Table() {
  let [deck, setDeck] = useState("fibonacci");

  return (
    <>
      <CardList deckSelected={deck} />

      <footer id="footerBtm" className="bg-white black-80 tc avenir">
        <nav className="bt tc mw7 center ">
          <p
            onClick={() => {
              setDeck((deck = "storyPoints"));
            }}
            className="noselect f5 f5-l link bg-animate black-80 hover-light-purple dib ph4 linkBtm"
          >
            StoryPoints
          </p>
          <p
            onClick={() => {
              setDeck((deck = "tshirt"));
              console.log(`you changed the deck to: ${deck}`);
            }}
            className="noselect f5 f5-l link bg-animate black-80 hover-light-purple dib ph4 linkBtm"
          >
            T-Shirt
          </p>
          <p
            onClick={() => {
              setDeck((deck = "fibonacci"));
              console.log(`you changed the deck to: ${deck}`);
            }}
            className="noselect f5 f5-l link bg-animate black-80 hover-light-purple dib ph4 linkBtm"
          >
            Fibonacci
          </p>
        </nav>
      </footer>
    </>
  );
}

export default Table;
