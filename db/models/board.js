"use strict";
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define(
    "Board",
    {
      name: DataTypes.STRING,
      backgroundColor: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Board.associate = function (models) {
    Board.hasMany(models.List, {
      foreignKey: "boardId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Board.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Board;
};
