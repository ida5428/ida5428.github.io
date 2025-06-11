// Function to set the theme
function setTheme(isDark) {
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    if (isDark) {
        document.documentElement.classList.add('dark-mode');
        sunIcon.className = 'bx bx-sun bx-sm'; // outline sun in dark mode
        moonIcon.className = 'bx bxs-moon bx-sm'; // filled moon in dark mode
    } else {
        document.documentElement.classList.remove('dark-mode');
        sunIcon.className = 'bx bxs-sun bx-sm'; // filled sun in light mode
        moonIcon.className = 'bx bx-moon bx-sm'; // outline moon in light mode
    }
    // Save theme preference to localStorage
    localStorage.setItem('darkMode', isDark);
}

// Function to toggle theme
function themeToggle() {
    const isDark = !document.documentElement.classList.contains('dark-mode');
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
window.onscroll = function() {
    scrollIndicators()
};
window.onresize = function() {
    scrollIndicators()
};

// Also check on initial load
document.addEventListener('DOMContentLoaded', scrollIndicators);

// Function to show scrolling indicator
function scrollIndicators() {
    const scrollButton = document.querySelector(".scroll-button");
    const downArrows = document.querySelector(".down-indicator");

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height);

    if (scrolled <= 0.05) {
        downArrows.style.visibility = "visible";
        downArrows.classList.remove("hidden");
    } else {
        downArrows.classList.add("hidden");
    }

    // Check if page is scrollable
    if (document.body.scrollHeight <= document.documentElement.clientHeight) {
        scrollButton.style.visibility = "hidden";
        return;
    }

    if (scrolled >= 0.999) {
        scrollButton.style.visibility = "visible";
        scrollButton.classList.remove("hidden");
    } else {
        scrollButton.classList.add("hidden");
    }
}