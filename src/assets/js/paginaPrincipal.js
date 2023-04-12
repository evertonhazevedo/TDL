let token = localStorage.getItem('token');


if (token == null) {
    window.location.href = "/index.html";
}


/*Instanciando objeto da classe Date*/
const data = new Date();

/*Inicializando variáveis*/
let mes = 0;
let diaSemana = 0;

let tamanhoTela = window.matchMedia("(width > 1400px)");

let [nome] = localStorage.getItem('nome_usuario').split(' ');
let sobrenome = localStorage.getItem('sobrenome_usuario');
let email = localStorage.getItem('email_usuario');

document.getElementById('dadosUsuario').innerHTML = `<p>` + nome + ' ' + sobrenome + `</p>
                                                     <p>` + email + `</p>`

/*Descobrindo dia da semana*/
switch (data.getDay()) {

    case 1:

        diaSemana = 'Segunda';
        break;

    case 2:

        diaSemana = 'Terça';
        break;

    case 3:

        diaSemana = 'Quarta';
        break;

    case 4:
        diaSemana = 'Quinta';
        break;

    case 5:
        diaSemana = 'Sexta';
        break;

    case 6:

        diaSemana = 'Sábado';
        break;

    default:

        diaSemana = 'Domingo';
        break;

}

/*Descobrindo mês*/
switch (data.getMonth()) {

    case 0:

        mes = 'Janeiro'
        break;

    case 1:

        mes = 'Fevereiro'
        break;

    case 2:

        mes = 'Março'
        break;

    case 3:

        mes = 'Abril'
        break;

    case 4:

        mes = 'Maio'
        break;

    case 5:

        mes = 'Junho'
        break;

    case 6:

        mes = 'Julho'
        break;

    case 7:

        mes = 'Agosto'
        break;

    case 8:

        mes = 'Setembro'
        break;

    case 9:

        mes = 'Outubro'
        break;

    case 10:

        mes = 'Novembro'
        break;

    default:

        mes = 'Dezembro'


}

/*Colocando data completa na tela. Ex: Quarta, 5 de Abril*/
document.getElementById('dataAtual').innerHTML = diaSemana + ', ' + data.getDate() + ' de ' + mes;

function escondeGrupos() {

    let grupos = document.getElementsByClassName('gruposCriadosHeaders');

    for (let i = 0; i < grupos.length; i++) {
        grupos[i].style.display = 'none';
    }

}

/*Função para mostrar apenas informações da aba Grupo*/
function mostrarConteudoGrupo(grupo) {

    const cabecalhoMain = document.getElementById('divMainHeadersGrupo');

    cabecalhoMain.innerHTML = `<div id="` + grupo + `" class="gruposCriadosHeaders" style="display: block;">
                                    <i class="material-symbols-rounded" style="color: #B6DF82";>bookmark</i>
                                    <h1>` + grupo + `</h1>
                                </div>`
    // escondeGrupos();
    document.getElementById('divMainHeadersGrupo').style.display = 'block';
    document.getElementById('meuDia').style.display = 'none';
    document.getElementById('tarefas').style.display = 'none';
    document.getElementById('lixeira').style.display = 'none';
    document.getElementById('importante').style.display = 'none';
    document.getElementById('footerNovaTarefa').style.display = 'block';
}

/*Função para mostrar apenas icone de mais e adicionarTarefa*/
function abrirSidebarDireita() {

    let tarefasGeradas = document.getElementsByClassName('tarefaGerada');
    document.getElementById('divSidebarDireita').style.display = 'block';

    // let divScrollSidebardireita = document.getElementById('divScrollSidebardireita');

    // divScrollSidebardireita.innerHTML += ``


    if (tamanhoTela.matches != true) {

        for (let i = 0; i < tarefasGeradas.length; i++) {
            tarefasGeradas[i].style.width = '665px'
        }

        document.getElementById('divAdicionarTarefa').style.width = '665px'

    } else {

        for (let i = 0; i < tarefasGeradas.length; i++) {
            tarefasGeradas[i].style.width = '1220px'
        }

        document.getElementById('divAdicionarTarefa').style.width = '1220px'

    }
};

function mostraBotoesInputTarefa() {

    document.getElementById('btnAtualizaTarefa').style.display = 'flex';
    document.getElementById('btnCancelarAtualizacaoTarefa').style.display = 'flex';
}

function concluirTarefa(tarefa) {

    let tarefas = document.getElementsByClassName(tarefa);

    if (tarefa.substring(tarefa.length - 9) != 'Concluida') {

        let tarefaConcluida = document.getElementsByClassName(tarefa + '-Concluida');

        for (let i = 0; i < tarefas.length; i++) {
            tarefas[i].style.display = 'none';
        }

        for (let i = 0; i < tarefaConcluida.length; i++) {
            tarefaConcluida[i].style.display = 'block';
        }

    } else {

        let [tarefaNaoConcluida] = tarefa.split('-');
        let tarefaNaoConcluidaFormatada = '';

        for (let i = 0; i < tarefaNaoConcluida.length; i++) {

            tarefaNaoConcluidaFormatada += tarefaNaoConcluida[i];
        }

        let tarefasNaoConluidas = document.getElementsByClassName(tarefaNaoConcluidaFormatada)

        for (let i = 0; i < tarefas.length; i++) {
            tarefas[i].style.display = 'none';
        }

        for (let i = 0; i < tarefasNaoConluidas.length; i++) {
            tarefasNaoConluidas[i].style.display = 'block';
        }

    }

}

function definirImportante(tarefa) {

    let tarefas = document.getElementsByClassName(tarefa);

    if (tarefa.substring(tarefa.length - 10) != 'Importante') {

        let tarefaImportante = document.getElementsByClassName(tarefa + '-Importante');

        for (let i = 0; i < tarefas.length; i++) {
            tarefas[i].style.display = 'none';
        }

        for (let i = 0; i < tarefaImportante.length; i++) {
            tarefaImportante[i].style.display = 'block';
        }

    } else {

        let [tarefaNaoImportante] = tarefa.split('-');
        let tarefaNaoImportanteFormatada = '';

        for (let i = 0; i < tarefaNaoImportante.length; i++) {

            tarefaNaoImportanteFormatada += tarefaNaoImportante[i];
        }

        let tarefasNaoImportantes = document.getElementsByClassName(tarefaNaoImportanteFormatada)

        for (let i = 0; i < tarefas.length; i++) {
            tarefas[i].style.display = 'none';
        }

        for (let i = 0; i < tarefasNaoImportantes.length; i++) {
            tarefasNaoImportantes[i].style.display = 'block';
        }

    }

}

/*Função para mostrar apenas informações da aba meu dia*/
document.getElementById('btnMeuDia')
    .addEventListener('click', function () {

        escondeGrupos();
        document.getElementById('meuDia').style.display = 'block';
        document.getElementById('tarefas').style.display = 'none';
        document.getElementById('lixeira').style.display = 'none';
        document.getElementById('importante').style.display = 'none';
        document.getElementById('footerNovaTarefa').style.display = 'block';

    });

/*Função para mostrar apenas informações da aba Importante*/
document.getElementById('btnImportante')
    .addEventListener('click', function () {

        escondeGrupos();
        document.getElementById('meuDia').style.display = 'none';
        document.getElementById('tarefas').style.display = 'none';
        document.getElementById('lixeira').style.display = 'none';
        document.getElementById('importante').style.display = 'block';
        document.getElementById('footerNovaTarefa').style.display = 'block';

    });

/*Função para mostrar apenas informações da aba Tarefas*/
document.getElementById('btnTarefas')
    .addEventListener('click', function () {

        escondeGrupos();
        document.getElementById('meuDia').style.display = 'none';
        document.getElementById('lixeira').style.display = 'none';
        document.getElementById('tarefas').style.display = 'block';
        document.getElementById('importante').style.display = 'none';
        document.getElementById('footerNovaTarefa').style.display = 'block';


    });

/*Função para mostrar apenas informações da aba Lixeira*/
document.getElementById('btnLixeira')
    .addEventListener('click', function () {

        escondeGrupos();
        document.getElementById('meuDia').style.display = 'none';
        document.getElementById('tarefas').style.display = 'none';
        document.getElementById('lixeira').style.display = 'block';
        document.getElementById('importante').style.display = 'none';
        document.getElementById('footerNovaTarefa').style.display = 'none';

    });

/*Função para mostrar apenas icone de circulo e inputNovaTarefa*/
document.getElementById('adicionarTarefa')
    .addEventListener('click', function () {

        document.getElementById('circuloNovaTarefa').style.display = 'block';
        document.getElementById('btnCancelarCriacaoTarefa').style.display = 'flex';
        document.getElementById('btnCriarTarefa').style.display = 'flex';
        document.getElementById('inputNovaTarefa').style.display = 'block';
        document.getElementById('inputNovaTarefa').removeAttribute('disabled');
        document.getElementById('adicionarTarefa').style.display = 'none';

    });

/*Função para mostrar */
document.getElementById('adicionarEtapa')
    .addEventListener('click', function () {

        document.getElementById('btnEtapa').style.display = 'flex';
        document.getElementById('inputNovaEtapa').style.display = 'block';
        document.getElementById('inputNovaEtapa').removeAttribute('disabled');
        document.getElementById('adicionarEtapa').style.display = 'none';

    });

function testeCliqueClose() {
    alert('Cliquei no X');
}

function testeClique() {
    alert('Não cliquei no X');
}

/*Função para abrir input de criação de novo grupo*/
document.getElementById('novoGrupo')
    .addEventListener('click', function () {


        document.getElementById('divCriarGrupo').style.display = 'flex';
        document.getElementById('btnCriarGrupo').style.display = 'block';
        document.getElementById('inputNovoGrupo').style.display = 'block';
        document.getElementById('divCriarGrupo').style.flexDirection = 'row';
        document.getElementById('btnCancelarCriarGrupo').style.display = 'block';

    });

/*Função para cancelar criação de novo grupo */
function cancelarCriacaoGrupo() {

    document.getElementById('divCriarGrupo').style.display = 'none';
    document.getElementById('btnCriarGrupo').style.display = 'none';
    document.getElementById('inputNovoGrupo').style.display = 'none';
    // document.getElementById('divCriarGrupo').style.flexDirection = 'row';
    document.getElementById('btnCancelarCriarGrupo').style.display = 'none';

};

/*Função para mostrar */
document.getElementById('inputNovaEtapa')
    .addEventListener('keypress', function (e) {

        if (e.key === 'Enter') {
            document.getElementById('inputNovaEtapa').setAttribute('disabled', '');
            document.getElementById('inputNovaEtapa').value = '';
            document.getElementById('btnEtapa').style.display = 'none';
            document.getElementById('adicionarEtapa').style.display = 'block';
        }

    });

/*Função para fechar a sidebar da direita*/
document.getElementById('btnCloseSideBarDireita')
    .addEventListener('click', function () {

        let tarefasGeradas = document.getElementsByClassName('tarefaGerada');
        document.getElementById('textAreaTarefaAnotacao').value = '';
        document.getElementById('divSidebarDireita').style.display = 'none';

        if (tamanhoTela.matches != true) {


            for (let i = 0; i < tarefasGeradas.length; i++) {
                tarefasGeradas[i].style.width = '970px'
            }

            document.getElementById('inputNovaTarefa').style.width = '70%'
            document.getElementById('divAdicionarTarefa').style.width = '970px'

        } else {

            for (let i = 0; i < tarefasGeradas.length; i++) {
                tarefasGeradas[i].style.width = '1520px'
            }

            document.getElementById('inputNovaTarefa').style.width = '70%'
            document.getElementById('divAdicionarTarefa').style.width = '1520px'

        }


    });