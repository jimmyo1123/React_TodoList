import "./TaskList.css";
import React from "react";
import Menu from "./Menu";
import TodoTasks from "./TodoTasks";
import DoneTasks from "./DoneTasks";

class TaskList extends React.Component {
  state = { TodoTasksActive: true};

  setActiveList = (status) => {
    this.setState({ TodoTasksActive: status});
  }

  render() {
    
    if(this.state.TodoTasksActive){
        return (
            <div>
              <Menu setActiveList={this.setActiveList} />
              <TodoTasks
                todoTasks={this.props.tasks}
                deleteTodoTask={this.props.deleteTodoTask}
                markAsDone={this.props.markAsDone}
              />
            </div>
          );
    }else{
        return (
            <div>
              <Menu setActiveList={this.setActiveList} />
              <DoneTasks
                doneTasks={this.props.doneTasks}
                deleteDoneTask={this.props.deleteDoneTask}
              />
            </div>
          );
    }
    
  }
}

export default TaskList;
