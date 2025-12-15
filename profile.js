document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.getElementById('mode-toggle'); 

    // Apply saved mode
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'light') {
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode'); 
    }

    
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const isLight = body.classList.toggle('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            toggleButton.innerHTML = isLight ? '☀️' : '🌙';
        });
    }
});
