/*Importação das tabelas*/
const tabelaGrupo = require('../models/migrations/Grupos');

/*Função para validar login*/
async function ListarGrupos(req, res) {

  const grupos = await tabelaGrupo.find({

    cd_usuario: req.params.usuario

  }).then(async function (grupos) {

      return res.status(200).json({
        success: true,
        message: "Grupos Recuperados com sucesso! Grupos: ",
        grupos: grupos
      });


  }).catch(function (error) {

    //Retorna erro ocorrido
    return res.status(400).json({
      success: false,
      message: "Não foi possível recuperar os grupos. Erro: " + error.message
    });
  })
}

module.exports = ListarGrupos;