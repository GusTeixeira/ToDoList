const express = require('express')
const routes = require('./routes')

const app = express();
const port = 3002;

routes(app)

app.listen(port,()=>console.log(`servidor está rodando na porta na porta ${port}`))

module.exports = app