// ===== DOWNLOAD LINKS ===== 
const downloadLinks = {
    windows: 'https://github.com/Jack-Masson/Camping_Horizon/releases/download/Game/CampingHorizonLauncher.exe',
    linux: '#',
    macos: '#'
};

// ===== MOBILE MENU TOGGLE ===== 
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
});

// ===== DOWNLOAD BUTTONS ===== 
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const os = this.getAttribute('data-os');
            handleDownload(os);
        });
    });

    const downloadOptions = document.querySelectorAll('.btn-download');
    downloadOptions.forEach(button => {
        button.addEventListener('click', function() {
            const os = this.getAttribute('data-os');
            handleDownload(os);
        });
    });
});

function handleDownload(os) {
    if (downloadLinks[os]) {
        window.open(downloadLinks[os], '_blank');
    } else {
        console.error('Invalid operating system:', os);
    }
}

// ===== PLAY NOW BUTTONS ===== 
document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.btn-play');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'https://github.com/Jack-Masson/Camping_Horizon/releases/download/Game/CampingHorizonLauncher.exe';
        });
    });
});

// ===== SMOOTH SCROLL BEHAVIOR ===== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== FEATURE CARD ANIMATION ===== 
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// ===== SCROLL ANIMATIONS ===== 
document.addEventListener('DOMContentLoaded', function() {
    const animatableElements = document.querySelectorAll('.gallery-item, .stage');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    animatableElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== NAVBAR SCROLL EFFECT ===== 
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    if (lastScrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ===== BUTTON RIPPLE EFFECT ===== 
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-play, .download-btn, .btn-download, .btn-submit');
    
    buttons.forEach(button => {
        button.addEventListener('mousedown', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.borderRadius = '50%';
            ripple.style.left = (x - 10) + 'px';
            ripple.style.top = (y - 10) + 'px';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.opacity = '0.5';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

if (!document.querySelector('style[data-ripple]')) {
    const style = document.createElement('style');
    style.setAttribute('data-ripple', 'true');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===== ACCESSIBILITY: FOCUS VISIBLE ===== 
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button, a');
    
    buttons.forEach(button => {
        button.addEventListener('focus', function() {
            this.style.outline = '2px solid #d4a574';
            this.style.outlineOffset = '2px';
        });
        
        button.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// ===== PERFORMANCE: LAZY LOAD IMAGES ===== 
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// ===== UTILITY: CLOSE MOBILE MENU ON OUTSIDE CLICK ===== 
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    
    if (mobileMenu && mobileMenuToggle) {
        if (!event.target.closest('.navbar')) {
            mobileMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    }
});

// ===== CONTACT FORM - BACKEND PHP ===== 
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initialisation du formulaire de contact...');
    
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (!contactForm) {
        console.error('Formulaire de contact non trouvé !');
        return;
    }
    
    if (!formMessage) {
        console.error('Élément formMessage non trouvé !');
        return;
    }
    
    console.log('✅ Formulaire et message trouvés');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Formulaire soumis');
        
        // Récupérer les données du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        console.log('Données collectées:', { name, email, subject });
        
        // Validation locale rapide
        if (!name || !email || !subject || !message) {
            showMessage('❌ Veuillez remplir tous les champs', 'error');
            return;
        }
        
        const formData = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };
        
        // Désactiver le bouton de soumission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = '⏳ Envoi en cours...';
        
        console.log('Envoi de la requête...');
        
        // Envoyer au backend PHP
        fetch('send-email.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            console.log('Réponse reçue:', response.status);
            return response.json();
        })
        .then(data => {
            console.log('Données JSON reçues:', data);
            
            if (data.success) {
                showMessage('✅ ' + data.message, 'success');
                contactForm.reset();
                console.log('✅ Message envoyé avec succès');
            } else {
                showMessage('❌ ' + data.message, 'error');
                console.error('❌ Erreur serveur:', data.message);
            }
            
            // Réactiver le bouton
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        })
        .catch(error => {
            console.error('❌ Erreur réseau:', error);
            showMessage('❌ Erreur de connexion. Vérifiez que send-email.php existe.', 'error');
            
            // Réactiver le bouton
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        });
    });
    
    // Fonction pour afficher les messages
    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.style.display = 'block';
        
        if (type === 'success') {
            formMessage.style.color = '#4CAF50';
            formMessage.style.backgroundColor = '#f1f8f4';
            formMessage.style.padding = '15px';
            formMessage.style.borderRadius = '5px';
            formMessage.style.marginTop = '15px';
        } else if (type === 'error') {
            formMessage.style.color = '#f44336';
            formMessage.style.backgroundColor = '#fef5f5';
            formMessage.style.padding = '15px';
            formMessage.style.borderRadius = '5px';
            formMessage.style.marginTop = '15px';
        }
        
        console.log('Message affiché:', text);
        
        // Masquer le message après 6 secondes
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 6000);
    }
});

// ===== VERSION INFO ===== 
console.log('Camping Horizon - Version 1.0');
console.log('Jeu indépendant - 2026');
console.log('✅ Scripts chargés avec succès');
