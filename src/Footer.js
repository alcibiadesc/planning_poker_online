import React from "react";
import "./Footer.css"




function BottomBar() {
  return (

    <footer id="footerBtm" className="bg-white black-80 tc avenir">
      <nav className="bt tc mw7 center ">
        <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">StoryPoints</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/portfolio">T-Shirt</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="/shop">Fibonacci</a>
      </nav>
    </footer>



  );
}

export default BottomBar;
