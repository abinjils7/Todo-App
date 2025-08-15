import React, { createContext, useState } from "react";
import Todo from "./Todo";

export const Todocontext = createContext();

function Home() {
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState([]);
  const [editId, setEditId] = useState(null);  

  const handleAddOrUpdate = () => {
    if (val.trim() === "") return;

    if (editId) {
      setTodo(
        todo.map((item) =>
          item.id === editId ? { ...item, title: val } : item
        )
      );
      setEditId(null);
    } else {
     
      const result = { id: crypto.randomUUID(), title: val };
      setTodo([...todo, result]);
    }
    setVal(""); 
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
    if (editId === id) {
      setEditId(null);
      setVal("");
    }
  };

  const handleEdit = (id) => {
    const editItem = todo.find((item) => item.id === id);
    if (!editItem) return;
    setVal(editItem.title);
    setEditId(id);
  };

  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        placeholder="Enter todo"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={handleAddOrUpdate}>
        {editId ? "Update" : "Add"}
      </button>

      <Todocontext.Provider value={{ todo, handleDelete, handleEdit }}>
        <Todo />
      </Todocontext.Provider>
    </div>
  );
}

export default Home;
