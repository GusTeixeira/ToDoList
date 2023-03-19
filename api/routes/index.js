const bodyParser = require('body-parser');
const morgan = require('morgan');
const tarefas = require('./tarefaRoute')
const usuarios = require('./usuarioRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        morgan('dev'),
        tarefas,
        usuarios
    )
//TRATAMENTO DE ERRO Maransatto 19/03/2023
    app.use((req, res, next)=>{
        const erro = new Error('Não encontrado');
        erro.status = 404;
        next(erro)
    })

    app.use((error, req, res, next)=>{
        res.status(error.status || 500)
        return res.send({
            mensagem: error.message
        })
    })
//TRATAMENTO DE CORS Maransatto 19/03/2023
    app.use((req,res,next)=>{
        res.header('Acess-Control-Allow-Orgin', '*')
        res.header(
            'Access-Control-Allow-Header',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        )

        if(req.method === 'OPTIONS'){
            res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        }
        next();
    })
}