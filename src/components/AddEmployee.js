import React, { Component } from "react";

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let handleEmployerSubmit = this.props.handleEmployerSubmit;
    let handleInputChange = this.props.handleInputChange;
    let employees = this.props.employees;
    return (
      <div>
        <form onSubmit={handleEmployerSubmit}>
          <div className="row">
            <div className="col-auto">
              <input
                className="form-control"
                type="text"
                name="empName"
                placeholder="first name"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-auto">
              <input
                className="form-control"
                type="text"
                name="empLast"
                placeholder="last name"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-auto">
              <select
                name="empSup"
                onChange={handleInputChange}
                className="form-control"
              >
                <option selected disabled>
                  Direct Supervisor
                </option>
                {employees.map((emp, index) => (
                  <option key={index}>{emp.name}</option>
                ))}
              </select>
            </div>
            <div className="col-auto">
              <input
                type="submit"
                value="Add Employee"
                className="btn btn-primary"
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
