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
    
    // Animation sequence for name and down indicator
    const nameElement = document.querySelector(".name h2");
    const downIndicator = document.querySelector(".down-indicator");
    
    if (nameElement && downIndicator) {
        // Hide down indicator initially
        downIndicator.style.opacity = "0";
        
        // Calculate total delay (animation time + 1 second)
        const nameAnimationDuration = 500; // 0.5s from CSS
        const additionalDelay = 1000; // 1 second delay
        
        // Show down indicator after name animation + delay
        setTimeout(() => {
            if (window.scrollY === 0) { // Only show if still at top
                downIndicator.style.opacity = "1";
            }
        }, nameAnimationDuration + additionalDelay);
    }
});

// Function runs on scrolling and on window resize
window.onscroll = function() {
    scrollIndicator();
    updateDownIndicator();
};
window.onresize = function() {
    scrollIndicator();
    updateDownIndicator();
};

// Also check on initial load
document.addEventListener('DOMContentLoaded', function() {
    scrollIndicator();
    // Remove updateDownIndicator() from here as we're handling it separately
});

// Add a variable to store the timeout ID
let downIndicatorTimeout;

function updateDownIndicator() {
    const downIndicator = document.querySelector(".down-indicator");
    
    if (!downIndicator) return;
    
    // Clear any existing timeout
    if (downIndicatorTimeout) {
        clearTimeout(downIndicatorTimeout);
    }
    
    if (window.scrollY > 0) {
        // Hide the indicator when not at the top
        downIndicator.style.opacity = "0";
    } else {
        // When at the top, show the indicator after a delay
        downIndicatorTimeout = setTimeout(() => {
            if (window.scrollY === 0) { // Double-check we're still at the top
                downIndicator.style.opacity = "1";
            }
        }, 1000); // 1-second delay
    }
}

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