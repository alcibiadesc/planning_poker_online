import React, { useState } from "react";
import "./Cartas.css";
import Modal from "./Modal";
import { motion } from "framer-motion";

type props = {
  value: number | string;
  deckSelected: string;
  setDeleteCard: any;
  customDeck: any;
  deleteCard: any;
};

function Cartas({
  value,
  deckSelected,
  setDeleteCard,
  customDeck,
  deleteCard,
}: props) {
  const [modal, setModal] = useState(false);

  const useModal = () => {
    setModal(!modal);
  };

  // Delete 1 Card inside Modal
  const useDeleteCard = () => {
    setDeleteCard(
      customDeck.length >= 1 &&
        customDeck.splice(
          customDeck.map((card: any) => card.value).indexOf(customDeck.value),
          1
        )
    );
    console.log("you deleted:" + deleteCard);
  };

  return (
    <>
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1],
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.9 }}
        className="carta grow center ma1"
      >
        <p
          id="cardRender"
          onClick={useModal}
          defaultValue={value}
          className="noselect avenir dtc v-mid  tc w4 f1"
        >
          {value}
        </p>
      </motion.div>

      {/* Modal Card */}

      {modal && (
        <div onClick={useModal}>
          <Modal
            value={value}
            deckSelected={deckSelected}
            useDeleteCard={useDeleteCard}
          />
        </div>
      )}
    </>
  );
}

export default Cartas;
