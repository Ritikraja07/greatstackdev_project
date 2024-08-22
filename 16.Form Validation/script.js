var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*(\s[A-Za-z]*){1,}$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #42d30d;"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "Phone number should be 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits are required";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #42d30d;"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.innerHTML = "Invalid email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #42d30d;"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;

    if (message.length == 0) {
        messageError.innerHTML = "Message is required";
        return false;
    }

    if (left > 0) {
        messageError.innerHTML = left + " more characters are required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #42d30d;"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validatePhone() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix the above errors";
        setTimeout(function() {
            submitError.style.display = "none";
        }, 3000);
        return false;
    }

    // Form is submitted successfully
    alert("Form submitted successfully!");
    return true;
}