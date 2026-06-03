const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event){

    event.preventDefault();

    console.log("Step 1: Form Submitted");

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    console.log("Step 2: User Data =", userData);

    debugger; // Breakpoint for DevTools

    message.textContent = "Submitting...";

    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response=>{
        console.log("Step 3: Response Received", response);

        if(!response.ok){
            throw new Error("Request Failed");
        }

        return response.json();
    })
    .then(data=>{
        console.log("Step 4: Server Data =", data);

        message.textContent =
            "Registration Successful!";
    })
    .catch(error=>{
        console.error("Step 5: Error =", error);

        message.textContent =
            "Registration Failed!";
    });

});