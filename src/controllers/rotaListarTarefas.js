/*Importação das tabelas*/
const tabelaTarefas = require('../models/migrations/Tarefas');

/*Função para validar login*/
async function ListarTarefas(req, res) {

  let dados = req.body;

  const tarefas = await tabelaTarefas.find({

    cd_usuario: req.params.usuario

  }).then(async function (tarefas) {

      return res.status(200).json({
        success: true,
        message: "Tarefas Recuperadas com sucesso! Tarefas: ",
        tarefas: tarefas,
        id_tarefa: tarefas._id
      });


  }).catch(function (error) {

    //Retorna erro ocorrido
    return res.status(400).json({
      success: false,
      message: "Não foi possível recuperar as tarefas. Erro: " + error.message
    });
  })
}

module.exports = ListarTarefas;