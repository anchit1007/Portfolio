/**
 * ============================================================================
 * ANCHIT | PERSONAL DEVELOPER PORTFOLIO
 * Main JavaScript Controller
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Elements Cache
     -------------------------------------------------------------------------- */
  const header = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const openProjectModalBtn = document.getElementById('openProjectModal');
  const projectModal = document.getElementById('projectModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalCloseAction = document.getElementById('modalCloseAction');

  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const toastContainer = document.getElementById('toastContainer');
  const backToTopBtn = document.getElementById('backToTop');
  const currentYearSpan = document.getElementById('currentYear');

  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  /* --------------------------------------------------------------------------
     2. Dynamic Year in Footer
     -------------------------------------------------------------------------- */
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  /* --------------------------------------------------------------------------
     3. Navbar Scroll Elevation Effect
     -------------------------------------------------------------------------- */
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  /* --------------------------------------------------------------------------
     4. Mobile Navigation Drawer Toggle
     -------------------------------------------------------------------------- */
  const toggleMobileNav = (state) => {
    const shouldOpen = typeof state === 'boolean' ? state : !navLinks.classList.contains('open');
    navLinks.classList.toggle('open', shouldOpen);
    navToggle.classList.toggle('open', shouldOpen);
    navBackdrop.classList.toggle('open', shouldOpen);
    navToggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  };

  if (navToggle && navLinks && navBackdrop) {
    navToggle.addEventListener('click', () => toggleMobileNav());
    navBackdrop.addEventListener('click', () => toggleMobileNav(false));

    // Close mobile nav when clicking any link
    navLinkItems.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
          toggleMobileNav(false);
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. Scrollspy (Active Navigation Link Highlighting)
     -------------------------------------------------------------------------- */
  const updateActiveNavLink = () => {
    const scrollPosition = window.scrollY + 120; // Offset for navbar

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinkItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  /* --------------------------------------------------------------------------
     6. Smooth Scrolling for Internal Links
     -------------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /* --------------------------------------------------------------------------
     7. Back to Top Button
     -------------------------------------------------------------------------- */
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     8. Featured Project Modal (SIH 2026 Details)
     -------------------------------------------------------------------------- */
  let lastFocusedElement = null;

  const openModal = () => {
    if (!projectModal) return;
    lastFocusedElement = document.activeElement;
    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus the close button for accessibility
    if (closeModalBtn) {
      closeModalBtn.focus();
    }
  };

  const closeModal = () => {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Restore focus to button that opened modal
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  if (openProjectModalBtn && projectModal) {
    openProjectModalBtn.addEventListener('click', openModal);

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', closeModal);
    }

    if (modalCloseAction) {
      modalCloseAction.addEventListener('click', closeModal);
    }

    // Close when clicking overlay backdrop
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeModal();
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  /* --------------------------------------------------------------------------
     9. Toast Notification Helper
     -------------------------------------------------------------------------- */
  const showToast = (message) => {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 3000);
  };

  /* --------------------------------------------------------------------------
     10. Copy Email to Clipboard
     -------------------------------------------------------------------------- */
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const emailToCopy = copyEmailBtn.getAttribute('data-copy') || 'anchitmahajan0987@gmail.com';
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(emailToCopy).then(() => {
          showToast('Email address copied to clipboard!');
        }).catch(() => {
          fallbackCopyText(emailToCopy);
        });
      } else {
        fallbackCopyText(emailToCopy);
      }
    });
  }

  const fallbackCopyText = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        showToast('Email address copied to clipboard!');
      } else {
        showToast(`Email: ${text}`);
      }
    } catch (err) {
      showToast(`Email: ${text}`);
    }
    document.body.removeChild(textArea);
  };

  /* --------------------------------------------------------------------------
     11. Contact Form Client-side Validation & Feedback
     -------------------------------------------------------------------------- */
  if (contactForm) {
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const subjectInput = document.getElementById('userSubject');
    const messageInput = document.getElementById('userMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('input-error');
        nameError.classList.add('active');
        isValid = false;
      } else {
        nameInput.classList.remove('input-error');
        nameError.classList.remove('active');
      }

      // Validate Email
      if (!validateEmail(emailInput.value.trim())) {
        emailInput.classList.add('input-error');
        emailError.classList.add('active');
        isValid = false;
      } else {
        emailInput.classList.remove('input-error');
        emailError.classList.remove('active');
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        subjectInput.classList.add('input-error');
        subjectError.classList.add('active');
        isValid = false;
      } else {
        subjectInput.classList.remove('input-error');
        subjectError.classList.remove('active');
      }

      // Validate Message (minimum 10 characters)
      if (messageInput.value.trim().length < 10) {
        messageInput.classList.add('input-error');
        messageError.classList.add('active');
        isValid = false;
      } else {
        messageInput.classList.remove('input-error');
        messageError.classList.remove('active');
      }

      if (isValid) {
        const userName = nameInput.value.trim();
        const userEmail = emailInput.value.trim();
        const userSubject = subjectInput.value.trim();
        const userMsg = messageInput.value.trim();

        // Construct mailto link
        const mailtoUrl = `mailto:anchitmahajan0987@gmail.com?subject=${encodeURIComponent(userSubject)}&body=${encodeURIComponent(`Hi Anchit,\n\nName: ${userName}\nEmail: ${userEmail}\n\nMessage:\n${userMsg}`)}`;

        // Render success notice with mailto trigger
        if (formFeedback) {
          formFeedback.innerHTML = `
            <div class="alert-success">
              <p><strong>Message preview ready, ${userName}!</strong></p>
              <p style="margin: 0.5rem 0;">Since this is a client-side frontend demo, your message is formatted and ready to send directly to Anchit's inbox.</p>
              <a href="${mailtoUrl}" class="btn btn-primary" style="margin-top: 0.5rem; display: inline-flex; font-size: 0.85rem; padding: 0.5rem 1rem;">
                Click to Open in Email App
              </a>
            </div>
          `;
        }

        showToast('Form validated! Click the button above to send email.');

        // Clear input values
        contactForm.reset();
      }
    });

    // Real-time error removal upon typing
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('input-error');
        const associatedError = document.getElementById(`${input.id.replace('user', '').toLowerCase()}Error`);
        if (associatedError) {
          associatedError.classList.remove('active');
        }
      });
    });
  }

});

