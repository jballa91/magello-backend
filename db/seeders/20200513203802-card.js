"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Cards", [
      {
        name: "Test Card 1",
        complete: false,
        data: "Test Test",
        index: 0,
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Test Card 2",
        complete: false,
        data: "Test Test",
        index: 1,
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "First Task",
        complete: false,
        data: "Go to store",
        index: 0,
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Second Task",
        complete: false,
        data: "Buy Stuff",
        index: 1,
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "First Task",
        complete: false,
        data: "Never go to a second location",
        index: 0,
        listId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "First Task",
        complete: false,
        data: "Unload groceries",
        index: 0,
        listId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Second Task",
        complete: false,
        data: "Chow Down",
        index: 1,
        listId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Low End Theory",
        complete: false,
        data: "A Tribe Called Quest",
        index: 0,
        listId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Madvillainy",
        complete: false,
        data: "Madvillain",
        index: 1,
        listId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Operation: Doomsday",
        complete: false,
        data: "MF DOOM",
        index: 2,
        listId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Do You Want More?!!!??!",
        complete: false,
        data: "The Roots",
        index: 3,
        listId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ready to Die",
        complete: false,
        data: "The Notorious B.I.G",
        index: 4,
        listId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Miseducation of Lauryn Hill",
        complete: false,
        data: "Ms. Lauryn Hill",
        index: 5,
        listId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Enter the Wu-Tang",
        complete: false,
        data: "Wu-Tang Clan",
        index: 6,
        listId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pressure Chief",
        complete: false,
        data: "Cake",
        index: 0,
        listId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Grace",
        complete: false,
        data: "Jeff Buckley",
        index: 1,
        listId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sky Blue Sky",
        complete: false,
        data: "Wilco",
        index: 2,
        listId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Violent Femmes",
        complete: false,
        data: "Violent Femmes",
        index: 3,
        listId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "In the Aroplane Over the Sea",
        complete: false,
        data: "Neutral Milk Hotel",
        index: 4,
        listId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "There's Nothing Wrong With Love",
        complete: false,
        data: "Built To Spill",
        index: 5,
        listId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aha Shake Heartbreak",
        complete: false,
        data: "Kings of Leon",
        index: 6,
        listId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Guero",
        complete: false,
        data: "Beck",
        index: 7,
        listId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kind of Blue",
        complete: false,
        data: "Miles Davis",
        index: 0,
        listId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Classic Early Recordings",
        complete: false,
        data: "Django Reinhardt - Compiled by Ted Kendall",
        index: 1,
        listId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Head Hunters",
        complete: false,
        data: "Herbie Hancock",
        index: 2,
        listId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Giant Steps",
        complete: false,
        data: "John Coltrane",
        index: 3,
        listId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Time Out",
        complete: false,
        data: "Dabe Brubeck Quartet",
        index: 4,
        listId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Atomic Mr. Basie",
        complete: false,
        data: "Count Basie Orchestra",
        index: 5,
        listId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Incredible Jazz Guitar of Wes Montgomery",
        complete: false,
        data: "Wes Montgomery",
        index: 6,
        listId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pet Sounds",
        complete: false,
        data: "The Beach Boys",
        index: 0,
        listId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Can't Buy a Thrill",
        complete: false,
        data: "Steely Dan",
        index: 1,
        listId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Graceland",
        complete: false,
        data: "Paul Simon",
        index: 2,
        listId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Remain in Light",
        complete: false,
        data: "Talking Heads",
        index: 3,
        listId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sgt. Pepper's Lonely Hearts Club Band",
        complete: false,
        data: "The Beatles",
        index: 4,
        listId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "In the Court of the Crimson King",
        complete: false,
        data: "King Crimson",
        index: 5,
        listId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Are You Experienced",
        complete: false,
        data: "Jimi Hendrix",
        index: 6,
        listId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Led Zeppelin II",
        complete: false,
        data: "Led Zeppelin",
        index: 7,
        listId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rumours",
        complete: false,
        data: "Fleetwood Mac",
        index: 8,
        listId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "America",
        complete: false,
        data: "America",
        index: 9,
        listId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "First Task",
        complete: false,
        data: "Code some",
        index: 0,
        listId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Second Task",
        complete: false,
        data: "Code some more",
        index: 1,
        listId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Third Task",
        complete: false,
        data: "Code some more more",
        index: 2,
        listId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "First Task",
        complete: false,
        data: "Code some",
        index: 0,
        listId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Second Task",
        complete: false,
        data: "Code some more",
        index: 1,
        listId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "First Task",
        complete: false,
        data: "Code some",
        index: 0,
        listId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Captain Falcon",
        complete: false,
        data: "Speedy Boi",
        index: 0,
        listId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fox",
        complete: false,
        data: "Speedy Boi",
        index: 1,
        listId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pikachu",
        complete: false,
        data: "Speedy Boi",
        index: 2,
        listId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Yoshi",
        complete: false,
        data: "Speedy Boi",
        index: 3,
        listId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Donkey Kong",
        complete: false,
        data: "Tanky Boi",
        index: 0,
        listId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mario",
        complete: false,
        data: "Brawly Boi",
        index: 0,
        listId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Luigi",
        complete: false,
        data: "Brawly Boi",
        index: 1,
        listId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Link",
        complete: false,
        data: "Brawly Boi",
        index: 2,
        listId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kirby",
        complete: false,
        data: "Brawly Boi",
        index: 3,
        listId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "JigglyPuff",
        complete: false,
        data: "Brawly Boi",
        index: 4,
        listId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Samus",
        complete: false,
        data: "Ranged Boi",
        index: 0,
        listId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ness",
        complete: false,
        data: "Ranged Boi",
        index: 1,
        listId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Cards", null, {});
  },
};
