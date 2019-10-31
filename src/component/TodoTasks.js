import React from "react";
import Task from "./Task";

class TodoTasks extends React.Component {
  render() {
    var tasks = this.props.todoTasks.map((task, index) => {
        return (
          <Task
            key={index}
            index={index}
            task={task}
            deleteTodoTask={this.props.deleteTodoTask}
            markAsDone={this.props.markAsDone}
          />
        );
      });

    return (
      <div className="ui bottom attached segment">
        <ul className="ul-tasks">{tasks}</ul>
      </div>
    );
  }
}

export default TodoTasks;
