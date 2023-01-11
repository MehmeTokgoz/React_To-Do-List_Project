import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

function App() {
  const [itemText, setItemText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [deletedItem, setDeletedItem] = useState("");

  // ADD NEW TO-DO TO DATABASE
  const addItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3003/todos/create", {
        item: itemText,
      });
      setListItems((prev) => [...prev, res.data]);
      setItemText("");
    } catch (error) {
      console.log(error);
    }
  };

  //GET ALL TODOS FROM DATABASE

  useEffect(() => {
    const getTodoItemList = async () => {
      try {
        const res = await axios.get("http://localhost:3003/todos");
        setListItems(res.data);
        console.log("render");
      } catch (error) {
        console.log(error);
      }
    };
    getTodoItemList();
  }, []);

  // DELETE TO-DO ITEM

  const deleteItem = async (id) => {
    try {
      const delet = await axios.delete(
        `http://localhost:3003/todos/delete/${id}`
      );
      const newList = listItems.filter(items =>
        items._id !== id
      );
      setListItems(newList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1> Todo List </h1>
      <form
        className="form"
        onSubmit={(e) => {
          addItem(e);
        }}
      >
        <input
          type="text"
          placeholder="Add Todo"
          onChange={(e) => {
            setItemText(e.target.value);
          }}
          value={itemText}
        />
        <button type="submit"> Add </button>
      </form>
      <div className="todo-listItems">
        {listItems.map((item) => {
          return (
            <div className="todo-item">
              <p className="item-content"> {item.item} </p>
              <button className="update-item">Update</button>
              <button
                className="delete-item"
                onClick={() => {
                  deleteItem(item._id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
