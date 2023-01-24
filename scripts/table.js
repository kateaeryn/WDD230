

document.querySelector('#submit_button').onclick = function () {
  var fullName = document.getElementsByName('name');
var email = document.getElementByName('email');
var rate = document.getElementByName('r');
var username = document.getElementByName('username');
    console.log(fullName, email, rate, username);
fullName = document.getElementById('name').value;
email = document.getElementById('email').value;
rate = document.getElementById('rate').value;
username = document.getElementById('username').value;  

    return false;


}

