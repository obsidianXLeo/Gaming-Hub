/* =========================================
   OBSIDIANX_LEO ULTRA ANIMATIONS
========================================= */

/* CARD 3D EFFECT */

VanillaTilt.init(document.querySelectorAll(".category-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.4,
});

/* HERO TITLE ANIMATION */

gsap.from(".hero h1",{
    y:80,
    opacity:0,
    duration:1.4,
    ease:"power4.out"
});

/* HERO TEXT */

gsap.from(".hero p",{
    y:50,
    opacity:0,
    duration:1.2,
    delay:0.3,
    ease:"power3.out"
});

/* BUTTONS */

gsap.from(".hero-buttons",{
    y:40,
    opacity:0,
    duration:1,
    delay:0.5,
    ease:"power2.out"
});

/* NAVBAR */

gsap.from(".navbar",{
    y:-100,
    opacity:0,
    duration:1,
    ease:"power4.out"
});

/* CATEGORY CARDS */

gsap.from(".category-card",{
    scrollTrigger:".categories-section",
    y:80,
    opacity:0,
    duration:1,
    stagger:0.2,
    ease:"power4.out"
});