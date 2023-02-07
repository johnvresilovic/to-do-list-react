import axios from "axios";
const baseURL = 'https://localhost:3000/items'  //this is how we connect to the express app

//Index
export function toDoItems() {
    const URL = baseURL
    const response = axios.get(URL)
    return response
}

//New
export function createItem(item) {
    const URL = baseURL
    const response = axios.post(URL, item)
    return response
}

//Delete
export function deleteItem(id, item) {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL, item)
    return response
}

//Update

//Create

//Edit
export function editList(id, updatedList) {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedList)
    return response
}

//Show
export function oneItem(id) {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}