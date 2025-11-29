// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  });

  // Typed.js initialization
  if (document.getElementById('typed')) {
    const typed = new Typed('#typed', {
      strings: ['Software Engineer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('mainNav');
  
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', function() {
      nav.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('bi-list');
        icon.classList.toggle('bi-x');
      }
    });

    // Close menu when clicking on a link
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('bi-list');
          icon.classList.remove('bi-x');
        }
      });
    });
  }

  // Tab-based section switching
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const nameLink = document.querySelector('.name[data-section]');
  const backToTopBtn = document.getElementById('backToTop');
  const contentSections = document.querySelectorAll('.content-section');

  function switchSection(sectionId) {
    // Remove active class from all nav links and sections
    navLinks.forEach(l => l.classList.remove('active'));
    contentSections.forEach(s => s.classList.remove('active'));
    
    // Add active class to corresponding nav link
    const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
    
    // Show corresponding section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('active');
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-section');
      switchSection(sectionId);
      
      // Close mobile menu after selecting an option
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
        const icon = mobileToggle?.querySelector('i');
        if (icon) {
          icon.classList.add('bi-list');
          icon.classList.remove('bi-x');
        }
      }
    });
  });

  // Name link also switches to hero
  if (nameLink) {
    nameLink.addEventListener('click', function(e) {
      e.preventDefault();
      switchSection('hero');
    });
  }

  // Back to top button
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      switchSection('hero');
    });
  }

  // Initialize: Show hero section by default
  switchSection('hero');

  // Back to top button visibility
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });
  }

  // Portfolio filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filterValue === '*' || item.classList.contains(filterValue.replace('.', ''))) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.5s ease-in';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Portfolio links now point directly to GitHub repositories
  // No additional JavaScript handling needed - links will open in new tab

  // Skills progress bar animation
  const skillsGrid = document.getElementById('skillsGrid');
  const skillsSection = document.getElementById('skills');
  
  function animateProgressBars() {
    if (skillsGrid) {
      const progressBars = skillsGrid.querySelectorAll('[data-value]');
      progressBars.forEach((bar) => {
        const value = bar.getAttribute('data-value');
        if (value && (bar.style.width === '0%' || !bar.style.width || bar.style.width === '')) {
          setTimeout(() => {
            bar.style.width = value + '%';
          }, 100);
        }
      });
    }
  }
  
  if (skillsGrid) {
    // Use IntersectionObserver for scroll-based animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgressBars();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(skillsGrid);
    
    // Also trigger animation when skills section is shown via tab switching
    if (skillsSection) {
      const sectionObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (skillsSection.classList.contains('active')) {
              // Reset and animate when section becomes active
              const progressBars = skillsGrid.querySelectorAll('[data-value]');
              progressBars.forEach((bar) => {
                bar.style.width = '0%';
              });
              setTimeout(() => {
                animateProgressBars();
              }, 200);
            }
          }
        });
      });
      
      sectionObserver.observe(skillsSection, {
        attributes: true,
        attributeFilter: ['class']
      });
    }
  }

  // Image Modal functionality
  const profileImage = document.getElementById('profileImage');
  const imageModal = document.getElementById('imageModal');
  const imageModalImg = document.getElementById('imageModalImg');
  const imageModalClose = document.getElementById('imageModalClose');

  if (profileImage && imageModal && imageModalImg && imageModalClose) {
    // Open modal when profile image is clicked
    profileImage.addEventListener('click', function() {
      imageModalImg.src = this.src;
      imageModal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close modal when close button is clicked
    imageModalClose.addEventListener('click', function() {
      imageModal.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    });

    // Close modal when clicking outside the image
    imageModal.addEventListener('click', function(e) {
      if (e.target === imageModal) {
        imageModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && imageModal.classList.contains('active')) {
        imageModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
      }
    });
  }
});
