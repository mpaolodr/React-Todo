import React from "react";

const Todo = ({ item, toggleCompleted }) => {
  return (
    <div>
      <p onClick={() => toggleCompleted(item.id)}>{item.task}</p>
      <p>{item.completed.toString()}</p>
    </div>
  );
};

export default Todo;
