import React, { useContext } from "react";
import { Todocontext } from "./Home";

function Todo() {
  const { todo, handleDelete, handleEdit } = useContext(Todocontext);

  return (
    <ul>
      {todo.map((item) => (
        <div key={item.id}>
          {item.title}
          <button onClick={() => handleDelete(item.id)}>delete</button>
          <button onClick={() => handleEdit(item.id)}>ddit</button>
        </div>
      ))}
    </ul>
  );
}

export default Todo;

