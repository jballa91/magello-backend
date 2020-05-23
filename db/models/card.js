"use strict";
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define(
    "Card",
    {
      name: DataTypes.STRING,
      complete: DataTypes.BOOLEAN,
      data: DataTypes.TEXT,
      index: DataTypes.INTEGER,
      listId: DataTypes.INTEGER,
    },
    {}
  );
  Card.associate = function (models) {
    Card.belongsTo(models.List, { foreignKey: "listId" });
  };
  return Card;
};
