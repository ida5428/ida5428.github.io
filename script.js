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
function themeToggle() {
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
    document.querySelector(".scroll-up").style.display = "none";
    document.querySelector(".scroll-down").style.display = "none";
    if (scrolled >= 1) {
        document.querySelector(".scroll-up").style.display = "flex";
    } else {
        document.querySelector(".scroll-down").style.display = "flex";
    }
}

function scrollTopFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollBottomFunction() {
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    window.scrollTo({
        top: height,
        behavior: 'smooth'
    });
}