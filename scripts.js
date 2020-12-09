//Imports.
import {updateTable, clearInputs} from "./functions.js";
import {form, name, email, message, submit,
        clear, error, tbody, template, information} from "./variables.js";

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
     message.value.trim() !== "")
  {
    //Declare class.
    information.unshift(new info(name.value, email.value, message.value));

    //Show output.
    console.log(information[0]);

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
  //Call function.
  clearInputs();
});
