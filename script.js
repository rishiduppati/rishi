// Scroll to the services section when the Explore Services button is clicked
function exploreServices() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    this.reset();
});
