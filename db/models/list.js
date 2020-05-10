"use strict";
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define(
    "List",
    {
      name: DataTypes.STRING,
      complete: DataTypes.BOOLEAN,
      boardId: DataTypes.INTEGER,
    },
    {}
  );
  List.associate = function (models) {
    List.hasMany(models.Card, {
      foreignKey: "listId",
      onDelete: "CASCADE",
      hooks: true,
    });
    List.belongsTo(models.Baord, {
      foreignKey: "boardId",
    });
  };
  return List;
};
