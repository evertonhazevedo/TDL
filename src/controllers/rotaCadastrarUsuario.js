const tabelaUsuario = require('../models/migrations/Usuarios');

    async function cadastrarUsuario(req, res) {

        let dados = req.body;

        const usuario = await tabelaUsuario.create({

            nome: dados.nome,
            sobrenome: dados.sobrenome,
            email: dados.email,
            senha: dados.senha,

        }).then(function (usuario) {

            return res.status(200).json({
                success: true,
                message: "Usuário criado com sucesso! Usuario: " + usuario 
            });

        }).catch(function (error) {

            //Retorna erro ocorrido
            return res.status(400).json({
                success: false,
                message: "Não foi possível criar o usuário. Erro: " + error
            });
        })

    }

    module.exports = cadastrarUsuario;
