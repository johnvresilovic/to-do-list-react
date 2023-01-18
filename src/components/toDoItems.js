import { toDoItems, deleteItem } from '../services/Item-api'
import { useState, useEffect } from "react";
import Create from './CreateItem';

export default function ToDoItems() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        toDoItems() // calling the function to get the data
        .then(res => setTodos(res.data)) // setting state with returned data
    }, [])
   
    return(
        <div>
            {/* <ul> */}
            {todos.map((todo) =>{
                return (
                    <p><a href={`/${todo._id}`}>{todo.description}</a></p>
                )
            })}
          {/* </ul> */}
          <Create />  
        </div>
    )
}