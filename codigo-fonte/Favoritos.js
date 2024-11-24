document.addEventListener("DOMContentLoaded", () => {
  const favoriteContainer = document.querySelector(".favorite-container");

  function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.length === 0) {
      favoriteContainer.innerHTML =
        "<p>Você ainda não favoritou nenhum pet.</p>";
      return;
    }
    favoriteContainer.innerHTML = "";
    favorites.forEach((item) => {
      const petElement = document.createElement("div");
      petElement.classList.add("pet-favorite");
      petElement.innerHTML = `
              <h3>${item.nome}</h3>
              <p><strong>Espécie:</strong> ${item.especie}</p>
              <p><strong>Idade:</strong> ${item.idade}</p>
              <p><strong>Descrição:</strong> ${item.descricao}</p>
              <img src="${item.imagem}" alt="Imagem de ${item.nome}" style="width: 100px; height: auto;">
              <button class="btRemoverFavorito" data-id="${item.id}">❌ Remover dos Favoritos</button>
          `;
      favoriteContainer.appendChild(petElement);
    });
  }

  function removeFavorite(itemId) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter((fav) => fav.id !== parseInt(itemId));
    localStorage.setItem("favorites", JSON.stringify(favorites));
    loadFavorites();
  }

  favoriteContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("btRemoverFavorito")) {
      const itemId = event.target.getAttribute("data-id");
      removeFavorite(itemId);
    }
  });

  loadFavorites();
});
