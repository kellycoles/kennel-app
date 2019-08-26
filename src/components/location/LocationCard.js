import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h2>{this.props.location.name}</h2>
           </div>
      </div>
    );
  }
}

export default LocationCard;