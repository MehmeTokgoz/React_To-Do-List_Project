import "./App.scss";

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Add Todo" />
        <button type="submit"> Add </button>
      </form>
      <div className="todoListItems">
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
