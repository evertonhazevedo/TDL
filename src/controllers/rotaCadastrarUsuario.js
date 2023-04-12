/*Configurações*/
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_CONFIG = require('../config/jwtSecret');

const tabelaUsuario = require('../models/migrations/Usuarios');

    async function cadastrarUsuario(req, res) {

        let dados = req.body;

        const usuario = await tabelaUsuario.create({

            nome: dados.nome,
            sobrenome: dados.sobrenome,
            email: dados.email,
            senha: await bcrypt.hash(dados.senha, 8)

        }).then(async function (usuario) {

            if (await bcrypt.compare(dados.senha, usuario.senha)) {

                let token = jwt.sign({ id: usuario.cd_usuario }, JWT_CONFIG.acessoToken, {
                    expiresIn: 1800 //30min
                });

                return res.status(200).json({
                    success: true,
                    nome: usuario.nome,
                    sobrenome: usuario.sobrenome,
                    email: usuario.email,
                    id_usuario: usuario._id,
                    token,
                    message: "Usuário criado com sucesso! Usuario: " + usuario 
                });

            } else {
                return res.status(400).json({
                    success: false
                });
            }

        }).catch(function (error) {

            //Retorna erro ocorrido
            return res.status(400).json({
                success: false,
                message: "Não foi possível criar o usuário. Erro: " + error.message
            });
        })

    }

    module.exports = cadastrarUsuario;
