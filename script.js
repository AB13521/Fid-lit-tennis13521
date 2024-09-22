document.getElementById('checkInButton').addEventListener('click', () => {
    const userId = document.getElementById('userId').value;
    if (userId) {
        fetch('/api/checkin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = data.message;
            startCountdown(); // Démarrer le compte à rebours après le pointage
        })
        .catch(error => console.error('Erreur:', error));
    } else {
        alert('Veuillez entrer un identifiant utilisateur');
    }
});

document.getElementById('checkOutButton').addEventListener('click', () => {
    const userId = document.getElementById('userId').value;
    if (userId) {
        fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = data.message;
            startCountdown(); // Démarrer le compte à rebours après le pointage
        })
        .catch(error => console.error('Erreur:', error));
    } else {
        alert('Veuillez entrer un identifiant utilisateur');
    }
});

function startCountdown() {
    let countdownElement = document.getElementById('countdown');
    let timeLeft = 10;

    // Réinitialiser le message
    document.getElementById('message').textContent = '';

    // Compte à rebours de 10 à 0
    const interval = setInterval(() => {
        countdownElement.textContent = timeLeft;
        timeLeft--;

        // Quand le compte atteint 0
        if (timeLeft < 0) {
            clearInterval(interval);
            countdownElement.textContent = "Terminé!";
            document.getElementById('message').textContent = "Compte à rebours terminé!";
        }
    }, 1000);  // Mise à jour toutes les secondes
}

