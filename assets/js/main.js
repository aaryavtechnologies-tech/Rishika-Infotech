/**
 * Rishika Infotech - Core Website Functionality
 * Fast, lightweight, zero-dependency JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Menu Functionality
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (mobileBtn && mobileMenu) {
    const toggleMenu = () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
        mobileBtn.setAttribute('aria-expanded', 'true');
      } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
        mobileBtn.setAttribute('aria-expanded', 'false');
      }
    };

    mobileBtn.addEventListener('click', toggleMenu);

    // Close on mobile navigation link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on clicking outside mobile menu
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
        mobileBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. WhatsApp Lead Generation / Service Form Submission
  const form = document.getElementById('serviceContactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('custName');
      const phoneInput = document.getElementById('custPhone');
      const serviceInput = document.getElementById('serviceReq');
      const messageInput = document.getElementById('custMessage');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const service = serviceInput ? serviceInput.value : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !phone || !service) {
        alert('Please fill in all required fields (Name, Phone number, and Service).');
        return;
      }

      // Format professional WhatsApp message string
      let formattedMsg = `*New Service Inquiry - Rishika Infotech*\n`;
      formattedMsg += `──────────────────────\n`;
      formattedMsg += `👤 *Customer Name:* ${name}\n`;
      formattedMsg += `📞 *Phone / WhatsApp:* ${phone}\n`;
      formattedMsg += `🛠️ *Service Required:* ${service}\n`;
      if (message) {
        formattedMsg += `📝 *Issue / Details:* ${message}\n`;
      }
      formattedMsg += `──────────────────────\n`;
      formattedMsg += `📍 Store: Radhika Complex, Boring Road, Patna\n`;
      formattedMsg += `Please confirm appointment / quote.`;

      const targetNumber = '919304201682';
      const encodedUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(formattedMsg)}`;

      // Open WhatsApp in new tab / app
      window.open(encodedUrl, '_blank');
    });
  }

  // 3. ScrollSpy: Highlight active navbar links according to current visible section
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');

  function updateActiveNav() {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active', 'text-brand-blue');
          } else {
            link.classList.remove('active', 'text-brand-blue');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // 4. Back to Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 5. Header Elevation Shadow on Scroll
  const mainHeader = document.querySelector('header');
  if (mainHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        mainHeader.classList.add('shadow-md');
        mainHeader.classList.remove('shadow-sm');
      } else {
        mainHeader.classList.remove('shadow-md');
        mainHeader.classList.add('shadow-sm');
      }
    }, { passive: true });
  }
});

