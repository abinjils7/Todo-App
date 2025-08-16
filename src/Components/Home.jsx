import React, { createContext, useState } from "react";
import Todo from "./Todo";

export const Todocontext = createContext();

function Home() {
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState([]);
  const [editId, setEditId] = useState(null);

  function handleAddOrUpdate() {
    if (val === "") return;

    if (editId === null) {
      const newTodo = { id: Date.now(), title: val };
      setTodo([...todo, newTodo]);
    } else {
      const updated = todo.map(item => {
        if (item.id === editId) {
          return { ...item, title: val };
        }
        return item;
      });
      setTodo(updated);
      setEditId(null);
    }
    setVal("");
  }

  function handleDelete(id) {
    const filtered = todo.filter(item => item.id !== id);
    setTodo(filtered);
    if (editId === id) {
      setEditId(null);
      setVal("");
    }
  }

  function handleEdit(id) {
    const item = todo.find(item => item.id === id);
    if (item) {
      setVal(item.title);
      setEditId(id);
    }
  }

  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        value={val}
        onChange={e => setVal(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAddOrUpdate}>
        {editId === null ? "Add" : "Update"}
      </button>

      <Todocontext.Provider value={{ todo, handleDelete, handleEdit }}>
        <Todo />
      </Todocontext.Provider>
    </div>
  );
}

export default Home;
