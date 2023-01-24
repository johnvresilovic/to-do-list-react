import { toDoItems, deleteItem } from "../services/Item-api";
import { useState, useEffect } from "react";
import Create from "./CreateItem";
import { Link } from "react-router-dom";

export default function ToDoItems() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    toDoItems() // calling the function to get the data
      .then((res) => setTodos(res.data)); // setting state with returned data
  }, []);
  const taskNotDone = {
    backgroundColor: "yellow",
  };
  const taskDone = {
    textDecoration: "line-through",
  };

  return (
    <div>
      {todos.map((todo) => {
        if (todo.complete) {
          return (
            <p style={taskDone}>
              <a href={`/${todo._id}`}>{todo.description}</a>
            </p>
          );
        } else {
          return (
            <p style={taskNotDone}>
              <a href={`/${todo._id}`}>{todo.description}</a>
            </p>
          );
        }
      })}
      <Create />
    </div>
  );
}
