var firstNameElement = document.getElementById("firstName");
var secondNameElement = document.getElementById("lastName");
var errorFirstName = document.getElementById("firstNameError");
var errorSecondName = document.getElementById("secondNameError");

function yourName() {
    var firstName = firstNameElement.value;
    var lastName = secondNameElement.value;
    
    if (!firstName) {
        errorFirstName.innerHTML = "Please enter your first name.";
    } else {
        errorFirstName.innerHTML = "";
    }
    
    if (!lastName) {
        errorSecondName.innerHTML = "Please enter your last name.";
    } else {
        errorSecondName.innerHTML = "";
    }
    
    document.getElementById("nameValues").innerHTML = firstName + " " + lastName;
}

var submitNames = document.querySelectorAll(".submitName");

for (i = 0; i < submitNames.length; i++) {
    var el = submitNames[i];
    el.addEventListener("click", yourName, false);    
}

var resetButton = document.getElementById("resetForm");
resetButton.addEventListener("click", reset, false);

function reset() {
    errorFirstName.innerHTML = "";
    errorSecondName.innerHTML = "";
    document.getElementById("nameValues").innerHTML = "";
    firstNameElement.value = "";
    secondNameElement.value = "";
}