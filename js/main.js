var firstNameElement = document.getElementById("firstName");
var secondNameElement = document.getElementById("lastName");

function yourName() {
    var firstName = firstNameElement.value;
    var lastName = secondNameElement.value;
    var errorFirstName = document.getElementById("firstNameError");
    var errorSecondName = document.getElementById("secondNameError");
    
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

var buttonList = document.querySelectorAll(".submitName");

buttonList[0].onclick = yourName;
buttonList[1].onclick = yourName;

