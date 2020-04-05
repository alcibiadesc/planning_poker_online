import React from "react";
import "./Footer.css"




function BottomBar() {
  return (

    <footer id="footerBtm" className="bg-white black-80 tc avenir">
      <nav className="bt tc mw7 center ">
        <a className="f5 f5-l link bg-animate black-80 hover-light-purple dib pa3 ph4-l linkBtm" href="/">StoryPoints</a>
        <a className="f5 f5-l link bg-animate black-80 hover-light-purple dib pa3 ph4-l linkBtm" href="/portfolio">T-Shirt</a>
        <a className="f5 f5-l link bg-animate black-80 hover-light-purple dib pa3 ph4-l linkBtm" href="/shop">Fibonacci</a>
      </nav>
    </footer>
  );

}

export default BottomBar;
