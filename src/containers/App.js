import React from "react";
import TitleBar from "../components/TitleBar";
import Attribution from "../components/Attribution";
import Table from "./Table";

const App = () => {
  return (
    <React.Fragment>
      <TitleBar />

      <div className="flex flex-wrap">
        <Table />
      </div>
      <Attribution />
    </React.Fragment>
  );
};

export default App;
