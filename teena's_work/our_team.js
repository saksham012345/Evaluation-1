// our_team.js

document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function () {

        card.classList.toggle('flip');

        if (card.classList.contains('flip')) {

            setTimeout(() => {
                card.classList.remove('flip');
            }, 5000);
        }
    });
});
