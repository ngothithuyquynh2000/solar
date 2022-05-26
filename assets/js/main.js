var solarInverter = document.getElementById("solar_inverter");
var registerAccount = document.getElementById("register");
var createAccount = document.getElementById("create_account");
var forgotPass = document.getElementById("forgot_password");
var forPass = document.getElementById("forPass");

var check = false;
createAccount.addEventListener("click", () => {
  if (check) {
    registerAccount.style.display = "none";
    check = true;
    solarInverter.style.display = "block";
  } else {
    registerAccount.style.display = "block";
    check = false;
    solarInverter.style.display = "none";
  }
});

forPass.addEventListener("click", () => {
  if (check) {
    forgotPass.style.display = "none";
    check = true;
    solarInverter.style.display = "block";
  } else {
    forgotPass.style.display = "block";
    check = false;
    solarInverter.style.display = "none";
  }
});
