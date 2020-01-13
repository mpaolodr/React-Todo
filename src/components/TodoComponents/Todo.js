import React from "react";

const Todo = ({ item, toggleCompleted }) => {
  return (
    <div>
      <p
        className={item.completed.toString()}
        onClick={() => toggleCompleted(item.id)}
      >
        {item.task}
      </p>
    </div>
  );
};

export default Todo;
