import React from "react";
import TableBodyCell from "./Cell";

class TableBodyRow extends React.Component {
  render() {
    const {
      row,
      columns
    } = this.props;

    return (
      <tr>
        {
          columns.map(column => <TableBodyCell value={row[column.Code]} />)
        }
      </tr>
    );
  }
}

export default TableBodyRow;