import { toDoItems, editList } from "../services/Item-api"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function EditList() {
    const {id} = useParams()
    const {nav} = useNavigate()
    const [data, setData] = useState({})

    useEffect(()=>{
        toDoItems(id).then(res => setData(res.data))
    }, [])

    const editTheList = e => {
        e.preventDefault()
        const updatedList = {description: e.target.description.value, complete: e.target.complete.checked}
        editList(id, updatedList)
        nav(`/${id}`)
    }

   return (
    <div>
        <form onSubmit={{editTheList}}>
            Description: <input type='text' name='description' defaultValue={data.description}/>
            Complete: <input type='checkbox' name='complete' defaultChecked={data.complete}/>
        </form>
    </div>
  )
}