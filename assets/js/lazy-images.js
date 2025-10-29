document.addEventListener('DOMContentLoaded', function() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  lazyImages.forEach(img => {
    // Add loaded class when image loads
    img.addEventListener('load', function() {
      this.classList.add('loaded');
    });
    
    // If already loaded (cached)
    if (img.complete) {
      img.classList.add('loaded');
    }
    
    // Error handling
    img.addEventListener('error', function() {
      this.classList.add('loaded');
      console.warn('Failed to load image:', this.src);
    });
  });
});