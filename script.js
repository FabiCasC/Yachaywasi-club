// Inicialización de AOS
AOS.init({
    duration: 1000,
    once: true
});

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inicialización de GSAP y ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animación de la barra de navegación
gsap.to(".navbar", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        toggleActions: "play none none reverse"
    },
    backgroundColor: "rgba(230, 57, 70, 0.9)",
    duration: 0.3
});

// Animación del contenido del hero
gsap.from(".hero-content", {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power3.out"
});

// Animación de las tarjetas
gsap.utils.toArray('.card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom-=100px",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: i * 0.1
    });
});

// Animación de la sección de eventos
gsap.from("#events", {
    scrollTrigger: {
        trigger: "#events",
        start: "top center",
        end: "bottom center",
        scrub: 1
    },
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    duration: 1
});

// Efecto parallax para los fondos
gsap.to(".parallax-bg", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
        trigger: ".parallax-bg",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Carrusel Impresionante
const carousel = document.querySelector('.carousel-container');
const items = carousel.querySelectorAll('.carousel-item');
const prevBtn = carousel.querySelector('.carousel-control.prev');
const nextBtn = carousel.querySelector('.carousel-control.next');

let currentIndex = 0;

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next');
        if (index === currentIndex) {
            item.classList.add('active');
        } else if (index === (currentIndex - 1 + items.length) % items.length) {
            item.classList.add('prev');
        } else if (index === (currentIndex + 1) % items.length) {
            item.classList.add('next');
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

// Inicialización del efecto de partículas
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});
