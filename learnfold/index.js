document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get values from form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Your authentication logic goes here (e.g., check against database)
    if (username === "example" && password === "password") {
        // If authentication is successful, redirect to another page
        window.location.href = "welcome.html";
    } else if (username === "example") {
        // If username exists but password is incorrect, display error message
        document.getElementById("error-message").textContent = "Incorrect password.";
    } else {
        // If username doesn't exist, display error message
        document.getElementById("error-message").textContent = "No user found.";
    }
});
