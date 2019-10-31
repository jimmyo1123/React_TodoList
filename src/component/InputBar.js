import "./InputBar.css";
import React from "react";

class InputBar extends React.Component {

  //refs
  componentDidMount() {
    this.refs.taskName.focus();
  }

  onSubmit = (event) => {
    event.preventDefault();
    var newTaskName = this.refs.taskName.value;

    this.props.onSubmit(newTaskName);
    this.refs.form.reset();
  }

  render() {
    return (
      <div className="field_form">
        <form className="ui form" ref="form" onSubmit={this.onSubmit}>
          <div className="ui fluid action input">
            <input
              type="text"
              ref="taskName"
              placeholder="Input Task..."
            />
            <div
              className="ui button"
              type="submit"
              onClick={this.onSubmit}
            >
              Add Task
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default InputBar;
