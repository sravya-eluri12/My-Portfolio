// Select the button and body elements
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check if dark mode is already enabled (stored in localStorage)
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️ Light Mode';
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update the button text based on current mode
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        toggleButton.textContent = '☀️ Light Mode';
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        toggleButton.textContent = '🌙 Dark Mode';
    }
});
