window.onload = function listarInformações() {

  /*Listando Tarefas */
  let usuario = localStorage.getItem('id_usuario');

  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  fetch('http://localhost:5500/listar-tarefas/' + usuario, options)
    .then(response => response.json())
    .then(async response => {

      if (response.success != true) {

        Swal.fire('Erro ao listar as tarefas!', '', 'error');

      } else {

        const tarefas = response.tarefas;

        const divTarefaGerada = document.getElementById('main-content');

        tarefas.forEach((tarefas, index) => {
          let contador = 0;
          let idTarefa = response.tarefas[contador]._id;
          divTarefaGerada.innerHTML += `<div class="tarefaGerada" onclick="abrirSidebarDireita()">
                                        <button style="width: fit-content; height: 100%;" name="` + tarefas.ds_tarefa + `"
                                            class="` + tarefas.ds_tarefa + `" onclick="concluirTarefa(this.name)">

                                            <i class="material-symbols-rounded circulos" id="circuloTarefas"
                                                style="color: #fff;">circle</i>
                                        </button>

                                        <button style="width: fit-content; height: 100%; display:none"
                                            class="` + tarefas.ds_tarefa + `-Concluida" name="` + tarefas.ds_tarefa + `-Concluida"
                                            onclick="concluirTarefa(this.name)">

                                            <i class="material-icons circulos" id="circuloTarefasConcluidas"
                                                style="color: #fff; ">check_circle</i>
                                        </button>
                                      
                                        <input id="descricaoTarefa" value="` + tarefas.ds_tarefa + `" onclick="mostraBotoesInputTarefa()"></input>

                                        <label id="btnAtualizaTarefa" onclick="atualizarTarefa('${idTarefa}')">
                                            <span>
                                                <i class="material-symbols-rounded" style="color: #B6DF82;">check</i>
                                            </span>
                                        </label>
                
                                        <label id="btnCancelarAtualizacaoTarefa" onclick="">
                                            <span>
                                                <i class="material-symbols-rounded" style="color: #FB5C5C;">close</i>
                                            </span>
                                        </label>

                                        <button style="width: fit-content; height: 100%;" onclick="definirImportante(this.name)"
                                            class="` + tarefas.ds_tarefa + `" name="` + tarefas.ds_tarefa + `">
                                            <i class="material-symbols-rounded estrelas" id="estrelaTarefas"
                                                style="color: #E19EEC;">star</i>
                                        </button>

                                        <button id="btnExcluirTarefa" class="btnExcluirTarefaSidebarDireita" onclick="deletarTarefa('${idTarefa}')">

                                          <i class="material-symbols-rounded btnExcluirTarefaSidebarDireita"
                                              style="color: white; vertical-align: middle">delete</i>
            
                                        </button>

                                        <button style="width: fit-content; height: 100%; display:none"
                                            class="` + tarefas.ds_tarefa + `-Importante" name="` + tarefas.ds_tarefa + `-Importante"
                                            onclick="definirImportante(this.name)">
                                            <i class="material-icons estrelas" id="estrelaTarefasImportantes"
                                                style="color: #E19EEC;">star</i>
                                        </button>
                                      </div>`
          contador++;
        })

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
      }
    })
    .catch(err => console.error(err));

  /*Listando Grupos */
  const optionsGrupos = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  fetch('http://localhost:5500/listar-grupos/' + usuario, optionsGrupos)
    .then(response => response.json())
    .then(async response => {

      const grupos = response.grupos;
      const divGruposCriados = document.getElementById('divGruposCriados');

      grupos.forEach((grupos, index) => {

        divGruposCriados.innerHTML += `<button id="` + grupos.nm_grupo + `" name="` + grupos.nm_grupo + `" onclick="mostrarConteudoGrupo(this.name)">
                                                <span>
                                                    <i class="material-symbols-rounded" style="color: #B6DF82;">bookmark</i>
                                                    <span>` + grupos.nm_grupo + `</span>
                                                </span>
                                           </button>`;
      })

    })
    .catch(err => console.error(err));

}