import React, { Component } from 'react';
import "./Animal.css"

class AnimalCard extends Component {
render() {
  return (
    <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h2>Name: <span className="card-petname">{this.props.animalObj.name}</span></h2>
          <p>Breed: {this.props.animalObj.breed}</p>
        </div>
    </div>
  );
}
}

export default AnimalCard;