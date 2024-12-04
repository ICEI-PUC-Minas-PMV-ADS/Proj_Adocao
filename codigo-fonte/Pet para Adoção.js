const modalTarefa = document.getElementById("modalTarefa");
const campoNome = document.getElementById("campoNome");
const campoEspecie = document.getElementById("campoEspecie");
const campoIdade = document.getElementById("campoIdade");
const campoDescricao = document.getElementById("campoDescricao");
const campoImagem = document.getElementById("campoImagem");
const campoID = document.getElementById("campoID");
const fechaModal = document.getElementById("fechaModal");

const btCriar = document.getElementById("btCriar");
const btAlterar = document.getElementById("btAlterar");
const btExcluir = document.getElementById("btExcluir");
const btCancelar = document.getElementById("btCancelar");
const btCadPet = document.getElementById("btCadPet");
const btFavoritar = document.getElementById("btFavoritar");
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

  dados.forEach((item) => {
    const petRow = `
      <div class="pet-row" id="linha-${
        item.id
      }" style = "background-image: url('https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e1-proj-web-t11-proj_adocao/refs/heads/main/documentos/img/fundo%20destaque.png');">
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
                    <button style="background-color: #b98e77; color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;" class="adoptbtn" id="btAdotar" data-id="${
    item.id
  }" onclick="window.location.href='Quero adotar.html'">Quero Adotar</button>

                    <button class="btEditar admin-only" data-id="${
                      item.id
                    }">Editar</button>
                    <button class="btExcluir admin-only" data-id="${
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

  document.querySelectorAll(".btFavoritar").forEach((botao) => {
    botao.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      toggleFavorite(id);
    });
  });

  document.querySelectorAll(".btExcluir").forEach((botao) => {
    botao.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      deleteTarefa(parseInt(id));
      mostraTabela();
    });
  });
}

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

document.addEventListener("DOMContentLoaded", () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const logoutButton = document.getElementById("logout");
  // Ocultar botões/links para visitantes comuns
  const adminButtons = document.querySelectorAll(".admin-only");
  adminButtons.forEach((button) => {
    button.style.display = isAdmin ? "inline-block" : "none";
  });

  // Logout
  if (isAdmin) {
    logoutButton.style.display = "inline-block";
    logoutButton.onclick = () => {
      localStorage.removeItem("isAdmin");
      alert("Logout realizado com sucesso!");
      window.location.reload();
    };
  }
});

function redirectToForm(petName) {
  window.location.href = `Quero adotar.html?pet=${petName}`;
}

//PARTE DO FAVORITAR

function toggleFavorite(petId) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const pets = readTarefas();
  const pet = pets.find((i) => i.id === parseInt(petId));

  if (!pet) {
    console.error("Pet não encontrado!");
    return;
  }

  const isFavorited = favorites.some((fav) => fav.id === pet.id);

  if (isFavorited) {
    favorites = favorites.filter((fav) => fav.id !== pet.id);
  } else {
    favorites.push(pet);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateFavoriteButton(petId);
}

function updateFavoriteButton(petId) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  document.querySelectorAll(".btFavoritar").forEach((btn) => {
    if (btn.getAttribute("data-id") === petId) {
      if (favorites.includes(petId)) {
        btn.innerHTML = "⭐ Favoritado";
        btn.style.color = "yellow";
      } else {
        btn.innerHTML = "⭐";
        btn.style.color = "";
      }
    }
  });
}
