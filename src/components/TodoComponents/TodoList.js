// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

//components
import Todo from "./Todo";

const TodoList = ({ todoList, toggleCompleted }) => {
  return (
    <ul>
      {todoList.map(item => {
        return (
          <li key={item.id}>
            <Todo item={item} toggleCompleted={toggleCompleted} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
