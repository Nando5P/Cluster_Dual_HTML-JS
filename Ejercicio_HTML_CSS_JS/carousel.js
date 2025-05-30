const images = [
    "Imagenes/portada-1.png",
    "Imagenes/portada-2.png",
    "Imagenes/portada-3.png",
    "Imagenes/portada-4.png",
    "Imagenes/portada-5.png",
    "Imagenes/portada-6.png",
    "Imagenes/portada-7.png",
    "Imagenes/portada-8.png",
    "Imagenes/portada-9.png",
    "Imagenes/portada-10.png",
    "Imagenes/portada-11.png",
    "Imagenes/portada-12.png",
    "Imagenes/portada-13.png",
    "Imagenes/portada-14.png"
];

const carousel = document.getElementById('carousel-3d');
let current = 0;

function renderCarousel() {
    carousel.querySelectorAll('img').forEach(img => img.remove());
    // Solo mostramos la imagen central y las de los lados
    for (let offset = -1; offset <= 1; offset++) {
        let i = (current + offset + images.length) % images.length;
        const img = document.createElement('img');
        img.src = images[i];
        if (offset === 0) img.className = 'active';
        else if (offset === -1) img.className = 'left';
        else if (offset === 1) img.className = 'right';
        carousel.appendChild(img);
    }
}

function next() {
    current = (current + 1) % images.length;
    renderCarousel();
}
function prev() {
    current = (current - 1 + images.length) % images.length;
    renderCarousel();
}

document.getElementById('prev-btn').addEventListener('click', prev);
document.getElementById('next-btn').addEventListener('click', next);

// Inicializar
renderCarousel();