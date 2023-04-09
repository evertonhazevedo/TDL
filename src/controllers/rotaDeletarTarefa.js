const tabelaTarefas = require('../models/migrations/Tarefas');

    async function deletarTarefa(req, res) {

        await tabelaTarefas.deleteOne({

            _id: req.params.id

        }).then(function () {

            return res.status(200).json({
                success: true,
                message: "Tarefa deletada com sucesso!"
            });

        }).catch(function (error) {

            //Retorna erro ocorrido
            return res.status(400).json({
                success: false,
                message: "Não foi possível deletar a tarefa. Erro: " + error
            });
        })

    }

    module.exports = deletarTarefa;
