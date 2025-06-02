document.addEventListener("DOMContentLoaded", function () {
    // Navbar elements
    const navbar = document.querySelector(".navbar");
    const heroSectionHeight = document.querySelector(".hero-section").offsetHeight;
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarBrand = document.querySelector(".navbar-brand");
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Function to close navbar
    const closeNavbar = () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    };

    // Close navbar when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeNavbar);
    });

    // Close navbar when clicking navbar brand
    navbarBrand.addEventListener('click', closeNavbar);

    // Close navbar when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideNavbar = navbar.contains(event.target);
        const isNavbarExpanded = navbarCollapse.classList.contains('show');
        
        // Only close if navbar is expanded and click is outside navbar
        if (!isClickInsideNavbar && isNavbarExpanded) {
            closeNavbar();
        }
    });

    // Navbar scroll effect
    window.addEventListener("scroll", function () {
        if (window.scrollY > heroSectionHeight - 60) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Create custom alert element
    const createCustomAlert = (message, isError = false) => {
        const alertBox = document.createElement('div');
        alertBox.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.9);
            border: 2px solid ${isError ? '#ff4444' : '#0ff'};
            color: ${isError ? '#ff4444' : '#0ff'};
            padding: 20px 40px;
            border-radius: 10px;
            font-size: 1.2rem;
            text-align: center;
            z-index: 1000;
            backdrop-filter: blur(5px);
            animation: fadeIn 0.3s ease-in;
        `;
        alertBox.textContent = message;
        document.body.appendChild(alertBox);

        setTimeout(() => {
            alertBox.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => alertBox.remove(), 300);
        }, 2000);
    };

    // Contact form submission handler
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const formData = {
            name: this.elements.name.value,
            email: this.elements.email.value,
            message: this.elements.message.value
        };

        try {
            const response = await fetch(this.action, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                createCustomAlert('Thank you for your message!');
                this.reset();
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            createCustomAlert('Failed to send message. Please try again.', true);
        }
    });

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Project Modal
    const modal = document.getElementById('projectModal');
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
    const closeModal = document.querySelector('.close-modal');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project');
            // Here you can load project details dynamically
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
    from { opacity: 0; transform: translate(-50%, -40%); }
    to { opacity: 1; transform: translate(-50%, -50%); }
}

@keyframes fadeOut {
    from { opacity: 1; transform: translate(-50%, -50%); }
    to { opacity: 0; transform: translate(-50%, -60%); }
}
`;
document.head.appendChild(style);