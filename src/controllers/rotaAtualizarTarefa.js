const tabelaTarefas = require('../models/migrations/Tarefas');

async function atualizarTarefas(req, res) {

  //Recurepando dados do formulario
  let dados = req.body;

  await tabelaTarefas.updateOne({

    id: dados.id,

    $set: {
      ds_tarefa: dados.tarefa,
      status: 0,
      dt_conclusao: dados.conclusao,
      dt_notificação: dados.notificacao,
      importante: 0,
      ds_anotacao: '',
      cd_usuario: dados.usuario,
      cd_grupo: dados.grupo
    }

  }).then(function (tarefa) {

    return res.status(200).json({
      success: true,
      message: "Tarefa atualizada com sucesso! Tarefa:",
      tarefa: tarefa
    });

  }).catch(function (error) {

    //Retorna erro ocorrido
    return res.status(400).json({
      success: false,
      message: "Não foi possível atualizar a tarefa. Erro: " + error
    });
  })

}

module.exports = atualizarTarefas;