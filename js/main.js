function yourName() {
  var nameCount = document.querySelectorAll(".nameWrapper").length;
  for (var i=0; i < nameCount; i++) {
    var firstNameElement = document.querySelectorAll(".firstName")[i];
    var secondNameElement = document.querySelectorAll(".lastName")[i];
    var errorFirstName = document.querySelectorAll(".firstNameError")[i];
    var errorSecondName = document.querySelectorAll(".secondNameError")[i];
    var firstName = firstNameElement.value;
    var lastName = secondNameElement.value;    
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
    document.querySelectorAll(".nameValues")[i].innerHTML = firstName + " " + lastName;
  }
}

var contentContainer = document.querySelectorAll(".content")[0];
contentContainer.addEventListener("click", function(evt){ 
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
    var nameCount = document.querySelectorAll(".nameWrapper").length;
    for (var i=0; i < nameCount; i++) {
      var firstNameElement = document.querySelectorAll(".firstName")[i];
      var secondNameElement = document.querySelectorAll(".lastName")[i];
      var errorFirstName = document.querySelectorAll(".firstNameError")[i];
      var errorSecondName = document.querySelectorAll(".secondNameError")[i];
      errorFirstName.innerHTML = "";
      errorSecondName.innerHTML = "";
      document.querySelectorAll(".nameValues")[i].innerHTML = "";
      firstNameElement.value = "";
      secondNameElement.value = "";
    }
}

function nameForm() {
    var buildNameWrapper = document.createElement("div");
    buildNameWrapper.setAttribute('class', 'nameWrapper');
    buildNameWrapper.insertAdjacentHTML('beforeend', '<p class=\"error firstNameError\"></p><p class=\"error secondNameError\"></p>');
    buildNameWrapper.insertAdjacentHTML("beforeend","<label>First* <input type=\"text\" class=\"firstName\"></label><label>Last* <input type=\"text\" class=\"lastName\"></label>");
    var nameCount = document.querySelectorAll(".nameWrapper").length;
    var addButton = nameCount === 0 ? "<button class=\"addName\">Add</button>" : "";
    buildNameWrapper.insertAdjacentHTML("beforeend","<button class=\"submitName\">Submit</button>" + addButton + "<button class=\"resetForm\">Reset</button>" );
    buildNameWrapper.insertAdjacentHTML("beforeend","<p class=\"nameValues\"></p>");
    contentContainer.appendChild(buildNameWrapper);
} nameForm();


function addName(){
  nameForm();
}

