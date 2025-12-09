// ------------------------------
// DARK MODE TOGGLE
// ------------------------------
const modeToggle = document.getElementById("mode-toggle");

// Load saved mode
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

// Toggle theme
if (modeToggle) {
    modeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        // Save user preference
        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
}


// ------------------------------
// SIDEBAR TOGGLE
// ------------------------------
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const overlay = document.getElementById("overlay");

if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        overlay.classList.toggle("show");
    });
}

// Close sidebar when clicking overlay
if (overlay) {
    overlay.addEventListener("click", () => {
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
    });
}


// ------------------------------
// CLOSE SIDEBAR WHEN RESIZING TO LARGE SCREEN
// ------------------------------
window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
    }
});
