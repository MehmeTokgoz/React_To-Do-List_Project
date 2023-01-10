const express = require("express");
const connection = require("./modules/connnection");
const bodyparser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3003;
const todoItemRouter = require("../Server/routes/todoItemRoute");

const app = express();

app.use(bodyparser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/todos", todoItemRouter);

app.listen(PORT, () => console.log(`Service up and running and ${PORT}`));
