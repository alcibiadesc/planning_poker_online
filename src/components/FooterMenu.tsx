import React from "react";
import "./FooterMenu.css";
import { decks } from "./Baraja";
import { v4 as uuidv4 } from "uuid";

type props = {
  setDeck: any;
  deck: String;
};

const FooterMenu = ({ setDeck, deck }: props) => {
  const decksOptions = decks.map((item, index) => {
    return (
      <div
        key={uuidv4()}
        className="bt tc mw7 center "
        onClick={() => {
          setDeck((deck = decks[index]));
        }}
      >
        <p className="noselect f6 f4-m f3-l ph4-l mh2  link bg-animate black-80 hover-light-purple dib  linkBtm">
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
