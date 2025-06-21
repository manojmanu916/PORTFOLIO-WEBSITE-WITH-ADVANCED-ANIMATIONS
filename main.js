/* js/main.js */
gsap.registerPlugin(ScrollTrigger);

gsap.from('.title', {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: 'power2.out'
});

gsap.from('.tagline', {
  duration: 1,
  y: 50,
  opacity: 0,
  delay: 0.5,
  ease: 'power2.out'
});

gsap.utils.toArray('section').forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
});

  document.querySelectorAll('.circle').forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    circle.style.setProperty('--percent', `${percent * 3.6}deg`);
  });
