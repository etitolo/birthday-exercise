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

var contentContainer = document.querySelectorAll(".content")[0];
contentContainer.addEventListener("click", function(evt) { 
  var elementSelector = evt.target.className;
  switch(elementSelector) {
      case "submitName":
        yourName();
      break;
    case "resetForm":
      reset();
      break;
  }
                                                         }, false);

function reset() {
    errorFirstName.innerHTML = "";
    errorSecondName.innerHTML = "";
    document.getElementById("nameValues").innerHTML = "";
    firstNameElement.value = "";
    secondNameElement.value = "";
}