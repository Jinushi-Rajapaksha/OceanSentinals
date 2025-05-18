function setActiveNavLink() {
    // Get the current page's filename
    const path = window.location.pathname;
    const page = path.split("/").pop();

    // Get all navbar links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Loop through the links and add 'active' class to the matching one
    navLinks.forEach(link => {
      // Extract the href without any query parameters or hashes
      const linkPath = link.getAttribute('href').split('?')[0].split('#')[0];
      if (linkPath === page) {
        link.classList.add('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', setActiveNavLink);


  