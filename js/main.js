function signInOn() {
  signUpOff();
  document.getElementById("sign-in-overlay").style.display = "block";
  document.getElementById("blur-overlay").style.display = "block";
  document.getElementById("body").classList.add("stop-scrolling");
}

function signInoff() {
  document.getElementById("sign-in-overlay").style.display = "none";
  document.getElementById("blur-overlay").style.display = "none";
  document.getElementById("body").classList.remove("stop-scrolling");
}

function signUpOn() {
  signInoff();
  document.getElementById("sign-up-overlay").style.display = "block";
  document.getElementById("blur-overlay").style.display = "block";
  document.getElementById("body").classList.add("stop-scrolling");
}

function signUpOff() {
  document.getElementById("sign-up-overlay").style.display = "none";
  document.getElementById("blur-overlay").style.display = "none";
  document.getElementById("body").classList.remove("stop-scrolling");
}
