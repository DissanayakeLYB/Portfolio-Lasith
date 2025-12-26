// DOM Elements
const navbar = document.getElementById("navbar");
const navbarToggler = document.getElementById("navbar-toggler");
const navbarNav = document.querySelector(".navbar-nav");

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
navbarToggler.addEventListener("click", () => {
  navbarNav.classList.toggle("show");
  navbarToggler.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navbarNav.classList.remove("show");
    navbarToggler.classList.remove("active");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target)) {
    navbarNav.classList.remove("show");
    navbarToggler.classList.remove("active");
  }
});

// Close mobile menu on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navbarNav.classList.remove("show");
    navbarToggler.classList.remove("active");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Project filtering functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        card.style.display = "flex";
        card.style.animation = "fadeInUp 0.6s ease-out";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(
    ".skill-category, .project-card, .about-content, .contact-container"
  );

  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });
});

// Form submission handling
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    alert("Thank you for your message! I'll get back to you soon.");
    contactForm.reset();
  });
}

// Skill item hover effects
document.querySelectorAll(".skill-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.02)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1)";
  });
});

// Project card hover effects
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  // Add any additional initialization code here
  console.log("Portfolio website loaded successfully!");

  // Initialize project filters to show all projects by default
  const allProjects = document.querySelectorAll(".project-card");
  allProjects.forEach((project) => {
    project.style.display = "flex";
  });
});
