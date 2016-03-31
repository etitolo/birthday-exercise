var firstNameElement = document.querySelectorAll(".firstName")[0];
var secondNameElement = document.querySelectorAll(".lastName")[0];
var errorFirstName = document.querySelectorAll(".firstNameError")[0];
var errorSecondName = document.querySelectorAll(".secondNameError")[0];

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
    document.querySelector(".nameValues").innerHTML = firstName + " " + lastName;
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
    case "addName":
      addName();
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

function nameForm() {
    var buildNameWrapper = document.createElement("div");
    buildNameWrapper.setAttribute('class', 'nameWrapper');
    contentContainer.appendChild(buildNameWrapper);
    
    var nameWrapper = document.querySelector(".nameWrapper");
    
    nameWrapper.insertAdjacentHTML('beforeend', '<p class=\"error firstNameError\"></p><p class=\"error secondNameError\"></p>');

    nameWrapper.insertAdjacentHTML("beforeend","<label>First* <input type=\"text\" class=\"firstName\"></label><label>Last* <input type=\"text\" class=\"lastName\"></label>");
    
    var addButton = "<button class=\"addName\">Add</button>";
    nameWrapper.insertAdjacentHTML("beforeend","<button class=\"submitName\">Submit</button>" + addButton + "<button class=\"resetForm\">Reset</button>" );
    
    nameWrapper.insertAdjacentHTML("beforeend","<p class=\"nameValues\"></p>");
    
} nameForm();

function addName(){
  nameForm();
}

