import { useState, useEffect } from 'react'
import { getOneItem } from '../services/Item-api'
import {useParams, useNavigate} from 'react-router-dom'

export default function OneItem () {
    const {id} = useParams()
    const nav = useNavigate()
    const [oneItem, setOneItem] = useState({})
    useEffect(() => {getOneItem(id).then(res => setOneItem(res.data))}, [])
    return (
        <div>
            <li><a href={`/${oneItem._id}`}>{oneItem.description}</a></li>
            Completed: <input type='checkbox' defaultChecked={oneItem.complete} />
            <br />
            <br />
            <button onClick={()=> {nav('/')}}>Main</button>
        </div>
    )
}