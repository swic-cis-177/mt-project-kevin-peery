//HTML elements.
const index = {
  name: document.querySelector("#name"),
  email: document.querySelector("#mail"),
  message: document.querySelector("#msg"),
  submit: document.querySelector("form"),
  error: document.querySelector("#error"),
  table: {
    self: document.querySelector("table"),
    rows: [
      {
        row: document.querySelector("#one"),
        cells: [
          document.querySelector("#one-one"),
          document.querySelector("#one-two"),
          document.querySelector("#one-three")
        ]
      },
      {
        row: document.querySelector("#two"),
        cells: [
          document.querySelector("#two-one"),
          document.querySelector("#two-two"),
          document.querySelector("#two-three")
        ]
      },
      {
        row: document.querySelector("#three"),
        cells: [
          document.querySelector("#three-one"),
          document.querySelector("#three-two"),
          document.querySelector("#three-three")
        ]
      },
      {
        row: document.querySelector("#four"),
        cells: [
          document.querySelector("#four-one"),
          document.querySelector("#four-two"),
          document.querySelector("#four-three")
        ]
      },
      {
        row: document.querySelector("#five"),
        cells: [
          document.querySelector("#five-one"),
          document.querySelector("#five-two"),
          document.querySelector("#five-three")
        ]
      },
      {
        row: document.querySelector("#six"),
        cells: [
          document.querySelector("#six-one"),
          document.querySelector("#six-two"),
          document.querySelector("#six-three")
        ]
      },
      {
        row: document.querySelector("#seven"),
        cells: [
          document.querySelector("#seven-one"),
          document.querySelector("#seven-two"),
          document.querySelector("#seven-three")
        ]
      },
      {
        row: document.querySelector("#eight"),
        cells: [
          document.querySelector("#eight-one"),
          document.querySelector("#eight-two"),
          document.querySelector("#eight-three")
        ]
      },
      {
        row: document.querySelector("#nine"),
        cells: [
          document.querySelector("#nine-one"),
          document.querySelector("#nine-two"),
          document.querySelector("#nine-three")
        ]
      },
      {
        row: document.querySelector("#ten"),
        cells: [
          document.querySelector("#ten-one"),
          document.querySelector("#ten-two"),
          document.querySelector("#ten-three")
        ]
      }
    ]
  }
}

//Class.
class info {
  constructor(_name, _email, _message) {
    this.name = _name;
    this.email = _email;
    this.message = _message;
  }
};

//Function.
function updateTable(inform) {
  //Toggle properties.
  index.table.self.style.visibility = "visible";

  //Loop.
  for(let r = index.table.rows.length - 1; r >= 1; r--)
  {
    for(let c = 0; c < index.table.rows[r].cells.length; c++)
    {
      //Update elements.
      index.table.rows[r].cells[c].textContent =
      index.table.rows[r - 1].cells[c].textContent;
    }

    //Determine to toggle properties.
    if(index.table.rows[r].cells[0].textContent === "")
    {
      index.table.rows[r].row.style.visibility = "hidden";
    }
    else
    {
      index.table.rows[r].row.style.visibility = "visible";
    }
  }

  //Loop to assign elements.
  let ce = 0;
  for(let value in inform)
  {
    index.table.rows[0].cells[ce].textContent = inform[value];

    //Increment.
    ce++;
  }
}

//Array.
let information = [];

//Set focus.
index.name.focus();

//Event.
index.submit.addEventListener("submit", e => {
  e.preventDefault();

  //Determine.
  if(index.name.value.trim() !== "" &&
     index.email.value.trim() !== "" &&
     index.message.value.trim() !== "")
  {
    //Declare class.
    const inform = new info(index.name.value, index.email.value, index.message.value);

    //Add to array.
    information.push(inform);

    //Show output.
    console.log(information);

    //Call function.
    updateTable(inform);

    //Clear inputs.
    index.name.value = "";
    index.email.value = "";
    index.message.value = "";

    //Clear error message.
    index.error.textContent = "";
  }
  else
  {
    //Display error message.
    index.error.textContent = "Enter a name, e-mail, and message.";
  }

  //Reset focus.
  index.name.focus();
})
