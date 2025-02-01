// GSAP Animations
gsap.from("nav", { duration: 1, y: -50, opacity: 0 });
gsap.from(".hero h1", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
gsap.from(".hero p", { duration: 1, y: 50, opacity: 0, delay: 0.8 });
gsap.from(".hero a", { duration: 1, y: 50, opacity: 0, delay: 1 });

// Scroll Animations
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });
});

// Particle Background
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('Particles.js loaded!');
});