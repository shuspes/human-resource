import React from "react";

class TableBodyCell extends React.Component {
  render() {
    return (
      <td>
        {this.props.value}
      </td>
    );
  }
}

export default TableBodyCell;