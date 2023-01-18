import './App.css';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import EditList from './components/EditList';
import OneItem from './components/OneItem';
import ToDoItems from './components/ToDoItems';

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
            <Route path='/:id/edit' element={<EditList />}/>
            </Routes>
        </Router>
      </div>
      </>
  );
}

export default App