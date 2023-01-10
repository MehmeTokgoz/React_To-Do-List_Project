const Todo = require("../modules/todoItems")

//CREATE NEW TODO

const createNewTodo = async (req, res) => {
    let newTodo = new Todo({
        item: req.body.item
    });
    await newTodo.save();
    res.send({ message: "Item Added"
    });
};


//GET ALL TODOS

const getTodos = async (req, res) => {
    let todos = await Todo.find({})
    res.send(todos);
};

//UPDATE A TODO

const updateTodo = async (req, res) => {try {
    const updateItem = await Todo.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.send({message: "Item updated"})
} catch (error) {
    res.send(error)
}
};




module.exports = {
    createNewTodo,
    getTodos,
    updateTodo
};