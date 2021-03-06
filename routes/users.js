const express = require("express");
const { asyncHandler } = require("../utils");
const { jwtCheck } = require("../auth");

const db = require("../db/models");
const { User, Board } = db;
const router = express.Router();

router.patch(
  "/",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const { email, nickname } = req.body;
    let user = await User.findOne({
      where: { email },
    });
    if (!user) {
      user = await User.create({ email, nickname });
      res.status(201).json({
        user,
      });
    } else {
      oldUser = await User.update({ email, nickname }, { where: { email } });
      res.status(201).json({
        user,
      });
    }
  })
);

router.get(
  "/:id",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = await User.findByPk(userId);
    res.json({ user });
  })
);

router.get(
  "/:id/boards",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const boards = await Board.findAll({
      where: { userId },
    });
    res.json({ boards });
  })
);

module.exports = router;
