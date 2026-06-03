const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    message.textContent = "Submitting...";

    // Simulate server delay
    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if(response.ok){
                message.textContent =
                    "Registration Successful!";
                form.reset();
            } else {
                throw new Error("Failed");
            }
        })
        .catch(error => {
            message.textContent =
                "Registration Failed!";
        });

    }, 2000); // 2-second delay

});