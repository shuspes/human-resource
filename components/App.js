import React from "react";
import { peoples, peoplesTableColumns } from "../data/peoples";
import Table from "./Table";

const App = () => {
  return (
    <div>
      <Table columns={peoplesTableColumns} rows={peoples}/>
    </div>
  );
};

export default App;