import React, { Component } from "react";
import TasksItem from "./TasksItem";

export default class TasksList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let tasks = this.props.tasks;
    let deleteTask = this.props.deleteTask;
    return (
      <ul>
        {tasks.map((task, index) => (
          <TasksItem
            key={index}
            tasks={tasks[index]}
            deleteTask={deleteTask.bind(this, index)}
          />
        ))}
      </ul>
    );
  }
}
