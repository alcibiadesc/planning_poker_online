import React from "react";

const CustomDeckMenu = ({
  newCardName,
  useNewCardName,
  deleteAllCustomCards,
  useAddNewCard,
  customDeck,
  setAddNewCard,
  setNewCardName
}) => {
  // Press enter  const handleKeyPress = event => {
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      setAddNewCard([...customDeck, { value: newCardName, deck: "Custom" }]);

      setNewCardName("");
    }
  };

  return (
    <React.Fragment>
      <div className="w-100 center tc">
        {/* INPUT CARD VALUE */}
        <div className=" pa2">
          <input
            className="mb3 tc"
            type="text"
            value={newCardName}
            onChange={useNewCardName}
            onKeyPress={handleKeyPress}
            maxLength="15"
            placeholder="Card Value"
          />
        </div>

        {/* BUTTON CREATE NEW CARD */}

        <button
          href="#0"
          type="Reset"
          onClick={useAddNewCard}
          className="f6 link dim ba ph3 pv2 mb2 dib dark-gray pa2 noselect "
        >
          New Card
        </button>

        {/* BUTTON DELETE ALL */}

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
    </React.Fragment>
  );
};

export default CustomDeckMenu;
