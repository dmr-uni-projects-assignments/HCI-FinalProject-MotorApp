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
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");

    if (!registerForm) return;

    registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_register",
        "template_register01",
        this
    )
    .then(() => {
        return emailjs.sendForm(
            "service_register",
            "template_register_user",
            this
        );
    })
    .then(() => {
        alert("Registration successful! Check your email.");
        registerForm.reset();
    })
    .catch((error) => {
        console.error(error);
        alert("Registration failed. Please try again.");
    });
});
});
