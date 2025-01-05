// Testimonial Slider
const testimonials = [
    {
        name: "John Doe",
        text: "Lost 30 pounds in 3 months! The trainers here are amazing!",
        image: "img/testimonial1.jpg"
    },
    {
        name: "Jane Smith",
        text: "Best gym I've ever been to. The 24/7 access is perfect for my schedule.",
        image: "img/testimonial2.jpg"
    },
    // Add more testimonials
];

function createTestimonialSlider() {
    const slider = document.querySelector('.testimonial-slider');
    testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.classList.add('testimonial-slide');
        slide.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.name}">
            <p>${testimonial.text}</p>
            <h4>${testimonial.name}</h4>
        `;
        slider.appendChild(slide);
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.getElementById('membershipForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your interest! We will contact you soon.');
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createTestimonialSlider();
});

// Add scroll animation for features
const featureCards = document.querySelectorAll('.feature-card');
window.addEventListener('scroll', () => {
    featureCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });

    // Add hover effect to plan cards
    document.querySelectorAll('.plan-card').forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}); 