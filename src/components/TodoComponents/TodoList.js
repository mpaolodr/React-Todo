// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

//components
import Todo from "./Todo";

//style
import "./Todo.scss";

const TodoList = ({ todoList, toggleCompleted }) => {
  return (
    <ul className="list">
      {todoList.map(item => {
        return (
          <Todo key={item.id} item={item} toggleCompleted={toggleCompleted} />
        );
      })}
    </ul>
  );
};

export default TodoList;
