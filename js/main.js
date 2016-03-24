function yourName() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    
    if (!firstName) {
        document.getElementById("firstNameError").innerHTML = "Please enter your first name.";
    } else {
        document.getElementById("firstNameError").innerHTML = "";
    }
    
    if (!lastName) {
        document.getElementById("secondNameError").innerHTML = "Please enter your last name.";
    } else {
        document.getElementById("secondNameError").innerHTML = "";
    }
    
    document.getElementById("nameValues").innerHTML = firstName + " " + lastName;
}

var buttonList = document.querySelectorAll(".submitName");

buttonList[0].onclick = function() {yourName();};
buttonList[1].onclick = function() {yourName();};

