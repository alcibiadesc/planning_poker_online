import React, { useState, Fragment } from "react";
import "./Cartas.css";
import Modal from "./Modal";
import { motion } from "framer-motion";

type props = {
  value: number | string;
  deckSelected: string;
  customDeck: any;
  setAddNewCard: any;
  id: string;
};

const Cartas: React.FC<props> = ({
  value,
  deckSelected,
  setAddNewCard,
  customDeck,
  id,
}) => {
  const [modal, setModal] = useState(false);

  const useModal = () => {
    setModal(!modal);
  };

  // Delete 1 card

  const useDeleteCard = () => {
    setAddNewCard(customDeck.filter((card: any) => card.id !== id));
  };

  return (
    <Fragment>
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1],
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        whileTap={{ scale: 0.8 }}
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
    </Fragment>
  );
};

export default Cartas;
