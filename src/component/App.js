import React from "react";
import InputBar from "./InputBar";
import TaskList from "./TaskList";

class App extends React.Component {
  state = { tasks: [], doneTasks: [] };

  addTask = TaskName => {
    var currentTasks = this.state.tasks;
    currentTasks.unshift({
      index: currentTasks.length + 1,
      value: TaskName,
      done: false
    });

    this.setState({ tasks: currentTasks });
  };

  deleteTodoTask = (taskIndex) => {
    var currentTodoTasks = this.state.tasks;
    currentTodoTasks.splice(taskIndex, 1);
    this.setState({ tasks: currentTodoTasks });
  }

  deleteDoneTask = (taskIndex) => {
      var currentDoneTasks = this.state.doneTasks;
      currentDoneTasks.splice(taskIndex, 1);
      this.setState({ doneTasks: currentDoneTasks });
  }



  markAsDone = (taskIndex) => {
      var currentTasks = this.state.tasks;
      var currentDoneTasks = this.state.doneTasks;
      var task = currentTasks[taskIndex];
      task.done = !task.done;
      currentTasks.splice(taskIndex, 1)
      currentDoneTasks.push(task);
      //console.log(`currentTasks: ${currentTasks}, DoneTasks: ${currentDoneTasks}`)
      
      //currentTasks[taskIndex].done = !currentTasks.done;
      
      //task.done ? currentTasks.push(task) : currentTasks.unshift(task);
      this.setState({ tasks: currentTasks, doneTasks: currentDoneTasks});
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1 className="ui dividing cener aligned icon header">
          <i className="circular calendar check icon"></i>
          To-Do List
        </h1>
        <InputBar onSubmit={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          doneTasks={this.state.doneTasks}
          deleteTodoTask={this.deleteTodoTask}
          deleteDoneTask={this.deleteDoneTask}
          markAsDone={this.markAsDone}
        />
      </div>
    );
  }
}

export default App;
