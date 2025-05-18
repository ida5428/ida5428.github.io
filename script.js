// Function to set the theme
function setTheme(isDark) {
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    if (isDark) {
        document.body.classList.add('dark-mode');
        sunIcon.className = 'bx bx-sun bx-sm'; // outline sun in dark mode
        moonIcon.className = 'bx bxs-moon bx-sm'; // filled moon in dark mode
    } else {
        document.body.classList.remove('dark-mode');
        sunIcon.className = 'bx bxs-sun bx-sm'; // filled sun in light mode
        moonIcon.className = 'bx bx-moon bx-sm'; // outline moon in light mode
    }
    // Save theme preference to localStorage
    localStorage.setItem('darkMode', isDark);
}

// Function to toggle theme
function themeToggle() {
    const isDark = !document.body.classList.contains('dark-mode');
    setTheme(isDark);
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


// Function runs on scrolling and on window resize
window.onscroll = function() {scrollIndicator()};
window.onresize = function() {scrollIndicator()};

// Also check on initial load
document.addEventListener('DOMContentLoaded', scrollIndicator);

// Function to show scrolling indicator
function scrollIndicator() {
    const scrollButton = document.querySelector(".scroll-button");

    // Check if page is scrollable
    if (document.body.scrollHeight <= document.documentElement.clientHeight) {
        scrollButton.style.display = "none";
        return;
    }

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height);

    scrollButton.style.display = "none";

    if (scrolled >= 0.999) {
        scrollButton.style.display = "flex";
    }
}