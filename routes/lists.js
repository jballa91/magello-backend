const express = require("express");
const { asyncHandler } = require("../utils");
const { jwtCheck } = require("../auth");

const db = require("../db/models");
const { List, Card } = db;
const router = express.Router();

router.get(
  "/:id",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const listId = parseInt(req.params.id, 10);
    const cards = await Card.findAll({
      where: { listId },
    });
    res.json({ cards });
  })
);

router.post(
  "/",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const { boardId, name, index } = req.body;
    const list = await List.create({ name, boardId, index, complete: false });
    res.json({ list });
  })
);

router.delete(
  "/:id",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const { id } = req.body;
    const listToDelete = await List.findByPk(id);
    await listToDelete.destroy();
    res.json({ listToDelete });
  })
);

module.exports = router;
