/*Função para mostrar apenas icone de mais e adicionarTarefa*/
function criarTarefa() {

  let tarefa = document.getElementById('inputNovaTarefa').value;
  let conclusao = document.getElementById('inputBtnCalendario').value;
  let notificacao = document.getElementById('inputBtnAlarme').value;
  let usuario = localStorage.getItem('id_usuario');
  // let grupo = '';

  if (tarefa == "") {

    Swal.fire('Por favor informe o nome da tarefa', '', 'error');

  } else if (conclusao == "") {

    Swal.fire('Por favor informe a data de conclusao!', '', 'error');

  } else if (notificacao == "") {
    
    Swal.fire('Por favor informe quando deseja ser notificado', '', 'error');

  } else {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tarefa: tarefa,
        conclusao: conclusao,
        notificacao: notificacao,
        usuario: usuario,
        // grupo: grupo
      })

    };

    fetch('http://localhost:5500/criar-tarefa', options)
      .then(response => response.json())
      .then(async response => {

        if (response.success != true) {

          Swal.fire('Não foi possível cadastrar a tarefa!', '', 'error');
          
        } else {

          let divTarefaGerada = document.getElementById('main-content');

          divTarefaGerada.innerHTML += `<div class="tarefaGerada" onclick="abrirSidebarDireita()">
                                            <button style="width: fit-content; height: 100%;" name="` + response.tarefa.ds_tarefa + `"
                                                class="` + response.tarefa.ds_tarefa + `" onclick="concluirTarefa(this.name)">

                                                <i class="material-symbols-rounded circulos" id="circuloTarefas"
                                                    style="color: #fff;">circle</i>
                                            </button>

                                            <button style="width: fit-content; height: 100%; display:none"
                                                class="` + response.tarefa.ds_tarefa + `" name="` + response.tarefa.ds_tarefa + `"
                                                onclick="concluirTarefa(this.name)">

                                                <i class="material-icons circulos" id="circuloTarefasConcluidas"
                                                    style="color: #fff; ">check_circle</i>
                                            </button>

                                            <input id="descricaoTarefa" value="` + response.tarefa.ds_tarefa + `"></input>

                                            <label id="btnCriarTarefa" onclick="atualizarTarefa()" style="display:none">
                                                <span>
                                                    <i class="material-symbols-rounded" style="color: #B6DF82;">check</i>
                                                </span>
                                            </label>
                    
                                            <label id="btnCancelarCriacaoTarefa" onclick="" style="display:none">
                                                <span>
                                                    <i class="material-symbols-rounded" style="color: #FB5C5C;">close</i>
                                                </span>
                                            </label>

                                            <button style="width: fit-content; height: 100%;" onclick="definirImportante(this.name)"
                                                class="` + response.tarefa.ds_tarefa + `" name="` + response.tarefa.ds_tarefa + `">
                                                <i class="material-symbols-rounded estrelas" id="estrelaTarefas"
                                                    style="color: #E19EEC;">star</i>
                                            </button>

                                            <button style="width: fit-content; height: 100%; display:none"
                                                class="` + response.tarefa.ds_tarefa + `" name="` + response.tarefa.ds_tarefa + `"
                                                onclick="definirImportante(this.name)">
                                                <i class="material-icons estrelas" id="estrelaTarefasImportantes"
                                                    style="color: #E19EEC;">star</i>
                                            </button>
                                          </div>`;

          document.getElementById('inputNovaTarefa').setAttribute('disabled', '');
          document.getElementById('inputNovaTarefa').value = '';
          document.getElementById('circuloNovaTarefa').style.display = 'none';
          document.getElementById('adicionarTarefa').style.display = 'block';
          document.getElementById('btnCancelarCriacaoTarefa').style.display = 'none';
          document.getElementById('btnCriarTarefa').style.display = 'none';
        }
      })
      .catch(err => console.error(err));
  }
}


