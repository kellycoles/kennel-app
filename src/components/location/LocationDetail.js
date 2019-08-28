import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';


class LocationDetail extends Component {

  state = {
      name: "",
      address:"",
      loadingStatus: true,

  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        address: location.address,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    this.setState({loadingStatus: true})
    LocationManager.delete(this.props.locationId)
    .then(() => this.props.history.push("/locations"))
}
  render() {
    return (
      <div className="card">
        <div className="card-content">
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
        <address>{this.state.address}</address>
          {/* <picture>
            <img src={require(${this.props.locations.imgLocation})} alt="A Kennel" />
          </picture> */}
          <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Remove Location</button>

        </div>
      </div>
    );
  }
}

export default LocationDetail;