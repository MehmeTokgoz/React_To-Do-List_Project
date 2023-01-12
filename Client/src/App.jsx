import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

function App() {
  const [itemText, setItemText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [updating, setUpdating] = useState("");
  const [updateitemText, setupdateitemText] = useState("");

  // ADD NEW TO-DO TO DATABASE
  const addItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3003/todos/create", {
        item: itemText,
      });
      setItemText("");
      setListItems((prev) => [...prev, res.data]);
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
      const newList = listItems.filter((items) => items._id !== id);
      setListItems(newList);
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE-TO-DO
  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const updatingElement = await axios.put(
        `http://localhost:3003/todos/update/${updating}`,
        { item: updateitemText }
      );
      setupdateitemText("");
      setUpdating("");
      console.log(updatingElement.data);
      const updatedElementIndex = listItems.findIndex(
        (item) => item._id === updating
      );
      const updatedElement = (listItems[updatedElementIndex].item =
        updateitemText);
    } catch (error) {
      console.log(error);
    }
  };
  // UPDATE-FORM

  const updateForm = () => (
    <form
      className="update-form"
      onSubmit={(e) => {
        updateItem(e);
      }}
    >
      <input
        className="update-new-input"
        type="text"
        placeholder="Update to-do"
        onChange={(e) => {
          setupdateitemText(e.target.value);
        }}
        value={updateitemText}
      />
      <button className="update-new-btn" type="submit">
        Update
      </button>
    </form>
  );

  return (
    <div className="App">
      <h1> Todo List </h1>
      <form className="form" onSubmit={(e) => addItem(e)}>
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
        {listItems.map((item) => (
          <div className="todo-item">
            {updating === item._id ? (
              updateForm()
            ) : (
              <>
                <p className="item-content"> {item.item} </p>
                <button
                  className="update-item"
                  onClick={() => {
                    setUpdating(item._id);
                  }}
                >
                  Update
                </button>
                <button
                  className="delete-item"
                  onClick={() => {
                    deleteItem(item._id);
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
