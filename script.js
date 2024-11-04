let currentLanguage = 'fr'; // Langue initiale
let isDarkMode = localStorage.getItem('isDarkMode') === 'true'; // Vérifier l'état du mode sombre dans localStorage

const toggleDarkMode = () => {
    isDarkMode = !isDarkMode; // Inverser l'état du mode sombre
    document.body.classList.toggle('dark-mode', isDarkMode); // Ajouter ou retirer la classe dark-mode
    localStorage.setItem('isDarkMode', isDarkMode); // Sauvegarder l'état du mode sombre dans localStorage

    const darkModeButton = document.getElementById('toggle-dark-mode');
    if (darkModeButton) { // Vérifier si le bouton existe avant de mettre à jour son texte
        darkModeButton.innerText = isDarkMode ? 'Mode Clair' : 'Mode Sombre'; // Mettre à jour le texte du bouton
    }
};

// Appliquer le mode sombre si nécessaire lors du chargement de la page
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    const darkModeButton = document.getElementById('toggle-dark-mode');
    if (darkModeButton) {
        darkModeButton.innerText = 'Mode Clair';
    }
}

// Événements pour vérifier les réponses
const checkAnswersButton = document.getElementById('check-answers');
if (checkAnswersButton) {
    checkAnswersButton.addEventListener('click', () => {
        const result = document.getElementById('result');
        const answers = {
            q1: 'b', // Réponse correcte pour la question 1
            q2: 'b'  // Réponse correcte pour la question 2
        };
        let score = 0;

        // Vérifier les réponses
        const q1Answer = document.querySelector('input[name="q1"]:checked');
        const q2Answer = document.querySelector('input[name="q2"]:checked');

        if (q1Answer && q1Answer.value === answers.q1) {
            score++;
        }
        if (q2Answer && q2Answer.value === answers.q2) {
            score++;
        }

        // Afficher le résultat
        result.innerText = `Vous avez obtenu ${score} sur 2.`;
    });
}

// Événement pour réinitialiser le quiz
const resetQuizButton = document.getElementById('reset-quiz');
if (resetQuizButton) {
    resetQuizButton.addEventListener('click', () => {
        document.getElementById('quiz-form').reset();
        document.getElementById('result').innerText = '';
    });
}

// Événement pour le mode sombre
const darkModeButton = document.getElementById('toggle-dark-mode');
if (darkModeButton) { // Vérifiez si le bouton existe sur la page
    darkModeButton.addEventListener('click', toggleDarkMode);
    darkModeButton.innerText = isDarkMode ? 'Mode Clair' : 'Mode Sombre'; // Mettre à jour le texte initial
}