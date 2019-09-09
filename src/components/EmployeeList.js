import React, { Component } from "react";
import EmployeeItem from "./EmployeeItem";

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let employees = this.props.employees;
    let projects = this.props.projects;
    let assignProject = this.props.assignProject;

    return (
      <ul>
        {employees.map((emp, index) => (
          <EmployeeItem
            key={index}
            employees={employees[index]}
            projects={projects}
            assignProject={assignProject.bind(this,index)}
          />
        ))}
      </ul>
    );
  }
}
