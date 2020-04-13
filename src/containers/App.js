import React from "react";
import TitleBar from "../components/TitleBar";
import Attribution from "../components/Attribution";
import Table from "../components/Table.js";

const App = () => {
  return (
    <React.Fragment>
      <h1>Experimental</h1>
      <TitleBar />
      <Table />
      <Attribution />
    </React.Fragment>
  );
};

export default App;
