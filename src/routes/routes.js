const express = require('express');
const router = express.Router();

/*Importação das funções executadas em cada rota*/
const cadastrarUsuario = require('../controllers/rotaCadastrarUsuario');
const criarTarefa = require('../controllers/rotaCriarTarefa');
const criarEtapa = require('../controllers/rotaCriarEtapa');
const anexarArquivos = require('../controllers/rotaAnexarArquivo');
const criarGrupo = require('../controllers/rotaCriarGrupo');

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


module.exports = router;