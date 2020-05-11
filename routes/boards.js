const express = require("express");
const { asyncHandler } = require("../utils");
const { jwtCheck } = require("../auth");

const db = require("../db/models");
const { User, Board } = db;
const router = express.Router();

router.get(
  "/",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const userId = req.userId;
    const boards = await Board.findAll({
      where: { userId },
    });
    res.json({ boards });
  })
);

router.post(
  "/",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const { name, userId } = req.body;
    const board = await Board.create({ name, userId });
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
