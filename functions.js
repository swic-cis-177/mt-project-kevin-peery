//Imports.
import {form, name, email, message, submit, clear,
        error, tbody, template, information, selectedRow} from "./variables.js";


//Export function.
export const updateTable = () => {
  //Loop to clear nodes.
  while(tbody.hasChildNodes()) {
    tbody.removeChild(tbody.firstChild);
  }

  //Determine to toggle properties.
  if(information.length > 0) {
    tbody.parentNode.style.visibility = "visible";

    //Loop.
    information.forEach((info) => {
      //Clone node.
      const newRow = template.content.cloneNode(true);
      const newCells = newRow.querySelectorAll("td");

      //Loop to assign values.
      let v = 0;
      for(let value in info) {
        newCells[v].textContent = info[value];

        //Increment.
        v++;
      };

      //Append node.
      tbody.appendChild(newRow);
    });
  }
  else {
    tbody.parentNode.style.visibility = "hidden";
  }
};

//Export function.
export const clearInputs = () => {
  //Clear inputs.
  name.value = "";
  email.value = "";
  message.value = "";

  //Clear error message.
  error.textContent = "";

  //Reset focus.
  name.focus();
};

//Export function.
export const addOrChange = () => {
  //Determine.
  if(selectedRow.content.dataset.info === "true") {
    //Toggle properties.
    name.value = selectedRow.content.querySelector("td").textContent;
    email.value = selectedRow.content.
                  querySelector("td:nth-child(2)").textContent;
    message.value = selectedRow.content.
                    querySelector("td:nth-child(3)").textContent;
    submit.textContent = "Change info";
    clear.textContent = "Remove from list";

    //Set focus.
    name.focus();
  }
  else {
    //Call function.
    clearInputs();

    //Toggle properties.
    submit.textContent = "Submit info";
    clear.textContent = "Clear";
  }
};