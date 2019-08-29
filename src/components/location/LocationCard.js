import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Location.css'

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h2>{this.props.locationObj.name}</h2>
          <p>{this.props.locationObj.address}</p>
          <picture>
            <img src={require(`${this.props.locationObj.imgLocation}`)} alt="A Kennel" className="size" />
          </picture>
          <Link to={`/locations/${this.props.locationObj.id}`}><button>Details</button></Link>
          <button type="button"
            onClick={() => { this.props.history.push(`/locations/${this.props.locationObj.id}/edit`) }}>Edit</button>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.locationObj.id)}>Remove Location</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;