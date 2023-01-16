const express = require("express");
const connection = require("../Server/modules/connnection");
const bodyparser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3003;
const todoItemRouter = require("../Server/routes/todoItemRoute");
const userRouter = require("../Server/routes/userRoute");

const app = express();

app.use(bodyparser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/todos", todoItemRouter);
app.use("/user",userRouter);

app.listen(PORT, () => console.log(`Service up and running and ${PORT}`));
