// Enhanced welcome message for Climax Imran Academy website
window.addEventListener("load", function() {
    // Create a non-intrusive welcome popup
    const welcomeMessage = `
Welcome to Climax Imran Academy!
Providing excellence in education from Nursery to Senior Secondary.

Website designed and developed by The Sage (AAJromeo).
    `;
    
    // Use a nicer alert replacement
    if (confirm("🌟 Welcome! Would you like a short introduction?")) {
        alert(welcomeMessage);
    }

    // Log a friendly developer message in the console
    console.log("🌟 Climax Imran Academy website loaded successfully!");
    console.log("🌟 Developed by The Sage (AAJromeo)");
    
    // Optional: display a small welcome message on the page footer
    const footer = document.querySelector("footer");
    if (footer) {
        const msg = document.createElement("p");
        msg.style.fontStyle = "italic";
        msg.style.color = "goldenrod";
        msg.textContent = "Welcome to Climax Imran Academy! 🌟";
        footer.prepend(msg);
    }
});
