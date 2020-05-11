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

router.put(
  "./:id",
  jwtCheck,
  asyncHandler(async (req, res, next) => {
    const board = await board.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (req.user.id !== board.userId) {
      const err = new Error('Unauthorized');
      err.status=401;
      err.message = "You are not authorized to edit this Board.";
      err.title = "Unauthorized";
      throw err;
    }
    if (board) {
      await board.update({name: req.body.name});
      res.json({board});
    } else {
      next();
    }
  })
);

router.delete('./:id', jwtCheck, asyncHandler(async (req, res, next)=> {
  const board = await 
}));
module.exports = router;
