const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');
const content = document.getElementById('content');

// Form validation to prevent XSS attacks
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Sanitize user input (escape special characters)
  const sanitizedName = nameInput.value.replace(/&/g, '&amp;')
                                     .replace(/</g, '&lt;')
                                     .replace(/>/g, '&gt;')
                                     .replace(/"/g, '&quot;');
  const sanitizedEmail = emailInput.value.replace(/&/g, '&amp;')
                                        .replace(/</g, '&lt;')
                                        .replace(/>/g, '&gt;')
                                        .replace(/"/g, '&quot;');

  // Display sanitized user input
  content.textContent = `Hello, ${sanitizedName}! Your email is ${sanitizedEmail}.`;
});

// Toggle menu visibility
menuButton.addEventListener('click', function() {
  menu.classList.toggle('hidden');
});
