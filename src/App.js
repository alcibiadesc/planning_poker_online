import React from "react";
import TitleBar from "./TitleBar";
import CardList from "./CardList";
import Attribution from "./Attribution";
import Footer from "./Footer";

const App = () => {
	 return(
    <>
     <TitleBar />
     <div className="flex flex-wrap"><CardList/></div>
     <div className="mb4 tc">
     <Attribution />
     </div>

     <Footer />
    </>
  );
}

export default App;
