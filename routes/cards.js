const express = require("express");
const { asyncHandler } = require("../utils");
const { jwtCheck } = require("../auth");

const db = require("../db/models");
const { Card } = db;
const router = express.Router();

router.post(
  "/",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const { listId, name } = req.body;
    const card = await Card.create({ name, listId, complete: false });
    res.json({ card });
  })
);

router.delete(
  "/:id",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const { id } = req.body;
    const cardToDelete = await Card.findByPk(id);
    await cardToDelete.destroy();
    res.json({ cardToDelete });
  })
);

module.exports = router;
