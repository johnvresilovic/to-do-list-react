import axios from "axios";
const baseURL = 'http://localhost:3001/todoitems'  //this is how we connect to the express app

//Index
export default function getListItems() {
    const URL = baseURL
    const response = axios.get(URL)
    return response
}

//Show
export function getOneItem(id) {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

//Edit
export function editList(id, updatedList) {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedList)
    return response
}