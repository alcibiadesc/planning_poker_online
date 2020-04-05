import React from "react";
import TitleBar from "./TitleBar";
import Attribution from "./Attribution";
import Table from "./Table";

const App = () => {
	 return(
    <>
     <TitleBar />
     <div className="flex flex-wrap"><Table/></div>
     <div className="mb4 tc">
     <Attribution />
     </div>


    </>
  );
}

export default App;
