const userController = require("../controllers/userController");
const router = require("express").Router();

router.post("/signup", userController.signUp);
router.post("/login", userController.login);
router.post("/verify",userController.verifying);
router.get("/",userController.getUsers)

module.exports = router;