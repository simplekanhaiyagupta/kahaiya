

function validateForm() {
    
    var name  = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var nameError = document.getElementById("nameError");
    var usernameError = document.getElementById("username-error");
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");
     
     

    // Reset error messages
    nameError.innerHTML = ""; 
    usernameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";


    // Username validation (minimum length of 3 characters)
    if (username.length < 3) {
        usernameError.innerText = "Username must be at least 3 characters long";
        return false;
    }
     

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.innerText = "Invalid email address";
        return false;
    }

    // Password validation (minimum length of 6 characters)
    if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters long";
        return false;
    }
    else if(password.length>6){ 
        passwordError.innerHTML = "Password must be at greater 6 characters ";
        return false;
    }
      
    
    return true;
}