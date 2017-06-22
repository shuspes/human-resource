import React from "react";

class DetailsPage extends React.Component {
  render() {
    const {
      people
    } = this.props;

    return (
      <div>
        {
          Object.keys(people).map((propertyKey, index) => <div key={index}>{people[propertyKey]}</div>)
        }
      </div>
    );
  }
}

export default DetailsPage;