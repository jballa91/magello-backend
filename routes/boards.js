const express = require("express");
const { asyncHandler } = require("../utils");
const { jwtCheck } = require("../auth");

const db = require("../db/models");
const { Board, List } = db;
const router = express.Router();

router.get(
  "/:id",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const boardId = parseInt(req.params.id, 10);
    const lists = await List.findAll({
      where: { boardId },
    });
    res.json({ lists });
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
