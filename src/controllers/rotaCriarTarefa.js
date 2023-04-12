const tabelaTarefas = require('../models/migrations/Tarefas');

    async function criarTarefa(req, res) {

        let dados = req.body;

        await tabelaTarefas.create({

            ds_tarefa: dados.tarefa,
            status: 0,
            dt_conclusao: dados.conclusao,
            dt_notificação: dados.notificacao, 
            importante: 0,
            ds_anotacao: '',
            cd_usuario: dados.usuario,
            cd_grupo: dados.grupo

        }).then(function (tarefa) {

            return res.status(200).json({
                success: true,
                message: "Tarefa criada com sucesso! Tarefa:",
                tarefa: tarefa 
            });

        }).catch(function (error) {

            //Retorna erro ocorrido
            return res.status(400).json({
                success: false,
                message: "Não foi possível criar a tarefa. Erro: " + error
            });
        })

    }

    module.exports = criarTarefa;
