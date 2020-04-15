import React from "react";

const TitleBar: React.FC = () => {
  return (
    <header className="bg-white black-80 tc pv1 avenir">
      <h1 className="mt2 mb0 fw2 f3 f2-m f1-l avenir">Planning Poker Online</h1>
      <h2 className="mt2 mb0 f6 f3-m f2-l fw4 avenir">Choose your Card</h2>
    </header>
  );
};

export default TitleBar;
