'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    let usuarios = [];
    
    for(let i=1; i<=10; i++){
      usuarios.push(
        {
          id: i,
          nome: `Usuário ${i}`,
          email: `usuario${i}@teste.com`,
          senha: bcrypt.hashSync('123456', 10),
          createdAt: (new Date()).toJSON().substring(0,19),
          updatedAt: (new Date()).toJSON().substring(0,19)
        }
      )
    }

    await queryInterface.bulkInsert('usuarios', usuarios, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
