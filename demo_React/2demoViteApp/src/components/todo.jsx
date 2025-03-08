import React from "react";

const Todo = ({todo}) => {
return (
    <div className="todos">
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
    </div>
  );
};

export default Todo;
