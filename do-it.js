let myArray = JSON.parse(localStorage.getItem("storage")) || [
  {
    //an array of objects
    name: "What to do ?",
    dueDate: "1-1-2025",
  },
  {
    name: "Add a Task",
    dueDate: "1-1-2025",
  },
];
renderTodoList(); // calling to display(now goes to : access function)

function renderTodoList() {
  // to display the inputs
  let empty = "";

  for (let i = 0; i < myArray.length; i++) {
    const containerObject = myArray[i]; // consists of name and dueDate
    const { name, dueDate } = containerObject; // = -> const name = containerObject.name;
    const html = `
      <div>${name}</div>  <!-- because CSS we seperate them with divs cuz <p> is a block-->
      <div>${dueDate}</div>
      <button class="delete-button js-delete-button" >Delete</button>
    `;
    empty += html; // a+b = ab !!~ here we saved tha name , date , and delete button
  }
  document.querySelector(".display").innerHTML = empty; //DISPLAY these 3 elements above
  // after displaying delete button , here making the delete button work.
  document
    .querySelectorAll(".js-delete-button")
    .forEach((deleteButton, index) => {
      // (   ()=>{ }  ) delete button is just name for elements (listenerAll gives index to buttons)

      deleteButton.addEventListener("click", () => {
        myArray.splice(index, 1); // delete i element
        localStorage.removeItem("storage(i)");
        localStorage.setItem("storage", JSON.stringify(myArray));
        renderTodoList(); // After deleting we shall display that deleted
      });
    });
}

document.querySelector(".add-button").addEventListener("click", () => {
  addTodo();
});
function addTodo() {
  // adding new element to array
  const inputElement = document.querySelector(".input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".date-js");
  const dueDate = dateInputElement.value;

  //myArray.push(save); -> instead of just a name , we are adding an objrct with name and duedate
  myArray.push({
    name, //its shorthand property thats why written that way cuz they have same name
    dueDate, //originally it was name : name , dueDate : duedate
  });
  localStorage.setItem("storage", JSON.stringify(myArray));
  inputElement.value = "";

  renderTodoList(); //after adding, now displaying
}

// 10/13/2025
