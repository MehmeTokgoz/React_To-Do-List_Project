import { useState } from "react";
import axios from "axios"
import "./App.scss";

function App() {
const [itemText, setItemText] = useState("");
// ADD NEW TO-DO TO DATABASE
const addItem = async () => {
  e.prevent.default();
try {
  const res = await axios.post("http://localhost:3003/todos/create", {item: itemText})

} catch (error) {
  console.log(error)
}
}


  return (
    <div className="App">
      <h1> Todo List </h1>
      <form className="form" onSubmit = {(e) => {addItem(e)}}>
        <input type="text" placeholder="Add Todo" onChange={(e)=>{setItemText(e.target.value)}} value={itemText}/>
        <button type="submit"> Add </button>
      </form>
      <div className="todo-listItems">
        <div className="todo-item">
          <p className="item-content"> First todo </p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
        <div className="todo-item">
          <p className="item-content"> Second todo </p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
        <div className="todo-item">
          <p className="item-content"> Third todo </p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
