const searchBar = document.getElementById('searchBar');
const gameCards = document.querySelectorAll('.game-card');

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    gameCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        card.style.display = title.includes(query) ? '' : 'none';
    });
});