var typed=new Typed(".text",{
    strings:["Web Developer","Python Developer","Open source contributer","AIML Enthusiast"],
    typespeed: 100,    /*speed of typing*/
    backspeed: 100,       /*speed of deleting*/
    backDelay: 1000,        /*wait time before deleting*/
    loop:true
});
const form = document.getElementById("contactform");

// Add event listener when the form is submitted
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevents the default form action (page reload)

  // Collect form data
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  // ✅ Clear input values immediately
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  // ✅ Show success message instantly
  const successMsg = document.getElementById("successMsg");
  successMsg.style.display = "block";
  setTimeout(() => {
    successMsg.style.display = "none";
  }, 3000);

  // ✅ Send data to Google Sheets Web App (in background)
  fetch("https://script.google.com/macros/s/AKfycbwTB7X3LAFhiOVKRHFXH9UDgCZpbnrN_jblGgF1dU6xo1D1Z34cSWbsSXsDVvutS4mDyw/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    console.log("Saved to Google Sheets:", response);
  })
  .catch(error => console.error("Error!", error.message));
});

