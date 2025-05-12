// Get elements
const learnMoreButton = document.getElementById('learn-more');
const contactForm = document.getElementById('contact-form');
const serviceButtons = document.querySelectorAll('.service-btn');
const faqItems = document.querySelectorAll('details');

// Smooth scrolling for Learn More button
if (learnMoreButton) {
    learnMoreButton.addEventListener('click', function() {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
}

// Contact Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        if (name && email && message) {
            console.log('Form submitted:', name, email, message);
            alert('Thank you for contacting us!');
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
}

// Enable smooth scrolling for all nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Interactive service buttons
serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert(`You clicked on ${button.previousElementSibling.innerText}!`);
    });
});

// FAQ section: Close other items when one is opened
faqItems.forEach(item => {
    item.addEventListener('click', function() {
        faqItems.forEach(faq => {
            if (faq !== item) faq.removeAttribute("open");
        });
    });
});
