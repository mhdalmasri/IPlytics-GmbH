import React, { Component } from "react";

export default class AssignProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let projects = this.props.projects;
    let assignProject = this.props.assignProject;
    return (
      <select onClick={assignProject} name="empPro" className="form-control">
             <option selected disabled>
            Assign Project
          </option>
        {projects.map((pro, index) => (
          <option key={index} value={pro.name}>
           {pro.name}
          </option>
        ))}
      </select>
    );
  }
}
