const Todo = require("../modules/todoItems");

//CREATE NEW TODO

const createNewTodo = async (req, res) => {
  let newTodo = new Todo({
    item: req.body.item,
  });
  await newTodo.save();
  res.send({message: "Item added"});
};

//GET ALL TODOS

const getTodos = async (req, res) => {
  let todos = await Todo.find({});
  res.send(todos);
};

//UPDATE A TODO

const updateTodo = async (req, res) => {
  try {
    const updateItem = await Todo.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.send({ message: "Item updated" });
  } catch (error) {
    res.send(error);
  }
};

//DELETE TODO

const deleteTodo = async (req, res) => {
  try {
    let deleteItem = await Todo.findByIdAndDelete(req.params.id)
    res.send({message: "Item deleted"});
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  createNewTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
