import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

          <h3>Name: <span className="card-employeeName">Joe Rottweiler</span></h3>
          <p>Time with Company: 1 year</p>
          <p>Speciality: pet hugs</p>
          <h3>Name: <span className="card-employeeName">Kim Spanial</span></h3>
          <p>Time with Company: 2 years</p>
          <p>Speciality: pet grooming</p>
          <h3>Name: <span className="card-employeeName">Rosie Sheppard</span></h3>
          <p>Time with Company: 6 mo</p>
          <p>Speciality: Front Desk</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;