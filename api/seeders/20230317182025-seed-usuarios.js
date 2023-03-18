'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Usuarios', [
			{
				nome: 'Gus',
				sobrenome: 'Teixeira',
				email: 'gus@gus.com',
				senha: '3005',
				createdAt: new Date(),
				updatedAt: new Date()
			},
      {
				nome: 'João',
				sobrenome: 'Pereira',
				email: 'joao@joao.com',
				senha: '203',
				createdAt: new Date(),
				updatedAt: new Date()
			},
      {
				nome: 'Juan',
				sobrenome: 'Ferrera',
				email:'ferrera@gus.com',
				senha: '5003',
				createdAt: new Date(),
				updatedAt: new Date()
			},
      {
				nome: 'Ana',
				sobrenome: 'Herrera',
				email: 'ana@gus.com',
				senha: '0305',
				createdAt: new Date(),
				updatedAt: new Date()
			}
      
    ]
    )
  },

  async down (queryInterface, Sequelize) {
	await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
