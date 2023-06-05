// Dark mode toggle function
function toggleDarkMode() {
  var bodyElement = document.querySelector('body');
  bodyElement.classList.toggle('dark-mode');
}

// Event listener for dark mode toggle button
document.getElementById('toggleDarkModeButton').addEventListener('click', function() {
  toggleDarkMode();
});


