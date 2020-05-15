"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Boards", [
      {
        name: "Test board",
        backgroundColor: "#50808E",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Todo List",
        backgroundColor: "#192A51",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Albums to Listen to",
        backgroundColor: "#8C1C13",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Todo List",
        backgroundColor: "#967AA1",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Smash Bros Characters",
        backgroundColor: "#192A51",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Books to read",
        backgroundColor: "#7F675B",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dystopias",
        backgroundColor: "#CD9FCC",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shows to watch",
        backgroundColor: "#6F7D8C",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Boards", null, {});
  },
};
