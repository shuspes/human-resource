import React from "react";
import { peoples, properties } from "../data/peoples";
import {getVisibleInTableProperties} from "../utils/filters";
import {sortByDisplayOrderProperty} from "../utils/sorters";
import Table from "./Table";

const App = () => {
  const filteredColumnsForTable = getVisibleInTableProperties(properties);
  const sortedColumnsForTable = sortByDisplayOrderProperty(filteredColumnsForTable);
  return (
    <div>
      <Table columns={sortedColumnsForTable} rows={peoples}/>
    </div>
  );
};

export default App;