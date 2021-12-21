function myFunction() {
  var un = document.forms["myForm"]["Uname"].value;
  var pw = document.forms["myForm"]["Pass"].value;

  if (un == "student" && pw == "1234") {
    window.location.href = "minprofil.html";
  } else {
    alert("You have entered the wrong username or password.");
  } 
}

//document.addEventListener("DOMContentLoaded", () => {
  //const createAccountForm = document.querySelector("#signupBtn");
//});