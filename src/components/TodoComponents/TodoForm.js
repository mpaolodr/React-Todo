import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      newItem: ""
    };
  }

  handleChange = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  handleSubmit = e => {
    //function to add new item on list created from App.js
    e.preventDefault();
    this.props.addTodo(this.state.newItem);
    this.setState({
      newItem: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newItem"
          placeholder="Add New Todo"
          value={this.state.newItem}
          onChange={this.handleChange}
        />
        <button type="submit">Add Item</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
