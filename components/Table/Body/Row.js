import React from "react";
import TableBodyCell from "./Cell";

class TableBodyRow extends React.Component {
  render() {
    const {
      row,
      columns,
      openDetails
    } = this.props;

    return (
      <tr onClick={openDetails.bind(this, row.Id)}>
        {
          columns.map(column => <TableBodyCell value={row[column.Code]} />)
        }
      </tr>
    );
  }
}

export default TableBodyRow;