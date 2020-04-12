import React from "react";

const CustomDeckMenu = ({
  addButtonNew,
  newCardName,
  useNewCardName,
  handleKeyPress,
  useAddNewCard,
  deleteAllCustomCards
}) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default CustomDeckMenu;
