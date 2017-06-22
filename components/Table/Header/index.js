import React from "react";

class TableHeader extends React.Component {
  render() {
    const {
      columns
    } = this.props;

    return (
      <thead>
        <tr>
          {
            columns.map(column => <th>{column.Name}</th>)
          }
        </tr>
      </thead>
    );
  }
}

export default TableHeader;