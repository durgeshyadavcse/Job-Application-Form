document.getElementById("jobApplicationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission
    // Extract form data
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    // Log form data to the console (or send it to a server)
    console.log("Form Submitted: ", formObject);
    // Example: Show an alert to the user
    alert("Form submitted successfully!");
});
