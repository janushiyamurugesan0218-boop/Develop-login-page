document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Simple Regex pattern to validate email formatting
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    loginForm.addEventListener('submit', (event) => {
        // Prevent default browser form submission
        event.preventDefault();
        
        let isValid = true;

        // 1. Email Validation
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.style.display = 'block';
            emailInput.style.borderColor = '#dc2626';
            isValid = false;
        } else {
            emailError.style.display = 'none';
            emailInput.style.borderColor = '#d1d5db';
        }

        // 2. Password Validation (Checks for minimum length of 6 characters)
        if (passwordInput.value.trim().length < 6) {
            passwordError.style.display = 'block';
            passwordInput.style.borderColor = '#dc2626';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
            passwordInput.style.borderColor = '#d1d5db';
        }

        // 3. Success Log
        if (isValid) {
            alert('🎉 Form submitted successfully! (JavaScript validation passed)');
            console.log('Target Email:', emailInput.value);
            // Here you would normally send data to your back-end server.
        }
    });
});