function searchCards() {
    const input = document.getElementById('search').value.toLowerCase();
    const cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const title = card.getElementsByTagName('h2')[0].innerText.toLowerCase();

        if (title.includes(input)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    }
}
