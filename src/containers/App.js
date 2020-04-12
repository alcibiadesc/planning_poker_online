import React from "react";
import TitleBar from "../components/TitleBar";
import Attribution from "../components/Attribution";
import Table from "./Table";

const App = () => {
  return (
    <>
      <TitleBar />

      <div className="flex flex-wrap">
        <Table />
      </div>
      <div className="mb4 tc">
        <Attribution />
      </div>
    </>
  );
};

export default App;
