// Function to set the theme
function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    // Save theme preference to localStorage
    localStorage.setItem('darkMode', isDark);
}

// Function to toggle theme
function toggle() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Check for saved theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        setTheme(true);
    } else if (savedTheme === 'false') {
        setTheme(false);
    } else {
        // If no saved preference, check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark);
    }
});


// Function runs on scrolling
window.onscroll = function() {scrollIndicator()};

// Function to show scrolling indicator
// Code from W3Schools, added my own if statement to change style opacity
function scrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height);
    if (scrolled >= 1) {
        document.querySelector(".scroll-indicator").style.opacity = 0;
        document.querySelector(".scroll-button").style.opacity = 1;
    } else {
        document.querySelector(".scroll-indicator").style.opacity = 1;
        document.querySelector(".scroll-button").style.opacity = 0;
    }
}