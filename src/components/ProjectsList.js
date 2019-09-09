import React, { Component } from "react";
import ProjectsItem from "./ProjectsItem";

export default class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let projects = this.props.projects;
    let deleteProject = this.props.deleteProject;
    let tasks = this.props.tasks;
    let assignTask = this.props.assignTask;
    return (
      <ul>
        {projects.map((pro, index) => (
          <ProjectsItem
            key={index}
            projects={projects[index]}
            deleteProject={deleteProject.bind(this, index)}
            tasks={tasks}
            assignTask={assignTask.bind(this, index)}
          />
        ))}
      </ul>
    );
  }
}
