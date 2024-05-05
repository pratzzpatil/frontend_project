


var signupModal = document.getElementById('signupModal');
var signinModal = document.getElementById('signinModal');


var signupBtn = document.querySelector('.signup');
var signinBtn = document.querySelector('.signin');
var signupCloseBtn = document.querySelector('#signupModal .close');
var signinCloseBtn = document.querySelector('#signinModal .close');
var signupLink = document.querySelector('.signup-link');

signupBtn.onclick = function() {
    signupModal.style.display = 'block';
}


signupCloseBtn.onclick = function() {
    signupModal.style.display = 'none';
}


signinBtn.onclick = function() {
    signinModal.style.display = 'block';
}


signinCloseBtn.onclick = function() {
    signinModal.style.display = 'none';
}


signupLink.onclick = function() {
    signinModal.style.display = 'none';
    signupModal.style.display = 'block';
}


window.onclick = function(event) {
    if (event.target == signupModal) {
        signupModal.style.display = 'none';
    }
    if (event.target == signinModal) {
        signinModal.style.display = 'none';
    }
}
