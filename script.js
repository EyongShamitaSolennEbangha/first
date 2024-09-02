document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const fullname = document.getElementById("id1");
  const company = document.getElementById("id2");
  const email = document.getElementById("email");
  const phone = document.getElementById("id4");
  const address = document.getElementById("mess1");
  const message = document.getElementById("mess2");

  if (fullname.value == "" || company.value == "" || email.value == "" || phone.value == "" || address.value == "" || message.value == "") {
    alert("You Must Fill All");
  }

  let isValid = true;

  if (!isValidEmail(email)) {
    document.getElementById("emailError").classList.remove("hidden");

    isValid = false;
  }

  if (isValid) {
    alert("form submitted successfully!");
    fullname.value = ""
    company.value = ""
    email.value = ""
    phone.value = ""
    address.value = ""
    message.value = ""
  }
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}











