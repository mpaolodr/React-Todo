// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map(item => {
        return (
          <li key={item.id}>
            <p>{item.task}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
