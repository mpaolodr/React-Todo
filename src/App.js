import React from "react";

//DATA
import { data } from "./data";

//components
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //constructor function for my state
  constructor() {
    super();
    this.state = {
      todoList: data
    };
  }

  //function to toggle if task is completed
  toggleCompleted = itemId => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  //function to add new item
  addTodo = itemName => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: itemName,
          id: `1${this.state.todoList.length}20`,
          completed: false
        }
      ]
    });
  };

  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(item => {
        return item.completed === false;
      })
    });
  };

  render() {
    return (
      <div>
        <div className="forms-container">
          <TodoForm
            addTodo={this.addTodo}
            clearCompleted={this.clearCompleted}
          />
        </div>
        <div className="list-container">
          <TodoList
            todoList={this.state.todoList}
            toggleCompleted={this.toggleCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
