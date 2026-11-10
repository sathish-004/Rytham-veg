/**
 * Menu Category Switching Functionality
 */

try {
  document.addEventListener('DOMContentLoaded', function() {
    
    // Get all category buttons and menu categories
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    if (categoryButtons.length === 0 || menuCategories.length === 0) return;

    // Add click event listeners to category buttons
    categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get the category ID from data attribute
        const categoryId = this.getAttribute('data-category');
        
        // Hide all menu categories
        menuCategories.forEach(category => {
          category.classList.remove('active');
        });
        
        // Show the selected category
        const selectedCategory = document.getElementById(categoryId);
        if (selectedCategory) {
          selectedCategory.classList.add('active');
          
          // Scroll to the category section
          selectedCategory.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
          
          // Re-trigger animations for menu items
          const menuItems = selectedCategory.querySelectorAll('.menu-item-card');
          menuItems.forEach((item, index) => {
            item.style.animation = 'none';
            item.offsetHeight; // Trigger reflow
            item.style.animation = `slideUp 0.6s ease forwards ${index * 0.1}s`;
          });
        }
      });
    });

    // Initialize first category as active
    if (categoryButtons.length > 0) {
      categoryButtons[0].classList.add('active');
    }

    if (menuCategories.length > 0) {
      menuCategories[0].classList.add('active');
    }

    // Add smooth scroll behavior for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

  });
} catch (error) {
  console.error('Menu script error:', error);
}
