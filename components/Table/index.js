import React from "react";
import {sortByDisplayOrderProperty} from "../../utils/sorters";
import TableHeader from "./Header";
import TableBody from "./Body";

class Table extends React.Component {
  render() {
    const {
      columns,
      rows
    } = this.props;

    const sortedColumns = sortByDisplayOrderProperty(columns);

    return (
      <table>
        <TableHeader columns={sortedColumns} />
        <TableBody columns={sortedColumns} rows={rows} />
      </table>
    );
  }
}

export default Table;