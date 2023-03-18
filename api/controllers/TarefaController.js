const database = require ('../models')

class TarefaController{
    static async pegaTarefa(req, res){
        try{
            const todasAsTarefas = await database.Tarefas.findAll()
            return res.status(200).json(todasAsTarefas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaTarefa(req, res){
        const {id} = req.params
        try{
            const umaTarefa = await database.Tarefas.findOne({
                where:{
                    id: Number(id)
                }
            })
            return res.status(200).json(umaTarefa)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async criaTarefa(req,res){
        const novaTarefa = req.body
        try{
            const novaTarefaCriada = await database.Tarefas.create(novaTarefa)
            return res.status(200).json(novaTarefaCriada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaTarefa(req,res){
        const novasInfos = req.body
        const { id } = req.params
        try{
            await database.Tarefas.update(novasInfos, {
                where: {
                    id: Number(id)
                }
            })
            const tarefaAtualizada = await database.Tarefas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(tarefaAtualizada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaTarefa(req,res){
        const {id} = req.params
        try{
            await database.Tarefas.destroy({
                where:{
                    id:Number(id)
                }
            })
            return res.status(200).json({mensagem:`id ${id} deletado`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaTarefasPorUsuario(req,res){
        const {usu_id} = req.params
        try{
            const tarefasPorUsuario = await database.Tarefas.findAll({
                where:{
                    usu_id:Number(usu_id)
                }
            })
            return res.status(200).json(tarefasPorUsuario)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TarefaController