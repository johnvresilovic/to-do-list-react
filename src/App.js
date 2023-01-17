import './App.css';
import { useState } from 'react';
import ToDoItems from './components/ToDoItems';
import OneItem from './components/OneItem'
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

function App() {

  const [itemList, setItemList] = useState([])
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
      <Router>
        <Routes>
            <Route path='/' element={<ToDoItems />}/>
            <Route path='/:id' element={<OneItem />}/>
            </Routes>
        </Router>
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