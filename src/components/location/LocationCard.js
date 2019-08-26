import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h2>{this.props.location.name}</h2>
            <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
            <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Remove Location</button>
           </div>
      </div>
    );
  }
}

export default LocationCard;