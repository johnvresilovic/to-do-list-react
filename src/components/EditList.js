import { getListItems, editList } from "../services/Item-api"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const EditList = () => {
    const {id} = useParams()
    const {nav} = useNavigate()
    const [data, setData] = useState({})

    useEffect(()=>{
        getListItems(id).then(res => setData(res.data))
    }, [])

    const editTheList = e => {
        e.preventDefault()
        const updatedList = {description: e.target.description.value, complete: e.target.complete.checked}
        editList(id, updatedList)
        nav(`/${id}`)
    }

   return (
    <div>Edit the list</div>
  )
}