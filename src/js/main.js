// ===================================
// LANGUAGE SWITCHER
// ===================================
(function() {
  // Get current language from localStorage or default to 'en'
  let currentLang = localStorage.getItem('language') || 'en';

  // Helper function to get nested translation
  function getTranslation(key, lang) {
    const keys = key.split('.');
    let value = window.translations[lang];

    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return null;
      }
    }
    return value;
  }

  // Function to update all translatable elements
  function updateLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = getTranslation(key, lang);
      if (translation) {
        element.textContent = translation;
      }
    });

    // Update all elements with data-i18n-html attribute (for HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const key = element.getAttribute('data-i18n-html');
      const translation = getTranslation(key, lang);
      if (translation) {
        element.innerHTML = translation;
      }
    });

    // Update HTML lang attribute
    document.getElementById('html-root').setAttribute('lang', lang);

    // Update language switcher active state
    document.querySelectorAll('.lang-option').forEach(option => {
      if (option.getAttribute('data-lang') === lang) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });

    // Save to localStorage
    localStorage.setItem('language', lang);
    currentLang = lang;
  }

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Apply saved language
    updateLanguage(currentLang);

    // Add click handlers to language options
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
      langSwitcher.addEventListener('click', function(e) {
        const target = e.target.closest('.lang-option');
        if (target) {
          const newLang = target.getAttribute('data-lang');
          if (newLang && newLang !== currentLang) {
            updateLanguage(newLang);
          }
        }
      });
    }
  });
})();

// ===================================
// MOBILE MENU TOGGLE
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      this.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }
    });
  }
});

// ===================================
// GALLERY FILTERING
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const potteryCards = document.querySelectorAll('.pottery-card');

  if (filterButtons.length > 0 && potteryCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filter pottery cards
        potteryCards.forEach(card => {
          const category = card.getAttribute('data-category');

          if (filter === 'all') {
            card.classList.remove('hidden');
          } else {
            if (category === filter) {
              card.classList.remove('hidden');
            } else {
              card.classList.add('hidden');
            }
          }
        });
      });
    });
  }
});

// ===================================
// IMAGE GALLERY (Detail Page)
// ===================================
function changeImage(imageSrc, thumbnailElement) {
  const mainImage = document.getElementById('mainImage');
  if (mainImage) {
    mainImage.src = imageSrc;

    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnailElement.classList.add('active');
  }
}

// ===================================
// CONTACT FORM - Pre-fill item from URL
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  const itemInput = document.getElementById('item');
  if (itemInput) {
    const urlParams = new URLSearchParams(window.location.search);
    const itemName = urlParams.get('item');
    if (itemName) {
      itemInput.value = decodeURIComponent(itemName);
    }
  }
});

// ===================================
// SMOOTH SCROLL for anchor links
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
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
});
