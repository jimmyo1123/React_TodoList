import React from "react";

class Menu extends React.Component {
    state = { TodoTasksActive: true};

    onClickMenuToDoTask = () => {
        this.setState({ TodoTasksActive: true});
        this.props.setActiveList(true);
      };
        
      onClickMenuDoneTask = () => {
        this.setState({ TodoTasksActive: false});
        this.props.setActiveList(false);
      };


  render() {
    var todoMenu_class = this.state.TodoTasksActive ? "active item" : "item";
    var doneMenu_class = this.state.TodoTasksActive ? "item" : "active item";

    return (
      <div className="ui two item menu">
        <a className={todoMenu_class} onClick={this.onClickMenuToDoTask}>
          To-do Tasks
        </a>
        <a className={doneMenu_class} onClick={this.onClickMenuDoneTask}>
          Done Tasks
        </a>
      </div>
    );
  }
}

export default Menu;
