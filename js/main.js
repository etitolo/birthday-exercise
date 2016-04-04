
var formContainer = document.querySelector(".formContainer");


function injectForm(containerNode) {
    var buildNameWrapper = document.createElement("div");
    buildNameWrapper.setAttribute("class", "nameWrapper");
    buildNameWrapper.innerHTML = "<p class=\"error firstNameError\"></p><p class=\"error secondNameError\"></p><label>First* <input type=\"text\" class=\"firstName\"></label><label>Last* <input type=\"text\" class=\"lastName\"></label><button class=\"submitName\">Submit</button><button class=\"resetForm\">Reset</button><p class=\"nameValues\"></p>";
    containerNode.appendChild(buildNameWrapper);
}

function reset(parentNode) {
  var errors = parentNode.querySelectorAll(".error"),
      inputFileds = parentNode.querySelectorAll("input"),
      count;
  for (count = 0; count < errors.length; count++ ) {
    errors[count].innerHTML = "";
  }
  for (count = 0; count < inputFileds.length; count++ ) {
    inputFileds[count].value = "";
  }
}

function handleSubmit(parentNode) {
    var firstNameElement = parentNode.querySelector(".firstName"),
        secondNameElement = parentNode.querySelector(".lastName"),
        errorFirstName = parentNode.querySelector(".firstNameError"),
        errorSecondName = parentNode.querySelector(".secondNameError"),
        firstName = firstNameElement.value,
        lastName = secondNameElement.value;    
    if (!firstName){
        errorFirstName.innerHTML = "Please enter your first name.";
    } else {
        errorFirstName.innerHTML = "";
    }
    if (!lastName){
        errorSecondName.innerHTML = "Please enter your last name.";
    } else {
        errorSecondName.innerHTML = "";
    }
    parentNode.querySelector(".nameValues").innerHTML = firstName + " " + lastName;
}

function registerEventListners() {
  var addButton = document.querySelector(".addName");

  addButton.addEventListener("click", function(evt){
     injectForm(formContainer);
  });

  formContainer.addEventListener("click", function(evt){
    var targetClassName = evt.target.className,
        parentNode = evt.target.parentElement;
    
    switch(targetClassName) {
      case "submitName":
        handleSubmit(parentNode);
        break;
      case "resetForm":
        reset(parentNode);
        break;
    }          
  });
}

function initialize() {
  var addButton =  document.createElement("div"),
      buttonContainer = document.querySelector(".buttonContainer");
  addButton.innerHTML = "<button class=\"addName\">Add</button>";
  
  buttonContainer.appendChild(addButton);

  injectForm(formContainer);
}

initialize();
registerEventListners();



