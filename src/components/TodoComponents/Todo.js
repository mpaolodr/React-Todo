import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";

const Todo = ({ item, toggleCompleted }) => {
  const indList = useRef(null);

  useEffect(() => {
    TweenMax.from(indList.current, 0.5, {
      y: -20,

      ease: "Bounce.easeOut"
    });
  }, []);
  return (
    <li ref={indList}>
      <p
        className={item.completed.toString()}
        onClick={() => toggleCompleted(item.id)}
      >
        {item.task}
      </p>
    </li>
  );
};

export default Todo;
