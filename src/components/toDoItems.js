import { toDoItems } from '../services/Item-api'
import { useState, useEffect } from "react";
import Create from './CreateItem';

export default function ToDoItems() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        toDoItems() // calling the function to get the data
        .then(res => setTodos(res.data)) // setting state with returned data
    }, [])
    console.log(todos)
    return(
        <div>
            <ul>
            {todos.map((todo) =>{
                return (
                    <li><a href={`/${todo._id}`}>{todo.description}</a></li>
                )
            })}
          </ul>
          <Create />  
        </div>
    )
}