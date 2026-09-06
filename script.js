/**
 * Camping Horizon - Script Principal
 * Version 1.0
 * Features: Menu mobile, Téléchargements, Animations, Contact Formspree
 */

// ===== CONFIG =====
const CONFIG = {
	formspreeId: 'xwlknydw',
	downloadLinks: {
		windows: 'https://github.com/Jack-Masson/Camping_Horizon/releases/download/Game/CampingHorizonLauncher.exe',
		linux: '#',
		macos: '#'
	}
};

/**
 * ===== UTILITY FUNCTIONS =====
 */

/**
 * Get Formspree URL
 */
function getFormspreeUrl() {
	return `https://formspree.io/f/${CONFIG.formspreeId}`;
}

/**
 * ===== INITIALIZATION =====
 */
document.addEventListener('DOMContentLoaded', function() {
	initMobileMenu();
	initDownloadButtons();
	initPlayButtons();
	initContactForm();
	initScrollAnimations();
	initNavbarEffect();
	initAccessibility();
});

/**
 * ===== MOBILE MENU =====
 */
function initMobileMenu() {
	const toggle = document.getElementById('mobileMenuToggle');
	const menu = document.getElementById('mobileMenu');

	if (!toggle || !menu) return;

	toggle.addEventListener('click', function() {
		menu.classList.toggle('active');
		toggle.classList.toggle('active');
	});

	// Fermer le menu au clic sur un lien
	menu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', function() {
			menu.classList.remove('active');
			toggle.classList.remove('active');
		});
	});

	// Fermer le menu au clic extérieur
	document.addEventListener('click', function(event) {
		if (!event.target.closest('.navbar')) {
			menu.classList.remove('active');
			toggle.classList.remove('active');
		}
	});
}

/**
 * ===== DOWNLOAD BUTTONS =====
 */
function initDownloadButtons() {
	const downloadButtons = document.querySelectorAll('.download-btn, .btn-download');

	downloadButtons.forEach(button => {
		button.addEventListener('click', function() {
			const os = this.getAttribute('data-os');
			handleDownload(os);
		});
	});
}

function handleDownload(os) {
	const url = CONFIG.downloadLinks[os];

	if (url && url !== '#') {
		window.open(url, '_blank');
	} else {
		console.warn(`Téléchargement non disponible pour: ${os}`);
	}
}

/**
 * ===== PLAY BUTTONS =====
 */
function initPlayButtons() {
	const playButtons = document.querySelectorAll('.btn-play');

	playButtons.forEach(button => {
		button.addEventListener('click', function() {
			handleDownload('windows');
		});
	});
}

/**
 * ===== CONTACT FORM - FORMSPREE =====
 */
function initContactForm() {
	const form = document.getElementById('contactForm');

	if (!form) return;

	form.addEventListener('submit', async function(e) {
		e.preventDefault();

		const submitButton = form.querySelector('button[type="submit"]');
		const messageDiv = document.getElementById('formMessage');
		const originalButtonText = submitButton.textContent;

		// Désactiver le bouton
		submitButton.disabled = true;
		submitButton.textContent = '⏳ Envoi...';

		try {
			const formData = new FormData(form);

			const response = await fetch(getFormspreeUrl(), {
				method: 'POST',
				body: formData,
				headers: {
					'Accept': 'application/json'
				}
			});

			if (response.ok) {
				// Succès
				showFormMessage('✅ Message envoyé avec succès !', 'success');
				submitButton.textContent = '✓ Envoyé';
				form.reset();

				// Restaurer après 3 secondes
				setTimeout(() => {
					submitButton.disabled = false;
					submitButton.textContent = originalButtonText;
					messageDiv.textContent = '';
				}, 3000);

				console.log('✅ Message envoyé');
			} else {
				throw new Error('Erreur serveur');
			}
		} catch (error) {
			// Erreur
			showFormMessage('❌ Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
			submitButton.disabled = false;
			submitButton.textContent = originalButtonText;
			console.error('Erreur:', error);
		}
	});
}

/**
 * Afficher un message du formulaire
 */
function showFormMessage(text, type) {
	const messageDiv = document.getElementById('formMessage');

	messageDiv.textContent = text;
	messageDiv.className = `form-message ${type}`;

	// Masquer après 5 secondes
	setTimeout(() => {
		messageDiv.textContent = '';
		messageDiv.className = 'form-message';
	}, 5000);
}

/**
 * ===== SCROLL ANIMATIONS =====
 */
function initScrollAnimations() {
	// Feature cards
	const featureCards = document.querySelectorAll('.feature-card');

	const cardObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = '1';
					entry.target.style.transform = 'translateY(0)';
				}
			});
		},
		{ threshold: 0.1 }
	);

	featureCards.forEach(card => {
		card.style.opacity = '0';
		card.style.transform = 'translateY(20px)';
		card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
		cardObserver.observe(card);
	});

	// Gallery items & stages
	const animatableElements = document.querySelectorAll('.gallery-item, .stage');

	const elementObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = '1';
					entry.target.style.transform = 'translateY(0)';
					elementObserver.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.1,
			rootMargin: '0px 0px -100px 0px'
		}
	);

	animatableElements.forEach(el => {
		el.style.opacity = '0';
		el.style.transform = 'translateY(20px)';
		el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
		elementObserver.observe(el);
	});
}

/**
 * ===== NAVBAR SCROLL EFFECT =====
 */
function initNavbarEffect() {
	const navbar = document.querySelector('.navbar');

	if (!navbar) return;

	window.addEventListener('scroll', function() {
		if (window.scrollY > 50) {
			navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
		} else {
			navbar.style.boxShadow = 'none';
		}
	});
}

/**
 * ===== SMOOTH SCROLL LINKS =====
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		const href = this.getAttribute('href');

		if (href === '#') return;

		e.preventDefault();

		const target = document.querySelector(href);

		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
});

/**
 * ===== ACCESSIBILITY =====
 */
function initAccessibility() {
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
}

/**
 * ===== RIPPLE EFFECT =====
 */
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

			this.style.position = 'relative';
			this.style.overflow = 'hidden';
			this.appendChild(ripple);

			setTimeout(() => ripple.remove(), 600);
		});
	});

	// Ajouter l'animation ripple au CSS si elle n'existe pas
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
});

/**
 * ===== LOGGER =====
 */
console.log('%c🏕️ Camping Horizon - Version 1.0', 'font-size: 16px; font-weight: bold; color: #d4a574;');
console.log('Jeu indépendant - 2026');
console.log('✅ Scripts chargés avec succès');
