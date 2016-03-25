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

var buttonList = document.querySelectorAll(".submitName");

for(var i = 0; i < buttonList.length; i++) {
   buttonList[i].onclick = yourName;
}


