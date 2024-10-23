function redirectToForm(petName) {
    // Redireciona para a página de adoção com o nome do pet
    window.location.href = `Quero adotar.html?pet=${petName}`;
}
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os botões de favoritar após o carregamento da página
    const favoriteBtns = document.querySelectorAll('.favorite-btn');

    // Adiciona o evento de clique para cada botão de favoritar
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const petId = btn.getAttribute('data-pet-id');
            toggleFavorite(petId);
        });
    });

    // Função que adiciona ou remove favoritos no localStorage
    function toggleFavorite(petId) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        
        // Verifica se o pet já está nos favoritos
        if (favorites.includes(petId)) {
            // Se já estiver, remove-o
            favorites = favorites.filter(fav => fav !== petId);
        } else {
            // Caso contrário, adiciona-o
            favorites.push(petId);
        }

        // Atualiza o localStorage
        localStorage.setItem('favorites', JSON.stringify(favorites));

        // Atualiza o estado visual do botão de favorito
        updateFavoriteButton(petId);
    }

    // Função para atualizar o estado visual do botão de favorito
    function updateFavoriteButton(petId) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favoriteBtns.forEach(btn => {
            if (btn.getAttribute('data-pet-id') === petId) {
                if (favorites.includes(petId)) {
                    btn.innerHTML = '⭐ Favoritado';
                    btn.style.color = 'yellow'; // Indica que foi favoritado
                } else {
                    btn.innerHTML = '⭐';
                    btn.style.color = ''; // Volta ao estado normal
                }
            }
        });
    }

    // Carregar o estado inicial dos botões
    function loadFavoriteButtons() {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.forEach(petId => {
            updateFavoriteButton(petId);
        });
    }

    // Inicializa o estado dos botões ao carregar a página
    loadFavoriteButtons();

    // Função para redirecionar para o formulário de adoção
    function redirectToForm(petName) {
        // Aqui, redirecionamos o usuário para a página de adoção com o nome do pet
        window.location.href = `Quero adotar.html?pet=${petName}`;
    }
});

