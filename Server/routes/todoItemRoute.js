const todoControl= require("../controllers/todoController")
const router = require("express").Router();


router.post("/create", todoControl.createNewTodo);
router.get("/", todoControl.getTodos);
router.put("/update/:id", todoControl.updateTodo);

module.exports = router;