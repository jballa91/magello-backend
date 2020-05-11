const express = require("express");
const cors = require("cors");
const { authConfig, jwtCheck } = require("./auth");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const boardsRouter = require("./rotues/boards");

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Index Root");
});

app.get("/api/external", jwtCheck, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!",
  });
});

module.exports = app;
