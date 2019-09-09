import React, { Component } from "react";

export default class AssignTask extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let tasks = this.props.tasks;
    let assignTask = this.props.assignTask;
    return (
      <select onClick={assignTask} name="proTask" className="form-control">
        <option selected disabled>
          Assign Task
        </option>
        selected disabled
        {tasks.map((task, index) => (
          <option key={index} value={task.name}>
            {task.name}
          </option>
        ))}
      </select>
    );
  }
}
