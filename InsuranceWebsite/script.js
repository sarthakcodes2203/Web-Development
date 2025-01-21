// // JavaScript for navigation menu functionality
// document.addEventListener("DOMContentLoaded", function() {
//     const navToggle = document.querySelector('.nav-toggle');
//     const navMenu = document.querySelector('.nav-menu');

//     navToggle.addEventListener('click', function() {
//         navMenu.classList.toggle('show');
//     });

//     // Close the navigation menu when a nav item is clicked
//     const navLinks = document.querySelectorAll('.nav-menu a');
//     navLinks.forEach(function(navLink) {
//         navLink.addEventListener('click', function() {
//             navMenu.classList.remove('show');
//         });
//     });
// });




// JavaScript for subscribing to the newsletter
document.addEventListener("DOMContentLoaded", function() {
    const newsletterForm = document.querySelector('.newsletter form');

    newsletterForm.addEventListener('submit',(event)=> {
        // Prevent the default form submission
        event.preventDefault(); 

        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;

        if (isValidEmail(email)) {
            console.log('Newsletter form submitted:',email);
            // You can send the email to your backend for subscription handling here
            // Example: sendSubscriptionToBackend(email);
            alert(`Thank you for subscribing with email: ${email}`);
            // Clear the input field after submission
            emailInput.value = ''; 
        } else {
            alert('Please enter a valid email address');
        }
    });

    // Function to validate email address
    function isValidEmail(email) {
        // Simple validation, you can enhance it based on your requirements
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});

