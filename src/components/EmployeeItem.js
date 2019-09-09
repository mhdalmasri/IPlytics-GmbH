import React, { Component } from "react";
import AssignProject from "./AssignProject";

export default class EmployeeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let employees = this.props.employees;
    let projects = this.props.projects;
    let assignProject = this.props.assignProject;

    return (
      <li>
        <p>
          {employees.name} {employees.last}
        </p>
        <p>
          Supervised By:
          {" "+employees.supervisor}
        </p>
        <p>
          Assigned Projects:
          {" "+employees.projects.map(project => project + " ")}
        </p>
        <AssignProject projects={projects} assignProject={assignProject} />
      </li>
    );
  }
}
