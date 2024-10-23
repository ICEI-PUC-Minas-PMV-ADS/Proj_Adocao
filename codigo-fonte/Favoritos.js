function redirectToForm(petName) {
    // Redireciona para a página de adoção com o nome do pet
    window.location.href = `Quero adotar.html?pet=${petName}`;
}

function removeFavorite(petId, petElement) {
    // Obtém os favoritos do localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Filtra para remover o petId selecionado
    favorites = favorites.filter(fav => fav !== petId);
    
    // Atualiza o localStorage com os novos favoritos
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Remove o elemento visualmente da página
    petElement.remove();

    // Verifica se ainda há favoritos, se não, atualiza a mensagem na página
    const remainingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (remainingFavorites.length === 0) {
        document.getElementById('favorite-pets').innerHTML = '<p>Você não tem nenhum pet favoritado no momento.</p>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const favoritePetsContainer = document.getElementById('favorite-pets');

    // Defina os dados completos dos pets (nome, imagem, descrição)
    const petsData = {
        klebinho: {
            name: 'Klebinho',
            image: 'https://www.pedigree.com.br/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2401/files/2022-04/hero-icon-Savannah_0.png',
            description: 'Klebinho é um cãozinho de 8 anos que foi abandonado ainda filhote...'
        },
        junin: {
            name: 'Junin',
            image: 'https://www.pedigree.com.br/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2401/files/2023-10/Dog%20image.png',
            description: 'Junin é um cãozinho de 4 anos que foi encontrado abandonado em uma caixa...'
        },
        kiara: {
            name: 'Kiara',
            image: 'https://www.pedigreeadotar.com.br/wp-content/uploads/2023/11/dog-min.png',
            description: 'Kiara é uma cachorrinha amorosa e cheia de energia...'
        }
    };

    // Função para carregar os favoritos salvos no localStorage e atualizar a interface
    function loadFavorites() {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        
        // Limpa o container antes de renderizar os favoritos
        favoritePetsContainer.innerHTML = '';

        // Verifica se há favoritos
        if (favorites.length === 0) {
            favoritePetsContainer.innerHTML = '<p>Você não tem nenhum pet favoritado no momento.</p>';
            return;
        }

        // Exibe os pets favoritados
        favorites.forEach(petId => {
            const petData = petsData[petId]; // Obtém os dados do pet usando o ID
            if (petData) {
                const petDiv = document.createElement('div');
                petDiv.classList.add('pet-container');

                // Cria o conteúdo do pet favoritado
                petDiv.innerHTML = `
                    <div class="pet-info">
                        <h3>${petData.name}</h3>
                        <p>${petData.description}</p>
                        <button class="adopt-btn" onclick="redirectToForm('${petData.name}')">Quero Adotar</button>
                        <button class="remove-btn">Remover</button>
                    </div>
                    <div class="pet-img">
                        <img src="${petData.image}" alt="${petData.name}">
                    </div>
                `;
                
                // Adiciona o pet ao container de favoritos
                favoritePetsContainer.appendChild(petDiv);

                // Adiciona o evento de remoção ao botão "Remover"
                const removeBtn = petDiv.querySelector('.remove-btn');
                removeBtn.addEventListener('click', () => removeFavorite(petId, petDiv));
            }
        });
    }

    // Carrega os favoritos ao iniciar a página
    loadFavorites();
});
