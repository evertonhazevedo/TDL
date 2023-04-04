const tabelaAnexos = require('../models/migrations/Anexos')

    async function anexarArquivos(req, res) {

        let dados = req.body;

        await tabelaAnexos.create({

            nm_arquivo: dados.arquivo,
            cd_tarefa: dados.tarefa

        }).then(function () {

            return res.status(200).json({
                success: true,
                message: "Arquivo anexado com sucesso!" 
            });

        }).catch(function (error) {

            //Retorna erro ocorrido
            return res.status(400).json({
                success: false,
                message: "Não foi possível anexar o arquivo. Erro: " + error
            });
        })

    }

    module.exports = anexarArquivos;
