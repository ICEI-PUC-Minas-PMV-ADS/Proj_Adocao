//função que vai criar o cadastro de um novo pet - Create
function createTarefa(tarefa) {
  let tarefas = readTarefas();
  tarefas.push(tarefa);
  updateTarefas(tarefas);
}

//função que vai ler o/os cadastro/s - Read
function readTarefa(id) {
  const tarefas = readTarefas();
  return tarefas.find((tarefa) => tarefa.id === id);
}

function readTarefas() {
  return JSON.parse(localStorage.getItem("tarefas")) || [];
}

//função que vai atualizar o cadastro - Update
function updateTarefas(tarefas) {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function updateTarefa(tarefaAtualizada) {
  const tarefas = readTarefas();
  const index = tarefas.findIndex(
    (tarefa) => tarefa.id === tarefaAtualizada.id
  );

  if (index !== -1) {
    tarefas[index] = tarefaAtualizada;

    updateTarefas(tarefas);
    console.log("Tarefa atualizada com sucesso:", tarefaAtualizada);
  } else {
    console.error(`Tarefa com ID ${tarefaAtualizada.id} não encontrada.`);
  }
}

//função que vai deletar o cadastro - Delete
function deleteTarefa(idExcluida) {
  let tarefas = readTarefas();
  tarefas = tarefas.filter((tarefa) => tarefa.id !== idExcluida);
  updateTarefas(tarefas);
}
