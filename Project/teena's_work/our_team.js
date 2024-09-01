// our_team.js

document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function () {
        // Toggle the flip state
        card.classList.toggle('flip');

        // Check if the card is currently flipped
        if (card.classList.contains('flip')) {
            // Set a timeout to flip the card back after 5 seconds
            setTimeout(() => {
                card.classList.remove('flip');
            }, 5000);
        }
    });
});
