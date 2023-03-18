'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tarefas', [
			{
				titulo:'Limpar o chão',
        descricao:'Limpe o chão da sala',
        feito:true,
        usu_id: 21,
        createdAt: new Date(),
				updatedAt: new Date()
			},
      {
				titulo:'Consertar o carro',
        descricao:'Conserte o carro vermelho',
        feito:false,
        usu_id: 22,
        createdAt: new Date(),
				updatedAt: new Date()
			},
      {
				titulo:'Trocar as lampadas',
        descricao:'Trocar as lampadas do quarto',
        feito:false,
        usu_id: 21,
        createdAt: new Date(),
				updatedAt: new Date()
			},
      {
				titulo:'Ler Percy Jackson',
        descricao:'Termine de ler percy jackson',
        feito:false,
        usu_id: 23,
        createdAt: new Date(),
				updatedAt: new Date()
			}
    ]
)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tarefas', null, {})
  }
};
