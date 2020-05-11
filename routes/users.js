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
    const { email, given_name, family_name } = req.body;
    const user = await User.create({ email, given_name, family_name });

    res.status(201).json({
      user: { id: user.id },
    });
  })
);

router.get(
  "/:id",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.user_id, 10);
    const user = await User.findByPk(userId);
    res.json({ user });
  })
);

router.get(
  "/:id/boards",
  jwtCheck,
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.user_id, 10);
    const boards = await Board.findAll({
      where: { userId },
    });
    res.json({ boards });
  })
);

module.exports = router;
