document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('card');
    const cardContainer = document.getElementById('card-container');
    
    // Animation de la carte au chargement
    setTimeout(() => {
        card.classList.add('flipped');
    }, 1000);
    
    // Retournement de la carte au clic
    cardContainer.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
    
    // Retournement de la carte avec la touche espace
    cardContainer.addEventListener('keydown', function(e) {
        if (e.code === 'Space' || e.key === 'Enter') {
            e.preventDefault();
            card.classList.toggle('flipped');
        }
    });
    
    // Animation automatique toutes les 8 secondes
    setInterval(() => {
        card.classList.toggle('flipped');
    }, 8000);
    
    // Ouvrir les liens sociaux dans un nouvel onglet
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});