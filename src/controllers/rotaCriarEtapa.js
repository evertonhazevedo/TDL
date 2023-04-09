const tabelaEtapas = require('../models/migrations/Etapas');

    async function criarEtapa(req, res) {

        let dados = req.body;

        await tabelaEtapas.create({

            ds_etapa: dados.etapa,
            status: 0,
            cd_tarefa: dados.tarefa

        }).then(function () {

            return res.status(200).json({
                success: true,
                message: "Etapa criada com sucesso!" 
            });

        }).catch(function (error) {

            //Retorna erro ocorrido
            return res.status(400).json({
                success: false,
                message: "Não foi possível criar a Etapa. Erro: " + error
            });
        })

    }

    module.exports = criarEtapa;
