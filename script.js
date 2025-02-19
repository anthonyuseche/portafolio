// Project data
const projects = [
    {
        title: "E-commerce Platform",
        description: "Una plataforma de comercio electrónico completa con gestión de inventario en tiempo real, carrito de compras y procesamiento de pagos seguro.",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        technologies: [
            "React.js",
            "Node.js",
            "MongoDB",
            "Express",
            "Stripe API",
            "Redux",
            "Material-UI"
        ],
        features: [
            "Sistema de autenticación seguro",
            "Gestión de inventario en tiempo real",
            "Procesamiento de pagos con Stripe",
            "Panel de administración",
            "Sistema de reseñas y calificaciones",
            "Optimización SEO"
        ],
        demoUrl: "https://demo.example.com",
        githubUrl: "https://github.com/example"
    },
    {
        title: "Educational Platform",
        description: "Plataforma de aprendizaje en línea con sistema de gestión de contenido, streaming de video y seguimiento del progreso del estudiante.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        technologies: [
            "Vue.js",
            "Django",
            "PostgreSQL",
            "AWS S3",
            "Redis",
            "Docker",
            "Nginx"
        ],
        features: [
            "Sistema de cursos interactivos",
            "Streaming de video adaptativo",
            "Foros de discusión",
            "Sistema de evaluación",
            "Certificados automáticos",
            "Analytics avanzados"
        ],
        demoUrl: "https://demo.example.com",
        githubUrl: "https://github.com/example"
    },
    {
        title: "Healthcare App",
        description: "Aplicación de telemedicina que permite consultas médicas remotas, gestión de historiales clínicos y seguimiento de tratamientos.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        technologies: [
            "React Native",
            "Firebase",
            "Node.js",
            "MongoDB",
            "WebRTC",
            "Socket.io",
            "Jest"
        ],
        features: [
            "Videoconsultas en tiempo real",
            "Historial médico digital",
            "Recordatorios de medicamentos",
            "Chat médico-paciente",
            "Recetas digitales",
            "Integración con laboratorios"
        ],
        demoUrl: "https://demo.example.com",
        githubUrl: "https://github.com/example"
    }
];

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animated title
const title = document.querySelector('.title');
const cursor = document.querySelector('.cursor');
const text = title.textContent;
title.textContent = '';
let charIndex = 0;

function typeWriter() {
    if (charIndex < text.length) {
        title.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    } else {
        cursor.classList.add('finished');
    }
}

// Start animation when title is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(typeWriter, 500);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(title);

// Modal functionality
const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('project-modal');

function openProjectModal(index) {
    const project = projects[index];
    
    // Update modal content
    modal.querySelector('.modal-image').src = project.image;
    modal.querySelector('.modal-image').alt = project.title;
    modal.querySelector('.modal-title').textContent = project.title;
    modal.querySelector('.modal-description').textContent = project.description;
    
    // Update technologies
    const techList = modal.querySelector('.tech-list');
    techList.innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join('');
    
    // Update features
    const featuresList = modal.querySelector('.features-list');
    featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
    
    // Update links
    const demoLink = modal.querySelector('.demo-link');
    const githubLink = modal.querySelector('.github-link');
    demoLink.href = project.demoUrl;
    githubLink.href = project.githubUrl;
    
    // Show modal
    modalOverlay.classList.add('active');
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeModal() {
    modalOverlay.classList.remove('active');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open'); }

// Scroll functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToContact() {
    const footer = document.querySelector('.footer');
    footer.scrollIntoView({ behavior: 'smooth' });
}

function scrollToPortfolio() {
    const portfolio = document.getElementById('portfolio');
    portfolio.scrollIntoView({ behavior: 'smooth' });
}

// Button hover effects
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = '';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});

// Close modal when clicking outside
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});