const text = "SiteMap";
let index = 0; // to keep track of the current character

function typeWriter() {
   // Clear the heading before starting the effect
   if (index === 0) {
    document.getElementById("typewriter").textContent = "";
  }
  
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 300);
  }
}

// Start the typewriter effect once the window loads
window.onload = typeWriter;
