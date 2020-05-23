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
    const { listId, name, data, index } = req.body;
    const card = await Card.create({
      name,
      listId,
      data,
      index,
      complete: false,
    });
    res.json({ card });
  })
);

router.patch(
  "/:id",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const { id, index } = req.body;
    const card = await Card.update({ index }, { where: { id } });
    res.status(201).json({
      card,
    });
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
