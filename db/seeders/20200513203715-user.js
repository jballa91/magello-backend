"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "test@test.com",
        nickname: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "jballa91@gmail.com",
        nickname: "jballa91",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
