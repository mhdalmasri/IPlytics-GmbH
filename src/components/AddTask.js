import React, { Component } from 'react'

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let handleTaskSubmit = this.props.handleTaskSubmit;
    let handleInputChange = this.props.handleInputChange;
    return (
      <div>
         <form onSubmit={handleTaskSubmit}>
            <div className="row">
              <div className="col-auto">
                <input
                  className="form-control"
                  type="text"
                  name="taskName"
                  placeholder="task name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-auto">
                <input
                  className="form-control"
                  type="text"
                  name="taskDes"
                  placeholder="task description"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-auto">
                <input
                  className="form-control"
                  type="number"
                  name="taskHour"
                  placeholder="estimated hours
                needed"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-auto">
                <input
                  type="submit"
                  value="Add Task"
                  className="btn btn-primary"
                ></input>
              </div>
            </div>
          </form>
      </div>
    )
  }
}
