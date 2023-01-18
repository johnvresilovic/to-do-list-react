import { useState, useEffect } from 'react'
import { oneItem } from '../services/Item-api'
import { useParams, useNavigate } from 'react-router-dom'

export default function OneItem () {
    const nav = useNavigate()
    const {id} = useParams()
    const [anItem, setAnItem] = useState({})
    useEffect(() => {
        oneItem(id)
        .then(res => setAnItem(res.data))}, [])
    return (
        <div>
            <h3>{anItem.description}</h3>
            Completed: <input type='checkbox' defaultChecked={anItem.complete} />
            <br />
            <br />
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <br />
            <br />
            <button onClick={() => {nav('/')}}>Back to list</button>
        </div> 
    )
}