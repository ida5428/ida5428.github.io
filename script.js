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


// Function runs on scrolling and on window resize
window.onscroll = function() {scrollIndicator()};
window.onresize = function() {scrollIndicator()};

// Also check on initial load
document.addEventListener('DOMContentLoaded', scrollIndicator);

// Function to show scrolling indicator
// Modified code form W3Schools
function scrollIndicator() {
    const scrollUpButton = document.querySelector(".scroll-up");
    const scrollDownButton = document.querySelector(".scroll-down");

    // Get the full height and viewport height
    const fullHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
    const viewportHeight = window.innerHeight;

    // Check if page is scrollable
    if (fullHeight <= viewportHeight) {
        scrollUpButton.style.display = "none";
        scrollDownButton.style.display = "none";
        return;
    }

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height);

    scrollUpButton.style.display = "none";
    scrollDownButton.style.display = "none";

    if (scrolled >= 0.99) {
        scrollUpButton.style.display = "flex";
    } else {
        scrollDownButton.style.display = "flex";
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