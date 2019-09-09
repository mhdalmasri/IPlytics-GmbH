import React, { Component } from "react";
import AssignTask from "./AssignTask";

export default class ProjectsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let projects = this.props.projects;
    let deleteProject = this.props.deleteProject;
    let tasks = this.props.tasks;
    let assignTask = this.props.assignTask;
    let estimatedTime = 0;
    projects.tasks.forEach(task => {
      estimatedTime += task.hour;
    });
  
    return (
      <li>
        <p>{projects.name} </p>
        <p>Start Date:{" " + projects.start} </p>
        <p>
          Buffer:
          {" " + projects.buffer + " Days"}
        </p>
        <p>
          Assigned Tasks:
          {" " + projects.tasks.map(task => task.name + " ")}
        </p>
        <p>
          Dead Line:
          {Math.floor(estimatedTime / 8) + projects.buffer}
          {/* {Math.floor((estimatedTime + projects.buffer*8)/8)} */}
        </p>
        <AssignTask tasks={tasks} assignTask={assignTask} />
        <br></br>
        <button onClick={deleteProject} className="btn btn-danger">
          delete
        </button>
      </li>
    );
  }
}
