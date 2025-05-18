// Generate Floating Bubbles for Underwater Effect
const bubbleContainer = document.getElementById("bubbles");
const bubbleCount = 30;

for (let i = 0; i < bubbleCount; i++) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  const size = Math.random() * 40 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = Math.random() * 100 + "%";
  const duration = Math.random() * 10 + 5;
  bubble.style.animationDuration = `${duration}s`;
  const delay = Math.random() * 10;
  bubble.style.animationDelay = `${delay}s`;
  bubbleContainer.appendChild(bubble);
}

// Contact Form Submission Handler
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been sent!");
    this.reset();
  });
