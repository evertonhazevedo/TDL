function criarGrupo() {

    let usuario = localStorage.getItem('id_usuario');
    let grupo = document.getElementById('inputNovoGrupo').value;

    if (grupo == "") {

        Swal.fire('Por favor preencha todos os campos!', '', 'error');

    } else {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                grupo: grupo,
                usuario: usuario
            })
        };

        fetch('http://localhost:5500/criar-grupo', options)
            .then(response => response.json())
            .then(async response => {

                if (response.success != true) {
                    Swal.fire('Você já possuí um grupo chamado ' + grupo, '', 'error');
                } else {

                    document.getElementById('inputNovoGrupo').value = '';
                    document.getElementById('inputNovoGrupo').style.display = 'none';
                    document.getElementById('btnCriarGrupo').style.display = 'none';
                    document.getElementById('btnCancelarCriarGrupo').style.display = 'none';
                    document.getElementById('divCriarGrupo').style.display = 'flex';
                    document.getElementById('divCriarGrupo').style.flexDirection = 'row';

                    let divGruposCriados = document.getElementById('divGruposCriados');

                    divGruposCriados.innerHTML += `<button id="` + grupo + `" name="` + grupo + `" onclick="mostrarConteudoGrupo(this.name)">
                                                            <span>
                                                                <i class="material-symbols-rounded" style="color: #B6DF82;">bookmark</i>
                                                                <span>` + grupo + `</span>
                                                            </span>
                                                      </button>`;

                }

                // localStorage.setItem("id_grupo", response.grupo._id);
            })
            .catch(err => console.error(err));
    }
};