// AI Central Hub Application JavaScript
// Application data
const appData = {
  "featured_tools": [
    {
      "name": "ChatGPT",
      "category": "Writing",
      "description": "Advanced AI chatbot for viral scripts, coding, and productivity automation.",
      "pricing": "Free/Premium",
      "rating": 4.9,
      "features": ["Script writing", "SEO content", "Code generation", "Trend analysis"],
      "url": "https://chat.openai.com/",
      "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
    },
    {
      "name": "Midjourney",
      "category": "Design", 
      "description": "Create stunning AI artwork, thumbnails, and visual content for social media.",
      "pricing": "Subscription",
      "rating": 4.8,
      "features": ["AI art generation", "Thumbnail creation", "Brand visuals", "Creative prompts"],
      "url": "https://midjourney.com/",
      "image": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop"
    },
    {
      "name": "Synthesia",
      "category": "Video",
      "description": "Generate professional videos with AI avatars and realistic voiceovers.",
      "pricing": "Subscription", 
      "rating": 4.8,
      "features": ["AI avatars", "Multi-language support", "Custom scripts", "Brand templates"],
      "url": "https://www.synthesia.io/",
      "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop"
    },
    {
      "name": "Copy.ai",
      "category": "Marketing",
      "description": "Auto-generate marketing copy, social posts, and advertising content.",
      "pricing": "Free/Premium",
      "rating": 4.7,
      "features": ["Marketing copy", "Social media posts", "Email campaigns", "Ad headlines"],
      "url": "https://www.copy.ai/",
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      "name": "Notion AI",
      "category": "Productivity",
      "description": "Smart note-taking and task management with AI-powered assistance.",
      "pricing": "Free/Premium", 
      "rating": 4.7,
      "features": ["Smart notes", "Task automation", "Knowledge base", "Team collaboration"],
      "url": "https://www.notion.so/product/ai",
      "image": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop"
    },
    {
      "name": "Soundraw",
      "category": "Audio",
      "description": "Generate royalty-free music for videos, podcasts, and content creation.",
      "pricing": "Subscription",
      "rating": 4.6,
      "features": ["Music generation", "Royalty-free", "Multiple genres", "Quick customization"],
      "url": "https://soundraw.io/",
      "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    },
    {
      "name": "Runway ML",
      "category": "Video",
      "description": "AI-powered video editing and generation for creative professionals.",
      "pricing": "Free/Premium",
      "rating": 4.5,
      "features": ["Video generation", "AI editing", "Motion graphics", "Style transfer"],
      "url": "https://runwayml.com/",
      "image": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop"
    },
    {
      "name": "Jasper AI",
      "category": "Writing",
      "description": "AI content platform for long-form content and business writing.",
      "pricing": "Subscription",
      "rating": 4.4,
      "features": ["Blog writing", "SEO optimization", "Brand voice", "Team collaboration"],
      "url": "https://www.jasper.ai/",
      "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop"
    },
    {
      "name": "Stable Diffusion",
      "category": "Design",
      "description": "Open-source AI image generator for custom artwork and designs.",
      "pricing": "Free/Premium",
      "rating": 4.3,
      "features": ["Open source", "Custom models", "High resolution", "Creative control"],
      "url": "https://stablediffusionweb.com/",
      "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop"
    },
    {
      "name": "Perplexity AI",
      "category": "Research",
      "description": "AI-powered search engine and research assistant for accurate information.",
      "pricing": "Free/Premium",
      "rating": 4.6,
      "features": ["Research assistance", "Real-time data", "Source citations", "Academic support"],
      "url": "https://www.perplexity.ai/",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    }
  ],
  "categories": [
    {"name": "Writing", "count": 35, "color": "#3b82f6"},
    {"name": "Design", "count": 28, "color": "#10b981"},
    {"name": "Video", "count": 22, "color": "#f59e0b"},
    {"name": "Marketing", "count": 31, "color": "#ef4444"},
    {"name": "Productivity", "count": 26, "color": "#8b5cf6"},
    {"name": "Audio", "count": 15, "color": "#06b6d4"},
    {"name": "Research", "count": 18, "color": "#84cc16"},
    {"name": "Coding", "count": 24, "color": "#f97316"}
  ],
  "tutorials": [
    {
      "title": "Create Viral YouTube Shorts with ChatGPT",
      "difficulty": "Beginner",
      "duration": "12 min read",
      "category": "Writing",
      "article": {
        "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        "heading": "Master ChatGPT for Content Creation Success",
        "body": [
          "Transform your content creation with ChatGPT's powerful AI capabilities. This comprehensive guide shows you how to generate viral scripts, engaging titles, and trending hashtags for YouTube Shorts.",
          "<strong>Step-by-Step Process:</strong>",
          "1. Go to <a href='https://chat.openai.com/' target='_blank' class='text-blue-600 hover:underline'>ChatGPT</a> and create your account",
          "2. Use specific prompts like: 'Create a 60-second motivational script about success in Hindi'",
          "3. Ask for trending hashtags and SEO-optimized titles",
          "4. Generate multiple variations to A/B test your content",
          "<strong>Pro Tips:</strong>",
          "• Be specific with your prompts for better results",
          "• Request content in multiple languages for wider reach", 
          "• Use ChatGPT to analyze trending topics in your niche",
          "• Create content calendars and posting schedules",
          "<a href='https://chat.openai.com/' target='_blank' class='btn btn--primary inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>Start Using ChatGPT</a>"
        ]
      }
    },
    {
      "title": "Design Stunning Thumbnails with Midjourney",
      "difficulty": "Intermediate", 
      "duration": "15 min read",
      "category": "Design",
      "article": {
        "image": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
        "heading": "Create Eye-Catching Visual Content with AI",
        "body": [
          "Midjourney revolutionizes visual content creation for YouTubers, bloggers, and social media creators. Learn to craft compelling thumbnails that boost click-through rates.",
          "<strong>Getting Started:</strong>",
          "1. Join the <a href='https://midjourney.com/' target='_blank' class='text-blue-600 hover:underline'>Midjourney</a> Discord server",
          "2. Use the /imagine command with detailed prompts",
          "3. Example prompt: 'YouTube thumbnail, excited person pointing at laptop screen, bright colors, 16:9 aspect ratio, professional lighting'",
          "4. Iterate and refine your results with variations",
          "<strong>Best Practices:</strong>",
          "• Use high-contrast colors for better visibility",
          "• Include text overlays for context",
          "• Follow platform-specific dimensions",
          "• Test different styles and compositions",
          "<strong>Monetization Tips:</strong>",
          "• Create thumbnail templates for consistent branding",
          "• Offer custom thumbnail services to other creators",
          "• Build a portfolio of high-converting designs",
          "<a href='https://midjourney.com/' target='_blank' class='btn btn--primary inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700'>Join Midjourney</a>"
        ]
      }
    },
    {
      "title": "Professional Video Creation with Synthesia", 
      "difficulty": "Advanced",
      "duration": "20 min read",
      "category": "Video",
      "article": {
        "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
        "heading": "Build Your AI Avatar Video Empire",
        "body": [
          "Synthesia enables creators to produce professional videos without cameras, actors, or complex equipment. Perfect for educational content, product demos, and multilingual marketing.",
          "<strong>Setup Process:</strong>",
          "1. Visit <a href='https://www.synthesia.io/' target='_blank' class='text-blue-600 hover:underline'>Synthesia</a> and choose your plan",
          "2. Select from 100+ AI avatars or create custom ones", 
          "3. Write your script (use ChatGPT for optimization)",
          "4. Choose voice, language, and background settings",
          "5. Generate and download your video in minutes",
          "<strong>Advanced Techniques:</strong>",
          "• Create multi-scene presentations with smooth transitions",
          "• Add branded elements and custom backgrounds",
          "• Use different avatars for various content types",
          "• Implement call-to-actions and interactive elements",
          "<strong>Business Applications:</strong>",
          "• Training and educational videos",
          "• Product demonstrations and reviews",
          "• Multilingual marketing campaigns",
          "• Personalized customer communications",
          "<a href='https://www.synthesia.io/' target='_blank' class='btn btn--primary inline-block mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700'>Try Synthesia</a>"
        ]
      }
    },
    {
      "title": "Marketing Automation with Copy.ai",
      "difficulty": "Beginner",
      "duration": "10 min read", 
      "category": "Marketing",
      "article": {
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        "heading": "Scale Your Content Marketing Effortlessly",
        "body": [
          "Copy.ai transforms your marketing workflow by generating high-converting copy for ads, emails, social media, and more. Ideal for entrepreneurs and content creators.",
          "<strong>Quick Start Guide:</strong>",
          "1. Sign up at <a href='https://www.copy.ai/' target='_blank' class='text-blue-600 hover:underline'>Copy.ai</a>",
          "2. Choose your content type (social post, email, ad copy, etc.)",
          "3. Input your product/service details and target audience",
          "4. Generate multiple variations and select the best ones",
          "<strong>Content Types You Can Create:</strong>",
          "• Instagram and Facebook ad copy",
          "• Email subject lines and newsletters",
          "• Blog post outlines and introductions", 
          "• Product descriptions and sales pages",
          "• Social media captions and hashtags",
          "<strong>Optimization Strategies:</strong>",
          "• A/B test different copy variations",
          "• Analyze performance metrics and iterate",
          "• Maintain consistent brand voice across platforms",
          "• Create content templates for recurring campaigns",
          "<a href='https://www.copy.ai/' target='_blank' class='btn btn--primary inline-block mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700'>Start with Copy.ai</a>"
        ]
      }
    },
    {
      "title": "Royalty-Free Music Production with Soundraw",
      "difficulty": "Intermediate",
      "duration": "8 min read",
      "category": "Audio", 
      "article": {
        "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
        "heading": "Never Worry About Copyright Claims Again",
        "body": [
          "Soundraw generates unique, royalty-free music for your videos, podcasts, and content. Perfect for creators who need high-quality background music without licensing headaches.",
          "<strong>How It Works:</strong>",
          "1. Access <a href='https://soundraw.io/' target='_blank' class='text-blue-600 hover:underline'>Soundraw</a> and select your plan",
          "2. Choose mood, genre, and length for your project",
          "3. Customize tempo, instruments, and energy levels",
          "4. Download high-quality MP3 or WAV files",
          "<strong>Content Applications:</strong>",
          "• YouTube video background music",
          "• Podcast intros and transitions", 
          "• Social media content soundtracks",
          "• Commercial and promotional videos",
          "<strong>Key Benefits:</strong>",
          "• 100% royalty-free and copyright-safe",
          "• Unlimited downloads with subscription",
          "• Professional quality compositions",
          "• Quick customization and generation",
          "<a href='https://soundraw.io/' target='_blank' class='btn btn--primary inline-block mt-4 px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700'>Generate Music Now</a>"
        ]
      }
    }
  ],
  "news_articles": [
    {
      "title": "AI Content Creation Market Explodes in India: 300% Growth in 2025",
      "date": "2025-10-08",
      "category": "Industry Trends",
      "summary": "Indian creators are leading the AI content revolution with ChatGPT, Midjourney, and Synthesia driving unprecedented growth in digital content production and monetization."
    },
    {
      "title": "YouTube Announces AI-Friendly Monetization Policies for 2025",
      "date": "2025-10-07", 
      "category": "Platform Updates",
      "summary": "New guidelines clarify monetization rules for AI-generated content, opening doors for creators using tools like Synthesia and AI voiceovers to earn revenue."
    },
    {
      "title": "Synthesia Launches Hindi and Regional Language Support",
      "date": "2025-10-06",
      "category": "Product Updates", 
      "summary": "Popular AI avatar platform adds support for Hindi, Tamil, Telugu, and Bengali, targeting India's massive creator economy with localized content capabilities."
    },
    {
      "title": "OpenAI Releases Advanced ChatGPT Features for Content Creators",
      "date": "2025-10-05",
      "category": "Technology News",
      "summary": "New ChatGPT updates include trend analysis, hashtag optimization, and multi-platform content adaptation specifically designed for social media creators."
    },
    {
      "title": "AI Music Generation Goes Mainstream: Soundraw Partners with Major Labels",
      "date": "2025-10-04",
      "category": "Business News",
      "summary": "Strategic partnerships bring professional-grade AI music generation to independent creators, eliminating copyright concerns for YouTube and TikTok content."
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
  
  const toolsHTML = appData.featured_tools.slice(0, 6).map(tool => `
    <div class="tool-card" style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s;">
      <div class="tool-image" style="margin-bottom: 16px;">
        <img src="${tool.image}" alt="${tool.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
      </div>
      <div class="tool-header" style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
        <h3 class="tool-name" style="font-size: 20px; font-weight: bold; color: #1f2937; margin: 0;">${tool.name}</h3>
        <div class="tool-rating" style="background: #fbbf24; color: white; padding: 4px 8px; border-radius: 6px; font-size: 14px; font-weight: bold;">
          ⭐ ${tool.rating}
        </div>
      </div>
      <div class="tool-category" style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">${tool.category}</div>
      <p class="tool-description" style="color: #4b5563; margin-bottom: 16px; line-height: 1.6;">${tool.description}</p>
      <div class="tool-pricing" style="font-weight: bold; color: #059669; margin-bottom: 12px;">Pricing: ${tool.pricing}</div>
      <ul class="tool-features" style="list-style: none; padding: 0; margin-bottom: 16px;">
        ${tool.features.map(feature => `<li style="background: #f3f4f6; margin: 4px 0; padding: 6px 12px; border-radius: 6px; font-size: 14px;">✓ ${feature}</li>`).join('')}
      </ul>
      <a href="${tool.url}" target="_blank" class="btn btn--primary" style="display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; text-align: center; width: 100%; box-sizing: border-box;">
        Visit ${tool.name}
      </a>
    </div>
  `).join('');
  
  elements.featuredTools.innerHTML = toolsHTML;
}

// Render all tools
function renderAllTools() {
  if (!elements.allTools) return;
  
  const toolsHTML = filteredTools.map(tool => `
    <div class="tool-card" style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
      <div class="tool-image" style="margin-bottom: 16px;">
        <img src="${tool.image}" alt="${tool.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
      </div>
      <div class="tool-header" style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
        <h3 class="tool-name" style="font-size: 20px; font-weight: bold; color: #1f2937; margin: 0;">${tool.name}</h3>
        <div class="tool-rating" style="background: #fbbf24; color: white; padding: 4px 8px; border-radius: 6px; font-size: 14px; font-weight: bold;">
          ⭐ ${tool.rating}
        </div>
      </div>
      <div class="tool-category" style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">${tool.category}</div>
      <p class="tool-description" style="color: #4b5563; margin-bottom: 16px; line-height: 1.6;">${tool.description}</p>
      <div class="tool-pricing" style="font-weight: bold; color: #059669; margin-bottom: 12px;">Pricing: ${tool.pricing}</div>
      <ul class="tool-features" style="list-style: none; padding: 0; margin-bottom: 16px;">
        ${tool.features.map(feature => `<li style="background: #f3f4f6; margin: 4px 0; padding: 6px 12px; border-radius: 6px; font-size: 14px;">✓ ${feature}</li>`).join('')}
      </ul>
      <a href="${tool.url}" target="_blank" class="btn btn--primary" style="display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; text-align: center; width: 100%; box-sizing: border-box;">
        Visit ${tool.name}
      </a>
    </div>
  `).join('');
  
  elements.allTools.innerHTML = toolsHTML || '<p style="text-align: center; color: #6b7280; font-size: 18px; padding: 40px;">No tools found matching your criteria.</p>';
}

// Render categories
function renderCategories() {
  if (!elements.categoriesGrid) return;
  
  const categoriesHTML = appData.categories.map(category => `
    <div class="category-card" onclick="filterByCategory('${category.name}')" style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; background: white; cursor: pointer; text-align: center; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.1)';">
      <div class="category-icon" style="width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: white;" style="background-color: ${category.color};">
        🎯
      </div>
      <div class="category-name" style="font-size: 18px; font-weight: bold; color: #1f2937; margin-bottom: 8px;">${category.name}</div>
      <div class="category-count" style="color: #6b7280; font-size: 14px;">${category.count} tools</div>
    </div>
  `).join('');
  
  elements.categoriesGrid.innerHTML = categoriesHTML;
}

// Filter by category
function filterByCategory(categoryName) {
  if (elements.categoryFilter) {
    elements.categoryFilter.value = categoryName;
    filterTools();
    showPage('tools');
    updateNavigation('tools');
  }
}

// Render latest news
function renderLatestNews() {
  if (!elements.latestNews) return;
  
  const newsHTML = appData.news_articles.slice(0, 3).map(article => `
    <div class="news-card" style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
      <div class="news-header" style="margin-bottom: 12px;">
        <h3 class="news-title" style="font-size: 18px; font-weight: bold; color: #1f2937; margin: 0 0 8px 0; line-height: 1.4;">${article.title}</h3>
        <div class="news-meta" style="display: flex; justify-content: space-between; align-items: center;">
          <div class="news-date" style="color: #6b7280; font-size: 14px;">${article.date}</div>
          <div class="news-category" style="background: #eff6ff; color: #2563eb; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">${article.category}</div>
        </div>
      </div>
      <p class="news-summary" style="color: #4b5563; margin: 0; line-height: 1.6;">${article.summary}</p>
    </div>
  `).join('');
  
  elements.latestNews.innerHTML = newsHTML;
}

// Render all news
function renderAllNews() {
  if (!elements.allNews) return;
  
  const newsHTML = appData.news_articles.map(article => `
    <div class="news-card" style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
      <div class="news-header" style="margin-bottom: 12px;">
        <h3 class="news-title" style="font-size: 18px; font-weight: bold; color: #1f2937; margin: 0 0 8px 0; line-height: 1.4;">${article.title}</h3>
        <div class="news-meta" style="display: flex; justify-content: space-between; align-items: center;">
          <div class="news-date" style="color: #6b7280; font-size: 14px;">${article.date}</div>
          <div class="news-category" style="background: #eff6ff; color: #2563eb; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">${article.category}</div>
        </div>
      </div>
      <p class="news-summary" style="color: #4b5563; margin: 0 0 16px 0; line-height: 1.6;">${article.summary}</p>
      <p style="color: #6b7280; font-style: italic; font-size: 14px; margin: 0; line-height: 1.5;">
        This comprehensive analysis covers the latest developments in AI technology, providing insights into market trends, technological breakthroughs, and their implications for content creators and businesses in the rapidly evolving digital landscape.
      </p>
    </div>
  `).join('');
  
  elements.allNews.innerHTML = newsHTML;
}

// Render tutorials
function renderTutorials() {
  if (!elements.tutorialsGrid) return;
  
  const tutorialsHTML = appData.tutorials.map(tutorial => `
    <div class="tutorial-card" style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
      <div class="tutorial-image" style="margin-bottom: 16px;">
        <img src="${tutorial.article.image}" alt="${tutorial.title}" style="width: 100%; height: 240px; object-fit: cover; border-radius: 8px;" />
      </div>
      <h3 class="tutorial-title" style="font-size: 20px; font-weight: bold; color: #1f2937; margin: 0 0 12px 0; line-height: 1.3;">${tutorial.title}</h3>
      <div class="tutorial-meta" style="display: flex; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
        <span class="tutorial-difficulty ${tutorial.difficulty.toLowerCase()}" style="background: #f3f4f6; color: #374151; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">${tutorial.difficulty}</span>
        <span class="tutorial-duration" style="background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">${tutorial.duration}</span>
        <span class="tutorial-category" style="background: #ddd6fe; color: #7c3aed; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">${tutorial.category}</span>
      </div>
      <div class="tutorial-article" style="margin-bottom: 20px;">
        <h4 style="color: #1f2937; margin: 0 0 16px 0; font-size: 18px; font-weight: bold;">${tutorial.article.heading}</h4>
        <div class="tutorial-content">
          ${tutorial.article.body.map(paragraph => `<p style="color: #4b5563; margin: 0 0 12px 0; line-height: 1.6;">${paragraph}</p>`).join('')}
        </div>
      </div>
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
    stars += '⭐';
  }
  
  if (hasHalfStar) {
    stars += '⭐';
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