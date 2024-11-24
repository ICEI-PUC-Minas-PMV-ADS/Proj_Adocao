const modalTarefa = document.getElementById("modalTarefa");
const campoNome = document.getElementById("campoNome");
const campoEspecie = document.getElementById("campoEspecie");
const campoIdade = document.getElementById("campoIdade");
const campoDescricao = document.getElementById("campoDescricao");
const campoImagem = document.getElementById("campoImagem");
const campoID = document.getElementById("campoID");
const fechaModal = document.getElementById("fechaModal");

// Botões
const btCriar = document.getElementById("btCriar");
const btAlterar = document.getElementById("btAlterar");
const btExcluir = document.getElementById("btExcluir");
const btCancelar = document.getElementById("btCancelar");
const btCadPet = document.getElementById("btCadPet");
const petContainer = document.querySelector(".pet-container");

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

mostraTabela();
function mostraTabela() {
  const dados = readTarefas();
  petContainer.innerHTML = "";
  // carrega dados
  dados.forEach((item) => {
    const petRow = `
      <div class="pet-row" id="linha-${item.id}">
        <table>
          <tr>
            <td id="coluna1">
              <table>
                <tr>
                  <td><button class="btFavoritar" data-id="${
                    item.id
                  }">⭐</button></td>
                </tr>
                <tr>
                  <td class="lin2"><strong>Nome:</strong> ${item.nome}</td>
                </tr>
                <tr>
                  <td class="lin3"><strong>Espécie/Raça:</strong> ${
                    item.especie
                  }</td>
                </tr>
                <tr>
                  <td class="lin4"><strong>Idade/Saúde:</strong> ${
                    item.idade
                  }</td>
                </tr>
                <tr>
                  <td class="lin5"><strong>Temperamento/Descrição:</strong> ${
                    item.descricao
                  }</td>
                </tr>
                <tr>
                  <td>
                    <button id="btAdotar" data-id="${
                      item.id
                    }">Quero Adotar</button>
                    <button class="btEditar" data-id="${
                      item.id
                    }">Editar</button>
                    <button class="btExcluir" data-id="${
                      item.id
                    }">Excluir</button>

                  </td>
                </tr>
              </table>
            </td>
            <td>
              <img
                src="${item.imagem || "placeholder.jpg"}"
                alt="Imagem de ${item.nome}"
                style="width: 100%; height: auto;"
              />
            </td>
          </tr>
        </table>
      </div>
    `;
    petContainer.innerHTML += petRow;
  });

  configurarBotoes();
}

// Mostra a janela modal para Cad Pet p/ Adoção (evento bt)
btCadPet.onclick = function () {
  campoNome.value = "";
  campoEspecie.value = "";
  campoIdade.value = "";
  campoDescricao.value = "";
  campoImagem.value = "";
  campoNome.disabled = false;
  campoEspecie.disabled = false;
  campoIdade.disabled = false;
  campoDescricao.disabled = false;
  campoImagem.disabled = false;
  modalTarefa.style.display = "block";
  btCriar.style.display = "inline-block";
  btAlterar.style.display = "none";
  btCancelar.style.display = "inline-block";
  btCriar.disabled = false;
  btCancelar.disabled = false;
  campoNome.focus();
};

//Evento do botão Salvar quando do Cad Pet Adoção
btCriar.onclick = async function () {
  const id = Date.now();
  let base64Image = "";

  if (campoImagem.files[0]) {
    base64Image = await convertToBase64(campoImagem.files[0]);
  }
  const tarefa = {
    id: id,
    nome: campoNome.value,
    especie: campoEspecie.value,
    idade: campoIdade.value,
    descricao: campoDescricao.value,
    imagem: base64Image,
  };
  createTarefa(tarefa);
  mostraTabela();
  modalTarefa.style.display = "none";
};

function configurarBotoes() {
  document.querySelectorAll(".btEditar").forEach((botao) => {
    botao.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      editarPet(id);
    });
  });

  document.querySelectorAll(".btExcluir").forEach((botao) => {
    botao.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      deleteTarefa(parseInt(id));
      mostraTabela();
    });
  });
  /*O botão adotar pet ainda não está configurado*/
}

// Verifica se os cinco campos estão preenchidos antes de criar ou alterar tarefa
let liberaBotao = function () {
  if (
    campoDescricao.value.length > 0 &&
    campoNome.value.length > 0 &&
    campoEspecie.value.length > 0 &&
    campoImagem.files.length > 0 &&
    campoIdade.value.length > 0
  ) {
    btCriar.disabled = false;
    btAlterar.disabled = false;
  } else {
    btCriar.disabled = true;
    btAlterar.disabled = true;
  }
};
campoDescricao.onchange = liberaBotao;
campoNome.onchange = liberaBotao;
campoIdade.onchange = liberaBotao;
campoEspecie.onchange = liberaBotao;
campoImagem.onchange = liberaBotao;
btCancelar.disabled = false;

// Mostra a janela modal para edição de uma tarefa existente
//"Evento" do botão Editar
document.querySelector(".pet-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("btEditar")) {
    const id = parseInt(e.target.dataset.id);
    editarPet(id);
  }
});

function editarPet(id) {
  const pet = readTarefa(id);
  campoNome.value = pet.nome;
  campoEspecie.value = pet.especie;
  campoIdade.value = pet.idade;
  campoDescricao.value = pet.descricao;
  campoID.value = pet.id;
  campoNome.disabled = false;
  campoEspecie.disabled = false;
  campoIdade.disabled = false;
  campoDescricao.disabled = false;

  modalTarefa.style.display = "block";
  btCriar.style.display = "none";
  btAlterar.style.display = "inline-block";
  btCancelar.style.display = "inline-block";
  btAlterar.disabled = false;
  campoImagem.value = "";
}

//Evento do botão Alterar que salva as alterações (edição) no pet
btAlterar.onclick = async function () {
  const petEditado = {
    id: parseInt(campoID.value),
    nome: campoNome.value,
    especie: campoEspecie.value,
    idade: campoIdade.value,
    descricao: campoDescricao.value,
    imagem: campoImagem.files[0]
      ? await convertToBase64(campoImagem.files[0])
      : readTarefa(parseInt(campoID.value)).imagem,
  };

  updateTarefa(petEditado);
  modalTarefa.style.display = "none";
  mostraTabela();
};

// Evento do botão Excluir
document.querySelector(".pet-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("btExcluir")) {
    const id = parseInt(e.target.dataset.id);
    deleteTarefa(id);
    mostraTabela();
  }
});

btCancelar.onclick = () => {
  console.log("Fechando modal de cancelamento...");
  modalTarefa.style.display = "none";
};

fechaModal.onclick = () => {
  modalTarefa.style.display = "none";
};

//Parte do botão favoritar

document.addEventListener("DOMContentLoaded", () => {
  const petList = document.querySelector(".pet-container");

  if (!petList) {
    console.error("Contêiner de pets não encontrado!");
    return;
  }

  // Delegação de evento para capturar cliques nos botões de favoritar
  petList.addEventListener("click", (event) => {
    console.log("Clique detectado no elemento:", event.target);

    if (event.target.classList.contains("btFavoritar")) {
      const itemId = event.target.getAttribute("data-id");
      console.log("ID do item clicado:", itemId);

      if (itemId) {
        toggleFavorite(itemId, event.target);
      } else {
        console.error("O botão não contém o atributo data-id!");
      }
    }
  });

  function toggleFavorite(itemId, button) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const pets = readTarefas();
    const item = pets.find((i) => i.id === parseInt(itemId));

    if (!item) {
      console.error("Pet não encontrado no array de tarefas!");
      return;
    }

    const isFavorited = favorites.some((fav) => fav.id === item.id);

    if (isFavorited) {
      favorites = favorites.filter((fav) => fav.id !== item.id);
    } else {
      favorites.push(item);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log("Favoritos atualizados:", favorites);
    updateFavoriteButton(itemId, button);
  }

  function updateFavoriteButton(itemId, button) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorited = favorites.some((fav) => fav.id === itemId);

    if (isFavorited) {
      button.innerHTML = "⭐ Favoritado";
      button.style.color = "yellow";
    } else {
      button.innerHTML = "⭐";
      button.style.color = "";
    }
  }
});
