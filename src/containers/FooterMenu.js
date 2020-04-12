import React from "react";
import "./FooterMenu.css";
import { decks } from "../components/Baraja.js";
import { v4 as uuidv4 } from "uuid";

const FooterMenu = ({ setDeck, setAddButtonNew, deck }) => {
  const decksOptions = decks.map((item, index) => {
    return (
      <div
        key={uuidv4()}
        className="bt tc mw7 center "
        onClick={() => {
          setDeck((deck = decks[index]));
          deck === "Custom" && setAddButtonNew(true);
        }}
      >
        <p className="noselect f5 f3-l ph4-l mh2  link bg-animate black-80 hover-light-purple dib  linkBtm">
          {decks[index]}
        </p>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div>
        <footer id="footerBtm" className="bg-white black-80 tc avenir pv3 flex">
          {decksOptions}
        </footer>
      </div>
    </React.Fragment>
  );
};

export default FooterMenu;
