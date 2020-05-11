const express = require("express");
const { asyncHandler } = require("../utils");
const { jwtCheck } = require("../auth");

const db = require("../db/models");
const { User } = db;
const router = express.Router();

router.post(
  "/",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const { name, userId } = req.body;
    const board = await board.create({ name, userId });
    res.json({ board });
  })
);

module.exports = router;
