// sidebar
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const toggleBtn = document.getElementById("sidebar-toggle");
toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");
});
overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
});


// dark light mode
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;

    const savedMode = localStorage.getItem('theme'); 
    if (savedMode === 'light') {
        body.classList.add('light-mode');
        toggleButton.innerHTML = '☀️';
    } else {
        body.classList.remove('light-mode');
        toggleButton.innerHTML = '🌙';
    }

    // toggle theme
    toggleButton.addEventListener('click', () => {
        const isLight = body.classList.toggle('light-mode');

        if (isLight) {
            localStorage.setItem('theme', 'light');
            toggleButton.innerHTML = '☀️';
        } else {
            localStorage.setItem('theme', 'dark');
            toggleButton.innerHTML = '🌙';
        }
    });

});