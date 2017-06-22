import React from "react";
import TableBodyRow from "./Row";

class TableBody extends React.Component {
  render() {
    const {
      columns,
      rows,
      openDetails
    } = this.props;

    return (
      <tbody>
      {
        rows.map(row => <TableBodyRow row={row} columns={columns} openDetails={openDetails} />)
      }
      </tbody>
    );
  }
}

export default TableBody;