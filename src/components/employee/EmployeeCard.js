import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-employeeName">{this.props.employee.name}</span></h3>
          <button type="button"
            onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/edit`) }}>Edit</button>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire {this.props.employee.name}</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
