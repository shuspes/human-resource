import React from "react";
import TableBodyRow from "./Row";

class TableBody extends React.Component {
  render() {
    const {
      columns,
      rows
    } = this.props;

    return (
      <tbody>
      {
        rows.map(row => <TableBodyRow row={row} columns={columns} />)
      }
      </tbody>
    );
  }
}

export default TableBody;