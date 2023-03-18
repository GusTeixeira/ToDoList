const bodyParser = require('body-parser');
const tarefas = require('./tarefaRoute')
const usuarios = require('./usuarioRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        tarefas,
        usuarios
    )
}