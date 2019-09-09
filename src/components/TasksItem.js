import React, { Component } from "react";

export default class TasksItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let tasks = this.props.tasks;
    let deleteTask = this.props.deleteTask;
    return (
      <li>
        <p>{tasks.name} </p>
        <p> Description:{" " + tasks.description} </p>
        <p>
          Estimated Days:
          {/* work day = 8 hours */}
          {" " + Math.floor(tasks.hour / 8)+" Days"}
        </p>
        <button onClick={deleteTask} className="btn btn-danger">
          delete
        </button>
      </li>
    );
  }
}
