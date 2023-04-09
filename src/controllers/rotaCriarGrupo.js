const tabelaGrupos = require('../models/migrations/Grupos');

    async function criarGrupo(req, res) {

        let dados = req.body;

        await tabelaGrupos.create({

            nm_grupo: dados.grupo,
            cd_usuario: dados.usuario

        }).then(function () {

            return res.status(200).json({
                success: true,
                message: "Grupo criado com sucesso!" 
            });

        }).catch(function (error) {

            //Retorna erro ocorrido
            return res.status(400).json({
                success: false,
                message: "Não foi possível criar o Grupo. Erro: " + error
            });
        })

    }

    module.exports = criarGrupo;
