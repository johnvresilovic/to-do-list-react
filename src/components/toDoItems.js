import getListItems from '../services/Item-api'
import { useState } from "react";
import { useEffect } from "react";

export default function ToDoItems() {
    const [toDoList, setToDoList] = useState([])
    useEffect( () => {
        getListItems().then(res => setToDoList(res.data))
    }, [])
    return (
        <>
        <ul>
            {toDoList.map((todo) => {
                return (
                    <li><a href={`/${todo._id}`}>{todo.description}</a></li>
                )
                })}
            </ul>
        </>
    )
}