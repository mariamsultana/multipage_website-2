const message =
  "Thank you for submitting your request. We will respond shortly.";

document
  .getElementById("contactform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
