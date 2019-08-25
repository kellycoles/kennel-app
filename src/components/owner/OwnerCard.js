import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

          <h3>Owner: <span className="card-ownerName">Jane Doe</span></h3>
          <p>Pet: Doodles</p>
          <address>Address: 402 Valley Drive<br />
                   Murfreesboro, TN. 37129
          </address>
        </div>
      </div>
    );
  }
}

export default OwnerCard;