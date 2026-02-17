document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // Service Selection Function
    const serviceButtons = document.querySelectorAll('.service-button');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedService = this.dataset.service;
            // Handle service selection
            console.log(`Selected service: ${selectedService}`);
        });
    });

    // Razorpay Payment Integration
    function initializeRazorpay(amount) {
        const options = {
            key: '<YOUR_RAZORPAY_KEY>', // Replace with your Razorpay key
            amount: amount * 100, // Convert to paise
            currency: 'INR',
            name: 'Your Company Name',
            description: 'Payment for services',
            handler: function (response) {
                // Handle payment success
                console.log(response);
                generateInvoice(response.razorpay_payment_id);
            },
            prefill: {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
            },
            theme: {
                color: '#3399cc'
            }
        };

        const rzp = new Razorpay(options);
        rzp.open();
    }

    // Invoice Generation
    function generateInvoice(paymentId) {
        const invoiceId = `INV-${Date.now()}`; // Unique ID
        const formattedDate = new Date().toISOString().slice(0, 10);
        console.log(`Invoice ID: ${invoiceId}, Date: ${formattedDate}`);
    }

    // Form Clearing Function
    function clearForm() {
        document.getElementById('contact-form').reset();
    }

    // Contact Form Submission Handler
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Perform form validation and submission logic here
        initializeRazorpay(500); // Example amount
    });

    // Smooth Scrolling for Navigation Links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    for (let link of scrollLinks) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    }
});