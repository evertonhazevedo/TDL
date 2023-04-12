function deletarTarefa(idTarefa) {

  const options = { method: 'DELETE' };

  fetch('http://localhost:5500/deletar-tarefa/' + idTarefa, options)
    .then(response => response.json())
    .then(response => {

      if (response.success == false){
        Swal.fire('Não foi possível deletar a tarefa!', '', 'error');
      }else{
        document.getElementById('btnCancelarAtualizacaoTarefa').style.display = 'none';
        document.getElementById('btnAtualizaTarefa').style.display = 'none';
        Swal.fire('Tarefa deletada com sucesso!', '', 'success');
        location.reload();
      }

    })
    .catch(err => console.error(err));
}