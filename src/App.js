import React from "react";

//DATA
import { data } from "./data";

//components
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: data
    };
  }

  render() {
    return (
      <div>
        <div className="list-container">
          <TodoList todoList={this.state.todoList} />
        </div>
      </div>
    );
  }
}

export default App;
