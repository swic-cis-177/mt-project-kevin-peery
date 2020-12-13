//Imports.
import {updateTable, clearInputs, addOrChange} from "./functions.js";
import {form, name, email, message, submit, clear,
        error, tbody, template, information, selectedRow} from "./variables.js";

//Class.
class info {
  constructor(_name, _email, _message) {
    this.name = _name;
    this.email = _email;
    this.message = _message;
  }
};

//Set focus.
name.focus();

//Event.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Determine.
  if(name.value.trim() !== "" &&
     email.value.trim() !== "" &&
     message.value.trim() !== "") {
    //Declare class.
    const inform = new info(name.value, email.value, message.value);

    //Determine how to add to array.
    if(submit.textContent.includes("Submit")) {
      information.unshift(inform);
    }
    else {
    //Toggle properties.
    selectedRow.content.dataset.info = "false";

    information.splice(selectedRow.index, 1, inform);

      //Call function.
      addOrChange();
    }

    //Show output.
    console.log(information);

    //Call functions.
    updateTable();
    clearInputs();
  }
  else
  {
    //Display error message.
    error.textContent = "Enter a name, e-mail, and message.";
  }

});

//Event.
clear.addEventListener("click", (event) => {
  //Determine.
  if(clear.textContent.includes("Clear")) {
    //Call function.
    clearInputs();
  }
  else {
    //Toggle properties.
    selectedRow.content.dataset.info = "false";

    //Remove from array.
    information.splice(selectedRow.index, 1);

    //Call functions.
    updateTable();
    clearInputs();
    addOrChange();
  }
});

//Event.
tbody.addEventListener("click", ({target}) => {
  console.log(target.parentNode);

  //html element.
  const tRows = tbody.querySelectorAll("tr");

  //Assign variables.
  selectedRow.content = target.parentNode;
  selectedRow.index = Array.from(tRows).indexOf(target.parentNode);

  //Determine to toggle properties.
  if(selectedRow.content.dataset.info === "true") {
    selectedRow.content.dataset.info = "false";
  }
  else {
    tRows.forEach((tRow) => {
      tRow.dataset.info = "false";
    });
    selectedRow.content.dataset.info = "true";
  }

  //Call function.
  addOrChange();
});