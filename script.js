document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const heroSectionHeight = document.querySelector(".hero-section").offsetHeight;

    window.addEventListener("scroll", function () {
        if (window.scrollY > heroSectionHeight - 60) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            alert('Thanks for the feedback!');
            this.reset(); 
        }
    })
    .catch(error => console.error('Error:', error)); // Optional error handling
});
