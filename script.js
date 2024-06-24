// script.js

document.addEventListener('DOMContentLoaded', function() {
    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirm-email');
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        if (email.value !== confirmEmail.value) {
            event.preventDefault(); // Prevent form submission if emails don't match
            confirmEmail.setCustomValidity('Email addresses must match.');
        } else {
            confirmEmail.setCustomValidity('');
        }
    });

    // Reset custom validity on input change
    confirmEmail.addEventListener('input', function() {
        confirmEmail.setCustomValidity('');
    });
});
