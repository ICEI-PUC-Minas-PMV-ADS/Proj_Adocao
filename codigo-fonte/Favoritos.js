function redirectToForm(petName) {
  window.location.href = `Quero adotar.html?pet=${petName}`;
}

function removeFavorite(petId, petElement) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favorites = favorites.filter((fav) => fav.id !== petId);

  localStorage.setItem("favorites", JSON.stringify(favorites));

  petElement.remove();

  const remainingFavorites =
    JSON.parse(localStorage.getItem("favorites")) || [];
  if (remainingFavorites.length === 0) {
    document.getElementById("favorite-pets").innerHTML =
      "<p>Você não tem nenhum pet favoritado no momento.</p>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const favoritePetsContainer = document.getElementById("favorite-pets");

  const petsData = {
    klebinho: {
      name: "Klebinho",
      image:
        "https://www.pedigree.com.br/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2401/files/2022-04/hero-icon-Savannah_0.png",
      description:
        "Klebinho é um cãozinho de 8 anos que foi abandonado ainda filhote...",
    },
    junin: {
      name: "Junin",
      image:
        "https://www.pedigree.com.br/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2401/files/2023-10/Dog%20image.png",
      description:
        "Junin é um cãozinho de 4 anos que foi encontrado abandonado em uma caixa...",
    },
    kiara: {
      name: "Kiara",
      image:
        "https://www.pedigreeadotar.com.br/wp-content/uploads/2023/11/dog-min.png",
      description: "Kiara é uma cachorrinha amorosa e cheia de energia...",
    },
  };

  function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favoritePetsContainer = document.getElementById("favorite-pets");
    favoritePetsContainer.innerHTML = "";

    if (favorites.length === 0) {
      favoritePetsContainer.innerHTML =
        "<p>Você não tem nenhum pet favoritado no momento.</p>";
      return;
    }

    favorites.forEach((pet) => {
      const petDiv = document.createElement("div");
      petDiv.classList.add("pet-container");

      petDiv.innerHTML = `
            <div class="pet-info">
                <h3>${pet.nome}</h3>
                <p>${pet.descricao}</p>
                <button class="adopt-btn" onclick="redirectToForm('${pet.nome}')">Quero Adotar</button>
                <button class="remove-btn">Remover</button>
            </div>
            <div class="pet-img">
                <img src="${pet.imagem}" alt="${pet.nome}">
            </div>
        `;

      favoritePetsContainer.appendChild(petDiv);

      const removeBtn = petDiv.querySelector(".remove-btn");
      removeBtn.addEventListener("click", () => removeFavorite(pet.id, petDiv));
    });
  }

  loadFavorites();
});
