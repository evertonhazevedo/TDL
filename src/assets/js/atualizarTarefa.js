function atualizarTarefa(idTarefa) {


  let tarefa = document.getElementById('descricaoTarefa').value;

  console.log(idTarefa);
  console.log(tarefa);

  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      idTarefa: idTarefa,
      tarefa: tarefa 
   
    })
  };

  fetch('http://localhost:5500/atualizar-tarefas', options)
    .then(response => response.json())
    .then(response => {
      
      if (response.success == false){
        Swal.fire('Não foi possível atualizar a tarefa!', '', 'error');
      }else{
        Swal.fire('Tarefa atualizada com sucesso!', '', 'success');
        document.getElementById('btnCancelarAtualizacaoTarefa').style.display = 'none';
        document.getElementById('btnAtualizaTarefa').style.display = 'none';
      }
    })
    .catch(err => console.error(err));

}