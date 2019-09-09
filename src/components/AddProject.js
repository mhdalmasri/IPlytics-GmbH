import React, { Component } from "react";

export default class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let handleProjectSubmit = this.props.handleProjectSubmit;
    let handleInputChange = this.props.handleInputChange;
    
    return (
      <div>
        <form onSubmit={handleProjectSubmit}>
          <div className="row">
            <div className="col-auto">
              <input
                className=" form-control"
                type="text"
                name="proName"
                placeholder="project name"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-auto">
              <input
                className="form-control"
                type="date"
                name="proStart"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-auto">
              <input
                className=" form-control"
                type="number"
                name="proBuf"
                placeholder="estimated buffer
                days"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-auto">
              <input
                type="submit"
                value="Add Project"
                className="btn btn-primary"
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
