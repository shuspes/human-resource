import React from "react";
import TableHeader from "./Header";
import TableBody from "./Body";

class Table extends React.Component {
  render() {
    const {
      columns,
      rows
    } = this.props;

    return (
      <table>
        <TableHeader columns={columns} />
        <TableBody columns={columns} rows={rows} />
      </table>
    );
  }
}

export default Table;