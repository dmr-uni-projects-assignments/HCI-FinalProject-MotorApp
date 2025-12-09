document.addEventListener('DOMContentLoaded', () => {
    const resetForm = document.querySelector('.form');
    
    console.log("Forgot Password script loaded.");

    resetForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const email = resetForm.querySelector('input[type="email"]').value;
        console.log(`Sending password reset link to: ${email}`);
        
        resetForm.querySelector('.login-btn').textContent = 'SENDING...';

        setTimeout(() => {
            resetForm.querySelector('.login-btn').textContent = 'SEND RESET LINK';
            console.log(`Success! Check ${email} for the reset link.`);

        }, 2000);
    });
});