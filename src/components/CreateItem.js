import { useNavigate } from "react-router-dom"
import { createItem } from '../services/Item-api'

export default function Create() {
    const nav = useNavigate()

    const createTheItem = (e) => {
        const item = {description: e.target.description.value, complete: false}
        createTheItem(item)
        nav('/')
    }

return(
    <div>
        <br />
        <h4>Add new item</h4>
        <form onSubmit={createTheItem}>
            <input type='text' name='description' id='dsc'/>
            <input type='submit'/>
        </form>
    </div>
)
}