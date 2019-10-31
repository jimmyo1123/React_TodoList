import React from "react";

class Task extends React.Component {
  onClickClose = () => {
    //delete the task by its index
    if (this.props.task.done) {
      this.props.deleteDoneTask(this.props.index);
    } else {
      this.props.deleteTodoTask(this.props.index);
    }
  };

  onClickCheck = () => {
    this.props.markAsDone(this.props.index);
  };

  render() {
    var task_class = this.props.task.done ? "done" : "undone";

    if (this.props.task.done) {
      return (
        <li>
          <div className={task_class}>
            <div className="div-check">
              <i className="check icon"></i>
            </div>
            <div className="div-taskName">{this.props.task.value} </div>
          </div>
          <div className="div-close icon_click">
            <i className="close icon" onClick={this.onClickClose}></i>
          </div>
        </li>
      );
    } else {
      return (
        <li>
          <div className={task_class}>
            <div className="div-check icon_click">
              <i className="check icon" onClick={this.onClickCheck}></i>
            </div>
            <div className="div-taskName">{this.props.task.value} </div>
          </div>
          <div className="div-close icon_click">
            <i className="close icon" onClick={this.onClickClose}></i>
          </div>
        </li>
      );
    }
  }
}

export default Task;
