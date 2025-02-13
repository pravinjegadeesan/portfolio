// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message Sent! Thank you for contacting me, ' + name + '.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields!');
    }
});
