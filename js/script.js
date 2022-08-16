const emailField = document.getElementById("email-field");
const passwordField = document.getElementById("pas-field");
const nameField = document.getElementById("name-field");
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = emailField.value;
    const password = passwordField.value;
    const name = nameField.value;

    if (email == "pola@email.com" && password == "dhukte_den") {
      window.location = "account.html?name=" + name;
      console.log("sdsads");
    } else {
      alert("authentication failed");
      console.log("sdsd");
    }
  });
