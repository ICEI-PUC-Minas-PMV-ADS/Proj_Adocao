function redirectToForm(petName) {
    
    window.location.href = `Quero adotar.html?pet=${petName}`;
}
document.addEventListener('DOMContentLoaded', () => {
    
    const favoriteBtns = document.querySelectorAll('.favorite-btn');

    
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const petId = btn.getAttribute('data-pet-id');
            toggleFavorite(petId);
        });
    });

  
    function toggleFavorite(petId) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        
       
        if (favorites.includes(petId)) {
         
            favorites = favorites.filter(fav => fav !== petId);
        } else {
          
            favorites.push(petId);
        }

       
        localStorage.setItem('favorites', JSON.stringify(favorites));

        
        updateFavoriteButton(petId);
    }

    
    function updateFavoriteButton(petId) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favoriteBtns.forEach(btn => {
            if (btn.getAttribute('data-pet-id') === petId) {
                if (favorites.includes(petId)) {
                    btn.innerHTML = '⭐ Favoritado';
                    btn.style.color = 'yellow'; 
                } else {
                    btn.innerHTML = '⭐';
                    btn.style.color = ''; /
                }
            }
        });
    }

    
    function loadFavoriteButtons() {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.forEach(petId => {
            updateFavoriteButton(petId);
        });
    }

    
    loadFavoriteButtons();

  
    function redirectToForm(petName) {
        
        window.location.href = `Quero adotar.html?pet=${petName}`;
    }
});




