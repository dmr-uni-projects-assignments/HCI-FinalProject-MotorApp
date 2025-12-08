document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;

    const savedMode = localStorage.getItem('theme'); // 'light' or 'dark'

    if (savedMode === 'light') {
        body.classList.add('light-mode');
        toggleButton.innerHTML = '☀️';
    } else {
        body.classList.remove('light-mode');
        toggleButton.innerHTML = '🌙';
    }

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

    toggleButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleButton.click();
        }
    });
});
