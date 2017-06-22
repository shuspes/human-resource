import React from "react";
import { peoples, properties } from "../data/peoples";
import {getVisibleInTableProperties} from "../utils/filters";
import {sortByDisplayOrderProperty} from "../utils/sorters";
import Table from "./Table";
import DetailsPage from "./Details";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      openedPeopleId: null
    };

    this.openPeople = (peopleId) => {
      this.setState({openedPeopleId: peopleId});
    };
  }

  getOpenedPeople() {
    return peoples.find(people => people.Id == this.state.openedPeopleId) || {};
  };

  render() {
    const filteredColumnsForTable = getVisibleInTableProperties(properties);
    const sortedColumnsForTable = sortByDisplayOrderProperty(filteredColumnsForTable);
    return (
      <div>
        <Table columns={sortedColumnsForTable} rows={peoples} openDetails={this.openPeople} />
        {
          !(this.state.openedPeopleId == null)
              ? <DetailsPage people={this.getOpenedPeople()}/>
              : null
        }
      </div>
    );
  }
}

export default App;