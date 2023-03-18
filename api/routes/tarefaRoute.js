const { Router } = require('express')
const TarefaController = require('../controllers/TarefaController')
 
const router = Router()
router
 .get('/tarefas', TarefaController.pegaTarefa)
 .get('/tarefas/:id', TarefaController.pegaUmaTarefa)
 .post('/tarefas', TarefaController.criaTarefa)
 .put('/tarefas/:id', TarefaController.atualizaTarefa)
 .delete('/tarefas/:id', TarefaController.apagaTarefa)
module.exports = router