document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
  
    // Event listener for form submission
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
  
      const query = searchInput.value.trim();
      
      if (query) {
        // Redirect to Google search results
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      }
    });
  });