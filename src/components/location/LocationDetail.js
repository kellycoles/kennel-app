import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';


class LocationDetail extends Component {

  state = {
      name: ""

  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        address: location.address
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
        <address>{this.state.address}</address>
          <picture>
            <img src={require('./kennel.jpg')} alt="A Kennel" />
          </picture>


        </div>
      </div>
    );
  }
}

export default LocationDetail;