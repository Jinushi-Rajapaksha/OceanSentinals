      // Scroll Progress Indicator
      window.addEventListener('scroll', () => {
        const scrollProgress = document.getElementById('scrollProgress');
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
      });

      // Section Indicator Activation
      window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.content-section');
        const links = document.querySelectorAll('.section-indicator a');
        
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            links.forEach(link => link.classList.remove('active'));
            links[index].classList.add('active');
          }
        });
      });

      // Bubble Animation
      function createBubbles() {
        const bubbles = document.getElementById('bubbles');
        for (let i = 0; i < 20; i++) {
          const bubble = document.createElement('div');
          bubble.className = 'bubble';
          bubble.style.left = Math.random() * 100 + '%';
          bubble.style.width = bubble.style.height = Math.random() * 20 + 5 + 'px';
          bubble.style.animationDelay = Math.random() * 5 + 's';
          bubbles.appendChild(bubble);
        }
      }
      createBubbles();

      // Scroll Animation for Sections
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.content-section').forEach((section) => {
        observer.observe(section);
      });
  