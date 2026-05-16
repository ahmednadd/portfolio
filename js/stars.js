document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".stars-container .item");
  const starPositions = new Map(); // Store fixed X positions

  stars.forEach((star, index) => {
    const fixedLeft = Math.random() * window.innerWidth; // Assign fixed X position
    starPositions.set(star, fixedLeft); // Store for later use

    resetStar(star, index);
    animateStar(star, index);
    blinkStar(star);
  });

  function animateStar(star, index) {
    const duration = Math.random() * 10 + 8; // Slow falling: 8s to 18s
    const fallDistance = window.innerHeight; // Full viewport height
    const fixedLeft = starPositions.get(star); // Fixed X position

    star.style.transition = `opacity ${
      duration / 2
    }s ease-in-out, top ${duration}s linear`;
    star.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity for blinking
    star.style.top = `${fallDistance}px`; // Move star straight down
    star.style.left = `${fixedLeft}px`; // Ensure the star stays in the same column

    // Reset and restart animation after falling
    setTimeout(() => {
      resetStar(star, index);
      setTimeout(() => animateStar(star, index), 100);
    }, duration * 1000);
  }

  function resetStar(star, index) {
    const fixedLeft = starPositions.get(star); // Fixed X position
    const staggeredStart = (index / stars.length) * window.innerHeight; // Staggered start position

    star.style.transition = "none"; // Instantly reset position
    star.style.opacity = Math.random() * 0.5 + 0.5;
    star.style.top = `${-staggeredStart}px`; // Start above viewport
    star.style.left = `${fixedLeft}px`; // Maintain the same column
  }

  function blinkStar(star) {
    setInterval(() => {
      star.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1
    }, Math.random() * 5000 + 1000); // Blink every 1s to 5s randomly
  }
});
