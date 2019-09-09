import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import ProjectsList from "./ProjectsList";
import TasksList from "./TasksList";
import "../style.css";
import AddEmployee from "./AddEmployee";
import AddTask from "./AddTask";
import AddProject from "./AddProject";

export default class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empName: "",
      empLast: "",
      empSup: "",
      empPro: [],
      employees: [
        {
          name: "mohamad",
          last: "almasri",
          supervisor: "mohamad",
          projects: ["project 2"]
        },
        {
          name: "sam",
          last: "müller",
          supervisor: "mohamad",
          projects: ["project 1", "project 2"]
        }
      ],
      taskName: "",
      taskDes: "",
      taskHour: "",
      tasks: [
        {
          name: "task 1",
          description: "description for task1",
          hour: 16
        },
        {
          name: "task 2",
          description: "description for task2",
          hour: 55
        }
      ],
      proName: "",
      proStart: "",
      proBuf: "",
      proTasks: [],
      projects: [
        {
          name: "project 1",
          start: "2019-05-04",
          buffer: 3,
          tasks: [
            {
              name: "task 1",
              hour: 16
            },
            {
              name: "task 2",
              hour: 55
            }
          ]
        },
        {
          name: "project 2",
          start: "2019-07-10",
          buffer: 2,
          tasks: [
            {
              name: "task 1",
              hour: 16
            },
            {
              name: "task 2",
              hour: 55
            }
          ]
        }
      ]
    };
  }

  handleInputChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleEmployerSubmit = e => {
    e.preventDefault();
    let newEmp = {
      name: this.state.empName,
      last: this.state.empLast,
      supervisor: this.state.empSup,
      projects: [this.state.empPro]
    };
    this.setState({
      employees: [...this.state.employees, newEmp]
    });
  };

  handleTaskSubmit = e => {
    e.preventDefault();
    let newTask = {
      name: this.state.taskName,
      description: this.state.taskDes,
      hour: this.state.taskHour
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };
  handleProjectSubmit = e => {
    e.preventDefault();
    let newPro = {
      name: this.state.proName,
      start: this.state.proStart,
      buffer: this.state.proBuf,
      tasks: [this.state.proTasks]
    };
    this.setState({
      projects: [...this.state.projects, newPro]
    });
  };
  deleteTask = (index, e) => {
    const tasks = Object.assign([], this.state.tasks);
    tasks.splice(index, 1);
    this.setState({ tasks });
  };
  deleteProject = (index, e) => {
    const projects = Object.assign([], this.state.projects);
    projects.splice(index, 1);
    this.setState({ projects });
  };

  assignProject = (index, e) => {
    e.preventDefault();
    const employee = this.state.employees[index];
    if (employee.projects.length < 2) {
      const value = e.target.value;
      employee.projects.map(pro =>
        pro === value
          ? alert("this project already exist")
          : this.setState(state => {
              return (employee.projects = [...employee.projects, value]);
            })
      );
    } else {
      alert("an employee can only work on two projects at the same time");
    }
  };
  assignTask = (index, e) => {
    e.preventDefault();
    const project = this.state.projects[index];
    const value = e.target.value;
    const found = project.tasks.find(task => task.name === value);
    if (found) {
      alert("this task already exist");
    } else {
      const newTask = this.state.tasks.find(task => task.name === value);
      console.log(newTask);
      this.setState(state => {
        return (project.tasks = [...project.tasks, newTask]);
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Employees</h2>
        <EmployeeList
          employees={this.state.employees}
          projects={this.state.projects}
          assignProject={this.assignProject}
        />
        <AddEmployee
          handleEmployerSubmit={this.handleEmployerSubmit}
          handleInputChange={this.handleInputChange}
          employees={this.state.employees}
        />
        <br></br>
        <h2>Tasks</h2>
        <TasksList tasks={this.state.tasks} deleteTask={this.deleteTask} />
        <AddTask
          handleTaskSubmit={this.handleTaskSubmit}
          handleInputChange={this.handleInputChange}
        />
        <br></br>
        <h2>Projects</h2>
        <ProjectsList
          projects={this.state.projects}
          deleteProject={this.deleteProject}
          tasks={this.state.tasks}
          assignTask={this.assignTask}
        />
        <AddProject
          handleProjectSubmit={this.handleProjectSubmit}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}
