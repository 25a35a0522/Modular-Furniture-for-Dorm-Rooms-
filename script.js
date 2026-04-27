let isLoggedIn = false;

function showHome(){
  document.getElementById("home").style.display = "flex";
  document.getElementById("products").style.display = "none";
  document.getElementById("feedback").style.display = "none";
}

function showPage(pageId){
  document.getElementById("home").style.display = "none";
  document.getElementById("products").style.display = "none";
  document.getElementById("feedback").style.display = "none";
  document.getElementById(pageId).style.display = "block";
}

function openLogin(){
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeLogin(){
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "auto";
}

function validateLogin(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");

  let emailPattern = /^[A-Za-z]+@gmail\.com$/;
  let passwordPattern = /^[A-Za-z]+$/;

  if(!emailPattern.test(email)){
    error.innerText = "Invalid Email!";
    return;
  }

  if(!passwordPattern.test(password)){
    error.innerText = "Password only alphabets!";
    return;
  }

  isLoggedIn = true;
  closeLogin();
  showPage("products");
}

function openProducts(){
  if(!isLoggedIn){
    openLogin();
  } else {
    showPage("products");
  }
}