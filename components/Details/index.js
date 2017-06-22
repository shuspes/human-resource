import React from "react";

class DetailsPage extends React.Component {
  render() {
    const {
      people,
      properties
    } = this.props;

    return (
      <div>
        {
          properties.map((property, index) => {
            return (
              <div key={index}>
                <span style={{fontWeight: "bold", paddingRight: "5px"}}>
                  {property.Name}:
                </span>
                <span>{people[property.Code]}</span>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default DetailsPage;