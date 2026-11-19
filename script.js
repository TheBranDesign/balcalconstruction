/**
 * BALCAL CONSTRUCTION, INC. — PREMIUM WEBSITE INTERACTIONS
 * Creative Direction: The Brand Design
 * Features: Frosted Header, Dynamic Mobile Drawer, Filterable Gallery,
 * Lightbox Case Study Modals, Form Validation, Scroll Reveals, Back-to-Top.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. STICKY FROSTED GLASS HEADER
     -------------------------------------------------------------------------- */
  const header = document.getElementById('header');
  const scrollThreshold = 40;

  const handleHeaderScroll = () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* --------------------------------------------------------------------------
     2. MOBILE NAVIGATION DRAWER
     -------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileClose = document.getElementById('mobile-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileMenu = () => {
    mobileMenu.classList.add('open');
    mobileOverlay.classList.add('open');
    document.body.classList.add('menu-open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
  };

  const closeMobileMenu = () => {
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.classList.remove('menu-open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', openMobileMenu);
  }
  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
  }
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileMenu && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
      if (projectModal && projectModal.classList.contains('active')) {
        closeProjectModal();
      }
      if (confirmModal && confirmModal.classList.contains('active')) {
        closeConfirmModal();
      }
    }
  });

  /* --------------------------------------------------------------------------
     3. PORTFOLIO FILTERING
     -------------------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  const filterProjects = (category) => {
    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  };

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const category = btn.getAttribute('data-filter');
      filterProjects(category);
    });
  });

  // Support for in-page service card clicks linking directly to filtered portfolio
  const filterTriggers = document.querySelectorAll('[data-filter-trigger]');
  filterTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const targetCategory = trigger.getAttribute('data-filter-trigger');
      const matchingBtn = document.querySelector(`.filter-btn[data-filter="${targetCategory}"]`);
      if (matchingBtn) {
        matchingBtn.click();
      }
    });
  });

  /* --------------------------------------------------------------------------
     4. PROJECT DETAIL MODAL (LIGHTBOX PREVIEW)
     -------------------------------------------------------------------------- */
  const projectModal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalSecondaryClose = document.getElementById('modal-secondary-close');
  const modalInquireBtn = document.getElementById('modal-inquire-btn');

  const modalImg = document.getElementById('modal-featured-img');
  const modalCatTag = document.getElementById('modal-cat-tag');
  const modalLocTag = document.getElementById('modal-loc-tag');
  const modalTitle = document.getElementById('modal-project-title');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalHighlightsList = document.getElementById('modal-highlights-list');

  const openProjectModal = (card) => {
    const title = card.getAttribute('data-title') || 'Featured Project';
    const catLabel = card.getAttribute('data-category-label') || 'Architecture';
    const location = card.getAttribute('data-location') || 'Napa Valley, CA';
    const desc = card.getAttribute('data-desc') || '';
    const highlightsStr = card.getAttribute('data-highlights') || '';
    const imgSrc = card.getAttribute('data-image') || '';

    modalTitle.textContent = title;
    modalCatTag.textContent = catLabel;
    modalLocTag.textContent = location;
    modalDesc.textContent = desc;
    modalImg.src = imgSrc;
    modalImg.alt = title;

    modalHighlightsList.innerHTML = '';
    if (highlightsStr) {
      const highlights = highlightsStr.split(';');
      highlights.forEach(item => {
        if (item.trim()) {
          const li = document.createElement('li');
          li.textContent = item.trim();
          modalHighlightsList.appendChild(li);
        }
      });
    }

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeProjectModal = () => {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      openProjectModal(card);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalSecondaryClose) modalSecondaryClose.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  if (modalInquireBtn) {
    modalInquireBtn.addEventListener('click', () => {
      closeProjectModal();
      // Auto-populate notes with project title
      const currentTitle = modalTitle.textContent;
      const notesField = document.getElementById('project-notes');
      if (notesField && currentTitle) {
        notesField.value = `Inquiry regarding similar scope to: ${currentTitle}\n`;
      }
    });
  }

  /* --------------------------------------------------------------------------
     5. SCROLL-TRIGGERED REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  /* --------------------------------------------------------------------------
     6. VERIFIED STATS COUNTER ANIMATION
     -------------------------------------------------------------------------- */
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  let statsCounted = false;

  const animateCounters = () => {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'), 10);
      const isYear = target > 2000;
      const duration = 1600;
      const start = isYear ? 1990 : 0;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = Math.floor(start + (target - start) * ease);

        stat.textContent = isYear ? `${currentVal}` : `${currentVal}+`;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = isYear ? `${target}` : `${target}+`;
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  const heroSection = document.querySelector('.hero-section');
  if (heroSection && 'IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsCounted) {
          statsCounted = true;
          animateCounters();
        }
      });
    }, { threshold: 0.2 });
    heroObserver.observe(heroSection);
  } else {
    animateCounters();
  }

  /* --------------------------------------------------------------------------
     7. INTERACTIVE CONSULTATION FORM & VERIFIED DISPATCH MODAL
     -------------------------------------------------------------------------- */
  const form = document.getElementById('consultation-form');
  const confirmModal = document.getElementById('confirmation-modal');
  const confirmBackdrop = document.getElementById('confirm-backdrop');
  const confirmCloseBtn = document.getElementById('confirm-close-btn');
  const confirmClientName = document.getElementById('confirm-client-name');
  const confirmEmailMailto = document.getElementById('confirm-email-mailto');

  const nameInput = document.getElementById('contact-name');
  const phoneInput = document.getElementById('contact-phone');
  const emailInput = document.getElementById('contact-email');
  const locationSelect = document.getElementById('project-location');
  const timelineSelect = document.getElementById('project-timeline');
  const notesTextarea = document.getElementById('project-notes');

  const closeConfirmModal = () => {
    confirmModal.classList.remove('active');
    confirmModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  if (confirmCloseBtn) confirmCloseBtn.addEventListener('click', closeConfirmModal);
  if (confirmBackdrop) confirmBackdrop.addEventListener('click', closeConfirmModal);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      const nameGroup = nameInput.closest('.form-group');
      if (!nameInput.value.trim()) {
        nameGroup.classList.add('has-error');
        isValid = false;
      } else {
        nameGroup.classList.remove('has-error');
      }

      // Validate Phone
      const phoneGroup = phoneInput.closest('.form-group');
      if (!phoneInput.value.trim() || phoneInput.value.trim().length < 7) {
        phoneGroup.classList.add('has-error');
        isValid = false;
      } else {
        phoneGroup.classList.remove('has-error');
      }

      // Validate Email
      const emailGroup = emailInput.closest('.form-group');
      if (!validateEmail(emailInput.value.trim())) {
        emailGroup.classList.add('has-error');
        isValid = false;
      } else {
        emailGroup.classList.remove('has-error');
      }

      if (!isValid) return;

      // Gather Form Data
      const selectedType = document.querySelector('input[name="project_type"]:checked')?.value || 'Custom Project';
      const clientName = nameInput.value.trim();
      const clientPhone = phoneInput.value.trim();
      const clientEmail = emailInput.value.trim();
      const region = locationSelect.value;
      const timeline = timelineSelect.value;
      const notes = notesTextarea.value.trim();

      // Configure mailto URL for direct client transmission
      const emailSubject = encodeURIComponent(`Project Consultation: ${selectedType} - ${clientName}`);
      const emailBody = encodeURIComponent(
        `Dear BalCal Construction,\n\n` +
        `I would like to discuss an upcoming construction project.\n\n` +
        `Project Discipline: ${selectedType}\n` +
        `Client Name: ${clientName}\n` +
        `Phone: ${clientPhone}\n` +
        `Email: ${clientEmail}\n` +
        `Region: ${region}\n` +
        `Timeline: ${timeline}\n\n` +
        `Project Overview:\n${notes || 'None provided'}\n\n` +
        `Sent from BalCal Construction Redesign Preview Portal.`
      );

      confirmEmailMailto.href = `mailto:info@balcalconstruction.com?subject=${emailSubject}&body=${emailBody}`;
      confirmClientName.textContent = clientName;

      // Display Modal with clear presentation instructions
      confirmModal.classList.add('active');
      confirmModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');

      form.reset();
    });
  }

  /* --------------------------------------------------------------------------
     8. BACK TO TOP BUTTON
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top-btn');

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     9. ACTIVE NAVIGATION HIGHLIGHT ON SCROLL
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollPos = window.scrollY + 160;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });
});
