document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('card');
    const cardContainer = document.getElementById('card-container');
    
    // Générer le QR code
    function generateQRCode() {
        const canvas = document.getElementById('qrcode-canvas');
        // Remplacez cette URL par l'URL de votre site GitHub Pages
        const websiteURL = 'https://votrenomutilisateur.github.io/nom-du-depot/';
        
        QRCode.toCanvas(canvas, websiteURL, {
            width: 80,
            margin: 1,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            }
        }, function(error) {
            if (error) console.error(error);
            console.log('QR code generated successfully!');
        });
    }
    
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
    
    // Générer le QR code une fois la page chargée
    generateQRCode();
});
