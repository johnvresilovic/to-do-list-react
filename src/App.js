import './App.css';
import { useState } from 'react';
import ListItem from './components/ListItem';
import items from './items'

function App() {

  const [itemList, setItemList] = useState(items)
  const addItem = e => {
      e.preventDefault()
      setItemList(itemList.concat([{
      description: document.querySelector('input[name="description"]').value,
      complete:false
    }]))}
  
  return (
    <>
    <div className="notepad">
      <h2>To Do List</h2>
      {itemList.map((element, index) => {
        return(
          
           <ListItem element={element} key={index}/>
           )
        })}
      </div>
      <div className='add'>
      <form onSubmit={addItem}>
            <h3>Add to the list</h3>
            <p>Description:</p> <input type='text' name="description" size={50}></input> 
            <br/>
            <input type='submit' value='Add' id='submit'></input>
        </form>
        </div>
      </>
  );
}

export default App