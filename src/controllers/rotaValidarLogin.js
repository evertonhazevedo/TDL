/*Configurações*/
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_CONFIG = require('../config/jwtSecret');

/*Importação das tabelas*/
const tabelaUsuario = require('../models/migrations/Usuarios');

/*Função para validar login*/
  async function validarLogin(req, res) {

    const usuario = await tabelaUsuario.findOne({

            email: req.params.email
        
    });

    if (usuario == null) {

        return res.status(400).json({
            success: false
            // message: error.message
        });

    } else {

        if (await bcrypt.compare(req.params.senha, usuario.senha)) {

            let token = jwt.sign({ id: usuario.cd_usuario }, JWT_CONFIG.acessoToken, {
                expiresIn: 1800 //30min
            });

            return res.status(200).json({
                success: true,
                nome: usuario.nome,
                sobrenome: usuario.sobrenome,
                email: usuario.email,
                id_usuario: usuario._id,
                token
            });

        } else {

            return res.status(400).json({
                success: false
            });

        }
    }

}

module.exports = validarLogin;