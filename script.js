// ============================================
// JAVASCRIPT PARA GALERÍA DE AVES CON SONIDO
// ============================================

// Almacenamos el audio actual que se está reproduciendo
let currentAudio = null;

// Seleccionamos todas las tarjetas de aves
const birdCards = document.querySelectorAll('.bird-card');

birdCards.forEach(card => {
    card.addEventListener('click', function() {
        // Obtenemos el nombre del archivo de sonido del atributo data-sound
        const soundFile = this.getAttribute('data-sound');
        
        // Si hay un audio reproduciéndose, lo detenemos
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        
        // Creamos y reproducimos el nuevo audio
        // IMPORTANTE: Reemplaza 'ruta-a-tus-sonidos/' con la ruta donde guardes tus archivos de audio
       currentAudio = new Audio(soundFile);
        currentAudio.play().catch(err => {
            console.log('Error al reproducir el sonido:', err);
            alert('No se pudo reproducir el sonido. Asegúrate de que el archivo existe.');
        });

        // Efecto visual al hacer clic
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// ============================================
// JAVASCRIPT PARA CARRUSEL DE AUTORES
// ============================================

let currentPosition = 0;
const carouselWrapper = document.getElementById('carouselWrapper');
const authorCards = document.querySelectorAll('.author-card');
const totalCards = authorCards.length;

function moveCarousel(direction) {
    // Calculamos la nueva posición
    currentPosition += direction;
    
    // Limitamos el movimiento para no salirnos del rango
    if (currentPosition < 0) {
        currentPosition = totalCards - 1;
    } else if (currentPosition >= totalCards) {
        currentPosition = 0;
    }
    
    // Aplicamos la transformación (cada tarjeta ocupa el 100% del ancho)
    const translateValue = -currentPosition * 100;
    carouselWrapper.style.transform = `translateX(${translateValue}%)`;
}

// ============================================
// RESPONSIVE: Ajustar carrusel en pantallas pequeñas
// ============================================

window.addEventListener('resize', function() {
    // Mantener la posición actual al cambiar tamaño
    const translateValue = -currentPosition * 100;
    carouselWrapper.style.transform = `translateX(${translateValue}%)`;
});

// ============================================
// RESPONSIVE: Ajustar carrusel en pantallas pequeñas
// ============================================

window.addEventListener('resize', function() {
    // Reiniciar posición del carrusel al cambiar tamaño de ventana
    currentPosition = 0;
    carouselWrapper.style.transform = `translateX(0px)`;
});

// ============================================
// SMOOTH SCROLL (opcional, para mejorar navegación)
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});