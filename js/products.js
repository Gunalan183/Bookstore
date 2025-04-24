// Products Page JavaScript

// Book data (in a real application, this would come from a backend)
const books = [
    {
        id: 1,
        title: "Angular - The Complete Guide",
        author: "Maximilian Schwarzmüller",
        category: "Frontend",
        cover: "./images/angular.jpeg",
        price: 0,
        originalPrice: 49.99,
        rating: 4.8,
        pdf: "/pdf/angular.pdf",
        description: "Master Angular (formerly Angular 2) and build awesome, reactive web apps with the successor of Angular.js",
        details: "This comprehensive guide covers everything from basic concepts to advanced techniques. You'll learn component architecture, directives, services, routing, HTTP access, and more.",
        specifications: {
            pages: 450,
            language: "English",
            publisher: "Code Academy",
            publicationDate: "2022-01-15",
            level: "Beginner to Advanced"
        },
        reviews: [
            { author: "John Doe", rating: 5, date: "2022-03-15", text: "Best Angular resource I've found! Clear explanations and practical examples." },
            { author: "Sarah Smith", rating: 4.5, date: "2022-02-28", text: "Excellent content, helped me understand Angular concepts that I struggled with before." }
        ]
    },
    {
        id: 2,
        title: "Node.js - The Complete Guide",
        author: "Maximilian Schwarzmüller",
        category: "Backend",
        cover: "./images/nodejs.jpeg",
        price: 29.99,
        originalPrice: 59.99,
        rating: 4.9,
        pdf: "/pdf/nodejs.pdf",
        description: "Master Node.js by building practical projects: RESTful APIs, GraphQL APIs, real-time web services and more!",
        details: "This guide will take you from the basics of Node.js to building complex backend applications. You'll learn about Express.js, MongoDB, authentication, and deployment.",
        specifications: {
            pages: 520,
            language: "English",
            publisher: "Tech Publishing",
            publicationDate: "2021-11-30",
            level: "Intermediate to Advanced"
        },
        reviews: [
            { author: "Michael Johnson", rating: 5, date: "2022-01-10", text: "Comprehensive and well-explained. The project-based approach really helps solidify the concepts." },
            { author: "Emily Clark", rating: 4.7, date: "2021-12-15", text: "Great resource for anyone looking to master Node.js!" }
        ]
    },
    {
        id: 3,
        title: "React - The Complete Guide",
        author: "Maximilian Schwarzmüller",
        category: "Frontend",
        cover: "./images/react.jpeg",
        price: 19.99,
        originalPrice: 49.99,
        rating: 4.7,
        pdf: "/pdf/react.pdf",
        description: "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js and way more!",
        details: "From the fundamentals to advanced topics, this guide covers everything you need to know to become proficient in React development.",
        specifications: {
            pages: 480,
            language: "English",
            publisher: "Web Dev Press",
            publicationDate: "2022-02-10",
            level: "Beginner to Advanced"
        },
        reviews: [
            { author: "Alex Williams", rating: 4.8, date: "2022-04-05", text: "The best React resource I've found. Clear explanations and practical examples." },
            { author: "Jessica Brown", rating: 4.5, date: "2022-03-20", text: "Great content! Helped me understand complex React concepts easily." }
        ]
    },
    {
        id: 4,
        title: "Vue.js - The Complete Guide",
        author: "Maximilian Schwarzmüller",
        category: "Frontend",
        cover: "./images/vuejs.jpeg",
        price: 24.99,
        originalPrice: 54.99,
        rating: 4.6,
        pdf: "/pdf/vuejs.pdf",
        description: "Learn Vue.js from the ground up and build amazing, fast selling apps with the Vue.js framework!",
        details: "This comprehensive guide will take you through Vue.js fundamentals, component architecture, Vuex for state management, Vue Router, and more.",
        specifications: {
            pages: 420,
            language: "English",
            publisher: "Tech Innovations",
            publicationDate: "2021-10-15",
            level: "Beginner to Intermediate"
        },
        reviews: [
            { author: "Thomas Lee", rating: 4.7, date: "2021-12-20", text: "Excellent resource for learning Vue.js! The examples are practical and helpful." },
            { author: "Sophia Martinez", rating: 4.5, date: "2021-11-30", text: "Very well-structured content. Made Vue.js easy to understand." }
        ]
    },
    {
        id: 5,
        title: "Python for Data Science",
        author: "Jose Portilla",
        category: "Data Science",
        cover: "./images/python.jpeg",
        price: 34.99,
        originalPrice: 69.99,
        rating: 4.8,
        pdf: "/pdf/python.pdf",
        description: "Learn Python for Data Science, Machine Learning, Data Visualization, and more with hands-on projects!",
        details: "This comprehensive guide covers Python libraries like NumPy, Pandas, Matplotlib, Seaborn, and Scikit-Learn for data analysis and machine learning.",
        specifications: {
            pages: 550,
            language: "English",
            publisher: "Data Science Publications",
            publicationDate: "2022-03-05",
            level: "Beginner to Advanced"
        },
        reviews: [
            { author: "Robert Wilson", rating: 5, date: "2022-04-15", text: "Perfect guide for anyone looking to get into data science with Python!" },
            { author: "Linda Garcia", rating: 4.6, date: "2022-03-25", text: "Comprehensive and well-explained with practical examples." }
        ]
    },
    {
        id: 6,
        title: "Machine Learning A-Z",
        author: "Kirill Eremenko",
        category: "Data Science",
        cover: "./images/ml.jpeg",
        price: 39.99,
        originalPrice: 79.99,
        rating: 4.9,
        pdf: "/pdf/ml.pdf",
        description: "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts!",
        details: "This course covers all aspects of machine learning, including regression, classification, clustering, natural language processing, and deep learning.",
        specifications: {
            pages: 620,
            language: "English",
            publisher: "AI Learning Press",
            publicationDate: "2021-12-10",
            level: "Intermediate to Advanced"
        },
        reviews: [
            { author: "David Thompson", rating: 5, date: "2022-02-20", text: "Excellent resource for machine learning! The practical approach makes complex concepts digestible." },
            { author: "Michelle Rodriguez", rating: 4.8, date: "2022-01-15", text: "Comprehensive guide that covers all the essential machine learning topics." }
        ]
    },
    {
        id: 7,
        title: "Cybersecurity Fundamentals",
        author: "Nathan House",
        category: "Cyber Security",
        cover: "./images/cybersecurity.jpeg",
        price: 44.99,
        originalPrice: 89.99,
        rating: 4.7,
        pdf: "/pdf/cybersecurity.pdf",
        description: "Learn the fundamentals of cybersecurity and protect yourself from online threats!",
        details: "This guide covers network security, encryption, vulnerability assessment, ethical hacking, and best practices for personal and organizational security.",
        specifications: {
            pages: 530,
            language: "English",
            publisher: "Security Experts",
            publicationDate: "2022-01-25",
            level: "Beginner to Intermediate"
        },
        reviews: [
            { author: "James Wilson", rating: 4.8, date: "2022-03-10", text: "Excellent introduction to cybersecurity concepts with practical advice." },
            { author: "Amanda Lewis", rating: 4.6, date: "2022-02-05", text: "Well-structured and comprehensive. Great resource for beginners." }
        ]
    },
    {
        id: 8,
        title: "Ethical Hacking",
        author: "Zaid Sabih",
        category: "Cyber Security",
        cover: "./images/hacking.jpeg",
        price: 49.99,
        originalPrice: 99.99,
        rating: 4.8,
        pdf: "/pdf/hacking.pdf",
        description: "Learn ethical hacking, penetration testing, and network security from scratch!",
        details: "This comprehensive guide covers network scanning, social engineering, system hacking, malware threats, sniffing, and more. Perfect for aspiring ethical hackers.",
        specifications: {
            pages: 600,
            language: "English",
            publisher: "Hacking Academy",
            publicationDate: "2021-11-15",
            level: "Intermediate to Advanced"
        },
        reviews: [
            { author: "Christopher Moore", rating: 5, date: "2022-01-30", text: "Incredible resource for learning ethical hacking! The hands-on approach is fantastic." },
            { author: "Jennifer Taylor", rating: 4.7, date: "2021-12-20", text: "Comprehensive and detailed. Covers all the essential topics in ethical hacking." }
        ]
    },
    {
        id: 9,
        title: "Django 4 By Example",
        author: "Antonio Melé",
        category: "Backend",
        cover: "./images/django.jpeg",
        price: 32.99,
        originalPrice: 64.99,
        rating: 4.7,
        pdf: "/pdf/django.pdf",
        description: "Build powerful web applications with Python's leading framework! Learn by doing with practical examples.",
        details: "This hands-on guide teaches you how to build modern web applications with Django 4. You'll create a blog, social media site, e-commerce platform, and more while learning best practices.",
        specifications: {
            pages: 510,
            language: "English",
            publisher: "Python Press",
            publicationDate: "2022-04-10",
            level: "Intermediate"
        },
        reviews: [
            { author: "Daniel Smith", rating: 4.8, date: "2022-05-18", text: "Excellent practical examples and clear explanations. Perfect for those who want to truly understand Django." },
            { author: "Anna Johnson", rating: 4.6, date: "2022-06-05", text: "One of the best Django resources available. The step-by-step approach is incredibly helpful." }
        ]
    },
    {
        id: 10,
        title: "Spring Boot in Action",
        author: "Craig Walls",
        category: "Backend",
        cover: "./images/spring.jpeg",
        price: 36.99,
        originalPrice: 74.99,
        rating: 4.8,
        pdf: "/pdf/spring.pdf",
        description: "Master Spring Boot and build production-ready applications quickly and efficiently.",
        details: "A hands-on guide to Spring Boot that helps you build powerful Java applications with minimal configuration. Learn how to create RESTful APIs, secure your applications, and integrate with databases.",
        specifications: {
            pages: 480,
            language: "English",
            publisher: "Java Enterprise",
            publicationDate: "2022-01-20",
            level: "Intermediate to Advanced"
        },
        reviews: [
            { author: "Michael Chen", rating: 5, date: "2022-03-14", text: "The definitive guide for Spring Boot development. Clear examples and excellent explanations." },
            { author: "Rachel Adams", rating: 4.7, date: "2022-02-28", text: "This book accelerated my learning of Spring Boot significantly. Highly recommended!" }
        ]
    },
    {
        id: 11,
        title: "PHP & MySQL: Server-side Web Development",
        author: "Jon Duckett",
        category: "Backend",
        cover: "./images/php.jpeg",
        price: 25.99,
        originalPrice: 59.99,
        rating: 4.6,
        pdf: "/pdf/php.pdf",
        description: "Learn how to build interactive, data-driven websites with PHP and MySQL from scratch.",
        details: "This comprehensive guide takes you through all the essentials of server-side web development with PHP and MySQL. You'll learn how to create dynamic websites that store and retrieve data from databases.",
        specifications: {
            pages: 650,
            language: "English",
            publisher: "Web Developer's Library",
            publicationDate: "2021-09-15",
            level: "Beginner to Intermediate"
        },
        reviews: [
            { author: "Jason Miller", rating: 4.5, date: "2021-11-20", text: "Excellent for beginners! The visual approach makes learning PHP and MySQL much easier." },
            { author: "Sophia Williams", rating: 4.7, date: "2021-10-18", text: "This book filled in many gaps in my knowledge. Very well-structured and easy to follow." }
        ]
    },
    {
        id: 12,
        title: "Deep Learning with Python",
        author: "François Chollet",
        category: "Data Science",
        cover: "./images/deep-learning.jpeg",
        price: 49.99,
        originalPrice: 89.99,
        rating: 4.9,
        pdf: "/pdf/deep-learning.pdf",
        description: "Master deep learning with Python and the Keras library, written by the creator of Keras himself.",
        details: "This book offers a comprehensive introduction to deep learning with Python and Keras. You'll learn about neural networks, convolutional networks for image processing, recurrent networks for sequence processing, and more.",
        specifications: {
            pages: 520,
            language: "English",
            publisher: "AI Publications",
            publicationDate: "2022-02-05",
            level: "Intermediate to Advanced"
        },
        reviews: [
            { author: "Alex Turner", rating: 5, date: "2022-04-10", text: "The bible of deep learning with Python. Incredibly well-written and insightful." },
            { author: "Lisa Wang", rating: 4.8, date: "2022-03-22", text: "Chollet's expertise shines through. Complex topics explained in an accessible way." }
        ]
    },
    {
        id: 13,
        title: "Data Science from Scratch",
        author: "Joel Grus",
        category: "Data Science",
        cover: "./images/data-science.jpeg",
        price: 37.99,
        originalPrice: 79.99,
        rating: 4.7,
        pdf: "/pdf/data-science.pdf",
        description: "Learn the fundamentals of data science by implementing algorithms and models from scratch in Python.",
        details: "This book teaches you the fundamentals of data science by implementing all algorithms from scratch. You'll gain a deep understanding of the math, statistics, and programming needed for data science.",
        specifications: {
            pages: 480,
            language: "English",
            publisher: "O'Reilly Media",
            publicationDate: "2021-11-15",
            level: "Intermediate"
        },
        reviews: [
            { author: "Ryan Cooper", rating: 4.6, date: "2022-01-20", text: "Great approach to learning data science fundamentals. The 'from scratch' aspect really helps build understanding." },
            { author: "Emma Lewis", rating: 4.8, date: "2021-12-15", text: "This book filled in the theoretical gaps that many practical guides miss. Highly recommended!" }
        ]
    },
    {
        id: 14,
        title: "Practical Statistics for Data Scientists",
        author: "Peter Bruce & Andrew Bruce",
        category: "Data Science",
        cover: "./images/statistics.jpeg",
        price: 34.99,
        originalPrice: 69.99,
        rating: 4.8,
        pdf: "/pdf/statistics.pdf",
        description: "Learn the statistical concepts essential for data science with practical examples in R and Python.",
        details: "This book bridges the gap between statistics and data science, focusing on the concepts most relevant to practitioners. Learn about exploratory data analysis, random sampling, regression models, and machine learning algorithms.",
        specifications: {
            pages: 420,
            language: "English",
            publisher: "O'Reilly Media",
            publicationDate: "2022-03-10",
            level: "Intermediate"
        },
        reviews: [
            { author: "David Chen", rating: 4.9, date: "2022-05-12", text: "The perfect statistics book for data scientists! Focuses on what's actually useful in practice." },
            { author: "Hannah Wilson", rating: 4.7, date: "2022-04-18", text: "Excellent balance of theory and practice. Helped me finally understand many statistical concepts." }
        ]
    },
    {
        id: 15,
        title: "Practical Malware Analysis",
        author: "Michael Sikorski & Andrew Honig",
        category: "Cyber Security",
        cover: "./images/malware.jpeg",
        price: 54.99,
        originalPrice: 99.99,
        rating: 4.9,
        pdf: "/pdf/malware.pdf",
        description: "The hands-on guide to dissecting malicious software to understand how it works, what it does, and how to defeat it.",
        details: "This book is a comprehensive guide to malware analysis, covering static and dynamic analysis, disassembly, debugging, and malware behavior. You'll learn techniques used by professional security researchers.",
        specifications: {
            pages: 700,
            language: "English",
            publisher: "No Starch Press",
            publicationDate: "2021-10-05",
            level: "Advanced"
        },
        reviews: [
            { author: "Mark Johnson", rating: 5, date: "2021-12-10", text: "The definitive guide to malware analysis. Incredibly detailed and practical." },
            { author: "Samantha Lee", rating: 4.8, date: "2021-11-20", text: "This book taught me more than my entire cybersecurity degree. A must-have for security professionals." }
        ]
    },
    {
        id: 16,
        title: "Web Application Security",
        author: "Andrew Hoffman",
        category: "Cyber Security",
        cover: "./images/web-security.jpeg",
        price: 42.99,
        originalPrice: 84.99,
        rating: 4.7,
        pdf: "/pdf/web-security.pdf",
        description: "Learn how to secure your web applications from the most common and dangerous attacks.",
        details: "This practical guide teaches you how to identify security vulnerabilities in web applications and implement effective countermeasures. Covers XSS, CSRF, SQL injection, broken authentication, and more.",
        specifications: {
            pages: 480,
            language: "English",
            publisher: "Security Press",
            publicationDate: "2022-01-15",
            level: "Intermediate to Advanced"
        },
        reviews: [
            { author: "Thomas Anderson", rating: 4.6, date: "2022-03-08", text: "Very practical guide that covers all the important web security concepts. Great examples and mitigations." },
            { author: "Jennifer Smith", rating: 4.8, date: "2022-02-14", text: "This book should be mandatory reading for all web developers. Excellent content and practical advice." }
        ]
    }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.querySelectorAll('.category-filter');
const priceRangeFilter = document.getElementById('priceRangeFilter');
const priceRangeValue = document.getElementById('priceRangeValue');
const ratingFilters = document.querySelectorAll('.rating-filter');
const booksGrid = document.getElementById('booksGrid');
const modal = document.getElementById('bookModal');
const cartSidebar = document.getElementById('cartSidebar');
const cartItemsContainer = document.getElementById('cartItems');
const cartCountElement = document.getElementById('cartCount');
const cartTotalAmount = document.getElementById('cartTotalAmount');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartNotification = document.getElementById('cartNotification');
const emptyCartMessage = document.getElementById('emptyCart');

// State variables
let filteredBooks = [...books];
let cart = [];
let activeFilters = {
    category: [],
    maxPrice: 100,
    minRating: 0,
    search: ''
};

// Initialize the page
function init() {
    displayBooks(books);
    updatePriceRangeLabel();
    setupEventListeners();
    loadCartFromStorage();
    updateCartUI();
}

// Set up event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', handleSearch);

    // Category filters
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', handleCategoryFilter);
    });

    // Price range filter
    priceRangeFilter.addEventListener('input', handlePriceFilter);

    // Rating filters
    ratingFilters.forEach(filter => {
        filter.addEventListener('change', handleRatingFilter);
    });

    // Close modal
    document.getElementById('closeModal').addEventListener('click', closeModal);

    // Close cart
    document.getElementById('closeCart').addEventListener('click', closeCart);

    // Cart toggle
    document.getElementById('cartToggle').addEventListener('click', toggleCart);

    // Outside click to close modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Checkout button
    checkoutBtn.addEventListener('click', handleCheckout);
}

// Display books in the grid
function displayBooks(booksToDisplay) {
    booksGrid.innerHTML = '';

    if (booksToDisplay.length === 0) {
        booksGrid.innerHTML = '<div class="no-results">No books found matching your criteria.</div>';
        return;
    }

    booksToDisplay.forEach(book => {
        const bookCard = createBookCard(book);
        booksGrid.appendChild(bookCard);
    });
}

// Create a book card element
function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.dataset.id = book.id;

    const isFree = book.price === 0;
    const discountPercent = book.originalPrice ? Math.round((1 - book.price / book.originalPrice) * 100) : 0;

    card.innerHTML = `
        <div class="book-cover">
            <img src="${book.cover}" alt="${book.title}">
            <div class="book-overlay">
                <a href="#" class="btn-view" data-id="${book.id}">Quick View</a>
                <a href="${book.pdf}" class="btn-download"><i class="fas fa-download"></i> Download</a>
            </div>
            <div class="discount-badge">${isFree ? 'Free' : discountPercent + '% OFF'}</div>
        </div>
        <div class="book-info">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <div class="book-rating">
                ${getStarRating(book.rating)}
                <span>${book.rating.toFixed(1)}</span>
            </div>
            <div class="book-price">
                ${isFree ? 
                    '<span class="current-price">Free</span>' : 
                    `<span class="original-price">$${book.originalPrice.toFixed(2)}</span>
                     <span class="current-price">$${book.price.toFixed(2)}</span>`
                }
            </div>
            <button class="btn-add-cart" data-id="${book.id}">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        </div>
    `;

    // Add event listeners
    card.querySelector('.btn-view').addEventListener('click', (e) => {
        e.preventDefault();
        openBookModal(book.id);
    });

    card.querySelector('.btn-add-cart').addEventListener('click', () => {
        addToCart(book.id);
    });

    return card;
}

// Generate star rating HTML
function getStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && halfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }

    return stars;
}

// Filter books based on active filters
function filterBooks() {
    filteredBooks = books.filter(book => {
        // Category filter
        if (activeFilters.category.length > 0 && !activeFilters.category.includes(book.category)) {
            return false;
        }

        // Price filter
        if (book.price > activeFilters.maxPrice) {
            return false;
        }

        // Rating filter
        if (book.rating < activeFilters.minRating) {
            return false;
        }

        // Search filter
        if (activeFilters.search && !bookMatchesSearch(book, activeFilters.search)) {
            return false;
        }

        return true;
    });

    displayBooks(filteredBooks);
}

// Check if book matches search query
function bookMatchesSearch(book, query) {
    query = query.toLowerCase();
    return (
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.category.toLowerCase().includes(query) ||
        book.description.toLowerCase().includes(query)
    );
}

// Handle search input
function handleSearch() {
    activeFilters.search = searchInput.value.trim();
    filterBooks();
}

// Handle category filter changes
function handleCategoryFilter() {
    activeFilters.category = [];
    categoryFilters.forEach(filter => {
        if (filter.checked) {
            activeFilters.category.push(filter.value);
        }
    });
    filterBooks();
}

// Handle price range filter
function handlePriceFilter() {
    activeFilters.maxPrice = parseInt(priceRangeFilter.value);
    updatePriceRangeLabel();
    filterBooks();
}

// Update price range label
function updatePriceRangeLabel() {
    priceRangeValue.textContent = `$${priceRangeFilter.value}`;
}

// Handle rating filter changes
function handleRatingFilter() {
    let selectedRating = 0;
    ratingFilters.forEach(filter => {
        if (filter.checked) {
            selectedRating = parseInt(filter.value);
        }
    });
    activeFilters.minRating = selectedRating;
    filterBooks();
}

// Open book modal
function openBookModal(bookId) {
    const book = books.find(b => b.id === parseInt(bookId));
    if (!book) return;

    // Fill modal with book details
    document.getElementById('modalBookTitle').textContent = book.title;
    document.getElementById('modalBookAuthor').textContent = `by ${book.author}`;
    document.getElementById('modalBookCover').src = book.cover;
    document.getElementById('modalBookCategory').textContent = book.category;
    document.getElementById('modalBookRating').innerHTML = `${getStarRating(book.rating)} ${book.rating.toFixed(1)}`;
    
    const isFree = book.price === 0;
    if (isFree) {
        document.getElementById('modal-original-price').style.display = 'none';
        document.getElementById('modal-current-price').textContent = 'Free';
    } else {
        document.getElementById('modal-original-price').style.display = 'inline';
        document.getElementById('modal-original-price').textContent = `$${book.originalPrice.toFixed(2)}`;
        document.getElementById('modal-current-price').textContent = `$${book.price.toFixed(2)}`;
    }
    
    document.getElementById('bookDescription').textContent = book.description;
    
    // Set download button link
    document.getElementById('modalDownloadBtn').href = book.pdf;
    
    // Set add to cart button data
    document.getElementById('modalAddToCartBtn').dataset.id = book.id;
    
    // Set up tabs
    setupModalTabs(book);

    // Show the modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Add event listener for add to cart button in modal
    document.getElementById('modalAddToCartBtn').addEventListener('click', () => {
        addToCart(book.id);
    });
}

// Set up modal tabs
function setupModalTabs(book) {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Details tab content
    document.getElementById('detailsTabContent').innerHTML = `
        <p>${book.details}</p>
    `;
    
    // Specifications tab content
    document.getElementById('specificationsTabContent').innerHTML = `
        <ul>
            <li><strong>Pages:</strong> ${book.specifications.pages}</li>
            <li><strong>Language:</strong> ${book.specifications.language}</li>
            <li><strong>Publisher:</strong> ${book.specifications.publisher}</li>
            <li><strong>Publication Date:</strong> ${book.specifications.publicationDate}</li>
            <li><strong>Level:</strong> ${book.specifications.level}</li>
        </ul>
    `;
    
    // Reviews tab content
    const reviewsContainer = document.getElementById('reviewsTabContent');
    reviewsContainer.innerHTML = '';
    
    book.reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.innerHTML = `
            <div class="review-header">
                <div class="review-author">${review.author}</div>
                <div class="review-rating">${getStarRating(review.rating)}</div>
            </div>
            <div class="review-date">${review.date}</div>
            <div class="review-text">${review.text}</div>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
    
    // Set up tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to current button and corresponding tab
            button.classList.add('active');
            const tabId = button.dataset.tab;
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Set the first tab as active by default
    tabButtons[0].click();
}

// Close the modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Re-enable scrolling
}

// Add book to cart
function addToCart(bookId) {
    const book = books.find(b => b.id === parseInt(bookId));
    if (!book) return;
    
    // Check if book is already in cart
    const existingItem = cart.find(item => item.id === book.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: book.id,
            title: book.title,
            price: book.price,
            cover: book.cover,
            quantity: 1
        });
    }
    
    // Save cart to localStorage
    saveCartToStorage();
    
    // Update cart UI
    updateCartUI();
    
    // Show notification
    showCartNotification(book.title);
    
    // Highlight the book card
    highlightBookCard(book.id);
}

// Remove item from cart
function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== parseInt(bookId));
    saveCartToStorage();
    updateCartUI();
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
}

// Close cart sidebar
function closeCart() {
    cartSidebar.classList.remove('open');
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    
    // Show/hide empty cart message
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartItemsContainer.style.display = 'none';
        checkoutBtn.disabled = true;
    } else {
        emptyCartMessage.style.display = 'none';
        cartItemsContainer.style.display = 'block';
        checkoutBtn.disabled = false;
    }
    
    // Update cart items
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.cover}" alt="${item.title}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                <div class="cart-item-quantity">Qty: ${item.quantity}</div>
            </div>
            <button class="remove-item" data-id="${item.id}">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        cartItemsContainer.appendChild(cartItem);
        
        // Add event listener for remove button
        cartItem.querySelector('.remove-item').addEventListener('click', () => {
            removeFromCart(item.id);
        });
    });
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalAmount.textContent = `$${total.toFixed(2)}`;
}

// Show cart notification
function showCartNotification(bookTitle) {
    const notification = document.getElementById('cartNotificationText');
    notification.textContent = `"${bookTitle}" added to cart`;
    
    cartNotification.classList.add('show');
    
    setTimeout(() => {
        cartNotification.classList.remove('show');
    }, 3000);
}

// Highlight book card
function highlightBookCard(bookId) {
    const bookCard = document.querySelector(`.book-card[data-id="${bookId}"]`);
    if (!bookCard) return;
    
    bookCard.classList.add('highlight');
    
    setTimeout(() => {
        bookCard.classList.remove('highlight');
    }, 2000);
}

// Handle checkout
function handleCheckout() {
    alert('Proceeding to checkout with ' + cart.length + ' items.');
    // In a real application, this would redirect to a checkout page
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('ebooks-cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('ebooks-cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            cart = [];
        }
    }
}

// Reset all filters
function resetFilters() {
    // Reset category filters
    categoryFilters.forEach(filter => {
        filter.checked = false;
    });
    
    // Reset price range
    priceRangeFilter.value = 100;
    
    // Reset rating filters
    ratingFilters[0].checked = true; // Select "Any" rating
    
    // Reset search
    searchInput.value = '';
    
    // Reset active filters object
    activeFilters = {
        category: [],
        maxPrice: 100,
        minRating: 0,
        search: ''
    };
    
    // Update UI
    updatePriceRangeLabel();
    
    // Re-filter books
    filterBooks();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', init);
