/*Instanciando objeto da classe Date*/
const data = new Date();

/*Inicializando variáveis*/
let mes = 0;
let diaSemana = 0;

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

    escondeGrupos();
    document.getElementById(grupo).style.display = 'block';
    document.getElementById('meuDia').style.display = 'none';
    document.getElementById('tarefas').style.display = 'none';
    document.getElementById('lixeira').style.display = 'none';
    document.getElementById('importante').style.display = 'none';
    document.getElementById('footerNovaTarefa').style.display = 'block';
}

/*Função para mostrar apenas icone de mais e adicionarTarefa*/
function abrirSidebarDireita() {

    document.getElementById('divSidebarDireita').style.display = 'block';
    //         document.getElementById('inputNovaTarefa').setAttribute('disabled', '');
    //         document.getElementById('inputNovaTarefa').value = '';
    //         document.getElementById('circuloNovaTarefa').style.display = 'none';
    //         document.getElementById('adicionarTarefa').style.display = 'block';

};

function concluirTarefa(tarefa) {

    let tarefas = document.getElementsByClassName(tarefa);

    if (tarefa.substring(tarefa.length - 9) != 'Concluida') {

        let tarefaConcluida = document.getElementsByClassName(tarefa + 'Concluida');

        for (let i = 0; i < tarefas.length; i++) {
            tarefas[i].style.display = 'none';
        }

        for (let i = 0; i < tarefaConcluida.length; i++) {
            tarefaConcluida[i].style.display = 'block';
        }

    } else {

        let tarefaNaoConcluida = document.getElementsByClassName(tarefa.substring(0, 17));

        for (let i = 0; i < tarefas.length; i++) {
            tarefas[i].style.display = 'none';
        }

        for (let i = 0; i < tarefaNaoConcluida.length; i++) {
            tarefaNaoConcluida[i].style.display = 'block';
        }

    }

}

function definirImportante(tarefa) {

    let tarefas = document.getElementsByClassName(tarefa);

    if (tarefa.substring(tarefa.length - 10) != 'Importante') {

        let tarefaImportante = document.getElementsByClassName(tarefa + 'Importante');

        for (let i = 0; i < tarefas.length; i++) {
            tarefas[i].style.display = 'none';
        }

        for (let i = 0; i < tarefaImportante.length; i++) {
            tarefaImportante[i].style.display = 'block';
        }

    } else {

        let tarefaNaoImportante = document.getElementsByClassName(tarefa.substring(0, 17));

        for (let i = 0; i < tarefas.length; i++) {
            tarefas[i].style.display = 'none';
        }

        for (let i = 0; i < tarefaNaoImportante.length; i++) {
            tarefaNaoImportante[i].style.display = 'block';
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
        document.getElementById('inputNovaTarefa').style.display = 'block';
        document.getElementById('inputNovaTarefa').removeAttribute('disabled');
        document.getElementById('adicionarTarefa').style.display = 'none';

    });

/*Função para mostrar apenas icone de mais e adicionarTarefa*/
document.getElementById('inputNovaTarefa')
    .addEventListener('keypress', function (e) {

        if (e.key === 'Enter') {
            document.getElementById('inputNovaTarefa').setAttribute('disabled', '');
            document.getElementById('inputNovaTarefa').value = '';
            document.getElementById('circuloNovaTarefa').style.display = 'none';
            document.getElementById('adicionarTarefa').style.display = 'block';
        }

    });

/*Função para mostrar */
document.getElementById('adicionarEtapa')
    .addEventListener('click', function () {

        document.getElementById('circuloNovaEtapa').style.display = 'block';
        document.getElementById('inputNovaEtapa').style.display = 'block';
        document.getElementById('inputNovaEtapa').removeAttribute('disabled');
        document.getElementById('adicionarEtapa').style.display = 'none';

    });


/*Função para mostrar */
document.getElementById('inputNovaEtapa')
    .addEventListener('keypress', function (e) {

        if (e.key === 'Enter') {
            document.getElementById('inputNovaEtapa').setAttribute('disabled', '');
            document.getElementById('inputNovaEtapa').value = '';
            document.getElementById('circuloNovaEtapa').style.display = 'none';
            document.getElementById('adicionarEtapa').style.display = 'block';
        }

    });

/*Função para fechar a sidebar da direita*/
document.getElementById('btnCloseSideBarDireita')
    .addEventListener('click', function () {

        document.getElementById('textAreaTarefaAnotacao').value = '';
        document.getElementById('divSidebarDireita').style.display = 'none';
    });