'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
      { email: "tombetthauser@gmai.com", firstName: "Tom", middleName: null, lastName: "Betthauser", birthDate: "1987-01-31", city: "Sacramento", state: "California", country: "United States", statement: null, accountType: "artist", isAccountPrivate: false, passwordHash: "password", createdAt: new Date(), updatedAt: new Date() },
      { email: "enkaczkowski@gmai.com", firstName: "Erin", middleName: null, lastName: "Kaczkowski", birthDate: "1984-03-04", city: "Sacramento", state: "California", country: "United States", statement: null, accountType: "artist", isAccountPrivate: false, passwordHash: "password", createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {});
  }
};
