import { useNavigate } from "react-router-dom"
import { createItem } from '../services/Item-api'

export default function Create() {
    const nav = useNavigate()
    const createTheItem = (e) => {
        const item = {description: e.target.description.value, complete: false}
        createItem(item)
        nav('/')
    }
return(
    <div>
        <br />
        <h3>Add item</h3>
        <form onSubmit={createTheItem}>
            <input type='text' name='description' id='dsc'/>
            <input type='submit'/>
        </form>
    </div>
)
}