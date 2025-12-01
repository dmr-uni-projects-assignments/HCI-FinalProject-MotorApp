document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('.form');
    
    // Check if the register page
    console.log("Register page script loaded.");

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        // --- Placeholder Registration Logic ---
        const username = registerForm.querySelector('input[type="text"]').value;
        const email = registerForm.querySelector('input[type="email"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;
        const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value;

        if (password !== confirmPassword) {
            console.error("Error: Passwords do not match!");
            return;
        }

        console.log(`Attempting to register user: ${username}, Email: ${email}`);
    });
});