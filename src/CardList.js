import React from "react";
import Cartas from "./Cartas"
import {storyPoints} from "./Baraja"

const CardList = () => {
  const cardValue = storyPoints.map((user, i) => {
    return <Cartas value={storyPoints[i]}/>;
  });

  return (
    <>
      {cardValue}
    </>

  );

}

export default CardList;
