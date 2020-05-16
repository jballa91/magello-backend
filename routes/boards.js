const express = require("express");
const fetch = require("node-fetch");
const { asyncHandler } = require("../utils");
const { jwtCheck } = require("../auth");

const db = require("../db/models");
const { User, Board, List } = db;
const router = express.Router();

router.get(
  "/:id",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const userToken = req.headers["authorization"];
    const boardId = parseInt(req.params.id, 10);

    const userAuth0 = await fetch("https://dev-ph-3iama.auth0.com/userinfo", {
      headers: {
        Authorization: `${userToken}`,
      },
    });

    const userInfo = await userAuth0.json();
    const board = await Board.findByPk(boardId);
    const user = await User.findOne({ where: { email: userInfo.email } });
    const userCheck = await User.findOne({ where: { id: board.userId } });
    const lists = await List.findAll({
      where: { boardId },
    });
    if (user.email === userCheck.email) {
      res.json({ board, lists });
    } else {
      res.status(401).end();
    }
  })
);

router.post(
  "/",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const { name, userId, backgroundColor } = req.body;
    const board = await Board.create({ name, userId, backgroundColor });
    res.json({ board });
  })
);

router.delete(
  "/",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const { boardId } = req.body;
    const boardToDelete = await Board.findByPk(boardId);
    await boardToDelete.destroy();
    res.json({ boardToDelete });
  })
);
module.exports = router;
