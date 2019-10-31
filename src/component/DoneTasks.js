import React from "react";
import Task from "./Task";

class DoneTasks extends React.Component {
  render() {
    var doneTasks = this.props.doneTasks.map((task, index) => {
      return (
        <Task
          key={index}
          index={index}
          task={task}
          deleteDoneTask={this.props.deleteDoneTask}
          markAsDone={this.props.markAsDone}
        />
      );
    });

    return (
      <div className="ui bottom attached segment">
        <ul className="ul-tasks">{doneTasks}</ul>
      </div>
    );
  }
}

export default DoneTasks;
