const appData = {
  "featured_tools": [
    {
      "name": "ChatGPT",
      "category": "Writing",
      "description": "Advanced AI chatbot for content creation, coding, and problem-solving",
      "pricing": "Free/Premium",
      "rating": 4.8,
      "features": ["Natural language processing", "Code generation", "Creative writing"]
    },
    {
      "name": "Midjourney",
      "category": "Design",
      "description": "AI-powered image generation tool for creating stunning artwork",
      "pricing": "Subscription",
      "rating": 4.7,
      "features": ["Image generation", "Art creation", "Commercial use"]
    },
    {
      "name": "Claude",
      "category": "Writing",
      "description": "Anthropic's AI assistant for research, analysis, and creative tasks",
      "pricing": "Free/Premium",
      "rating": 4.6,
      "features": ["Document analysis", "Research assistance", "Creative writing"]
    },
    {
      "name": "Copy.ai",
      "category": "Marketing",
      "description": "AI copywriting tool for marketing content and sales copy",
      "pricing": "Free/Premium",
      "rating": 4.5,
      "features": ["Marketing copy", "Social media content", "Email campaigns"]
    },
    {
      "name": "GitHub Copilot",
      "category": "Coding",
      "description": "AI pair programmer that helps you write code faster",
      "pricing": "Subscription",
      "rating": 4.4,
      "features": ["Code completion", "Multiple languages", "IDE integration"]
    },
    {
      "name": "Jasper AI",
      "category": "Writing",
      "description": "AI content platform for businesses and marketers",
      "pricing": "Subscription",
      "rating": 4.3,
      "features": ["Blog writing", "Marketing content", "Team collaboration"]
    }
  ],
  "categories": [
    {"name": "Writing", "count": 25, "color": "#3b82f6"},
    {"name": "Design", "count": 18, "color": "#10b981"},
    {"name": "Coding", "count": 15, "color": "#f59e0b"},
    {"name": "Marketing", "count": 20, "color": "#ef4444"},
    {"name": "Productivity", "count": 22, "color": "#8b5cf6"},
    {"name": "Video", "count": 12, "color": "#06b6d4"},
    {"name": "Regional Language AI", "tools": 15, "desc": "AI tools for Indian languages and cultural contexts."},
    {"name": "Agriculture AI", "tools": 12, "desc": "Smart farming, crop monitoring, weather prediction solutions."},
    {"name": "Education AI", "tools": 20, "desc": "Personalized learning for Indian curriculum."},
    {"name": "Healthcare AI", "tools": 18, "desc": "Diagnostic and telemedicine solutions for Indian healthcare."}
  ],
  "tutorials": [
    {
      "title": "Getting Started with ChatGPT for Business",
      "difficulty": "Beginner",
      "duration": "15 min read",
      "category": "Business"
    },
    {
      "title": "Building Your First AI Voice Assistant in 30 Minutes",
      "difficulty": "Beginner",
      "duration": "30 min read",
      "focus": "Practical implementation using open-source tools"
    },
    {
      "title": "AI Ethics in Practice: Responsible Model Development",
      "difficulty": "Intermediate",
      "duration": "45 min read",
      "focus": "Bias detection, fairness testing, ethical guidelines"
    },
    {
      "title": "From Data to Insights: No-Code AI Analytics Pipeline",
      "difficulty": "Beginner",
      "duration": "25 min read",
      "focus": "Visual AI tools for automated data analysis"
    },
    {
      "title": "Advanced Prompt Engineering for Indian Languages",
      "difficulty": "Advanced",
      "duration": "60 min read",
      "focus": "Hindi, Bengali, Tamil optimization with cultural context"
    },
    {
      "title": "Advanced Prompt Engineering Techniques",
      "difficulty": "Advanced",
      "duration": "20 min read",
      "category": "Technical"
    },
    {
      "title": "AI Image Generation: Complete Guide 2025",
      "difficulty": "Intermediate",
      "duration": "25 min read",
      "category": "Design"
    },
    {
      "title": "Automating Workflows with AI Tools",
      "difficulty": "Intermediate",
      "duration": "18 min read",
      "category": "Productivity"
    }
  ],
  "news_articles": [
    {
      "title": "OpenAI Announces New GPT-5 Features",
      "date": "2025-10-05",
      "category": "Industry News",
      "summary": "Latest updates from OpenAI's developer conference revealing new capabilities and improvements."
    },
    {
      "title": "AI Market Reaches $500 Billion Milestone",
      "date": "2025-10-03",
      "category": "Market Analysis",
      "summary": "Global AI market continues unprecedented growth with new investments in enterprise solutions."
    },
    { 
      "title": "AI-Powered Quantum Computing Breakthrough Achieved in India", 
      "date": "2025-10-08", 
      "category": "Technology", 
      "summary": "Indian researchers demonstrate quantum-AI hybrid system solving complex problems 100x faster."
    },
    { 
      "title": "New Privacy-First AI Assistant Launches Without Data Collection", 
      "date": "2025-10-07",
      "category": "Privacy Tech",
      "summary": "Revolutionary local-processing AI assistant ensuring complete user privacy."
    },
    { 
      "title": "AI Revolutionizes Early Disease Detection in Rural Healthcare",
      "date": "2025-10-06",
      "category": "Healthcare AI",
      "summary": "Mobile AI diagnostic tool achieves 95% accuracy using smartphone cameras." 
    },
    {
      "title": "Sustainable AI: New Models Reduce Energy Consumption by 70%",
      "date": "2025-10-05",
      "category": "Green Technology",
      "summary": "Breakthrough optimization techniques drastically cut AI computational power needs." 
    },
    { 
      "title": "AI Content Watermarking Standard Adopted Globally",
      "date": "2025-10-04",
      category": "Digital Ethics",
      "summary": "Universal AI-generated content identification system implemented by major tech companies."
    },
    {
      "title": "Google Unveils Advanced AI Search Features",
      "date": "2025-10-01",
      "category": "Technology",
      "summary": "Search giant introduces revolutionary AI-powered search capabilities for better user experience."
    }
  ]
};

// Application state
let currentPage = 'home';
let filteredTools = [...appData.featured_tools];

// DOM elements
let elements = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  setupEventListeners();
  renderContent();
  showPage('home');
});

// Initialize DOM elements
function initializeElements() {
  elements = {
    navLinks: document.querySelectorAll('.nav-link'),
    pages: document.querySelectorAll('.page'),
    mobileMenuToggle: document.querySelector('.mobile-menu-toggle'),
    navbarMenu: document.querySelector('.navbar-menu'),
    searchInput: document.querySelector('.search-input'),
    searchBtn: document.querySelector('.search-btn'),
    featuredTools: document.getElementById('featured-tools'),
    allTools: document.getElementById('all-tools'),
    categoriesGrid: document.getElementById('categories-grid'),
    latestNews: document.getElementById('latest-news'),
    allNews: document.getElementById('all-news'),
    tutorialsGrid: document.getElementById('tutorials-grid'),
    categoryFilter: document.getElementById('category-filter'),
    sortFilter: document.getElementById('sort-filter'),
    toolsSearch: document.getElementById('tools-search'),
    newsletterForm: document.getElementById('newsletter-form'),
    contactForm: document.getElementById('contact-form'),
    toast: document.getElementById('toast'),
    footerNewsletter: document.querySelector('.footer-newsletter')
  };
}

// Setup event listeners
function setupEventListeners() {
  // Navigation
  elements.navLinks.forEach(link => {
    link.addEventListener('click', handleNavigation);
  });

  // Footer navigation
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', handleNavigation);
  });

  // Mobile menu toggle
  if (elements.mobileMenuToggle) {
    elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }

  // Search functionality
  if (elements.searchBtn) {
    elements.searchBtn.addEventListener('click', handleSearch);
  }
  if (elements.searchInput) {
    elements.searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') handleSearch();
    });
  }

  // Tools page filters
  if (elements.categoryFilter) {
    elements.categoryFilter.addEventListener('change', filterTools);
  }
  if (elements.sortFilter) {
    elements.sortFilter.addEventListener('change', filterTools);
  }
  if (elements.toolsSearch) {
    elements.toolsSearch.addEventListener('input', filterTools);
  }

  // Forms
  if (elements.newsletterForm) {
    elements.newsletterForm.addEventListener('submit', handleNewsletterSignup);
  }
  if (elements.contactForm) {
    elements.contactForm.addEventListener('submit', handleContactForm);
  }
  if (elements.footerNewsletter) {
    elements.footerNewsletter.addEventListener('submit', handleFooterNewsletter);
  }

  // Hero action buttons
  document.querySelectorAll('.hero-actions .btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const page = this.getAttribute('data-page');
      if (page) {
        e.preventDefault();
        showPage(page);
        updateNavigation(page);
      }
    });
  });

  // Toast close
  const toastClose = document.querySelector('.toast-close');
  if (toastClose) {
    toastClose.addEventListener('click', hideToast);
  }
}

// Handle navigation
function handleNavigation(e) {
  e.preventDefault();
  const page = this.getAttribute('data-page');
  if (page) {
    showPage(page);
    updateNavigation(page);
  }
}

// Show page
function showPage(pageName) {
  elements.pages.forEach(page => {
    page.classList.remove('active');
  });
  
  const targetPage = document.getElementById(pageName);
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = pageName;
    
    // Close mobile menu if open
    if (elements.navbarMenu) {
      elements.navbarMenu.classList.remove('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }
}

// Update navigation active state
function updateNavigation(pageName) {
  elements.navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageName) {
      link.classList.add('active');
    }
  });
}

// Toggle mobile menu
function toggleMobileMenu() {
  if (elements.navbarMenu) {
    elements.navbarMenu.classList.toggle('active');
  }
}

// Handle search
function handleSearch() {
  const query = elements.searchInput.value.trim().toLowerCase();
  if (query) {
    // Switch to tools page and filter
    showPage('tools');
    updateNavigation('tools');
    if (elements.toolsSearch) {
      elements.toolsSearch.value = query;
      filterTools();
    }
  }
}

// Render all content
function renderContent() {
  renderFeaturedTools();
  renderAllTools();
  renderCategories();
  renderLatestNews();
  renderAllNews();
  renderTutorials();
  populateCategoryFilter();
}

// Render featured tools
function renderFeaturedTools() {
  if (!elements.featuredTools) return;
  
  const toolsHTML = appData.featured_tools.map(tool => `
    <div class="tool-card">
      <div class="tool-header">
        <h3 class="tool-name">${tool.name}</h3>
        <div class="tool-rating">
          <span>â­ ${tool.rating}</span>
        </div>
      </div>
      <div class="tool-category">${tool.category}</div>
      <p class="tool-description">${tool.description}</p>
      <div class="tool-pricing">Pricing: ${tool.pricing}</div>
      <ul class="tool-features">
        ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  
  elements.featuredTools.innerHTML = toolsHTML;
}

// Render all tools
function renderAllTools() {
  if (!elements.allTools) return;
  
  const toolsHTML = filteredTools.map(tool => `
    <div class="tool-card">
      <div class="tool-header">
        <h3 class="tool-name">${tool.name}</h3>
        <div class="tool-rating">
          <span>â­ ${tool.rating}</span>
        </div>
      </div>
      <div class="tool-category">${tool.category}</div>
      <p class="tool-description">${tool.description}</p>
      <div class="tool-pricing">Pricing: ${tool.pricing}</div>
      <ul class="tool-features">
        ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  
  elements.allTools.innerHTML = toolsHTML || '<p>No tools found matching your criteria.</p>';
}

// Render categories
function renderCategories() {
  if (!elements.categoriesGrid) return;
  
  const categoriesHTML = appData.categories.map(category => `
    <div class="category-card" onclick="filterByCategory('${category.name}')">
      <div class="category-name">${category.name}</div>
      <div class="category-count">${category.count} tools</div>
    </div>
  `).join('');
  
  elements.categoriesGrid.innerHTML = categoriesHTML;
}

// Filter by category
function filterByCategory(categoryName) {
  if (elements.categoryFilter) {
    elements.categoryFilter.value = categoryName;
    filterTools();
  }
}

// Render latest news
function renderLatestNews() {
  if (!elements.latestNews) return;
  
  const newsHTML = appData.news.map(article => `
    <div class="news-card">
      <div class="news-header">
        <h3 class="news-title">${article.title}</h3>
        <div class="news-date">${article.date}</div>
      </div>
      <div class="news-category">${article.category}</div>
      <p class="news-summary">${article.summary}</p>
    </div>
  `).join('');
  
  elements.latestNews.innerHTML = newsHTML;
}

// Render all news
function renderAllNews() {
  if (!elements.allNews) return;
  
  const newsHTML = appData.news.map(article => `
    <div class="news-card">
      <div class="news-header">
        <h3 class="news-title">${article.title}</h3>
        <div class="news-date">${article.date}</div>
      </div>
      <div class="news-category">${article.category}</div>
      <p class="news-summary">${article.summary}</p>
      <p style="margin-top: 16px; color: var(--color-text-secondary); font-style: italic;">
        This article provides comprehensive insights into the latest developments in AI technology. 
        Our expert team analyzes market trends, technological breakthroughs, and industry implications 
        to keep you informed about the rapidly evolving AI landscape.
      </p>
    </div>
  `).join('');
  
  elements.allNews.innerHTML = newsHTML;
}

// Render tutorials
function renderTutorials() {
  if (!elements.tutorialsGrid) return;
  
  const tutorialsHTML = appData.tutorials.map(tutorial => `
    <div class="tutorial-card">
      <h3 class="tutorial-title">${tutorial.title}</h3>
      <div class="tutorial-meta">
        <span class="tutorial-difficulty ${tutorial.difficulty.toLowerCase()}">${tutorial.difficulty}</span>
        <span class="tutorial-duration">${tutorial.duration}</span>
        <span class="tutorial-category">${tutorial.category}</span>
      </div>
      <p style="color: var(--color-text-secondary); margin-top: 16px;">
        This comprehensive tutorial covers essential concepts and practical applications. 
        Learn step-by-step techniques from industry experts with hands-on examples and real-world use cases.
      </p>
      <button class="btn btn--primary" style="margin-top: 16px;">Read Tutorial</button>
    </div>
  `).join('');
  
  elements.tutorialsGrid.innerHTML = tutorialsHTML;
}

// Populate category filter
function populateCategoryFilter() {
  if (!elements.categoryFilter) return;
  
  const categoriesHTML = appData.categories.map(category => 
    `<option value="${category.name}">${category.name}</option>`
  ).join('');
  
  elements.categoryFilter.innerHTML = 
    '<option value="">All Categories</option>' + categoriesHTML;
}

// Filter tools
function filterTools() {
  const category = elements.categoryFilter?.value || '';
  const sort = elements.sortFilter?.value || 'rating';
  const search = elements.toolsSearch?.value.toLowerCase() || '';
  
  // Filter tools
  filteredTools = appData.featured_tools.filter(tool => {
    const matchesCategory = !category || tool.category === category;
    const matchesSearch = !search || 
      tool.name.toLowerCase().includes(search) ||
      tool.description.toLowerCase().includes(search) ||
      tool.category.toLowerCase().includes(search);
    
    return matchesCategory && matchesSearch;
  });
  
  // Sort tools
  filteredTools.sort((a, b) => {
    switch (sort) {
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });
  
  renderAllTools();
}

// Handle newsletter signup
function handleNewsletterSignup(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get('email') || e.target.querySelector('input[type="email"]').value;
  
  if (email) {
    showToast('Thank you for subscribing! You\'ll receive the latest AI updates.', 'success');
    e.target.reset();
  } else {
    showToast('Please enter a valid email address.', 'error');
  }
}

// Handle footer newsletter
function handleFooterNewsletter(e) {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  
  if (email) {
    showToast('Successfully subscribed to our newsletter!', 'success');
    e.target.reset();
  } else {
    showToast('Please enter a valid email address.', 'error');
  }
}

// Handle contact form
function handleContactForm(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get('name') || e.target.querySelector('input[type="text"]').value;
  const email = formData.get('email') || e.target.querySelector('input[type="email"]').value;
  const subject = formData.get('subject') || e.target.querySelector('select').value;
  const message = formData.get('message') || e.target.querySelector('textarea').value;
  
  if (name && email && subject && message) {
    showToast('Thank you for your message! We\'ll get back to you soon.', 'success');
    e.target.reset();
  } else {
    showToast('Please fill in all required fields.', 'error');
  }
}

// Show toast message
function showToast(message, type = 'info') {
  if (!elements.toast) return;
  
  const toastMessage = elements.toast.querySelector('.toast-message');
  if (toastMessage) {
    toastMessage.textContent = message;
  }
  
  // Remove existing type classes
  elements.toast.classList.remove('toast-success', 'toast-error', 'toast-info');
  elements.toast.classList.add(`toast-${type}`);
  
  // Show toast
  elements.toast.classList.remove('hidden');
  
  // Auto hide after 5 seconds
  setTimeout(() => {
    hideToast();
  }, 5000);
}

// Hide toast message
function hideToast() {
  if (elements.toast) {
    elements.toast.classList.add('hidden');
  }
}

// Utility function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Utility function to create star rating
function createStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += 'â­';
  }
  
  if (hasHalfStar) {
    stars += 'â­';
  }
  
  return stars;
}

// Handle window resize for mobile responsiveness
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    if (elements.navbarMenu) {
      elements.navbarMenu.classList.remove('active');
    }
  }
});

// Handle escape key to close mobile menu
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && elements.navbarMenu) {
    elements.navbarMenu.classList.remove('active');
  }
});

// Initialize page on load
window.addEventListener('load', function() {
  // Add loading animation completion
  document.body.classList.add('loaded');
});

// Export functions for potential external use
window.AIHub = {
  showPage,
  showToast,
  filterTools,
  filterByCategory
};
