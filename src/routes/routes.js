const express = require('express');
const router = express.Router();

/*Importação das funções executadas em cada rota*/
const cadastrarUsuario = require('../controllers/rotaCadastrarUsuario');
const criarTarefa = require('../controllers/rotaCriarTarefa');
const criarEtapa = require('../controllers/rotaCriarEtapa');
const anexarArquivos = require('../controllers/rotaAnexarArquivo');
const criarGrupo = require('../controllers/rotaCriarGrupo');
const deletarTarefa = require('../controllers/rotaDeletarTarefa');
const validarLogin = require('../controllers/rotaValidarLogin');
const ListarGrupos = require('../controllers/rotaListarGrupos');
const ListarTarefas = require('../controllers/rotaListarTarefas');
const atualizarTarefas = require('../controllers/rotaAtualizarTarefa');

/*Rota que chamar a função validarLogin*/
router.get('/validar-login/:email/:senha', validarLogin);

/*Rota que chamar a função ListarGrupos*/
router.get('/listar-grupos/:usuario', ListarGrupos);

/*Rota que chamar a função Listartarefas*/
router.get('/listar-tarefas/:usuario', ListarTarefas);

/*Rota que chama a função cadastrarUsuario*/
router.post('/cad-usuario', cadastrarUsuario);

/*Rota que chama a função criarTarefa*/
router.post('/criar-tarefa', criarTarefa);

/*Rota que chama a função criarEtapa*/
router.post('/criar-etapa', criarEtapa);

/*Rota que chama a função criarGrupo*/
router.post('/criar-grupo', criarGrupo);

/*Rota que chama a função anexarArquivos*/
router.post('/anexar-arquivo', anexarArquivos);

/*Rota que chama a função atualizarTarefas*/
router.put('/atualizar-tarefas', atualizarTarefas);

/*Rota que chama a função deletarTarefa*/
router.delete('/deletar-tarefa/:id', deletarTarefa);


module.exports = router;