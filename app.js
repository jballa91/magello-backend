const express = require("express");
const cors = require("cors");
const { authConfig, jwtCheck } = require("./auth");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const boardsRouter = require("./routes/boards");
const listsRouter = require("./routes/lists");
const cardsRouter = require("./routes/cards");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/boards", boardsRouter);
app.use("/lists", listsRouter);
app.use("/cards", cardsRouter);

app.get("/", (req, res) => {
  res.send("Index Root");
});

app.get("/api/external", jwtCheck, (req, res) => {
  res.send({
    msg:
      "You are free to connect to the database and see any information that belongs to you! However, stay away from other users' data. Tharr be monsters. Yee have been warrrned...",
  });
});

module.exports = app;
