import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h2>Murfreesboro</h2>
       <address>1234 Kitten Ct.<br />
       Murfreesboro,TN. 37129
       </address>
       <h2>Nashville</h2>
       <address>500 Puppy Way.<br />
       Nashville,TN. 37127
       </address>
        </div>
      </div>
    );
  }
}

export default LocationCard;