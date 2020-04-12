import React, { useState, useEffect } from "react";
import "./Cartas.css";
import Modal from "./Modal.js";
import { motion } from "framer-motion";

function Cartas({ value, customDeck, deckSelected, storeCard }) {
  useEffect(() => {
    storeCard(customDeck);
  });

  const [modal, setModal] = useState(false);

  const useModal = () => {
    setModal(!modal);
  };

  // hide card with css
  const [deleteCard, setDeleteCard] = useState("carta grow center ma1");

  const useDeleteCard = () => {
    setDeleteCard("carta grow center ma1 hide");
    if (customDeck.length >= 1) {
      let position = customDeck.map(card => card.value).indexOf(value);
      customDeck.splice(position, 1);
    }
  };

  return (
    <>
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1]
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.9 }}
        className={deleteCard}
      >
        <p
          id="cardRender"
          onClick={useModal}
          value={value}
          className="noselect avenir dtc v-mid  tc w4 f1"
        >
          {value}
        </p>
      </motion.div>

      {/* Modal Card */}

      {modal && (
        <div onClick={useModal}>
          <Modal
            valueCard={value}
            useDeleteCard={useDeleteCard}
            deckSelected={deckSelected}
          />
        </div>
      )}
    </>
  );
}

export default Cartas;
